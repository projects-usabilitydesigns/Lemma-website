"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft, Calendar, Clock, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, Stagger, staggerItem } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { newsroomArticles } from "@/lib/newsroom-data";

const INITIAL_COUNT = 9;

function PlayOverlay() {
  return (
    <span
      className="absolute inset-0 z-10 flex items-center justify-center bg-black/15 transition-opacity duration-300 group-hover:bg-black/25"
      aria-hidden
    >
      <span className="flex size-14 items-center justify-center rounded-full bg-white/90 shadow-[0_8px_24px_rgba(9,19,26,0.2)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 md:size-16">
        <Image src="/icons/play-pink.svg" alt="" width={22} height={22} className="ml-0.5" />
      </span>
    </span>
  );
}

export function NewsroomGrid() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const articles = useMemo(
    () => newsroomArticles.slice(0, visibleCount),
    [visibleCount],
  );

  return (
    <section className="bg-white pb-16 pt-8 md:pb-[100px] md:pt-10">
      <Container>
        <FadeUp className="mb-8 md:mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--color-blue-link)] transition-colors hover:text-[var(--color-blue)]"
          >
            <ArrowUpLeft className="size-4" strokeWidth={2.25} />
            Back To Resources
          </Link>
        </FadeUp>

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {articles.map((article) => (
            <motion.a
              key={article.id}
              id={article.id}
              href={article.href}
              variants={staggerItem}
              className="group flex flex-col overflow-hidden border border-[var(--color-border)] bg-white shadow-[0_4px_18px_rgba(9,19,26,0.06)] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(9,19,26,0.1)]"
            >
              <div className="relative aspect-[418/260] overflow-hidden bg-[var(--color-cream-soft)]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <PlayOverlay />
              </div>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <h2 className="mb-4 line-clamp-2 min-h-[52px] text-[18px] font-extrabold tracking-[-0.4px] text-[var(--color-ink)] transition-transform duration-300 group-hover:-translate-y-0.5 md:min-h-[55px] md:text-[20px] md:leading-[27.5px]">
                  {article.title}
                </h2>
                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[var(--color-border)] pt-4 text-[12px] text-[var(--color-slate)]">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-3.5 shrink-0" />
                    {article.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5 shrink-0" />
                    {article.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Eye className="size-3.5 shrink-0" />
                    {article.views}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </Stagger>

        <div className="mt-10 flex justify-center md:mt-12">
          <Button
            type="button"
            variant="primary"
            arrow="right"
            onClick={() =>
              setVisibleCount((count) =>
                Math.min(count + 6, Math.max(newsroomArticles.length, count)),
              )
            }
          >
            Load More
          </Button>
        </div>
      </Container>
    </section>
  );
}
