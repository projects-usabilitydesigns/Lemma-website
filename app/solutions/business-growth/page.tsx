import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { LogosMarquee } from "@/components/home/LogosMarquee";
import {
  BrandsHero,
  AdPlatforms,
  FunnelJourney,
  GrowthResults,
  CTASection,
} from "@/components/solutions";
import { getClientLogos } from "@/lib/api";
import {
  businessGrowthCta,
  businessGrowthHero,
  businessGrowthStats,
} from "@/lib/solutions-business-growth-data";

export const metadata: Metadata = {
  title: "For Business Growth",
  description:
    "AI-driven performance marketing for entrepreneurs, startups, and SMBs. Full-funnel customer acquisition across every platform, market, and category.",
};

export default async function BusinessGrowthPage() {
  const clientLogos = await getClientLogos();

  return (
    <>
      <Header />
      <main>
        <BrandsHero data={businessGrowthHero} stats={businessGrowthStats} />
        <LogosMarquee clientLogos={clientLogos} bottomTrack="platforms" />
        <AdPlatforms />
        <FunnelJourney />
        <GrowthResults />
        <CTASection data={businessGrowthCta} label="" titleAccent="performance?" />
      </main>
    </>
  );
}
