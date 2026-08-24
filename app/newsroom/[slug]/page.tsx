import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { AboutCta } from "@/components/about/AboutCta";
import { ArticleDetailContent } from "@/components/resources/ArticleDetailContent";
import { getNewsroomBySlug, getNewsroomPosts } from "@/lib/api";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsroomBySlug(slug);
  if (!article) return { title: "Newsroom" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function NewsroomDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const [article, posts] = await Promise.all([
    getNewsroomBySlug(slug),
    getNewsroomPosts(),
  ]);
  if (!article) notFound();

  const related = posts
    .filter((post) => post.slug !== slug)
    .slice(0, 3)
    .map((post) => ({
      title: post.title,
      href: `/newsroom/${post.slug}`,
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
