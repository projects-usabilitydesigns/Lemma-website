import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CaseStudies } from "@/components/home/CaseStudies";
import {
  BrandsHero,
  WhyLemma,
  ChannelGrid,
  JourneySection,
  PlatformFeatures,
  CampaignAnalytics,
  CTASection,
} from "@/components/solutions";
import { Faq } from "@/components/Faq";
import { brandsFaqs } from "@/lib/solutions-brands-data";

export const metadata: Metadata = {
  title: "For Brands & Advertisers",
  description:
    "Lemmaximize your impact with Lemma’s omnichannel advertising solutions for brands and advertisers across DOOH, CTV, OTT, and digital.",
};

export default async function BrandsAdvertisersPage() {
  return (
    <>
      <Header />
      <main>
        <BrandsHero />
        <WhyLemma />
        <ChannelGrid />
        <JourneySection />
        <PlatformFeatures />
        <CampaignAnalytics />
        <CaseStudies />
        <Faq
          items={brandsFaqs}
          title="Answers for brands getting started"
          showViewAll={false}
        />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
