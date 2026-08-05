"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Play } from "lucide-react";
import { BlurReveal, FadeRight, FadeUp, Stagger, staggerItem } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { VideoModal } from "@/components/ui/VideoModal";
import { useCountUp } from "@/hooks/useCountUp";
import { heroStats } from "@/lib/data";
import { cn } from "@/lib/utils";

const HERO_DEMO_VIDEO = "https://youtu.be/aOQpghNmHsw?si=z_cx-MpQWi-oLPeT";

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
  const [videoOpen, setVideoOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pb-16 pt-[138px] md:pb-24 md:pt-[184px]"
    >
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-y-0 right-0 w-[70%] opacity-80">
        <Image src="/images/hero-bg.png" alt="" fill className="object-cover object-left" priority />
      </motion.div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(244,114,182,0.22), transparent 55%), radial-gradient(circle at 85% 20%, rgba(129,140,248,0.22), transparent 50%), radial-gradient(circle at 50% 100%, rgba(94,234,212,0.2), transparent 55%)",
        }}
      />

      <Container className="relative">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="flex min-h-[360px] flex-col justify-between gap-10">
            <div className="space-y-6">
              <BlurReveal>
                <h1 className="font-heading text-[40px] font-semibold leading-[1.05] tracking-[-0.72px] text-[var(--color-ink)] md:text-[56px] md:leading-[1.05]">
                  Outdoor to Outcome.
                </h1>
              </BlurReveal>
              <FadeUp delay={0.1}>
                <p className="font-heading max-w-xl text-[24px] font-medium leading-[1.35] tracking-[0.7px] text-[var(--color-ink)] md:text-[32px] md:leading-[1.3]">
                  AI Powered platform. Full-funnel
                  <br />
                  performance across DOOH, CTV, mobile, and digital
                </p>
              </FadeUp>
              <FadeUp delay={0.2} className="pt-1">
                <Button
                  href="#products"
                  variant="outline"
                  arrow="none"
                  lift={false}
                  className="normal-case tracking-normal px-8 py-3 text-[16px] font-semibold"
                >
                  Learn More
                </Button>
              </FadeUp>
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

          <FadeRight delay={0.15}>
            <motion.div style={{ y }} className="group relative overflow-hidden rounded-[25px]">
              <div className="relative aspect-[676/408] w-full overflow-hidden rounded-[25px]">
                <Image
                  src="/images/hero-demo.jpg"
                  alt="Lemma platform demo"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-black/65" />

                {/* Pink LEMMA INTEGRAL logo — Figma: 381.63×35 @ x:143.18 y:38.33 */}
                <div className="absolute left-[12%] top-[8%] z-10 w-[55%] max-w-[382px] md:left-[143px] md:top-[38px] md:w-[382px]">
                  <Image
                    src="/images/products/integral.svg"
                    alt="Lemma Integral"
                    width={382}
                    height={35}
                    className="h-[22px] w-auto object-contain object-left md:h-[35px] md:w-[382px]"
                    priority
                  />
                </div>

                <button
                  type="button"
                  aria-label="Play demo video"
                  onClick={() => setVideoOpen(true)}
                  className="absolute left-1/2 top-1/2 z-10 flex size-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-pink-alt)] shadow-[0px_10px_40px_-5px_#ed2e80] transition-transform duration-300 group-hover:scale-110"
                >
                  <Play className="ml-0.5 size-[27px] fill-white text-white" />
                </button>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-[30px]">
                  <p className="mb-2.5 text-[14px] font-semibold uppercase tracking-[2px] text-white/70 md:text-[16px]">
                    Watch the platform in action
                  </p>
                  <p className="text-[20px] font-semibold text-white md:text-[24px] md:leading-5">
                    See how Lemma turns impressions into outcomes
                  </p>
                </div>
              </div>
            </motion.div>
          </FadeRight>
        </div>
      </Container>

      <VideoModal
        open={videoOpen}
        title="Lemma platform demo"
        videoUrl={HERO_DEMO_VIDEO}
        onClose={() => setVideoOpen(false)}
      />
    </section>
  );
}
