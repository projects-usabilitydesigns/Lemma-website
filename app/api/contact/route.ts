import { NextResponse } from "next/server";
import type { ContactAudienceId } from "@/lib/contact-data";
import { getEmailError, getPhoneError } from "@/lib/form-validation";
import { envValue, readLocalEnv } from "@/lib/mailer";
import type { ContactRequestPayload } from "@/lib/send-contact-request";

type ContactRequestBody = Partial<Record<keyof ContactRequestPayload, unknown>>;

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function mailerUrl(path: string) {
  const localEnv = readLocalEnv();
  const base = (envValue("MAILER_URL", localEnv) || "http://127.0.0.1:4000").replace(/\/$/, "");
  return `${base}${path}`;
}

export async function POST(request: Request) {
  let body: ContactRequestBody;

  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const audience: ContactAudienceId =
    body.audience === "media-owners" ? "media-owners" : "advertisers";

  const values: ContactRequestPayload = {
    firstName: asTrimmedString(body.firstName),
    lastName: asTrimmedString(body.lastName),
    company: asTrimmedString(body.company),
    email: asTrimmedString(body.email).toLowerCase(),
    designation: asTrimmedString(body.designation),
    message: asTrimmedString(body.message),
    country: asTrimmedString(body.country),
    mobile: asTrimmedString(body.mobile),
    audience,
  };

  if (!values.firstName || !values.lastName || !values.company || !values.email || !values.message || !values.country) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  }

  const emailError = getEmailError(values.email);
  if (emailError) return NextResponse.json({ error: emailError }, { status: 400 });

  const phoneError = getPhoneError(values.mobile, { required: true });
  if (phoneError) return NextResponse.json({ error: phoneError }, { status: 400 });

  try {
    const res = await fetch(mailerUrl("/api/contact"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = (await res.json().catch(() => null)) as { error?: string } | null;
    if (!res.ok) {
      return NextResponse.json(
        { error: data?.error || "Could not send your message. Please try again." },
        { status: res.status },
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Could not send your message. Please try again." },
      { status: 502 },
    );
  }
}
