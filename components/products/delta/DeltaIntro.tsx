"use client";

import { FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WordPlay } from "@/components/ui/WordPlay";

export function DeltaIntro() {
  return (
    <section className="bg-white pb-8 pt-12 md:pb-10 md:pt-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
          <FadeUp className="space-y-5">
            <SectionLabel label="Future Ready" accent="blue" />
            <h2 className="font-heading max-w-xl text-[32px] font-semibold tracking-[-0.72px] text-black md:text-[45px] md:leading-[1.15]">
              With the right tools
              <br />
              <WordPlay word="Elemmanate" />
              <br />
              the complexities of digital advertising
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="max-w-lg font-[family-name:var(--font-inter)] text-[16px] font-medium leading-[1.65] text-[var(--color-slate)] lg:pt-12 lg:justify-self-end">
              Introducing Lemma Delta, our latest platform designed to empower agencies and brands
              in effortlessly curating supply deals for emerging formats through three seamless
              steps: Plan, Activate, Measure.
            </p>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
