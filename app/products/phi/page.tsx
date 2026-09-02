import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { AboutCta } from "@/components/about/AboutCta";
import { Faq } from "@/components/Faq";
import { PhiHero, PhiIntro, PhiFeatures, PhiCms } from "@/components/products/phi";
import { phiFaqs } from "@/lib/phi-data";

export const metadata: Metadata = {
  title: "Lemma Phi",
  description:
    "Lemma Phi is the superior DOOH content management system for screen and media owners — reduce costs, maximize profits, and run the show with complete control.",
};

export default function PhiProductPage() {
  return (
    <>
      <Header />
      <main>
        <PhiHero />
        <PhiIntro />
        <PhiFeatures />
        <PhiCms />
        <Faq items={phiFaqs} />
        <AboutCta />
      </main>
    </>
  );
}
