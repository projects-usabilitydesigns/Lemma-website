"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/animation";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { animation } from "@/lib/design-system";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { careersJobs, type CareersJob } from "@/lib/careers-data";

const INITIAL_VISIBLE_COUNT = 6;

export function CareersJobs({ roles }: { roles: CareersJob[] }) {
  const [expanded, setExpanded] = useState(false);
  const visibleRoles = expanded ? roles : roles.slice(0, INITIAL_VISIBLE_COUNT);
  const reduced = useReducedMotion();
  return (
    <section id="openings" className="relative overflow-hidden py-10 md:py-14">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(21,129,197,0.18), transparent 45%), radial-gradient(circle at 85% 20%, rgba(237,46,128,0.14), transparent 42%), radial-gradient(circle at 50% 100%, rgba(0,147,82,0.1), transparent 45%), linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)",
        }}
      />

      <Container className="relative">
        <FadeUp className="mx-auto mb-8 max-w-4xl space-y-4 text-center">
          <SectionLabel label={careersJobs.label} align="center" />
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            {careersJobs.title}
          </h2>
          <p className="text-[16px] leading-[22px] text-[var(--color-slate)]">
            {careersJobs.description}
          </p>
        </FadeUp>

        <div className="mb-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {visibleRoles.map((role, index) => (
            <motion.article
              key={role.id}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: animation.duration.base,
                ease: animation.easeOut,
                delay: reduced ? 0 : (index % 3) * 0.08,
              }}
              whileHover={{ y: -6 }}
              className="flex h-full flex-col gap-5 rounded-[16px] border border-[#b8babc] bg-white p-5 shadow-[0px_4px_0px_#008fdb] transition-shadow duration-300 hover:shadow-[0px_8px_24px_rgba(0,143,219,0.2)]"
            >
              <div className="flex size-12 items-center justify-center rounded-[6px] bg-[#def2ff]">
                <Image
                  src="/images/careers/job-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 object-contain"
                  aria-hidden
                />
              </div>
              <h3 className="text-[22px] font-bold tracking-[-0.44px] text-[var(--color-ink)] md:text-[24px] md:leading-[27.5px]">
                {role.title}
              </h3>
              <p className="text-[15px] leading-[22px] text-[var(--color-slate)] md:text-[16px]">
                Experience: {role.experience}
                {role.role ? (
                  <>
                    &nbsp;&nbsp;Role: {role.role}
                  </>
                ) : null}
                {role.location ? (
                  <>
                    &nbsp;&nbsp;Location: {role.location}
                  </>
                ) : null}
              </p>
              <div className="mt-auto pt-2">
                <LinkArrow href={role.href}>Job Description</LinkArrow>
              </div>
            </motion.article>
          ))}
        </div>

        {roles.length > INITIAL_VISIBLE_COUNT ? (
          <FadeUp delay={0.1} className="flex justify-center">
            <Button
              variant="primary"
              arrow="right"
              onClick={() => setExpanded((value) => !value)}
              ariaLabel={expanded ? "Show fewer jobs" : "View all jobs"}
              ariaExpanded={expanded}
            >
              {expanded ? "Show less" : "View all jobs"}
            </Button>
          </FadeUp>
        ) : null}
      </Container>
    </section>
  );
}
