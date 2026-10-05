import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { AboutCta } from "@/components/about/AboutCta";
import { Faq } from "@/components/Faq";
import { NewsroomGrid, NewsroomHero } from "@/components/newsroom";
import { newsroomFaqs } from "@/lib/newsroom-data";
import { getNewsroomPosts, getPageSeo } from "@/lib/api";
import { buildMetadataFromSeo } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSeo("newsroom");
  return buildMetadataFromSeo(seo, {
    title: "Newsroom",
    description:
      "Press releases, partnerships, product launches, and company news from Lemma Technologies.",
  });
}

export default async function NewsroomPage() {
  const articles = await getNewsroomPosts();

  return (
    <>
      <Header />
      <main>
        <NewsroomHero />
        <NewsroomGrid articles={articles} />
        <Faq items={newsroomFaqs} />
        <AboutCta />
      </main>
    </>
  );
}
