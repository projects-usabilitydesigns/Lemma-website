import type {
  BrandsCapability,
  BrandsChannel,
  BrandsFaq,
  BrandsFeature,
  BrandsKpi,
  BrandsStat,
} from "@/lib/solutions-brands-data";
import { DEMO_MODAL_HREF } from "@/lib/demo-cta";

export const networkOperatorsHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/#solutions" },
    { label: "For Network Operators", href: "/solutions/network-operators" },
  ],
  label: "Solutions",
  gradientTitle: "LEMMA DOOH Solutions",
  description:
    "Bridging brands and global audiences across a large, unmatched network of premium digital out-of-home screens—powered by location-based AdTech.",
  primaryCta: { label: "Advertise With Us", href: DEMO_MODAL_HREF },
  secondaryCta: { label: "Partner With Us", href: DEMO_MODAL_HREF },
  image: "/images/solutions/network-operators-hero.png",
  imageAlt: "Network operations command center with global screen dashboard and live feeds",
} as const;

export const networkOperatorsStats: BrandsStat[] = [
  { id: "screens", value: 1, suffix: "Mn+", label: "DOOH Screens Globally" },
  { id: "networks", value: 92, suffix: "+", label: "Premium Networks In India" },
  { id: "india-screens", value: 400, suffix: "K", label: "Exclusive India Screens" },
  { id: "clusters", value: 50, suffix: "+", label: "High-Demand Clusters" },
];

export const networkOperatorsWhy = {
  title: "Discover our large & unmatched network of global premium screens",
  description:
    "Lemma helps network operators connect inventory to global demand while transforming top screen hubs with tech-powered displays.",
  features: [
    {
      id: "global",
      title: "1Mn+ Global Screens",
      description:
        "Access more than one million DOOH screens across the globe to scale reach and inventory value.",
      accent: "#008fdb",
      icon: "layers",
    },
    {
      id: "exclusivity",
      title: "Premium Network Exclusivity",
      description:
        "100% exclusivity on 92+ premium screen networks in India covering 400K screens.",
      accent: "#008fdb",
      icon: "target",
    },
    {
      id: "clusters",
      title: "High-Demand Clusters",
      description:
        "Activate 50+ high-demand cluster locations spanning retail, transit, and other premium environments.",
      accent: "#009352",
      icon: "zap",
    },
    {
      id: "tech",
      title: "Tech-Powered Displays",
      description:
        "Transform top screen hubs globally with intelligent activation, operations, and performance tooling.",
      accent: "#74be44",
      icon: "sparkles",
    },
    {
      id: "partners",
      title: "pDOOH Partners",
      description:
        "Grow with a programmatic DOOH partner network built for yield, transparency, and brand-safe delivery.",
      accent: "#f05a27",
      icon: "chart",
    },
  ] satisfies BrandsFeature[],
};

export const networkOperatorsChannels = {
  title: "Location-based AdTech that activates every platform",
  description:
    "Capable of activating various types of location-based ads across all platforms—while creating unique narrative journeys for maximum efficiency.",
  items: [
    {
      id: "location-ads",
      title: "Location-Based Ads",
      description:
        "Activate location-based advertising formats across DOOH and connected platforms with precision.",
      icon: "billboard",
    },
    {
      id: "storytelling",
      title: "Seamless Storytelling",
      description:
        "Create unique narrative journeys across large-format screens for stronger brand impact.",
      icon: "play",
    },
    {
      id: "interactive",
      title: "Interactive Creatives",
      description:
        "Partner with third-party creative tools to deliver highly interactive DOOH and CTV experiences.",
      icon: "monitor",
    },
    {
      id: "retail",
      title: "Retail Media Clusters",
      description:
        "Reach high-intent audiences in premium retail environments with contextual DOOH placements.",
      icon: "thumbsUp",
    },
    {
      id: "transit",
      title: "Transit Media",
      description:
        "Activate transit hubs and mobility corridors where attention and footfall converge.",
      icon: "tv",
    },
    {
      id: "hubs",
      title: "Global Screen Hubs",
      description:
        "Transform top screen hubs worldwide with tech-powered displays and partner-ready workflows.",
      icon: "network",
    },
  ] satisfies BrandsChannel[],
};

export const networkOperatorsJourney = {
  label: "Geospatial signals",
  title: "Data’s emerging dimension",
  description:
    "Geospatial signals transform the way data is interpreted—with heightened precision, contextual relevance, and deeper insights into patterns and trends.",
  bullets: [
    "Higher precision in audience and location interpretation",
    "Contextual relevance that improves creative and placement decisions",
    "Deeper insight into movement patterns and demand trends",
    "Activation of location-based ads across platforms",
    "Seamless storytelling across large-format DOOH journeys",
  ],
  cta: { label: "Partner With Us", href: DEMO_MODAL_HREF },
} as const;

export const networkOperatorsKpis: BrandsKpi[] = [
  { id: "fill", label: "Network Fill", value: "93%", trend: "+7.2%" },
  { id: "reach", label: "Daily Reach", value: "12.4M", trend: "+9.5%" },
  { id: "uptime", label: "Screen Uptime", value: "99.8%", trend: "+0.6%" },
  { id: "yield", label: "Yield Lift", value: "+22%", trend: "+4.1%" },
];

export const networkOperatorsCapabilities = {
  title: "Everything network operators need to scale DOOH with confidence",
  items: [
    {
      id: "inventory",
      title: "Premium Inventory Access",
      description: "Connect brands to global premium screens across retail, transit, and urban hubs.",
      icon: "map",
    },
    {
      id: "exclusivity",
      title: "Exclusive Networks",
      description: "Operate with exclusive relationships across high-value screen networks at scale.",
      icon: "link",
    },
    {
      id: "location",
      title: "Location-Based Activation",
      description: "Trigger ads with geospatial intelligence for contextual, high-intent delivery.",
      icon: "crosshair",
    },
    {
      id: "creative",
      title: "Large-Format Creative",
      description: "Enable interactive storytelling on DOOH and CTV through partner creative tools.",
      icon: "palette",
    },
    {
      id: "cms",
      title: "Free CMS Upgrade",
      description: "Switch to Lemma Phi and upgrade your content management system for free.",
      icon: "sparkles",
    },
    {
      id: "pdooh",
      title: "Programmatic DOOH",
      description: "Monetize inventory programmatically with transparent demand and yield controls.",
      icon: "shopping",
    },
    {
      id: "insights",
      title: "Geospatial Insights",
      description: "Use spatial data to uncover patterns, trends, and stronger planning decisions.",
      icon: "barChart",
    },
    {
      id: "support",
      title: "Operator Partnership",
      description: "Work with Lemma specialists to grow screen value without losing network control.",
      icon: "users",
    },
  ] satisfies BrandsCapability[],
};

export const networkOperatorsSuccessMetrics: BrandsStat[] = [
  { id: "screens", value: 1, suffix: "Mn+", label: "DOOH Screens Globally" },
  { id: "networks", value: 92, suffix: "+", label: "Exclusive India Networks" },
  { id: "india", value: 400, suffix: "K", label: "India Screens Covered" },
  { id: "clusters", value: 50, suffix: "+", label: "High-Demand Clusters" },
  { id: "uptime", value: 99.8, decimals: 1, suffix: "%", label: "Network Reliability" },
];

export const networkOperatorsAnalytics = {
  title: "Transforming top screen hubs, globally",
  description:
    "From exclusive premium networks to geospatial activation, Lemma equips network operators to monetize DOOH with precision and scale.",
} as const;

export const networkOperatorsFaqs: BrandsFaq[] = [
  {
    id: "q1",
    question: "How does Lemma support network operators?",
    answer:
      "Lemma connects premium DOOH inventory to global demand with location-based AdTech, exclusive network partnerships, creative storytelling tools, and free CMS upgrades through Phi.",
  },
  {
    id: "q2",
    question: "How large is Lemma’s DOOH screen network?",
    answer:
      "Lemma provides access to 1Mn+ DOOH screens globally, including 100% exclusivity on 92+ premium screen networks in India covering 400K screens, plus 50+ high-demand cluster locations.",
  },
  {
    id: "q3",
    question: "What is location-based AdTech?",
    answer:
      "Location-based AdTech activates ads across platforms using geospatial signals for higher precision, contextual relevance, and deeper insight into audience patterns and trends.",
  },
  {
    id: "q4",
    question: "Can operators upgrade their CMS with Lemma?",
    answer:
      "Yes. Network operators can switch to Lemma Phi and upgrade their CMS for free—simplifying content management across screens and formats.",
  },
  {
    id: "q5",
    question: "How do interactive creatives work on DOOH?",
    answer:
      "Lemma partners with third-party creative tools so operators and brands can deliver highly interactive creatives on large formats like DOOH and CTV.",
  },
];

export const networkOperatorsCta = {
  title: "Want to Lemmaximize your inventory?",
  description:
    "Tell us how to reach you and you’ll hear from us in 24 hours. Let’s unlock more value across every screen in your network.",
  primaryCta: { label: "Get In Touch", href: "mailto:contactus@lemmamedia.com" },
  secondaryCta: { label: "Partner With Us", href: DEMO_MODAL_HREF },
  image: "/images/solutions/owners.jpg",
} as const;
