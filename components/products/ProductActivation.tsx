"use client";

import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { FadeLeft, FadeRight } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { BrandsKpi } from "@/lib/solutions-brands-data";

export type ProductActivationData = {
  label: string;
  title: string;
  description: string;
  bullets: readonly string[];
  cta: { label: string; href: string };
};

const defaultPrimary =
  "M0 88 C40 78, 70 58, 110 63 S180 98, 220 68 S300 18, 340 33 S380 56, 400 46";
const defaultSecondary =
  "M0 120 C40 110, 70 90, 110 95 S180 130, 220 100 S300 40, 340 55 S380 80, 400 70";

export function ProductActivation({
  data,
  kpis,
  chartTitle,
  chartLegend,
  chartId,
  chartPaths,
  chartViewBox = "0 0 400 160",
  visual,
  background = "#f5f8fb",
  compact = false,
}: {
  data: ProductActivationData;
  kpis?: BrandsKpi[];
  chartTitle?: string;
  chartLegend?: { primary: string; secondary: string };
  chartId?: string;
  chartPaths?: { primary: string; secondary: string };
  chartViewBox?: `${number} ${number} ${number} ${number}`;
  visual?: ReactNode;
  background?: string;
  compact?: boolean;
}) {
  const impFill = `${chartId ?? "activation"}-imp-fill`;
  const actFill = `${chartId ?? "activation"}-act-fill`;
  const primary = chartPaths?.primary ?? defaultPrimary;
  const secondary = chartPaths?.secondary ?? defaultSecondary;
  const [, , vbW, vbH] = chartViewBox.split(" ").map(Number);

  return (
    <section
      className={compact ? "overflow-x-clip py-10 md:py-12" : "overflow-x-clip py-14 md:py-[72px]"}
      style={{ background }}
    >
      <Container>
        <div
          className={
            visual
              ? "grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16"
              : "grid items-center gap-10 lg:grid-cols-2 lg:gap-[72px]"
          }
        >
          <FadeRight className="min-w-0 w-full">
            <div className="flex w-full flex-col items-start text-left gap-5">
              <SectionLabel label={data.label} />
              <h2 className="font-heading w-full text-left text-[32px] font-semibold tracking-[-0.72px] text-[#09131a] md:text-[42px] md:leading-[1.15]">
                {data.title}
              </h2>
              <p className="w-full text-left text-[18px] font-medium leading-[1.65] text-[#252f37] md:text-[20px]">
                {data.description}
              </p>
              <ul className="w-full space-y-3.5">
                {data.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-left text-[16px] leading-[1.5] text-[#252f37] md:text-[17px]"
                  >
                    <span className="mt-[3px] flex size-[18px] shrink-0 items-center justify-center rounded-full bg-[#d7eef8] text-[#008fdb]">
                      <Check className="size-2.5" strokeWidth={3} />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="pt-1">
                <Button href={data.cta.href} variant="primary" arrow="right" className="w-fit">
                  {data.cta.label}
                </Button>
              </div>
            </div>
          </FadeRight>

          <FadeLeft delay={0.1} className="flex w-full min-w-0 justify-start lg:justify-start">
            {visual ?? (
              <div
                className="rounded-[28px] p-5 shadow-[0_18px_50px_rgba(9,19,26,0.08)] md:p-6"
                style={{ background: "#fdfcf7" }}
              >
                <div className="mb-4 grid grid-cols-2 gap-3">
                  {(kpis ?? []).map((kpi) => (
                    <div
                      key={kpi.id}
                      className="rounded-[16px] border border-[rgba(9,19,26,0.08)] bg-white px-4 py-3.5"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[1.2px] text-[#09131a]">
                        {kpi.label}
                      </p>
                      <p className="font-heading mt-1 text-[26px] font-semibold leading-none tracking-[-0.4px] text-[#09131a] md:text-[28px]">
                        {kpi.value}
                      </p>
                      <p className="mt-1.5 text-[13px] font-semibold text-[#009352]">
                        {kpi.trend}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-[16px] border border-[rgba(9,19,26,0.08)] bg-white px-4 py-4 md:px-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="font-heading min-w-0 text-[14px] font-semibold leading-snug text-[#09131a] md:text-[15px]">
                      {chartTitle}
                    </h3>
                    <div className="flex shrink-0 items-center gap-3 text-[12px] text-[#4c575f]">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="size-2 rounded-full bg-[#008fdb]" /> {chartLegend?.primary}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <span className="size-2 rounded-full bg-[#009352]" /> {chartLegend?.secondary}
                      </span>
                    </div>
                  </div>
                  <svg viewBox={chartViewBox} className="h-auto w-full" aria-hidden>
                    <defs>
                      <linearGradient id={impFill} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#008fdb" stopOpacity="0.32" />
                        <stop offset="100%" stopColor="#008fdb" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id={actFill} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#009352" stopOpacity="0.34" />
                        <stop offset="100%" stopColor="#009352" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d={`${primary} L${vbW} ${vbH} L0 ${vbH} Z`}
                      fill={`url(#${impFill})`}
                    />
                    <path
                      d={`${secondary} L${vbW} ${vbH} L0 ${vbH} Z`}
                      fill={`url(#${actFill})`}
                    />
                    <path
                      d={primary}
                      fill="none"
                      stroke="#008fdb"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d={secondary}
                      fill="none"
                      stroke="#009352"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            )}
          </FadeLeft>
        </div>
      </Container>
    </section>
  );
}
