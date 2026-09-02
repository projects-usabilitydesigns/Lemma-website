import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Solutions } from "@/components/home/Solutions";
import {
  BrandsHero,
  WhyLemma,
  JourneySection,
  PlatformFeatures,
  CampaignAnalytics,
  CTASection,
} from "@/components/solutions";
import { Faq } from "@/components/Faq";
import {
  mediaOwnersAnalytics,
  mediaOwnersCapabilities,
  mediaOwnersCta,
  mediaOwnersFaqs,
  mediaOwnersHero,
  mediaOwnersJourney,
  mediaOwnersKpis,
  mediaOwnersPlatforms,
  mediaOwnersPlatformsHeading,
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
        <Solutions
          id="platforms"
          label=""
          title={mediaOwnersPlatformsHeading.title}
          description={mediaOwnersPlatformsHeading.description}
          solutions={mediaOwnersPlatforms}
          showBackground={false}
          showFooterCta={false}
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
          className="bg-gradient-to-r from-[#e8f6ff] via-[#f4f7f5] to-[#fce8f2] py-14 md:py-20"
          labelUppercase={false}
          squareCards
        />
        <CaseStudies />
        <Faq items={mediaOwnersFaqs} />
        <CTASection data={mediaOwnersCta} />
      </main>
    </>
  );
}
