"use client";

import { motion } from "framer-motion";
import { FadeUp, Stagger, staggerItem } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { businessGrowthResults } from "@/lib/solutions-business-growth-data";
import { cn } from "@/lib/utils";

const badgeTones: Record<string, string> = {
  red: "bg-[#fde8e4] text-[#c2410c]",
  blue: "bg-[rgba(0,143,219,0.12)] text-[var(--color-blue-deep)]",
  green: "bg-[rgba(0,147,82,0.12)] text-[var(--color-green)]",
};

const barTones: Record<string, string> = {
  green: "bg-[var(--color-green)]",
  cyan: "bg-[var(--color-blue)]",
  purple: "bg-[var(--color-purple)]",
};

export function GrowthResults() {
  const { title, description, items } = businessGrowthResults;

  return (
    <section className="bg-white py-10 md:py-14">
      <Container>
        <FadeUp className="mb-8 max-w-3xl space-y-4">
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            {title}
          </h2>
          <p className="text-[18px] leading-relaxed text-[var(--color-slate)] md:text-[20px]">
            {description}
          </p>
        </FadeUp>

        <Stagger className="grid gap-5 lg:grid-cols-3" delay={0.08}>
          {items.map((item) => (
            <motion.article
              key={item.id}
              variants={staggerItem}
              className="flex h-full flex-col rounded-[20px] border border-[var(--color-border)] bg-[var(--color-cream)] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(0,143,219,0.35)] hover:bg-white hover:shadow-[0_18px_40px_rgba(9,19,26,0.1)]"
            >
              <span
                className={cn(
                  "w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[1.2px]",
                  badgeTones[item.categoryTone],
                )}
              >
                {item.category}
              </span>
              <h3 className="font-heading mt-4 text-[20px] font-semibold text-[var(--color-ink)] md:text-[22px]">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-slate)]">
                {item.challenge}
              </p>
              <ul className="mt-6 space-y-4">
                {item.metrics.map((metric) => (
                  <li key={metric.label}>
                    <div className="mb-1.5 flex items-baseline justify-between gap-3">
                      <span className="text-[13px] font-medium text-[var(--color-slate)]">
                        {metric.label}
                      </span>
                      <span className="font-heading text-[16px] font-semibold text-[var(--color-ink)]">
                        {metric.value}
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-[rgba(9,19,26,0.08)]">
                      <span
                        className={cn("block h-full rounded-full", barTones[metric.bar])}
                        style={{ width: metric.width }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-6 text-[13px] font-semibold text-[var(--color-ink-muted)]">
                {item.platform}
              </p>
            </motion.article>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
