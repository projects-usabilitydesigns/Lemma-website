import { NextResponse } from "next/server";
import { getEmailError, getPhoneError } from "@/lib/form-validation";
import { buildJobApplicationAckEmail } from "@/lib/job-application-ack-email";
import { buildJobApplicationEmail } from "@/lib/job-application-email";
import { normalizeAttribution } from "@/lib/lead-attribution";
import { captureLeadSquared } from "@/lib/leadsquared";
import { formMailErrorResponse, getJobsInbox, sendFormMail, sendVisitorAck } from "@/lib/mailer";

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

const MAX_CV_SIZE = 5 * 1024 * 1024;
const ALLOWED_CV_EXTENSIONS = [".pdf", ".doc", ".docx"];

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
  const phone = get("phone");
  const company = get("company");
  const message = get("message");
  const jobId = get("jobId");
  const pageUrl = get("pageUrl");

  if (!firstName || !lastName || !email || !jobTitle) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  }

  const emailError = getEmailError(email, { requireWorkEmail: false });
  if (emailError) return NextResponse.json({ error: emailError }, { status: 400 });

  const phoneError = getPhoneError(phone, { required: false });
  if (phoneError) return NextResponse.json({ error: phoneError }, { status: 400 });

  let cvFilename = "";
  let cvFiles: { filename: string; content: Buffer }[] = [];

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
    cvFilename = file.name;
    cvFiles = [{ filename: file.name, content: Buffer.from(await file.arrayBuffer()) }];
  }

  let attributionRaw: unknown = get("attribution");
  try {
    attributionRaw = attributionRaw ? JSON.parse(String(attributionRaw)) : {};
  } catch {
    attributionRaw = {};
  }
  const attribution = normalizeAttribution(attributionRaw);

  const values = {
    firstName,
    lastName,
    email,
    phone,
    company,
    message,
    jobTitle,
    jobId,
    pageUrl,
    cvFilename,
  };

  const inbox = getJobsInbox();
  const { subject, html, text } = buildJobApplicationEmail(values);

  try {
    await sendFormMail({
      to: inbox,
      replyTo: email,
      subject,
      text,
      html,
      files: cvFiles,
    });
  } catch (error) {
    const result = formMailErrorResponse(error, "Could not send your application. Please try again.");
    return NextResponse.json({ error: result.error }, { status: result.status });
  }

  const ack = buildJobApplicationAckEmail({
    firstName,
    jobTitle,
    cvFilename: cvFilename || undefined,
  });

  await Promise.allSettled([
    sendVisitorAck({
      to: email,
      replyTo: inbox,
      subject: ack.subject,
      text: ack.text,
      html: ack.html,
    }),
    captureLeadSquared({
      firstName,
      lastName,
      email,
      phone,
      company,
      jobTitle,
      source: "Website - Careers",
      website: pageUrl || attribution.currentUrl,
      notes: [
        jobTitle ? `Role: ${jobTitle}` : "",
        jobId ? `Job ID: ${jobId}` : "",
        cvFilename ? `CV: ${cvFilename}` : "",
        message ? `Message: ${message}` : "",
        pageUrl ? `Page: ${pageUrl}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
      attribution,
    }),
  ]);

  return NextResponse.json({ ok: true });
}
