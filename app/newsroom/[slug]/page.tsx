import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { AboutCta } from "@/components/about/AboutCta";
import { ArticleDetailContent } from "@/components/resources/ArticleDetailContent";
import { newsroomArticles } from "@/lib/newsroom-data";
import { getNewsroomDetail, getRelatedNewsroom } from "@/lib/newsroom-details";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsroomArticles.map((article) => ({ slug: article.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsroomDetail(slug);
  if (!article) return { title: "Newsroom" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function NewsroomDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getNewsroomDetail(slug);
  if (!article) notFound();

  return (
    <>
      <Header />
      <main>
        <ArticleDetailContent article={article} related={getRelatedNewsroom(slug)} />
        <AboutCta />
      </main>
    </>
  );
}
