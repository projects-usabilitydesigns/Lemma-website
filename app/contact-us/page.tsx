import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { LogosMarquee } from "@/components/home/LogosMarquee";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactOffices } from "@/components/contact/ContactOffices";
import { ContactCta } from "@/components/contact/ContactCta";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to the Lemma Technologies team. Reach advertisers and media owners specialists across New York, London, Singapore, Sydney, Jakarta, Delhi, Mumbai, and Pune.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <LogosMarquee />
        <ContactOffices />
        <ContactCta />
      </main>
    </>
  );
}
