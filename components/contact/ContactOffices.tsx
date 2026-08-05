"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { FadeUp, Stagger, staggerItem } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { offices } from "@/lib/contact-data";

export function ContactOffices() {
  return (
    <section id="offices" className="bg-white py-16 md:py-[90px]">
      <Container>
        <FadeUp className="mx-auto mb-12 max-w-2xl space-y-4 text-center">
          <SectionLabel label="Our Offices" align="center" dual accent="blue" />
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            Local teams, global reach
          </h2>
          <p className="text-[18px] leading-relaxed text-[var(--color-slate)] md:text-[20px]">
            Wherever your campaigns or screens are, there&apos;s a Lemma team nearby.
          </p>
        </FadeUp>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" delay={0.06}>
          {offices.map((office) => (
            <motion.article
              key={office.id}
              variants={staggerItem}
              className="flex h-full flex-col rounded-[20px] border border-[var(--color-border)] bg-[var(--color-cream-soft)] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_18px_40px_rgba(9,19,26,0.1)]"
            >
              <span className="mb-4 flex size-11 items-center justify-center rounded-xl bg-[rgba(21,129,197,0.1)] text-[var(--color-blue-link)]">
                <MapPin className="size-5" />
              </span>
              <h3 className="font-heading text-[20px] font-semibold text-[var(--color-ink)]">
                {office.city}
              </h3>
              <p className="mt-0.5 text-[12px] font-semibold uppercase tracking-[1.4px] text-[var(--color-slate)]">
                {office.region}
              </p>
              <address className="mt-3 flex-1 text-[15px] not-italic leading-relaxed text-[var(--color-slate)]">
                {office.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              {office.phone ? (
                <a
                  href={`tel:${office.phone.replace(/\s/g, "")}`}
                  className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--color-blue-link)] hover:underline"
                >
                  <Phone className="size-4" />
                  {office.phone}
                </a>
              ) : null}
            </motion.article>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
