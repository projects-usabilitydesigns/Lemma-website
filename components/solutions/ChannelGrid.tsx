"use client";

import {
  BarChart3,
  Boxes,
  Clapperboard,
  Images,
  Monitor,
  Network,
  PlayCircle,
  ShieldCheck,
  ThumbsUp,
  TrendingUp,
  Tv,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, Stagger, staggerItem } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { brandsChannels, type BrandsChannel } from "@/lib/solutions-brands-data";

const icons = {
  monitor: Monitor,
  tv: Tv,
  play: PlayCircle,
  thumbsUp: ThumbsUp,
  billboard: Clapperboard,
  network: Network,
  boxes: Boxes,
  images: Images,
  zap: Zap,
  trendingUp: TrendingUp,
  shield: ShieldCheck,
  barChart: BarChart3,
} as const;

function ChannelCard({ channel }: { channel: BrandsChannel }) {
  const Icon = icons[channel.icon];
  return (
    <motion.article
      variants={staggerItem}
      className="group rounded-[20px] border border-[var(--color-border)] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(248,45,137,0.35)] hover:shadow-[0_16px_36px_rgba(9,19,26,0.08)]"
    >
      <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-[rgba(248,45,137,0.08)] text-[var(--color-pink)] transition-transform duration-300 group-hover:scale-110">
        <Icon className="size-6" strokeWidth={1.75} />
      </div>
      <h3 className="font-heading text-[18px] font-semibold text-[var(--color-ink)]">
        {channel.title}
      </h3>
      <p className="mt-2 text-[16px] leading-relaxed text-[var(--color-slate)]">
        {channel.description}
      </p>
    </motion.article>
  );
}

const brandsDefaults = {
  title: "Activate across every screen and environment",
  description:
    "If there’s a new platform, we’ll help you gain value from it—with precise targeting and measurable engagement.",
  channels: brandsChannels,
};

export function ChannelGrid({
  title = brandsDefaults.title,
  description = brandsDefaults.description,
  channels = brandsDefaults.channels,
}: {
  title?: string;
  description?: string;
  channels?: BrandsChannel[];
}) {
  return (
    <section className="bg-[#ECF1F4] py-16 md:py-[90px]">
      <Container>
        <FadeUp className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            {title}
          </h2>
          <p className="text-[18px] leading-relaxed text-[var(--color-slate)] md:text-[20px]">
            {description}
          </p>
        </FadeUp>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" delay={0.08}>
          {channels.map((channel) => (
            <ChannelCard key={channel.id} channel={channel} />
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
