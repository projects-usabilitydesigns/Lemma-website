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

function AiSparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 75.1921 73.3401"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M59.7253 70.7338C57.5232 64.7335 55.0382 62.2889 48.8561 60.107C47.6439 59.6827 46.6741 59.2382 46.6741 59.0968C46.6741 58.814 46.7347 58.7938 49.947 57.6018C52.533 56.632 54.0281 55.7229 55.7251 54.0865C57.7858 52.0662 58.5939 50.6519 60.089 46.4295C60.4122 45.5608 60.7759 44.8537 60.9173 44.8537C61.2001 44.8537 61.1799 44.8133 62.1497 47.4397C63.3013 50.6317 64.1498 52.046 66.0691 53.945C68.0086 55.9047 69.6248 56.8543 73.0189 58.0059C74.7766 58.6119 75.4231 59.016 75.1201 59.3191C75.0594 59.3595 73.9079 59.8039 72.5543 60.309C69.8067 61.299 68.4732 62.0061 66.9378 63.2789C64.6953 65.1577 63.5437 66.9356 62.1295 70.7742C61.6042 72.1884 61.0587 73.34 60.9173 73.34C60.7759 73.34 60.2506 72.1682 59.7253 70.7338Z"
        fill="#008FDB"
      />
      <path
        d="M27.3802 55.5209C27.2388 55.1572 26.5115 53.1773 25.764 51.1166C25.0165 49.0559 24.0467 46.6315 23.6224 45.7224C21.1173 40.4696 16.4503 35.6815 11.1571 32.954C10.0056 32.3682 7.09633 31.1762 4.69216 30.3074C2.288 29.4387 0.227285 28.57 0.106066 28.4084C-0.0353554 28.1861 -0.0353554 27.9841 0.106066 27.7619C0.227285 27.6002 2.288 26.7315 4.69216 25.8628C10.6723 23.701 13.036 22.4889 16.1069 19.9837C19.1374 17.4987 21.986 13.8823 23.6224 10.4478C24.0467 9.53869 25.0165 7.11432 25.764 5.05361C27.6428 -0.158787 27.5822 0.0028381 28.1681 0.0028381C28.7136 0.0028381 28.5924 -0.300208 30.6127 5.35665C32.0471 9.35686 32.9563 11.3166 34.5119 13.6399C36.613 16.8118 39.3808 19.5998 42.5931 21.7413C44.8559 23.2566 46.3913 23.9435 51.6037 25.8628C55.5231 27.2972 56.3716 27.681 56.3716 28.0851C56.3716 28.4892 55.5231 28.873 51.7047 30.2872C46.2903 32.2671 45.1185 32.8126 42.6739 34.4087C39.3202 36.631 36.6736 39.2372 34.5119 42.5303C32.9563 44.8537 32.0471 46.8134 30.6127 50.8136C28.5924 56.4704 28.7136 56.1674 28.1681 56.1674C27.7843 56.1674 27.6024 56.0057 27.3802 55.5209Z"
        fill="url(#ai-sparkle-large)"
      />
      <defs>
        <linearGradient
          id="ai-sparkle-large"
          x1="-5.99585"
          y1="53.2479"
          x2="60.8587"
          y2="10.3424"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#74BE44" />
          <stop offset="0.45" stopColor="#009352" />
          <stop offset="1" stopColor="#008FDB" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function AiFeatures({ aiFeatures }: { aiFeatures?: AiFeature[] }) {
  const data = aiFeatures?.length ? aiFeatures : defaultAiFeatures;
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="ai" className="bg-white py-16 md:pb-[50px] md:pt-10">
      <Container>
        <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-x-16 xl:gap-x-20">
          <FadeUp className="space-y-5">
            <SectionLabel label="AI at Lemma" accent="blue" />
            <div className="flex items-center gap-4 xl:gap-5">
              <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
                AI Engineered to handle
                <br />
                massive demands.
              </h2>
              <AiSparkle className="hidden h-[64px] w-[66px] shrink-0 lg:block xl:h-[72px] xl:w-[74px]" />
            </div>
          </FadeUp>
          <FadeUp delay={0.08} className="lg:justify-self-end">
            <p className="max-w-md font-[family-name:var(--font-inter)] text-[16px] font-medium leading-[22px] tracking-normal text-[var(--color-slate)] lg:max-w-[360px]">
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
