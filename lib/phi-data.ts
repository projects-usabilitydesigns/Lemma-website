export function productImage(filename: string) {
  return `/images/${encodeURIComponent(filename)}`;
}

export function productAsset(filename: string) {
  return `/images/products/${encodeURIComponent(filename)}`;
}

export const phiAssets = {
  logo: productAsset("phi-main.svg"),
  heroLogo: productAsset("phi-hero-logo.svg"),
  logoLarge: productAsset("phi.svg"),
  heroGraphic: productImage("Group 1597883478.png"),
  phiSymbol: productImage("ChatGPT Image Aug 4, 2026, 08_12_34 PM 1.png"),
  screens: productImage("ChatGPT Image Aug 5, 2026, 04_41_19 PM 1.png"),
  dashboard: productImage("Frame 1597890339.png"),
  easySetup: productImage("ChatGPT Image Aug 17, 2026, 02_52_18 PM 1.svg"),
  creativeControl: productImage("ChatGPT Image Aug 5, 2026, 05_00_11 PM 1.svg"),
  automatedDemand: productImage("ChatGPT Image Aug 17, 2026, 03_04_13 PM 1.svg"),
  squarePink: productImage("Rectangle 3.png"),
  squareGreen: productImage("Rectangle 4.png"),
  squareOrange: productImage("Rectangle 5.png"),
} as const;

export const phiFaqs = [
  {
    id: "p1",
    question: "What is Lemma Technologies?",
    answer:
      "Lemma is an AI-first omnichannel Adtech platform that helps brands, agencies, and media owners plan, activate, optimize, and measure campaigns across DOOH, CTV, OTT, Mobile, and Audio channels.",
  },
  {
    id: "p2",
    question: "Who can use Lemma’s platform?",
    answer:
      "Brands, agencies, and media owners use Lemma to run and monetize omnichannel campaigns—from global advertisers activating DOOH and CTV to publishers unlocking premium demand.",
  },
  {
    id: "p3",
    question: "What is Lemma Integral?",
    answer:
      "Integral is Lemma's full-funnel platform that turns outdoor impressions into measurable outcomes — activating mass-media reach, reinforcing mid-funnel audiences, and driving digital conversion.",
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
      "Sigma is Lemma's transparent SSP that helps media owners maximize inventory yield with real-time insights and global demand access.",
  },
  {
    id: "p6",
    question: "How does Lemma Phi help media owners?",
    answer:
      "Phi centralizes DOOH content planning, scheduling, and delivery so operators can manage screens, locations, and formats from one platform.",
  },
] as const;

export const phiFeatures = [
  {
    id: "easy-setup",
    title: "Easy Setup",
    body: "With its intuitive self-serve functionality and streamlined user interface, managing, measuring, and controlling your inventory is incredibly simple.",
    image: phiAssets.easySetup,
    imageAlt: "Lemma Phi easy setup dashboard",
    layout: "text-left" as const,
    imageWidth: 674,
    imageHeight: 450,
  },
  {
    id: "creative-control",
    title: "Creative Control",
    body: "From 10-inch screens to massive digital billboards and everything in between, you have the authority to control and approve creatives before rendering them on DOOH.",
    image: phiAssets.creativeControl,
    imageAlt: "Lemma Phi creative control across screens and billboards",
    layout: "image-left" as const,
    imageWidth: 738,
    imageHeight: 410,
  },
  {
    id: "automated-demand",
    title: "Automated Demand Generation",
    body: "By automating the selling process, you can increase efficiency and improve yield and fill rates.",
    image: phiAssets.automatedDemand,
    imageAlt: "Lemma Phi automated demand generation workflow",
    layout: "text-left" as const,
    imageWidth: 828,
    imageHeight: 414,
  },
] as const;
