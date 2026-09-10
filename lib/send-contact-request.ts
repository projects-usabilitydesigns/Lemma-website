import type { ContactAudienceId } from "@/lib/contact-data";

export type ContactRequestPayload = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  designation: string;
  message: string;
  country: string;
  mobile: string;
  audience: ContactAudienceId;
};

export async function sendContactRequest(values: ContactRequestPayload) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  const result = (await response.json().catch(() => null)) as { error?: string } | null;

  if (!response.ok) {
    throw new Error(result?.error || "Could not send your message. Please try again.");
  }
}
