"use client";

import { useMemo, useState } from "react";
import { FadeUp } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { formatNumber } from "@/lib/utils";

function SliderField({
  label,
  valueLabel,
  min,
  max,
  step,
  value,
  onChange,
  minLabel,
  maxLabel,
  minLabelShort,
  maxLabelShort,
}: {
  label: string;
  valueLabel: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  minLabel: string;
  maxLabel: string;
  minLabelShort?: string;
  maxLabelShort?: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="min-w-0 space-y-2">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <p className="text-[13px] font-medium text-[var(--color-ink)] sm:text-[14px]">{label}</p>
        <p className="shrink-0 text-[18px] font-extrabold tracking-[-0.4px] text-[var(--color-blue)] sm:text-[20px]">
          {valueLabel}
        </p>
      </div>
      <div className="relative pt-2">
        <div className="h-1.5 overflow-hidden rounded-full bg-[rgba(0,143,219,0.2)]">
          <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundImage: "var(--gradient-cta)" }} />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-label={label}
          className="absolute inset-x-0 top-0 h-5 w-full cursor-pointer appearance-none bg-transparent accent-[var(--color-pink)]"
        />
      </div>
      <div className="flex justify-between gap-2 text-[10px] uppercase tracking-[0.8px] text-[var(--color-slate)] sm:text-[11px] sm:tracking-[1.54px]">
        <span className="max-w-[48%] text-left leading-snug">
          <span className={minLabelShort ? "sm:hidden" : undefined}>{minLabelShort ?? minLabel}</span>
          {minLabelShort ? <span className="hidden sm:inline">{minLabel}</span> : null}
        </span>
        <span className="max-w-[48%] text-right leading-snug">
          <span className={maxLabelShort ? "sm:hidden" : undefined}>{maxLabelShort ?? maxLabel}</span>
          {maxLabelShort ? <span className="hidden sm:inline">{maxLabel}</span> : null}
        </span>
      </div>
    </div>
  );
}

export function ArchitectureImpact() {
  const [impressions, setImpressions] = useState(500);
  const [uptime, setUptime] = useState(99.9);
  const [nodes, setNodes] = useState(40);

  const savings = useMemo(() => {
    const base = impressions * 320 + nodes * 1800 + (uptime - 99) * 40000;
    return Math.round(base);
  }, [impressions, uptime, nodes]);

  const latency = useMemo(() => (1.8 - (uptime - 99) * 0.25).toFixed(2), [uptime]);
  const load = useMemo(() => (impressions / 80 + nodes * 12).toFixed(1), [impressions, nodes]);

  const impressionLabel =
    impressions >= 1000 ? `${(impressions / 1000).toFixed(1)} Billion` : `${impressions} Million`;

  return (
    <section id="architecture" className="relative overflow-hidden py-10 md:py-14">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(21,129,197,0.32), transparent 55%), radial-gradient(circle at 85% 20%, rgba(237,46,128,0.28), transparent 50%), radial-gradient(circle at 50% 100%, rgba(0,147,82,0.22), transparent 55%)",
        }}
      />
      <Container className="relative">
        <FadeUp className="mx-auto mb-8 max-w-3xl space-y-4 text-center">
          <SectionLabel label="Interactive Assessment" accent="blue" align="center" dual />
          <h2 className="text-[28px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] sm:text-[32px] md:text-[45px] md:leading-[50px]">
            Project Your Lemma
            <br />
            Architecture Impact
          </h2>
          <p className="px-1 text-[15px] leading-7 text-[var(--color-slate)] sm:text-[16px] md:text-[18px]">
            Adjust the parameters below to estimate cost-efficiency savings and total request volume
            capacity across your omnichannel stack.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="overflow-hidden border border-[var(--color-border)] bg-[rgba(249,248,245,0.6)] p-4 backdrop-blur-[4px] sm:p-6 md:p-10">
            <div className="grid min-w-0 gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
              <div className="flex min-w-0 flex-col justify-center gap-8 sm:gap-10">
                <SliderField
                  label="Monthly High Volume Impressions"
                  valueLabel={impressionLabel}
                  min={100}
                  max={5000}
                  step={50}
                  value={impressions}
                  onChange={setImpressions}
                  minLabel="100 Million"
                  maxLabel="5 Billion"
                  minLabelShort="100M"
                  maxLabelShort="5B"
                />
                <SliderField
                  label="Average Uptime Dependency"
                  valueLabel={`${uptime.toFixed(1)}% SLA`}
                  min={99}
                  max={99.999}
                  step={0.001}
                  value={uptime}
                  onChange={setUptime}
                  minLabel="Standard SLA (99.0%)"
                  maxLabel="Critical SLA (99.999%)"
                  minLabelShort="99.0%"
                  maxLabelShort="99.999%"
                />
                <SliderField
                  label="Target DOOH Screen Network"
                  valueLabel={`${nodes} Nodes`}
                  min={10}
                  max={500}
                  step={1}
                  value={nodes}
                  onChange={setNodes}
                  minLabel="10 Screens"
                  maxLabel="500 Screens"
                  minLabelShort="10"
                  maxLabelShort="500"
                />
              </div>

              <div className="flex min-w-0 flex-col gap-3 border border-[var(--color-border)] bg-[rgba(252,252,249,0.8)] p-5 sm:p-8">
                <p className="text-[11px] uppercase tracking-[2px] text-[var(--color-slate)] sm:text-[12px] sm:tracking-[2.64px]">
                  Projected Annual Savings
                </p>
                <p className="break-words text-[36px] font-extrabold tracking-[-1.44px] text-[var(--color-ink)] transition-all duration-300 sm:text-[48px] md:text-[72px] md:leading-[72px]">
                  ${formatNumber(savings)}+
                </p>
                <p className="pb-4 text-[13px] text-[var(--color-blue)] sm:pb-5 sm:text-[14px]">
                  Estimated infrastructure & routing optimizations
                </p>
                <div className="h-px bg-[var(--color-divider)]" />
                <div className="grid grid-cols-2 gap-4 py-4 sm:gap-6 sm:py-5">
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[1.5px] text-[var(--color-slate)] sm:tracking-[2px]">
                      Est. Data Latency
                    </p>
                    <p className="mt-2 text-[20px] font-extrabold tracking-[-0.48px] text-[var(--color-blue)] sm:text-[24px]">
                      &lt; {latency}ms
                    </p>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[1.5px] text-[var(--color-slate)] sm:tracking-[2px]">
                      Max Load Safe
                    </p>
                    <p className="mt-2 text-[20px] font-extrabold tracking-[-0.48px] text-[var(--color-ink)] sm:text-[24px]">
                      {load}k req/s
                    </p>
                  </div>
                </div>
                <Button href="#cta" variant="primary" className="w-full justify-center px-4 text-center text-[12px] sm:text-[14px]">
                  Request Full TCO Breakdown
                </Button>
              </div>
            </div>
          </div>
        </FadeUp>

        <div className="mt-8 flex justify-center">
          <Button href="#architecture" variant="primary">
            learn more
          </Button>
        </div>
      </Container>
    </section>
  );
}
