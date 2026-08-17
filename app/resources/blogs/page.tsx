import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Faq } from "@/components/Faq";
import { AboutCta } from "@/components/about/AboutCta";
import { BlogsPageContent } from "@/components/resources/BlogsPageContent";
import { resourcesFaqs } from "@/lib/resources-page-data";
import { getBlogPosts } from "@/lib/api";

export const metadata: Metadata = {
  title: "Blogs | Lemma",
  description:
    "Read expert insights, industry analysis, and thought leadership on DOOH, CTV, programmatic advertising, and omnichannel marketing from the Lemma team.",
};

export default async function BlogsPage() {
  const blogs = await getBlogPosts();

  return (
    <>
      <Header />
      <main>
        <BlogsPageContent blogs={blogs} />
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
          idPrefix="blogs-faq"
        />
        <AboutCta />
      </main>
    </>
  );
}
