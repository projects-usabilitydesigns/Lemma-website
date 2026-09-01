export function productImage(filename: string) {
  return `/images/${encodeURIComponent(filename)}`;
}

export function productAsset(filename: string) {
  return `/images/products/${encodeURIComponent(filename)}`;
}

export const sigmaAssets = {
  heroPuzzle: "/images/products/sigma/sigma-control.png",
  accessDsp: "/images/products/sigma/access-dsp-circle.png",
  firstPartyData: "/images/products/sigma/first-party-data.png",
  unifiedAction: "/images/products/sigma/unified-action.png",
  supplyPathTop: "/images/products/sigma/supply-path1.png",
  supplyPath: "/images/products/sigma/supply-path.png",
  logo: productAsset("sigma.svg"),
} as const;

export const sigmaFaqs = [
  {
    id: "s1",
    question: "What is Lemma Technologies?",
    answer:
      "Lemma is an AI-first omnichannel AdTech platform that helps brands, agencies, and media owners plan, activate, optimize, and measure campaigns across DOOH, CTV, OTT, Mobile, and Audio channels.",
  },
  {
    id: "s2",
    question: "Who can use Lemma’s platform?",
    answer:
      "Brands, agencies, and media owners use Lemma to run and monetize omnichannel campaigns—from global advertisers activating DOOH and CTV to publishers unlocking premium demand.",
  },
  {
    id: "s3",
    question: "What is Lemma Integral?",
    answer:
      "Integral is Lemma's full-funnel activation layer for measuring, retargeting, and attributing every OOH impression with deep audience analytics.",
  },
  {
    id: "s4",
    question: "What does Lemma Delta do?",
    answer:
      "Delta is the demand-side engine for scaling DOOH and CTV with automated bidding, real-time optimization, and maximum qualified reach.",
  },
  {
    id: "s5",
    question: "What is Lemma Sigma?",
    answer:
      "Sigma is Lemma's transparent Supply Side Platform (SSP) that helps media owners maximize inventory yield with real-time insights, demand access, and complete transparency across DOOH, CTV/OTT, and retail media.",
  },
  {
    id: "s6",
    question: "How does Lemma Phi help media owners?",
    answer:
      "Phi centralizes DOOH content planning, scheduling, and delivery so operators can manage screens, locations, and formats from one platform.",
  },
] as const;

export const sigmaFeatures = [
  {
    id: "access-dsp",
    eyebrow: "Demand Access",
    title: "Access DSP",
    body: "Designed for publishers and media owners, Sigma effortlessly integrates with top demand partners, automating sales and enhancing operational efficiency.",
    highlights: ["top demand partners", "automating sales", "enhanced operational efficiency"],
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