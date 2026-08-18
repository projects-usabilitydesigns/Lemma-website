export const DEMO_INBOX_EMAIL = "shreyadasnam@gmail.com";

export type DemoRequestPayload = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  phone: string;
  role: string;
  region: string;
  interests: string[];
  message: string;
};

export async function sendDemoRequest(values: DemoRequestPayload & { consent: boolean }) {
  const response = await fetch("/api/request-demo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  const result = (await response.json().catch(() => null)) as { error?: string } | null;

  if (!response.ok) {
    throw new Error(result?.error || "Could not send your request. Please try again.");
  }
}
