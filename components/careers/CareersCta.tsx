"use client";

import { motion } from "framer-motion";
import { Button, pairCtaClassName } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { careersCta } from "@/lib/careers-data";

export function CareersCta() {
  return (
    <section id="cta" className="relative overflow-hidden py-10 md:py-14">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      <div className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-home-mesh)]" />
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
            <GradientText>{careersCta.titleAccent}</GradientText>{" "}
            {careersCta.titleAfter}
          </h2>
          <p className="max-w-xl text-[18px] leading-7 text-[var(--color-slate)]">
            {careersCta.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href={careersCta.primaryCta.href} variant="primary" className={pairCtaClassName}>
              {careersCta.primaryCta.label}
            </Button>
            <Button
              href={careersCta.secondaryCta.href}
              variant="outline"
              arrow="none"
              className={pairCtaClassName}
            >
              {careersCta.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
