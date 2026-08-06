"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { brandsFaqs, type BrandsFaq } from "@/lib/solutions-brands-data";
import { cn } from "@/lib/utils";

export function BrandsFAQ({
  title = "Answers for brands getting started",
  items = brandsFaqs,
}: {
  title?: string;
  items?: BrandsFaq[];
}) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <section className="bg-[var(--color-cream-soft)] py-16 md:py-[90px]">
      <Container>
        <FadeUp className="mx-auto mb-12 max-w-2xl space-y-4 text-center">
          <SectionLabel label="FAQ" align="center" dual />
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            {title}
          </h2>
        </FadeUp>

        <div className="mx-auto flex max-w-[900px] flex-col gap-3">
          {items.map((item) => {
            const open = openId === item.id;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-[var(--color-border-faq)] bg-white shadow-[1px_1px_2px_rgba(0,0,0,0.06)]"
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`solutions-faq-${item.id}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenId(open ? null : item.id)}
                >
                  <span
                    className={cn(
                      "font-heading font-semibold text-[var(--color-ink-deep)]",
                      open ? "text-[18px] md:text-[20px]" : "text-[16px] md:text-[18px]",
                    )}
                  >
                    {item.question}
                  </span>
                  <span
                    className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-[var(--color-pink)] text-white"
                    aria-hidden
                  >
                    {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      id={`solutions-faq-${item.id}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-[16px] leading-relaxed text-[var(--color-slate)] md:text-[17px]">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
