"use client";

import Image from "next/image";
import { Check, Shield, Target, User, Users, X } from "lucide-react";
import { FadeLeft, FadeRight, FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { agenciesOffers } from "@/lib/solutions-agencies-data";

const ICONS = {
  target: Target,
  user: User,
  users: Users,
  shield: Shield,
} as const;

const TONES = {
  pink: {
    card: "border-[#FFC1D4] bg-[#FFF1F5]",
    icon: "bg-[#FF2A6D]",
    label: "text-[#FF2A6D]",
  },
  blue: {
    card: "border-[#B8E8FF] bg-[#F0FAFF]",
    icon: "bg-[#00B2FF]",
    label: "text-[#00B2FF]",
  },
  orange: {
    card: "border-[#FFD0A3] bg-[#FFF6ED]",
    icon: "bg-[#FF910F]",
    label: "text-[#FF910F]",
  },
  slate: {
    card: "border-[#D5DCE4] bg-[#F7F9FB]",
    icon: "bg-[#00B2FF]",
    label: "text-[#64748B]",
  },
} as const;

function PoolCallout({
  icon,
  label,
  value,
  tone,
}: {
  icon: keyof typeof ICONS;
  label: string;
  value: string;
  tone: keyof typeof TONES;
}) {
  const Icon = ICONS[icon];
  const colors = TONES[tone];

  return (
    <div className={`flex min-h-[72px] items-center gap-2.5 rounded-[12px] border px-2.5 py-2 ${colors.card}`}>
      <span className={`flex size-8 shrink-0 items-center justify-center rounded-full text-white ${colors.icon}`}>
        <Icon className="size-4" strokeWidth={2.2} />
      </span>
      <div className="min-w-0">
        <p className={`text-[9px] font-bold uppercase leading-none tracking-[0.6px] ${colors.label}`}>
          {label}
        </p>
        <p className="mt-1 text-[11px] font-bold uppercase leading-[1.25] tracking-[0.2px] text-[#111827]">
          {value}
        </p>
      </div>
    </div>
  );
}

export function LemmaOffers({
  data = agenciesOffers,
}: {
  data?: typeof agenciesOffers;
}) {
  return (
    <section
      className="py-12 md:py-16"
      style={{
        backgroundImage: "linear-gradient(90deg, #DFF3F0 0%, #E0F3FA 48%, #E4F5E0 100%)",
      }}
    >
      <Container>
        <FadeUp className="mb-8 space-y-1.5 text-center md:mb-9">
          <h2 className="font-[family-name:var(--font-inter)] text-[28px] font-bold tracking-[-0.4px] text-[#111827] md:text-[32px]">
            {data.label}
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[15px] font-normal text-[#4B5563] md:text-[16px]">
            {data.title}
          </p>
        </FadeUp>

        <div className="mx-auto grid max-w-[1080px] items-stretch gap-4 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-5">
          <FadeRight className="flex h-full flex-col justify-center gap-4">
            <article className="flex items-end justify-between gap-5 rounded-[20px] bg-white px-6 py-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] md:px-7 md:py-6">
              <p className="min-w-0 flex-1 font-[family-name:var(--font-inter)] text-[17px] leading-[1.45] text-[#374151] md:text-[18px]">
                {data.rejected}
              </p>
              <span className="mb-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-[#FF2A6D] text-white">
                <X className="size-[18px]" strokeWidth={3.5} aria-hidden />
                <span className="sr-only">Not this approach</span>
              </span>
            </article>

            <article className="rounded-[20px] bg-white px-6 py-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] md:px-7 md:py-6">
              <p className="font-[family-name:var(--font-inter)] text-[11px] font-bold uppercase tracking-[1.4px] text-[#20BCFF] md:text-[12px]">
                {data.stackLabel}
              </p>
              <div className="mt-4 flex items-stretch gap-3">
                <ul className="min-w-0 flex-1 space-y-2">
                  {data.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-[#E6F7FF] px-4 py-2.5 font-[family-name:var(--font-inter)] text-[13px] font-medium leading-tight text-[#20BCFF] md:text-[14px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="hidden w-4 shrink-0 self-stretch text-[#C5CDD4] sm:block" aria-hidden>
                  <svg viewBox="0 0 16 120" preserveAspectRatio="none" className="h-full w-full" fill="none">
                    <path
                      d="M2 8 C14 8 14 28 14 48 C14 56 16 60 16 60 C14 64 14 72 14 92 C14 108 14 112 2 112"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="flex size-9 shrink-0 self-center items-center justify-center rounded-full bg-[#7CB342] text-white">
                  <Check className="size-[18px]" strokeWidth={3.5} aria-hidden />
                  <span className="sr-only">This combined targeting approach</span>
                </span>
              </div>
            </article>
          </FadeRight>

          <FadeLeft delay={0.08} className="h-full">
            <article className="flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
              <div className="bg-[#F1F5F9] px-4 py-2.5">
                <p className="text-center font-[family-name:var(--font-inter)] text-[11px] font-bold uppercase tracking-[1.2px] text-[#475569] md:text-[12px]">
                  {data.poolTitle}
                </p>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-4">
                <div className="grid grid-cols-2 gap-2.5">
                  {data.callouts.slice(0, 2).map((item) => (
                    <PoolCallout
                      key={item.id}
                      icon={item.icon}
                      label={item.label}
                      value={item.value}
                      tone={item.tone}
                    />
                  ))}
                </div>

                <div className="relative aspect-[2.1/1] w-full overflow-hidden rounded-[12px]">
                  <Image
                    src={data.image}
                    alt={data.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {data.callouts.slice(2).map((item) => (
                    <PoolCallout
                      key={item.id}
                      icon={item.icon}
                      label={item.label}
                      value={item.value}
                      tone={item.tone}
                    />
                  ))}
                </div>

                <div className="mt-0.5 flex justify-center">
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-[#C6EBD3] bg-[#F0FDF4] px-4 py-2">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#7CB342] text-white">
                      <Check className="size-3.5" strokeWidth={3.5} aria-hidden />
                    </span>
                    <div>
                      <p className="text-[9px] font-bold uppercase leading-none tracking-[0.6px] text-[#4C9F6B]">
                        {data.placement.label}
                      </p>
                      <p className="mt-1 text-[11px] font-bold uppercase leading-none tracking-[0.2px] text-[#319054]">
                        {data.placement.value}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </FadeLeft>
        </div>
      </Container>
    </section>
  );
}
