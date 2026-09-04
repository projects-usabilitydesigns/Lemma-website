export function productImage(filename: string) {
  return `/images/${encodeURIComponent(filename)}`;
}

export function productAsset(filename: string) {
  return `/images/products/${encodeURIComponent(filename)}`;
}

export const integralAssets = {
  heroFunnel: productImage("Frame 1597890042-nobg.png"),
  heroLogo: productAsset("integral-hero-logo.svg"),
  keyword: productImage("keyword based.png"),
  reinforce: productImage("seamless.png"),
  results: productImage("integral image.png"),
  dashboard: productImage("ChatGPT Image Aug 3, 2026, 07_47_03 PM 1.png"),
  badgeReach: productImage("Frame 1597889835.png"),
  badgeReinforce: productImage("Frame 1597890298.png"),
  badgeResults: productImage("Frame 1597890299.png"),
  audienceGraph: productImage("ChatGPT Image Aug 3, 2026, 08_05_43 PM 1.png"),
  logo: productAsset("integral.svg"),
} as const;

export const integralFaqs = [
  {
    id: "i1",
    question: "What is Lemma?",
    answer:
      "Lemma is a leading global omnichannel media technology platform that enables brands to plan, activate and measure advertising across DOOH, CTV, OTT, MOBILE, WEB, AUDIO, RETAIL and other channels.",
  },
  {
    id: "i2",
    question: "What is the meaning of the name “LEMMA”?",
    answer:
      "Lemma means a path to a solution. It reflects our belief that the right answer isn’t always obvious, it’s discovered in connecting data, technology and intelligence to turn complexity into smarter outcomes.",
  },
  {
    id: "i3",
    question: "What is Lemma Integral?",
    answer:
      "Integral is Lemma's full-funnel activation layer for measuring, retargeting, and attributing every OOH impression with deep audience analytics.",
  },
  {
    id: "i4",
    question: "How is Lemma different from other performance / OOH platforms?",
    answer:
      "Lemma connects media exposure to measurable outcomes across channels, starting with OOH and extending into the wider digital ecosystem. It enables outcome-driven planning, activation and attribution across the audience journey.",
  },
  {
    id: "i5",
    question: "Who can use Lemma Integral?",
    answer:
      "Lemma Integral is for outcome-driven brands, advertisers, agencies & marketers focused on optimizing spend to drive full-funnel outcomes - from brand awareness to mid-funnel consideration and final purchase through a single performance based advertising platform.",
  },
] as const;

export const integralFeatures = [
  {
    id: "keyword",
    title: "Activate “Keyword based” OOH campaigns to garner mass reach",
    body: "Lemma’s AI analyzes your brand’s digital assets to generate audience-relevant keywords, identifies OOH media that aligns with these segments, and activates targeted campaigns on Matched media for maximum impact.",
    image: integralAssets.keyword,
    imageAlt: "Keyword-based OOH activation process",
    layout: "text-left" as const,
    highlight: ["identifies OOH media", "Matched media"],
    titleSize: 36 as const,
    bodySize: 20 as const,
    badge: integralAssets.badgeReach,
    badgeAlt: "REACH",
    badgePosition: "bottom-right" as const,
  },
  {
    id: "reinforce",
    title: "Seamless Audience Mapping & Mid-Funnel Activation",
    body: "Combining spatial lat-long data with household IP anchoring from the Lemma Audience Graph, Lemma Integral seamlessly retargets real-world outdoor audiences across mobile and web",
    image: integralAssets.reinforce,
    imageAlt: "Audience mapping across devices",
    layout: "image-left" as const,
    highlight: ["Lemma Audience Graph", "Lemma Integral"],
    titleSize: 40 as const,
    bodySize: 18 as const,
    badge: integralAssets.badgeReinforce,
    badgeAlt: "REINFORCE",
    badgePosition: "bottom-center" as const,
  },
  {
    id: "results",
    title: "Unmatched Performance & Results",
    body: "Leveraging high-intent audience targeting across Meta, Google, and LinkedIn, Lemma Integral shortens the conversion journey to boost CTRs, website visits, leads, sales & more.",
    image: integralAssets.results,
    imageAlt: "Digital results across social platforms",
    layout: "text-left" as const,
    highlight: ["high-intent audience targeting"],
    titleSize: 40 as const,
    bodySize: 18 as const,
    badge: integralAssets.badgeResults,
    badgeAlt: "RESULTS",
    badgePosition: "bottom-right" as const,
  },
  {
    id: "unified",
    title: "Unified Campaign Control",
    body: "Streamline the management and optimization of your multi-channel campaigns with Lemma Integral's single, intuitive dashboard, providing real-time insights and full control across all platforms.",
    image: integralAssets.dashboard,
    imageAlt: "Lemma Integral campaign dashboard",
    layout: "image-left" as const,
    highlight: [],
    titleSize: 40 as const,
    bodySize: 18 as const,
  },
] as const;
