import { NextResponse } from "next/server";
import { buildDemoRequestAckEmail } from "@/lib/demo-request-ack-email";
import { buildDemoRequestEmail } from "@/lib/demo-email";
import { getEmailError, getPhoneError } from "@/lib/form-validation";
import { envValue, getFormInbox, readLocalEnv, sendFormMail } from "@/lib/mailer";
import type { DemoRequestPayload } from "@/lib/send-demo-request";

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

  try {
    await sendFormMail({
      smtpUser,
      smtpPass,
      localEnv,
      to: getFormInbox(localEnv),
      replyTo: values.email,
      subject,
      text,
      html,
    });

    // Best-effort acknowledgment to the visitor — a failure here must not
    // fail the request, the team email is the source of truth.
    try {
      const ack = buildDemoRequestAckEmail({
        firstName: values.firstName,
        company: values.company,
      });
      await sendFormMail({
        smtpUser,
        smtpPass,
        localEnv,
        to: values.email,
        replyTo: getFormInbox(localEnv),
        subject: ack.subject,
        text: ack.text,
        html: ack.html,
      });
    } catch (error) {
      console.error("Failed to send demo request acknowledgment email:", error);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Could not send your request. Please try again." },
      { status: 502 },
    );
  }
}
