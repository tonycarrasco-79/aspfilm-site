import { useEffect, useRef, useState, type FormEvent } from "react";

import { submitInquiry } from "@/lib/api/inquiry.functions";
import { PROJECT_TYPE_EVENT, PROJECT_TYPES } from "@/lib/inquiry-types";

import "./site.css";
import { REEL_URL, TEXAS_URL } from "./sections-top";

export function EmmyStrip() {
  return (
    <section className="asp-emmys" aria-label="Emmy record">
      <div className="asp-wrap asp-emmys__grid">
        <div className="asp-emmys__big">
          <b>18</b>
          <span>Los Angeles Area Emmy nominations for California Stories</span>
        </div>
        <div className="asp-stat">
          <b>3</b>
          <span>LA Area Emmy wins for the series</span>
        </div>
        <div className="asp-stat">
          <b>4</b>
          <span>Daytime Emmys between our two founders</span>
        </div>
        <div className="asp-stat">
          <b>2007</b>
          <span>The year Anaconda Street opened its doors</span>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { icon: "script", title: "Showrunning and scripting", body: "Development, writing and showrunning for series, specials and branded work." },
  { icon: "camera", title: "Crew and production", body: "In-house camera, lighting and grip packages, a production van and seasoned crews." },
  { icon: "timeline", title: "Post-production", body: "In-person and remote edit suites, with media stored on our own secure server." },
  { icon: "spark", title: "Motion graphics and sizzles", body: "Show packages, title design and sizzle reels that sell the idea." },
  { icon: "headset", title: "Junkets, premieres and events", body: "Press junkets, premiere coverage and set visits with A\u2011list talent." },
  { icon: "mic", title: "BTS, EPKs and social", body: "Behind-the-scenes content, electronic press kits and social campaigns cut for every platform." },
];

export function Services() {
  return (
    <section id="services" className="asp-services" aria-labelledby="services-h">
      <div className="asp-wrap asp-services__grid">
        <figure className="asp-services__img">
          <img src="/assets/img/services.webp" alt="Anaconda Street Productions crew on set" loading="lazy" />
        </figure>
        <div>
          <h2 id="services-h" className="asp-h2">Video production services, all in-house.</h2>
          <p className="asp-lede">
            With a full-time production and post team, our own equipment and comprehensive insurance, we can take on
            large-scale productions quickly and cost-effectively.
          </p>
          <ul className="asp-svc">
            {SERVICES.map((s) => (
              <li key={s.title}>
                <img src={`/assets/icons/${s.icon}.png`} alt="" width={40} height={40} loading="lazy" />
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="asp-facilities">Production offices / Camera, lighting and grip / Production van / Edit suites</p>
        </div>
      </div>
    </section>
  );
}

export function Founders() {
  return (
    <section id="about" className="asp-founders" aria-labelledby="founders-h">
      <div className="asp-wrap">
        <h2 id="founders-h" className="asp-h2">Two showrunners. One company.</h2>
        <p className="asp-lede">
          Tony and Omar founded Anaconda Street in 2007 after years in network and syndicated television, and they
          still lead every project from concept to completion.
        </p>
        <figure className="asp-founders__then">
          <img src="/assets/img/founders-bw.webp" alt="The Anaconda Street team in an edit suite in the company's early days" width={1800} height={1350} loading="lazy" />
        </figure>
        <div className="asp-founders__pair">
          <article className="asp-founder">
            <img className="asp-founder__photo" src="/assets/img/tony.webp" alt="Tony Carrasco, co-founder of Anaconda Street Productions" width={589} height={800} loading="lazy" />
            <h3>Tony Carrasco</h3>
            <p className="asp-founder__role">Co-founder / Executive producer, showrunner, editor</p>
            <ul>
              <li><strong>Daytime Emmy winner</strong> and 3x Los Angeles Area Emmy winner</li>
              <li>Producer and lead editor, Extra (Warner Bros. Television), 2005 to 2020</li>
              <li>Showrunner, director and editor, Christmas on the Farm with Jill Wagner and Family</li>
              <li>LA Press Club Award recipient</li>
            </ul>
          </article>
          <article className="asp-founder">
            <img className="asp-founder__photo" src="/assets/img/omar.webp" alt="Omar Lugones, co-founder of Anaconda Street Productions" width={576} height={800} loading="lazy" />
            <h3>Omar Lugones</h3>
            <p className="asp-founder__role">Co-founder / Executive producer, showrunner, writer</p>
            <ul>
              <li><strong>3x Daytime Emmy winner</strong> and 3x Los Angeles Area Emmy winner</li>
              <li>Co-executive producer, Red Table Talk and Red Table Talk: The Estefans</li>
              <li>Senior producer, Extra (Warner Bros. Television), 2005 to 2020</li>
              <li>LA Press Club and Genesis Award recipient</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export const FAQS = [
  {
    q: "Where is Anaconda Street Productions based?",
    a: "We’re a Los Angeles-based video production company, with ASP Texas serving Dallas-Fort Worth and a presence in New York City. Our crews shoot anywhere in the country.",
  },
  {
    q: "Do you take on small projects?",
    a: "Yes. We produce network series and also short films for schools, nonprofits, public agencies and small businesses, with the same crew on every job.",
  },
  {
    q: "What kinds of video do you produce?",
    a: "Unscripted series, documentaries, specials, branded content, commercials, corporate video, sizzle reels, EPKs, press junket and event coverage, and social video.",
  },
  {
    q: "Do you handle the whole project?",
    a: "Yes. We develop, write, shoot, edit and deliver in-house, with our own camera, lighting and grip packages and our own edit suites.",
  },
  {
    q: "Are you a certified minority-owned business?",
    a: "Yes. Anaconda Street Productions is a Minority Business Enterprise certified by the National Minority Supplier Development Council.",
  },
  {
    q: "How do I start a project?",
    a: "Call 562-945-8537, email production@aspfilm.com, or send your project details through the form on this page.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="asp-faq" aria-labelledby="faq-h">
      <div className="asp-wrap asp-faq__grid">
        <h2 id="faq-h" className="asp-h2">Questions clients ask</h2>
        <dl className="asp-faq__list">
          {FAQS.map((f) => (
            <div key={f.q} className="asp-faq__item">
              <dt>{f.q}</dt>
              <dd>{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

// Booking link for 15-minute intro calls (Calendly or similar). Until it is set,
// the button opens an email to the production team instead.
const BOOKING_URL = "https://calendar.app.google/Q5Z9eS4YhTRjrTaR6";
const CALL_HREF =
  BOOKING_URL || "mailto:production@aspfilm.com?subject=" + encodeURIComponent("Book a 15-minute call");

type SendState = "idle" | "sending" | "sent" | "failed";

export function Contact() {
  const [type, setType] = useState(PROJECT_TYPES[0]);
  const [error, setError] = useState<string | null>(null);
  const [state, setState] = useState<SendState>("idle");
  const thanksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPick(e: Event) {
      const picked = (e as CustomEvent<string>).detail;
      if (PROJECT_TYPES.includes(picked)) setType(picked);
    }
    window.addEventListener(PROJECT_TYPE_EVENT, onPick);
    return () => window.removeEventListener(PROJECT_TYPE_EVENT, onPick);
  }, []);

  useEffect(() => {
    if (state === "sent") thanksRef.current?.focus();
  }, [state]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const name = get("name");
    const email = get("email");
    if (!name || !email) {
      setError("Add your name and email so we can reply.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("That email address doesn't look right.");
      return;
    }
    setError(null);
    setState("sending");
    try {
      await submitInquiry({
        data: {
          name,
          email,
          org: get("org"),
          type,
          budget: get("budget"),
          timeline: get("timeline"),
          message: get("message"),
          website: get("website"),
        },
      });
      setState("sent");
    } catch {
      setState("failed");
    }
  }

  return (
    <section id="contact" className="asp-contact" aria-labelledby="contact-h">
      <div className="asp-wrap asp-contact__grid">
        <div>
          <p className="asp-eyebrow">Start a project</p>
          <h2 id="contact-h" className="asp-contact__h">Tell us what you're making.</h2>
          <address className="asp-contact__info">
            <a href="tel:+15629458537">562-945-8537</a>
            <br />
            <a href="mailto:production@aspfilm.com">production@aspfilm.com</a>
            <br />
            Los Angeles, California
            <br />
            ASP Texas: <a href={TEXAS_URL} target="_blank" rel="noopener">aspfilmtexas.com</a>
          </address>
          <div className="asp-call">
            <p>Rather talk it through first?</p>
            <a className="asp-call__btn" href={CALL_HREF} {...(BOOKING_URL ? { target: "_blank", rel: "noopener" } : {})}>
              Book a 15-minute call
            </a>
          </div>
        </div>
        {state === "sent" ? (
          <div className="asp-form asp-form--done" ref={thanksRef} tabIndex={-1} role="status">
            <p className="asp-eyebrow">Request sent</p>
            <h3>Thank you. Your project details are with our production team.</h3>
            <p>We'll reply to the email address you gave us. If it's urgent, call 562-945-8537.</p>
          </div>
        ) : (
          <form className="asp-form" onSubmit={onSubmit} noValidate>
            <fieldset>
              <legend>What kind of project?</legend>
              <div className="asp-chips">
                {PROJECT_TYPES.map((t) => (
                  <button key={t} type="button" className="asp-chip" aria-pressed={type === t} onClick={() => setType(t)}>
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>
            <div className="asp-form__two">
              <label>
                <span>Name</span>
                <input name="name" autoComplete="name" required />
              </label>
              <label>
                <span>Organization</span>
                <input name="org" autoComplete="organization" />
              </label>
              <label>
                <span>Email</span>
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                <span>Budget range</span>
                <select name="budget" defaultValue="Not sure yet">
                  <option>Not sure yet</option>
                  <option>Under $10k</option>
                  <option>$10k to $50k</option>
                  <option>$50k to $150k</option>
                  <option>$150k+</option>
                </select>
              </label>
            </div>
            <label>
              <span>Timeline</span>
              <select name="timeline" defaultValue="Flexible">
                <option>Flexible</option>
                <option>Within a month</option>
                <option>1 to 3 months</option>
                <option>3+ months</option>
              </select>
            </label>
            <label>
              <span>Tell us about it</span>
              <textarea name="message" rows={4} />
            </label>
            <div
              aria-hidden="true"
              style={{ position: "absolute", left: "-10000px", top: "auto", width: 1, height: 1, overflow: "hidden", opacity: 0 }}
            >
              <input name="website" tabIndex={-1} autoComplete="off" />
            </div>
            {error ? <p className="asp-form__err" role="alert">{error}</p> : null}
            {state === "failed" ? (
              <p className="asp-form__err" role="alert">
                Something went wrong sending your request. Please email production@aspfilm.com or call 562-945-8537.
              </p>
            ) : null}
            <button type="submit" className="asp-send asp-send--plain" disabled={state === "sending"}>
              {state === "sending" ? "Sending..." : "Send project details"}
            </button>
            <p className="asp-form__note">Your details go straight to our production team.</p>
          </form>
        )}
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="asp-footer">
      <div className="asp-wrap asp-footer__row">
        <img src="/assets/brand/asp-logo.png" alt="Anaconda Street Productions" width={900} height={315} loading="lazy" />
        <span>© 2026 Anaconda Street Productions / Los Angeles, Dallas-Fort Worth and New York City</span>
        <nav aria-label="Social">
          <a href="https://www.instagram.com/asp_film/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.facebook.com/anacondastreet/" target="_blank" rel="noreferrer">Facebook</a>
          <a href={REEL_URL} target="_blank" rel="noopener">Vimeo</a>
          <a href={TEXAS_URL} target="_blank" rel="noopener">ASP Texas</a>
        </nav>
      </div>
    </footer>
  );
}
