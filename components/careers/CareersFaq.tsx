"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { careersFaqs } from "@/lib/careers-data";
import { cn } from "@/lib/utils";

export function CareersFaq() {
  const [openId, setOpenId] = useState<string | null>(careersFaqs[0]?.id ?? null);

  return (
    <section id="faq" className="bg-white py-16 md:py-[100px]">
      <Container>
        <div className="mx-auto mb-12 max-w-3xl space-y-6 text-center">
          <SectionLabel label="FAQ" align="center" dual />
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            Helpful Answers Before
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #009352 0%, #74be44 22%, #1581c5 37%, #ed2e80 71%, #f05a27 100%)",
              }}
            >
              You Get Started
            </span>
          </h2>
        </div>

        <div className="mx-auto flex max-w-[1188px] flex-col gap-4">
          {careersFaqs.map((item) => {
            const open = openId === item.id;
            return (
              <div
                key={item.id}
                className="border border-[var(--color-border-faq,#cedbe4)] bg-white shadow-[1px_1px_2px_rgba(0,0,0,0.09)]"
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`careers-faq-${item.id}`}
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
                      id={`careers-faq-${item.id}`}
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

        <div className="mt-10 flex justify-center">
          <a
            href="/about#faq"
            className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-[14px] font-medium uppercase tracking-[2.52px] text-white transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(248,45,137,0.35)]"
            style={{
              backgroundImage: "linear-gradient(105deg, #f82d89 0%, #a684ff 100%)",
            }}
          >
            View all
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
