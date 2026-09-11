"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FadeIn } from "@/components/animation";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { getBrandLogoColorSrc } from "@/lib/brand-logo-colors";
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
  pepsi: {
    src: "/images/logos/pepsi.svg",
    width: 36,
    height: 36,
  },
  lemonade: {
    src: "/images/logos/lemonade-grey.png",
    width: 140,
    height: 12,
  },
  nutriorg: {
    src: "/images/logos/nutriorg-grey.png",
    width: 81,
    height: 36,
  },
  "mf bharat mutual fund": {
    src: "/images/logos/mf-bharat-grey.png",
    width: 102,
    height: 36,
  },
  omay: {
    src: "/images/logos/omay-grey.png",
    width: 52,
    height: 36,
  },
  aadyaa: {
    src: "/images/logos/aadyaa-grey.png",
    width: 58,
    height: 36,
  },
  sthorn: {
    src: "/images/logos/sthorn-grey.png",
    width: 134,
    height: 36,
  },
};

const EXTRA_LOGO_IDS = new Set(["aadyaa", "sthorn", "vasansi"]);

const EXTRA_CLIENT_LOGOS: ClientLogo[] = defaultClientLogos.filter((logo) =>
  EXTRA_LOGO_IDS.has(logo.id),
);

function resolveLogo(logo: ClientLogo): ClientLogo {
  const local = LOCAL_LOGO_BY_NAME[logo.name.trim().toLowerCase()];
  const resolved = local ? { ...logo, ...local } : logo;
  const srcColor = getBrandLogoColorSrc(resolved);
  return srcColor ? { ...resolved, srcColor } : resolved;
}

function normalizeLogoKey(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function logoMatchesId(logo: ClientLogo, id: string) {
  const key = normalizeLogoKey(id);
  const logoId = normalizeLogoKey(logo.id);
  const logoName = normalizeLogoKey(logo.name);
  return logoId === key || logoName === key || logoName.includes(key);
}

function mergeLogos(incoming?: ClientLogo[], logoIds?: readonly string[]) {
  const base = (incoming?.length ? incoming : defaultClientLogos).map(resolveLogo);
  const seen = new Set(
    base.flatMap((logo) => [logo.id.toLowerCase(), logo.name.trim().toLowerCase()]),
  );
  const extras = EXTRA_CLIENT_LOGOS.filter(
    (logo) => !seen.has(logo.id) && !seen.has(logo.name.toLowerCase()),
  );
  const logos = [...base, ...extras];

  if (!logoIds?.length) return logos;

  const allow = logoIds.map((id) => id.toLowerCase());
  const byId = new Map<string, ClientLogo>();

  for (const logo of logos) {
    const match = allow.find((id) => logoMatchesId(logo, id));
    if (match && !byId.has(match)) byId.set(match, logo);
  }

  for (const logo of defaultClientLogos) {
    const resolved = resolveLogo(logo);
    const match = allow.find((id) => logoMatchesId(resolved, id));
    if (match && !byId.has(match)) byId.set(match, resolved);
  }

  return allow.map((id) => byId.get(id)).filter((logo): logo is ClientLogo => Boolean(logo));
}

export function LogosMarquee({
  clientLogos,
  bottomTrack = "channels",
  logoIds,
}: {
  clientLogos?: ClientLogo[];
  bottomTrack?: "channels" | "platforms";
  logoIds?: readonly string[];
}) {
  const logos = mergeLogos(clientLogos, logoIds);
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
            <BrandLogo key={`${logo.id}-${logo.src}`} logo={logo} />
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
