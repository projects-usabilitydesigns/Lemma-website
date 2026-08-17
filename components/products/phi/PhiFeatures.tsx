"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { phiFeatures } from "@/lib/phi-data";
import { cn } from "@/lib/utils";

export function PhiFeatures() {
  return (
    <section className="overflow-x-clip bg-white pb-12 pt-0 md:pb-16">
      <Container className="flex flex-col gap-10 md:gap-14">
        {phiFeatures.map((feature) => {
          const imageLeft = feature.layout === "image-left";

          return (
            <div
              key={feature.id}
              className={cn(
                "grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 xl:gap-14",
                imageLeft && "lg:grid-cols-[1.1fr_0.9fr] lg:[&>*:first-child]:order-2",
                feature.id === "creative-control" && "py-10 md:py-16",
              )}
            >
              <div
                className="flex w-full max-w-[520px] flex-col justify-center gap-3 rounded-[20px] px-6 py-7 md:px-8 md:py-8 lg:px-10 lg:py-9"
                style={{ backgroundColor: "#F2F2F2" }}
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
                    backgroundImage: "linear-gradient(135deg, #E8F6FF 0%, #FFE4F0 100%)",
                  }}
                  aria-hidden
                />
                <div className="relative z-10 w-full">
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
                      className="object-contain object-center mix-blend-screen"
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
