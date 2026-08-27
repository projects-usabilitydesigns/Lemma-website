"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { deltaAssets } from "@/lib/delta-data";
import { animation } from "@/lib/design-system";
import { DEMO_MODAL_HREF } from "@/lib/demo-cta";

export function DeltaHero() {
  return (
    <section className="relative mx-auto w-full max-w-[1920px] overflow-hidden md:h-[664px]">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />

      <Container className="relative flex h-full items-center pt-[100px] pb-12 md:pt-[88px] md:pb-0">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,580px)] lg:gap-10 xl:gap-14">
          <div className="max-w-[560px] space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animation.duration.slow, ease: animation.easeOut }}
              className="font-heading text-[40px] font-semibold leading-[1.08] tracking-[-0.72px] text-black md:text-[56px]"
            >
              Deep insights,
              <br />
              deeper connections
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animation.duration.base, ease: animation.easeOut, delay: 0.1 }}
              className="font-heading text-[18px] font-normal leading-[140%] tracking-[0.7px] text-[#09131A] md:text-[22px]"
            >
              Plan, activate, and measure all your new-age digital
              <br className="hidden md:block" />
              campaigns through our omnichannel solution
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animation.duration.base, ease: animation.easeOut, delay: 0.2 }}
            >
              <Button
                href={DEMO_MODAL_HREF}
                variant="primary"
                arrow="none"
                className="normal-case tracking-normal px-8 py-3 text-[16px] font-semibold"
              >
                Partner With Us
              </Button>
            </motion.div>
          </div>

          {/* Sharp source assets — logo + black title + graphic (Figma stack) */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: animation.duration.base, ease: animation.easeOut, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:justify-self-end"
          >
            <Image
              src={deltaAssets.heroGraphic}
              alt="LEMMA DELTA — Plan, Activate, Measure"
              width={709}
              height={568}
              unoptimized
              className="h-auto w-full object-contain object-center"
              priority
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
