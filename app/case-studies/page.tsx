import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { AboutCta } from "@/components/about/AboutCta";
import { Faq } from "@/components/Faq";
import { CaseStudiesGrid, CaseStudiesHero } from "@/components/case-studies";
import { caseStudyFaqs } from "@/lib/case-studies-data";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how brands and media owners turn outdoor impressions into measurable outcomes with Lemma Technologies.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main>
        <CaseStudiesHero />
        <CaseStudiesGrid />
        <Faq items={caseStudyFaqs} viewAllHref="/#faq" />
        <AboutCta />
      </main>
    </>
  );
}
