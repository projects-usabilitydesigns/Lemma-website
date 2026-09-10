import { NextResponse } from "next/server";
import { buildContactRequestEmail } from "@/lib/contact-email";
import type { ContactAudienceId } from "@/lib/contact-data";
import { getEmailError, getPhoneError } from "@/lib/form-validation";
import { envValue, getFormInbox, readLocalEnv, sendFormMail } from "@/lib/mailer";
import type { ContactRequestPayload } from "@/lib/send-contact-request";

type ContactRequestBody = Partial<Record<keyof ContactRequestPayload, unknown>>;

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
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

  const localEnv = readLocalEnv();
  const smtpUser = envValue("SMTP_USER", localEnv);
  const smtpPass = envValue("SMTP_PASS", localEnv);

  if (!smtpUser || !smtpPass) {
    return NextResponse.json(
      { error: "Email sending is not configured yet. Add SMTP_USER and SMTP_PASS to .env.local." },
      { status: 500 },
    );
  }

  const { subject, html, text } = buildContactRequestEmail(values);

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

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Could not send your message. Please try again." },
      { status: 502 },
    );
  }
}
