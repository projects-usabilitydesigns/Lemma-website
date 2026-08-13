"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, Eye, User } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { animation } from "@/lib/design-system";
import { allBlogs, type BlogPostDetail } from "@/lib/resources-page-data";

export function BlogDetailContent({ article }: { article: BlogPostDetail }) {
  const related = allBlogs.filter((blog) => blog.slug !== article.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#e6f4fd] via-[#f0f7ff] to-[#fff0f6]">
        <Container className="relative pb-10 pt-[120px] md:pb-14 md:pt-[140px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animation.duration.slow, ease: animation.easeOut }}
            className="mx-auto flex max-w-[820px] flex-col items-center text-center"
          >
            <Link
              href="/resources/blogs"
              className="group mb-6 inline-flex items-center gap-2 rounded-full border border-[#008fdb]/20 bg-white/80 px-4 py-2 text-[13px] font-medium text-[#008fdb] backdrop-blur-sm transition-all hover:border-[#008fdb]/40 hover:shadow-md"
            >
              <ArrowLeft
                className="size-3.5 transition-transform group-hover:-translate-x-0.5"
                strokeWidth={2.2}
              />
              Back to Blogs
            </Link>

            <span
              className="mb-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[1.5px] text-white"
              style={{ backgroundColor: article.accent }}
            >
              {article.category}
            </span>

            <h1 className="font-heading text-[32px] font-semibold leading-[1.15] tracking-[-0.64px] text-[var(--color-ink)] md:text-[48px] md:leading-[54px]">
              {article.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-[family-name:var(--font-inter)] text-[13px] text-[var(--color-slate)]">
              <span className="flex items-center gap-1.5">
                <User className="size-3.5" strokeWidth={1.8} aria-hidden />
                {article.author}
              </span>
              <span aria-hidden className="text-[var(--color-border)]">
                |
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="size-3.5" strokeWidth={1.8} aria-hidden />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5" strokeWidth={1.8} aria-hidden />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <Eye className="size-3.5" strokeWidth={1.8} aria-hidden />
                {article.views}
              </span>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Hero image */}
      <section className="bg-white pb-12 pt-0 md:pb-16">
        <Container>
          <FadeUp className="relative aspect-[16/8] overflow-hidden rounded-[20px] md:aspect-[16/7]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1188px"
            />
          </FadeUp>
        </Container>
      </section>

      {/* Body */}
      <section className="bg-white pb-12 md:pb-16">
        <Container className="max-w-[760px]">
          <div className="flex flex-col gap-6">
            {article.body.map((section, index) => {
              if (section.type === "heading") {
                return (
                  <FadeUp
                    key={index}
                    delay={0.05}
                    className="pt-4 font-heading text-[22px] font-semibold tracking-[-0.4px] text-[var(--color-ink)] md:text-[28px]"
                  >
                    {section.text}
                  </FadeUp>
                );
              }
              if (section.type === "blockquote") {
                return (
                  <FadeUp
                    key={index}
                    delay={0.05}
                    className="border-l-4 border-[var(--color-pink)] pl-5 font-heading text-[18px] font-medium italic leading-[1.6] text-[var(--color-ink-deep)] md:text-[21px]"
                  >
                    {section.text}
                  </FadeUp>
                );
              }
              return (
                <FadeUp
                  key={index}
                  className="font-[family-name:var(--font-inter)] text-[16px] leading-[1.8] text-[#424242] md:text-[17px]"
                >
                  {section.text}
                </FadeUp>
              );
            })}
          </div>

          {/* Tags */}
          <FadeUp delay={0.1} className="mt-10 flex flex-wrap items-center gap-2.5 border-t border-[var(--color-border)] pt-8">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--color-border)] bg-[#f8f9fb] px-4 py-1.5 text-[12px] font-medium text-[var(--color-slate)]"
              >
                {tag}
              </span>
            ))}
          </FadeUp>
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 ? (
        <section className="bg-[#f8f9fb] pb-16 pt-12 md:pb-24 md:pt-16">
          <Container>
            <FadeUp className="mb-10">
              <h2 className="font-heading text-[28px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[40px] md:leading-[44px]">
                Related Articles
              </h2>
            </FadeUp>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ResourceCard key={item.id} article={item} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}