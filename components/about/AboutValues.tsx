"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { aboutAssets, aboutValues } from "@/lib/about-data";
import { cn } from "@/lib/utils";

const brandGradientText = {
  backgroundImage: "var(--gradient-brand)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
} as const;

function highlightText(text: string, highlights: readonly string[]) {
  if (!highlights.length) return text;

  const pattern = highlights
    .slice()
    .sort((a, b) => b.length - a.length)
    .map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  const regex = new RegExp(`(${pattern})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) => {
    const isHighlight = highlights.some(
      (h) => h.toLowerCase() === part.toLowerCase(),
    );
    if (!isHighlight) return <span key={`${part}-${index}`}>{part}</span>;
    return (
      <span key={`${part}-${index}`} className="font-medium text-[var(--color-pink)]">
        {part}
      </span>
    );
  });
}

export function AboutValues() {
  const [activeId, setActiveId] = useState<(typeof aboutValues)[number]["id"]>(aboutValues[0].id);
  const active = aboutValues.find((v) => v.id === activeId) ?? aboutValues[0];

  return (
    <section id="values" className="bg-white pb-16 pt-6 md:pb-[100px] md:pt-10">
      <Container>
        <h2 className="mb-8 text-center text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:mb-10 md:text-[45px] md:leading-[50px]">
          Our{" "}
          <span style={brandGradientText}>Values</span>
        </h2>

        <div className="mx-auto mb-12 flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-3 rounded-full bg-[var(--color-cream-soft)] px-6 py-4 md:gap-x-12 md:px-10">
          {aboutValues.map((value) => {
            const isActive = activeId === value.id;
            return (
              <button
                key={value.id}
                type="button"
                onClick={() => setActiveId(value.id)}
                className={cn(
                  "relative cursor-pointer pb-2 text-[13px] font-semibold uppercase tracking-[1.5px] transition-colors md:text-[14px]",
                  isActive
                    ? "text-[var(--color-ink)]"
                    : "text-[var(--color-slate)] hover:text-[var(--color-ink)]",
                )}
              >
                <span style={isActive ? brandGradientText : undefined}>
                  {value.label}
                </span>
                {isActive ? (
                  <span
                    className="absolute inset-x-0 bottom-0 h-[3px] rounded-full"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                    aria-hidden
                  />
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="grid items-center gap-10 overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-[var(--color-cream-soft)] lg:grid-cols-2 lg:gap-0">
          <div className="space-y-6 p-8 md:p-12 lg:p-14">
            <h3 className="text-[28px] font-semibold tracking-[-0.44px] text-[var(--color-ink)] md:text-[36px] md:leading-[1.2]">
              {active.titlePrefix}{" "}
              <span style={brandGradientText}>{active.titleAccent}</span>
            </h3>
            <p className="text-[16px] leading-[1.7] text-[var(--color-slate)] md:text-[18px]">
              {highlightText(active.description, active.highlights)}
            </p>
            <Button href="#cta" variant="primary" arrow="right">
              learn more
            </Button>
          </div>

          <div
            className="relative flex min-h-[320px] items-center justify-center p-8 md:min-h-[420px] md:p-10"
            style={{
              background:
                "linear-gradient(145deg, #fff5fa 0%, #f0f7ff 45%, #eef6ff 100%)",
            }}
          >
            <div className="relative aspect-square w-full max-w-[380px]">
              <Image
                src={aboutAssets.values}
                alt={`${active.label} — Lemma values`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
