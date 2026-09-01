"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp, Stagger, staggerItem } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { advisors, leadershipTeam, type TeamMember } from "@/lib/about-data";
import { cn } from "@/lib/utils";

const leaderCardWidth =
  "w-full sm:w-[calc((100%-3rem)/2)] md:w-[calc((100%-6rem)/3)] lg:w-[calc((100%-12rem)/4)]";

function LinkedInBadge({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        fill="#fff"
        d="M7.36 9.2H5.18V19h2.18V9.2zM6.27 4.5c-.7 0-1.27.58-1.27 1.28 0 .7.57 1.28 1.27 1.28.7 0 1.27-.58 1.27-1.28 0-.7-.57-1.28-1.27-1.28zM19 12.64c0-2.08-1.11-3.42-3.18-3.42-1.46 0-2.11.8-2.48 1.37h-.06V9.2h-2.18c.03.62 0 9.8 0 9.8h2.18v-5.48c0-.28.02-.56.1-.76.23-.56.74-1.13 1.6-1.13 1.13 0 1.58.86 1.58 2.12V19H19v-6.36z"
      />
    </svg>
  );
}

function TeamCard({
  member,
  showRole = true,
  className,
}: {
  member: TeamMember;
  showRole?: boolean;
  className?: string;
}) {
  const portrait = (
    <div className="relative mx-auto mb-3 aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-[8px] bg-[#f0ebe6]">
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover object-top"
        sizes="280px"
      />
      {member.linkedin ? (
        <span className="absolute inset-0 flex items-center justify-center bg-black/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <LinkedInBadge className="size-10 shrink-0 shadow-md" />
        </span>
      ) : null}
    </div>
  );

  return (
    <motion.article variants={staggerItem} className={cn("text-center", className)}>
      {member.linkedin ? (
        <Link
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} on LinkedIn`}
          className="group block outline-none"
        >
          {portrait}
        </Link>
      ) : (
        portrait
      )}
      <h3 className="text-[18px] font-bold tracking-[-0.2px] text-[var(--color-ink)] md:text-[19px]">
        {member.name}
      </h3>
      {showRole && member.role ? (
        <p className="mt-0.5 font-[family-name:var(--font-inter)] text-[18px] font-normal leading-[1.4] text-[var(--color-slate)]">
          {member.role}
        </p>
      ) : null}
    </motion.article>
  );
}

export function AboutTeam() {
  return (
    <section id="team" className="bg-white py-10 md:py-14">
      <Container>
        <div className="mb-8 lg:mb-10">
          <FadeUp className="space-y-5">
            <SectionLabel label="Our Team" />
            <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
              Meet the team that defies the impossible
            </h2>
          </FadeUp>
        </div>

        <Stagger className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-8 gap-y-8 sm:gap-x-12 sm:gap-y-10 lg:gap-x-16 lg:gap-y-12">
          {leadershipTeam.map((member) => (
            <TeamCard key={member.id} member={member} className={leaderCardWidth} />
          ))}
        </Stagger>

        <div className="mt-14 md:mt-16">
          <FadeUp>
            <h3 className="mb-8 text-center font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:mb-10 md:text-[45px] md:leading-[50px]">
              Our trusted advisers
            </h3>
          </FadeUp>
          <Stagger className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-16 lg:gap-y-12">
            {advisors.map((member) => (
              <TeamCard key={member.id} member={member} showRole={false} />
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
