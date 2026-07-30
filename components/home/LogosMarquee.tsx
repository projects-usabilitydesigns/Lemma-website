"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FadeIn } from "@/components/animation";
import { channels, clientLogos } from "@/lib/data";

export function LogosMarquee() {
  return (
    <section
      className="overflow-hidden bg-white py-5 md:py-6"
      aria-label="Trusted brands and channels"
    >
      <FadeIn>
        <p className="mb-7 text-center text-[14px] font-semibold uppercase tracking-[2px] text-[var(--color-slate)] md:mb-8">
          Trusted by leading brands worldwide
        </p>
      </FadeIn>

      <div className="marquee-fade mb-4">
        <Marquee pauseOnHover speed={40} gradient={false}>
          {clientLogos.map((logo) => (
            <div
              key={logo.id}
              className="mx-8 flex h-9 items-center opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 md:mx-12"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto mb-3 h-px w-full max-w-[1400px] bg-[var(--color-border)]" />

      <div className="marquee-fade">
        <Marquee pauseOnHover speed={35} gradient={false} direction="right">
          {[...channels, ...channels].map((channel, index) => (
            <div key={`${channel}-${index}`} className="ml-5 flex items-center gap-4 md:ml-8 md:gap-5">
              <span className="text-[26px] font-light text-[var(--color-logo-muted,#9da6ad)] md:text-[36px]">
                {channel}
              </span>
              <Image
                src="/icons/star-sparkle.svg"
                alt=""
                width={18}
                height={18}
                className="size-4 shrink-0 md:size-5"
                aria-hidden
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
