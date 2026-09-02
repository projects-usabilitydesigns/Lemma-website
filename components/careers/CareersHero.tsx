"use client";

import Image from "next/image";
import { FadeLeft, FadeUp } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { careersHero } from "@/lib/careers-data";

export function CareersHero() {
  return (
    <section className="relative overflow-x-hidden pb-10 pt-[100px] md:pb-14 md:pt-[112px]">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(0,143,219,0.16), transparent 42%), radial-gradient(circle at 88% 20%, rgba(0,143,219,0.14), transparent 46%), radial-gradient(circle at 50% 100%, rgba(255,214,102,0.12), transparent 40%)",
        }}
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="space-y-7">
            <FadeUp initial={false}>
              <SectionLabel label={careersHero.label} />
            </FadeUp>
            <FadeUp delay={0.05} className="space-y-5" initial={false}>
              <h1 className="font-heading max-w-xl text-[40px] font-semibold tracking-[-0.9px] text-[var(--color-ink)] md:text-[56px] md:leading-[60px]">
                {careersHero.title}
              </h1>
              <p className="max-w-lg text-[18px] leading-relaxed tracking-[0.2px] text-[var(--color-ink)] md:text-[22px] md:leading-[1.4]">
                {careersHero.description}
              </p>
            </FadeUp>
            <FadeUp delay={0.1} initial={false}>
              <Button
                href={careersHero.primaryCta.href}
                variant="primary"
                arrow="none"
                className="normal-case tracking-normal px-8 py-3 text-[16px] font-semibold"
              >
                {careersHero.primaryCta.label}
              </Button>
            </FadeUp>
          </div>

          <FadeLeft delay={0.1} initial={false}>
            <div className="relative mx-auto aspect-[772/515] w-full max-w-[772px]">
              <Image
                src={careersHero.image}
                alt="Lemma culture puzzle lightbulb — growth, teamwork, and innovation"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1024px) 90vw, 50vw"
              />
            </div>
          </FadeLeft>
        </div>
      </Container>
    </section>
  );
}
