"use client";

import Image from "next/image";
import { useState } from "react";
import { FadeUp } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { aboutValues } from "@/lib/about-data";
import { cn } from "@/lib/utils";

export function AboutValues() {
  const [activeId, setActiveId] = useState<(typeof aboutValues)[number]["id"]>(
    aboutValues[0].id,
  );
  const active = aboutValues.find((v) => v.id === activeId) ?? aboutValues[0];

  return (
    <section id="values" className="bg-white pb-8 pt-6 md:pb-12 md:pt-10">
      <Container>
        <FadeUp>
          <h2 className="mb-8 text-center font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:mb-10 md:text-[45px] md:leading-[50px]">
            Our Values
          </h2>
        </FadeUp>

        <FadeUp delay={0.05}>
          <div className="mx-auto mb-10 flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-3 rounded-full bg-[#f3f4f5] px-6 py-4 md:mb-12 md:gap-x-12 md:px-10">
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
                  {value.label}
                  {isActive ? (
                    <span
                      className="absolute inset-x-0 bottom-0 h-[2px] bg-[var(--color-ink)]"
                      aria-hidden
                    />
                  ) : null}
                </button>
              );
            })}
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="grid overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-white lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6 p-8 md:p-12 lg:p-14">
              <h3 className="text-[26px] font-semibold tracking-[-0.4px] text-[var(--color-ink)] md:text-[32px] md:leading-[1.2]">
                {active.title}
              </h3>
              <p className="text-[15px] leading-[1.7] text-[var(--color-slate)] md:text-[16px]">
                {active.description}
              </p>
              <div>
                <Button href="#cta" variant="primary" arrow="right">
                  Learn more
                </Button>
              </div>
            </div>

            <div className="relative min-h-[340px] overflow-hidden bg-[#eef1f4] md:min-h-[460px]">
              <Image
                src={active.image}
                alt={`${active.label} — Lemma values`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
