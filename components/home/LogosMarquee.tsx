"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FadeIn } from "@/components/animation";
import { channels as defaultChannels, clientLogos as defaultClientLogos } from "@/lib/data";
import type { ClientLogo } from "@/types";

export function LogosMarquee({
  clientLogos,
}: {
  clientLogos?: ClientLogo[];
}) {
  const logos = clientLogos?.length ? clientLogos : defaultClientLogos;
  const channels = defaultChannels;
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
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="mx-8 flex h-9 items-center opacity-80 transition hover:opacity-100 md:mx-12"
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
            <div key={`${channel}-${index}`} className="ml-5 flex items-center gap-3 md:ml-7 md:gap-4">
              <span className="text-[18px] font-light text-[var(--color-logo-muted,#9da6ad)] md:text-[24px]">
                {channel}
              </span>
              <Image
                src="/icons/star-sparkle.svg"
                alt=""
                width={14}
                height={14}
                className="size-3.5 shrink-0 md:size-4"
                aria-hidden
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
