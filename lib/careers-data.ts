export type CareersGalleryImage = {
  id: string;
  src: string;
  alt: string;
  wide?: boolean;
  /** Vertical focal point, 0 = top, 50 = center. Use ~32–40 for standing portraits. */
  focus?: number;
  /** Percent of the photo to clip from the bottom (e.g. empty floor). */
  cropBottom?: number;
};

export type CareersJob = {
  id: string;
  title: string;
  jobId: string;
  experience: string;
  href: string;
};

export type CareersFaq = {
  id: string;
  question: string;
  answer: string;
};

export const careersHero = {
  label: "Life at Lemma",
  title: "Celebrating the heart & soul of LEMMA",
  description:
    "Join a workplace where ideas are valued and people thrive. Together, we build technology that creates lasting impact.",
  primaryCta: { label: "Discover Our Story", href: "#gallery" },
  image: "/images/careers/hero-puzzle.png",
} as const;

export const careersGallery = {
  label: "Photo Gallery",
  title: "LEMMA behind the scenes",
  lifeImages: [
    {
      id: "g1",
      src: "/images/careers/life-traditional-day.jpg",
      alt: "Lemma team in traditional attire at the office",
      wide: true,
    },
    {
      id: "g2",
      src: "/images/careers/life-gold-award.jpg",
      alt: "Lemma team receiving a Gold award at the e4m Performance Marketing Awards",
      wide: true,
    },
    {
      id: "g3",
      src: "/images/careers/life-award-1.jpg",
      alt: "Lemma colleague receiving a certificate of recognition",
      focus: 36,
    },
    {
      id: "g4",
      src: "/images/careers/life-town-hall.jpg",
      alt: "Lemma team gathered for a company town hall",
      wide: true,
    },
    {
      id: "g5",
      src: "/images/careers/life-goafest.jpg",
      alt: "Lemma team at Goafest 2026",
      focus: 34,
    },
    {
      id: "g6",
      src: "/images/careers/life-cricket.jpg",
      alt: "Lemma colleagues playing cricket together",
      wide: true,
    },
    {
      id: "g7",
      src: "/images/careers/life-panel.jpg",
      alt: "Lemma speaking on an industry panel",
      focus: 32,
    },
    {
      id: "g8",
      src: "/images/careers/life-iab-event.png",
      alt: "Lemma team at the IAB Tech Lab Agentic Web event",
      wide: true,
    },
    {
      id: "g9",
      src: "/images/careers/life-award-2.jpg",
      alt: "Lemma employee recognition ceremony in the office",
      focus: 40,
    },
    {
      id: "g10",
      src: "/images/careers/life-lunch.jpg",
      alt: "Lemma colleagues sharing a team lunch",
      wide: true,
    },
    {
      id: "g11",
      src: "/images/careers/life-gift-1.jpg",
      alt: "Lemma teammates celebrating with a gift in the office",
      focus: 22,
    },
    {
      id: "g12",
      src: "/images/careers/life-workshop.jpg",
      alt: "Lemma team collaborating on a workshop activity",
      wide: true,
    },
    {
      id: "g13",
      src: "/images/careers/life-award-3.jpg",
      alt: "Lemma colleagues posing with a recognition certificate",
      focus: 38,
    },
    {
      id: "g14",
      src: "/images/careers/life-chinajoy.jpg",
      alt: "Lemma at ChinaJoy, the China Digital Entertainment Expo",
      wide: true,
    },
    {
      id: "g15",
      src: "/images/careers/life-christmas.jpg",
      alt: "Christmas decorations in the Lemma office",
    },
    {
      id: "g16",
      src: "/images/careers/life-event-3.jpg",
      alt: "Lemma team with campus visitors in front of the office logo",
      wide: true,
    },
    {
      id: "g17",
      src: "/images/careers/life-award-4.jpg",
      alt: "Lemma employee receiving an award in the office",
      focus: 38,
    },
    {
      id: "g18",
      src: "/images/careers/life-event-4.jpg",
      alt: "Lemma anniversary celebration with cake and team speeches",
      wide: true,
    },
    {
      id: "g19",
      src: "/images/careers/life-gift-2.jpg",
      alt: "Lemma colleagues exchanging a gift at work",
      focus: 34,
    },
    {
      id: "g20",
      src: "/images/careers/life-event-5.jpg",
      alt: "Lemma team gathered for an all-hands meeting",
      wide: true,
    },
    {
      id: "g21",
      src: "/images/careers/life-training.jpg",
      alt: "Lemma training session on campaign lifecycle",
      focus: 36,
    },
    {
      id: "g22",
      src: "/images/careers/life-event-1.jpg",
      alt: "Lemma colleague receiving a branded tote at a company session",
      focus: 34,
    },
    {
      id: "g23",
      src: "/images/careers/life-event-2.jpg",
      alt: "Lemma presentation on the full-funnel ad tech platform",
      cropBottom: 30,
    },
  ] satisfies CareersGalleryImage[],
} as const;

export const careersJobs = {
  label: "Careers",
  title: "Global talent shaping remarkable AdTech solutions",
  description:
    "In the world of digital marketing, our cutting-edge omnichannel technology platform is set to amplify transparency, efficiency, and impact. If you’re driven to make waves in the digital AdTech space, we invite you to join us as we pioneer change. Your commitment to innovation and transparency will find its true home here!",
  viewAllHref: "mailto:careers@lemmamedia.com",
  roles: [
    {
      id: "sales-north",
      title: "Senior Sales Professional – North",
      jobId: "JD 015",
      experience: "10–15 years",
      href: "mailto:careers@lemmamedia.com?subject=Senior%20Sales%20Professional%20–%20North",
    },
    {
      id: "sales-west",
      title: "Demand Sales Professional – West",
      jobId: "JD 016",
      experience: "10+ yrs",
      href: "mailto:careers@lemmamedia.com?subject=Demand%20Sales%20Professional%20–%20West",
    },
    {
      id: "media-planner",
      title: "Media Planner",
      jobId: "JD 018",
      experience: "3-4 years",
      href: "mailto:careers@lemmamedia.com?subject=Media%20Planner",
    },
  ] satisfies CareersJob[],
} as const;

export const careersFaqs: CareersFaq[] = [
  {
    id: "what-is-lemma",
    question: "What is Lemma Technologies?",
    answer:
      "Lemma is an AI-first omnichannel AdTech platform that helps brands, agencies, and media owners plan, activate, optimize, and measure campaigns across DOOH, CTV, OTT, Mobile, and Audio channels.",
  },
  {
    id: "who-can-use",
    question: "Who can use Lemma's platform?",
    answer:
      "Brands, advertisers, agencies, publishers, media owners, and network operators use Lemma to activate omnichannel campaigns and unlock inventory yield with full transparency.",
  },
  {
    id: "integral",
    question: "What is Lemma Integral?",
    answer:
      "Integral is Lemma’s full-funnel platform that turns outdoor impressions into measurable outcomes — activating mass-media reach, reinforcing mid-funnel audiences, and driving digital conversion.",
  },
  {
    id: "delta",
    question: "What does Lemma Delta do?",
    answer:
      "Delta is the demand-side engine for scaling DOOH and CTV with automated bidding, real-time optimization, and maximum qualified reach.",
  },
  {
    id: "sigma",
    question: "What is Lemma Sigma?",
    answer:
      "Sigma is Lemma’s transparent SSP designed to maximize inventory yield with real-time insights, demand access, and complete supply-side control.",
  },
  {
    id: "phi",
    question: "How does Lemma Phi help media owners?",
    answer:
      "Phi helps media owners plan, schedule, and deliver DOOH content seamlessly — managing distribution across screens, locations, and formats from one platform.",
  },
];

export const careersCta = {
  label: "Contact",
  titleBefore: "Want to",
  titleAccent: "Lemmaximize",
  titleAfter: "your campaigns/ inventory?",
  description: "Get in touch with us and start your journey with us today.",
  primaryCta: { label: "Contact Us", href: "mailto:contactus@lemmamedia.com" },
  secondaryCta: { label: "Request Demo", href: "/request-demo" },
} as const;
