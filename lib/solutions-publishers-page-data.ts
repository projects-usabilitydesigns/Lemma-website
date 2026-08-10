export function solutionImage(filename: string) {
  return `/images/solutions/${encodeURIComponent(filename)}`;
}

export const publishersHero = {
  breadcrumb: ["Solutions", "For Publishers"],
  label: "Solutions",
  titlePrefix: "For Publishers",
  gradientTitle: "Programmatic monetization, maximized",
  description:
    "Unlock premium demand, protect brand safety, and grow yield across digital, CTV, and emerging formats — without giving up control of your inventory.",
  primaryCta: { label: "Advertise With Us", href: "#cta" },
  secondaryCta: { label: "Explore Platforms", href: "#products" },
  image: solutionImage("publishers-hero.png"),
  imageAlt: "Cityscape at dusk with LEMMA digital billboard",
} as const;

export const publishersStats = [
  { value: "120+", label: "Demand Partners" },
  { value: "40+",  label: "Markets Connected" },
  { value: "5",    label: "Proprietary Platforms" },
  { value: "100%", label: "Revenue Clarity" },
] as const;

export const publishersWhy = {
  label: "Why Lemma",
  title: "Monetize every impression with confidence",
  description:
    "Lemma helps publishers connect premium inventory to high-quality demand, improve yield, and keep full transparency across the monetization stack.",
  cards: [
    { id: "yield",       icon: "BarChart3", accent: "#f82d89", title: "Higher Yield",           body: "Compete for stronger CPMs with transparent auctions, intelligent floor strategies, and access to global brand demand." },
    { id: "control",     icon: "Layers",    accent: "#1581c5", title: "Inventory Control",     body: "Set rules, priorities, and deal preferences so every placement reflects your standards and business goals." },
    { id: "safety",      icon: "Shield",    accent: "#009352", title: "Brand Safety First",    body: "Protect the reader and viewer experience with quality controls that keep low-value demand off your screens." },
    { id: "multi",       icon: "Sparkles",  accent: "#a684ff", title: "Multi-Format Monetization", body: "Activate display, video, CTV, and DOOH-adjacent opportunities from one connected monetization workflow." },
    { id: "reporting",   icon: "Zap",       accent: "#f05a27", title: "Clear Reporting",       body: "See fill, eCPM, demand quality, and revenue trends in real time — so optimization decisions stay data-led." },
  ],
} as const;

export const publishersFormats = {
  label: "Formats & Channels",
  title: "Formats and channels publishers can monetize with Lemma",
  description:
    "Meet audiences wherever attention lives — then turn that attention into sustainable, brand-safe revenue.",
  accent: "#f82d89",
  cards: [
    { id: "display",  icon: "Monitor",       title: "Display & Web",       body: "Monetize premium web inventory with transparent demand paths and stronger yield controls." },
    { id: "video",    icon: "PlayCircle",    title: "Online Video",        body: "Capture high-value video demand with completion-friendly placements and quality buyers." },
    { id: "ctv",      icon: "Tv",            title: "CTV & Streaming",     body: "Extend publisher brands into CTV environments with premium demand and measurable performance." },
    { id: "bidding",  icon: "Network",       title: "Header Bidding",      body: "Increase competition for every impression with Infibid and unified auction intelligence." },
    { id: "dooh",     icon: "Building2",      title: "DOOH Extensions",    body: "Connect digital audiences to outdoor moments and unlock new cross-screen revenue paths." },
    { id: "pmp",      icon: "ThumbsUp",      title: "Direct & PMP Deals",  body: "Package premium inventory for curated private marketplace and direct brand relationships." },
  ],
} as const;

export const publishersGrowth = {
  label: "Publisher Growth Path",
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
  cta: { label: "Partner With Us", href: "#cta" },
  metrics: [
    { label: "Fill Rate",      value: "95%",   change: "+8.4%"  },
    { label: "Avg. eCPM",      value: "$6.80", change: "+12.1%" },
    { label: "Viewability",    value: "88%",   change: "+4.6%"  },
    { label: "Brand-Safe Fill", value: "99%",  change: "+2.2%"  },
  ],
  chartTitle: "Revenue Performance",
  chartSeries: [
    { name: "eCPM",     color: "#1581c5" },
    { name: "Fill Rate", color: "#f82d89" },
  ],
} as const;

export const publishersCapabilities = {
  label: "Platform Capabilities",
  title: "Everything publishers need for programmatic monetization",
  accent: "#1581c5",
  cards: [
    { id: "sigma-ssp",          icon: "Server",         title: "Sigma SSP Access",       body: "Monetize with transparent supply-side tools built for yield and control." },
    { id: "infibid",            icon: "Code",           title: "Infibid Header Bidding", body: "Increase auction competition and reduce latency across demand partners." },
    { id: "pmp-deals",          icon: "ThumbsUp",       title: "PMP & Direct Deals",    body: "Package premium inventory for trusted brands and curated marketplace buyers." },
    { id: "dynamic-flooring",   icon: "TrendingUp",     title: "Dynamic Flooring",      body: "Protect revenue with smarter floors that adapt to demand and inventory value." },
    { id: "ad-quality",         icon: "ShieldCheck",    title: "Ad Quality Controls",   body: "Block low-value creatives and keep the experience aligned with your brand." },
    { id: "revenue-analytics",   icon: "BarChart3",     title: "Revenue Analytics",      body: "Track fill, eCPM, and demand quality with clear, actionable reporting." },
    { id: "omnichannel",        icon: "Network",        title: "Omnichannel Expansion",  body: "Grow beyond web into video, CTV, and outdoor-linked opportunities." },
    { id: "publisher-success",  icon: "CalendarCheck",  title: "Publisher Success",      body: "Work with Lemma specialists focused on sustainable monetization growth." },
  ],
} as const;

export const publishersSuccess = {
  label: "Success Metrics",
  title: "Scale monetization without losing trust",
  description:
    "Publishers win when revenue growth and audience experience move together. Lemma is built for both.",
  stats: [
    { value: "120+", label: "Demand Partners" },
    { value: "40+",  label: "Markets Activated" },
    { value: "95%",  label: "Avg. Fill Potential" },
    { value: "99%",  label: "Brand-Safe Delivery" },
    { value: "100%", label: "Auction Clarity" },
  ],
} as const;

export const publishersFaqs = [
  {
    id: "p1",
    question: "What is Lemma Technologies?",
    answer:
      "Lemma is an AI-first omnichannel AdTech platform that helps brands, agencies, and media owners plan, activate, optimize, and measure campaigns across DOOH, CTV, OTT, Mobile, and Audio channels.",
  },
  {
    id: "p2",
    question: "Who can use Lemma's platform?",
    answer:
      "Brands, agencies, and media owners use Lemma to run and monetize omnichannel campaigns — from global advertisers activating DOOH and CTV to publishers unlocking premium demand.",
  },
  {
    id: "p3",
    question: "What is Lemma Integral?",
    answer:
      "Integral is Lemma's full-funnel activation layer for measuring, retargeting, and attributing every OOH impression with deep audience analytics.",
  },
  {
    id: "p4",
    question: "What does Lemma Delta do?",
    answer:
      "Delta is the demand-side engine for scaling DOOH and CTV with automated bidding, real-time optimization, and maximum qualified reach.",
  },
  {
    id: "p5",
    question: "What is Lemma Sigma?",
    answer:
      "Sigma is Lemma's transparent Supply Side Platform (SSP) that helps media owners maximize inventory yield with real-time insights and global demand access.",
  },
  {
    id: "p6",
    question: "How does Lemma Phi help media owners?",
    answer:
      "Phi centralizes DOOH content planning, scheduling, and delivery so operators can manage screens, locations, and formats from one platform.",
  },
] as const;