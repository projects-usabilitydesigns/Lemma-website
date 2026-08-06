"use client";

import Image from "next/image";
import { FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { aboutAssets } from "@/lib/about-data";

export function AboutCommunity() {
  return (
    <section id="community" className="bg-white py-16 md:py-[90px]">
      <Container>
        {/* Desktop — Figma: frame 1421×751, text cutout 746×298 @ x:675 */}
        <FadeUp className="group relative mx-auto hidden w-full max-w-[1421px] overflow-hidden rounded-[40px] lg:block">
          <div className="relative aspect-[1421/751] w-full">
            <Image
              src={aboutAssets.community}
              alt="Lemma team — Lemmagicians at work"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1421px) 100vw, 1421px"
              priority
            />
          </div>

          <div
            className="absolute right-0 top-0 flex h-[39.68%] w-[52.5%] flex-col justify-center rounded-bl-[40px] bg-white"
            style={{ padding: "70px 27px 71px" }}
          >
            <div className="flex flex-col gap-2.5">
              <SectionLabel label="Creative Minds" />
              <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
                Lemmagicians at work!
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-[18px] font-medium leading-[1.55] text-[var(--color-slate)]">
                From larger-than-life DOOH displays to captivating CTV and OTT experiences, our
                platform is your gateway to a dynamic and comprehensive Omni-Digital strategy.
                Welcome to the future of advertising, where we redefine possibilities and deliver
                your brand&apos;s story across every screen seamlessly.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Mobile / tablet */}
        <div className="space-y-8 lg:hidden">
          <FadeUp className="space-y-4">
            <SectionLabel label="Creative Minds" />
            <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
              Lemmagicians at work!
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-[18px] font-medium leading-[1.55] text-[var(--color-slate)]">
              From larger-than-life DOOH displays to captivating CTV and OTT experiences, our
              platform is your gateway to a dynamic and comprehensive Omni-Digital strategy.
              Welcome to the future of advertising, where we redefine possibilities and deliver
              your brand&apos;s story across every screen seamlessly.
            </p>
          </FadeUp>
          <FadeUp
            delay={0.08}
            className="group relative mx-auto aspect-[1421/751] w-full max-w-[1421px] overflow-hidden rounded-[28px]"
          >
            <Image
              src={aboutAssets.community}
              alt="Lemma team — Lemmagicians at work"
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
