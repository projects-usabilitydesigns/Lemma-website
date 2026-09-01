"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { phiAssets } from "@/lib/phi-data";
import { animation } from "@/lib/design-system";

export function PhiHero() {
  return (
    <section className="relative mx-auto w-full max-w-[1920px] overflow-hidden md:min-h-[664px]">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />

      <Container className="relative flex h-full items-center pt-[100px] pb-12 md:pt-[88px] md:pb-10">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-6 xl:gap-10">
          <div className="space-y-6 md:space-y-7">
            <FadeUp>
              <h1 className="font-heading text-[40px] font-semibold leading-[1.08] tracking-[-0.72px] text-black md:text-[56px]">
                Run the show with complete control
              </h1>
            </FadeUp>
            <FadeUp delay={0.08}>
              <p className="font-heading max-w-xl text-[18px] font-normal leading-[140%] tracking-[0.7px] text-[#09131A] md:text-[22px]">
                Convert cost center into profit centre for free with Lemma CMS.
              </p>
            </FadeUp>
            <FadeUp delay={0.16}>
              <Button href="#cta" variant="primary" arrow="right">
                Partner with us
              </Button>
            </FadeUp>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: animation.duration.slow,
              ease: animation.easeOut,
              delay: 0.12,
            }}
            className="relative mx-auto flex w-full max-w-[640px] items-center justify-center lg:mx-0 lg:max-w-[620px] lg:justify-self-end"
          >
            <div className="relative w-full">
              <Image
                src={phiAssets.heroGraphic}
                alt="Lemma Phi™ — content management for DOOH screens"
                width={738}
                height={540}
                quality={100}
                unoptimized
                className="h-auto w-full object-contain object-center"
                style={{ clipPath: "inset(7.5% 0 0 0)" }}
                priority
                sizes="(max-width: 1024px) 100vw, 620px"
              />
              <div className="pointer-events-none absolute left-1/2 top-[1.2%] z-10 w-[30%] -translate-x-1/2">
                <Image
                  src={phiAssets.heroLogo}
                  alt=""
                  width={188}
                  height={28}
                  unoptimized
                  aria-hidden
                  className="h-auto w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
