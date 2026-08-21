import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { AboutCta } from "@/components/about/AboutCta";
import { Faq } from "@/components/Faq";
import {
  IntegralHero,
  IntegralDeliver,
  IntegralFeatures,
  IntegralAudienceGraph,
} from "@/components/products/integral";
import { integralFaqs } from "@/lib/integral-data";

export const metadata: Metadata = {
  title: "Lemma Integral",
  description:
    "Lemma Integral is a full-funnel platform that transforms OOH impressions into impactful results — reach, reinforce, and convert with measurable outcomes.",
};

export default function IntegralProductPage() {
  return (
    <>
      <Header />
      <main>
        <IntegralHero />
        <IntegralDeliver />
        <IntegralFeatures />
        <IntegralAudienceGraph />
        <Faq items={integralFaqs} className="pt-10 md:pt-16" />
        <AboutCta />
      </main>
    </>
  );
}
