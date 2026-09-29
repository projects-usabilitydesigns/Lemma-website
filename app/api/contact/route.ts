import { NextResponse } from "next/server";
import { buildContactAckEmail } from "@/lib/contact-ack-email";
import { buildContactRequestEmail } from "@/lib/contact-email";
import type { ContactAudienceId } from "@/lib/contact-data";
import { getEmailError, getPhoneError } from "@/lib/form-validation";
import { normalizeAttribution } from "@/lib/lead-attribution";
import { captureLeadSquared } from "@/lib/leadsquared";
import { formMailErrorResponse, getFormInbox, sendFormMail, sendVisitorAck } from "@/lib/mailer";
import type { ContactRequestPayload } from "@/lib/send-contact-request";

type ContactRequestBody = Partial<Record<keyof ContactRequestPayload | "attribution", unknown>>;

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

  const attribution = normalizeAttribution(body.attribution);
  const inbox = getFormInbox();
  const { subject, html, text } = buildContactRequestEmail(values);

  try {
    await sendFormMail({
      to: inbox,
      replyTo: values.email,
      subject,
      text,
      html,
    });
  } catch (error) {
    const result = formMailErrorResponse(error, "Could not send your message. Please try again.");
    return NextResponse.json({ error: result.error }, { status: result.status });
  }

  const ack = buildContactAckEmail({
    firstName: values.firstName,
    audience: values.audience,
  });

  await Promise.allSettled([
    sendVisitorAck({
      to: values.email,
      replyTo: inbox,
      subject: ack.subject,
      text: ack.text,
      html: ack.html,
    }),
    captureLeadSquared({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.mobile,
      company: values.company,
      jobTitle: values.designation,
      country: values.country,
      source: "Website - Contact",
      website: attribution.currentUrl || attribution.landingPage,
      notes: [
        `Audience: ${audience === "media-owners" ? "Media owner" : "Advertiser"}`,
        values.message ? `Message: ${values.message}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
      attribution,
    }),
  ]);

  return NextResponse.json({ ok: true });
}
