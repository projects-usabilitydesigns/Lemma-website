"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { aboutAssets } from "@/lib/about-data";
import { animation } from "@/lib/design-system";

export function AboutHero() {
  return (
    <section className="relative mx-auto h-auto w-full max-w-[1920px] overflow-hidden md:h-[664px]">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />

      <Container className="relative flex h-full items-center py-10 md:py-0">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <div className="space-y-6">
            <SectionLabel label="About Us" />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animation.duration.slow, ease: animation.easeOut }}
              className="font-heading text-[40px] font-semibold leading-[1.08] tracking-[-0.72px] text-black md:text-[56px]"
            >
              Transforming
              <br />
              Advertising Futures
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animation.duration.base, ease: animation.easeOut, delay: 0.1 }}
              className="font-heading max-w-md text-[18px] font-normal leading-[140%] tracking-[0.7px] text-[#09131A] md:text-[22px]"
            >
              Innovative technology. Transparent solutions. Measurable impact across every digital
              touchpoint.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animation.duration.base, ease: animation.easeOut, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <Button href="#community" variant="primary" arrow="right">
                Discover our story
              </Button>
              <Button href="#principles" variant="secondary" arrow="none">
                Learn More
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: animation.duration.base, ease: animation.easeOut, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="relative aspect-[702/527] w-full">
              <Image
                src={aboutAssets.hero}
                alt="Lemma platform across DOOH, CTV, OTT, Web, and Mobile"
                fill
                className="object-contain object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
