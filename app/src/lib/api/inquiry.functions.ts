import process from "node:process";

import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { bindings } from "../bindings.server";
import { ESSENTIALS_TYPE } from "../inquiry-types";

const TO_DEFAULT = "production@aspfilm.com";
// aspfilm.com is verified in Resend, so the form sends from the company domain.
// Override with the INQUIRY_FROM variable if needed.
const FROM_DEFAULT = "ASP Website <website@aspfilm.com>";

const Inquiry = z.object({
  name: z.string().trim().min(1).max(120),
  org: z.string().trim().max(160).default(""),
  email: z.string().trim().email().max(200),
  type: z.string().trim().max(80),
  budget: z.string().trim().max(40).default(""),
  timeline: z.string().trim().max(40).default(""),
  message: z.string().trim().max(5000).default(""),
  // Honeypot: real visitors never see or fill this field.
  website: z.string().max(200).default(""),
});

const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();
const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const submitInquiry = createServerFn({ method: "POST" })
  .validator(Inquiry)
  .handler(async ({ data }) => {
    if (data.website) return { ok: true };

    const essentials = data.type === ESSENTIALS_TYPE;
    const who = oneLine(data.org ? `${data.name}, ${data.org}` : data.name);
    const subject = `${essentials ? "Essentials request" : "New project request"}: ${who}`;
    const rows: [string, string][] = [
      ["Name", data.name],
      ["Organization", data.org || "Not given"],
      ["Email", data.email],
      ["Project type", data.type],
      ["Budget", data.budget || "Not given"],
      ["Timeline", data.timeline || "Not given"],
    ];
    const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${data.message || "(No message)"}`;
    const html = `<table cellpadding="4">${rows
      .map(([k, v]) => `<tr><td><b>${esc(k)}</b></td><td>${esc(v)}</td></tr>`)
      .join("")}</table><p style="white-space:pre-wrap">${esc(data.message || "(No message)")}</p>`;

    let stored = false;
    const { DB } = bindings();
    if (DB) {
      try {
        await DB.prepare(
          "INSERT INTO inquiries (name, org, email, type, budget, timeline, message, subject) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        )
          .bind(data.name, data.org, data.email, data.type, data.budget, data.timeline, data.message, subject)
          .run();
        stored = true;
      } catch (err) {
        console.error("inquiry store failed", err);
      }
    }

    let emailed = false;
    const key = process.env.RESEND_API_KEY;
    if (key) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            from: process.env.INQUIRY_FROM || FROM_DEFAULT,
            to: [process.env.INQUIRY_TO || TO_DEFAULT],
            reply_to: data.email,
            subject,
            text,
            html,
          }),
        });
        emailed = res.ok;
        if (!res.ok) console.error("inquiry email failed", res.status, await res.text());
      } catch (err) {
        console.error("inquiry email failed", err);
      }
    } else {
      console.error("inquiry email skipped: RESEND_API_KEY is not set");
    }

    if (!stored && !emailed) throw new Error("We couldn't send your request.");
    return { ok: true };
  });
