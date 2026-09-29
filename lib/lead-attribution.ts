export type LeadAttribution = {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
  landingPage: string;
  referrer: string;
  currentUrl: string;
};

const STORAGE_KEY = "lemma_lead_attribution";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

function emptyAttribution(): LeadAttribution {
  return {
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
    utmTerm: "",
    utmContent: "",
    landingPage: "",
    referrer: "",
    currentUrl: "",
  };
}

function readStored(): Partial<LeadAttribution> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Partial<LeadAttribution>;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeStored(value: LeadAttribution) {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    // Ignore quota / private-mode failures.
  }
}

/** Capture first-touch UTMs, landing page, and referrer for later form posts. */
export function captureLeadAttribution() {
  if (typeof window === "undefined") return;

  const stored = readStored();
  const params = new URLSearchParams(window.location.search);
  const hasUtm = UTM_KEYS.some((key) => Boolean(params.get(key)));

  const next: LeadAttribution = {
    utmSource: (hasUtm ? params.get("utm_source") : stored.utmSource) || "",
    utmMedium: (hasUtm ? params.get("utm_medium") : stored.utmMedium) || "",
    utmCampaign: (hasUtm ? params.get("utm_campaign") : stored.utmCampaign) || "",
    utmTerm: (hasUtm ? params.get("utm_term") : stored.utmTerm) || "",
    utmContent: (hasUtm ? params.get("utm_content") : stored.utmContent) || "",
    landingPage: stored.landingPage || window.location.href,
    referrer: stored.referrer || document.referrer || "",
    currentUrl: window.location.href,
  };

  writeStored(next);
}

export function getLeadAttribution(): LeadAttribution {
  if (typeof window === "undefined") return emptyAttribution();
  captureLeadAttribution();
  const stored = readStored();
  return {
    ...emptyAttribution(),
    ...stored,
    currentUrl: window.location.href,
  };
}

export function normalizeAttribution(value: unknown): LeadAttribution {
  const input = value && typeof value === "object" ? (value as Record<string, unknown>) : {};
  const text = (key: string) => (typeof input[key] === "string" ? input[key].trim() : "");
  return {
    utmSource: text("utmSource"),
    utmMedium: text("utmMedium"),
    utmCampaign: text("utmCampaign"),
    utmTerm: text("utmTerm"),
    utmContent: text("utmContent"),
    landingPage: text("landingPage"),
    referrer: text("referrer"),
    currentUrl: text("currentUrl"),
  };
}
