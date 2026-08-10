export function solutionImage(filename: string) {
  return `/images/solutions/${encodeURIComponent(filename)}`;
}

export const agenciesHero = {
  breadcrumb: ["Solutions", "For Agencies"],
  label: "Solutions",
  titlePrefix: "For Agencies",
  gradientTitle: "LEMMA CTV Solutions",
  description:
    "Reach and connect unique audiences at scale across premium streaming TV content in the Open Web — including OTTs and CTV networks — with one powerful platform.",
  primaryCta: { label: "Advertise With Us", href: "#cta" },
  secondaryCta: { label: "Partner With Us", href: "#cta" },
  image: solutionImage("agencies-hero.png"),
  imageAlt: "LEMMA CTV control room with analytics dashboards",
} as const;

export const agenciesStats = [
  { value: "100+", label: "Video Publishers" },
  { value: "40+", label: "Markets Worldwide" },
  { value: "5",    label: "Proprietary Platforms" },
  { value: "100%", label: "Premium CTV Focus" },
] as const;

export const agenciesWhy = {
  label: "Why Lemma",
  title: "All your CTV solutions in one powerful platform",
  description:
    "Lemma brings together scale and expertise in the fastest growing programmatic channel — so agencies can plan, buy, and measure CTV with confidence.",
  cards: [
    { id: "scale",      icon: "BarChart3",   accent: "#f82d89", title: "Scale",                body: "Access a large choice of video publishers for unique CTV needs — direct supply on Lemma Exchange plus curated publishers via leading SSP partners." },
    { id: "targeting",  icon: "Target",      accent: "#1581c5", title: "Targeting",           body: "Reach True TV inventory with viewership and ad exposure signals, genre-based contextual audiences, curated PMPs, and user-level targeting." },
    { id: "discovery",  icon: "Search",      accent: "#009352", title: "Discovery & Measurement", body: "Integrate directly with publishers, validate inventory through accepted measurement partners, and monitor performance in a real-time dashboard." },
    { id: "supply",     icon: "ScreenShare", accent: "#a684ff", title: "TV Supply",            body: "Buy premium CTV with transparent access to quality supply across OTTs, CTV networks, and high-intent streaming environments." },
    { id: "venue",      icon: "MapPin",      accent: "#f05a27", title: "Venue-Based CTV",      body: "A straightforward, transparent way to buy premium CTV screens at contextually relevant real-world locations — available in the USA, rolling out globally." },
  ],
} as const;

export const agenciesStudio = {
  label: "Lemmastudio",
  title: "Stop boring your audience — capture attention with Lemmastudio",
  description:
    "With Lemmastudio you can craft multi-stage campaigns, explore awareness formats, unlock creative automations, and set up dynamic ad placements.",
  accent: "#f82d89",
  cards: [
    { id: "campaigns",    icon: "MousePointerClick", title: "Multi-Stage Campaigns",   body: "Craft sequential journeys that move audiences from awareness to action across premium CTV environments." },
    { id: "awareness",    icon: "Sparkles",          title: "Brand Awareness Formats", body: "Explore creative formats designed to drive brand awareness on streaming TV at scale." },
    { id: "automations",  icon: "Wand2",             title: "Creative Automations",   body: "Unlock creative automations that support sequential objectives without slowing activation." },
    { id: "placements",   icon: "LayoutGrid",        title: "Dynamic Ad Placements",  body: "Set up dynamic placements that adapt messaging to context, audience, and campaign goals." },
    { id: "inventory",    icon: "Tv",                title: "True TV Inventory",     body: "Access premium True TV supply with viewership and exposure insights you can plan against." },
    { id: "pmp",          icon: "ThumbsUp",          title: "Curated PMP Solutions", body: "Activate genre-based contextual audiences and curated private marketplace deals with precision." },
  ],
} as const;

export const agenciesVenueCtv = {
  label: "Venue-Based CTV",
  title: "It's not sorta CTV — it's venue-based CTV advertising",
  description:
    "Lemma introduces a straightforward and transparent way to buy premium CTV screens at contextually relevant real-world locations.",
  bullets: [
    "Premium CTV screens in contextually relevant venues",
    "Transparent buying built for agency workflows",
    "Direct publisher integrations from the source",
    "Third-party validation with globally accepted measurement partners",
    "Real-time dashboards to monitor campaign performance",
  ],
  cta: { label: "Find Venue Based CTV", href: "#cta" },
  metrics: [
    { label: "CTV Reach",        value: "48.2M", change: "+14.1%" },
    { label: "Completion Rate",  value: "96%",   change: "+3.8%"  },
    { label: "Viewability",      value: "91%",   change: "+5.2%"  },
    { label: "Brand Lift",       value: "+18%",  change: "+6.4%"  },
  ],
  chartTitle: "CTV Performance",
  chartSeries: [
    { name: "Reach",       color: "#1581c5" },
    { name: "Completions", color: "#f82d89" },
  ],
} as const;

export const agenciesCapabilities = {
  label: "Platform Capabilities",
  title: "LEMMA data marketplace for smarter CTV buying",
  accent: "#1581c5",
  cards: [
    { id: "first-party",   icon: "Users",        title: "First-Party Data",      body: "Tap into nationally scaled, deterministic signals to sharpen CTV targeting." },
    { id: "genre",         icon: "BookOpen",     title: "Genre-Based Data",      body: "Build contextual CTV audiences around TV genres that match brand intent." },
    { id: "location",      icon: "MapPin",       title: "Location-Based Data",   body: "Connect streaming exposure with real-world location context for stronger relevance." },
    { id: "age-lifestyle", icon: "Sparkles",     title: "Age & Lifestyle Data", body: "Reach the right households with age and lifestyle segments built for TV." },
    { id: "contextual",    icon: "Target",       title: "Contextual Targeting",  body: "Align creatives with content context so every placement feels native to the screen." },
    { id: "third-party",   icon: "Link",         title: "Third-Party Data",      body: "Extend reach with trusted third-party audience data for scaled CTV activation." },
    { id: "viewership",    icon: "BarChart3",    title: "Viewership Data",       body: "Use aggregated viewership insights to plan, optimize, and prove CTV performance." },
    { id: "quality-ctv",   icon: "ShieldCheck",  title: "High-Quality CTV",      body: "Access premium inventory with scale and expertise in programmatic CTV." },
  ],
} as const;

export const agenciesSuccess = {
  label: "Success Metrics",
  title: "Access high-quality CTV at scale",
  description:
    "Lemma brings together scale and expertise in the fastest growing programmatic channel — built for agencies that need outcomes, not just impressions.",
  stats: [
    { value: "100+", label: "Video Publishers" },
    { value: "40+",  label: "Markets Activated" },
    { value: "96%",  label: "Avg. Completion Rate" },
    { value: "91%",  label: "Premium Viewability" },
    { value: "100%", label: "Reporting Clarity" },
  ],
} as const;

export const agenciesFaqs = [
  {
    id: "a1",
    question: "What is Lemma Technologies?",
    answer:
      "Lemma is an AI-first omnichannel AdTech platform that helps brands, agencies, and media owners plan, activate, optimize, and measure campaigns across DOOH, CTV, OTT, Mobile, and Audio channels.",
  },
  {
    id: "a2",
    question: "Who can use Lemma's platform?",
    answer:
      "Brands, agencies, and media owners use Lemma to run and monetize omnichannel campaigns — from global advertisers activating DOOH and CTV to publishers unlocking premium demand.",
  },
  {
    id: "a3",
    question: "What is Lemma Integral?",
    answer:
      "Integral is Lemma's full-funnel activation layer for measuring, retargeting, and attributing every OOH impression with deep audience analytics.",
  },
  {
    id: "a4",
    question: "What does Lemma Delta do?",
    answer:
      "Delta is the demand-side engine for scaling DOOH and CTV with automated bidding, real-time optimization, and maximum qualified reach.",
  },
  {
    id: "a5",
    question: "What is Lemma Sigma?",
    answer:
      "Sigma is Lemma's transparent Supply Side Platform (SSP) that helps media owners maximize inventory yield with real-time insights and global demand access.",
  },
  {
    id: "a6",
    question: "How does Lemma Phi help media owners?",
    answer:
      "Phi centralizes DOOH content planning, scheduling, and delivery so operators can manage screens, locations, and formats from one platform.",
  },
] as const;