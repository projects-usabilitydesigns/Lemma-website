"use client";

import Image from "next/image";
import { FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { careersGallery } from "@/lib/careers-data";
import { cn } from "@/lib/utils";

export function CareersGallery() {
  const images = careersGallery.lifeImages;
  const rows: (typeof images)[] = [];
  for (let i = 0; i < images.length; i += 2) {
    rows.push(images.slice(i, i + 2));
  }

  return (
    <section id="gallery" className="bg-white py-16 md:py-[90px]">
      <Container>
        <FadeUp className="mb-10 max-w-2xl space-y-5 md:mb-12">
          <SectionLabel label={careersGallery.label} accent="blue" />
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            {careersGallery.title}
          </h2>
        </FadeUp>

        <FadeUp delay={0.1} className="mb-10 md:mb-12">
          <p className="relative inline-block pb-3 text-[18px] font-semibold uppercase tracking-[-0.3px] text-[var(--color-ink)] md:text-[24px]">
            Life at Lemma
            <span className="absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-[var(--color-pink)]" />
          </p>
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
