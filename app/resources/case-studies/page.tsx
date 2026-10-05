import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { AboutCta } from "@/components/about/AboutCta";
import { Faq } from "@/components/Faq";
import { CaseStudiesGrid, CaseStudiesHero } from "@/components/case-studies";
import { caseStudyFaqs } from "@/lib/case-studies-data";
import { getCaseStudyArticles, getPageSeo } from "@/lib/api";
import { buildMetadataFromSeo } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSeo("case-studies");
  return buildMetadataFromSeo(seo, {
    title: "Case Studies",
    description:
      "See how brands and media owners turn outdoor impressions into measurable outcomes with Lemma Technologies.",
  });
}

export default async function CaseStudiesPage() {
  const articles = await getCaseStudyArticles();

  return (
    <>
      <Header />
      <main>
        <CaseStudiesHero />
        <CaseStudiesGrid articles={articles} />
        <Faq items={caseStudyFaqs} />
        <AboutCta />
      </main>
    </>
  );
}
