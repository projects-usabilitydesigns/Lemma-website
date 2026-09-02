import { DEMO_MODAL_HREF } from "@/lib/demo-cta";
import type { BrandsKpi } from "@/lib/solutions-brands-data";

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

export const deltaJourney = {
  label: "Omnichannel DSP Activation",
  title: "Plan, curate, and scale emerging supply effortlessly.",
  description:
    "With Lemma Delta, discovering inventory, curating supply deals, launching, and measuring campaigns across new-age media formats has never been easier.",
  bullets: [
    "Direct access to premium inventory across DOOH, In-venue, CTV, and OTT",
    "3-step streamlined campaign workflow: Plan, Activate, and Measure",
    "Granular deal curation tailored for high-intent audience segments",
    "Dynamic budget allocation to maximize campaign ROI",
    "Unified measurement tracking real-world and cross-device performance",
  ],
  cta: { label: "Explore Lemma Delta", href: DEMO_MODAL_HREF },
} as const;

export const deltaKpis: BrandsKpi[] = [
  { id: "impressions", label: "Impressions", value: "141.2M", trend: "+12.4%" },
  { id: "reach", label: "Reach", value: "53.4M", trend: "+8.1%" },
  { id: "activations", label: "Activations", value: "3.6M", trend: "+15.3%" },
  { id: "budget", label: "Budget Utilization", value: "94.1%", trend: "+4.2%" },
];

export const deltaFaqs = [
  {
    id: "d1",
    question: "What is Lemma Delta?",
    answer:
      "Lemma Delta is the demand-side engine for scaling DOOH, CTV and other media channels with automated bidding, real-time optimization & maximum qualified reach.",
  },
  {
    id: "d2",
    question: "What does Lemma Delta do?",
    answer:
      "Lemma Delta (DSP): Curates supply, manages multi-publisher programmatic buys, and activates campaigns across DOOH, CTV, OTT, and other digital screens.",
  },
  {
    id: "d3",
    question: "Who can use Lemma Delta?",
    answer:
      "Lemma Delta empowers growing agencies and brands to seamlessly execute programmatic campaigns with easy supply deal curation across high-impact DOOH, CTV, and OTT inventory.",
  },
  {
    id: "d4",
    question: "What media channels can I access through Lemma Delta?",
    answer:
      "Lemma Delta connects you to inventory across Digital Out-of-Home (DOOH), Connected TV (CTV), Mobile, Web and OTT streaming channels from a single platform.",
  },
  {
    id: "d5",
    question: "How can brands use Lemma Delta without an existing DSP integration?",
    answer:
      "Lemma Delta is a complete standalone DSP. You can run campaigns directly through Delta's platform through managed services with no external DSP seat required.",
  },
] as const;
