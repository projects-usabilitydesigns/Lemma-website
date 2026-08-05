import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutCta } from "@/components/about/AboutCta";
import { DeltaHero, DeltaIntro, DeltaAdvantage, DeltaFaq } from "@/components/products/delta";

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
        <DeltaFaq />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}
