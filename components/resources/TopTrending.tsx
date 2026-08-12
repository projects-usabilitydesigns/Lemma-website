"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { topTrending } from "@/lib/resources-page-data";

export function TopTrending() {
  return (
    <section id="top-trending" className="bg-white pb-12 pt-12 md:pb-16 md:pt-16">
      <Container>
        <FadeUp className="mb-10 flex items-center justify-between gap-4">
          <h2 className="font-heading text-[28px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[40px] md:leading-[44px]">
            Top Trending
          </h2>

          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              aria-label="Previous"
              className="flex size-11 items-center justify-center rounded-full border-2 border-[#008fdb] text-[#008fdb] transition-colors hover:bg-[#008fdb] hover:text-white md:size-12"
            >
              <ChevronLeft className="size-5" strokeWidth={2.2} />
            </button>
            <button
              type="button"
              aria-label="Next"
              className="flex size-11 items-center justify-center rounded-full border-2 border-[#008fdb] text-[#008fdb] transition-colors hover:bg-[#008fdb] hover:text-white md:size-12"
            >
              <ChevronRight className="size-5" strokeWidth={2.2} />
            </button>
          </div>
        </FadeUp>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topTrending.map((article) => (
            <ResourceCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}