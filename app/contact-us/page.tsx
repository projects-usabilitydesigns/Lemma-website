import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactOffices } from "@/components/contact/ContactOffices";
import { ContactCta } from "@/components/contact/ContactCta";
import { getPageSeo } from "@/lib/api";
import { buildMetadataFromSeo } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSeo("contact-us");
  return buildMetadataFromSeo(seo, {
    title: "Contact Us",
    description:
      "Talk to the Lemma Technologies team. Reach advertisers and media owners specialists across New York, London, Singapore, Sydney, Jakarta, Delhi, Mumbai, and Pune.",
  });
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactOffices />
        <ContactCta />
      </main>
    </>
  );
}
