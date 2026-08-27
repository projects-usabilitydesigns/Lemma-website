import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Faq } from "@/components/Faq";
import { AboutCta } from "@/components/about/AboutCta";
import {
  ResourcesHero,
  TopTrending,
  BlogsSection,
  NewsroomSection,
  CaseStudiesSection,
} from "@/components/resources";
import { faqs } from "@/lib/data";
import { getBlogPosts, getCaseStudyArticles, getNewsroomPosts, getTopTrending } from "@/lib/api";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Stay informed with the latest from Lemma Tech. Explore newsroom updates, case studies, and expert insights shaping the future of digital advertising across DOOH, CTV, and omnichannel.",
};

export default async function ResourcesPage() {
  const [blogs, newsroom, caseStudies, trending] = await Promise.all([
    getBlogPosts(),
    getNewsroomPosts(),
    getCaseStudyArticles(),
    getTopTrending(9),
  ]);

  return (
    <>
      <Header />
      <main>
        <ResourcesHero />
        <TopTrending articles={trending} />
        <BlogsSection blogs={blogs} />
        <NewsroomSection articles={newsroom} />
        <CaseStudiesSection articles={caseStudies} />
        <Faq items={faqs} />
        <AboutCta />
      </main>
    </>
  );
}