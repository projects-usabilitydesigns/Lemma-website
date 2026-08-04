"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeUp } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { aboutFaqs } from "@/lib/about-data";
import { cn } from "@/lib/utils";

export function AboutFaq() {
  const [openId, setOpenId] = useState<string | null>(aboutFaqs[0]?.id ?? null);

  return (
    <section id="faq" className="bg-white pb-16 pt-8 md:pb-[100px] md:pt-10">
      <Container>
        <FadeUp className="mx-auto mb-12 max-w-2xl space-y-6 text-center">
          <SectionLabel label="FAQ" align="center" dual />
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            Helpful Answers Before
            <br />
            You Get Started
          </h2>
        </FadeUp>

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
                  <span className="font-heading py-2 text-[22px] font-medium leading-[1.3] text-[var(--color-ink-deep)]">
                    {item.question}
                  </span>
                  <span className="relative mt-0.5 size-[30px] shrink-0" aria-hidden>
                    <Image
                      src={open ? "/icons/faq-minus.svg" : "/icons/faq-plus.svg"}
                      alt=""
                      width={30}
                      height={30}
                      className="size-[30px]"
                    />
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
                      <p className="px-5 pb-5 font-[family-name:var(--font-inter)] text-[18px] font-normal leading-[1.55] text-[#424242]">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <FadeUp className="mt-12 flex justify-center">
          <Button
            href="/#faq"
            variant="primary"
            arrow="right"
            className="border-white/[0.08] text-white hover:shadow-[0_10px_30px_rgba(248,45,137,0.28)]"
            style={{ backgroundImage: "var(--gradient-cta)" }}
          >
            VIEW ALL
          </Button>
        </FadeUp>
      </Container>
    </section>
  );
}
