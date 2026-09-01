"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { brandsTestimonials } from "@/lib/solutions-brands-data";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = brandsTestimonials[index];

  const prev = () =>
    setIndex((current) => (current === 0 ? brandsTestimonials.length - 1 : current - 1));
  const next = () =>
    setIndex((current) => (current === brandsTestimonials.length - 1 ? 0 : current + 1));

  return (
    <section className="bg-white py-10 md:py-14">
      <Container>
        <FadeUp className="mx-auto mb-10 max-w-2xl space-y-4 text-center">
          <SectionLabel label="Testimonials" align="center" dual />
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[42px] md:leading-[1.15]">
            Trusted by teams who measure what matters
          </h2>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[28px] border border-white/50 bg-white/70 p-8 shadow-[0_20px_60px_rgba(9,19,26,0.08)] backdrop-blur-md md:p-12"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(0,143,219,0.06), rgba(0,143,219,0.06))",
            }}
          >
            <Quote className="mb-6 size-10 text-[var(--color-pink)] opacity-80" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <blockquote className="font-heading text-[22px] font-medium leading-relaxed text-[var(--color-ink)] md:text-[28px] md:leading-[1.35]">
                  “{active.quote}”
                </blockquote>
                <footer className="mt-8">
                  <p className="text-[16px] font-semibold text-[var(--color-ink)]">{active.name}</p>
                  <p className="text-[14px] text-[var(--color-slate)]">
                    {active.role}, {active.company}
                  </p>
                </footer>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {brandsTestimonials.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`Show testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? "w-8 bg-[var(--color-pink)]" : "w-2 bg-[var(--color-border-strong)]"
                    }`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  className="flex size-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-white transition hover:border-black"
                  onClick={prev}
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  className="flex size-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-white transition hover:border-black"
                  onClick={next}
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
