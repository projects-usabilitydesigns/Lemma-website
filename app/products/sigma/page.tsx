import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutCta } from "@/components/about/AboutCta";
import {
  SigmaHero,
  SigmaFutureReady,
  SigmaFeatures,
  SigmaFaq,
} from "@/components/products/sigma";

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
        <SigmaFaq />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}