"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BlurReveal, FadeUp } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { VideoModal } from "@/components/ui/VideoModal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { integralAssets } from "@/lib/integral-data";
import { animation } from "@/lib/design-system";

const INTEGRAL_DEMO_VIDEO = "https://youtu.be/aOQpghNmHsw?si=z_cx-MpQWi-oLPeT";

export function IntegralHero() {
  const [videoOpen, setVideoOpen] = useState(false);
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 48]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 0.96]);

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto w-full max-w-[1920px] overflow-hidden md:h-[664px]"
    >
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />

      <Container className="relative flex h-full items-center py-10 md:py-0">
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
                href="#cta"
                variant="outline"
                arrow="right"
                className="normal-case tracking-normal px-8 py-3 text-[16px] font-semibold"
              >
                Advertise With Us
              </Button>
            </FadeUp>
          </div>

          <motion.div
            initial={reduced ? false : { opacity: 0, x: 40, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: animation.duration.slow,
              ease: animation.ease,
              delay: reduced ? 0 : 0.18,
            }}
            style={{ y: imageY, scale: imageScale }}
            className="relative mx-auto flex w-full max-w-[640px] items-center justify-center self-center pt-4 md:pt-6 lg:max-w-[680px] lg:translate-y-4"
          >
            <motion.div
              animate={
                reduced
                  ? undefined
                  : {
                      y: [0, -12, 0],
                      rotate: [-0.6, 0.6, -0.6],
                    }
              }
              transition={
                reduced
                  ? undefined
                  : {
                      duration: 6,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }
              }
              className="relative aspect-[781/820] w-full"
            >
              <Image
                src={integralAssets.heroFunnel}
                alt="Lemma Integral full funnel — Reach, Reinforce, Results, Outcome"
                fill
                className="object-contain object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 680px"
              />
            </motion.div>
          </motion.div>
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
