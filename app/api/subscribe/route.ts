import { NextResponse } from "next/server";
import { getEmailError } from "@/lib/form-validation";
import { envValue, readLocalEnv } from "@/lib/mailer";

type SubscribeRequestBody = Partial<Record<"email" | "pageUrl", unknown>>;

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function mailerUrl(path: string) {
  const localEnv = readLocalEnv();
  const base = (envValue("MAILER_URL", localEnv) || "http://127.0.0.1:4000").replace(/\/$/, "");
  return `${base}${path}`;
}

export async function POST(request: Request) {
  let body: SubscribeRequestBody;

  try {
    body = (await request.json()) as SubscribeRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const email = asTrimmedString(body.email).toLowerCase();
  const pageUrl = asTrimmedString(body.pageUrl);

  const emailError = getEmailError(email, { requireWorkEmail: false });
  if (emailError) return NextResponse.json({ error: emailError }, { status: 400 });

  try {
    const res = await fetch(mailerUrl("/api/subscribe"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, pageUrl }),
    });
    const data = (await res.json().catch(() => null)) as { error?: string } | null;
    if (!res.ok) {
      return NextResponse.json(
        { error: data?.error || "Could not subscribe. Please try again." },
        { status: res.status },
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Could not subscribe. Please try again." },
      { status: 502 },
    );
  }
}
