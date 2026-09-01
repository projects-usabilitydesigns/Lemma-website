"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { brandsCta } from "@/lib/solutions-brands-data";

type CtaData = {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export function CTASection({
  data = brandsCta,
  label = "Let's talk",
}: {
  data?: CtaData;
  label?: string;
}) {
  return (
    <section id="cta" className="relative overflow-hidden py-10 md:py-14">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(0,143,219,0.22), transparent 55%), radial-gradient(circle at 85% 20%, rgba(0,147,82,0.18), transparent 50%), radial-gradient(circle at 50% 100%, rgba(116,190,68,0.20), transparent 55%), linear-gradient(135.27deg, #e8f6ff 0%, #ecfdf5 50%, #ecfccb 100%)",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 size-72 rounded-full bg-sky-300/30 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 size-80 rounded-full bg-emerald-300/30 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative text-center">
        <FadeUp className="mx-auto flex max-w-3xl flex-col items-center gap-7">
          <SectionLabel label={label} />
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            {data.title}
          </h2>
          <p className="max-w-xl text-[18px] leading-7 text-[var(--color-slate)] md:text-[20px]">
            {data.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              href={data.primaryCta.href}
              variant="primary"
              arrow="up-right"
              className="normal-case tracking-normal text-[16px] font-semibold"
            >
              {data.primaryCta.label}
            </Button>
            <Button
              href={data.secondaryCta.href}
              variant="secondary"
              arrow="none"
              className="normal-case tracking-normal text-[16px] font-semibold"
            >
              {data.secondaryCta.label}
            </Button>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
