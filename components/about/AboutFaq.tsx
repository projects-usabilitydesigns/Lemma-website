"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { aboutFaqs } from "@/lib/about-data";
import { cn } from "@/lib/utils";

export function AboutFaq() {
  const [openId, setOpenId] = useState<string | null>(aboutFaqs[0]?.id ?? null);

  return (
    <section id="faq" className="bg-[var(--color-cream-soft)] pb-16 md:pb-[100px] pt-16 md:pt-[100px]">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl space-y-6 text-center">
          <SectionLabel label="FAQ" align="center" dual />
          <h2 className="text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            Helpful resources before
            <br />
            you get started
          </h2>
        </div>

        <div className="mx-auto flex max-w-[1188px] flex-col gap-4">
          {aboutFaqs.map((item) => {
            const open = openId === item.id;
            return (
              <div
                key={item.id}
                className="border border-[var(--color-border-faq)] bg-white shadow-[1px_1px_2px_rgba(0,0,0,0.09)]"
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`about-faq-${item.id}`}
                  className={cn(
                    "flex w-full items-start justify-between gap-4 px-5 text-left",
                    open ? "py-5" : "items-center py-2.5",
                  )}
                  onClick={() => setOpenId(open ? null : item.id)}
                >
                  <span
                    className={cn(
                      "font-medium text-[var(--color-ink-deep)]",
                      open ? "text-[22px] leading-6" : "py-2 text-[20px] leading-[26px]",
                    )}
                  >
                    {item.question}
                  </span>
                  <span
                    className="mt-0.5 flex size-[30px] shrink-0 items-center justify-center rounded-full bg-[var(--color-pink)] text-white"
                    aria-hidden
                  >
                    {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      id={`about-faq-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-[14px] leading-5 text-[#424242]">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/#faq" variant="primary">
            VIEW ALL
          </Button>
        </div>
      </Container>
    </section>
  );
}
