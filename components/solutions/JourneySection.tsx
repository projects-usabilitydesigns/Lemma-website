"use client";

import { ArrowUp, Check } from "lucide-react";
import { FadeLeft, FadeRight } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useDemoCta } from "@/components/request-demo/DemoModalProvider";
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
  bullets = "check",
  secondaryAccent = "green",
  labelAccent = "blue",
}: {
  data?: JourneyData;
  kpis?: BrandsKpi[];
  chartTitle?: string;
  chartLegend?: { primary: string; secondary: string };
  bullets?: "check" | "dot";
  secondaryAccent?: "green" | "pink";
  labelAccent?: "blue" | "pink";
}) {
  const cta = useDemoCta(data.cta.href, data.cta.label);
  const isCtv = secondaryAccent === "pink";
  const secondaryColor = isCtv ? "#ED2E80" : "#009352";
  const chartId = chartTitle.replace(/\s+/g, "-").toLowerCase();

  return (
    <section className="bg-white py-10 md:py-14">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeRight>
            <div className="space-y-6">
              {labelAccent === "pink" ? (
                <div className="space-y-2">
                  <span className="block h-px w-8 bg-[#ED2E80]" aria-hidden />
                  <span className="text-[14px] font-semibold uppercase tracking-[2px] text-[var(--color-slate)]">
                    {data.label}
                  </span>
                </div>
              ) : (
                <SectionLabel label={data.label} />
              )}
              <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[42px] md:leading-[1.15]">
                {data.title}
              </h2>
              <p className="text-[18px] leading-relaxed text-[var(--color-slate)] md:text-[20px]">
                {data.description}
              </p>
              <ul className="space-y-3.5">
                {data.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-[17px] text-[var(--color-ink-muted)]">
                    {bullets === "dot" ? (
                      <span className="mt-2 size-2 shrink-0 rounded-full bg-[#ED2E80]" aria-hidden />
                    ) : (
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[rgba(0,143,219,0.12)] text-[var(--color-pink)]">
                        <Check className="size-3.5" strokeWidth={2.5} />
                      </span>
                    )}
                    {bullet}
                  </li>
                ))}
              </ul>
              <a
                href={cta.href}
                onClick={cta.onClick}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold uppercase tracking-[2px] text-white transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,143,219,0.35)]"
                style={{ backgroundImage: "var(--gradient-blue)" }}
              >
                {data.cta.label}
                <span aria-hidden>→</span>
              </a>
            </div>
          </FadeRight>

          <FadeLeft delay={0.1}>
            <div
              className={`rounded-[24px] p-5 shadow-[0_20px_50px_rgba(9,19,26,0.08)] md:p-6 ${
                isCtv
                  ? "bg-[#f3f0e8]"
                  : "border border-[var(--color-border)] bg-[var(--color-cream-soft)]"
              }`}
            >
              <div className="mb-5 grid grid-cols-2 gap-3">
                {kpis.map((kpi) => (
                  <div
                    key={kpi.id}
                    className={`rounded-2xl bg-white p-4 ${
                      isCtv ? "" : "border border-[var(--color-border)]"
                    }`}
                  >
                    <p className="text-[12px] font-medium uppercase tracking-[1px] text-[var(--color-slate)]">
                      {kpi.label}
                    </p>
                    <p className="font-heading mt-1 text-[24px] font-semibold text-[var(--color-ink)]">
                      {kpi.value}
                    </p>
                    <p className="mt-1 inline-flex items-center gap-0.5 text-[13px] font-semibold text-[var(--color-green)]">
                      {isCtv ? <ArrowUp className="size-3" strokeWidth={3} /> : null}
                      {kpi.trend}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className={`rounded-2xl bg-white p-5 ${
                  isCtv ? "" : "border border-[var(--color-border)]"
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-heading text-[16px] font-semibold text-[var(--color-ink)]">
                    {chartTitle}
                  </h3>
                  <div className="flex items-center gap-3 text-[12px] text-[var(--color-slate)]">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-[var(--color-blue)]" /> {chartLegend.primary}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="size-2 rounded-full" style={{ backgroundColor: secondaryColor }} />{" "}
                      {chartLegend.secondary}
                    </span>
                  </div>
                </div>
                {isCtv ? (
                  <svg viewBox="0 0 400 160" className="h-auto w-full" aria-hidden>
                    <defs>
                      <linearGradient id={`${chartId}-fill`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#008fdb" stopOpacity="0.28" />
                        <stop offset="100%" stopColor="#008fdb" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 110 C45 98, 80 62, 120 72 S190 125, 235 88 S305 38, 348 52 S380 70, 400 64 L400 160 L0 160 Z"
                      fill={`url(#${chartId}-fill)`}
                    />
                    <path
                      d="M0 110 C45 98, 80 62, 120 72 S190 125, 235 88 S305 38, 348 52 S380 70, 400 64"
                      fill="none"
                      stroke="#008fdb"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M0 138 C55 128, 100 118, 150 108 S240 92, 300 68 S355 38, 400 26"
                      fill="none"
                      stroke={secondaryColor}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
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
                      stroke="#009352"
                      strokeWidth="3"
                    />
                  </svg>
                )}
              </div>
            </div>
          </FadeLeft>
        </div>
      </Container>
    </section>
  );
}
