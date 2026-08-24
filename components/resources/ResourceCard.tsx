"use client";

import Image from "next/image";
import { Calendar, Clock, Eye } from "lucide-react";
import { FadeUp } from "@/components/animation";
import type { ResourceArticle } from "@/lib/resources-page-data";

export function ResourceCard({
  article,
}: {
  article: ResourceArticle;
}) {
  return (
    <FadeUp className="flex h-full">
      <a
        href={article.href}
        className="group flex h-full flex-col overflow-hidden rounded-[16px] border border-[var(--color-border)] bg-white transition-shadow hover:shadow-[0px_8px_24px_rgba(9,19,26,0.06)]"
      >
        {/* Image area */}
        <div className="relative h-[200px] overflow-hidden md:h-[220px]">
          {article.image ? (
            <Image
              src={article.image}
              alt={article.title ?? ""}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : null}
          {/* Category badge */}
          <span
            className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[1.5px] text-white"
            style={{ backgroundColor: article.accent }}
          >
            {article.category}
          </span>
        </div>

        {/* Content area */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="mb-4 line-clamp-2 font-heading text-[16px] font-semibold leading-[1.35] text-[var(--color-ink)] transition-transform duration-300 group-hover:-translate-y-0.5 md:text-[18px]">
            {article.title}
          </h3>

          <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-[var(--color-border)] pt-3 font-[family-name:var(--font-inter)] text-[12px] text-[var(--color-slate)]">
            <span className="flex items-center gap-1.5">
              <Calendar className="size-3.5" strokeWidth={1.8} aria-hidden />
              {article.date}
            </span>
            {article.readTime ? (
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5" strokeWidth={1.8} aria-hidden />
                {article.readTime}
              </span>
            ) : null}
            {article.views ? (
              <span className="flex items-center gap-1.5">
                <Eye className="size-3.5" strokeWidth={1.8} aria-hidden />
                {article.views}
              </span>
            ) : null}
          </div>
        </div>
      </a>
    </FadeUp>
  );
}