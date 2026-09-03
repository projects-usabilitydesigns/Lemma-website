import { DEMO_MODAL_HREF } from "@/lib/demo-cta";
import type { BrandsKpi } from "@/lib/solutions-brands-data";

export function productImage(filename: string) {
  return `/images/${encodeURIComponent(filename)}`;
}

export function productAsset(filename: string) {
  return `/images/products/${encodeURIComponent(filename)}`;
}

export const sigmaAssets = {
  heroPuzzle: "/images/products/sigma/sigma-control.png",
  accessDsp: "/images/products/sigma/access-dsp-4icons.png",
  firstPartyData: "/images/products/sigma/first-party-data.png",
  unifiedAction: "/images/products/sigma/unified-action.png",
  supplyPathTop: "/images/products/sigma/supply-path1.png",
  supplyPath: "/images/products/sigma/supply-path.png",
  logo: productAsset("sigma.svg"),
} as const;

export const sigmaJourney = {
  label: "Programmatic SSP Monetization",
  title: "Integrate, maximize yield, and optimize revenue effortlessly.",
  description:
    "Drive maximum yield for every impression by exposing inventory to concurrent buyers in real time using advanced supply path optimization.",
  bullets: [
    "First-party data onboarding for precise interest-based audience segments",
    "Real-time multi-buyer auctions for maximum impression value and competitive pricing",
    "Direct activation of guaranteed deals",
    "Native yield-optimization tools",
    "Leading 3rd party DSP integrations for preferred deals",
  ],
  cta: { label: "Explore Lemma Sigma", href: DEMO_MODAL_HREF },
} as const;

export const sigmaKpis: BrandsKpi[] = [
  { id: "impressions", label: "Impressions (Auction)", value: "158.3M", trend: "+X.X%" },
  { id: "yield", label: "Yield (eCPM)", value: "$4.89", trend: "+X.X%" },
  { id: "deals", label: "Guaranteed Deals", value: "4.1M", trend: "+X.X%" },
  { id: "fill", label: "Fill Rate", value: "81.2%", trend: "+X.X%" },
];

export const sigmaFaqs = [
  {
    id: "s1",
    question: "What is Lemma Sigma?",
    answer:
      "Lemma Sigma is an SSP empowering publishers to monetize inventory, maximize impression value, and connect with global DSPs seamlessly.",
  },
  {
    id: "s2",
    question: "What does Lemma Sigma do?",
    answer:
      "Lemma Sigma enables publishers to monetize DOOH, CTV, OTT, App, web and mobile inventory through first-party data integration, real-time multi-buyer auctions, and direct integrations with leading DSPs.",
  },
  {
    id: "s3",
    question: "Who is Lemma Sigma for?",
    answer:
      "Lemma Sigma is built for media owners, CTV/OTT/ Web/ App/ Mobile publishers, retail networks, and all digital screens & formats seeking to maximize programmatic ad revenue.",
  },
  {
    id: "s4",
    question: "How does Lemma Sigma protect my inventory's brand safety and pricing control?",
    answer:
      "Lemma Sigma gives media owners complete control by allowing you to set minimum floor prices, manage category blocks, and restrict specific advertisers to protect brand integrity.",
  },
  {
    id: "s5",
    question: "What makes Lemma Sigma different from traditional SSPs?",
    answer:
      "Unlike standard SSPs built purely for web display, Lemma Sigma is purpose-built for DOOH, CTV, and other omnichannel inventory, offering native screen orchestration and precision targeting.",
  },
] as const;

export const sigmaFeatures = [
  {
    id: "access-dsp",
    eyebrow: "Demand Access",
    title: "Tap Global Demand",
    body: "Designed for publishers and media owners, Sigma effortlessly integrates with top demand partners, automating sales and enhancing operational efficiency.",
    highlights: ["top demand partners", "automating sales"],
    image: sigmaAssets.accessDsp,
    imageAlt: "Access DSP — top demand partners, automated sales, enhanced efficiency",
    layout: "text-left" as const,
  },
  {
    id: "first-party-data",
    eyebrow: "Audience Intelligence",
    title: "1st Party Publisher Data",
    body: "Integrating your 1st party publisher data into Lemma Sigma enables the creation of valuable interest-based audience segments, offering advertisers precise targeting opportunities.",
    highlights: ["1st party publisher data", "interest-based audience segments", "precise targeting opportunities"],
    image: sigmaAssets.firstPartyData,
    imageAlt: "1st party publisher data segmented into interest-based audience segments",
    layout: "image-left" as const,
  },
  {
    id: "unified-action",
    eyebrow: "Live Auction",
    title: "Unified Action",
    body: "Maximize impression value by concurrently selling your inventory to multiple buyers in real-time, driving competitive pricing and ensuring every impression achieves its true market value.",
    highlights: ["Maximize impression value", "multiple buyers in real-time", "competitive pricing"],
    image: sigmaAssets.unifiedAction,
    imageAlt: "Unified Action live auction with multiple buyers competing in real-time",
    layout: "text-left" as const,
  },
  {
    id: "supply-path",
    eyebrow: "Revenue Optimization",
    title: "Supply Path Optimization",
    body: "Lemma offers direct activation of guaranteed deals and integrations with leading 3rd party demand-side platforms for preferred deals. This empowers publishers to optimize their long-term revenue potential.",
    highlights: ["direct activation of guaranteed deals", "leading 3rd party demand-side platforms", "optimize their long-term revenue potential"],
    image: sigmaAssets.supplyPathTop,
    imageSecondary: sigmaAssets.supplyPath,
    imageAlt: "Supply Path Optimization — devices, guaranteed deals, third-party demand, and optimized revenue",
    layout: "image-left" as const,
  },
] as const;