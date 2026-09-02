import { DEMO_MODAL_HREF } from "@/lib/demo-cta";

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
  easySetup: "/Group%201597883515.svg",
  creativeControl: productImage("ChatGPT Image Aug 5, 2026, 05_00_11 PM 1.svg"),
  automatedDemand: "/Group%201597883516.svg",
  squarePink: productImage("Rectangle 3.png"),
  squareGreen: productImage("Rectangle 4.png"),
  squareOrange: productImage("Rectangle 5.png"),
  laptop: productAsset("phi-laptop.png"),
} as const;

export const phiJourney = {
  label: "Screen Content Management",
  title: "Deploy, manage, and monetize screens effortlessly.",
  description:
    "With Lemma Phi, an enterprise-grade CMS platform, managing screen content and activating programmatic demand has never been easier and is completely free for screen owners.",
  bullets: [
    "Enterprise-grade CMS for robust multi-screen management",
    "Zero cost for platform access and core features",
    "Establish instant programmatic connectivity for immediate ad demand",
    "Optimize for maximum yield and premium advertiser direct deals",
    "Comprehensive reporting for screen health, content performance, and revenue",
  ],
  cta: { label: "Explore Lemma Phi", href: DEMO_MODAL_HREF },
} as const;

export const phiFaqs = [
  {
    id: "p1",
    question: "What is Lemma Phi?",
    answer:
      "Lemma Phi is a free enterprise-grade CMS enabling screen owners to manage multi-screen content schedules while instantly unlocking programmatic demand to maximize yield.",
  },
  {
    id: "p2",
    question: "Who is Lemma Phi for?",
    answer:
      "Lemma Phi is built for DOOH media owners, retail networks, and venue operators needing to manage screens and monetize ad inventory without software costs.",
  },
  {
    id: "p3",
    question: "How much does Lemma Phi cost?",
    answer:
      "Lemma Phi (CMS) is 100% free for digital screen owners and operators. There are zero platform access fees, software licenses, or monthly subscription costs.",
  },
  {
    id: "p4",
    question: "Can I use Lemma Phi without replacing my existing CMS?",
    answer:
      "Yes. Lemma Phi can either completely replace your legacy software or run seamlessly alongside your current CMS via lightweight integration, giving you instant access to programmatic monetization without disrupting existing workflows.",
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
    imageWidth: 805,
    imageHeight: 395,
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
    imageWidth: 540,
    imageHeight: 555,
  },
] as const;
