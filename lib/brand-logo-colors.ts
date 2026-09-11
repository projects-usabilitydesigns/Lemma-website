import type { ClientLogo } from "@/types";

const COLOR_BY_KEY: Record<string, string> = {
  "burger-king": "/images/logos/burger-king-color.svg",
  "burger king": "/images/logos/burger-king-color.svg",
  azorte: "/images/logos/azorte-color.svg",
  hsbc: "/images/logos/hsbc-color.svg",
  oneplus: "/images/logos/oneplus-color.svg",
  "one plus": "/images/logos/oneplus-color.svg",
  schwarzkopf: "/images/logos/schwarzkopf-color.svg",
  etihad: "/images/logos/etihad-color.svg",
  pepsi: "/images/logos/pepsi-color.svg",
  samsung: "/images/logos/samsung-color.svg",
  nestle: "/images/logos/nestle-color.png",
  dabur: "/images/logos/dabur-color.png",
  "amazon-prime-video": "/images/logos/amazon-prime-video-color.png",
  "amazon prime video": "/images/logos/amazon-prime-video-color.png",
  "prime video": "/images/logos/amazon-prime-video-color.png",
  sthorn: "/images/logos/sthorn-color.png",
  vasansi: "/images/logos/vasansi-color.png",
  lemonade: "/images/logos/lemonade-color.png",
  nutriorg: "/images/logos/nutriorg-color.png",
  "mf-bharat": "/images/logos/mf-bharat-color.png",
  "mf bharat": "/images/logos/mf-bharat-color.png",
  "mf bharat mutual fund": "/images/logos/mf-bharat-color.png",
  omay: "/images/logos/omay-color.png",
  aadyaa: "/images/logos/aadyaa-color.png",
};

function normalizeLogoKey(value: string) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

export function getBrandLogoColorSrc(
  logo: Pick<ClientLogo, "id" | "name" | "src" | "srcColor">,
): string | undefined {
  if (logo.srcColor) return logo.srcColor;

  const id = normalizeLogoKey(logo.id);
  const name = normalizeLogoKey(logo.name);
  const src = normalizeLogoKey(logo.src);

  const direct = COLOR_BY_KEY[id] ?? COLOR_BY_KEY[name];
  if (direct) return direct;

  const keys = Object.keys(COLOR_BY_KEY).sort((a, b) => b.length - a.length);
  for (const key of keys) {
    if (name.includes(key) || src.includes(key.replace(/ /g, "-")) || src.includes(key.replace(/ /g, ""))) {
      return COLOR_BY_KEY[key];
    }
  }

  return undefined;
}
