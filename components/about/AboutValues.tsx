"use client";

import Image from "next/image";
import { useState } from "react";
import { FadeUp } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DEMO_MODAL_HREF } from "@/lib/demo-cta";
import { aboutValues } from "@/lib/about-data";
import { cn } from "@/lib/utils";

export function AboutValues() {
  const [activeId, setActiveId] = useState<(typeof aboutValues)[number]["id"]>(
    aboutValues[0].id,
  );
  const active = aboutValues.find((v) => v.id === activeId) ?? aboutValues[0];

  return (
    <section id="values" className="bg-white py-14 md:py-20">
      <Container>
        <FadeUp className="space-y-10 md:space-y-12">
          <h2 className="text-center font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            Our Values
          </h2>

          <nav
            aria-label="Our values"
            className="mx-auto flex w-full max-w-[880px] overflow-x-auto rounded-full bg-[#f2f2f2]"
          >
            {aboutValues.map((value) => {
              const isActive = activeId === value.id;
              return (
                <button
                  key={value.id}
                  type="button"
                  onClick={() => setActiveId(value.id)}
                  className={cn(
                    "relative min-w-[10rem] flex-1 px-5 py-4 text-center text-[13px] font-semibold uppercase tracking-[1.6px] transition-colors md:text-[15px] md:tracking-[2px]",
                    isActive
                      ? "text-[#09131a]"
                      : "text-[#8a8f94] hover:text-[#4c575f]",
                  )}
                >
                  {value.label}
                  {isActive ? (
                    <span
                      className="absolute bottom-2.5 left-1/2 h-[3px] w-[5rem] -translate-x-1/2 bg-[#09131a]"
                      aria-hidden
                    />
                  ) : null}
                </button>
              );
            })}
          </nav>

          <div className="grid w-full overflow-hidden rounded-[24px] border border-[rgba(9,19,26,0.08)] lg:grid-cols-2">
            <div className="flex flex-col items-start justify-center bg-[#fcfcf9] px-8 py-12 text-left md:px-14 md:py-16 lg:min-h-[560px]">
              <h3 className="font-heading text-[28px] font-semibold tracking-[-0.56px] text-[#09131a] md:text-[40px] md:leading-[1.15]">
                {active.title}
              </h3>
              <p className="mt-5 max-w-[46ch] text-[17px] font-normal leading-[1.7] text-[#4c575f] md:text-[19px]">
                {active.description}
              </p>
              <div className="mt-8">
                <Button href={DEMO_MODAL_HREF} variant="primary" arrow="right">
                  Learn more
                </Button>
              </div>
            </div>

            <div className="relative min-h-[380px] bg-[linear-gradient(180deg,#FFF2F8_0%,#E1F3FF_100%)] md:min-h-[480px] lg:min-h-[560px]">
              <Image
                src={active.image}
                alt="Lemma values — Transparency, Innovation, Agility, Energetic"
                fill
                unoptimized
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
