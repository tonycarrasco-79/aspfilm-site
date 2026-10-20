import { createFileRoute } from "@tanstack/react-router";

import { ScrollScrub, type ScrollScrubScene } from "@/components/scroll-scrub/scroll-scrub";
import {
  Audiences,
  CreditsMarquee,
  HeroActions,
  SelectedWork,
  SiteHeader,
} from "@/components/site/sections-top";
import { Contact, EmmyStrip, Faq, Founders, Services, SiteFooter } from "@/components/site/sections-bottom";
import { Essentials, MbeBand, Podcasts } from "@/components/site/sections-extra";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

export const Route = createFileRoute("/")({
  component: Index,
});

// Module constant: the hero chapter gets its CTA row; identity never changes.
const scenes: ScrollScrubScene[] = scrollScrubScenes.map((scene, index) =>
  index === 0 ? { ...scene, actions: <HeroActions /> } : scene,
);

function Index() {
  return (
    <>
      <SiteHeader />
      <main>
        <ScrollScrub scenes={scenes} theme={scrollScrubTheme} />
        <CreditsMarquee />
        <Audiences />
        <SelectedWork />
        <EmmyStrip />
        <Services />
        <Podcasts />
        <Essentials />
        <Founders />
        <Faq />
        <MbeBand />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
