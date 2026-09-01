"use client";

import { FadeUp } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ResourceCard } from "@/components/resources/ResourceCard";
import type { ResourceArticle } from "@/lib/resources-page-data";

export function NewsroomSection({ articles }: { articles: ResourceArticle[] }) {
  return (
    <section id="newsroom" className="bg-white py-10 md:py-14">
      <Container>
        <FadeUp className="mb-10 max-w-2xl">
          <h2 className="font-heading text-[28px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[40px] md:leading-[44px]">
            Newsroom
          </h2>
          <p className="mt-3 font-[family-name:var(--font-inter)] text-[16px] leading-[1.65] text-[var(--color-slate)] md:text-[18px]">
            Latest updates from Lemma Technologies.
          </p>
        </FadeUp>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <ResourceCard key={article.id} article={article} />
          ))}
        </div>

        <FadeUp delay={0.1} className="mt-10 flex justify-center">
          <Button
            href="/newsroom"
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