"use client";

import { Check } from "lucide-react";
import { FadeLeft, FadeRight } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { brandsJourney, brandsKpis, type BrandsKpi } from "@/lib/solutions-brands-data";

type JourneyData = {
  label: string;
  title: string;
  description: string;
  bullets: readonly string[];
  cta: { label: string; href: string };
};

export function JourneySection({
  data = brandsJourney,
  kpis = brandsKpis,
  chartTitle = "Performance Over Time",
  chartLegend = { primary: "Impressions", secondary: "Conversions" },
}: {
  data?: JourneyData;
  kpis?: BrandsKpi[];
  chartTitle?: string;
  chartLegend?: { primary: string; secondary: string };
}) {
  return (
    <section className="bg-white py-16 md:py-[90px]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeRight>
            <div className="space-y-6">
              <SectionLabel label={data.label} />
              <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[42px] md:leading-[1.15]">
                {data.title}
              </h2>
              <p className="text-[18px] leading-relaxed text-[var(--color-slate)] md:text-[20px]">
                {data.description}
              </p>
              <ul className="space-y-3.5">
                {data.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-[17px] text-[var(--color-ink-muted)]">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[rgba(248,45,137,0.12)] text-[var(--color-pink)]">
                      <Check className="size-3.5" strokeWidth={2.5} />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <a
                href={data.cta.href}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-pink)] px-6 py-3 text-[14px] font-semibold uppercase tracking-[2px] text-white transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(248,45,137,0.35)]"
              >
                {data.cta.label}
                <span aria-hidden>→</span>
              </a>
            </div>
          </FadeRight>

          <FadeLeft delay={0.1}>
            <div className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-cream-soft)] p-5 shadow-[0_20px_50px_rgba(9,19,26,0.08)] md:p-6">
              <div className="mb-5 grid grid-cols-2 gap-3">
                {kpis.map((kpi) => (
                  <div
                    key={kpi.id}
                    className="rounded-2xl border border-[var(--color-border)] bg-white p-4"
                  >
                    <p className="text-[12px] font-medium uppercase tracking-[1px] text-[var(--color-slate)]">
                      {kpi.label}
                    </p>
                    <p className="font-heading mt-1 text-[24px] font-semibold text-[var(--color-ink)]">
                      {kpi.value}
                    </p>
                    <p className="mt-1 text-[13px] font-semibold text-[var(--color-green)]">
                      {kpi.trend}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-heading text-[16px] font-semibold text-[var(--color-ink)]">
                    {chartTitle}
                  </h3>
                  <div className="flex items-center gap-3 text-[12px] text-[var(--color-slate)]">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-[var(--color-blue)]" /> {chartLegend.primary}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-[var(--color-pink)]" /> {chartLegend.secondary}
                    </span>
                  </div>
                </div>
                <svg viewBox="0 0 400 160" className="h-auto w-full" aria-hidden>
                  <defs>
                    <linearGradient id="impFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#008fdb" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#008fdb" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 120 C40 110, 70 90, 110 95 S180 130, 220 100 S300 40, 340 55 S380 80, 400 70 L400 160 L0 160 Z"
                    fill="url(#impFill)"
                  />
                  <path
                    d="M0 120 C40 110, 70 90, 110 95 S180 130, 220 100 S300 40, 340 55 S380 80, 400 70"
                    fill="none"
                    stroke="#008fdb"
                    strokeWidth="3"
                  />
                  <path
                    d="M0 140 C50 135, 90 125, 130 120 S200 110, 250 90 S330 70, 400 50"
                    fill="none"
                    stroke="#f82d89"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>
          </FadeLeft>
        </div>
      </Container>
    </section>
  );
}
