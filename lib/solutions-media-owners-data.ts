import type {
  BrandsCapability,
  BrandsChannel,
  BrandsFaq,
  BrandsFeature,
  BrandsKpi,
  BrandsStat,
} from "@/lib/solutions-brands-data";
import { DEMO_MODAL_HREF } from "@/lib/demo-cta";

export const mediaOwnersHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/#solutions" },
    { label: "For Media Owners", href: "/solutions/media-owners" },
  ],
  label: "Solutions",
  title: "For Media Owners",
  gradientTitle: "Lemmaster your inventory!",
  description:
    "Your Screens. Your Rules. Our Global Network. Partner with us to monetize, manage, and meticulously measure every aspect of your inventory.",
  primaryCta: { label: "Partner With Us", href: DEMO_MODAL_HREF },
  secondaryCta: { label: "Explore Platforms", href: "/#products" },
  image: "/images/solutions/media-owners-hero.png",
  imageAlt: "Media operations control room with multi-screen analytics and city skyline",
} as const;

export const mediaOwnersStats: BrandsStat[] = [
  { id: "screens", value: 1.5, decimals: 1, suffix: "M+", label: "Screens In Network" },
  { id: "markets", value: 40, suffix: "+", label: "Markets Worldwide" },
  { id: "platforms", value: 5, label: "Proprietary Platforms" },
  { id: "transparency", value: 100, suffix: "%", label: "Monetization Clarity" },
];

export const mediaOwnersWhy = {
  title: "LEMMA for media owners",
  description:
    "Unlock a world of possibilities as you partner with us to monetize, manage, and meticulously measure every aspect of your inventory.",
  features: [
    {
      id: "transparency",
      title: "Transparent Monetization",
      description:
        "Clear, detailed insights into every facet of ad monetization—so you understand revenue streams and performance metrics end to end.",
      accent: "#f82d89",
      icon: "chart",
    },
    {
      id: "inventory",
      title: "Precise Inventory Management",
      description:
        "An intuitive interface that simplifies organizing and prioritizing premium ad placements to optimize revenue and streamline operations.",
      accent: "#008fdb",
      icon: "layers",
    },
    {
      id: "efficiency",
      title: "Automated Efficiency",
      description:
        "From real-time bidding to operational workflows, secure optimal prices and move faster with automation built for media owners.",
      accent: "#009352",
      icon: "zap",
    },
    {
      id: "control",
      title: "Creative Control",
      description:
        "Enforce quality standards, uphold brand safety, and tailor how ads display so every placement aligns with your guidelines.",
      accent: "#a684ff",
      icon: "target",
    },
    {
      id: "partner",
      title: "Strategic Partnership",
      description:
        "Work with a global demand network that treats your inventory as premium—and helps you grow yield without losing control.",
      accent: "#f05a27",
      icon: "sparkles",
    },
  ] satisfies BrandsFeature[],
};

export const mediaOwnersChannels = {
  title: "Platforms built for media owners",
  description:
    "Integrate Lemma Sigma and Phi to gain complete control, transparency, and free content management across your inventory.",
  items: [
    {
      id: "sigma",
      title: "Lemma Sigma",
      description:
        "Integrate with Lemma and gain complete control and transparency over your inventory with a transparent SSP.",
      icon: "boxes",
    },
    {
      id: "phi",
      title: "Lemma Phi",
      description:
        "Introducing Lemma Phi—our DCS that is completely free of cost, so you can manage content without friction.",
      icon: "images",
    },
    {
      id: "rtb",
      title: "Real-Time Bidding",
      description:
        "Capture optimal prices through automation and RTB workflows designed for fast-paced digital advertising.",
      icon: "zap",
    },
    {
      id: "yield",
      title: "Yield Optimization",
      description:
        "Prioritize premium placements and maximize fill while protecting the value of your inventory.",
      icon: "trendingUp",
    },
    {
      id: "safety",
      title: "Brand Safety Controls",
      description:
        "Uphold quality standards and creative guidelines so every ad on your screens meets your rules.",
      icon: "shield",
    },
    {
      id: "insights",
      title: "Revenue Insights",
      description:
        "See clear monetization reporting so you always know what’s driving performance and where to improve.",
      icon: "barChart",
    },
  ] satisfies BrandsChannel[],
};

export const mediaOwnersJourney = {
  label: "Advantage Lemma",
  title: "Get the LEMMA partner benefit",
  description:
    "See workflows and use cases that can be achieved through our platforms—built to help media owners monetize with clarity and control.",
  bullets: [
    "Transparent insights across every revenue stream and performance metric",
    "Intuitive inventory management for premium ad placements",
    "RTB and automation that secure optimal prices with less manual work",
    "Creative controls that enforce quality and brand safety standards",
    "Global demand access that keeps your screens working harder",
  ],
  cta: { label: "Partner With Us", href: DEMO_MODAL_HREF },
} as const;

export const mediaOwnersKpis: BrandsKpi[] = [
  { id: "fill", label: "Fill Rate", value: "94%", trend: "+6.2%" },
  { id: "ecpm", label: "Avg. eCPM", value: "$8.40", trend: "+11.3%" },
  { id: "demand", label: "Demand Partners", value: "120+", trend: "+9.1%" },
  { id: "uptime", label: "Screen Uptime", value: "99.9%", trend: "+0.4%" },
];

export const mediaOwnersCapabilities = {
  title: "Everything media owners need to monetize with confidence",
  items: [
    {
      id: "monetize",
      title: "Inventory Monetization",
      description: "Connect premium screens to global demand and unlock higher-yield opportunities.",
      icon: "shopping",
    },
    {
      id: "manage",
      title: "Inventory Management",
      description: "Organize, prioritize, and operate placements from one intuitive control plane.",
      icon: "map",
    },
    {
      id: "measure",
      title: "Performance Measurement",
      description: "Track monetization metrics with clarity across screens, formats, and partners.",
      icon: "barChart",
    },
    {
      id: "ssp",
      title: "Sigma SSP Access",
      description: "Gain transparent supply-side control with real-time insights and yield tools.",
      icon: "link",
    },
    {
      id: "cms",
      title: "Phi Content Management",
      description: "Run Lemma Phi DCS at no cost to manage creatives and screen content easily.",
      icon: "palette",
    },
    {
      id: "rtb",
      title: "RTB Automation",
      description: "Automate bidding workflows to move faster and secure stronger pricing outcomes.",
      icon: "crosshair",
    },
    {
      id: "safety",
      title: "Brand Safety",
      description: "Set and enforce ad quality rules so your network stays premium and trusted.",
      icon: "users",
    },
    {
      id: "support",
      title: "Partner Support",
      description: "Work with Lemma specialists who help you grow yield without losing ownership.",
      icon: "sparkles",
    },
  ] satisfies BrandsCapability[],
};

export const mediaOwnersSuccessMetrics: BrandsStat[] = [
  { id: "screens", value: 1.5, decimals: 1, suffix: "M+", label: "Digital OOH Screens" },
  { id: "markets", value: 40, suffix: "+", label: "Markets Connected" },
  { id: "demand", value: 120, suffix: "+", label: "Demand Partners" },
  { id: "uptime", value: 99.9, decimals: 1, suffix: "%", label: "Network Reliability" },
  { id: "partners", value: 100, suffix: "%", label: "Partner Transparency" },
];

export const mediaOwnersAnalytics = {
  title: "Scale that compounds into yield",
  description:
    "Tap into global demand with inventory tools, automation, and measurement built for modern media owners.",
} as const;

export const mediaOwnersFaqs: BrandsFaq[] = [
  {
    id: "q1",
    question: "How does Lemma help media owners monetize inventory?",
    answer:
      "Lemma connects your screens to global demand through transparent monetization tools, yield optimization, and clear reporting—so you can manage and measure every aspect of your inventory.",
  },
  {
    id: "q2",
    question: "What is Lemma Sigma?",
    answer:
      "Sigma is Lemma’s transparent SSP that helps media owners maximize inventory yield with real-time insights, demand access, and complete control over supply.",
  },
  {
    id: "q3",
    question: "What is Lemma Phi?",
    answer:
      "Phi is Lemma’s content management system (DCS) offered completely free of cost, helping media owners manage creatives and screen content with ease.",
  },
  {
    id: "q4",
    question: "Can I control which ads appear on my screens?",
    answer:
      "Yes. Lemma puts creative control in your hands so you can enforce quality standards, uphold brand safety, and tailor ad display to your guidelines.",
  },
  {
    id: "q5",
    question: "How quickly can we partner with Lemma?",
    answer:
      "Share your goals through Partner with us and our team will respond within 24 hours with a tailored monetization plan.",
  },
];

export const mediaOwnersCta = {
  title: "Want to Lemmaximize your inventory?",
  description:
    "Tell us how to reach you and you’ll hear from us in 24 hours. Let’s unlock more value from every screen.",
  primaryCta: { label: "Partner With Us", href: DEMO_MODAL_HREF },
  secondaryCta: { label: "Get In Touch", href: "/contact-us" },
  image: "/images/solutions/owners.jpg",
} as const;
