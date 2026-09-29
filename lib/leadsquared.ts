import { envValue, readLocalEnv } from "@/lib/mailer";
import type { LeadAttribution } from "@/lib/lead-attribution";

export type LeadCaptureInput = {
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  company?: string;
  jobTitle?: string;
  country?: string;
  source: string;
  notes?: string;
  website?: string;
  attribution?: LeadAttribution;
};

type LeadSquaredField = {
  Attribute: string;
  Value: string;
};

function truncate(value: string, max = 1500) {
  return value.length <= max ? value : `${value.slice(0, max - 1)}…`;
}

function pushField(fields: LeadSquaredField[], attribute: string, value?: string) {
  const trimmed = value?.trim();
  if (!trimmed) return;
  fields.push({ Attribute: attribute, Value: trimmed });
}

function buildNotes(input: LeadCaptureInput) {
  const attribution = input.attribution;
  const lines = [
    input.notes?.trim(),
    attribution?.utmSource ? `UTM source: ${attribution.utmSource}` : "",
    attribution?.utmMedium ? `UTM medium: ${attribution.utmMedium}` : "",
    attribution?.utmCampaign ? `UTM campaign: ${attribution.utmCampaign}` : "",
    attribution?.utmTerm ? `UTM term: ${attribution.utmTerm}` : "",
    attribution?.utmContent ? `UTM content: ${attribution.utmContent}` : "",
    attribution?.landingPage ? `Landing page: ${attribution.landingPage}` : "",
    attribution?.referrer ? `Referrer: ${attribution.referrer}` : "",
    attribution?.currentUrl ? `Submitted from: ${attribution.currentUrl}` : "",
  ].filter(Boolean);

  return truncate(lines.join("\n"));
}

export async function captureLeadSquared(input: LeadCaptureInput) {
  const localEnv = readLocalEnv();
  const accessKey = envValue("LEADSQUARED_ACCESS_KEY", localEnv);
  const secretKey = envValue("LEADSQUARED_SECRET_KEY", localEnv);
  const host = envValue("LEADSQUARED_API_HOST", localEnv).replace(/\/$/, "");

  if (!accessKey || !secretKey || !host) {
    return;
  }

  const email = input.email.trim().toLowerCase();
  if (!email) return;

  const fields: LeadSquaredField[] = [];
  pushField(fields, "EmailAddress", email);
  pushField(fields, "FirstName", input.firstName);
  pushField(fields, "LastName", input.lastName);
  pushField(fields, "Phone", input.phone);
  pushField(fields, "Mobile", input.phone);
  pushField(fields, "Company", input.company);
  pushField(fields, "JobTitle", input.jobTitle);
  pushField(fields, "mx_Country", input.country);
  pushField(fields, "Source", input.attribution?.utmSource || input.source);
  pushField(fields, "SourceMedium", input.attribution?.utmMedium);
  pushField(fields, "SourceCampaign", input.attribution?.utmCampaign);
  pushField(fields, "Website", input.website || input.attribution?.currentUrl || input.attribution?.landingPage);
  pushField(fields, "Notes", buildNotes(input));

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(`${host}/LeadManagement.svc/Lead.Capture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-LSQ-AccessKey": accessKey,
        "x-LSQ-SecretKey": secretKey,
      },
      body: JSON.stringify(fields),
      signal: controller.signal,
    });

    const payload = (await response.json().catch(() => null)) as
      | { Status?: string; ExceptionMessage?: string; Message?: unknown }
      | null;

    if (!response.ok || payload?.Status === "Error") {
      console.error("LeadSquared capture failed:", response.status, payload?.ExceptionMessage || payload);
    }
  } catch (error) {
    console.error("LeadSquared capture failed:", error);
  } finally {
    clearTimeout(timeout);
  }
}
