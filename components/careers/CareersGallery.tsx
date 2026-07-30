"use client";

import { useState } from "react";
import Image from "next/image";
import { FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { careersGallery } from "@/lib/careers-data";
import { cn } from "@/lib/utils";

export function CareersGallery() {
  const [tab, setTab] = useState<"life" | "events">("life");
  const images = tab === "life" ? careersGallery.lifeImages : careersGallery.eventsImages;

  const rows: (typeof images)[] = [];
  for (let i = 0; i < images.length; i += 2) {
    rows.push(images.slice(i, i + 2));
  }

  return (
    <section id="gallery" className="bg-white py-16 md:py-[90px]">
      <Container>
        <div className="mb-10 flex flex-col gap-8 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <FadeUp className="max-w-2xl space-y-5">
            <SectionLabel label={careersGallery.label} accent="blue" />
            <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
              {careersGallery.title}
            </h2>
          </FadeUp>
          <FadeUp delay={0.08} className="max-w-md">
            <p className="text-[16px] leading-[22px] text-[var(--color-slate)]">
              {careersGallery.description}
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.1} className="mb-10 flex items-center gap-8 md:gap-12">
          {careersGallery.tabs.map((item) => {
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={cn(
                  "relative pb-3 text-[18px] uppercase tracking-[-0.3px] transition md:text-[24px]",
                  active
                    ? "font-semibold text-[var(--color-ink)]"
                    : "font-normal text-[var(--color-ink)]/70 hover:text-[var(--color-ink)]",
                )}
              >
                {item.label}
                {active ? (
                  <span className="absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-[var(--color-pink)]" />
                ) : null}
              </button>
            );
          })}
        </FadeUp>

        <div className="flex flex-col gap-5">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={cn(
                "grid gap-5",
                rowIndex % 2 === 0
                  ? "md:grid-cols-[0.9fr_1.1fr]"
                  : "md:grid-cols-[1.1fr_0.9fr]",
              )}
            >
              {row.map((image) => (
                <div
                  key={image.id}
                  className="relative h-[260px] overflow-hidden rounded-[20px] md:h-[420px] lg:h-[520px]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 55vw"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
