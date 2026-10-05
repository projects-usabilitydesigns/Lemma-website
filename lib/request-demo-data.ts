export type DemoProductBrief = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logo: string;
  accent: string;
  highlights: string[];
  href: string;
};

export const requestDemoHero = {
  label: "Request a Demo",
  title: "See Lemma turn outdoor attention into outcomes",
  description:
    "Book a personalized walkthrough of the Lemma stack. We’ll map your goals to the right products across DOOH, CTV, OTT, mobile, and web—and show the measurement that ties it all together.",
  assurances: [
    "A tailored 30-minute walkthrough, not a generic deck",
    "Live look at planning, activation, and attribution",
    "Reply from our team within 24 hours",
  ],
  stats: [
    { id: "screens", value: "3.5M", label: "Screens globally" },
    { id: "markets", value: "40+", label: "Markets worldwide" },
    { id: "products", value: "4", label: "Native products" },
  ],
} as const;

export const demoRoles = [
  "Brand / Advertiser",
  "Demand Partner",
  "Media Owner",
  "Publisher",
  // "Network Operator",
  "Other",
] as const;

export const demoRegions = [
  "North America",
  "LATAM",
  "EMEA",
  "India",
  "APAC",
  "Middle East",
  "Other",
] as const;

export const demoInterests = [
  { id: "integral", label: "Integral" },
  { id: "delta", label: "Delta" },
  { id: "sigma", label: "Sigma" },
  { id: "phi", label: "Phi" },
  { id: "not-sure", label: "Not sure yet" },
] as const;

export const demoProducts: DemoProductBrief[] = [
  {
    id: "integral",
    name: "Integral",
    tagline: "Full-funnel platform",
    description:
      "Turn OOH impressions into measurable outcomes. Activate, retarget, and attribute every exposure across the funnel.",
    logo: "/images/products/integral.svg",
    accent: "#009352",
    highlights: ["Audience graph", "Cross-screen retargeting", "Outcome attribution"],
    href: "/products/integral",
  },
  {
    id: "delta",
    name: "Delta",
    tagline: "Demand-side platform",
    description:
      "Plan, launch, and scale DOOH and CTV campaigns with automated bidding and real-time optimization.",
    logo: "/images/products/delta.svg",
    accent: "#008fdb",
    highlights: ["Omnichannel planning", "Automated bidding", "Live optimization"],
    href: "/products/delta",
  },
  {
    id: "sigma",
    name: "Sigma",
    tagline: "Supply-side platform",
    description:
      "Maximize inventory yield with a transparent SSP built for media owners—real-time insights and global demand.",
    logo: "/images/products/sigma.svg",
    accent: "#008fdb",
    highlights: ["Yield optimization", "Global demand", "Full transparency"],
    href: "/solutions/media-owners",
  },
  {
    id: "phi",
    name: "Phi",
    tagline: "Content management",
    description:
      "Plan, schedule, and deliver DOOH content across screens, locations, and formats from one platform.",
    logo: "/images/products/phi.svg",
    accent: "#74be44",
    highlights: ["Screen scheduling", "Creative control", "Free to use"],
    href: "/products/phi",
  },
];

export const demoSteps = [
  {
    id: "share",
    step: "01",
    title: "Share your goals",
    description:
      "Tell us about your channels, markets, and what success looks like for your next campaign or inventory.",
  },
  {
    id: "match",
    step: "02",
    title: "We tailor the session",
    description:
      "Our specialists map your objectives to the right products and prepare a walkthrough around your use case.",
  },
  {
    id: "demo",
    step: "03",
    title: "See it live",
    description:
      "Get a guided demo of planning, activation, and measurement—plus a clear plan for getting started.",
  },
] as const;

export const demoFaqs = [
  {
    id: "how-long",
    question: "How long does a demo take?",
    answer:
      "Most walkthroughs run 30 to 45 minutes. We keep it focused on your channels and goals, with time at the end for questions from your team.",
  },
  {
    id: "who-should-join",
    question: "Who should join the call?",
    answer:
      "Anyone involved in planning, buying, or monetizing media. Media planners, performance leads, and inventory or revenue teams typically get the most out of the session.",
  },
  {
    id: "what-you-see",
    question: "What will we actually see?",
    answer:
      "A live look at the Lemma stack—campaign planning in Delta, full-funnel measurement in Integral, and yield tooling in Sigma or Phi depending on your needs.",
  },
  {
    id: "which-product",
    question: "What if we don’t know which product we need?",
    answer:
      "That’s completely fine. Select “Not sure yet” in the form and our team will recommend the right starting point based on your objectives.",
  },
  {
    id: "response-time",
    question: "How quickly will someone get back to us?",
    answer:
      "You’ll hear from a Lemma specialist within 24 hours on business days, with a couple of times that work for your team.",
  },
  {
    id: "channels",
    question: "Which channels does Lemma support?",
    answer:
      "Lemma is omnichannel by design—DOOH, CTV, OTT, mobile, web, audio, and in-game—so you can plan and measure everything in one connected workflow.",
  },
];
