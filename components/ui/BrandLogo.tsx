import Image from "next/image";
import { getBrandLogoColorSrc } from "@/lib/brand-logo-colors";
import { cn } from "@/lib/utils";
import type { ClientLogo } from "@/types";

function isLemonade(logo: ClientLogo) {
  return `${logo.id} ${logo.name}`.toLowerCase().includes("lemonade");
}

export function BrandLogo({ logo }: { logo: ClientLogo }) {
  const srcColor = getBrandLogoColorSrc(logo);
  const lemonade = isLemonade(logo);
  const imageClass = lemonade
    ? "h-auto w-[140px] object-contain object-center"
    : "h-8 w-auto object-contain object-center";
  const imageStyle = lemonade ? undefined : { width: "auto" as const, aspectRatio: "auto" };

  return (
    <div className="brand-logo-item relative mx-8 flex h-8 shrink-0 items-center md:mx-10">
      <span className="brand-logo-frame">
        <Image
          src={logo.src}
          alt={logo.name}
          width={logo.width}
          height={logo.height}
          className={cn("brand-logo-muted", imageClass)}
          style={imageStyle}
        />
        {srcColor ? (
          <img src={srcColor} alt="" className="brand-logo-color" aria-hidden />
        ) : null}
      </span>
    </div>
  );
}
