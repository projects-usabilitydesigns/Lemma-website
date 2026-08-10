import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutCta } from "@/components/about/AboutCta";
import { CaseStudies } from "@/components/home/CaseStudies";
import {
  PublishersHero,
  PublishersWhy,
  PublishersFormats,
  PublishersGrowth,
  PublishersCapabilities,
  PublishersSuccess,
  PublishersFaq,
} from "@/components/solutions/publishers";

export const metadata: Metadata = {
  title: "For Publishers",
  description:
    "Unlock premium demand, protect brand safety, and grow yield across digital, CTV, and emerging formats with Lemma's programmatic monetization platform.",
};

export default function PublishersPage() {
  return (
    <>
      <Header />
      <main>
        <PublishersHero />
        <PublishersWhy />
        <PublishersFormats />
        <PublishersGrowth />
        <PublishersCapabilities />
        <PublishersSuccess />
        <CaseStudies />
        <PublishersFaq />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}