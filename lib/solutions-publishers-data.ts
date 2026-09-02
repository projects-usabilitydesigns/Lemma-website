import type {
  BrandsCapability,
  BrandsChannel,
  BrandsFaq,
  BrandsFeature,
  BrandsKpi,
  BrandsStat,
} from "@/lib/solutions-brands-data";
import { DEMO_MODAL_HREF } from "@/lib/demo-cta";

export const publishersHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/#solutions" },
    { label: "For Publishers", href: "/solutions/publishers" },
  ],
  label: "Solutions",
  gradientTitle: "Programmatic monetization, maximized",
  description:
    "Unlock premium demand, protect brand safety, and grow yield across digital, CTV, and emerging formats—without giving up control of your inventory.",
  primaryCta: { label: "Partner With Us", href: DEMO_MODAL_HREF },
  secondaryCta: { label: "Explore Platforms", href: "/#products" },
  image: "/images/solutions/publishers-hero-web.png",
  imageAlt: "Publisher workstation showing a news website with display ads and a programmatic yield dashboard",
} as const;

export const publishersStats: BrandsStat[] = [
  { id: "demand", value: 120, suffix: "+", label: "Demand Partners" },
  { id: "markets", value: 40, suffix: "+", label: "Markets Connected" },
  { id: "platforms", value: 5, label: "Proprietary Platforms" },
  { id: "transparency", value: 100, suffix: "%", label: "Revenue Clarity" },
];

export const publishersWhy = {
  title: "Monetize every impression with confidence",
  description:
    "Lemma helps publishers connect premium inventory to high-quality demand, improve yield, and keep full transparency across the monetization stack.",
  features: [
    {
      id: "yield",
      title: "Higher Yield",
      description:
        "Compete for stronger CPMs with transparent auctions, intelligent floor strategies, and access to global brand demand.",
      accent: "#008fdb",
      icon: "chart",
    },
    {
      id: "control",
      title: "Inventory Control",
      description:
        "Set rules, priorities, and deal preferences so every placement reflects your standards and business goals.",
      accent: "#008fdb",
      icon: "layers",
    },
    {
      id: "safety",
      title: "Brand Safety First",
      description:
        "Protect the reader and viewer experience with quality controls that keep low-value demand off your screens.",
      accent: "#009352",
      icon: "target",
    },
    {
      id: "formats",
      title: "Multi-Format Monetization",
      description:
        "Activate display, video, CTV, and DOOH-adjacent opportunities from one connected monetization workflow.",
      accent: "#74be44",
      icon: "sparkles",
    },
    {
      id: "insights",
      title: "Clear Reporting",
      description:
        "See fill, eCPM, demand quality, and revenue trends in real time—so optimization decisions stay data-led.",
      accent: "#f05a27",
      icon: "zap",
    },
  ] satisfies BrandsFeature[],
};

export const publishersChannels = {
  title: "Formats and channels publishers can monetize with Lemma",
  description:
    "Meet audiences wherever attention lives then turn that attention into sustainable, brand-safe revenue.",
  items: [
    {
      id: "display",
      title: "Display & Web",
      description:
        "Monetize premium web inventory with transparent demand paths and stronger yield controls.",
      icon: "monitor",
    },
    {
      id: "video",
      title: "Online Video",
      description:
        "Capture high-value video demand with completion-friendly placements and quality buyers.",
      icon: "play",
    },
    {
      id: "ctv",
      title: "CTV & Streaming",
      description:
        "Extend publisher brands into CTV environments with premium demand and measurable performance.",
      icon: "tv",
    },
    {
      id: "header",
      title: "Header Bidding with Infibid",
      description:
        "Increase competition for every impression with header bidding and unified auction intelligence.",
      icon: "network",
    },
    {
      id: "dooh",
      title: "DOOH Extensions",
      description:
        "Connect digital audiences to outdoor moments and unlock new cross-screen revenue paths.",
      icon: "billboard",
    },
    {
      id: "direct",
      title: "Direct & PMP Deals",
      description:
        "Package premium inventory for curated private marketplace and direct brand relationships.",
      icon: "thumbsUp",
    },
  ] satisfies BrandsChannel[],
};

export const publishersJourney = {
  label: "Publisher growth path",
  title: "From fill rate to future-ready revenue",
  description:
    "Lemma combines SSP access, header bidding, and transparent analytics so publishers can grow yield without sacrificing user experience.",
  bullets: [
    "Connect to global demand while protecting inventory value",
    "Run header bidding and private deals in one coherent stack",
    "Enforce brand safety and ad quality standards at scale",
    "Optimize floors, packages, and priorities with live insights",
    "Expand into CTV and omnichannel formats as audiences shift",
  ],
  cta: { label: "Partner With Us", href: DEMO_MODAL_HREF },
} as const;

export const publishersKpis: BrandsKpi[] = [
  { id: "fill", label: "Fill Rate", value: "95%", trend: "+8.4%" },
  { id: "ecpm", label: "Avg. eCPM", value: "$6.80", trend: "+12.1%" },
  { id: "viewability", label: "Viewability", value: "88%", trend: "+4.6%" },
  { id: "quality", label: "Brand-Safe Fill", value: "99%", trend: "+2.2%" },
];

export const publishersCapabilities = {
  title: "Everything publishers need for programmatic monetization",
  items: [
    {
      id: "ssp",
      title: "Sigma SSP Access",
      description: "Monetize with transparent supply-side tools built for yield and control.",
      icon: "link",
    },
    {
      id: "bidding",
      title: "Header Bidding",
      description: "Increase auction competition and reduce latency across demand partners.",
      icon: "shopping",
    },
    {
      id: "deals",
      title: "PMP & Direct Deals",
      description: "Package premium inventory for trusted brands and curated marketplace buyers.",
      icon: "users",
    },
    {
      id: "floors",
      title: "Dynamic Flooring",
      description: "Protect revenue with smarter floors that adapt to demand and inventory value.",
      icon: "crosshair",
    },
    {
      id: "safety",
      title: "Ad Quality Controls",
      description: "Block low-value creatives and keep the experience aligned with your brand.",
      icon: "palette",
    },
    {
      id: "analytics",
      title: "Revenue Analytics",
      description: "Track fill, eCPM, and demand quality with clear, actionable reporting.",
      icon: "barChart",
    },
    {
      id: "omni",
      title: "Omnichannel Expansion",
      description: "Grow beyond web into video, CTV, and outdoor-linked opportunities.",
      icon: "map",
    },
    {
      id: "support",
      title: "Publisher Success",
      description: "Work with Lemma specialists focused on sustainable monetization growth.",
      icon: "sparkles",
    },
  ] satisfies BrandsCapability[],
};

export const publishersSuccessMetrics: BrandsStat[] = [
  { id: "demand", value: 120, suffix: "+", label: "Demand Partners" },
  { id: "markets", value: 40, suffix: "+", label: "Markets Supported" },
  { id: "fill", value: 95, suffix: "%", label: "Avg. Fill Potential" },
  { id: "quality", value: 99, suffix: "%", label: "Brand-Safe Delivery" },
  { id: "transparency", value: 100, suffix: "%", label: "Auction Clarity" },
];

export const publishersAnalytics = {
  title: "Scale monetization without losing trust",
  description:
    "Publishers win when revenue growth and audience experience move together. Lemma is built for both.",
} as const;

export const publishersFaqs: BrandsFaq[] = [
  {
    id: "q1",
    question: "How does Lemma help publishers monetize inventory?",
    answer:
      "Lemma connects publishers to premium demand through transparent SSP access, header bidding, private deals, and real-time analytics—so you can grow yield while protecting inventory quality.",
  },
  {
    id: "q2",
    question: "What formats can publishers monetize?",
    answer:
      "Publishers can monetize display, online video, CTV/streaming extensions, DOOH-linked opportunities, and curated PMP or direct deals through Lemma’s stack.",
  },
  {
    id: "q3",
    question: "How does header bidding fit in?",
    answer:
      "Header bidding helps publishers increase competition for every impression, improve auction efficiency, and unlock stronger CPMs without adding unnecessary complexity.",
  },
  {
    id: "q4",
    question: "Can we enforce brand safety and ad quality rules?",
    answer:
      "Yes. Lemma gives publishers controls to block low-value demand, uphold creative standards, and keep the audience experience aligned with their brand.",
  },
  {
    id: "q5",
    question: "How quickly can publishers get started?",
    answer:
      "Share your goals through Partner with us and our team will respond within 24 hours with a tailored monetization plan.",
  },
];

export const publishersCta = {
  title: "Want to Lemmaximize your publisher revenue?",
  description:
    "Tell us how to reach you and you’ll hear from us in 24 hours. Let’s turn premium inventory into predictable, brand-safe growth.",
  primaryCta: { label: "Partner With Us", href: DEMO_MODAL_HREF },
  secondaryCta: { label: "Talk To An Expert", href: "/contact-us" },
  image: "/images/solutions/brands.jpg",
} as const;
