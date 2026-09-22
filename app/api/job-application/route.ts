import { NextResponse } from "next/server";
import { envValue, readLocalEnv } from "@/lib/mailer";

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+\d][\d\s()-]{6,}$/;
const MAX_CV_SIZE = 5 * 1024 * 1024;
const ALLOWED_CV_EXTENSIONS = [".pdf", ".doc", ".docx"];

function mailerUrl(path: string) {
  const localEnv = readLocalEnv();
  const base = (envValue("MAILER_URL", localEnv) || "http://127.0.0.1:4000").replace(/\/$/, "");
  return `${base}${path}`;
}

export async function POST(request: Request) {
  let form: FormData;

  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const get = (key: string) => asTrimmedString(form.get(key));
  const consent = form.get("consent");
  const rawCv = form.get("cv");

  if (consent !== "true") {
    return NextResponse.json({ error: "Please accept the privacy policy to continue." }, { status: 400 });
  }

  const firstName = get("firstName");
  const lastName = get("lastName");
  const email = get("email").toLowerCase();
  const jobTitle = get("jobTitle");

  if (!firstName || !lastName || !email || !jobTitle) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const phone = get("phone");
  if (phone && !PHONE_PATTERN.test(phone)) {
    return NextResponse.json({ error: "Enter a valid phone number." }, { status: 400 });
  }

  if (rawCv && typeof rawCv !== "string") {
    const file = rawCv as File;
    const extension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
    if (!ALLOWED_CV_EXTENSIONS.includes(extension)) {
      return NextResponse.json(
        { error: "Please attach your CV as a PDF, DOC, or DOCX file." },
        { status: 400 },
      );
    }
    if (file.size > MAX_CV_SIZE) {
      return NextResponse.json({ error: "Your CV must be smaller than 5 MB." }, { status: 400 });
    }
  }

  try {
    const forward = new FormData();
    for (const [key, value] of form.entries()) {
      forward.append(key, value);
    }
    const res = await fetch(mailerUrl("/api/job-application"), {
      method: "POST",
      body: forward,
    });
    const data = (await res.json().catch(() => null)) as { error?: string } | null;
    if (!res.ok) {
      return NextResponse.json(
        { error: data?.error || "Could not send your application. Please try again." },
        { status: res.status },
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Could not send your application. Please try again." },
      { status: 502 },
    );
  }
}
