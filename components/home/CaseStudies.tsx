"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { FadeUp } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { VideoModal } from "@/components/ui/VideoModal";
import { caseStudies as defaultCaseStudies } from "@/lib/data";
import type { CaseStudy } from "@/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function CaseStudies({ caseStudies }: { caseStudies?: CaseStudy[] }) {
  const data = caseStudies?.length ? caseStudies : defaultCaseStudies;
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeVideo, setActiveVideo] = useState<CaseStudy | null>(null);

  const closeVideo = useCallback(() => setActiveVideo(null), []);

  return (
    <section id="case-studies" className="overflow-hidden bg-white pb-16 pt-8 md:pb-[90px] md:pt-10">
      <Container className="mb-12">
        <FadeUp className="space-y-5">
          <SectionLabel label="Case Studies" />
          <h2 className="text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            Lemmagnified success stories.
          </h2>
        </FadeUp>
      </Container>

      <div className="relative px-4 md:px-5">
        <Swiper
          modules={[Autoplay, Keyboard, Navigation, Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop
          grabCursor
          keyboard={{ enabled: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          spaceBetween={28}
          slidesPerView={1.35}
          centeredSlides={false}
          breakpoints={{
            640: { slidesPerView: 1.65 },
            768: { slidesPerView: 2.35 },
            1200: { slidesPerView: 3.53 },
          }}
          className="!overflow-visible"
        >
          {data.map((study) => (
            <SwiperSlide key={study.id} className="!h-auto">
              <article className="case-card group relative h-[520px] overflow-hidden rounded-[30px] border border-[var(--color-border)] transition-transform duration-500 md:h-[700px]">
                <Image
                  src={study.image}
                  alt={study.brand}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                  <span
                    className="rounded-full px-3 py-1.5 text-[14px] font-extrabold tracking-[-0.28px] text-transparent"
                    style={{
                      backgroundImage: "var(--gradient-brand)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    LEMMA
                  </span>
                  <span className="rounded-full bg-[rgba(252,252,249,0.8)] px-3 py-1.5 text-[10px] uppercase tracking-[1.8px] text-[rgba(3,10,17,0.8)] backdrop-blur-[4px]">
                    {study.year}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    aria-label={`Play ${study.brand} case study`}
                    onClick={() => {
                      if (!study.videoUrl) return;
                      setActiveVideo(study);
                      swiperRef.current?.autoplay?.stop();
                    }}
                    className="flex size-16 items-center justify-center rounded-full bg-[rgba(252,252,249,0.85)] backdrop-blur-[4px] transition group-hover:scale-110"
                  >
                    <Play className="ml-0.5 size-6 fill-[var(--color-pink-alt)] text-[var(--color-pink-alt)]" />
                  </button>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(252,252,249,0.95)] via-[rgba(252,252,249,0.6)] to-transparent p-6">
                  <div className="mb-1 flex items-center justify-between text-[11px] uppercase tracking-[1.98px] text-[var(--color-slate)]">
                    <span>{study.category}</span>
                    <span>{study.index}</span>
                  </div>
                  <h3 className="text-[22px] font-extrabold tracking-[-0.44px] text-[var(--color-ink)]">
                    {study.brand}
                  </h3>
                  <p className="mt-1 text-[14px] leading-5 text-[var(--color-slate)]">
                    {study.description}
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Container className="mt-10">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-[var(--color-divider)]" />
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous case study"
              className="flex size-11 items-center justify-center rounded-full border border-[var(--color-border)] transition hover:bg-[var(--color-cream-soft)]"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next case study"
              className="flex size-11 items-center justify-center rounded-full border border-[var(--color-border)] transition hover:bg-[var(--color-cream-soft)]"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <Button href="/case-studies" variant="primary">
            All Case Studies
          </Button>
        </div>
      </Container>

      <VideoModal
        open={Boolean(activeVideo?.videoUrl)}
        title={activeVideo ? `${activeVideo.brand} case study` : "Case study video"}
        videoUrl={activeVideo?.videoUrl ?? ""}
        onClose={() => {
          closeVideo();
          swiperRef.current?.autoplay?.start();
        }}
      />
    </section>
  );
}
