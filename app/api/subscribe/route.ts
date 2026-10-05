import { NextResponse } from "next/server";
import { getEmailError } from "@/lib/form-validation";
import { normalizeAttribution } from "@/lib/lead-attribution";
import { captureLeadSquared } from "@/lib/leadsquared";
import { formMailErrorResponse, getFormInbox, sendFormMail, sendVisitorAck } from "@/lib/mailer";
import { buildSubscribeAckEmail, buildSubscribeNotificationEmail } from "@/lib/subscribe-email";

type SubscribeRequestBody = Partial<Record<"email" | "pageUrl" | "attribution", unknown>>;

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

  const attribution = normalizeAttribution(body.attribution);
  const inbox = getFormInbox();
  const { subject, html, text } = buildSubscribeNotificationEmail(email, pageUrl);

  try {
    await sendFormMail({
      to: inbox,
      replyTo: email,
      subject,
      text,
      html,
    });
  } catch (error) {
    const result = formMailErrorResponse(error, "Could not subscribe. Please try again.");
    return NextResponse.json({ error: result.error }, { status: result.status });
  }

  const ack = buildSubscribeAckEmail();

  await Promise.allSettled([
    sendVisitorAck({
      to: email,
      replyTo: inbox,
      subject: ack.subject,
      text: ack.text,
      html: ack.html,
    }),
    captureLeadSquared({
      email,
      source: "Website - Newsletter",
      website: pageUrl || attribution.currentUrl,
      notes: pageUrl ? `Subscribed from: ${pageUrl}` : "",
      attribution,
    }),
  ]);

  return NextResponse.json({ ok: true });
}
