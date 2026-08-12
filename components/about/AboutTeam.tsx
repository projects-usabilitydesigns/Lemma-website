"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp, Stagger, staggerItem } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { advisors, leadershipTeam, type TeamMember } from "@/lib/about-data";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TeamCard({ member, showRole = true }: { member: TeamMember; showRole?: boolean }) {
  return (
    <motion.article variants={staggerItem} className="group text-center">
      <div className="relative mx-auto mb-2 aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-[8px] bg-[#f0ebe6]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="280px"
        />
      </div>
      <h3 className="text-[18px] font-bold tracking-[-0.2px] text-[var(--color-ink)] md:text-[19px]">
        {member.name}
      </h3>
      {showRole && member.role ? (
        <p className="mt-0.5 font-[family-name:var(--font-inter)] text-[18px] font-normal leading-[1.4] text-[var(--color-slate)]">
          {member.role}
        </p>
      ) : null}
      {member.linkedin ? (
        <Link
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} on LinkedIn`}
          className="mt-1 inline-flex size-8 items-center justify-center rounded-full text-[#0A66C2] transition-opacity hover:opacity-80"
        >
          <LinkedInIcon className="size-5" />
        </Link>
      ) : null}
    </motion.article>
  );
}

export function AboutTeam() {
  return (
    <section id="team" className="bg-white pb-8 pt-8 md:pb-12 md:pt-10">
      <Container>
        <div className="mb-8 grid gap-6 lg:mb-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <FadeUp className="space-y-5">
            <SectionLabel label="Our Team" />
            <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
              Meet the team that defies the impossible
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="text-[15px] leading-[1.65] text-[var(--color-slate)] md:text-[16px]">
              Behind every innovation is a team driven by passion and purpose. Together, we create
              solutions that shape the future of digital advertising.
            </p>
          </FadeUp>
        </div>

        <Stagger className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-16 lg:gap-y-12">
          {leadershipTeam.map((member) => (
            <TeamCard key={member.id} member={member} />
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
