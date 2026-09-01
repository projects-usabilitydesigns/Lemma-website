"use client";

import { useState } from "react";
import Image from "next/image";
import { BlurReveal, FadeUp } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { VideoModal } from "@/components/ui/VideoModal";
import { integralAssets } from "@/lib/integral-data";
import { DEMO_MODAL_HREF } from "@/lib/demo-cta";

const INTEGRAL_DEMO_VIDEO = "https://youtu.be/aOQpghNmHsw?si=z_cx-MpQWi-oLPeT";

export function IntegralHero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative mx-auto w-full max-w-[1920px] overflow-hidden md:h-[664px]">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />

      <Container className="relative flex h-full items-center pt-[100px] pb-12 md:pt-[88px] md:pb-0">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <div className="space-y-6">
            <FadeUp>
              <SectionLabel label="Outdoor to Outcome" />
            </FadeUp>
            <BlurReveal>
              <h1 className="font-heading text-[40px] font-semibold leading-[1.08] tracking-[-0.72px] text-black md:text-[56px]">
                Celebrating the heart &amp; soul of LEMMA
              </h1>
            </BlurReveal>
            <FadeUp delay={0.12}>
              <p className="font-heading max-w-xl text-[18px] font-normal leading-[140%] tracking-[0.7px] text-[#09131A] md:text-[22px]">
                Introducing Lemma Integral – a full-funnel platform that transforms your OOH
                impressions into impactful results. It maximizes your campaign impact, driving
                full-funnel success with improved visibility, recall, and digital conversions.
              </p>
            </FadeUp>
            <FadeUp delay={0.22} className="flex flex-wrap items-center gap-3">
              <Button
                type="button"
                variant="primary"
                arrow="none"
                lift={false}
                onClick={() => setVideoOpen(true)}
                ariaLabel="Watch Integral in action"
                className="normal-case tracking-normal px-8 py-3 text-[16px] font-semibold"
              >
                Watch In Action
              </Button>
              <Button
                href={DEMO_MODAL_HREF}
                variant="outline"
                arrow="right"
                className="normal-case tracking-normal px-8 py-3 text-[16px] font-semibold"
              >
                Advertise With Us
              </Button>
            </FadeUp>
          </div>

          <div className="relative mx-auto flex w-full max-w-[640px] items-center justify-center self-center overflow-visible pt-4 md:pt-6 lg:max-w-[680px] lg:translate-y-4">
            <div className="relative w-full max-md:mb-8 max-md:origin-top max-md:scale-125">
              <Image
                src={integralAssets.heroFunnel}
                alt="Lemma Integral® full funnel — Reach, Reinforce, Results, Outcome"
                width={837}
                height={715}
                className="h-auto w-full object-contain object-center"
                style={{ clipPath: "inset(8.35% 0 0 0)" }}
                priority
                sizes="(max-width: 1024px) 100vw, 680px"
              />
              <div className="pointer-events-none absolute left-1/2 top-[1.6%] z-10 w-[42%] -translate-x-1/2">
                <Image
                  src={integralAssets.heroLogo}
                  alt=""
                  width={320}
                  height={30}
                  unoptimized
                  aria-hidden
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <VideoModal
        open={videoOpen}
        title="Lemma Integral in action"
        videoUrl={INTEGRAL_DEMO_VIDEO}
        onClose={() => setVideoOpen(false)}
      />
    </section>
  );
}
