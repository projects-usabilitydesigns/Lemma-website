"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { FadeLeft, FadeUp, Stagger, staggerItem } from "@/components/animation";
import { Button, pairCtaClassName } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { VideoModal } from "@/components/ui/VideoModal";
import { useCountUp } from "@/hooks/useCountUp";
import { withGradientAccent } from "@/components/ui/GradientText";
import { brandsHero, brandsStats, type BrandsStat } from "@/lib/solutions-brands-data";
import { animation } from "@/lib/design-system";
import { cn } from "@/lib/utils";

type HeroData = {
  breadcrumb: readonly { label: string; href: string }[];
  label: string;
  title?: string;
  titleAccent?: string;
  gradientTitle: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image: string;
  imageAlt?: string;
  video?: string;
  poster?: string;
  videoDuration?: string;
};

function StatItem({
  end,
  decimals = 0,
  prefix = "",
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
        {prefix}
        {decimals > 0 ? value.toFixed(decimals) : Math.round(value)}
        {suffix}
      </p>
      <p className="whitespace-pre-line text-[11px] font-semibold uppercase tracking-[1.2px] text-[var(--color-slate)] md:text-[12px]">
        {label}
      </p>
    </div>
  );
}

function HeroMedia({ data }: { data: HeroData }) {
  const [videoOpen, setVideoOpen] = useState(false);
  const alt = data.imageAlt ?? data.title ?? data.gradientTitle;
  const thumbnail = data.image;

  if (!data.video) {
    return (
      <div className="relative aspect-[5/4] overflow-hidden rounded-[24px] shadow-[0_20px_50px_rgba(9,19,26,0.14)] md:aspect-[4/3]">
        <Image
          src={data.image}
          alt={alt}
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 46vw"
        />
      </div>
    );
  }

  return (
    <>
      <div className="group relative w-full overflow-hidden rounded-[16px] border-2 border-[#037C7C] shadow-[0_20px_50px_rgba(9,19,26,0.14)]">
        <Image
          src={thumbnail}
          alt={alt}
          width={676}
          height={392}
          priority
          className="h-auto w-full"
        />
        <button
          type="button"
          aria-label="Play video"
          onClick={() => setVideoOpen(true)}
          className="absolute left-1/2 top-1/2 z-10 flex size-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-[0px_10px_40px_-5px_rgba(0,143,219,0.55)] transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundImage: "linear-gradient(135deg, #008fdb 0%, #009352 100%)" }}
        >
          <Play className="ml-0.5 size-[27px] fill-white text-white" />
        </button>
      </div>
      <VideoModal
        open={videoOpen}
        title={alt}
        videoUrl={data.video}
        onClose={() => setVideoOpen(false)}
      />
    </>
  );
}

export function BrandsHero({
  data = brandsHero,
  stats = brandsStats,
}: {
  data?: HeroData;
  stats?: BrandsStat[];
}) {
  return (
    <section className="relative overflow-hidden pb-[44px] pt-[121px] md:pb-[53px] md:pt-[135px]">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 10%, rgba(0,143,219,0.18), transparent 45%), radial-gradient(circle at 88% 20%, rgba(0,143,219,0.16), transparent 48%)",
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
                {data.breadcrumb.map((crumb, index) => (
                  <span key={crumb.href} className="inline-flex items-center gap-1.5">
                    {index > 0 ? <ChevronRight className="size-3.5 opacity-60" aria-hidden /> : null}
                    {index === data.breadcrumb.length - 1 ? (
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
              <SectionLabel label={data.label} />
            </FadeUp>

            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: animation.duration.slow, ease: animation.easeOut }}
                className={cn(
                  "font-heading text-[34px] font-semibold leading-[1.08] md:text-[48px]",
                  data.titleAccent ? "text-[var(--color-ink)]" : "gradient-text",
                )}
              >
                {data.titleAccent
                  ? withGradientAccent(data.title ?? data.gradientTitle, data.titleAccent)
                  : (data.title ?? data.gradientTitle)}
              </motion.h1>
              {data.title && data.gradientTitle ? (
                <motion.p
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: animation.duration.base, delay: 0.12, ease: animation.easeOut }}
                  className="font-heading text-[24px] font-semibold leading-[1.2] text-[var(--color-ink)] md:text-[34px]"
                >
                  {data.gradientTitle}
                </motion.p>
              ) : null}
              <FadeUp delay={0.18}>
                <p className="max-w-xl text-[17px] leading-relaxed text-[var(--color-ink-muted)] md:text-[19px]">
                  {data.description}
                </p>
              </FadeUp>
            </div>

            {data.primaryCta || data.secondaryCta ? (
              <Stagger className="flex flex-wrap items-center gap-3" delay={0.22}>
                {data.primaryCta ? (
                  <motion.div variants={staggerItem}>
                    <Button href={data.primaryCta.href} variant="primary" className={pairCtaClassName}>
                      {data.primaryCta.label}
                    </Button>
                  </motion.div>
                ) : null}
                {data.secondaryCta ? (
                  <motion.div variants={staggerItem}>
                    <Button
                      href={data.secondaryCta.href}
                      variant="outline"
                      arrow="none"
                      className={pairCtaClassName}
                    >
                      {data.secondaryCta.label}
                    </Button>
                  </motion.div>
                ) : null}
              </Stagger>
            ) : null}

            <Stagger
              className="grid grid-cols-2 gap-5 border-t border-[var(--color-border)] pt-5 sm:grid-cols-4"
              delay={0.28}
            >
              {stats.map((stat) => (
                <motion.div key={stat.id} variants={staggerItem}>
                  <StatItem {...stat} end={stat.value} />
                </motion.div>
              ))}
            </Stagger>
          </div>

          <FadeLeft delay={0.12}>
            <HeroMedia data={data} />
          </FadeLeft>
        </div>
      </Container>
    </section>
  );
}
