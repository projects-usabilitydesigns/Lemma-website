import { NextResponse } from "next/server";
import { buildSubscribeAckEmail, buildSubscribeNotificationEmail } from "@/lib/subscribe-email";
import { getEmailError } from "@/lib/form-validation";
import { envValue, readLocalEnv, sendFormMail } from "@/lib/mailer";

type SubscribeRequestBody = Partial<Record<"email" | "pageUrl", unknown>>;

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
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

  const localEnv = readLocalEnv();
  const smtpUser = envValue("SMTP_USER", localEnv);
  const smtpPass = envValue("SMTP_PASS", localEnv);

  if (!smtpUser || !smtpPass) {
    return NextResponse.json(
      { error: "Email sending is not configured yet. Add SMTP_USER and SMTP_PASS to .env.local." },
      { status: 500 },
    );
  }

  const { subject, html, text } = buildSubscribeNotificationEmail(email, pageUrl);

  try {
    await sendFormMail({
      smtpUser,
      smtpPass,
      localEnv,
      to: smtpUser,
      replyTo: email,
      subject,
      text,
      html,
    });

    // Best-effort confirmation to the subscriber — a failure here must not
    // fail the subscription.
    try {
      const ack = buildSubscribeAckEmail();
      await sendFormMail({
        smtpUser,
        smtpPass,
        localEnv,
        to: email,
        replyTo: smtpUser,
        subject: ack.subject,
        text: ack.text,
        html: ack.html,
      });
    } catch (error) {
      console.error("Failed to send subscription confirmation email:", error);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Could not subscribe. Please try again." },
      { status: 502 },
    );
  }
}
