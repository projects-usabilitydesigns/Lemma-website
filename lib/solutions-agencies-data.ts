import type {
  BrandsCapability,
  BrandsChannel,
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
    { label: "For Agencies", href: "/solutions/agencies" },
  ],
  label: "Solutions",
  title: "For Agencies",
  gradientTitle: "LEMMA CTV Solutions",
  description:
    "Reach and connect unique audiences at scale across premium streaming TV content in the Open Web—including OTTs and CTV networks—with one powerful platform.",
  primaryCta: { label: "Advertise With Us", href: DEMO_MODAL_HREF },
  secondaryCta: { label: "Partner With Us", href: DEMO_MODAL_HREF },
  image: "/images/solutions/agencies-hero.png",
  imageAlt: "Lemma agency workspace with campaign analytics dashboards and city skyline",
} as const;

export const agenciesStats: BrandsStat[] = [
  { id: "publishers", value: 100, suffix: "+", label: "Video Publishers" },
  { id: "markets", value: 40, suffix: "+", label: "Markets Worldwide" },
  { id: "platforms", value: 5, label: "Proprietary Platforms" },
  { id: "premium", value: 100, suffix: "%", label: "Premium CTV Focus" },
];

export const agenciesWhy = {
  title: "All your CTV solutions in one powerful platform",
  description:
    "Lemma brings together scale and expertise in the fastest growing programmatic channel—so agencies can plan, buy, and measure CTV with confidence.",
  features: [
    {
      id: "scale",
      title: "Scale",
      description:
        "Access a large choice of video publishers for unique CTV needs—direct supply on Lemma Exchange plus curated publishers via leading SSP partners.",
      accent: "#f82d89",
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
      accent: "#a684ff",
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

export const agenciesChannels = {
  title: "Stop boring your audience—capture attention with Lemmastudio",
  description:
    "With Lemmastudio you can craft multi-stage campaigns, explore awareness formats, unlock creative automations, and set up dynamic ad placements.",
  items: [
    {
      id: "multi-stage",
      title: "Multi-Stage Campaigns",
      description:
        "Craft sequential journeys that move audiences from awareness to action across premium CTV environments.",
      icon: "play",
    },
    {
      id: "awareness",
      title: "Brand Awareness Formats",
      description:
        "Explore creative formats designed to drive brand awareness on streaming TV at scale.",
      icon: "tv",
    },
    {
      id: "automation",
      title: "Creative Automations",
      description:
        "Unlock creative automations that support sequential objectives without slowing activation.",
      icon: "network",
    },
    {
      id: "dynamic",
      title: "Dynamic Ad Placements",
      description:
        "Set up dynamic placements that adapt messaging to context, audience, and campaign goals.",
      icon: "monitor",
    },
    {
      id: "true-tv",
      title: "True TV Inventory",
      description:
        "Access premium True TV supply with viewership and exposure insights you can plan against.",
      icon: "billboard",
    },
    {
      id: "pmp",
      title: "Curated PMP Solutions",
      description:
        "Activate genre-based contextual audiences and curated private marketplace deals with precision.",
      icon: "thumbsUp",
    },
  ] satisfies BrandsChannel[],
};

export const agenciesJourney = {
  label: "Venue-based CTV",
  title: "It's not sorta CTV—it's venue-based CTV advertising",
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
  { id: "markets", value: 40, suffix: "+", label: "Markets Activated" },
  { id: "completion", value: 96, suffix: "%", label: "Avg. Completion Rate" },
  { id: "viewability", value: 91, suffix: "%", label: "Premium Viewability" },
  { id: "transparency", value: 100, suffix: "%", label: "Reporting Clarity" },
];

export const agenciesAnalytics = {
  title: "Access high-quality CTV at scale",
  description:
    "Lemma brings together scale and expertise in the fastest growing programmatic channel—built for agencies that need outcomes, not just impressions.",
} as const;

export const agenciesFaqs: BrandsFaq[] = [
  {
    id: "q1",
    question: "How does Lemma help agencies activate CTV?",
    answer:
      "Lemma provides scale across premium OTT and CTV supply, advanced targeting, direct publisher integrations, and transparent measurement—so agencies can plan and buy CTV in one platform.",
  },
  {
    id: "q2",
    question: "What targeting options are available for CTV?",
    answer:
      "Agencies can access True TV inventory, TV viewership and ad exposure signals, genre-based contextual audiences, curated PMP solutions, and user-level audience targeting.",
  },
  {
    id: "q3",
    question: "How does measurement and validation work?",
    answer:
      "Lemma integrates directly with publishers for source-level data, partners with third parties using globally accepted measurement standards, and provides real-time dashboards for campaign monitoring.",
  },
  {
    id: "q4",
    question: "What is venue-based CTV advertising?",
    answer:
      "Venue-based CTV is a transparent way to buy premium CTV screens at contextually relevant real-world locations. It is currently available in the USA and expanding globally.",
  },
  {
    id: "q5",
    question: "What is Lemmastudio?",
    answer:
      "Lemmastudio helps agencies craft multi-stage campaigns, explore awareness-driving formats, unlock creative automations, and set up dynamic ad placements for stronger CTV storytelling.",
  },
];

export const agenciesFaqTitle = "Answers for agencies getting started with CTV";

export const agenciesCta = {
  title: "Want to Lemmaximize your CTV campaigns?",
  description:
    "Tell us how to reach you and you’ll hear from us in 24 hours. Let’s turn premium streaming attention into measurable results.",
  primaryCta: { label: "Get In Touch", href: "mailto:contactus@lemmamedia.com" },
  secondaryCta: { label: "Advertise With Us", href: DEMO_MODAL_HREF },
  image: "/images/solutions/brands.jpg",
} as const;
