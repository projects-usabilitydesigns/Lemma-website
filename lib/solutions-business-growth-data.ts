import type { BrandsStat } from "@/lib/solutions-brands-data";

export const businessGrowthHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/#solutions" },
    { label: "For Business Growth", href: "/solutions/business-growth" },
  ],
  label: "AI-Driven Performance Marketing",
  title: "Performance That Converts.",
  titleAccent: "Converts.",
  gradientTitle: "",
  description:
    "Full-funnel customer acquisition across every platform, every market, every category powered by data intelligence.",
  primaryCta: { label: "Book a Free Audit", href: "/contact-us" },
  image: "/images/next-frontier.jpg",
  imageAlt: "Lemma AI Discovery — screens, audience reach, and campaign planning",
  video: "/VIDEO-2026-09-09-12-30-13.mp4",
  poster: "/images/solutions/business-growth-poster.png",
} as const;

export const businessGrowthStats: BrandsStat[] = [
  { id: "spend", value: 1.5, decimals: 1, prefix: "₹", suffix: "Cr+", label: "Monthly Spends Managed" },
  { id: "retention", value: 100, suffix: "%", label: "Client Retention Till Date" },
  { id: "platforms", value: 7, label: "Ad Platforms Managed" },
  { id: "markets", value: 4, suffix: "+", label: "Global\nMarkets" },
];

export const businessGrowthPlatforms = {
  label: "Ad Platforms",
  title: "Every platform. One expert team.",
  description:
    "We manage performance campaigns across the world's most powerful ad ecosystems with certified expertise and battle-tested playbooks.",
  items: [
    { id: "chatgpt", name: "ChatGPT" },
    { id: "meta", name: "Meta" },
    { id: "google", name: "Google" },
    { id: "tiktok", name: "TikTok" },
    { id: "twitter", name: "Twitter / X" },
    { id: "linkedin", name: "LinkedIn" },
    { id: "reddit", name: "Reddit" },
    { id: "pinterest", name: "Pinterest" },
  ],
} as const;

export const businessGrowthFunnel = {
  label: "Full Funnel Advertising",
  title: "The only performance agency that starts from the street.",
  titleAccent: "the street.",
  description:
    "Most agencies only manage the bottom of the funnel. Lemma is different we engineer the entire customer journey, from a billboard on the highway to a purchase on your website.",
  stages: [
    {
      id: "tof",
      number: "01",
      label: "Top of Funnel",
      title: "Build Awareness Outdoors",
      description:
        "Programmatic Digital Out-of-Home ads at premium locations — airports, malls, highways, metro stations. Your brand in the physical world, at scale.",
      tags: ["Programmatic DOOH", "CTV", "Lemma Signs"],
      stat: "10M+",
      statLabel: "Monthly OOH Impressions Managed",
      accent: "purple",
    },
    {
      id: "mof",
      number: "02",
      label: "Mid Funnel",
      title: "Retarget Exposed Audiences",
      description:
        "Audiences exposed to your DOOH ads are captured and retargeted across in-app placements and social channels — turning physical impressions into digital intent.",
      tags: ["In-App Ads", "Social Retargeting", "Lemma Integral"],
      stat: "3.2x",
      statLabel: "Higher Intent vs. Cold Audiences",
      accent: "cyan",
    },
    {
      id: "bof",
      number: "03",
      label: "Bottom of Funnel",
      title: "Convert to Customers",
      description:
        "Warm, primed audiences are handed off to performance channels — Meta, Google, Q-Commerce — where we close the loop with precision conversion campaigns.",
      tags: ["Meta", "Google", "CPAS"],
      stat: "4.8x",
      statLabel: "Average ROAS on Warmed Audiences",
      accent: "green",
    },
  ],
} as const;

export const businessGrowthResults = {
  title: "Results that speak first.",
  description: "Real campaigns, real numbers. Here's what we've delivered for brands like yours.",
  items: [
    {
      id: "fmcg",
      category: "FMCG",
      categoryTone: "red",
      title: "Leading FMCG Brand",
      challenge: "Challenge: Scale D2C sales during peak festive season with limited budget headroom.",
      metrics: [
        { label: "ROAS Achieved", value: "4.8x", bar: "green", width: "82%" },
        { label: "CPA Reduction", value: "-38%", bar: "cyan", width: "64%" },
        { label: "Revenue Growth (MoM)", value: "+210%", bar: "purple", width: "94%" },
      ],
      platform: "Platform: Meta + Google + Blinkit CPAS",
    },
    {
      id: "ecommerce",
      category: "E-COMMERCE",
      categoryTone: "blue",
      title: "Fashion E-Commerce",
      challenge: "Challenge: Reduce dependency on discounting while improving new customer acquisition cost.",
      metrics: [
        { label: "New Customer CAC", value: "-45%", bar: "cyan", width: "70%" },
        { label: "CTR Improvement", value: "+3.2x", bar: "green", width: "78%" },
        { label: "Monthly Orders Growth", value: "+180%", bar: "purple", width: "90%" },
      ],
      platform: "Platform: Meta + Google + Pinterest",
    },
    {
      id: "jewellery",
      category: "JEWELLERY",
      categoryTone: "green",
      title: "Premium Jewellery Brand",
      challenge: "Challenge: Build brand consideration while driving footfall to offline stores in Tier 1 cities.",
      metrics: [
        { label: "Store Visit Lift", value: "+62%", bar: "green", width: "72%" },
        { label: "Brand Search Volume", value: "+4.1x", bar: "cyan", width: "80%" },
        { label: "Online-to-Offline ROAS", value: "6.2x", bar: "purple", width: "88%" },
      ],
      platform: "Platform: Meta + Google + DOOH Retargeting",
    },
  ],
} as const;

export const businessGrowthCta = {
  title: "Ready to scale your performance?",
  description:
    "Book a free 30-minute audit. We'll show you exactly where your budget is leaking and how to fix it.",
  primaryCta: { label: "Book a Free Audit", href: "/contact-us" },
} as const;
