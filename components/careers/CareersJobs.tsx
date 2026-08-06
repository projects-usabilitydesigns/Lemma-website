"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeUp, Stagger, staggerItem } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { careersJobs } from "@/lib/careers-data";

export function CareersJobs() {
  return (
    <section id="openings" className="relative overflow-hidden py-16 md:py-[90px]">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(21,129,197,0.18), transparent 45%), radial-gradient(circle at 85% 20%, rgba(237,46,128,0.14), transparent 42%), radial-gradient(circle at 50% 100%, rgba(0,147,82,0.1), transparent 45%), linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)",
        }}
      />

      <Container className="relative">
        <FadeUp className="mx-auto mb-10 max-w-4xl space-y-4 text-center">
          <SectionLabel label={careersJobs.label} align="center" />
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            {careersJobs.title}
          </h2>
          <p className="text-[16px] leading-[22px] text-[var(--color-slate)]">
            {careersJobs.description}
          </p>
        </FadeUp>

        <Stagger className="mb-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {careersJobs.roles.map((role) => (
            <motion.article
              key={role.id}
              variants={staggerItem}
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
                JOB ID:&nbsp;{role.jobId}
                &nbsp;&nbsp;EXPERIENCE: {role.experience}
              </p>
              <div className="mt-auto pt-2">
                <LinkArrow href={role.href}>Job Description</LinkArrow>
              </div>
            </motion.article>
          ))}
        </Stagger>

        <FadeUp delay={0.1} className="flex justify-center">
          <Button href={careersJobs.viewAllHref} variant="primary" arrow="right">
            View all jobs
          </Button>
        </FadeUp>
      </Container>
    </section>
  );
}
