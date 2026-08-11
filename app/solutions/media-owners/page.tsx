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
  mediaOwnersAnalytics,
  mediaOwnersCapabilities,
  mediaOwnersChannels,
  mediaOwnersCta,
  mediaOwnersFaqTitle,
  mediaOwnersFaqs,
  mediaOwnersHero,
  mediaOwnersJourney,
  mediaOwnersKpis,
  mediaOwnersStats,
  mediaOwnersSuccessMetrics,
  mediaOwnersWhy,
} from "@/lib/solutions-media-owners-data";

export const metadata: Metadata = {
  title: "For Media Owners",
  description:
    "Lemmaster your inventory with Lemma. Your screens, your rules, our global network—monetize, manage, and measure every aspect of your inventory.",
};

export default function MediaOwnersPage() {
  return (
    <>
      <Header />
      <main>
        <BrandsHero data={mediaOwnersHero} stats={mediaOwnersStats} />
        <WhyLemma
          title={mediaOwnersWhy.title}
          description={mediaOwnersWhy.description}
          features={mediaOwnersWhy.features}
        />
        <ChannelGrid
          title={mediaOwnersChannels.title}
          description={mediaOwnersChannels.description}
          channels={mediaOwnersChannels.items}
        />
        <JourneySection
          data={mediaOwnersJourney}
          kpis={mediaOwnersKpis}
          chartTitle="Yield Over Time"
          chartLegend={{ primary: "Fill Rate", secondary: "eCPM" }}
        />
        <PlatformFeatures
          title={mediaOwnersCapabilities.title}
          items={mediaOwnersCapabilities.items}
        />
        <CampaignAnalytics
          title={mediaOwnersAnalytics.title}
          description={mediaOwnersAnalytics.description}
          metrics={mediaOwnersSuccessMetrics}
        />
        <CaseStudies />
        <Faq items={mediaOwnersFaqs} title={mediaOwnersFaqTitle} showViewAll={false} />
        <CTASection data={mediaOwnersCta} />
      </main>
    </>
  );
}
