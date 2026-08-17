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
import {
  resourcesFaqs,
} from "@/lib/resources-page-data";
import { getBlogPosts } from "@/lib/api";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Stay informed with the latest from Lemma Tech. Explore newsroom updates, case studies, and expert insights shaping the future of digital advertising across DOOH, CTV, and omnichannel.",
};

export default async function ResourcesPage() {
  const blogs = await getBlogPosts();

  return (
    <>
      <Header />
      <main>
        <ResourcesHero />
        <TopTrending />
        <BlogsSection blogs={blogs} />
        <NewsroomSection />
        <CaseStudiesSection />
        <Faq
          items={resourcesFaqs}
          title={
            <>
              Helpful Answers Before
              <br />
              <span className="italic text-[var(--color-pink)]">You Get Started</span>
            </>
          }
          showViewAll={false}
          sectionId="faq"
          idPrefix="resources-faq"
        />
        <AboutCta />
      </main>
    </>
  );
}