"use client";

import Image from "next/image";
import { useState } from "react";
import { FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { aboutAssets, aboutValues } from "@/lib/about-data";
import { cn } from "@/lib/utils";

export function AboutValues() {
  const [activeId, setActiveId] = useState<(typeof aboutValues)[number]["id"]>(
    aboutValues[0].id,
  );
  const active = aboutValues.find((v) => v.id === activeId) ?? aboutValues[0];

  return (
    <section id="values" className="bg-white pt-10 md:pt-14">
      <Container>
        <FadeUp>
          <h2 className="mb-8 font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:mb-10 md:text-[45px] md:leading-[50px]">
            Our Values
          </h2>
        </FadeUp>
      </Container>

      <div className="relative overflow-hidden bg-[#0083CE]">
        <img
          src={aboutAssets.valuesBanner}
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/2 hidden h-[120%] w-auto -translate-y-1/2 select-none md:block"
        />

        <div className="relative mx-auto w-full max-w-[1400px] px-5 py-14 md:px-10 md:py-16 lg:px-8 lg:py-20 xl:px-12">
          <div className="relative mx-auto max-w-[1116px] lg:ml-auto lg:mr-[4%]">
            <Image
              src={aboutAssets.valuesMark}
              alt=""
              width={400}
              height={400}
              unoptimized
              className="pointer-events-none absolute -left-6 -top-8 z-20 hidden w-[140px] select-none md:block lg:-left-[13.5rem] lg:-top-[4.5rem] lg:w-[220px] xl:-left-[15rem] xl:-top-20 xl:w-[250px]"
            />

            <div className="relative z-10 mx-auto grid h-[568px] w-full max-w-[1116px] overflow-hidden bg-[#FFFAFA] shadow-[0_18px_50px_rgba(0,0,0,0.18)] lg:w-[1116px] lg:grid-cols-[376px_minmax(0,1fr)]">
              <nav
                aria-label="Our values"
                className="flex h-full flex-row items-center overflow-x-auto bg-[#f2f2f2] sm:flex-col sm:justify-center sm:overflow-visible"
              >
                <div className="flex h-auto w-full flex-row sm:h-[354px] sm:w-[376px] sm:flex-col sm:justify-between">
                  {aboutValues.map((value) => {
                    const isActive = activeId === value.id;
                    return (
                      <button
                        key={value.id}
                        type="button"
                        onClick={() => setActiveId(value.id)}
                        className={cn(
                          "cursor-pointer whitespace-nowrap px-6 py-3 text-left font-[Arial,Helvetica,sans-serif] text-[24px] font-bold uppercase leading-[34px] tracking-[6px] transition-colors sm:px-10 sm:py-4",
                          isActive
                            ? "bg-white text-[#0083CE]"
                            : "bg-transparent text-[#A7A5A6] hover:text-[#6f6d6e]",
                        )}
                      >
                        {value.label}
                      </button>
                    );
                  })}
                </div>
              </nav>

              <div className="flex h-full min-h-0 flex-col justify-center gap-5 overflow-hidden bg-[#FFF8D8] p-6 sm:gap-6 sm:p-10 lg:px-[70px] lg:py-8">
                <p className="max-w-[463px] font-[family-name:var(--font-inter)] text-[16px] font-normal leading-[1.4] text-black lg:text-[21.62px] lg:leading-[1.4]">
                  {active.description}
                </p>
                <div className="relative h-[180px] w-full max-w-[463px] shrink-0 overflow-hidden sm:h-[220px] lg:h-[308px] lg:w-[463px]">
                  <Image
                    src={active.image}
                    alt={`Lemma value — ${active.label}`}
                    fill
                    unoptimized
                    className="object-cover object-center"
                    sizes="463px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
