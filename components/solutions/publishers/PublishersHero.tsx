"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { publishersHero, publishersStats } from "@/lib/solutions-publishers-page-data";
import { animation } from "@/lib/design-system";

export function PublishersHero() {
  return (
    <section className="relative mx-auto w-full max-w-[1920px] overflow-hidden md:h-[664px]">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />

      <Container className="relative flex h-full items-center pt-[120px] pb-10 md:pt-[130px] md:pb-0">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <div className="flex flex-col gap-6">
            <SectionLabel label={publishersHero.label} />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animation.duration.slow, ease: animation.easeOut }}
              className="font-heading text-[40px] font-semibold leading-[1.12] tracking-[-0.72px] text-black md:text-[52px]"
            >
              {publishersHero.titlePrefix}
              <br />
              <span
                style={{
                  backgroundImage: "var(--gradient-cta)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {publishersHero.gradientTitle}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animation.duration.base, ease: animation.easeOut, delay: 0.1 }}
              className="font-heading max-w-xl text-[16px] font-normal leading-[1.55] tracking-[0.3px] text-[#09131A] md:text-[19px]"
            >
              {publishersHero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animation.duration.base, ease: animation.easeOut, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Button
                href={publishersHero.primaryCta.href}
                variant="primary"
                arrow="right"
                className="normal-case tracking-normal px-7 py-3 text-[15px] font-semibold"
              >
                {publishersHero.primaryCta.label}
              </Button>
              <Button
                href={publishersHero.secondaryCta.href}
                variant="outline"
                arrow="none"
                className="normal-case tracking-normal px-7 py-3 text-[15px] font-semibold"
              >
                {publishersHero.secondaryCta.label}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animation.duration.base, ease: animation.easeOut, delay: 0.3 }}
              className="mt-2 grid grid-cols-4 gap-x-3 md:gap-x-5"
            >
              {publishersStats.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <p className="font-heading text-[24px] font-semibold leading-none text-[var(--color-ink)] md:text-[28px]">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[10px] font-semibold uppercase leading-[1.35] tracking-[0.6px] text-[var(--color-slate)] md:text-[11px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: animation.duration.base, ease: animation.easeOut, delay: 0.15 }}
            className="relative hidden h-[420px] w-full overflow-hidden rounded-[16px] md:block lg:h-[480px]"
          >
            <Image
              src={publishersHero.image}
              alt={publishersHero.imageAlt}
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 680px"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}