"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { integralAssets } from "@/lib/integral-data";
import { animation } from "@/lib/design-system";

export function IntegralHero() {
  return (
    <section className="relative mx-auto w-full max-w-[1920px] overflow-hidden md:h-[664px]">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />

      <Container className="relative flex h-full items-center pt-[100px] pb-12 md:pt-[88px] md:pb-0">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <div className="space-y-6">
            <SectionLabel label="Outdoor to Outcome" />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animation.duration.slow, ease: animation.easeOut }}
              className="font-heading text-[40px] font-semibold leading-[1.08] tracking-[-0.72px] text-black md:text-[56px]"
            >
              Celebrating the heart &amp; soul of LEMMA
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animation.duration.base, ease: animation.easeOut, delay: 0.1 }}
              className="font-heading max-w-xl text-[18px] font-normal leading-[140%] tracking-[0.7px] text-[#09131A] md:text-[22px]"
            >
              Introducing Lemma Integral – a full-funnel platform that transforms your OOH
              impressions into impactful results. It maximizes your campaign impact, driving
              full-funnel success with improved visibility, recall, and digital conversions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animation.duration.base, ease: animation.easeOut, delay: 0.2 }}
            >
              <Button href="#cta" variant="primary" arrow="right">
                Advertise with us
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: animation.duration.base, ease: animation.easeOut, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <div className="relative aspect-[781/820] w-full">
              <Image
                src={integralAssets.heroFunnel}
                alt="Lemma Integral full funnel — Reach, Reinforce, Results, Outcome"
                fill
                className="object-contain object-center mix-blend-multiply"
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
