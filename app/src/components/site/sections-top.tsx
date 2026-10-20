import { useEffect, useState, type ReactNode } from "react";

import "./site.css";

export const REEL_URL = "https://vimeo.com/1054668597/e2723cf0cb";
export const TEXAS_URL = "https://aspfilmtexas.com";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#podcasts", label: "Podcasts" },
  { href: "#essentials", label: "ASP Essentials" },
  { href: "#about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="asp-header" data-menu={open ? "open" : "closed"}>
      <div className="asp-wrap asp-header__row">
        <a className="asp-header__logo" href="#top" aria-label="Anaconda Street Productions, home">
          <img src="/assets/brand/asp-logo.png" alt="Anaconda Street Productions logo" width={900} height={315} />
        </a>
        <nav className="asp-header__links" aria-label="Main">
          {NAV.map((n) => (
            <a key={n.href} className="asp-navlink" href={n.href}>
              {n.label}
            </a>
          ))}
          <a className="asp-navlink" href={TEXAS_URL} target="_blank" rel="noopener">ASP Texas</a>
          <a className="asp-clapper" href="#contact">Start a project</a>
          <button
            type="button"
            className="asp-menu-btn"
            aria-expanded={open}
            aria-controls="asp-mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </nav>
      </div>
      <nav id="asp-mobile-nav" className="asp-mobile-nav" aria-label="Mobile" hidden={!open}>
        {NAV.map((n) => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
            {n.label}
          </a>
        ))}
        <a href={TEXAS_URL} target="_blank" rel="noopener" onClick={() => setOpen(false)}>
          ASP Texas <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}

export function HeroActions() {
  return (
    <div className="asp-hero-ctas">
      <a className="asp-viewfinder" href="#contact">
        <i aria-hidden="true" />
        <i aria-hidden="true" />
        <i aria-hidden="true" />
        <i aria-hidden="true" />
        Start a project
      </a>
      <a className="asp-readout" href={REEL_URL} target="_blank" rel="noopener">
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <path d="M3 1.5v11l9-5.5z" fill="currentColor" />
        </svg>
        <span>Watch the reel</span>
      </a>
    </div>
  );
}

// Official marks recolored to one ink. w = file width at 96px tall. Display
// height is balanced by area so wide wordmarks and compact badges read evenly.
const LOGOS = [
  { file: "nbc", name: "NBC", w: 392 },
  { file: "telemundo", name: "Telemundo", w: 114 },
  { file: "spectrum-news-1", name: "Spectrum News 1", w: 360 },
  { file: "apple-tv", name: "Apple TV", w: 190 },
  { file: "extra", name: "Extra", w: 290 },
  { file: "great-american-family", name: "Great American Family", w: 262 },
  { file: "facebook-watch", name: "Facebook Watch", w: 676 },
  { file: "lionsgate", name: "Lionsgate", w: 758 },
  { file: "wsvn", name: "Deco Drive on WSVN 7 Miami", w: 96 },
  { file: "sonifi", name: "Sonifi", w: 288 },
  { file: "ufc", name: "UFC", w: 277 },
  { file: "lafc", name: "LAFC", w: 399 },
  { file: "cuervo", name: "Jose Cuervo", w: 392 },
  { file: "tecate", name: "Tecate", w: 259 },
  { file: "jack-daniels", name: "Jack Daniel's", w: 141 },
  { file: "vmc", name: "VMC Cocktails", w: 251 },
  { file: "mountain-dew", name: "Mountain Dew", w: 123 },
  { file: "canon", name: "Canon", w: 459 },
  { file: "forbes", name: "Forbes", w: 383 },
  { file: "lucky-brand", name: "Lucky Brand", w: 1142 },
  { file: "hammitt", name: "Hammitt", w: 732 },
  { file: "venetian", name: "The Venetian Resort Las Vegas", w: 379 },
].map((l) => {
  const aspect = l.w / 96;
  const height = Math.round(Math.min(39, Math.max(16, Math.sqrt(1845 / aspect))));
  return { ...l, height, width: Math.round(height * aspect) };
});

function LogoRow({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden ? "true" : undefined}>
      {LOGOS.map((l) => (
        <li key={l.file}>
          <img
            src={`/assets/logos/${l.file}.png`}
            alt={hidden ? "" : `${l.name} logo`}
            width={l.width}
            height={l.height}
            style={{ width: l.width, height: l.height }}
            loading="lazy"
            decoding="async"
          />
        </li>
      ))}
    </ul>
  );
}

export function CreditsMarquee() {
  return (
    <section className="asp-marquee" aria-labelledby="clients-h">
      <h2 id="clients-h" className="asp-wrap asp-marquee__label">Networks, studios, shows, and brands our team has worked with:</h2>
      <div className="asp-marquee__track">
        <LogoRow />
        <LogoRow hidden />
      </div>
    </section>
  );
}

export function Audiences() {
  return (
    <section className="asp-audiences" aria-labelledby="audiences-h">
      <div className="asp-wrap">
        <p className="asp-eyebrow">What we do</p>
        <h2 id="audiences-h" className="asp-h2">Video production for stories big and small.</h2>
        <p className="asp-lede">
          We shape every project to fit your budget, not the other way around. No project is too big or too small
          for our Emmy-winning crew, from network specials to school fundraisers.
        </p>
        <div className="asp-bento">
          <a className="asp-door asp-door--net" href="#work">
            <img src="/assets/img/door-networks.webp" alt="Anaconda Street Productions on a network and streaming production" loading="lazy" />
            <h3>Networks and streamers</h3>
            <p>Series, specials and documentaries, from development and showrunning through final delivery. Approved vendor for Lionsgate.</p>
            <span className="asp-door__vine"><b aria-hidden="true" />See series work</span>
          </a>
          <a className="asp-door asp-door--brand" href="#more-work">
            <img src="/assets/img/door-brands.webp" alt="Anaconda Street Productions on a brand and agency shoot" loading="lazy" />
            <h3>Brands and agencies</h3>
            <p>Branded films, commercials, sizzles and social campaigns for clients like UFC, Cuervo, Jack Daniel's and Hammitt.</p>
            <span className="asp-door__vine"><b aria-hidden="true" />See brand work</span>
          </a>
          <a className="asp-door" href="#more-work">
            <img src="/assets/img/door-orgs.webp" alt="Anaconda Street Productions filming for a school, nonprofit or public agency" loading="lazy" />
            <h3>Schools, nonprofits and public agencies</h3>
            <p>Fundraising films, campaigns and social media series. NMSDC-certified MBE.</p>
            <span className="asp-door__vine"><b aria-hidden="true" />See community work</span>
          </a>
          <div className="asp-statement">
            <p>Big network or local nonprofit. Same crew.</p>
            <small>
              Based in Los Angeles, with teams in Dallas-Fort Worth (<a href={TEXAS_URL} target="_blank" rel="noopener">ASP Texas</a>)
              and New York City. We shoot anywhere.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}

const TV_WORK = [
  {
    title: "Christmas on the Farm",
    meta: "Great American Family / 2024",
    img: "/assets/img/poster-farm.webp",
    alt: "Christmas on the Farm with Jill Wagner and Family key art",
    poster: true,
    body: (
      <>
        Jill Wagner wanted a Christmas special with the warmth of her holiday movies and the honesty of a documentary.
        Within weeks, we were filming on her 200-acre farm in Tellico Plains, Tennessee.{" "}
        <em>Christmas on the Farm with Jill Wagner &amp; Family</em> premiered December 23, 2024, on Great American Family
        and Pure Flix.
      </>
    ),
    credit: "Executive produced by Tony Carrasco and Omar Lugones",
    links: [
      { label: "Watch the trailer", href: "https://vimeo.com/1061367953/c3f8622ae7" },
      { label: "Watch the full special", href: "https://vimeo.com/1041311417/8d92927680" },
    ],
  },
  {
    title: "California Stories",
    meta: "Spectrum News 1 / 2018 to now",
    img: "/assets/img/poster-stories.webp",
    alt: "LA Stories with Giselle Fernández key art",
    poster: true,
    body:
      "Since 2018 we have partnered with veteran broadcaster Giselle Fernández to bring new life to the long-form interview. The series has earned 18 Los Angeles Area Emmy nominations and 3 wins.",
    credit: "Executive producers: Tony Carrasco and Omar Lugones",
    links: [
      { label: "Watch a full episode", href: "https://vimeo.com/776004685/b86a601128" },
      { label: "Watch the sizzle reel", href: "https://vimeo.com/1197861324" },
    ],
  },
  {
    title: "Must See Movies",
    meta: "Sonifi / 2014 to now",
    img: "/assets/img/poster-movies.webp",
    alt: "Must See Movies with Mario Lopez key art",
    poster: true,
    body:
      "For more than a decade, Mario Lopez has helped millions of hotel guests across the country choose their in-room movie. The ASP team produces the series.",
    credit: "Executive producers: Tony Carrasco and Omar Lugones",
    links: [{ label: "Watch a segment", href: "https://vimeo.com/1061382108/6531db0a12" }],
  },
  {
    title: "Red Table Talk: The Estefans",
    meta: "Westbrook, Facebook Watch / 2020 to 2021",
    img: "/assets/img/poster-rtt.png",
    alt: "Red Table Talk: The Estefans key art",
    poster: true,
    round: true,
    body: "The Red Table Talk franchise, through the eyes of the Estefans. Gloria, Emily and Lili Estefan host candid, multigenerational conversations for Facebook Watch.",
    credit: "Co-executive produced by ASP co-founder Omar Lugones",
    links: [{ label: "Watch on Facebook", href: "https://www.facebook.com/redtabletalkestefans" }],
  },
];

type WorkLink = { label: string; href: string };

const REELS = [
  { label: "Company reel", href: REEL_URL, len: "" },
  { label: "Story reel", href: "https://vimeo.com/1197878865", len: "4 min" },
  { label: "Premieres, junkets and special events", href: "https://vimeo.com/1196810311", len: "1 min" },
];

const MORE_WORK: { client: string; kind: string; body: ReactNode; img?: string; alt?: string; links?: WorkLink[] }[] = [
  { client: "Lionsgate TV", img: "/assets/img/work-nashville.webp", alt: "Lionsgate TV production still", kind: "Studio / YouTube channels", body: "We help produce content for the Ghost Hunters and Lionsgate TV YouTube channels.", links: [{ label: "Ghost Hunters", href: "https://www.youtube.com/@GhostHunters" }, { label: "Lionsgate TV", href: "https://www.youtube.com/@LionsgateTelevision" }] },
  { client: "Greater Good Science Center, UC Berkeley", img: "/assets/img/work-ggsc.webp", alt: "College students on campus", kind: "Education / Video series", body: <><em>Connecting on Campus: Stories of Courage, Curiosity, and Empathy</em> follows college students who bridge political and religious divides. We developed the series in partnership with the Greater Good Science Center team, then took it from script to final cut. The YouTube series has drawn more than 250,000 views so far, and we also produced a companion series of 21 social media reels.</>, links: [{ label: "Watch the series", href: "https://greatergood.berkeley.edu/video/series/connecting_on_campus_stories_of_courage_curiosity_and_empathy" }] },
  { client: "Slightly Stoopid", img: "/assets/img/work-stoopid.webp", alt: "Slightly Stoopid in concert at Petco Park", kind: "Concert / Live music", body: "Slightly Stoopid live in concert in San Diego at Petco Park.", links: [{ label: "Top of the World", href: "https://vimeo.com/947576134" }, { label: "Intergalactic", href: "https://vimeo.com/947576071" }] },
  { client: "Out of Context with Charlamagne tha God", img: "/assets/img/work-ooc.webp", alt: "Charlamagne tha God and Kevin Hart on Out of Context", kind: "Digital series / YouTube", body: "Production for Charlamagne tha God's YouTube series.", links: [{ label: "Watch on YouTube", href: "https://www.youtube.com/@cthagod/search?query=Out%20of%20Context" }] },
  { client: "YMCA Camp Arbolado", img: "/assets/img/work-arbolado.webp", alt: "Campers on the ropes course at YMCA Camp Arbolado", kind: "Nonprofit", body: "A film for the YMCA of Greater Whittier's summer camp.", links: [{ label: "Watch the film", href: "https://vimeo.com/1232135264" }] },
  { client: "Whittier Police Department", img: "/assets/img/work-whittier.webp", alt: "A Whittier police officer in a patrol car", kind: "Public agency", body: "A department profile film for the City of Whittier's police department.", links: [{ label: "Watch the film", href: "https://vimeo.com/1113439492" }] },
  { client: "Surgical Theater", img: "/assets/img/work-surgical.webp", alt: "Surgeons rehearsing in virtual reality headsets", kind: "Corporate / Medical technology", body: "A brand video for the company behind virtual reality surgical rehearsal and visualization.", links: [{ label: "Watch the brand video", href: "https://vimeo.com/881051008" }] },
  { client: "Hammitt", img: "/assets/img/work-hammitt.webp", alt: "A woman carrying a Hammitt clutch", kind: "Brand / Fashion", body: "Branded content for the Los Angeles handbag and accessories brand.", links: [{ label: "Watch the film", href: "https://vimeo.com/639673048" }] },
  { client: "Two Billboards", img: "/assets/img/work-two-billboards.webp", alt: "Still from Two Billboards, a true crime special for Spectrum News 1", kind: "True crime special / Spectrum News 1", body: "A true crime special for Spectrum News 1.", links: [{ label: "Watch the special", href: "https://vimeo.com/579610686/80e51cc584" }] },
];

export function SelectedWork() {
  const [open, setOpen] = useState(0);
  return (
    <section id="work" className="asp-work" aria-labelledby="work-h">
      <div className="asp-wrap">
        <h2 id="work-h" className="asp-h2">Selected work</h2>
        <ul className="asp-reels" aria-label="Reels">
          {REELS.map((r) => (
            <li key={r.href}>
              <a href={r.href} target="_blank" rel="noopener">
                <svg width="12" height="12" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5v11l9-5.5z" fill="currentColor" /></svg>
                <span>{r.label}</span>
                {r.len ? <small>{r.len}</small> : null}
              </a>
            </li>
          ))}
        </ul>
        <h3 className="asp-work__group">Television and streaming</h3>
        <ul className="asp-work__list">
          {TV_WORK.map((w, i) => {
            const isOpen = open === i;
            const panelId = `work-panel-${i}`;
            return (
              <li key={w.title} className="asp-row" data-open={isOpen ? "true" : "false"} onMouseEnter={() => setOpen(i)}>
                <button
                  type="button"
                  className="asp-row__head"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(i)}
                  onFocus={() => setOpen(i)}
                >
                  <span className="asp-row__idx">{String(i + 1).padStart(2, "0")}</span>
                  <span className="asp-row__title">{w.title}</span>
                  <span className="asp-row__meta">{w.meta}</span>
                </button>
                <div className="asp-row__body" id={panelId}>
                  <div className="asp-row__inner">
                    <div className={w.poster ? `asp-row__panel asp-row__panel--poster${"round" in w && w.round ? " asp-row__panel--round" : ""}` : "asp-row__panel"}>
                      <img src={w.img} alt={w.alt} loading="lazy" />
                      <div>
                        <p>{w.body}</p>
                        <strong>{w.credit}</strong>
                        {w.links.length ? (
                          <p className="asp-watch">
                            {w.links.map((l) => (
                              <a key={l.href} href={l.href} target="_blank" rel="noopener" aria-label={`${l.label}: ${w.title}`}>
                                {l.label} <span aria-hidden="true">↗</span>
                              </a>
                            ))}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <h3 id="more-work" className="asp-work__group">Brand, corporate and community</h3>
        <ul className="asp-cards">
          {MORE_WORK.map((m) => (
            <li key={m.client} className="asp-card">
              <div className={m.img ? "asp-card__media" : "asp-card__media asp-card__media--type"}>
                {m.img ? (
                  <img src={m.img} alt={m.alt ?? ""} loading="lazy" width={960} height={600} />
                ) : (
                  <span aria-hidden="true">{m.client}</span>
                )}
              </div>
              <span className="asp-card__kind">{m.kind}</span>
              <h4>{m.client}</h4>
              <p>{m.body}</p>
              {m.links?.length ? (
                <p className="asp-watch">
                  {m.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener" aria-label={`${l.label}: ${m.client}`}>
                      {l.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
