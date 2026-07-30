"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { MegaMenuConfig, MegaMenuLink } from "@/types";
import { cn } from "@/lib/utils";

function SectionLabel({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <div className="mb-5 flex items-center gap-2.5">
      <span className="h-px w-5 shrink-0 bg-[var(--color-pink)]" aria-hidden />
      <span
        className={cn(
          "text-[12px] font-semibold uppercase tracking-[1.6px]",
          light ? "text-white/80" : "text-[var(--color-slate)]",
        )}
      >
        {label}
      </span>
    </div>
  );
}

function MenuLinkItem({
  item,
  onNavigate,
}: {
  item: MegaMenuLink;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className="group/item flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[rgba(248,45,137,0.06)] hover:shadow-[0_8px_20px_rgba(9,19,26,0.06)]"
    >
      {item.iconColor ? (
        <span
          className="flex size-9 shrink-0 items-center justify-center rounded-[10px] text-[16px] font-semibold text-white shadow-sm transition-transform duration-300 group-hover/item:scale-110"
          style={{ backgroundColor: item.iconColor }}
          aria-hidden
        >
          {item.iconSymbol}
        </span>
      ) : null}
      <span className="min-w-0 flex-1">
        <span className="font-heading block text-[16px] font-semibold leading-tight text-[var(--color-ink)] transition-colors duration-300 group-hover/item:text-[var(--color-pink)]">
          {item.title}
        </span>
        <span className="mt-0.5 block text-[13px] leading-snug text-[var(--color-slate)] transition-colors duration-300 group-hover/item:text-[var(--color-ink-muted)]">
          {item.description}
        </span>
      </span>
      <ArrowRight
        className="size-4 shrink-0 text-[var(--color-slate)] opacity-40 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:text-[var(--color-pink)] group-hover/item:opacity-100"
        strokeWidth={1.75}
      />
    </Link>
  );
}

function FeaturedPanel({
  featured,
  onNavigate,
}: {
  featured: MegaMenuConfig["featured"];
  onNavigate?: () => void;
}) {
  return (
    <div className="relative min-h-[280px] overflow-hidden rounded-[16px] lg:min-h-full">
      <Image
        src={featured.image}
        alt=""
        fill
        className="object-cover"
        sizes="360px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/40" />
      <div className="relative z-10 flex h-full flex-col justify-between gap-8 p-6 md:p-7">
        <div>
          <SectionLabel label={featured.eyebrow} light />
          <h3 className="font-heading max-w-[16ch] text-[26px] font-semibold leading-[1.15] tracking-[-0.4px] text-white md:text-[28px]">
            {featured.title}
          </h3>
          <p className="mt-3 max-w-[28ch] text-[14px] leading-relaxed text-white/75">
            {featured.description}
          </p>
        </div>
        <Link
          href={featured.ctaHref}
          onClick={onNavigate}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-pink)] px-5 py-2.5 text-[14px] font-semibold text-white transition hover:brightness-110"
        >
          {featured.ctaLabel}
          <ArrowUpRight className="size-4" strokeWidth={2.25} />
        </Link>
      </div>
    </div>
  );
}

type MegaMenuPanelProps = {
  menu: MegaMenuConfig;
  onNavigate?: () => void;
};

export function MegaMenuPanel({ menu, onNavigate }: MegaMenuPanelProps) {
  return (
    <motion.div
      role="menu"
      aria-label="Submenu"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-[20px] border border-[var(--color-border)] bg-white shadow-[0_20px_60px_rgba(9,19,26,0.12)]"
    >
      <div className="grid lg:grid-cols-[1fr_1fr_0.95fr]">
        {menu.columns.map((column, index) => (
          <div
            key={column.id}
            className={cn(
              "p-6 md:p-8",
              index > 0 && "border-t border-[var(--color-border)] lg:border-t-0 lg:border-l",
            )}
          >
            <SectionLabel label={column.label} />
            <div className="flex flex-col gap-1">
              {column.items.map((item) => (
                <MenuLinkItem key={item.id} item={item} onNavigate={onNavigate} />
              ))}
            </div>
          </div>
        ))}
        <div className="border-t border-[var(--color-border)] p-3 lg:border-t-0 lg:border-l lg:p-3">
          <FeaturedPanel featured={menu.featured} onNavigate={onNavigate} />
        </div>
      </div>
    </motion.div>
  );
}
