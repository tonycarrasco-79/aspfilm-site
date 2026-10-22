/**
 * Scene data for the scroll-scrub journey. One continuous 15s take, cut into
 * four contiguous segments so each chapter owns a stretch of the same move.
 * Every poster is the exact first frame of its encoded segment.
 */
import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#F0E020",
  background: "#0C2014",
  ink: "#EEF3E2",
  muted: "#C3D0B2",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    id: "top",
    label: "Intro",
    kicker: "An Emmy Award-winning production company",
    title: "Anaconda Street\nProductions",
    mediaAlt: "Dark rainforest leaves backlit by warm yellow light",
    body: "Stories that find their audience. Series, documentaries, branded and corporate video for networks, brands and organizations of every size.",
    clip: "/assets/world/scene-01.mp4",
    mobileClip: "/assets/world/scene-01-mobile.mp4",
    poster: "/assets/world/scene-01-poster.jpg",
    mobilePoster: "/assets/world/scene-01-mobile-poster.jpg",
    scroll: 1.2,
  },
  {
    id: "crew",
    label: "The crew",
    title: "30+ years of film and network TV experience in one company.",
    mediaAlt: "A slow push through dense foliage toward a cinema camera in a clearing",
    body: "Founded in 2007, ASP brings together veteran storytellers with experience in every format.",
    tags: [
      { label: "Daytime Emmy winners", href: "https://www.imdb.com/event/ev0000206/2016/1/" },
      { label: "3 LA Area Emmys", href: "https://www.instagram.com/p/CvDlEUsSNIF/" },
    ],
    clip: "/assets/world/scene-02.mp4",
    mobileClip: "/assets/world/scene-02-mobile.mp4",
    poster: "/assets/world/scene-02-poster.jpg",
    mobilePoster: "/assets/world/scene-02-mobile-poster.jpg",
    align: "right",
    scroll: 1.1,
  },
  {
    id: "every-size",
    label: "Any size",
    titlePre: "Major network.\nGlobal brand.\nLocal nonprofit.",
    title: "We’re built\nfor all of it.",
    mediaAlt: "A Canon cinema camera with a Fujinon zoom lens on a tripod in a sunlit forest clearing",
    body: "Every project gets the same writers, camera operators and editors, and the same care and attention to detail.",
    tags: [
      { label: "Series", href: "https://vimeo.com/1197861324" },
      { label: "Branded", href: "https://vimeo.com/694549397/8718a1965d" },
      { label: "Organizations", href: "https://youtu.be/wYoo1ZIceg8" },
    ],
    clip: "/assets/world/scene-03.mp4",
    mobileClip: "/assets/world/scene-03-mobile.mp4",
    poster: "/assets/world/scene-03-poster.jpg",
    mobilePoster: "/assets/world/scene-03-mobile-poster.jpg",
    scroll: 1.1,
  },
  {
    id: "ready",
    label: "Ready",
    title: "Ready to go.\nNow.",
    mediaAlt: "The cinema camera turns on its tripod head until its lens faces the viewer",
    body: "Cameras. Lighting. Grip. Edit suites. All in-house, so we can move faster, work smarter and deliver efficiently.",
    clip: "/assets/world/scene-04.mp4",
    mobileClip: "/assets/world/scene-04-mobile.mp4",
    poster: "/assets/world/scene-04-poster.jpg",
    mobilePoster: "/assets/world/scene-04-mobile-poster.jpg",
    align: "right",
    scroll: 1.1,
  },
];
