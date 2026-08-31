"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { phiFeatures } from "@/lib/phi-data";
import { cn } from "@/lib/utils";

export function PhiFeatures() {
  return (
    <section className="overflow-x-clip bg-white pb-16 pt-8 md:pb-24 md:pt-12">
      <Container className="flex flex-col gap-16 md:gap-24">
        {phiFeatures.map((feature) => {
          const imageLeft = feature.layout === "image-left";

          return (
            <div
              key={feature.id}
              className={cn(
                "grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20",
                imageLeft && "lg:grid-cols-[1.1fr_0.9fr] lg:[&>*:first-child]:order-2",
                feature.id === "creative-control" && "pt-10 md:pt-16",
              )}
            >
              <div
                className="flex h-fit w-full max-w-[520px] flex-col gap-3 self-center rounded-[20px] bg-[var(--color-feature-box)] px-8 py-10 md:px-10 md:py-12 lg:px-12 lg:py-14"
              >
                <h3 className="font-[family-name:var(--font-inter)] text-[26px] font-semibold leading-[1.2] tracking-[-0.4px] text-[#111] md:text-[36px]">
                  {feature.title}
                </h3>
                <div
                  className="h-px w-14 bg-gradient-to-r from-[var(--color-blue)] to-transparent"
                  aria-hidden
                />
                <p className="font-[family-name:var(--font-inter)] text-[18px] font-normal leading-[1.65] text-[#5a6570] md:text-[20px]">
                  {feature.body}
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
                    backgroundImage: "var(--gradient-feature-glow)",
                  }}
                  aria-hidden
                />
                <div className="relative z-10 w-full p-8 md:p-12">
                  <div
                    className="relative w-full"
                    style={{
                      aspectRatio: `${feature.imageWidth} / ${feature.imageHeight}`,
                    }}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      fill
                      unoptimized
                      className={cn(
                        "object-contain object-center",
                        feature.id === "creative-control" && "mix-blend-screen",
                      )}
                      sizes="(max-width: 1024px) 100vw, 620px"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
