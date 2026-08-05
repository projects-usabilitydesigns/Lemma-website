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
  BrandsFAQ,
  CTASection,
} from "@/components/solutions";
import {
  publishersAnalytics,
  publishersCapabilities,
  publishersChannels,
  publishersCta,
  publishersFaqTitle,
  publishersFaqs,
  publishersHero,
  publishersJourney,
  publishersKpis,
  publishersStats,
  publishersSuccessMetrics,
  publishersWhy,
} from "@/lib/solutions-publishers-data";

export const metadata: Metadata = {
  title: "For Publishers",
  description:
    "Programmatic monetization for publishers—grow yield, protect brand safety, and unlock premium demand across web, video, CTV, and more with Lemma.",
};

export default function PublishersPage() {
  return (
    <>
      <Header />
      <main>
        <BrandsHero data={publishersHero} stats={publishersStats} />
        <WhyLemma
          title={publishersWhy.title}
          description={publishersWhy.description}
          features={publishersWhy.features}
        />
        <ChannelGrid
          title={publishersChannels.title}
          description={publishersChannels.description}
          channels={publishersChannels.items}
        />
        <JourneySection
          data={publishersJourney}
          kpis={publishersKpis}
          chartTitle="Revenue Performance"
          chartLegend={{ primary: "eCPM", secondary: "Fill Rate" }}
        />
        <PlatformFeatures
          title={publishersCapabilities.title}
          items={publishersCapabilities.items}
        />
        <CampaignAnalytics
          title={publishersAnalytics.title}
          description={publishersAnalytics.description}
          metrics={publishersSuccessMetrics}
        />
        <CaseStudies />
        <BrandsFAQ title={publishersFaqTitle} items={publishersFaqs} />
        <CTASection data={publishersCta} />
      </main>
      <Footer />
    </>
  );
}
