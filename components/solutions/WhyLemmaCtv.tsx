"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, Stagger, staggerItem } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { WordPlay } from "@/components/ui/WordPlay";
import { agenciesWhyCtv } from "@/lib/solutions-agencies-data";

const AVATAR_COLORS = ["#009352", "#008fdb", "#ED2E80", "#74be44", "#a684ff", "#f05a27"] as const;

const ECHO_VENUES = [
  { label: "Home", color: "#008fdb" },
  { label: "Office", color: "#f05a27" },
  { label: "Malls", color: "#009352" },
  { label: "Airports", color: "#a684ff" },
  { label: "Cinema Halls", color: "#ED2E80" },
  { label: "Transit", color: "#74be44" },
] as const;

function PersonSilhouette({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 40 40" className="h-full w-full" aria-hidden>
      <circle cx="20" cy="13" r="7.5" fill={color} />
      <path d="M6.5 36c1.2-8.4 6.8-13.2 13.5-13.2S32.3 27.6 33.5 36" fill={color} />
    </svg>
  );
}

function AvatarsVisual() {
  return (
    <div className="mx-auto grid h-full w-full max-w-[184px] grid-cols-4 content-center gap-x-2 gap-y-1">
      {AVATAR_COLORS.concat(AVATAR_COLORS).map((color, index) => (
        <span key={`${color}-${index}`} className="aspect-square">
          <PersonSilhouette color={color} />
        </span>
      ))}
    </div>
  );
}

function roundPx(value: number) {
  return `${Math.round(value)}px`;
}

function EchoVisual() {
  const size = 176;
  const cx = size / 2;
  const cy = size / 2;
  const labelR = 80;
  const slice = (Math.PI * 2) / ECHO_VENUES.length;

  return (
    <div className="relative mx-auto size-[176px]">
      <svg viewBox={`0 0 ${size} ${size}`} className="h-full w-full" aria-hidden>
        <circle cx={cx} cy={cy} r="54" fill="none" stroke="rgba(9,19,26,0.08)" strokeWidth="14" />
        {ECHO_VENUES.map((venue, index) => {
          const start = index * slice - Math.PI / 2 + 0.06;
          const end = start + slice - 0.12;
          const r = 54;
          const x1 = Math.round(cx + r * Math.cos(start));
          const y1 = Math.round(cy + r * Math.sin(start));
          const x2 = Math.round(cx + r * Math.cos(end));
          const y2 = Math.round(cy + r * Math.sin(end));
          return (
            <path
              key={venue.label}
              d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`}
              fill="none"
              stroke={venue.color}
              strokeWidth="5"
              strokeLinecap="round"
            />
          );
        })}
        <circle cx={cx} cy={cy} r="42" fill="#f4f8fb" />
        <circle cx={cx} cy={cy} r="42" fill="none" stroke="rgba(0,143,219,0.16)" />
      </svg>
      {ECHO_VENUES.map((venue, index) => {
        const angle = index * slice - Math.PI / 2 + slice / 2;
        return (
          <span
            key={venue.label}
            className="absolute w-[62px] -translate-x-1/2 -translate-y-1/2 text-center text-[7px] font-bold uppercase leading-tight tracking-[0.3px] text-[var(--color-slate)]"
            style={{
              left: roundPx(cx + labelR * Math.cos(angle)),
              top: roundPx(cy + labelR * Math.sin(angle)),
            }}
          >
            {venue.label}
          </span>
        );
      })}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-end gap-1">
          <span className="flex h-9 w-[46px] items-center justify-center rounded-[5px] bg-[#0b1b2b] shadow-[0_6px_12px_rgba(9,19,26,0.18)]">
            <span className="h-[22px] w-[34px] rounded-[2px] bg-[linear-gradient(135deg,#008fdb_0%,#74be44_100%)]" />
          </span>
          <span className="flex h-7 w-5 items-center justify-center rounded-[3px] bg-[#0b1b2b]">
            <span className="h-[18px] w-[11px] rounded-[1px] bg-[#f05a27]" />
          </span>
          <span className="flex h-6 w-4 items-center justify-center rounded-[3px] bg-[#0b1b2b]">
            <span className="h-[15px] w-[8px] rounded-[1px] bg-[#009352]" />
          </span>
        </div>
      </div>
    </div>
  );
}

function CtvVisual({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto h-full w-full max-w-[260px] overflow-hidden rounded-[14px] shadow-[0_12px_28px_rgba(9,19,26,0.16)]">
      <Image src={src} alt={alt} fill className="object-cover object-center" sizes="280px" quality={92} />
    </div>
  );
}

function CardVisual({
  card,
}: {
  card: (typeof agenciesWhyCtv.cards)[number];
}) {
  if (card.visual === "avatars") return <AvatarsVisual />;
  if (card.visual === "echo") return <EchoVisual />;
  if ("image" in card) return <CtvVisual src={card.image} alt={card.imageAlt} />;
  return null;
}

export function WhyLemmaCtv({
  data = agenciesWhyCtv,
}: {
  data?: typeof agenciesWhyCtv;
}) {
  return (
    <section className="relative overflow-x-hidden bg-[#ECF1F4] py-12 md:py-16">
      <Container>
        <FadeUp className="mx-auto mb-9 max-w-3xl space-y-3 text-center">
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            {data.titleBefore}
            <WordPlay word={data.titleHighlight} />
            {data.titleAfter}
          </h2>
          <p className="text-[16px] leading-relaxed text-[#1581c5] md:text-[18px]">
            {data.description}
          </p>
        </FadeUp>

        <Stagger className="grid items-stretch gap-5 lg:grid-cols-3" delay={0.08}>
          {data.cards.map((card) => (
            <motion.article
              key={card.id}
              variants={staggerItem}
              className="group relative grid h-full grid-rows-[76px_176px_1fr] gap-5 overflow-hidden rounded-[20px] border border-white/80 bg-white p-6 pt-5 shadow-[0_10px_32px_rgba(9,19,26,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(9,19,26,0.12)]"
            >
              <span
                className="absolute inset-x-0 top-0 h-[5px]"
                style={{ backgroundColor: card.accent }}
                aria-hidden
              />
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="font-heading text-[20px] font-semibold leading-snug text-[var(--color-ink)] md:text-[22px]">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 min-h-[14px] text-[11px] font-semibold uppercase tracking-[1.4px] text-[var(--color-slate)]">
                    {card.kicker ?? "\u00a0"}
                  </p>
                </div>
                <span className="font-heading text-[28px] font-semibold leading-none tracking-[-0.8px] text-[rgba(9,19,26,0.12)]">
                  {card.number}
                </span>
              </div>

              <div className="flex items-center justify-center">
                <CardVisual card={card} />
              </div>

              <ul className="space-y-3.5">
                {card.points.map((point) => (
                  <li key={point.label} className="flex items-start gap-2.5">
                    <span
                      className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: card.accent }}
                    >
                      <Check className="size-3" strokeWidth={3} aria-hidden />
                    </span>
                    <p className="text-[14px] leading-relaxed text-[var(--color-slate)] md:text-[15px]">
                      <span className="font-semibold text-[var(--color-ink)]">{point.label}:</span>{" "}
                      {point.text}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
