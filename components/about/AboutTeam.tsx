"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeUp, Stagger, staggerItem } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { advisors, leadershipTeam, type TeamMember } from "@/lib/about-data";

function TeamCard({ member, showRole = true }: { member: TeamMember; showRole?: boolean }) {
  return (
    <motion.article variants={staggerItem} className="group text-center">
      <div className="relative mx-auto mb-4 aspect-[3/4] w-full overflow-hidden rounded-[8px] bg-[#f0ebe6] grayscale transition-[filter] duration-500 group-hover:grayscale-0">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <h3 className="text-[16px] font-bold tracking-[-0.2px] text-[var(--color-ink)] md:text-[17px]">
        {member.name}
      </h3>
      {showRole && member.role ? (
        <p className="mt-1 font-[family-name:var(--font-inter)] text-[18px] font-normal leading-[1.4] text-[var(--color-slate)]">
          {member.role}
        </p>
      ) : null}
    </motion.article>
  );
}

export function AboutTeam() {
  return (
    <section id="team" className="bg-white pb-16 pt-8 md:pb-[100px] md:pt-10">
      <Container>
        <div className="mb-12 grid gap-6 lg:mb-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
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

        <Stagger className="grid gap-x-5 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
          {leadershipTeam.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </Stagger>

        <div className="mt-20 md:mt-24">
          <FadeUp>
            <h3 className="mb-10 text-center font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:mb-12 md:text-[45px] md:leading-[50px]">
              Our trusted advisers
            </h3>
          </FadeUp>
          <Stagger className="mx-auto grid max-w-5xl gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
            {advisors.map((member) => (
              <TeamCard key={member.id} member={member} showRole={false} />
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
