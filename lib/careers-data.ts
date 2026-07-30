export type CareersGalleryImage = {
  id: string;
  src: string;
  alt: string;
  wide?: boolean;
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
  primaryCta: { label: "Discover our story", href: "#gallery" },
  image: "/images/careers/hero-puzzle.png",
} as const;

export const careersGallery = {
  label: "Photo Gallery",
  title: "LEMMA behind the scenes",
  description:
    "Empowering businesses with innovative, transparent, and technology-driven advertising solutions. Building a smarter digital future through adaptability, collaboration, and sustainable growth.",
  tabs: [
    { id: "life", label: "Life at Lemma" },
    { id: "events", label: "Events" },
  ] as const,
  lifeImages: [
    {
      id: "g1",
      src: "/images/careers/gallery-1.png",
      alt: "Lemma team celebrating together in the office",
    },
    {
      id: "g2",
      src: "/images/careers/gallery-2.png",
      alt: "Lemma team outdoor sports day",
      wide: true,
    },
    {
      id: "g3",
      src: "/images/careers/gallery-3.png",
      alt: "Lemma team receiving an award",
      wide: true,
    },
    {
      id: "g4",
      src: "/images/careers/gallery-4.png",
      alt: "Lemma colleagues posing together",
    },
    {
      id: "g5",
      src: "/images/careers/gallery-5.png",
      alt: "Lemma team playing carrom",
    },
    {
      id: "g6",
      src: "/images/careers/gallery-6.png",
      alt: "Lemma team white-water rafting",
      wide: true,
    },
  ] satisfies CareersGalleryImage[],
  eventsImages: [
    {
      id: "e1",
      src: "/images/careers/gallery-3.png",
      alt: "Lemma awards and recognition event",
      wide: true,
    },
    {
      id: "e2",
      src: "/images/careers/gallery-6.png",
      alt: "Lemma team offsite adventure",
    },
    {
      id: "e3",
      src: "/images/careers/gallery-1.png",
      alt: "Lemma holiday celebration",
      wide: true,
    },
    {
      id: "e4",
      src: "/images/careers/gallery-2.png",
      alt: "Lemma sports event",
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
  secondaryCta: { label: "Request Demo", href: "/#cta" },
} as const;
