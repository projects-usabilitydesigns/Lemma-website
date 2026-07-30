"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeLeft, FadeUp, Stagger, staggerItem } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useCountUp } from "@/hooks/useCountUp";
import { brandsHero, brandsStats, type BrandsStat } from "@/lib/solutions-brands-data";
import { animation } from "@/lib/design-system";

function StatItem({
  end,
  decimals = 0,
  suffix = "",
  label,
}: BrandsStat & { end: number }) {
  const { ref, value } = useCountUp({ end, decimals });
  return (
    <div className="flex flex-col gap-1">
      <p
        ref={ref as React.RefObject<HTMLParagraphElement>}
        className="font-heading text-[24px] font-semibold tracking-[-0.48px] text-[var(--color-ink-deep)] md:text-[32px]"
      >
        {decimals > 0 ? value.toFixed(decimals) : Math.round(value)}
        {suffix}
      </p>
      <p className="text-[11px] font-semibold uppercase tracking-[1.2px] text-[var(--color-slate)] md:text-[12px]">
        {label}
      </p>
    </div>
  );
}

export function BrandsHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-[100px] md:pb-12 md:pt-[112px]">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 10%, rgba(248,45,137,0.18), transparent 45%), radial-gradient(circle at 88% 20%, rgba(0,143,219,0.16), transparent 48%)",
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="space-y-5">
            <FadeUp>
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap items-center gap-1.5 text-[13px] text-[var(--color-slate)]"
              >
                {brandsHero.breadcrumb.map((crumb, index) => (
                  <span key={crumb.href} className="inline-flex items-center gap-1.5">
                    {index > 0 ? <ChevronRight className="size-3.5 opacity-60" aria-hidden /> : null}
                    {index === brandsHero.breadcrumb.length - 1 ? (
                      <span className="font-medium text-[var(--color-ink-muted)]">{crumb.label}</span>
                    ) : (
                      <Link href={crumb.href} className="transition hover:text-[var(--color-ink)]">
                        {crumb.label}
                      </Link>
                    )}
                  </span>
                ))}
              </nav>
            </FadeUp>

            <FadeUp delay={0.05}>
              <SectionLabel label={brandsHero.label} />
            </FadeUp>

            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: animation.duration.slow, ease: animation.easeOut }}
                className="font-heading text-[34px] font-semibold leading-[1.08] text-[var(--color-ink)] md:text-[48px]"
              >
                {brandsHero.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: animation.duration.base, delay: 0.12, ease: animation.easeOut }}
                className="font-heading bg-clip-text text-[24px] font-semibold leading-[1.2] text-transparent md:text-[34px]"
                style={{
                  backgroundImage: "linear-gradient(90deg, #f82d89 0%, #6b5cff 50%, #008fdb 100%)",
                }}
              >
                {brandsHero.gradientTitle}
              </motion.p>
              <FadeUp delay={0.18}>
                <p className="max-w-xl text-[15px] leading-relaxed text-[var(--color-ink-muted)] md:text-[17px]">
                  {brandsHero.description}
                </p>
              </FadeUp>
            </div>

            <Stagger className="flex flex-wrap items-center gap-3" delay={0.22}>
              <motion.div variants={staggerItem}>
                <a
                  href={brandsHero.primaryCta.href}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--color-pink)] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[2px] text-white transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(248,45,137,0.35)]"
                >
                  {brandsHero.primaryCta.label}
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              </motion.div>
              <motion.div variants={staggerItem}>
                <Button href={brandsHero.secondaryCta.href} variant="outline" arrow="none">
                  {brandsHero.secondaryCta.label}
                </Button>
              </motion.div>
            </Stagger>

            <Stagger
              className="grid grid-cols-2 gap-5 border-t border-[var(--color-border)] pt-5 sm:grid-cols-4"
              delay={0.28}
            >
              {brandsStats.map((stat) => (
                <motion.div key={stat.id} variants={staggerItem}>
                  <StatItem {...stat} end={stat.value} />
                </motion.div>
              ))}
            </Stagger>
          </div>

          <FadeLeft delay={0.12}>
            <div className="relative aspect-[5/4] overflow-hidden rounded-[24px] shadow-[0_20px_50px_rgba(9,19,26,0.14)] md:aspect-[4/3]">
              <Image
                src={brandsHero.image}
                alt="Cityscape with outdoor billboard advertising"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 46vw"
              />
            </div>
          </FadeLeft>
        </div>
      </Container>
    </section>
  );
}
