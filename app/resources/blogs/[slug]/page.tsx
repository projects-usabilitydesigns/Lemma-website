import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { AboutCta } from "@/components/about/AboutCta";
import { Container } from "@/components/ui/Container";
import { BlogDetailContent } from "@/components/resources/BlogDetailContent";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/api";

export const metadata: Metadata = {
  title: "Blogs | Lemma",
  description:
    "Read expert insights, industry analysis, and thought leadership on DOOH, CTV, programmatic advertising, and omnichannel marketing from the Lemma team.",
};

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [article, blogs] = await Promise.all([
    getBlogPostBySlug(slug),
    getBlogPosts(),
  ]);

  if (!article) {
    return (
      <>
        <Header />
        <main>
          <section className="bg-gradient-to-br from-[#e6f4fd] via-[#f0f7ff] to-[#fff0f6]">
            <Container className="flex min-h-[60vh] flex-col items-center justify-center pb-16 pt-[120px] text-center md:pt-[140px]">
              <h1 className="font-heading text-[32px] font-semibold tracking-[-0.64px] text-[var(--color-ink)] md:text-[40px]">
                Article not available
              </h1>
              <p className="mt-3 max-w-md text-[16px] text-[var(--color-slate)]">
                This article may not have been published yet. Check back soon.
              </p>
              <Link
                href="/resources/blogs"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-[#008fdb]/20 bg-white/80 px-4 py-2 text-[13px] font-medium text-[#008fdb] backdrop-blur-sm transition-all hover:border-[#008fdb]/40 hover:shadow-md"
              >
                <ArrowLeft
                  className="size-3.5 transition-transform group-hover:-translate-x-0.5"
                  strokeWidth={2.2}
                />
                Back to Blogs
              </Link>
            </Container>
          </section>
        </main>
      </>
    );
  }

  const related = blogs.filter((blog) => blog.slug !== slug).slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <BlogDetailContent article={article} related={related} />
        <AboutCta />
      </main>
    </>
  );
}
