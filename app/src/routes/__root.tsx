import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import "../components/site/site.css";
import { reportHiggsfieldError } from "../lib/higgsfield-error-reporting";
// Page metadata read at BUILD time from the committed app-meta.json.
import appMetaJson from "../app-meta.json";
import { scrollScrubTheme } from "../scroll-scrub-scenes";
import { FAQS } from "../components/site/sections-bottom";

declare const __HF_DESIGN_INSPECTOR__: boolean;

const SITE_URL = "https://www.aspfilm.com";
const DEFAULT_TITLE = "Anaconda Street Productions";
const DEFAULT_DESCRIPTION =
  "Emmy-winning Los Angeles production company making series, documentaries and branded content.";
const THEME_COLOR = scrollScrubTheme.background;

type AppMeta = {
  og_title?: string | null;
  og_description?: string | null;
  og_image_url?: string | null;
  favicon_url?: string | null;
  og_video_url?: string | null;
  // Read by the hosting platform only; never rendered.
  marketplace_cover_url?: string | null;
};

const appMeta = appMetaJson as AppMeta;

const APP_HOST_ZONES = ["higgsfield.app", "higgsfield-dev.app"];

function toOwnAssetUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  if (value.startsWith("/")) return value;
  try {
    const u = new URL(value);
    const isAppHost = APP_HOST_ZONES.some(
      (zone) => u.hostname === zone || u.hostname.endsWith(`.${zone}`),
    );
    if (isAppHost) return u.pathname + u.search;
    return value;
  } catch {
    return value;
  }
}

function buildHead(meta: AppMeta) {
  const title = meta.og_title ?? DEFAULT_TITLE;
  const description = meta.og_description ?? DEFAULT_DESCRIPTION;
  const ogImage = toOwnAssetUrl(meta.og_image_url);
  const favicon = toOwnAssetUrl(meta.favicon_url);
  const ogVideo = toOwnAssetUrl(meta.og_video_url);

  return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title },
      { name: "description", content: description },
      { name: "author", content: "Anaconda Street Productions" },
      { name: "theme-color", content: THEME_COLOR },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:locale", content: "en_US" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Anaconda Street Productions" },
      { name: "twitter:card", content: ogImage ? "summary_large_image" : "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      ...(ogImage
        ? [
            { property: "og:image", content: ogImage.startsWith("/") ? `${SITE_URL}${ogImage}` : ogImage },
            { property: "og:image:alt", content: "Anaconda Street Productions, Emmy-winning video production in Los Angeles" },
            { property: "og:image:width", content: "1200" },
            { property: "og:image:height", content: "630" },
            { name: "twitter:image", content: ogImage.startsWith("/") ? `${SITE_URL}${ogImage}` : ogImage },
          ]
        : []),
      ...(ogVideo ? [{ property: "og:video", content: ogVideo }] : []),
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" as const },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&family=Geist+Mono:wght@400;500&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      ...(favicon ? [{ rel: "icon", type: "image/png", sizes: "32x32", href: favicon }] : []),
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["Organization", "LocalBusiness"],
              "@id": `${SITE_URL}/#org`,
              name: "Anaconda Street Productions",
              alternateName: ["ASP", "ASP Film", "Anaconda Street"],
              url: `${SITE_URL}/`,
              logo: `${SITE_URL}/assets/brand/asp-logo.png`,
              image: `${SITE_URL}/assets/brand/og.jpg`,
              description,
              slogan: "Stories that find their audience.",
              foundingDate: "2007",
              founder: [
                { "@type": "Person", name: "Tony Carrasco", jobTitle: "Co-founder, Executive Producer" },
                { "@type": "Person", name: "Omar Lugones", jobTitle: "Co-founder, Executive Producer" },
              ],
              email: "production@aspfilm.com",
              telephone: "+1-562-945-8537",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "11823 Slauson Avenue, Unit 28",
                addressLocality: "Santa Fe Springs",
                addressRegion: "CA",
                postalCode: "90670",
                addressCountry: "US",
              },
              areaServed: [
                { "@type": "City", name: "Los Angeles" },
                { "@type": "State", name: "California" },
                { "@type": "Place", name: "Dallas-Fort Worth, Texas" },
                { "@type": "Country", name: "United States" },
              ],
              award: [
                "Daytime Emmy Award",
                "Los Angeles Area Emmy Award",
                "LA Press Club Award",
              ],
              knowsAbout: [
                "Video production",
                "Television production",
                "Documentary production",
                "Branded content",
                "Corporate video",
                "Commercial production",
                "Post-production",
                "Showrunning",
                "Press junkets",
                "Social media video",
              ],
              sameAs: [
                "https://aspfilmtexas.com",
                "https://www.instagram.com/asp_film/",
                "https://www.facebook.com/anacondastreet/",
                "https://vimeo.com/anacondastreet",
              ],
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: `${SITE_URL}/`,
              name: "Anaconda Street Productions",
              publisher: { "@id": `${SITE_URL}/#org` },
            },
            {
              "@type": "FAQPage",
              mainEntity: FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  };
}

function NotFoundComponent() {
  return (
    <main className="asp-404">
      <div>
        <h1 className="asp-h2">This scene got cut.</h1>
        <p className="asp-lede">The page you were looking for isn't here.</p>
        <p><a href="/">Back to the homepage</a></p>
      </div>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportHiggsfieldError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <main className="asp-404">
      <div>
        <h1 className="asp-h2">This page didn't load.</h1>
        <p className="asp-lede">Something went wrong on our end. Try again, or head back home.</p>
        <p>
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            style={{ background: "none", border: 0, color: "inherit", textDecoration: "underline", cursor: "pointer", font: "inherit", minHeight: 44 }}
          >
            Try again
          </button>{" "}
          <a href="/">Go home</a>
        </p>
      </div>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => buildHead(appMeta),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="default-dark" style={{ colorScheme: "dark" }}>
      <head>
        <HeadContent />
      </head>
      <body className="asp-body">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    if (!__HF_DESIGN_INSPECTOR__) {
      return;
    }

    void import("../module/design-inspector/runtime")
      .then(({ installHiggsfieldDesignInspector }) => {
        installHiggsfieldDesignInspector();
      })
      .catch((error) => {
        reportHiggsfieldError(
          error instanceof Error ? error : new Error("Failed to load design inspector"),
          {
            boundary: "higgsfield_design_inspector_import",
          },
        );
      });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
