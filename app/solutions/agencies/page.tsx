import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
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
  agenciesAnalytics,
  agenciesCapabilities,
  agenciesChannels,
  agenciesCta,
  agenciesFaqTitle,
  agenciesFaqs,
  agenciesHero,
  agenciesJourney,
  agenciesKpis,
  agenciesStats,
  agenciesSuccessMetrics,
  agenciesWhy,
} from "@/lib/solutions-agencies-data";

export const metadata: Metadata = {
  title: "For Agencies",
  description:
    "LEMMA CTV Solutions for agencies—reach unique audiences at scale across premium streaming TV, OTTs, and CTV networks with precise targeting and transparent measurement.",
};

export default function AgenciesPage() {
  return (
    <>
      <Header />
      <main>
        <BrandsHero data={agenciesHero} stats={agenciesStats} />
        <WhyLemma
          title={agenciesWhy.title}
          description={agenciesWhy.description}
          features={agenciesWhy.features}
        />
        <ChannelGrid
          title={agenciesChannels.title}
          description={agenciesChannels.description}
          channels={agenciesChannels.items}
        />
        <JourneySection
          data={agenciesJourney}
          kpis={agenciesKpis}
          chartTitle="CTV Performance"
          chartLegend={{ primary: "Reach", secondary: "Completions" }}
        />
        <PlatformFeatures
          title={agenciesCapabilities.title}
          items={agenciesCapabilities.items}
        />
        <CampaignAnalytics
          title={agenciesAnalytics.title}
          description={agenciesAnalytics.description}
          metrics={agenciesSuccessMetrics}
        />
        <CaseStudies />
        <Faq items={agenciesFaqs} title={agenciesFaqTitle} showViewAll={false} />
        <CTASection data={agenciesCta} />
      </main>
    </>
  );
}
