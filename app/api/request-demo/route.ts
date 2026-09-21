import { NextResponse } from "next/server";
import { getEmailError, getPhoneError } from "@/lib/form-validation";
import { envValue, readLocalEnv } from "@/lib/mailer";
import type { DemoRequestPayload } from "@/lib/send-demo-request";

type DemoRequestBody = Partial<Record<keyof DemoRequestPayload | "consent", unknown>>;

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function asStringList(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string" && item.trim().length > 0);
}

function mailerUrl(path: string) {
  const localEnv = readLocalEnv();
  const base = (envValue("MAILER_URL", localEnv) || "http://127.0.0.1:4000").replace(/\/$/, "");
  return `${base}${path}`;
}

export async function POST(request: Request) {
  let body: DemoRequestBody;

  try {
    body = (await request.json()) as DemoRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const values: DemoRequestPayload = {
    firstName: asTrimmedString(body.firstName),
    lastName: asTrimmedString(body.lastName),
    email: asTrimmedString(body.email).toLowerCase(),
    company: asTrimmedString(body.company),
    jobTitle: asTrimmedString(body.jobTitle),
    phone: asTrimmedString(body.phone),
    role: asTrimmedString(body.role),
    region: asTrimmedString(body.region),
    interests: asStringList(body.interests),
    message: asTrimmedString(body.message),
    pageUrl: asTrimmedString(body.pageUrl),
  };

  if (!values.firstName || !values.lastName || !values.email || !values.company || !values.role || body.consent !== true) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  }

  const emailError = getEmailError(values.email, { requireWorkEmail: true });
  if (emailError) return NextResponse.json({ error: emailError }, { status: 400 });

  const phoneError = getPhoneError(values.phone, { required: true });
  if (phoneError) return NextResponse.json({ error: phoneError }, { status: 400 });

  try {
    const res = await fetch(mailerUrl("/api/request-demo"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, consent: body.consent }),
    });
    const data = (await res.json().catch(() => null)) as { error?: string } | null;
    if (!res.ok) {
      return NextResponse.json(
        { error: data?.error || "Could not send your request. Please try again." },
        { status: res.status },
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Could not send your request. Please try again." },
      { status: 502 },
    );
  }
}
