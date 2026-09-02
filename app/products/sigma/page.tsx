import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { AboutCta } from "@/components/about/AboutCta";
import { Faq } from "@/components/Faq";
import {
  SigmaHero,
  SigmaFutureReady,
  SigmaFeatures,
  SigmaMonetization,
} from "@/components/products/sigma";
import { sigmaFaqs } from "@/lib/sigma-data";

export const metadata: Metadata = {
  title: "Lemma Sigma",
  description:
    "Lemma Sigma is a transparent Supply Side Platform (SSP) that helps media owners onboard, package, optimize and monetize inventory across DOOH, CTV/OTT and retail media with real-time insights and global demand access.",
};

export default function SigmaProductPage() {
  return (
    <>
      <Header />
      <main>
        <SigmaHero />
        <SigmaFutureReady />
        <SigmaFeatures />
        <SigmaMonetization />
        <Faq items={sigmaFaqs} />
        <AboutCta />
      </main>
    </>
  );
}