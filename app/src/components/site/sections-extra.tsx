import "./site.css";
import { ESSENTIALS_TYPE, PODCAST_TYPE, selectProjectType } from "@/lib/inquiry-types";

const TIERS = [
  {
    name: "Spotlight",
    length: "Half day",
    items: ["Hero video", "6 shorts", "Stills"],
    price: "Starting at $3,900",
    founding: "Founding-client rate: $2,750",
  },
  {
    name: "The Show",
    length: "Full day",
    items: ["3 to 4 mini-episodes", "Hero video", "10 to 15 shorts", "2 to 3 ad cuts", "20+ stills"],
    price: "Starting at $8,900",
    founding: "Founding-client rate: $6,250",
    featured: true,
  },
  {
    name: "Season Pass",
    length: "Every quarter",
    items: ["One Show day per quarter", "12-month agreement", "Or $2,500 a month"],
    price: "$7,500 per quarter",
    founding: "Founding-client rate: $5,500 per quarter, first year",
  },
];

export function Essentials() {
  return (
    <section id="essentials" className="asp-ess" aria-labelledby="ess-h">
      <div className="asp-wrap">
        <p className="asp-eyebrow">ASP Essentials</p>
        <h2 id="ess-h" className="asp-h2">Our TV crew in fixed-price packages for small businesses.</h2>
        <div className="asp-ess__flag">
          <span className="asp-ess__tag">Flagship package</span>
          <h3>One Day, One Show</h3>
          <p>We spend a day at your business and turn it into a short series plus a month of social video.</p>
          <p className="asp-watch">
            <a href="https://vimeo.com/1121638053" target="_blank" rel="noopener">
              See an example: The SoCal Scene, Rodeo 72 <span aria-hidden="true">↗</span>
            </a>
          </p>
        </div>
        <ul className="asp-ess__tiers">
          {TIERS.map((t) => (
            <li key={t.name} className={t.featured ? "asp-tier asp-tier--featured" : "asp-tier"}>
              <span className="asp-tier__len">{t.length}</span>
              <h4>{t.name}</h4>
              <ul>
                {t.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <p className="asp-tier__price">{t.price}</p>
              <p className="asp-tier__founding">{t.founding}</p>
            </li>
          ))}
        </ul>
        <div className="asp-ess__foot">
          <p>
            <strong>Founding clients:</strong> we're taking 2 to 3 local businesses at a founding-client rate in exchange
            for featuring the project.
          </p>
          <a className="asp-ess__cta" href="#contact" onClick={() => selectProjectType(ESSENTIALS_TYPE)}>
            Request a shoot day
          </a>
        </div>
      </div>
    </section>
  );
}

export function MbeBand() {
  return (
    <section className="asp-mbe" aria-labelledby="mbe-h">
      <div className="asp-wrap asp-mbe__row">
        <div className="asp-mbe__seal">
          <img src="/assets/brand/nmsdc-mbe-2026.webp" alt="NMSDC Certified MBE 2026" width={560} height={522} loading="lazy" />
        </div>
        <div>
          <h2 id="mbe-h">Certified Minority Business Enterprise</h2>
          <p>Anaconda Street Productions is certified by the National Minority Supplier Development Council (NMSDC).</p>
        </div>
      </div>
    </section>
  );
}

const SHOWS = [
  {
    title: "Khlo\u00e9 in Wonder Land",
    meta: "Khlo\u00e9 Kardashian / Season 1",
    img: "/assets/img/pod-khloe.webp",
    alt: "Khlo\u00e9 Kardashian and Scott Disick on the Khlo\u00e9 in Wonder Land set",
    body: "We helped Khlo\u00e9 Kardashian launch her video podcast, shooting and editing its first season. Our crew even appeared on camera in Season 6 of Hulu's The Kardashians.",
    stills: [
      { src: "/assets/img/kard-s6e7-set.webp", w: 675, h: 900, alt: "Tony Carrasco watching the Khlo\u00e9 in Wonder Land shoot with an earpiece in", cap: "The Kardashians, S6 E7" },
      { src: "/assets/img/kard-s6e8-control.webp", w: 900, h: 675, alt: "Tony Carrasco directing from the Khlo\u00e9 in Wonder Land control room", cap: "The Kardashians, S6 E8" },
      { src: "/assets/img/kard-s6e7-switcher.webp", w: 900, h: 675, alt: "Tony Carrasco on the switcher while the podcast films behind the glass", cap: "The Kardashians, S6 E7" },
    ],
    control: [
      { src: "/assets/img/khloe-multiview.webp", alt: "Multicamera view of Khlo\u00e9 Kardashian on the control room monitor" },
      { src: "/assets/img/khloe-program.webp", alt: "The program feed of Khlo\u00e9 Kardashian beside the live switcher" },
    ],
    links: [
      { label: "Episode 1 with Scott Disick", href: "https://youtu.be/TO-k4L50ONI" },
      { label: "Episode 2 with Jay Shetty", href: "https://youtu.be/iDVmJhyrOnU" },
    ],
  },
  {
    title: "La Charla",
    meta: "Amara La Negra, Rocsi Diaz and Marycarmen Lopez",
    img: "/assets/img/pod-lacharla.webp",
    alt: "Wide shot of Amara La Negra, Rocsi Diaz and Marycarmen Lopez on the La Charla set",
    body: "Three powerhouse Latinas come together for La Charla, an unfiltered conversation about navigating career, love, motherhood and everything in between. Candid, honest and unafraid to tackle taboo topics, they get real about the Latina experience, sharing their truths, challenging expectations and uplifting women along the way.",
    links: [{ label: "Watch the Friendship episode", href: "https://vimeo.com/1237355586/9e1e7118bb" }],
  },
];

export function Podcasts() {
  return (
    <section id="podcasts" className="asp-pod" aria-labelledby="pod-h">
      <div className="asp-wrap asp-pod__grid">
        <div className="asp-pod__intro">
          <p className="asp-eyebrow">Podcasts</p>
          <h2 id="pod-h" className="asp-h2">Video podcasts, made by a TV crew.</h2>
          <p className="asp-lede">
            We shoot and edit video podcasts with the same crew and edit team behind our network series, so your show
            looks as good as it sounds.
          </p>
          <a className="asp-ess__cta" href="#contact" onClick={() => selectProjectType(PODCAST_TYPE)}>
            Start a podcast
          </a>
        </div>
        <ul className="asp-pod__shows">
          {SHOWS.map((show) => (
            <li key={show.title} className="asp-pod__card">
              <img src={show.img} alt={show.alt} width={960} height={540} loading="lazy" />
              <div className="asp-pod__body">
                <h3>{show.title}</h3>
                <p className="asp-pod__meta">{show.meta}</p>
                <p>{show.body}</p>
                {"stills" in show && show.stills ? (
                  <figure className="asp-pod__stills">
                    {show.stills.map((st) => (
                      <div key={st.src} className="asp-pod__still">
                        <img src={st.src} alt={st.alt} width={st.w} height={st.h} loading="lazy" />
                        <img className="asp-pod__bug" src="/assets/brand/hulu-white.svg" alt="" aria-hidden="true" width={216} height={71} />
                        <span>{st.cap}</span>
                      </div>
                    ))}
                    <figcaption>Our team on camera in Season 6 of Hulu's The Kardashians.</figcaption>
                  </figure>
                ) : null}
                {"control" in show && show.control ? (
                  <figure className="asp-pod__control">
                    {show.control.map((c) => (
                      <img key={c.src} src={c.src} alt={c.alt} width={900} height={675} loading="lazy" />
                    ))}
                    <figcaption>Our multicamera control room for season 1.</figcaption>
                  </figure>
                ) : null}
                <p className="asp-watch">
                  {show.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener" aria-label={`${l.label}: ${show.title}`}>
                      {l.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
