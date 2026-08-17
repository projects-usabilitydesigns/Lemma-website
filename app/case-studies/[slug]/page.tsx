import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { AboutCta } from "@/components/about/AboutCta";
import { ArticleDetailContent } from "@/components/resources/ArticleDetailContent";
import { caseStudyArticles } from "@/lib/case-studies-data";
import { getCaseStudyDetail, getRelatedCaseStudies } from "@/lib/case-study-details";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudyArticles.map((article) => ({ slug: article.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getCaseStudyDetail(slug);
  if (!article) return { title: "Case Studies" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getCaseStudyDetail(slug);
  if (!article) notFound();

  return (
    <>
      <Header />
      <main>
        <ArticleDetailContent article={article} related={getRelatedCaseStudies(slug)} />
        <AboutCta />
      </main>
    </>
  );
}
