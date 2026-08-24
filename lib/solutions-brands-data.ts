import { DEMO_MODAL_HREF } from "@/lib/demo-cta";

export type BrandsStat = {
  id: string;
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
};

export type BrandsFeature = {
  id: string;
  title: string;
  description: string;
  accent: string;
  icon: "target" | "sparkles" | "layers" | "zap" | "chart";
};

export type BrandsChannel = {
  id: string;
  title: string;
  description: string;
  icon:
    | "monitor"
    | "tv"
    | "play"
    | "thumbsUp"
    | "billboard"
    | "network"
    | "boxes"
    | "images"
    | "zap"
    | "trendingUp"
    | "shield"
    | "barChart";
};

export type BrandsCapability = {
  id: string;
  title: string;
  description: string;
  icon: "users" | "map" | "palette" | "crosshair" | "barChart" | "link" | "sparkles" | "shopping";
};

export type BrandsStory = {
  id: string;
  brand: string;
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

export type BrandsTestimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type BrandsFaq = {
  id: string;
  question: string;
  answer: string;
};

export type BrandsKpi = {
  id: string;
  label: string;
  value: string;
  trend: string;
};

export const brandsHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/#solutions" },
    { label: "For Brands & Advertisers", href: "/solutions/brands-advertisers" },
  ],
  label: "Solutions",
  title: "For Brands & Advertisers",
  gradientTitle: "Lemmaximize your impact!",
  description:
    "When you team up with the world’s largest omnichannel platform, you gain access to audience-centric advertising solutions. Today’s tech? Nailed it. Tomorrow’s trends? We’re already on it.",
  primaryCta: { label: "Advertise With Us", href: DEMO_MODAL_HREF },
  secondaryCta: { label: "Explore Platforms", href: "/#products" },
  image: "/images/solutions/brands-hero-billboard.png",
} as const;

export const brandsStats: BrandsStat[] = [
  { id: "campaigns", value: 3.5, decimals: 1, suffix: "M+", label: "Campaigns Delivered" },
  { id: "markets", value: 40, suffix: "+", label: "Markets Worldwide" },
  { id: "platforms", value: 5, label: "Proprietary Platforms" },
  { id: "outcomes", value: 100, suffix: "%", label: "Real Business Outcomes" },
];

export const brandsWhyFeatures: BrandsFeature[] = [
  {
    id: "outcome",
    title: "Outcome-First Approach",
    description:
      "Move beyond impressions. Activate, retarget, and attribute every outdoor moment to real business results.",
    accent: "#008fdb",
    icon: "target",
  },
  {
    id: "ai",
    title: "AI-Powered Activation",
    description:
      "Let intelligent bidding, creative optimization, and audience models maximize performance in real time.",
    accent: "#74be44",
    icon: "sparkles",
  },
  {
    id: "omni",
    title: "Omnichannel Reach",
    description:
      "Unify DOOH, CTV, OTT, social, and digital billboards in one connected planning and buying workflow.",
    accent: "#008fdb",
    icon: "layers",
  },
  {
    id: "realtime",
    title: "Real-Time Optimization",
    description:
      "Shift spend, creative, and targeting instantly as audience signals and inventory conditions change.",
    accent: "#009352",
    icon: "zap",
  },
  {
    id: "measure",
    title: "Transparent Measurement",
    description:
      "See clear attribution across screens so every campaign decision is backed by measurable outcomes.",
    accent: "#f05a27",
    icon: "chart",
  },
];

export const brandsChannels: BrandsChannel[] = [
  {
    id: "dooh",
    title: "DOOH",
    description: "Reach high-intent audiences across 1.5M+ digital out-of-home screens worldwide.",
    icon: "monitor",
  },
  {
    id: "ctv",
    title: "CTV",
    description: "Precision-targeted Connected TV with dynamic ad insertion across premium inventory.",
    icon: "tv",
  },
  {
    id: "ott",
    title: "OTT",
    description: "Engage streaming viewers with brand-safe placements and measurable performance.",
    icon: "play",
  },
  {
    id: "social",
    title: "Social Media",
    description: "Extend outdoor attention into interactive social journeys that drive conversion.",
    icon: "thumbsUp",
  },
  {
    id: "billboards",
    title: "Digital Billboards",
    description: "Own the streetscape at retail, transit, airports, and premium urban locations.",
    icon: "billboard",
  },
  {
    id: "omni",
    title: "Omnichannel Platform",
    description: "Plan, activate, and measure every screen from a single intelligent control plane.",
    icon: "network",
  },
];

export const brandsJourney = {
  label: "Full-funnel activation",
  title: "From awareness to conversion, we’ve got you covered.",
  description:
    "With Lemma Delta, searching, targeting, planning, launching, and measuring multimedia campaigns has never been easier.",
  bullets: [
    "Audience intelligence across demographics, interests, and behavior",
    "Cross-channel orchestration from DOOH to CTV and beyond",
    "Creative personalization that keeps brands memorable",
    "Real-time optimization as conditions change",
    "Attribution that ties outdoor impressions to outcomes",
  ],
  cta: { label: "Explore Our Platforms", href: "/#products" },
} as const;

export const brandsKpis: BrandsKpi[] = [
  { id: "impressions", label: "Impressions", value: "128.4M", trend: "+12.4%" },
  { id: "reach", label: "Reach", value: "45.7M", trend: "+8.1%" },
  { id: "conversions", label: "Conversions", value: "3.2M", trend: "+18.6%" },
  { id: "roas", label: "ROAS", value: "4.7x", trend: "+9.3%" },
];

export const brandsCapabilities: BrandsCapability[] = [
  {
    id: "audience",
    title: "Audience Intelligence",
    description: "Pinpoint the right people with precise demographic, interest, and behavior signals.",
    icon: "users",
  },
  {
    id: "planning",
    title: "Cross-channel Planning",
    description: "Build unified media plans that connect outdoor moments to every digital follow-up.",
    icon: "map",
  },
  {
    id: "creative",
    title: "Creative Optimization",
    description: "Test, personalize, and refine creatives so every screen works harder for the brand.",
    icon: "palette",
  },
  {
    id: "targeting",
    title: "AI Targeting",
    description: "Use intelligent models to find high-intent audiences at the moments that matter.",
    icon: "crosshair",
  },
  {
    id: "measurement",
    title: "Measurement",
    description: "Track campaign performance with clear analytics across channels and formats.",
    icon: "barChart",
  },
  {
    id: "attribution",
    title: "Attribution",
    description: "Close the loop from outdoor exposure to downstream engagement and conversion.",
    icon: "link",
  },
  {
    id: "personalization",
    title: "Personalization",
    description: "Deliver context-aware messaging that adapts to location, time, and audience.",
    icon: "sparkles",
  },
  {
    id: "programmatic",
    title: "Programmatic Buying",
    description: "Access global inventory with transparent buying and real-time yield controls.",
    icon: "shopping",
  },
];

export const brandsStories: BrandsStory[] = [
  {
    id: "burger-king",
    brand: "Burger King",
    category: "QSR",
    title: "From roadside glance to app conversion",
    description: "Omnichannel DOOH and CTV activation that turned outdoor attention into measurable outcomes.",
    image: "/images/case-studies/burger-king.png",
    href: "/#case-studies",
  },
  {
    id: "etihad",
    brand: "Etihad",
    category: "Travel",
    title: "Premium reach across global corridors",
    description: "High-impact placements that connected travelers with brand storytelling at scale.",
    image: "/images/case-studies/etihad.png",
    href: "/#case-studies",
  },
  {
    id: "schwarzkopf",
    brand: "Schwarzkopf",
    category: "Beauty",
    title: "Beauty moments that convert",
    description: "Audience-led creative and retargeting that amplified awareness into consideration.",
    image: "/images/case-studies/schwarzkopf.png",
    href: "/#case-studies",
  },
  {
    id: "delta-story",
    brand: "Lemma Delta",
    category: "Platform",
    title: "The only omnichannel platform you need",
    description: "Search, target, plan, launch, and measure multimedia campaigns in one workflow.",
    image: "/images/solutions/brands.jpg",
    href: "/#products",
  },
];

export const brandsSuccessMetrics: BrandsStat[] = [
  { id: "screens", value: 1.5, decimals: 1, suffix: "M+", label: "Digital OOH Screens" },
  { id: "impressions", value: 268, suffix: "K+", label: "Avg. Monthly Impact Signals" },
  { id: "roas", value: 4.7, decimals: 1, suffix: "x", label: "Average ROAS Lift" },
  { id: "markets2", value: 40, suffix: "+", label: "Markets Activated" },
  { id: "conversions", value: 3.2, decimals: 1, suffix: "M", label: "Attributed Conversions" },
];

export const brandsTestimonials: BrandsTestimonial[] = [
  {
    id: "t1",
    quote:
      "Lemma helped us turn outdoor impressions into a connected journey. We finally see clear attribution from screen to conversion.",
    name: "Priya Sharma",
    role: "Head of Media",
    company: "Global CPG Brand",
  },
  {
    id: "t2",
    quote:
      "The omnichannel workflow is seamless. Planning DOOH and CTV together cut our activation time dramatically.",
    name: "James Carter",
    role: "Performance Director",
    company: "Omnichannel Agency",
  },
  {
    id: "t3",
    quote:
      "Real-time optimization and transparent measurement gave our team confidence to scale what was working.",
    name: "Aisha Rahman",
    role: "Brand Marketing Lead",
    company: "Retail Group",
  },
];

export const brandsFaqs: BrandsFaq[] = [
  {
    id: "q1",
    question: "How does Lemma help brands go beyond impressions?",
    answer:
      "Lemma connects DOOH and digital activation with retargeting and attribution, so campaigns are planned and measured against outcomes—not just reach.",
  },
  {
    id: "q2",
    question: "Which channels can advertisers activate with Lemma?",
    answer:
      "Brands can activate across DOOH, CTV, OTT, social, digital billboards, and broader digital environments through Lemma’s omnichannel platform stack.",
  },
  {
    id: "q3",
    question: "What is Lemma Delta?",
    answer:
      "Delta is Lemma’s omnichannel demand platform for searching, targeting, planning, launching, and measuring multimedia campaigns in one place.",
  },
  {
    id: "q4",
    question: "Can we target audiences at high-traffic locations?",
    answer:
      "Yes. Lemma’s DOOH network spans retail centers, airports, transit, and premium urban screens with precise audience and location targeting.",
  },
  {
    id: "q5",
    question: "How quickly can we get started?",
    answer:
      "Share your goals through Advertise with us and our team will respond within 24 hours with a tailored activation plan.",
  },
];

export const brandsCta = {
  title: "Ready to Lemmaximize your impact?",
  description:
    "Tell us how to reach you and you’ll hear from us in 24 hours. Let’s turn outdoor attention into measurable growth.",
  primaryCta: { label: "Advertise With Us", href: DEMO_MODAL_HREF },
  secondaryCta: { label: "Talk To An Expert", href: "/contact-us" },
  image: "/images/solutions/brands.jpg",
} as const;
