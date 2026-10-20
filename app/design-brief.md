# Anaconda Street Productions: design brief

**Design read:** For network execs, brand marketers and small nonprofits alike who need a proven crew; the register is confident, cinematic, warm, never corporate.

**Concept spine:** "Out of the jungle, onto the set." The site is a camera move through dense Anaconda-green rainforest that arrives at a lit production set: the brand's name and colors made literal, and the promise that ASP finds the story in the thicket.

**Delivery tier:** cinema (Lenis-free native scroll; the scroll-scrub film is the Tier-1 hero mechanic).

**Locked palette (user's brand, pulled from the ASP logo, overrides default bans):**
- Canopy (ground) #0C2014, from logo #003010 / #204020
- Understory (panel) #15301D
- Leaf ink #EEF3E2
- Moss muted #A7B894
- Anaconda yellow (the ONE accent) #F0E020, from the logo's yellow
- Scale green #9CBF33, used only as a tint shift inside the green family (hairlines, hovers), never as a second accent
Defense: these are the logo's own colors; one yellow accent on a green-black ground reads as ASP at a glance.

**Locked type:** Geist (display 800 to 900, tracking tight) + Geist Mono (labels, credits, metrics). Sans only; no serif.

**Combinatorial pick:** theme Deep Dark with a twist (green-black, not graphite) · background full-bleed cinematic imagery · typography expressive grotesk · hero cinematic centered-left over film · section system poster-stacked storytelling · signature components: brand marquee, gapless bento, hover-accordion work rows, oversized metrics strip · narrative spine stage/spotlight · second-read: one oversized numeral (the Emmy count) as structure.

Animation mode: animated-website

**Journey shape:** single-shot (one subject, one continuous move, a brand story).
**Journey (4 chapters over one ~15s film):**
1. Establishing: dark rainforest leaves, yellow light behind. "Stories that find their audience." Emmy-winning series, documentaries and branded content, made for anyone with a story to tell. CTAs: Start a project, Watch the reel.
2. Push through foliage: "25 years of network TV, in one crew." Founded 2007 by Tony Carrasco and Omar Lugones, veterans of Extra and Red Table Talk. Tags: Daytime Emmy winners, 3 LA Area Emmys.
3. Clearing revealed, camera on tripod lit by a yellow key: "Big network or local nonprofit." The same writers, shooters and editors on every project, whatever the budget. Tags: Series, Branded, Organizations.
4. Arc to the lens, canopy reflected in the glass: "Ready when you are." Our own gear, edit suites and XR studio mean we start fast. CTA: Start a project.
**World grammar:** "Cinematic 35mm, deep jungle green #0C2014 shadows, single warm yellow #F0E020 key light, soft haze, shallow depth of field, locked exposure, slow steady dolly, no people, no text."
**Mobile framing:** subject (camera) held center-safe; leaves expendable at edges; mobile encode ≤720p.
**Delivery budget:** ≤32 MiB desktop, ≤16 MiB mobile.
The journey enacts the spine: the visitor literally travels from thicket to set.

**Section plan (after the journey):**
1. Credits marquee (brand marquee, mono type)
2. Who we work with: gapless bento, 3 audience doors + 1 image cell (eyebrow 1)
3. Selected work: hover-accordion rows (Christmas on the Farm, California Stories, Must See Movies, Red Table Talk: The Estefans)
4. Emmy record: oversized metrics strip with the giant numeral
5. What we do: split, services list with generated icons + XR studio image (eyebrow 2)
6. Founders: typographic duo, no photos (real photos pending from the deck)
7. Contact: framed form that composes an email to production@aspfilm.com, plus phone and address (eyebrow 3)
Families used: marquee, bento, accordion rows, metrics strip, split list, typographic duo, framed form (7 distinct).

**Asset plan:** storyboard (1) → 15s film; 6 section boards; content imagery (3 audience, 4 work, 1 XR studio); icon sheet (6 glyphs); OG card 1200x630; head kit derived from the user's logo.

**CTA inventory (each its own garment):**
- Hero "Start a project": viewfinder corner brackets close around the label on hover.
- Hero "Watch the reel": mono readout link with a play glyph; label types in on hover.
- Nav "Start a project": yellow slate-clapper tab whose top edge snaps down on :active.
- Bento door links: whole cell shifts grade, arrow travels along a drawn vine line.
- Work rows: entire row shears, preview crop slides in.
- Contact submit: long yellow band, text slides apart to reveal "Opens your email".

**Anti-convergence ledger (previous build in this chat: canvas mockup):** that build was near-black + amber, Big Shoulders + Manrope, text-only hero, pill/outline buttons, 4-6px radius. This build differs on palette (green + yellow), type (Geist), hero (film scrub), Tier-1 (scroll-scrub), garments (above), corners (sharp 0 radius throughout).

**Facts source:** ASP DECK 2026 (Google Slides) and the user. No invented stats. Afrat Spalding is intentionally not featured (user request).

## Revision, Oct 1 2026 (user feedback)
- Hero H1 is now the brand name with the large ASP logo above it; chapter route labels hidden (they overlapped the header).
- XR studio removed everywhere (ASP no longer has it). Location reads "Based in Los Angeles", Texas office links to aspfilmtexas.com.
- Real ASP DECK 2026 photos replace generated stand-ins: founder portraits, early edit-suite photo, shoot stills, and key art for Christmas on the Farm, LA Stories and Must See Movies.
- Selected work now has two groups: Television and streaming (accordion) and Brand, corporate and community (card grid).
- New FAQ section (plain two-column list) feeds FAQPage structured data. Section plan: hero film, client logos, audiences bento, selected work, Emmy strip, services, founders, FAQ, contact.

- House photo grade: every photo runs through art-src/grade.py (green shadows, warm yellow highlights, Higgsfield-generated light leak in art-src/leak.png, film grain). Key art and portraits get a lighter pass. Project cards now carry graded thumbnails; RTT uses the real key art.
