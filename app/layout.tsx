import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://lemmamedia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lemma Technologies | Outdoor to Outcome",
    template: "%s | Lemma Technologies",
  },
  description:
    "An AI-first full-funnel attribution platform powering measurable omnichannel advertising across DOOH, CTV, mobile, and digital.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Lemma Technologies | Outdoor to Outcome",
    description:
      "AI-powered omnichannel AdTech platform turning outdoor impressions into measurable outcomes.",
    siteName: "Lemma Technologies",
    images: [
      {
        url: "/images/hero-demo.jpg",
        width: 1200,
        height: 630,
        alt: "Lemma Technologies platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lemma Technologies | Outdoor to Outcome",
    description:
      "AI-powered omnichannel AdTech platform turning outdoor impressions into measurable outcomes.",
    images: ["/images/hero-demo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lemma Technologies",
  url: siteUrl,
  logo: `${siteUrl}/images/logo-lemma.svg`,
  email: "contactus@lemmamedia.com",
  telephone: "+00 12345678",
  address: {
    "@type": "PostalAddress",
    streetAddress: "530 Fifth Ave, 9th Floor",
    addressLocality: "New York",
    postalCode: "10036",
    addressCountry: "US",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
