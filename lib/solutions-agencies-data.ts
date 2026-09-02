import type {
  BrandsCapability,
  BrandsFaq,
  BrandsFeature,
  BrandsKpi,
  BrandsStat,
} from "@/lib/solutions-brands-data";
import { DEMO_MODAL_HREF } from "@/lib/demo-cta";

export const agenciesHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/#solutions" },
    { label: "For Demand Partners", href: "/solutions/agencies" },
  ],
  label: "Solutions",
  gradientTitle: "LEMMA CTV Solutions",
  description:
    "Reach and connect unique audiences at scale across premium streaming TV content in the Open Web including OTTs and CTV networks with one powerful platform.",
  primaryCta: { label: "Advertise With Us", href: DEMO_MODAL_HREF },
  secondaryCta: { label: "Partner With Us", href: DEMO_MODAL_HREF },
  image: "/images/solutions/agencies-hero.png",
  imageAlt: "Lemma agency workspace with campaign analytics dashboards and city skyline",
} as const;

export const agenciesStats: BrandsStat[] = [
  { id: "publishers", value: 100, suffix: "+", label: "Video\nPublishers" },
  { id: "markets", value: 40, suffix: "+", label: "Markets Worldwide" },
  { id: "platforms", value: 5, label: "Proprietary Platforms" },
  { id: "premium", value: 100, suffix: "%", label: "Premium CTV\nFocus" },
];

export const agenciesWhy = {
  title: "SEAMLESS ADS. STRIKING RESULTS.",
  description:
    "CTV built for outcomes, combining scale and expertise to turn CTV campaigns into measurable conversions & ROI",
  features: [
    {
      id: "scale",
      title: "Scale",
      description:
        "Access a large choice of video publishers for unique CTV need direct supply on Lemma Exchange plus curated publishers via leading SSP partners.",
      accent: "#008fdb",
      icon: "layers",
    },
    {
      id: "targeting",
      title: "Targeting",
      description:
        "Reach True TV inventory with viewership and ad exposure signals, genre-based contextual audiences, curated PMPs, and user-level targeting.",
      accent: "#008fdb",
      icon: "target",
    },
    {
      id: "discovery",
      title: "Discovery & Measurement",
      description:
        "Integrate directly with publishers, validate inventory through accepted measurement partners, and monitor performance in a real-time dashboard.",
      accent: "#009352",
      icon: "chart",
    },
    {
      id: "supply",
      title: "TV Supply",
      description:
        "Buy premium CTV with transparent access to quality supply across OTTs, CTV networks, and high-intent streaming environments.",
      accent: "#74be44",
      icon: "sparkles",
    },
    {
      id: "venue",
      title: "Venue-Based CTV",
      description:
        "A straightforward, transparent way to buy premium CTV screens at contextually relevant real-world locations—available in the USA, rolling out globally.",
      accent: "#f05a27",
      icon: "zap",
    },
  ] satisfies BrandsFeature[],
};

export const agenciesOffers = {
  label: "Lemma Offers",
  title: "CTV that understands the moment.",
  rejected: "A sportswear brand shouldn't simply target 18-34-year-olds.",
  stackLabel: "The stack identifies & combines:",
  stack: [
    "18-34 Demographic",
    "Fitness Affinity + Sports Content",
    "Evening Viewing + High-Value Geography",
  ],
  image: "/images/solutions/lemma-offers-ctv.png",
  imageAlt: "Friends watching a match together on a living-room CTV screen",
  callouts: [
    { id: "segment", text: "Audience segment: Esports & active lifestyle enthusiasts" },
    { id: "pool", text: "High-engagement CTV targeting pool" },
    { id: "demo", text: "Primary demographic: Adults 18-34" },
    { id: "coview", text: "High co-viewing profiles" },
    { id: "context", text: "Contextual placements: Gaming & sports content genres" },
    { id: "household", text: "Tech-forward & cross-device active household" },
  ],
} as const;

export const agenciesJourney = {
  label: "Venue-based CTV",
  title: "It's not sorta CTV it's venue-based CTV advertising",
  description:
    "Lemma introduces a straightforward and transparent way to buy premium CTV screens at contextually relevant real-world locations.",
  bullets: [
    "Premium CTV screens in contextually relevant venues",
    "Transparent buying built for agency workflows",
    "Direct publisher integrations from the source",
    "Third-party validation with globally accepted measurement partners",
    "Real-time dashboards to monitor campaign performance",
  ],
  cta: { label: "Find Venue-Based CTV", href: "#cta" },
} as const;

export const agenciesKpis: BrandsKpi[] = [
  { id: "reach", label: "CTV Reach", value: "48.2M", trend: "+14.1%" },
  { id: "completion", label: "Completion Rate", value: "96%", trend: "+3.8%" },
  { id: "viewability", label: "Viewability", value: "91%", trend: "+5.2%" },
  { id: "brand", label: "Brand Lift", value: "+18%", trend: "+6.4%" },
];

export const agenciesCapabilities = {
  title: "LEMMA data marketplace for smarter CTV buying",
  items: [
    {
      id: "first-party",
      title: "First-Party Data",
      description: "Tap into nationally scaled, deterministic signals to sharpen CTV targeting.",
      icon: "users",
    },
    {
      id: "genre",
      title: "Genre-Based Data",
      description: "Build contextual CTV audiences around TV genres that match brand intent.",
      icon: "map",
    },
    {
      id: "location",
      title: "Location-Based Data",
      description: "Connect streaming exposure with real-world location context for stronger relevance.",
      icon: "crosshair",
    },
    {
      id: "lifestyle",
      title: "Age & Lifestyle Data",
      description: "Reach the right households with age and lifestyle segments built for TV.",
      icon: "sparkles",
    },
    {
      id: "contextual",
      title: "Contextual Targeting",
      description: "Align creatives with content context so every placement feels native to the screen.",
      icon: "palette",
    },
    {
      id: "third-party",
      title: "Third-Party Data",
      description: "Extend reach with trusted third-party audience data for scaled CTV activation.",
      icon: "link",
    },
    {
      id: "viewership",
      title: "Viewership Data",
      description: "Use aggregated viewership insights to plan, optimize, and prove CTV performance.",
      icon: "barChart",
    },
    {
      id: "quality",
      title: "High-Quality CTV",
      description: "Access premium inventory with scale and expertise in programmatic CTV.",
      icon: "shopping",
    },
  ] satisfies BrandsCapability[],
};

export const agenciesSuccessMetrics: BrandsStat[] = [
  { id: "publishers", value: 100, suffix: "+", label: "Video Publishers" },
  { id: "households", value: 99, suffix: "%", label: "of CTV Households Mapped" },
  { id: "completion", value: 96, suffix: "%", label: "Avg. Completion Rate" },
  { id: "viewability", value: 91, suffix: "%", label: "Premium Viewability" },
  { id: "transparency", value: 100, suffix: "%", label: "Reporting Clarity" },
];

export const agenciesAnalytics = {
  title: "Access high-quality CTV at scale",
  description:
    "Lemma brings together scale and expertise in the fastest growing programmatic channel built for agencies that need outcomes, not just impressions.",
} as const;

export const agenciesFaqs: BrandsFaq[] = [
  {
    id: "q1",
    question: "How does Lemma help Demand Partners activate CTV?",
    questionAccent: "Demand Partners",
    answer:
      "Lemma provides scale across premium OTT and CTV supply, advanced targeting, direct publisher integrations, and transparent measurement so demand partners can plan and buy CTV in one platform.",
  },
  {
    id: "q2",
    question: "How is Lemma CTV solutions different from others?",
    answer:
      "Unlike broad, proxy-based demographic targeting, Lemma analyzes brand assets and intent signals to map high-impact CTV moments. This delivers context-relevant ads that eliminate waste and drive measurable conversions.",
  },
  {
    id: "q3",
    question: "How does measurement and validation work?",
    answer:
      "Lemma integrates directly with publishers for source-level data, partners with third parties using globally accepted measurement standards, and provides real-time dashboards for campaign monitoring.",
  },
  {
    id: "q4",
    question: "What is Lemma Audience Graph?",
    answer:
      "The Lemma Audience Graph maps 95% of CTV households using real-world location signals, intent data, and IP anchoring. It builds precise targeting pools to deliver context-relevant cross-device campaigns.",
    answerBold: ["location signals, intent data, and IP anchoring"],
  },
  {
    id: "q5",
    question: "What downstream outcomes can advertisers track using Lemma’s CTV solution?",
    answer:
      "Lemma tracks full-funnel downstream outcomes, connecting living-room CTV views to mobile banner clicks, site conversions, online purchases, and closed-loop physical store foot-traffic through cross-device attribution.",
  },
];

export const agenciesCta = {
  title: "Want to Lemmaximize your CTV campaigns?",
  description:
    "Tell us how to reach you and you’ll hear from us in 24 hours. Let’s turn premium streaming attention into measurable results.",
  primaryCta: { label: "Get In Touch", href: "mailto:contactus@lemmamedia.com" },
  secondaryCta: { label: "Advertise With Us", href: DEMO_MODAL_HREF },
  image: "/images/solutions/brands.jpg",
} as const;
