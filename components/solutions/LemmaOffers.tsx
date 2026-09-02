"use client";

import Image from "next/image";
import { Check, X } from "lucide-react";
import { FadeLeft, FadeRight, FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { agenciesOffers } from "@/lib/solutions-agencies-data";

export function LemmaOffers({
  data = agenciesOffers,
}: {
  data?: typeof agenciesOffers;
}) {
  const topCallouts = data.callouts.slice(0, 3);
  const bottomCallouts = data.callouts.slice(3);

  return (
    <section className="bg-[#030a11] py-10 text-white md:py-16">
      <Container>
        <FadeUp className="mb-8 max-w-3xl space-y-3 md:mb-10">
          <p className="text-[14px] font-semibold text-[#5EC8F0]">{data.label}</p>
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-white md:text-[45px] md:leading-[50px]">
            {data.title}
          </h2>
        </FadeUp>

        <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8">
          <FadeRight>
            <article className="flex h-full flex-col justify-center rounded-[24px] bg-[#101820] p-6 md:p-8">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-8 md:gap-x-5 md:gap-y-10">
                <p className="text-[18px] leading-snug text-white md:text-[22px]">
                  {data.rejected}
                </p>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#E23B3B] text-white md:size-10">
                  <X className="size-4" strokeWidth={3} aria-hidden />
                  <span className="sr-only">Not this approach</span>
                </span>

                <div className="min-w-0">
                  <p className="text-[12px] font-semibold uppercase tracking-[1.6px] text-[#5EC8F0] md:text-[13px]">
                    {data.stackLabel}
                  </p>
                  <ul className="mt-4 space-y-2 text-[16px] leading-snug text-[#7EC8EA] md:text-[18px]">
                    {data.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#2FBF6C] text-white md:size-11">
                  <Check className="size-5" strokeWidth={3} aria-hidden />
                  <span className="sr-only">This combined targeting approach</span>
                </span>
              </div>
            </article>
          </FadeRight>

          <FadeLeft delay={0.08}>
            <div className="relative min-h-[280px] overflow-hidden rounded-[24px] md:min-h-[420px]">
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                className="object-cover object-[center_40%]"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/55" />
              <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-5">
                <div className="grid grid-cols-3 gap-3">
                  {topCallouts.map((callout) => (
                    <p
                      key={callout.id}
                      className="text-[9px] font-semibold uppercase leading-snug tracking-[0.5px] text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)] first:text-left last:text-right md:text-[11px] md:tracking-[0.7px] [&:nth-child(2)]:text-center"
                    >
                      {callout.text}
                    </p>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {bottomCallouts.map((callout) => (
                    <p
                      key={callout.id}
                      className="text-[9px] font-semibold uppercase leading-snug tracking-[0.5px] text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)] first:text-left last:text-right md:text-[11px] md:tracking-[0.7px] [&:nth-child(2)]:text-center"
                    >
                      {callout.text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </FadeLeft>
        </div>
      </Container>
    </section>
  );
}
