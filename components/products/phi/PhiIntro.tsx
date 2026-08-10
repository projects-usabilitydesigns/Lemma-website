"use client";

import { FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function PhiIntro() {
  return (
    <section className="bg-white pb-3 pt-10 md:pb-4 md:pt-12">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          <FadeUp className="space-y-5">
            <SectionLabel label="Future Ready" accent="blue" />
            <h2 className="font-heading text-[36px] font-semibold tracking-[-0.72px] text-black md:text-[45px] md:leading-[1.1]">
              The superior content management system for DOOH owners
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="font-[family-name:var(--font-inter)] text-[18px] font-medium leading-[1.65] text-[var(--color-slate)] lg:pt-12">
              Lemma Phi is our DOOH content management system designed to empower screen and media
              owners, reducing costs and maximizing profits.
            </p>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
