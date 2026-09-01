"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { brandsStories } from "@/lib/solutions-brands-data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function SuccessStories() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="overflow-hidden bg-[var(--color-cream-soft)] py-10 md:py-14">
      <Container className="mb-10">
        <FadeUp className="space-y-4 text-center md:text-left">
          <SectionLabel label="Lemmagnified success stories" align="center" dual className="md:justify-start md:!w-auto" />
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            Proof that outdoor can drive outcomes
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
          spaceBetween={24}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 1.4 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          className="!pb-14"
        >
          {brandsStories.map((story) => (
            <SwiperSlide key={story.id} className="!h-auto">
              <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-white shadow-[0_10px_30px_rgba(9,19,26,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(9,19,26,0.1)]">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.brand}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 90vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[12px] font-semibold uppercase tracking-[1px] text-[var(--color-ink)]">
                    {story.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <p className="text-[13px] font-semibold uppercase tracking-[1.4px] text-[var(--color-pink)]">
                    {story.brand}
                  </p>
                  <h3 className="font-heading mt-2 text-[20px] font-semibold leading-snug text-[var(--color-ink)]">
                    {story.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-[var(--color-slate)]">
                    {story.description}
                  </p>
                  <a
                    href={story.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--color-blue-link)] transition group-hover:gap-2.5"
                  >
                    View story <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-2 flex justify-center gap-3">
          <button
            type="button"
            aria-label="Previous story"
            className="flex size-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white transition hover:border-black"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next story"
            className="flex size-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white transition hover:border-black"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
