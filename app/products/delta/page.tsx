import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutCta } from "@/components/about/AboutCta";
import { Faq } from "@/components/Faq";
import { DeltaHero, DeltaIntro, DeltaAdvantage } from "@/components/products/delta";
import { deltaFaqs } from "@/lib/delta-data";

export const metadata: Metadata = {
  title: "Lemma Delta",
  description:
    "Lemma Delta is an omnichannel demand platform to plan, activate, and measure new-age digital campaigns across premium digital channels.",
};

export default function DeltaProductPage() {
  return (
    <>
      <Header />
      <main>
        <DeltaHero />
        <DeltaIntro />
        <DeltaAdvantage />
        <Faq items={deltaFaqs} />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}
