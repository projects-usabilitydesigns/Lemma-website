"use client";

import Image from "next/image";
import { FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { integralFeatures } from "@/lib/integral-data";
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

const badgeClass: Record<(typeof integralFeatures)[number]["badgePosition"], string> = {
  "bottom-right":
    "absolute bottom-[4%] right-[2%] z-20 size-[84px] md:size-[96px] lg:size-[104px]",
  "bottom-center":
    "absolute bottom-[2%] left-1/2 z-20 size-[84px] -translate-x-1/2 md:size-[96px] lg:size-[104px]",
  "bottom-center-overlap":
    "absolute left-1/2 top-full z-20 w-[148px] -translate-x-1/2 -translate-y-[22%] md:w-[168px] lg:w-[184px]",
};

export function IntegralFeatures() {
  return (
    <section className="overflow-x-clip bg-white pb-12 pt-0 md:pb-16">
      <Container className="flex flex-col gap-10 md:gap-14">
        {integralFeatures.map((feature, index) => {
          const imageLeft = feature.layout === "image-left";
          const paragraphs = feature.body.split("\n\n");
          const isPillBadge = feature.badgePosition === "bottom-center-overlap";

          return (
            <FadeUp key={feature.id} delay={index * 0.04}>
              <div
                className={cn(
                  "grid items-center gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 xl:gap-10",
                  imageLeft && "lg:grid-cols-[1.1fr_0.9fr] lg:[&>*:first-child]:order-2",
                )}
              >
                {/* Smaller content box — hug content, tighter padding */}
                <div
                  className="flex w-full max-w-[520px] flex-col justify-center gap-2 rounded-[20px] border border-[#f0e4ea]/80 px-6 py-6 md:px-8 md:py-7 lg:px-10 lg:py-8"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #FBE8F0 0%, #E8F5FC 100%)",
                  }}
                >
                  <h3
                    className={cn(
                      "font-[family-name:var(--font-inter)] font-semibold tracking-[-0.4px] text-[#111]",
                      feature.titleSize === 36
                        ? "text-[24px] leading-[1.25] md:text-[36px]"
                        : "text-[26px] leading-[1.2] md:text-[40px]",
                    )}
                  >
                    {feature.title}
                  </h3>
                  <div
                    className="my-0.5 h-px w-14 bg-gradient-to-r from-[var(--color-blue)] to-transparent"
                    aria-hidden
                  />
                  <div
                    className={cn(
                      "space-y-2 font-[family-name:var(--font-inter)] font-normal leading-[1.65] text-[#5a6570]",
                      feature.bodySize === 20 ? "text-[17px] md:text-[20px]" : "text-[18px]",
                    )}
                  >
                    {paragraphs.map((para) => (
                      <p key={para.slice(0, 24)}>{highlightText(para, feature.highlight)}</p>
                    ))}
                  </div>
                </div>

                {/* Larger images — circle smaller than the image */}
                <div
                  className={cn(
                    "relative mx-auto isolate w-full max-w-[520px] md:max-w-[580px] lg:max-w-[620px]",
                    isPillBadge && "mb-10 md:mb-12",
                    imageLeft ? "lg:mx-0 lg:justify-self-start" : "lg:mx-0 lg:justify-self-end",
                  )}
                >
                  {/* Smaller background circle, centered behind image */}
                  <div
                    className="pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #E8F6FF 0%, #FFE4F0 100%)",
                    }}
                    aria-hidden
                  />

                  <div className="relative z-10 w-full">
                    <div className="relative aspect-[5/4] w-full">
                      <Image
                        src={feature.image}
                        alt={feature.imageAlt}
                        fill
                        className={cn(
                          "object-contain object-center",
                          feature.id !== "unified" && "mix-blend-screen",
                        )}
                        sizes="(max-width: 1024px) 100vw, 620px"
                      />
                    </div>
                  </div>

                  <div className={badgeClass[feature.badgePosition]}>
                    <Image
                      src={feature.badge}
                      alt={feature.badgeAlt}
                      width={isPillBadge ? 282 : 104}
                      height={isPillBadge ? 169 : 104}
                      className={cn(
                        "object-contain",
                        isPillBadge ? "h-auto w-full" : "size-full",
                      )}
                    />
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
