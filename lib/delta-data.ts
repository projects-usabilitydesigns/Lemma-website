export function productImage(filename: string) {
  return `/images/${encodeURIComponent(filename)}`;
}

export function productAsset(filename: string) {
  return `/images/products/${encodeURIComponent(filename)}`;
}

export const deltaAssets = {
  heroGraphic: productAsset("delta-hero.svg"),
  heroLogo: productAsset("delta-hero.svg"),
  logo: productAsset("delta.svg"),
  advantage: productImage("lemmaadvantage.png"),
} as const;

export const deltaFaqs = [
  {
    id: "d1",
    question: "What is Lemma Technologies?",
    answer:
      "Lemma is an AI-first omnichannel Adtech platform that helps brands, agencies, and media owners plan, activate, optimize, and measure campaigns across DOOH, CTV, OTT, Mobile, and Audio channels.",
  },
  {
    id: "d2",
    question: "Who can use Lemma’s platform?",
    answer:
      "Brands, agencies, and media owners use Lemma to run and monetize omnichannel campaigns—from global advertisers activating DOOH and CTV to publishers unlocking premium demand.",
  },
  {
    id: "d3",
    question: "What is Lemma Integral?",
    answer:
      "Integral is Lemma's full-funnel platform that turns outdoor impressions into measurable outcomes — activating mass-media reach, reinforcing mid-funnel audiences, and driving digital conversion.",
  },
  {
    id: "d4",
    question: "What does Lemma Delta do?",
    answer:
      "Delta is the demand-side engine for scaling DOOH and CTV with automated bidding, real-time optimization, and maximum qualified reach.",
  },
  {
    id: "d5",
    question: "What is Lemma Sigma?",
    answer:
      "Sigma is Lemma's transparent SSP that helps media owners maximize inventory yield with real-time insights and global demand access.",
  },
  {
    id: "d6",
    question: "How does Lemma Phi help media owners?",
    answer:
      "Phi centralizes DOOH content planning, scheduling, and delivery so operators can manage screens, locations, and formats from one platform.",
  },
] as const;
