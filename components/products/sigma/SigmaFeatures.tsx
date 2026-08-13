"use client";

import Image from "next/image";
import { FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { sigmaFeatures } from "@/lib/sigma-data";
import { cn } from "@/lib/utils";

function highlightText(text: string, highlights: readonly string[]) {
  if (!highlights.length) return text;
  const pattern = highlights
    .slice()
    .sort((a, b) => b.length - a.length)
    .map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  const regex = new RegExp(`(${pattern})`, "gi");
  return text.split(regex).map((part, index) => {
    const isHighlight = highlights.some((h) => h.toLowerCase() === part.toLowerCase());
    if (!isHighlight) return <span key={`${part}-${index}`}>{part}</span>;
    return (
      <strong key={`${part}-${index}`} className="font-semibold text-[#111]">
        {part}
      </strong>
    );
  });
}

export function SigmaFeatures() {
  return (
    <section className="overflow-x-clip bg-white pb-12 pt-6 md:pb-16 md:pt-8">
      <Container className="flex flex-col gap-10 md:gap-14">
        {sigmaFeatures.map((feature, index) => {
          const imageLeft = feature.layout === "image-left";
          const stacked =
            "imageSecondary" in feature && Boolean(feature.imageSecondary);

          return (
            <FadeUp key={feature.id} delay={index * 0.04}>
              <div
                className={cn(
                  "grid items-center gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 xl:gap-10",
                  imageLeft && "lg:grid-cols-[1.1fr_0.9fr] lg:[&>*:first-child]:order-2",
                )}
              >
                <div
                  className="flex w-full max-w-[520px] flex-col justify-center gap-2 rounded-[20px] border border-[#e4eef3]/80 px-6 py-6 md:px-8 md:py-7 lg:px-10 lg:py-8"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #E8F5FC 0%, #EAF8F0 100%)",
                  }}
                >
                  <span className="text-[12px] font-semibold uppercase tracking-[2.4px] text-[var(--color-slate)]">
                    {feature.eyebrow}
                  </span>
                  <h3 className="font-[family-name:var(--font-inter)] text-[26px] font-semibold tracking-[-0.4px] leading-[1.2] text-[#111] md:text-[40px]">
                    {feature.title}
                  </h3>
                  <div
                    className="my-0.5 h-px w-14 bg-gradient-to-r from-[var(--color-blue)] to-transparent"
                    aria-hidden
                  />
                  <p className="space-y-2 font-[family-name:var(--font-inter)] text-[18px] font-normal leading-[1.65] text-[#5a6570]">
                    {highlightText(feature.body, feature.highlights)}
                  </p>
                </div>

                <div
                  className={cn(
                    "relative mx-auto isolate w-full max-w-[520px] md:max-w-[580px] lg:max-w-[620px]",
                    imageLeft ? "lg:mx-0 lg:justify-self-start" : "lg:mx-0 lg:justify-self-end",
                  )}
                >
                  <div
                    className="pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #E8F6FF 0%, #EAF8F0 100%)",
                    }}
                    aria-hidden
                  />
                  <div className="relative z-10 w-full">
                    {stacked ? (
                      <div className="flex w-full flex-col items-center">
                        <div className="relative aspect-[388/259] w-[58%]">
                          <Image
                            src={feature.image}
                            alt={feature.imageAlt}
                            fill
                            className="object-contain object-center"
                            sizes="(max-width: 1024px) 70vw, 360px"
                          />
                        </div>
                        <div className="relative aspect-[678/281] w-[82%]">
                          <Image
                            src={feature.imageSecondary}
                            alt=""
                            fill
                            className="object-contain object-center"
                            sizes="(max-width: 1024px) 90vw, 510px"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="relative aspect-[5/4] w-full">
                        <Image
                          src={feature.image}
                          alt={feature.imageAlt}
                          fill
                          className="object-contain object-center"
                          sizes="(max-width: 1024px) 100vw, 620px"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </FadeUp>
          );
        })}
      </Container>
    </section>
  );
}