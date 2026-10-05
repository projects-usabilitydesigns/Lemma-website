import { NextResponse } from "next/server";
import { buildDemoRequestEmail } from "@/lib/demo-email";
import { buildDemoRequestAckEmail } from "@/lib/demo-request-ack-email";
import { getEmailError, getPhoneError } from "@/lib/form-validation";
import { normalizeAttribution } from "@/lib/lead-attribution";
import { captureLeadSquared } from "@/lib/leadsquared";
import { formMailErrorResponse, getFormInbox, sendFormMail, sendVisitorAck } from "@/lib/mailer";
import type { DemoRequestPayload } from "@/lib/send-demo-request";

type DemoRequestBody = Partial<Record<keyof DemoRequestPayload | "consent" | "attribution", unknown>>;

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

  const attribution = normalizeAttribution(body.attribution);
  const inbox = getFormInbox();
  const { subject, html, text } = buildDemoRequestEmail(values);

  try {
    await sendFormMail({
      to: inbox,
      replyTo: values.email,
      subject,
      text,
      html,
    });
  } catch (error) {
    const result = formMailErrorResponse(error, "Could not send your request. Please try again.");
    return NextResponse.json({ error: result.error }, { status: result.status });
  }

  const ack = buildDemoRequestAckEmail({
    firstName: values.firstName,
    company: values.company,
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
      phone: values.phone,
      company: values.company,
      jobTitle: values.jobTitle,
      source: "Website - Request Demo",
      website: values.pageUrl || attribution.currentUrl,
      notes: [
        values.role ? `I am a: ${values.role}` : "",
        values.region ? `Region: ${values.region}` : "",
        values.interests.length ? `Interests: ${values.interests.join(", ")}` : "",
        values.message ? `Message: ${values.message}` : "",
        values.pageUrl ? `Page: ${values.pageUrl}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
      attribution,
    }),
  ]);

  return NextResponse.json({ ok: true });
}
