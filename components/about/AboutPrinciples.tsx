"use client";

import { FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { aboutPrinciples } from "@/lib/about-data";
import { cn } from "@/lib/utils";

const cardSurface =
  "rounded-[20px] bg-[linear-gradient(180deg,#C4E8FF_0%,#ECFFE0_100%)] px-6 py-10 md:rounded-[24px] md:px-10 md:py-12 lg:px-14 lg:py-14";

const cardText =
  "min-w-0 max-w-[440px] text-left font-[family-name:var(--font-inter)] text-[18px] font-medium leading-[1.55] text-[var(--color-ink)]";

export function AboutPrinciples() {
  return (
    <section id="principles" className="bg-white py-10 md:py-14">
      <Container>
        <div className="mb-8 grid items-center gap-6 lg:mb-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <FadeUp className="space-y-4">
            <SectionLabel label="Strategic mission" />
            <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
              Our guiding principles
            </h2>
          </FadeUp>
          <FadeUp delay={0.06}>
            <p className="font-[family-name:var(--font-inter)] text-[16px] font-medium leading-[22px] tracking-normal text-[var(--color-ink)]">
              {aboutPrinciples.intro}
            </p>
          </FadeUp>
        </div>

        <div className="space-y-6 md:space-y-8">
          <FadeUp>
            <article className={cardSurface}>
              <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
                <p className={cardText}>{aboutPrinciples.vision.description}</p>
                <img
                  src={aboutPrinciples.vision.image}
                  alt="Our Vision"
                  className="h-auto w-full max-w-[640px] justify-self-end"
                />
              </div>
            </article>
          </FadeUp>

          <FadeUp delay={0.06}>
            <article className={cardSurface}>
              <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
                <img
                  src={aboutPrinciples.mission.image}
                  alt="Our Mission"
                  className={cn(
                    "h-auto w-full max-w-[640px]",
                    "order-2 lg:order-1",
                  )}
                />
                <p className={cn(cardText, "order-1 lg:order-2 lg:justify-self-end")}>
                  {aboutPrinciples.mission.description}
                </p>
              </div>
            </article>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
