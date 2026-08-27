export const COOKIE_STORAGE_KEY = "lemma-cookie-consent";
export const CONSENT_COOKIE_NAME = "lemma_cookie_consent";
export const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export const cookieCategories = ["necessary", "marketing", "analytics", "preferences", "unclassified"] as const;

export type CookieCategoryId = (typeof cookieCategories)[number];

export type CookiePreferences = Record<CookieCategoryId, boolean>;

export type StoredConsent = {
  preferences: CookiePreferences;
  updatedAt: string;
};

export type CookieDefinition = {
  name: string;
  domain: string;
  purpose: string;
  expiry: string;
  type: string;
};

export const defaultPreferences: CookiePreferences = {
  necessary: true,
  marketing: false,
  analytics: false,
  preferences: false,
  unclassified: false,
};

export const allAcceptedPreferences: CookiePreferences = {
  necessary: true,
  marketing: true,
  analytics: true,
  preferences: true,
  unclassified: true,
};

/** First-party cookies we can delete when a category is turned off. */
const OPTIONAL_COOKIE_MATCHERS: Record<Exclude<CookieCategoryId, "necessary">, string[]> = {
  marketing: ["_gcl_", "_gcl_au", "_fbp", "_fbc", "fr"],
  analytics: ["_ga", "_gid", "_gat"],
  preferences: ["lemma_pref_"],
  unclassified: [],
};

export const cookieCategoryCopy: Record<
  CookieCategoryId,
  {
    label: string;
    description: string;
    cookies: CookieDefinition[];
  }
> = {
  necessary: {
    label: "Necessary",
    description:
      "Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.",
    cookies: [
      {
        name: CONSENT_COOKIE_NAME,
        domain: "lemmamedia.com",
        purpose: "Stores your cookie consent preferences.",
        expiry: "1 year",
        type: "HTTP",
      },
    ],
  },
  marketing: {
    label: "Marketing",
    description:
      "Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user. YouTube embeds use a privacy-enhanced player until these cookies are accepted.",
    cookies: [
      {
        name: "YSC",
        domain: "youtube.com",
        purpose: "YouTube session cookie, set only if marketing cookies are accepted.",
        expiry: "Session",
        type: "HTTP",
      },
      {
        name: "_gcl_au",
        domain: "lemmamedia.com",
        purpose: "Used by Google to measure advertisement efficiency.",
        expiry: "3 months",
        type: "HTTP",
      },
    ],
  },
  analytics: {
    label: "Analytics",
    description:
      "Analytics cookies help us understand how visitors interact with the website by collecting and reporting information anonymously. They are loaded only after you opt in.",
    cookies: [
      {
        name: "_ga",
        domain: "lemmamedia.com",
        purpose: "Registers a unique ID used to generate statistical data on how the visitor uses the website.",
        expiry: "2 years",
        type: "HTTP",
      },
    ],
  },
  preferences: {
    label: "Preferences",
    description:
      "Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or region.",
    cookies: [],
  },
  unclassified: {
    label: "Unclassified",
    description:
      "Unclassified cookies are cookies that we are still in the process of classifying, together with the providers of individual cookies.",
    cookies: [],
  },
};

declare global {
  interface Window {
    LemmaConsent?: {
      hasConsented: boolean;
      preferences: CookiePreferences;
    };
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name: string, value: string, maxAge = CONSENT_MAX_AGE_SECONDS) {
  const secure = typeof window !== "undefined" && window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure}`;
}

function deleteCookie(name: string) {
  const hostname = window.location.hostname;
  const domains = ["", hostname, `.${hostname}`];
  for (const domain of domains) {
    const domainPart = domain ? `; Domain=${domain}` : "";
    document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax${domainPart}`;
  }
}

function parseConsentPayload(raw: string): StoredConsent | null {
  try {
    const parsed = JSON.parse(raw) as StoredConsent;
    if (!parsed?.preferences) return null;
    return {
      updatedAt: parsed.updatedAt,
      preferences: { ...defaultPreferences, ...parsed.preferences, necessary: true },
    };
  } catch {
    return null;
  }
}

export function readStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  const fromCookie = readCookie(CONSENT_COOKIE_NAME);
  if (fromCookie) return parseConsentPayload(fromCookie);
  try {
    const raw = window.localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!raw) return null;
    return parseConsentPayload(raw);
  } catch {
    return null;
  }
}

function purgeOptionalCookies(preferences: CookiePreferences) {
  const names = document.cookie
    .split(";")
    .map((part) => part.split("=")[0]?.trim())
    .filter(Boolean);

  (Object.keys(OPTIONAL_COOKIE_MATCHERS) as Array<keyof typeof OPTIONAL_COOKIE_MATCHERS>).forEach((category) => {
    if (preferences[category]) return;
    const matchers = OPTIONAL_COOKIE_MATCHERS[category];
    for (const name of names) {
      if (name === CONSENT_COOKIE_NAME) continue;
      if (matchers.some((matcher) => name === matcher || name.startsWith(matcher))) {
        deleteCookie(name);
      }
    }
  });
}

function syncGoogleConsent(preferences: CookiePreferences) {
  if (typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    analytics_storage: preferences.analytics ? "granted" : "denied",
    ad_storage: preferences.marketing ? "granted" : "denied",
    ad_user_data: preferences.marketing ? "granted" : "denied",
    ad_personalization: preferences.marketing ? "granted" : "denied",
  });
}

export function applyConsent(preferences: CookiePreferences, hasConsented: boolean) {
  const next = { ...preferences, necessary: true as const };
  window.LemmaConsent = { hasConsented, preferences: next };
  window.dispatchEvent(new CustomEvent("lemma-consent-change", { detail: window.LemmaConsent }));
  if (hasConsented) {
    purgeOptionalCookies(next);
    syncGoogleConsent(next);
  }
}

export function writeStoredConsent(preferences: CookiePreferences) {
  const payload: StoredConsent = {
    preferences: { ...preferences, necessary: true },
    updatedAt: new Date().toISOString(),
  };
  const serialized = JSON.stringify(payload);
  writeCookie(CONSENT_COOKIE_NAME, serialized);
  window.localStorage.setItem(COOKIE_STORAGE_KEY, serialized);
  applyConsent(payload.preferences, true);
  return payload;
}

export const CONSENT_BOOT_SCRIPT = `(function(){try{var n="${CONSENT_COOKIE_NAME}";var m=document.cookie.match(new RegExp("(?:^|; )"+n+"=([^;]*)"));if(!m)return;var p=JSON.parse(decodeURIComponent(m[1]));if(p&&p.preferences){window.LemmaConsent={hasConsented:true,preferences:Object.assign({necessary:true,marketing:false,analytics:false,preferences:false,unclassified:false},p.preferences,{necessary:true})};}}catch(e){}})();`;
