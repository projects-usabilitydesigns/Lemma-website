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
import {
  networkOperatorsAnalytics,
  networkOperatorsCapabilities,
  networkOperatorsChannels,
  networkOperatorsCta,
  networkOperatorsFaqTitle,
  networkOperatorsFaqs,
  networkOperatorsHero,
  networkOperatorsJourney,
  networkOperatorsKpis,
  networkOperatorsStats,
  networkOperatorsSuccessMetrics,
  networkOperatorsWhy,
} from "@/lib/solutions-network-operators-data";

export const metadata: Metadata = {
  title: "For Network Operators",
  description:
    "LEMMA DOOH solutions for network operators—bridge brands and global audiences across 1Mn+ premium screens with location-based AdTech and geospatial intelligence.",
};

export default function NetworkOperatorsPage() {
  return (
    <>
      <Header />
      <main>
        <BrandsHero data={networkOperatorsHero} stats={networkOperatorsStats} />
        <WhyLemma
          title={networkOperatorsWhy.title}
          description={networkOperatorsWhy.description}
          features={networkOperatorsWhy.features}
        />
        <ChannelGrid
          title={networkOperatorsChannels.title}
          description={networkOperatorsChannels.description}
          channels={networkOperatorsChannels.items}
        />
        <JourneySection
          data={networkOperatorsJourney}
          kpis={networkOperatorsKpis}
          chartTitle="Network Performance"
          chartLegend={{ primary: "Fill Rate", secondary: "Reach" }}
        />
        <PlatformFeatures
          title={networkOperatorsCapabilities.title}
          items={networkOperatorsCapabilities.items}
        />
        <CampaignAnalytics
          title={networkOperatorsAnalytics.title}
          description={networkOperatorsAnalytics.description}
          metrics={networkOperatorsSuccessMetrics}
        />
        <CaseStudies />
        <Faq
          items={networkOperatorsFaqs}
          title={networkOperatorsFaqTitle}
          showViewAll={false}
        />
        <CTASection data={networkOperatorsCta} />
      </main>
      <Footer />
    </>
  );
}
