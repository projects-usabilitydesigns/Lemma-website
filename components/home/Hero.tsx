"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Stagger, staggerItem } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useCountUp } from "@/hooks/useCountUp";
import { heroStats } from "@/lib/data";
import { cn } from "@/lib/utils";
import { animation } from "@/lib/design-system";
function StatItem({
  end,
  decimals = 0,
  suffix = "",
  label,
  className,
}: {
  end: number;
  decimals?: number;
  suffix?: string;
  label: string;
  className?: string;
}) {
  const { ref, value } = useCountUp({ end, decimals });
  return (
    <div className={cn("flex flex-1 flex-col gap-1.5", className)}>
      <p
        ref={ref as React.RefObject<HTMLParagraphElement>}
        className="text-[36px] font-semibold tracking-[-0.72px] text-[var(--color-ink-deep)] md:text-[45px] md:leading-[50px]"
      >
        {decimals > 0 ? value.toFixed(decimals) : Math.round(value)}
        {suffix}
      </p>
      <p className="text-[12px] font-semibold uppercase tracking-[1.2px] text-[var(--color-slate)] md:text-[14px] md:tracking-[2px]">
        {label}
      </p>
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pb-16 pt-[120px] md:pb-24 md:pt-[160px]"
    >
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(244,114,182,0.22), transparent 55%), radial-gradient(circle at 85% 20%, rgba(129,140,248,0.22), transparent 50%), radial-gradient(circle at 50% 100%, rgba(94,234,212,0.2), transparent 55%)",
        }}
      />

      <Container className="relative">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex min-h-[360px] flex-col justify-between gap-10">
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, filter: "blur(10px)", y: 16 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: animation.duration.slow, ease: animation.easeOut }}
                className="text-[40px] font-semibold leading-[1.05] text-[var(--color-ink)] md:text-[56px] md:leading-[51.84px]"
              >
                Outdoor to Outcome.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: animation.duration.base, ease: animation.easeOut, delay: 0.1 }}
                className="text-[24px] font-semibold tracking-[0.7px] text-[var(--color-ink)] md:text-[32px] md:leading-[1.4]"
              >
                An AI-First Full-Funnel Attribution Platform
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: animation.duration.base, ease: animation.easeOut, delay: 0.18 }}
                className="max-w-xl text-[18px] leading-[1.4] text-[var(--color-ink)] md:text-[22px]"
              >
                AI Powered platform. Full-funnel performance across DOOH, CTV, mobile, and digital
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: animation.duration.base, ease: animation.easeOut, delay: 0.26 }}
              >
                <Button href="#products" variant="primary" arrow="right">
                  learn more
                </Button>
              </motion.div>
            </div>
            <Stagger className="grid grid-cols-3 gap-3 md:gap-6" delay={0.2}>
              {heroStats.map((stat) => (
                <motion.div key={stat.label} variants={staggerItem}>
                  <StatItem
                    end={stat.numericValue}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                </motion.div>
              ))}
            </Stagger>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: animation.duration.base, ease: animation.easeOut, delay: 0.15 }}
            style={{ y }}
            className="group relative overflow-hidden rounded-[25px]"
          >
            <button
              type="button"
              aria-label="Watch the Lemma platform in action"
              className="relative block w-full overflow-hidden rounded-[25px]"
            >
              <Image
                src="/images/banner_homepage.png"
                alt="Watch the Lemma platform in action — see how Lemma turns impressions into outcomes"
                width={676}
                height={408}
                className="h-auto w-full rounded-[25px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />
            </button>
          </motion.div>        </div>
      </Container>
    </section>
  );
}
