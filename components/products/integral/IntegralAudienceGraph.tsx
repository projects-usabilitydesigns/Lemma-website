"use client";

import Image from "next/image";
import { FadeUp } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { integralAssets } from "@/lib/integral-data";

export function IntegralAudienceGraph() {
  return (
    <section
      className="relative overflow-hidden py-10 md:py-14"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 80% 70% at 28% 40%, #E4F5FF 0%, #D0EDFF 100%)",
      }}
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeUp className="space-y-6 md:space-y-7">
            <SectionLabel label="AI at Lemma" accent="blue" />
            <h2 className="font-heading text-[36px] font-semibold tracking-[-0.72px] text-[#09131A] md:text-[48px] md:leading-[1.08]">
              Lemma
              <br />
              Audience Graph
            </h2>
            <p className="max-w-md font-[family-name:var(--font-inter)] text-[16px] font-medium leading-[1.65] text-[var(--color-slate)] md:text-[18px]">
              Lemma Audience Graph is a blueprint of your target audience throughout all
              marketing funnels.
            </p>
            <Button href="#cta" variant="primary" arrow="right">
              Click here to know more
            </Button>
          </FadeUp>

          <FadeUp delay={0.08} className="relative mx-auto w-full max-w-[580px]">
            <div className="relative aspect-[660/440] w-full">
              <Image
                src={integralAssets.audienceGraph}
                alt="Lemma Audience Graph across DOOH, mobile, and tablet"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 580px"
              />
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
