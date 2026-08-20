"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { FadeUp } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqProps = {
  /** Page-specific questions and answers */
  items: readonly FaqItem[];
  /** Section element id (default: "faq") */
  sectionId?: string;
  /** Prefix for accordion panel ids — defaults from sectionId */
  idPrefix?: string;
  /** VIEW ALL link target */
  viewAllHref?: string;
  className?: string;
};

/**
 * Single shared FAQ accordion used across the site.
 * Pass page-specific `items` — heading, accordion, and VIEW ALL stay the same everywhere.
 */
export function Faq({
  items,
  sectionId = "faq",
  idPrefix,
  viewAllHref = "/#faq",
  className,
}: FaqProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const prefix = idPrefix ?? sectionId;

  return (
    <section id={sectionId} className={cn("bg-white pb-16 md:pb-[100px]", className)}>
      <Container>
        <FadeUp className="mx-auto mb-12 max-w-2xl space-y-6 text-center">
          <SectionLabel label="FAQ" align="center" dual />
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            Helpful Answers Before
            <br />
            <span
              style={{
                backgroundImage: "var(--gradient-cta)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              You Get Started
            </span>
          </h2>
        </FadeUp>

        <div className="mx-auto flex max-w-[1188px] flex-col gap-4">
          {items.map((item) => {
            const open = openId === item.id;
            const panelId = `${prefix}-${item.id}`;
            return (
              <div
                key={item.id}
                className="border border-[var(--color-border-faq)] bg-white shadow-[1px_1px_2px_rgba(0,0,0,0.09)]"
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
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
                    className="mt-0.5 flex size-[30px] shrink-0 items-center justify-center rounded-full text-white"
                    style={{ backgroundImage: "var(--gradient-cta)" }}
                    aria-hidden
                  >
                    {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      id={panelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-[16px] leading-[22px] text-[#424242]">
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
          <Button href={viewAllHref} variant="primary">
            VIEW ALL
          </Button>
        </div>
      </Container>
    </section>
  );
}
