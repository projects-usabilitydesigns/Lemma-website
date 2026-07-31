"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { aiFeatures as defaultAiFeatures } from "@/lib/data";
import type { AiFeature } from "@/types";
import "swiper/css";

export function AiFeatures({ aiFeatures }: { aiFeatures?: AiFeature[] }) {
  const data = aiFeatures?.length ? aiFeatures : defaultAiFeatures;
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="ai" className="bg-white py-16 md:pb-[50px] md:pt-10">
      <Container>
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <FadeUp className="max-w-xl space-y-5">
            <SectionLabel label="AI at Lemma" accent="blue" />
            <div className="flex items-start gap-4">
              <h2 className="text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
                AI Engineered to handle
                <br />
                massive demands.
              </h2>
              <div className="relative mt-2 hidden size-[72px] shrink-0 md:block">
                <Image src="/icons/ai-sparkle.svg" alt="" fill className="object-contain" />
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.1} className="max-w-md pt-2">
            <p className="text-[16px] leading-[22px] text-[var(--color-slate)]">
              Lemma&apos;s AI stack powers every layer of our omnichannel platform — from audience
              intelligence and creative generation to bidding, attribution and brand safety.
            </p>
          </FadeUp>
        </div>

        <Swiper
          modules={[Autoplay, Keyboard, Navigation]}
          onSwiper={(s) => {
            swiperRef.current = s;
          }}
          loop
          grabCursor
          keyboard={{ enabled: true }}
          autoplay={{ delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false }}
          spaceBetween={40}
          slidesPerView={1.1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
        >
          {data.map((feature) => (
            <SwiperSlide key={feature.id} className="!h-auto">
              <motion.article
                whileHover={{ y: -6, scale: 1.01 }}
                className="flex h-full flex-col gap-6 border border-[var(--color-border)] bg-[rgba(249,248,245,0.4)] px-8 py-9 transition-shadow hover:shadow-[0px_12px_40px_rgba(9,19,26,0.08)]"
                style={{
                  boxShadow: "inset 0 0 0 1px transparent",
                }}
              >
                <div
                  className="flex size-12 items-center justify-center"
                  style={{ backgroundColor: feature.accentSoft }}
                >
                  <div className="relative size-6">
                    <Image src={feature.icon} alt="" fill className="object-contain" />
                  </div>
                </div>
                <h3 className="text-[22px] font-bold tracking-[-0.44px] text-[var(--color-ink)]">
                  {feature.title}
                </h3>
                <p className="text-[16px] leading-[22px] text-[var(--color-slate)]">
                  {feature.description}
                </p>
                <ul className="mt-auto space-y-2.5">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3 text-[14px] text-[rgba(3,10,17,0.85)]">
                      <span className="size-1.5 rounded-full" style={{ backgroundColor: feature.accent }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-[var(--color-divider)]" />
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous capabilities"
              className="flex size-11 items-center justify-center rounded-full border border-[var(--color-border)]"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next capabilities"
              className="flex size-11 items-center justify-center rounded-full border border-[var(--color-border)]"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button href="#ai" variant="primary">
            learn more
          </Button>
        </div>
      </Container>
    </section>
  );
}
