"use client";

import { FadeUp, Stagger, staggerItem } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useCountUp } from "@/hooks/useCountUp";
import { brandsSuccessMetrics, type BrandsStat } from "@/lib/solutions-brands-data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

function Metric({
  end,
  decimals = 0,
  suffix = "",
  label,
  labelUppercase = true,
  square = false,
}: BrandsStat & { end: number; labelUppercase?: boolean; square?: boolean }) {
  const { ref, value } = useCountUp({ end, decimals });
  return (
    <motion.div
      variants={staggerItem}
      className={cn(
        "rounded-[20px] border border-[var(--color-border)] bg-white px-5 py-7 text-center shadow-[0_8px_24px_rgba(9,19,26,0.04)]",
        square && "flex aspect-square flex-col items-center justify-center px-4 py-6",
      )}
    >
      <p
        ref={ref as React.RefObject<HTMLParagraphElement>}
        className="font-heading text-[36px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[44px]"
      >
        {decimals > 0 ? value.toFixed(decimals) : Math.round(value)}
        {suffix}
      </p>
      <p
        className={cn(
          "mt-2 text-[13px] font-semibold leading-snug text-[var(--color-slate)]",
          labelUppercase ? "uppercase tracking-[1.4px]" : "tracking-[0.2px]",
        )}
      >
        {label}
      </p>
    </motion.div>
  );
}

const brandsDefaults = {
  title: "Scale that compounds into outcomes",
  description:
    "Tap into global audiences with inventory, intelligence, and measurement built for modern brand growth.",
  metrics: brandsSuccessMetrics,
};

export function CampaignAnalytics({
  title = brandsDefaults.title,
  description = brandsDefaults.description,
  metrics = brandsDefaults.metrics,
  className,
  labelUppercase = true,
  squareCards = false,
}: {
  title?: string;
  description?: string;
  metrics?: BrandsStat[];
  className?: string;
  labelUppercase?: boolean;
  squareCards?: boolean;
}) {
  return (
    <section className={cn("bg-white py-10 md:py-14", className)}>
      <Container>
        <FadeUp className="mx-auto mb-8 max-w-2xl space-y-4 text-center">
          <SectionLabel label="Success metrics" align="center" dual accent="blue" />
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            {title}
          </h2>
          <p className="text-[18px] leading-relaxed text-[var(--color-slate)]">
            {description}
          </p>
        </FadeUp>

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5" delay={0.08}>
          {metrics.map((metric) => (
            <Metric
              key={metric.id}
              {...metric}
              end={metric.value}
              labelUppercase={labelUppercase}
              square={squareCards}
            />
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
