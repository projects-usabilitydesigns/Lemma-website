"use client";

import { motion } from "framer-motion";
import { FadeUp, Stagger, staggerItem } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { withGradientAccent } from "@/components/ui/GradientText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { businessGrowthFunnel } from "@/lib/solutions-business-growth-data";

const numberStyles: Record<string, string> = {
  purple: "linear-gradient(135deg, #a684ff 0%, #008fdb 100%)",
  cyan: "linear-gradient(135deg, #00c2d7 0%, #008fdb 100%)",
  green: "linear-gradient(135deg, #74be44 0%, #009352 100%)",
};

export function FunnelJourney() {
  const { label, title, titleAccent, description, stages } = businessGrowthFunnel;

  return (
    <section className="bg-[#ECF1F4] py-10 md:py-14">
      <Container>
        <FadeUp className="mx-auto mb-10 max-w-3xl space-y-4 text-center">
          <SectionLabel label={label} align="center" dual accent="green" />
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            {withGradientAccent(title, titleAccent)}
          </h2>
          <p className="text-[18px] leading-relaxed text-[var(--color-slate)] md:text-[20px]">
            {description}
          </p>
        </FadeUp>

        <Stagger className="grid gap-5 lg:grid-cols-3" delay={0.08}>
          {stages.map((stage) => (
            <motion.article
              key={stage.id}
              variants={staggerItem}
              className="flex h-full flex-col rounded-[20px] border border-[var(--color-border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(9,19,26,0.1)]"
            >
              <div
                className="mb-5 flex size-12 items-center justify-center rounded-full text-[15px] font-semibold text-white"
                style={{ backgroundImage: numberStyles[stage.accent] }}
              >
                {stage.number}
              </div>
              <p className="text-[12px] font-semibold uppercase tracking-[1.6px] text-[var(--color-blue)]">
                {stage.label}
              </p>
              <h3 className="font-heading mt-2 text-[20px] font-semibold text-[var(--color-ink)] md:text-[22px]">
                {stage.title}
              </h3>
              <p className="mt-3 flex-1 text-[16px] leading-relaxed text-[var(--color-slate)]">
                {stage.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {stage.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[rgba(0,143,219,0.28)] bg-[rgba(0,143,219,0.06)] px-3 py-1 text-[12px] font-semibold text-[var(--color-ink)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 border-t border-[var(--color-border)] pt-4">
                <p className="font-heading text-[32px] font-semibold tracking-[-0.64px] text-[var(--color-ink)]">
                  {stage.stat}
                </p>
                <p className="mt-1 text-[13px] font-semibold text-[var(--color-slate)]">
                  {stage.statLabel}
                </p>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
