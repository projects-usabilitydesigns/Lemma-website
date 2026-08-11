"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { VideoModal } from "@/components/ui/VideoModal";
import { sigmaAssets } from "@/lib/sigma-data";
import { animation } from "@/lib/design-system";

const SIGMA_DEMO_VIDEO = "https://youtu.be/aOQpghNmHsw?si=z_cx-MpQWi-oLPeT";

export function SigmaHero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative mx-auto w-full max-w-[1920px] overflow-hidden md:h-[664px]">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />

      <Container className="relative flex h-full items-center pt-[100px] pb-12 md:pt-[88px] md:pb-0">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <div className="space-y-6">
            <SectionLabel label="Supply Side Platform" />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animation.duration.slow, ease: animation.easeOut }}
              className="font-heading text-[40px] font-semibold leading-[1.08] tracking-[-0.72px] text-black md:text-[56px]"
            >
              Run the show with complete control
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animation.duration.base, ease: animation.easeOut, delay: 0.1 }}
              className="font-heading max-w-xl text-[18px] font-normal leading-[140%] tracking-[0.7px] text-[#09131A] md:text-[22px]"
            >
              Our sophisticated Supply Side Platform puts control back in your hands, allowing you
              to onboard, integrate, package, optimize and monetize your inventory.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animation.duration.base, ease: animation.easeOut, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Button
                type="button"
                variant="primary"
                arrow="none"
                lift={false}
                onClick={() => setVideoOpen(true)}
                ariaLabel="Watch Sigma in action"
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
                Partner With Us
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: animation.duration.base, ease: animation.easeOut, delay: 0.15 }}
            className="relative mx-auto flex w-full max-w-[640px] items-center justify-center self-center pt-4 md:pt-6 lg:max-w-[680px] lg:translate-y-4"
          >
            <div className="relative aspect-[781/820] w-full">
              <Image
                src={sigmaAssets.heroPuzzle}
                alt="Lemma Sigma — Publishers connected to Multiple Buyers across DOOH, CTV/OTT and Retail Media"
                fill
                className="object-contain object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 680px"
              />
            </div>
          </motion.div>
        </div>
      </Container>

      <VideoModal
        open={videoOpen}
        title="Lemma Sigma in action"
        videoUrl={SIGMA_DEMO_VIDEO}
        onClose={() => setVideoOpen(false)}
      />
    </section>
  );
}