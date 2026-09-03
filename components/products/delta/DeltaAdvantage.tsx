"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { deltaAssets } from "@/lib/delta-data";

export function DeltaAdvantage() {
  return (
    <section className="overflow-x-clip bg-white py-10 md:py-14">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[671px_1fr] lg:gap-10 xl:gap-14">
          <div
            className="flex w-full max-w-[671px] flex-col justify-center rounded-[20px] bg-[var(--color-feature-box)] px-8 py-10 md:px-12 md:py-14 lg:min-h-[414.58px] lg:px-14"
          >
            <h3 className="font-[family-name:var(--font-inter)] text-[28px] font-semibold tracking-[-0.4px] text-[#111] md:text-[36px] md:leading-[1.2]">
              The{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-cta)" }}
              >
                Lemma
              </span>
              advantage
            </h3>
            <div
              className="mt-4 mb-6 h-px w-14 bg-gradient-to-r from-[var(--color-blue)] to-transparent"
              aria-hidden
            />
            <p className="font-[family-name:var(--font-inter)] text-[18px] font-normal leading-[1.65] text-[#5a6570] md:text-[20px]">
              Whether you aim to engage with student on campus, connect with shoppers at luxury
              malls or target sports enthusiasts we have got you covered with our expansive DOOH
              inventory, In venue CTV and wide array of OTT channels.
            </p>
          </div>

          <div className="relative isolate mx-auto w-full max-w-[560px] lg:mx-0 lg:justify-self-end">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                backgroundImage: "var(--gradient-feature-glow)",
              }}
              aria-hidden
            />

            {/* Reduced from 810×480 — sits beside Lemmadvantage box */}
            <div className="relative z-10 w-full">
              <Image
                src={deltaAssets.advantage}
                alt="Lemma Delta audience venues and channels — Malls, Airports, Campus, Sports to DOOH, CTV, Mobile, Desktop, OTT"
                width={810}
                height={480}
                className="relative z-10 h-auto w-full object-contain mix-blend-screen"
                sizes="560px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
