"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, FileEdit, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { resourcesHero } from "@/lib/resources-page-data";
import { animation } from "@/lib/design-system";

export function ResourcesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fff0f6] via-[#f0f7ff] to-[#f2fcf5]">
      <Container className="relative pt-[120px] pb-16 md:pt-[140px] md:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animation.duration.slow, ease: animation.easeOut }}
            className="flex flex-col gap-6"
          >
            <SectionLabel label={resourcesHero.label} />

            <h1 className="font-heading text-[40px] font-semibold leading-[1.12] tracking-[-0.72px] text-[var(--color-ink)] md:text-[52px] md:leading-[58px]">
              {resourcesHero.title}
            </h1>

            <p className="font-[family-name:var(--font-inter)] max-w-xl text-[16px] font-normal leading-[1.55] tracking-[0.3px] text-[#09131A] md:text-[19px]">
              {resourcesHero.description}
            </p>

            <div>
              <Button
                href={resourcesHero.primaryCta.href}
                variant="primary"
                arrow="right"
                className="normal-case tracking-normal px-7 py-3 text-[15px] font-semibold"
              >
                {resourcesHero.primaryCta.label}
              </Button>
            </div>
          </motion.div>

          {/* Right Visual Graphic (Exact Orbital Design) */}
          <div className="relative mx-auto aspect-square w-full max-w-[540px]">
            {/* SVG Orbit Lines */}
            <svg
              className="absolute inset-0 size-full"
              viewBox="0 0 540 540"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Inner Dashed Blue Ring */}
              <circle
                cx="270"
                cy="270"
                r="135"
                stroke="#60a5fa"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />

              {/* Outer Gradient Ring */}
              <circle
                cx="270"
                cy="270"
                r="185"
                stroke="url(#orbitGradient)"
                strokeWidth="1.8"
              />

              <defs>
                <linearGradient
                  id="orbitGradient"
                  x1="85"
                  y1="85"
                  x2="455"
                  y2="455"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
              </defs>
            </svg>

            {/* Orbit Node Dots */}
            {/* Pink Dot (Top-Left) */}
            <div className="absolute left-[138px] top-[138px] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <span className="absolute size-6 rounded-full bg-[#ff2d89]/20 animate-ping opacity-75" />
              <span className="size-4 rounded-full border-2 border-white bg-[#ff2d89] shadow-[0_0_8px_rgba(255,45,137,0.6)]" />
            </div>

            {/* Blue Dot (Right) */}
            <div className="absolute right-[85px] top-[270px] flex translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <span className="size-4 rounded-full border-2 border-white bg-[#008fdb] shadow-[0_0_8px_rgba(0,143,219,0.6)]" />
            </div>

            {/* Green Dot (Bottom) */}
            <div className="absolute bottom-[85px] left-[270px] flex -translate-x-1/2 translate-y-1/2 items-center justify-center">
              <span className="size-4 rounded-full border-2 border-white bg-[#009352] shadow-[0_0_8px_rgba(0,147,82,0.6)]" />
            </div>

            {/* Center LEMMA Logo Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: animation.duration.base, ease: animation.easeOut, delay: 0.2 }}
              className="absolute left-1/2 top-1/2 flex size-[155px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#ff7bb5]/40 bg-white shadow-[0_12px_32px_rgba(9,19,26,0.08)]"
            >
              <div className="relative h-10 w-28">
                <Image
                  src="/images/logo-lemma.svg"
                  alt="LEMMA"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Orbit Cards */}

            {/* 1. Newsroom Card (Top-Left - Tilted Angle) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute left-[-10px] top-[10px] z-10 w-[230px] -rotate-[26deg] rounded-[22px] border-2 border-[#ff2d89] bg-white p-4.5 shadow-[0_12px_28px_rgba(255,45,137,0.15)] transition-transform hover:scale-105"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-heading text-[17px] font-bold text-[#ff2d89]">
                    Newsroom
                  </h3>
                  <p className="mt-1 text-[11.5px] leading-[1.4] text-[#4c575f]">
                    Latest updates from Lemma Technologies.
                  </p>
                </div>
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#ff2d89] text-white shadow-sm">
                  <Globe className="size-5" strokeWidth={2} />
                </div>
              </div>
            </motion.div>

            {/* 2. Blogs Card (Top-Right - Straight) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute right-[-15px] top-[95px] z-10 w-[220px] rounded-[20px] border-2 border-[#008fdb] bg-white p-4 shadow-[0_12px_28px_rgba(0,143,219,0.15)] transition-transform hover:scale-105"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-heading text-[17px] font-bold text-[#008fdb]">
                    Blogs
                  </h3>
                  <p className="mt-1 text-[11.5px] leading-[1.4] text-[#4c575f]">
                    Insights driving innovation and growth.
                  </p>
                </div>
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#e6f4fd] text-[#008fdb]">
                  <FileEdit className="size-5" strokeWidth={2} />
                </div>
              </div>
            </motion.div>

            {/* 3. Case Studies Card (Bottom-Center - Straight) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute bottom-[-15px] left-[185px] z-10 w-[225px] -translate-x-1/2 rounded-[20px] border-2 border-[#009352] bg-white p-4 shadow-[0_12px_28px_rgba(0,147,82,0.15)] transition-transform hover:scale-105"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-heading text-[17px] font-bold text-[#009352]">
                    Case Studies
                  </h3>
                  <p className="mt-1 text-[11.5px] leading-[1.4] text-[#4c575f]">
                    Insights driving innovation and growth.
                  </p>
                </div>
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#e6f7ef] text-[#009352]">
                  <TrendingUp className="size-5" strokeWidth={2} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}