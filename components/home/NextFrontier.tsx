"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import { FadeUp } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { VideoModal } from "@/components/ui/VideoModal";

const DEMO_VIDEO = "https://youtu.be/aOQpghNmHsw?si=z_cx-MpQWi-oLPeT";

export function NextFrontier() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="next-frontier" className="relative overflow-hidden py-16 md:py-[90px]">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      <div className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-home-mesh)]" />
      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">
          <FadeUp className="space-y-5">
            <h2 className="font-heading max-w-xl text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
              The Next Frontier for
              <br />
              Performance-Driven Brands
            </h2>
            <p className="max-w-lg font-[family-name:var(--font-inter)] text-[16px] font-medium leading-[22px] tracking-normal text-[var(--color-slate)]">
              You demand results; we deliver them. Let our performance expertise scale your
              conversions while we unlock new streams of demand through high-impact Digital
              Out-of-Home advertising.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 sm:gap-4">
              <Button
                href="/request-demo"
                variant="primary"
                className="box-border h-11 min-w-[228px] px-6 py-2.5 text-[14px] leading-none tracking-[1.2px]"
              >
                Book a free audit
              </Button>
              <Button
                href="/contact-us"
                variant="outline"
                arrow="none"
                className="box-border h-11 min-w-[228px] px-6 leading-none"
              >
                Talk To Sales
              </Button>
            </div>
          </FadeUp>

          <FadeUp delay={0.08} className="justify-self-center lg:justify-self-end">
            <div className="group relative w-full max-w-[676px] overflow-hidden rounded-[16px] border-2 border-[#037C7C]">
              <Image
                src="/images/next-frontier.jpg"
                alt="Lemma AI Discovery — screens, audience reach, and campaign planning"
                width={676}
                height={392}
                className="h-auto w-full"
              />
              <button
                type="button"
                aria-label="Play Lemma Technologies video"
                onClick={() => setVideoOpen(true)}
                className="absolute left-1/2 top-1/2 z-10 flex size-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-[0px_10px_40px_-5px_rgba(0,143,219,0.55)] transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: "linear-gradient(135deg, #008fdb 0%, #009352 100%)" }}
              >
                <Play className="ml-0.5 size-[27px] fill-white text-white" />
              </button>
            </div>
          </FadeUp>
        </div>
      </Container>

      <VideoModal
        open={videoOpen}
        title="Lemma Technologies"
        videoUrl={DEMO_VIDEO}
        onClose={() => setVideoOpen(false)}
      />
    </section>
  );
}
