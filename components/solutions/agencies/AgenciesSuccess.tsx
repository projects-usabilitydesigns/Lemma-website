"use client";

import { FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { agenciesSuccess } from "@/lib/solutions-agencies-page-data";

export function AgenciesSuccess() {
  return (
    <section
      className="relative py-12 md:py-16"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(232,246,255,0.95) 0%, rgba(255,228,240,0.95) 100%)",
      }}
    >
      <Container>
        <FadeUp className="mx-auto mb-10 max-w-2xl space-y-4 text-center">
          <SectionLabel label={agenciesSuccess.label} align="center" accent="blue" />
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            {agenciesSuccess.title}
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[18px] leading-[1.65] text-[var(--color-slate)] max-w-2xl mx-auto">
            {agenciesSuccess.description}
          </p>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {agenciesSuccess.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex min-w-[160px] flex-1 flex-col items-center rounded-[16px] border border-[var(--color-border)] bg-white px-4 py-5 text-center md:min-w-[180px]"
              >
                <p
                  className="font-heading text-[32px] font-semibold leading-none md:text-[40px]"
                  style={{
                    backgroundImage: "var(--gradient-cta)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-[12px] font-semibold uppercase tracking-[1.4px] text-[var(--color-slate)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}