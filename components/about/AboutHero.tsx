"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { aboutAssets } from "@/lib/about-data";
import { animation } from "@/lib/design-system";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-[120px] md:pb-24 md:pt-[160px]">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      <Container className="relative">
        <p className="mb-6 text-[14px] font-medium text-[var(--color-slate)]">
          <span className="text-[var(--color-blue-link)]">Home</span>
          <span className="mx-2">/</span>
          <span>About Us</span>
        </p>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animation.duration.slow, ease: animation.easeOut }}
              className="text-[40px] font-semibold leading-[1.05] text-[var(--color-ink)] md:text-[56px] md:leading-[1.1]"
            >
              Transforming
              <br />
              Advertising Futures
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animation.duration.base, ease: animation.easeOut, delay: 0.1 }}
              className="max-w-lg text-[18px] leading-[1.5] text-[var(--color-slate)] md:text-[20px]"
            >
              Lemma is an AI-first AdTech company on a mission to turn every outdoor impression
              into a measurable outcome — connecting brands, media owners, and audiences across
              DOOH, CTV, mobile, and digital.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animation.duration.base, ease: animation.easeOut, delay: 0.2 }}
            >
              <Button href="#team" variant="primary" arrow="right">
                Meet our team
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: animation.duration.base, ease: animation.easeOut, delay: 0.15 }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px]"
          >
            <Image
              src={aboutAssets.hero}
              alt="Lemma platform illustration"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
