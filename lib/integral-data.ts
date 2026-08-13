export function productImage(filename: string) {
  return `/images/${encodeURIComponent(filename)}`;
}

export function productAsset(filename: string) {
  return `/images/products/${encodeURIComponent(filename)}`;
}

export const integralAssets = {
  heroFunnel: productImage("Frame 1597890042-nobg.png"),
  keyword: productImage("keyword based.png"),
  reinforce: productImage("seamless.png"),
  results: productImage("integral image.png"),
  dashboard: productImage("ChatGPT Image Aug 3, 2026, 07_47_03 PM 1.png"),
  badgeReach: productImage("Frame 1597889835.png"),
  badgeReinforce: productImage("Frame 1597890298.png"),
  badgeResults: productImage("Frame 1597890299.png"),
  badgeUnified: productImage("Frame 1597890301.png"),
  audienceGraph: productImage("ChatGPT Image Aug 3, 2026, 08_05_43 PM 1.png"),
  logo: productAsset("integral.svg"),
} as const;

export const integralFaqs = [
  {
    id: "i1",
    question: "What is Lemma Technologies?",
    answer:
      "Lemma is an AI-first omnichannel Adtech platform that helps brands, agencies, and media owners plan, activate, optimize, and measure campaigns across DOOH, CTV, OTT, Mobile, and Audio channels.",
  },
  {
    id: "i2",
    question: "Who can use Lemma’s platform?",
    answer:
      "Brands, agencies, and media owners use Lemma to run and monetize omnichannel campaigns—from global advertisers activating DOOH and CTV to publishers unlocking premium demand.",
  },
  {
    id: "i3",
    question: "What is Lemma Integral?",
    answer:
      "Integral is Lemma's full-funnel platform that turns outdoor impressions into measurable outcomes — activating mass-media reach, reinforcing mid-funnel audiences, and driving digital conversion.",
  },
  {
    id: "i4",
    question: "What does Lemma Delta do?",
    answer:
      "Delta is the demand-side engine for scaling DOOH and CTV with automated bidding, real-time optimization, and maximum qualified reach.",
  },
  {
    id: "i5",
    question: "What is Lemma Sigma?",
    answer:
      "Sigma is Lemma's transparent SSP that helps media owners maximize inventory yield with real-time insights and global demand access.",
  },
  {
    id: "i6",
    question: "How does Lemma Phi help media owners?",
    answer:
      "Phi centralizes DOOH content planning, scheduling, and delivery so operators can manage screens, locations, and formats from one platform.",
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
    body: "Leveraging users household IP addresses of audiences reached through Lemma Audience Graph, you can retarget them on CTV",
    image: integralAssets.reinforce,
    imageAlt: "Audience mapping across devices",
    layout: "image-left" as const,
    highlight: ["Lemma Audience Graph"],
    titleSize: 40 as const,
    bodySize: 18 as const,
    badge: integralAssets.badgeReinforce,
    badgeAlt: "REINFORCE",
    badgePosition: "bottom-center" as const,
  },
  {
    id: "results",
    title: "Unmatched Performance & Results",
    body: "We expand reach and enhance campaign performance with ad placements on Google, Meta, LinkedIn and other platforms.\n\nAchieve best-in-class outcomes with Lemma Integral, delivering higher CTRs, increased website visits, conversions and more.",
    image: integralAssets.results,
    imageAlt: "Digital results across social platforms",
    layout: "text-left" as const,
    highlight: ["Google, Meta, LinkedIn", "higher CTRs, increased website visits, conversions and more"],
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
    badge: integralAssets.badgeUnified,
    badgeAlt: "Unified Campaign Control",
    badgePosition: "bottom-center-overlap" as const,
  },
] as const;
