import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import {
  BrandsHero,
  AdPlatforms,
  FunnelJourney,
  GrowthResults,
  CTASection,
} from "@/components/solutions";
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

export default function BusinessGrowthPage() {
  return (
    <>
      <Header />
      <main>
        <BrandsHero data={businessGrowthHero} stats={businessGrowthStats} />
        <AdPlatforms />
        <FunnelJourney />
        <GrowthResults />
        <CTASection data={businessGrowthCta} label="" titleAccent="performance?" />
      </main>
    </>
  );
}
