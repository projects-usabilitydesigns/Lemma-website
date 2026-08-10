import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutCta } from "@/components/about/AboutCta";
import { CaseStudies } from "@/components/home/CaseStudies";
import {
  AgenciesHero,
  AgenciesWhy,
  AgenciesStudio,
  AgenciesVenueCtv,
  AgenciesCapabilities,
  AgenciesSuccess,
  AgenciesFaq,
} from "@/components/solutions/agencies";

export const metadata: Metadata = {
  title: "For Agencies",
  description:
    "Reach and connect unique audiences at scale across premium streaming TV with Lemma's CTV solutions for agencies. Plan, buy, and measure CTV campaigns with confidence.",
};

export default function AgenciesPage() {
  return (
    <>
      <Header />
      <main>
        <AgenciesHero />
        <AgenciesWhy />
        <AgenciesStudio />
        <AgenciesVenueCtv />
        <AgenciesCapabilities />
        <AgenciesSuccess />
        <CaseStudies />
        <AgenciesFaq />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}