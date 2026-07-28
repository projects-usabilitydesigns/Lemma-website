"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Sparkles } from "lucide-react";
import { channels, clientLogos } from "@/lib/data";

export function LogosMarquee() {
  return (
    <section className="overflow-hidden bg-white py-8 md:py-10" aria-label="Trusted brands and channels">
        <p className="mb-8 text-center text-[14px] font-semibold uppercase tracking-[2px] text-[var(--color-slate)]">
          Trusted by leading brands worldwide
        </p>

      <div className="marquee-fade mb-8">
        <Marquee pauseOnHover speed={40} gradient={false}>
          {clientLogos.map((logo) => (
            <div
              key={logo.id}
              className="mx-8 flex h-10 items-center opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 md:mx-12"
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

      <div className="mx-auto mb-6 h-px w-full max-w-[1400px] bg-[var(--color-border)]" />

      <div className="marquee-fade">
        <Marquee pauseOnHover speed={35} gradient={false} direction="right">
          {[...channels, ...channels].map((channel, index) => (
            <div key={`${channel}-${index}`} className="mx-6 flex items-center gap-6 md:mx-10">
              <span className="text-[28px] font-light text-[var(--color-logo-muted,#9da6ad)] md:text-[40px]">
                {channel}
              </span>
              <Sparkles className="size-4 text-[var(--color-pink)] md:size-5" aria-hidden />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
