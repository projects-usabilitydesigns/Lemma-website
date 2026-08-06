"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { BlurReveal, FadeLeft, FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DemoForm } from "@/components/request-demo/DemoForm";
import { requestDemoHero } from "@/lib/request-demo-data";

export function RequestDemoHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pb-14 pt-[121px] md:pb-20 md:pt-[135px]"
    >
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute right-0 top-0 hidden w-[62%] max-w-[900px] md:block lg:w-[56%]"
      >
        <Image
          src="/images/request-demo-hero-bg.png"
          alt=""
          width={1600}
          height={1142}
          priority
          className="h-auto w-full object-contain object-right-top opacity-90"
        />
      </motion.div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 10%, rgba(248,45,137,0.18), transparent 45%), radial-gradient(circle at 88% 20%, rgba(0,143,219,0.16), transparent 48%)",
        }}
      />

      <Container className="relative">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
          <div className="space-y-7 lg:pt-4">
            <FadeUp>
              <SectionLabel label={requestDemoHero.label} />
            </FadeUp>

            <BlurReveal>
              <h1 className="font-heading max-w-xl text-[36px] font-semibold leading-[1.08] tracking-[-0.72px] text-[var(--color-ink)] md:text-[52px]">
                {requestDemoHero.title}
              </h1>
            </BlurReveal>

            <FadeUp delay={0.1}>
              <p className="max-w-xl text-[17px] leading-relaxed text-[var(--color-ink-muted)] md:text-[19px]">
                {requestDemoHero.description}
              </p>
            </FadeUp>

            <FadeUp delay={0.16}>
              <ul className="space-y-3.5">
                {requestDemoHero.assurances.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[16px] text-[var(--color-ink-muted)] md:text-[17px]"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[rgba(248,45,137,0.12)] text-[var(--color-pink)]">
                      <Check className="size-3.5" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.22}>
              <div className="grid max-w-xl grid-cols-3 gap-5 border-t border-[var(--color-border)] pt-6">
                {requestDemoHero.stats.map((stat) => (
                  <div key={stat.id} className="flex flex-col gap-1">
                    <p className="font-heading text-[26px] font-semibold tracking-[-0.48px] text-[var(--color-ink-deep)] md:text-[34px]">
                      {stat.value}
                    </p>
                    <p className="text-[11px] font-semibold uppercase tracking-[1.2px] text-[var(--color-slate)] md:text-[12px]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          <FadeLeft delay={0.12}>
            <DemoForm />
          </FadeLeft>
        </div>
      </Container>
    </section>
  );
}
