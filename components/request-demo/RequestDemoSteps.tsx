"use client";

import { motion } from "framer-motion";
import { FadeUp, Stagger, staggerItem } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { demoSteps } from "@/lib/request-demo-data";

export function RequestDemoSteps() {
  return (
    <section className="bg-[#ECF1F4] py-10 md:py-14">
      <Container>
        <FadeUp className="mx-auto mb-8 max-w-2xl space-y-4 text-center">
          <SectionLabel label="How it works" align="center" dual accent="blue" />
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            What happens after you submit
          </h2>
        </FadeUp>

        <Stagger className="grid gap-5 md:grid-cols-3" delay={0.08}>
          {demoSteps.map((step) => (
            <motion.article
              key={step.id}
              variants={staggerItem}
              className="rounded-[20px] border border-[var(--color-border)] bg-white p-6 shadow-[0_8px_24px_rgba(9,19,26,0.04)]"
            >
              <span className="font-heading text-[15px] font-semibold tracking-[2px] text-[var(--color-pink)]">
                {step.step}
              </span>
              <h3 className="font-heading mt-3 text-[20px] font-semibold text-[var(--color-ink)]">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[16px] leading-relaxed text-[var(--color-slate)]">
                {step.description}
              </p>
            </motion.article>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
