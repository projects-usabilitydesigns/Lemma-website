import { NextResponse } from "next/server";
import { buildJobApplicationAckEmail } from "@/lib/job-application-ack-email";
import { buildJobApplicationEmail } from "@/lib/job-application-email";
import { getEmailError, getPhoneError } from "@/lib/form-validation";
import { JOBS_INBOX_EMAIL } from "@/lib/job-inbox";
import { envValue, readLocalEnv, sendFormMail } from "@/lib/mailer";
import type { JobApplicationPayload } from "@/lib/send-job-application";

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+\d][\d\s()-]{6,}$/;
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

  const values: JobApplicationPayload = {
    firstName: get("firstName"),
    lastName: get("lastName"),
    email: get("email").toLowerCase(),
    phone: get("phone"),
    company: get("company"),
    message: get("message"),
    jobTitle: get("jobTitle"),
    jobId: get("jobId"),
    pageUrl: get("pageUrl"),
    cvFilename: "",
  };

  if (!values.firstName || !values.lastName || !values.email || !values.jobTitle) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(values.email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  if (values.phone && !PHONE_PATTERN.test(values.phone)) {
    return NextResponse.json({ error: "Enter a valid phone number." }, { status: 400 });
  }

  const emailError = getEmailError(values.email, { requireWorkEmail: false });
  if (emailError) return NextResponse.json({ error: emailError }, { status: 400 });

  const phoneError = getPhoneError(values.phone, { required: false });
  if (phoneError) return NextResponse.json({ error: phoneError }, { status: 400 });

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
    values.cvFilename = file.name;
    cvFiles = [{ filename: file.name, content: Buffer.from(await file.arrayBuffer()) }];
  }

  const localEnv = readLocalEnv();
  const smtpUser = envValue("SMTP_USER", localEnv);
  const smtpPass = envValue("SMTP_PASS", localEnv);

  if (!smtpUser || !smtpPass) {
    return NextResponse.json(
      { error: "Email sending is not configured yet. Add SMTP_USER and SMTP_PASS to .env.local." },
      { status: 500 },
    );
  }

  const { subject, html, text } = buildJobApplicationEmail(values);

  try {
    await sendFormMail({
      smtpUser,
      smtpPass,
      localEnv,
      to: envValue("JOBS_INBOX_EMAIL", localEnv) || smtpUser || JOBS_INBOX_EMAIL,
      replyTo: values.email,
      subject,
      text,
      html,
      files: cvFiles,
    });

    // Best-effort acknowledgment to the candidate — a failure here must not
    // fail the application, the team email is the source of truth.
    try {
      const ack = buildJobApplicationAckEmail({
        firstName: values.firstName,
        jobTitle: values.jobTitle,
        cvFilename: values.cvFilename || undefined,
      });
      await sendFormMail({
        smtpUser,
        smtpPass,
        localEnv,
        to: values.email,
        replyTo: envValue("JOBS_INBOX_EMAIL", localEnv) || smtpUser || JOBS_INBOX_EMAIL,
        subject: ack.subject,
        text: ack.text,
        html: ack.html,
      });
    } catch (error) {
      console.error("Failed to send acknowledgment email to candidate:", error);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Could not send your application. Please try again." },
      { status: 502 },
    );
  }
}
