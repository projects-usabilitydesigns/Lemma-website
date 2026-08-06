"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeLeft, FadeUp, ScaleIn } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { integralAssets } from "@/lib/integral-data";

export function IntegralAudienceGraph() {
  const reduced = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden py-10 md:py-14"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 80% 70% at 28% 40%, #E4F5FF 0%, #D0EDFF 100%)",
      }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 size-64 rounded-full bg-white/30 blur-3xl"
        animate={reduced ? undefined : { x: [0, 30, 0], y: [0, 20, 0] }}
        transition={
          reduced ? undefined : { duration: 10, ease: "easeInOut", repeat: Infinity }
        }
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 size-72 rounded-full bg-[#008fdb]/15 blur-3xl"
        animate={reduced ? undefined : { x: [0, -24, 0], y: [0, -16, 0] }}
        transition={
          reduced ? undefined : { duration: 12, ease: "easeInOut", repeat: Infinity }
        }
      />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeLeft className="space-y-6 md:space-y-7">
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
            <FadeUp delay={0.1}>
              <Button href="#cta" variant="primary" arrow="right">
                Click here to know more
              </Button>
            </FadeUp>
          </FadeLeft>

          <ScaleIn delay={0.1} className="relative mx-auto w-full max-w-[580px]">
            <motion.div
              animate={
                reduced
                  ? undefined
                  : { y: [0, -10, 0], rotate: [-0.4, 0.4, -0.4] }
              }
              transition={
                reduced
                  ? undefined
                  : {
                      duration: 6.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }
              }
              className="relative aspect-[660/440] w-full"
            >
              <Image
                src={integralAssets.audienceGraph}
                alt="Lemma Audience Graph across DOOH, mobile, and tablet"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 580px"
              />
            </motion.div>
          </ScaleIn>
        </div>
      </Container>
    </section>
  );
}
