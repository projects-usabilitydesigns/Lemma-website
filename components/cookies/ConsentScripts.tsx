"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useCookieConsent } from "@/components/cookies/CookieConsentProvider";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function ConsentScripts() {
  const { hasConsented, preferences } = useCookieConsent();

  useEffect(() => {
    if (!hasConsented || !GA_ID || typeof window.gtag !== "function") return;
    window.gtag("consent", "update", {
      analytics_storage: preferences.analytics ? "granted" : "denied",
      ad_storage: preferences.marketing ? "granted" : "denied",
      ad_user_data: preferences.marketing ? "granted" : "denied",
      ad_personalization: preferences.marketing ? "granted" : "denied",
    });
  }, [hasConsented, preferences]);

  if (!hasConsented || !preferences.analytics || !GA_ID) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="lemma-ga" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
