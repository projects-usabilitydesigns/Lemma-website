"use client";

import { useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { ResourceCard } from "@/components/resources/ResourceCard";
import type { ResourceArticle } from "@/lib/resources-page-data";

const AUTO_SLIDE_MS = 3000;

export function TopTrending({ articles }: { articles: ResourceArticle[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  const getCardStep = () => {
    const track = trackRef.current;
    if (!track || track.children.length < 2) return 0;
    const first = track.children[0] as HTMLElement;
    const second = track.children[1] as HTMLElement;
    return second.offsetLeft - first.offsetLeft;
  };

  const scrollToCard = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    const step = getCardStep();
    if (!step) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    let next = track.scrollLeft + direction * step;

    if (next >= maxScroll - 4) {
      next = 0; // reached the end -> loop back to the first card
    } else if (next < 0) {
      next = maxScroll; // going back from the first card -> jump to the last
    }

    track.scrollTo({ left: Math.max(0, next), behavior: "smooth" });
  }, []);

  const startAutoSlide = useCallback(() => {
    if (timerRef.current !== null) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      if (!hoverRef.current) scrollToCard(1);
    }, AUTO_SLIDE_MS);
  }, [scrollToCard]);

  useEffect(() => {
    if (articles.length === 0) return;
    startAutoSlide();
    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
    };
  }, [articles.length, startAutoSlide]);

  // Skip auto-sliding entirely when every card already fits on screen.
  const fitsWithoutScroll =
    articles.length === 0 ||
    (() => {
      const track = trackRef.current;
      return Boolean(track && track.scrollWidth <= track.clientWidth + 4);
    })();

  const manualNav = (direction: 1 | -1) => {
    scrollToCard(direction);
    startAutoSlide(); // reset the timer so it doesn't jump right after a manual click
  };

  if (articles.length === 0) return null;

  return (
    <section id="top-trending" className="bg-white pb-12 pt-12 md:pb-16 md:pt-16">
      <Container>
        <FadeUp className="mb-10 flex items-center justify-between gap-4">
          <h2 className="font-heading text-[28px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[40px] md:leading-[44px]">
            Top Trending
          </h2>

          {!fitsWithoutScroll ? (
            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => manualNav(-1)}
                className="flex size-11 items-center justify-center rounded-full border-2 border-[#008fdb] text-[#008fdb] transition-colors hover:bg-[#008fdb] hover:text-white md:size-12"
              >
                <ChevronLeft className="size-5" strokeWidth={2.2} />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => manualNav(1)}
                className="flex size-11 items-center justify-center rounded-full border-2 border-[#008fdb] text-[#008fdb] transition-colors hover:bg-[#008fdb] hover:text-white md:size-12"
              >
                <ChevronRight className="size-5" strokeWidth={2.2} />
              </button>
            </div>
          ) : null}
        </FadeUp>

        <FadeUp>
          <div
            ref={trackRef}
            onMouseEnter={() => {
              hoverRef.current = true;
            }}
            onMouseLeave={() => {
              hoverRef.current = false;
            }}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {articles.map((article) => (
              <div
                key={article.id}
                className="w-[85%] shrink-0 snap-start sm:w-[48%] lg:w-[calc((100%-3rem)/3)]"
              >
                <ResourceCard article={article} />
              </div>
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
