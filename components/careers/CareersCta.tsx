"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { careersCta } from "@/lib/careers-data";

export function CareersCta() {
  return (
    <section id="cta" className="relative overflow-hidden py-16 md:py-[90px]">
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

      <Container className="relative text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7">
          <SectionLabel label={careersCta.label} align="center" dual />
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            {careersCta.titleBefore}{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #008fdb 0%, #009352 100%)",
              }}
            >
              {careersCta.titleAccent}
            </span>{" "}
            {careersCta.titleAfter}
          </h2>
          <p className="max-w-xl text-[18px] leading-7 text-[var(--color-slate)]">
            {careersCta.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              href={careersCta.primaryCta.href}
              variant="primary"
              arrow="up-right"
              className="normal-case tracking-normal px-8 py-3 text-[16px] font-semibold"
            >
              {careersCta.primaryCta.label}
            </Button>
            <Button
              href={careersCta.secondaryCta.href}
              variant="outline"
              arrow="none"
              className="normal-case tracking-normal px-8 py-3 text-[16px] font-semibold"
            >
              {careersCta.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
