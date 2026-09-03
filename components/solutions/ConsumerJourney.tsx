"use client";

import Image from "next/image";
import { Monitor, MousePointer2, Smartphone } from "lucide-react";
import { FadeLeft, FadeRight } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { agenciesOmnichannel } from "@/lib/solutions-agencies-data";

const ICONS = {
  tv: Monitor,
  phone: Smartphone,
  pointer: MousePointer2,
} as const;

const TONES = {
  blue: {
    ring: "border-[#C5E4F6] bg-[#EEF7FC] text-[#0B4A7A]",
    title: "text-[#2B9AE8]",
  },
  green: {
    ring: "border-[#CDE6C4] bg-[#F1F8EC] text-[#5B8F32]",
    title: "text-[#5FA84A]",
  },
} as const;

export function ConsumerJourney({
  data = agenciesOmnichannel,
}: {
  data?: typeof agenciesOmnichannel;
}) {
  const titleRest = data.title.startsWith(data.underlineWord)
    ? data.title.slice(data.underlineWord.length).trimStart()
    : data.title;

  return (
    <section className="relative overflow-x-hidden bg-white py-12 md:py-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
          <FadeRight>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[1.8px] text-[#1597D2] md:text-[13px]">
                {data.label}
              </p>
              <h2 className="font-heading mt-3 text-[30px] font-semibold tracking-[-0.6px] text-[#0B1B2B] md:text-[40px] md:leading-[1.15]">
                <span className="relative inline-block pb-1.5">
                  {data.underlineWord}
                  <span
                    className="absolute bottom-0 left-0 h-[3px] w-full rounded-full"
                    style={{
                      backgroundImage: "linear-gradient(90deg, #008fdb 0%, #4db7ea 100%)",
                    }}
                    aria-hidden
                  />
                </span>{" "}
                {titleRest}
              </h2>

              <ol className="mt-8 space-y-7">
                {data.steps.map((step, index) => {
                  const Icon = ICONS[step.icon];
                  const tone = TONES[step.tone];
                  const isLast = index === data.steps.length - 1;

                  return (
                    <li key={step.id} className="relative flex gap-4">
                      {!isLast ? (
                        <span
                          className="absolute left-[19px] top-[42px] h-[calc(100%+8px)] w-px border-l-[1.5px] border-dashed border-[#B7D4EA]"
                          aria-hidden
                        />
                      ) : null}
                      <span
                        className={`relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border ${tone.ring}`}
                      >
                        <Icon className="size-[18px]" strokeWidth={1.8} />
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <h3 className={`text-[16px] font-bold md:text-[17px] ${tone.title}`}>
                          {step.title}:
                        </h3>
                        <p className="mt-1 text-[15px] leading-relaxed text-[#4C575F] md:text-[16px]">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </FadeRight>

          <FadeLeft delay={0.08}>
            <div className="relative overflow-hidden rounded-[24px] shadow-[0_18px_40px_rgba(9,19,26,0.1)]">
              <Image
                src={data.image}
                alt={data.imageAlt}
                width={1536}
                height={1006}
                quality={95}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 54vw"
              />
            </div>
          </FadeLeft>
        </div>
      </Container>
    </section>
  );
}
