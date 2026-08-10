"use client";

import { FadeUp } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { publishersGrowth } from "@/lib/solutions-publishers-page-data";

export function PublishersGrowth() {
  return (
    <section className="bg-white pb-12 pt-12 md:pb-16 md:pt-16">
      <Container>
        <FadeUp>
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="space-y-5">
              <SectionLabel label={publishersGrowth.label} accent="blue" />
              <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[42px] md:leading-[1.15]">
                {publishersGrowth.title}
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-[17px] leading-[1.65] text-[var(--color-slate)]">
                {publishersGrowth.description}
              </p>
              <ul className="space-y-2.5 pt-1">
                {publishersGrowth.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 font-[family-name:var(--font-inter)] text-[15px] leading-[1.55] text-[var(--color-slate)]">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-sm" style={{ backgroundColor: "#f82d89" }} />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Button
                  href={publishersGrowth.cta.href}
                  variant="primary"
                  arrow="right"
                  className="normal-case tracking-normal border-white/[0.08] text-white hover:shadow-[0_10px_30px_rgba(248,45,137,0.28)]"
                  style={{ backgroundImage: "var(--gradient-cta)" }}
                >
                  {publishersGrowth.cta.label}
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[16px] border border-[var(--color-border)] bg-[#f8f9fb] p-5 md:p-7">
                <div className="grid grid-cols-2 gap-5">
                  {publishersGrowth.metrics.map((m) => (
                    <div key={m.label} className="space-y-1">
                      <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[var(--color-slate)]">
                        {m.label}
                      </p>
                      <p className="font-heading text-[28px] font-semibold leading-none text-[var(--color-ink)] md:text-[32px]">
                        {m.value}
                      </p>
                      <p className="text-[14px] font-semibold text-[#1f9d57]">{m.change}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[16px] border border-[var(--color-border)] bg-white p-5 md:p-7">
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-heading text-[16px] font-semibold text-[var(--color-ink)]">
                    {publishersGrowth.chartTitle}
                  </p>
                  <div className="flex items-center gap-4">
                    {publishersGrowth.chartSeries.map((s) => (
                      <span key={s.name} className="flex items-center gap-1.5 text-[12px] font-medium text-[var(--color-slate)]">
                        <span className="size-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
                <svg viewBox="0 0 600 240" className="w-full" preserveAspectRatio="none" role="img" aria-label={`${publishersGrowth.chartTitle} chart`}>
                  <defs>
                    <linearGradient id="publishersChartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1581c5" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#1581c5" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M 0 190 C 80 175, 120 130, 200 115 S 320 85, 400 60 S 520 35, 600 25 L 600 240 L 0 240 Z" fill="url(#publishersChartFill)" />
                  <path d="M 0 190 C 80 175, 120 130, 200 115 S 320 85, 400 60 S 520 35, 600 25" fill="none" stroke="#1581c5" strokeWidth="2.5" />
                  <path d="M 0 215 C 90 205, 140 175, 230 155 S 350 135, 430 105 S 540 75, 600 65" fill="none" stroke="#f82d89" strokeWidth="2.5" />
                </svg>
              </div>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}