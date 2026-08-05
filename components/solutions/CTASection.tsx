"use client";

import Image from "next/image";
import { FadeLeft, FadeRight } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { brandsCta } from "@/lib/solutions-brands-data";

type CtaData = {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: string;
};

export function CTASection({ data = brandsCta }: { data?: CtaData }) {
  return (
    <section id="cta" className="relative overflow-hidden py-16 md:py-[100px]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(120deg, #ede9fe 0%, #e0f2fe 40%, #fce7f3 75%, #ecfccb 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(248,45,137,0.18), transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,143,219,0.16), transparent 45%)",
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <FadeRight className="space-y-6">
            <h2 className="font-heading text-[34px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[48px] md:leading-[1.1]">
              {data.title}
            </h2>
            <p className="max-w-xl text-[18px] leading-relaxed text-[var(--color-ink-muted)] md:text-[20px]">
              {data.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={data.primaryCta.href}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-pink)] px-6 py-3.5 text-[14px] font-semibold uppercase tracking-[2px] text-white transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(248,45,137,0.35)]"
              >
                {data.primaryCta.label}
                <span aria-hidden>↗</span>
              </a>
              <a
                href={data.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-full border border-black bg-white px-6 py-3.5 text-[14px] font-semibold text-black transition hover:bg-black hover:text-white"
              >
                {data.secondaryCta.label}
              </a>
            </div>
          </FadeRight>

          <FadeLeft delay={0.1}>
            <div className="relative mx-auto aspect-[5/4] w-full max-w-lg overflow-hidden rounded-[28px] shadow-[0_24px_60px_rgba(9,19,26,0.18)] lg:max-w-none">
              <Image
                src={data.image}
                alt="Lemma outdoor advertising"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-transparent" />
            </div>
          </FadeLeft>
        </div>
      </Container>
    </section>
  );
}
