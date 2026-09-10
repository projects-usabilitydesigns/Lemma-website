"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FadeIn } from "@/components/animation";
import { channels as defaultChannels, clientLogos as defaultClientLogos } from "@/lib/data";
import { businessGrowthPlatforms } from "@/lib/solutions-business-growth-data";
import type { ClientLogo } from "@/types";

const LOCAL_LOGO_BY_NAME: Record<string, Pick<ClientLogo, "src" | "width" | "height">> = {
  dabur: {
    src: "/images/logos/dabur.svg",
    width: 40,
    height: 36,
  },
  "amazon prime video": {
    src: "/images/logos/amazon-prime-video.svg",
    width: 112,
    height: 36,
  },
  "burger king": {
    src: "/images/logos/burger-king.svg",
    width: 33,
    height: 36,
  },
};

const EXTRA_LOGO_IDS = new Set(["aadyaa", "sthorn", "vasansi"]);

const EXTRA_CLIENT_LOGOS: ClientLogo[] = defaultClientLogos.filter((logo) =>
  EXTRA_LOGO_IDS.has(logo.id),
);

function resolveLogo(logo: ClientLogo): ClientLogo {
  const local = LOCAL_LOGO_BY_NAME[logo.name.trim().toLowerCase()];
  return local ? { ...logo, ...local } : logo;
}

function mergeLogos(incoming?: ClientLogo[]) {
  const base = (incoming?.length ? incoming : defaultClientLogos).map(resolveLogo);
  const seen = new Set(
    base.flatMap((logo) => [logo.id.toLowerCase(), logo.name.trim().toLowerCase()]),
  );
  const extras = EXTRA_CLIENT_LOGOS.filter(
    (logo) => !seen.has(logo.id) && !seen.has(logo.name.toLowerCase()),
  );
  return [...base, ...extras];
}

export function LogosMarquee({
  clientLogos,
  bottomTrack = "channels",
}: {
  clientLogos?: ClientLogo[];
  bottomTrack?: "channels" | "platforms";
}) {
  const logos = mergeLogos(clientLogos);
  const bottomItems =
    bottomTrack === "platforms"
      ? businessGrowthPlatforms.items.map((item) => item.name)
      : defaultChannels;
  return (
    <section
      className="overflow-hidden bg-white py-5 md:py-6"
      aria-label={bottomTrack === "platforms" ? "Trusted brands and ad platforms" : "Trusted brands and channels"}
    >
      <FadeIn>
        <p className="mb-7 text-center text-[14px] font-semibold uppercase tracking-[2px] text-[var(--color-slate)] md:mb-8">
          Trusted by leading brands worldwide
        </p>
      </FadeIn>

      <div className="marquee-fade mb-4">
        <Marquee pauseOnHover speed={40} gradient={false} autoFill>
          {logos.map((logo) => (
            <div
              key={`${logo.id}-${logo.src}`}
              className="mx-8 flex h-8 shrink-0 items-center opacity-80 transition hover:opacity-100 md:mx-10"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className={
                  logo.id === "lemonade"
                    ? "h-auto w-[140px] object-contain object-center"
                    : "h-8 w-auto object-contain object-center"
                }
                style={logo.id === "lemonade" ? undefined : { width: "auto", aspectRatio: "auto" }}
              />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto mb-3 h-px w-full max-w-[1400px] bg-[var(--color-border)]" />

      <div className="marquee-fade">
        <Marquee pauseOnHover speed={35} gradient={false} direction="right" autoFill>
          {[...bottomItems, ...bottomItems].map((item, index) => (
            <div key={`${item}-${index}`} className="ml-5 flex items-center gap-3 md:ml-7 md:gap-4">
              <span className="text-[18px] font-light text-[var(--color-logo-muted,#9da6ad)] md:text-[24px]">
                {item}
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
