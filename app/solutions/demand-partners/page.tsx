import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { CaseStudies } from "@/components/home/CaseStudies";
import {
  BrandsHero,
  WhyLemma,
  LemmaOffers,
  ConsumerJourney,
  WhyLemmaCtv,
  CampaignAnalytics,
  CTASection,
} from "@/components/solutions";
import { Faq } from "@/components/Faq";
import {
  agenciesAnalytics,
  agenciesCta,
  agenciesFaqs,
  agenciesHero,
  agenciesOmnichannel,
  agenciesStats,
  agenciesSuccessMetrics,
  agenciesWhy,
  agenciesWhyCtv,
} from "@/lib/solutions-agencies-data";

export const metadata: Metadata = {
  title: "For Demand Partners",
  description:
    "LEMMA CTV Solutions—reach unique audiences at scale across premium streaming TV, OTTs, and CTV networks with precise targeting and transparent measurement.",
};

export default function DemandPartnersPage() {
  return (
    <>
      <Header />
      <main>
        <BrandsHero data={agenciesHero} stats={agenciesStats} />
        <WhyLemma
          title={agenciesWhy.title}
          description={agenciesWhy.description}
          visual={
            <div className="relative mx-auto w-full max-w-[1100px] overflow-hidden rounded-[16px]">
              <Image
                src="/images/solutions/why-lemma-ctv.png"
                alt="Semantic analysis with Smart AI across devices, and audience mapping to relevant CTV households"
                width={1206}
                height={482}
                className="h-auto w-full"
                sizes="(max-width: 1100px) 100vw, 1100px"
              />
            </div>
          }
        />
        <LemmaOffers />
        <ConsumerJourney data={agenciesOmnichannel} />
        <WhyLemmaCtv data={agenciesWhyCtv} />
        <CampaignAnalytics
          title={agenciesAnalytics.title}
          description={agenciesAnalytics.description}
          metrics={agenciesSuccessMetrics}
        />
        <CaseStudies />
        <Faq items={agenciesFaqs} />
        <CTASection data={agenciesCta} />
      </main>
    </>
  );
}
