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
import "swiper/css";

const FUNNEL_IMAGE = "/Group 1597883517.svg";

export function AiFeatures() {
  const data = defaultAiFeatures;
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="ai" className="bg-white py-16 md:pb-[50px] md:pt-10">
      <Container>
        <div className="mb-12 grid items-center gap-10 lg:mb-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">
          <FadeUp className="space-y-5">
            <SectionLabel label="AI at Lemma" accent="blue" />
            <h2 className="font-heading max-w-xl text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
              Full-funnel AI-Powered
              <br />
              Platform.
            </h2>
            <p className="max-w-lg font-[family-name:var(--font-inter)] text-[16px] font-medium leading-[22px] tracking-normal text-[var(--color-slate)] md:text-[18px] md:leading-[26px]">
              Lemma&apos;s AI stack powers the entire advertising journey — from intelligent
              planning and precise targeting to dynamic optimization and real-time measurement.
            </p>
          </FadeUp>
          <FadeUp delay={0.08} className="justify-self-center lg:justify-self-end">
            <Image
              src={FUNNEL_IMAGE}
              alt="Full-funnel AI from awareness to loyalty across DOOH, CTV, mobile, web and social"
              width={719}
              height={460}
              unoptimized
              className="h-auto w-full max-w-[719px] object-contain"
            />
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
