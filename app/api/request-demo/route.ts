import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { buildDemoRequestEmail, DEMO_LOGO_CID } from "@/lib/demo-email";
import { getEmailError, getPhoneError } from "@/lib/form-validation";
import { DEMO_INBOX_EMAIL, type DemoRequestPayload } from "@/lib/send-demo-request";

function readLocalEnv() {
  try {
    const raw = fs.readFileSync(path.join(process.cwd(), ".env.local"), "utf8");
    const parsed: Record<string, string> = {};

    for (const line of raw.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const separator = trimmed.indexOf("=");
      if (separator === -1) continue;
      parsed[trimmed.slice(0, separator)] = trimmed.slice(separator + 1).trim();
    }

    return parsed;
  } catch {
    return {};
  }
}

function envValue(key: string, localEnv: Record<string, string>) {
  const fromFile = localEnv[key]?.trim().replace(/^["']|["']$/g, "");
  if (fromFile) return fromFile;
  return process.env[key]?.trim().replace(/^["']|["']$/g, "") || "";
}

type DemoRequestBody = Partial<Record<keyof DemoRequestPayload | "consent", unknown>>;

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function asStringList(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string" && item.trim().length > 0);
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

  const localEnv = readLocalEnv();
  const smtpUser = envValue("SMTP_USER", localEnv);
  const smtpPass = envValue("SMTP_PASS", localEnv);

  if (!smtpUser || !smtpPass) {
    return NextResponse.json(
      { error: "Email sending is not configured yet. Add SMTP_USER and SMTP_PASS to .env.local." },
      { status: 500 },
    );
  }

  const { subject, html, text } = buildDemoRequestEmail(values);
  const inbox = envValue("DEMO_INBOX_EMAIL", localEnv) || DEMO_INBOX_EMAIL;

  try {
    const transporter = nodemailer.createTransport({
      host: envValue("SMTP_HOST", localEnv) || "smtp.gmail.com",
      port: Number(envValue("SMTP_PORT", localEnv) || 587),
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"Lemma" <${smtpUser}>`,
      to: inbox,
      replyTo: values.email,
      subject,
      text,
      html,
      attachments: [
        {
          filename: "logo-lemma.png",
          path: path.join(process.cwd(), "public/images/logo-lemma.png"),
          cid: DEMO_LOGO_CID,
        },
      ],
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Could not send your request. Please try again." },
      { status: 502 },
    );
  }
}
