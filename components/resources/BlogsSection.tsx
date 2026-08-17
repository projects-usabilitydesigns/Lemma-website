"use client";

import { FadeUp } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ResourceCard } from "@/components/resources/ResourceCard";
import type { ResourceArticle } from "@/lib/resources-page-data";

export function BlogsSection({ blogs }: { blogs: ResourceArticle[] }) {
  return (
    <section id="blogs" className="bg-[#f8f9fb] pb-12 pt-12 md:pb-16 md:pt-16">
      <Container>
        <FadeUp className="mb-10 max-w-2xl">
          <h2 className="font-heading text-[28px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[40px] md:leading-[44px]">
            Blogs
          </h2>
          <p className="mt-3 font-[family-name:var(--font-inter)] text-[16px] leading-[1.65] text-[var(--color-slate)] md:text-[18px]">
            Insights driving innovation and growth.
          </p>
        </FadeUp>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(0, 3).map((article) => (
            <ResourceCard key={article.id} article={article} />
          ))}
        </div>

        <FadeUp delay={0.1} className="mt-10 flex justify-center">
          <Button
            href="/resources/blogs"
            variant="primary"
            arrow="right"
            className="normal-case tracking-normal border-white/[0.08] text-white hover:shadow-[0_10px_30px_rgba(0,143,219,0.28)]"
            style={{ backgroundImage: "var(--gradient-cta)" }}
          >
            View All
          </Button>
        </FadeUp>
      </Container>
    </section>
  );
}