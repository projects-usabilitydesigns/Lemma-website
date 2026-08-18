import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { AboutCta } from "@/components/about/AboutCta";
import { ArticleDetailContent } from "@/components/resources/ArticleDetailContent";
import { getCaseStudyBySlug, getCaseStudyArticles } from "@/lib/api";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getCaseStudyBySlug(slug);
  if (!article) return { title: "Case Studies" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const [article, posts] = await Promise.all([
    getCaseStudyBySlug(slug),
    getCaseStudyArticles(),
  ]);
  if (!article) notFound();

  const related = posts
    .filter((post) => post.slug !== slug)
    .slice(0, 3)
    .map((post) => ({
      title: post.title,
      href: `/case-studies/${post.slug}`,
      image: post.image,
    }));

  return (
    <>
      <Header />
      <main>
        <ArticleDetailContent article={article} related={related} />
        <AboutCta />
      </main>
    </>
  );
}
