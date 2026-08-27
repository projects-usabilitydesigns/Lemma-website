import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CookieConsentProvider } from "@/components/cookies/CookieConsentProvider";
import { ConsentScripts } from "@/components/cookies/ConsentScripts";
import { DemoModalProvider } from "@/components/request-demo/DemoModalProvider";
import { CONSENT_BOOT_SCRIPT } from "@/lib/cookie-consent";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const googleSansFlex = localFont({
  src: [
    { path: "./fonts/GoogleSansFlex-400.woff", weight: "400", style: "normal" },
    { path: "./fonts/GoogleSansFlex-500.woff", weight: "500", style: "normal" },
    { path: "./fonts/GoogleSansFlex-600.woff", weight: "600", style: "normal" },
    { path: "./fonts/GoogleSansFlex-700.woff", weight: "700", style: "normal" },
    { path: "./fonts/GoogleSansFlex-800.woff", weight: "800", style: "normal" },
  ],
  variable: "--font-google-sans-flex",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "132x132" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#F05A27",
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
      <body className={`${inter.variable} ${googleSansFlex.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script dangerouslySetInnerHTML={{ __html: CONSENT_BOOT_SCRIPT }} />
        <SmoothScrollProvider>
          <CookieConsentProvider>
            <ConsentScripts />
            <DemoModalProvider>
              {children}
              <Footer />
            </DemoModalProvider>
          </CookieConsentProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
