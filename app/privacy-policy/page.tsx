import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { PrivacyPolicyContent } from "@/components/legal/PrivacyPolicyContent";
import { getPageSeo } from "@/lib/api";
import { buildMetadataFromSeo } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSeo("privacy-policy");
  return buildMetadataFromSeo(seo, {
    title: "Privacy Policy",
    description:
      "How Lemma Media Inc. collects, uses, and protects Personal Data when you visit our website, inquire about our products, or access properties monetized through Lemma.",
  });
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <PrivacyPolicyContent />
      </main>
    </>
  );
}
