import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { DEMO_LOGO_CID } from "@/lib/demo-email";
import { FORM_INBOX_EMAIL } from "@/lib/form-inbox";
import { JOBS_INBOX_EMAIL } from "@/lib/job-inbox";

export class MailConfigError extends Error {
  statusCode = 500;

  constructor(message: string) {
    super(message);
    this.name = "MailConfigError";
  }
}

function parseEnvFile(filePath: string) {
  try {
    const raw = fs.readFileSync(filePath, "utf8");
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

export function readLocalEnv() {
  const cwd = process.cwd();
  return {
    ...parseEnvFile(path.join(cwd, "local.env")),
    ...parseEnvFile(path.join(cwd, ".env.local")),
  };
}

export function envValue(key: string, localEnv: Record<string, string> = readLocalEnv()) {
  const fromProcess = process.env[key]?.trim().replace(/^["']|["']$/g, "");
  if (fromProcess) return fromProcess;
  return localEnv[key]?.trim().replace(/^["']|["']$/g, "") || "";
}

export function getFormInbox(localEnv: Record<string, string> = readLocalEnv()) {
  return (
    envValue("FORM_INBOX_EMAIL", localEnv) ||
    envValue("DEMO_INBOX_EMAIL", localEnv) ||
    FORM_INBOX_EMAIL
  );
}

export function getJobsInbox(localEnv: Record<string, string> = readLocalEnv()) {
  return (
    envValue("JOBS_INBOX_EMAIL", localEnv) ||
    envValue("SMTP_USER", localEnv) ||
    JOBS_INBOX_EMAIL
  );
}

export async function sendFormMail({
  to,
  replyTo,
  subject,
  text,
  html,
  files = [],
}: {
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
  files?: { filename: string; content: Buffer }[];
}) {
  const localEnv = readLocalEnv();
  const smtpUser = envValue("SMTP_USER", localEnv);
  const smtpPass = envValue("SMTP_PASS", localEnv);

  if (!smtpUser || !smtpPass) {
    throw new MailConfigError("Email sending is not configured. Set SMTP_USER and SMTP_PASS.");
  }

  const port = Number(envValue("SMTP_PORT", localEnv) || 587);
  const secure =
    envValue("SMTP_SECURE", localEnv) === "true" ||
    envValue("SMTP_SECURE", localEnv) === "1" ||
    port === 465;
  const fromAddress = envValue("SMTP_FROM", localEnv) || smtpUser;

  const transporter = nodemailer.createTransport({
    host: envValue("SMTP_HOST", localEnv) || "smtp.gmail.com",
    port,
    secure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const result = await transporter.sendMail({
    from: `"Lemma" <${fromAddress}>`,
    to,
    replyTo,
    subject,
    text,
    html,
    attachments: [
      {
        filename: "logo-lemma.png",
        path: path.join(process.cwd(), "public", "LEMMA®Logo.png"),
        cid: DEMO_LOGO_CID,
      },
      ...files,
    ],
  });

  return {
    to,
    messageId: result.messageId,
    accepted: result.accepted,
    rejected: result.rejected,
    response: result.response,
  };
}

export async function sendVisitorAck(options: {
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
}) {
  try {
    await sendFormMail(options);
  } catch (error) {
    console.error("Failed to send acknowledgment email:", error);
  }
}

export function formMailErrorResponse(error: unknown, fallback: string) {
  if (error instanceof MailConfigError) {
    return { error: error.message, status: error.statusCode };
  }
  console.error("Failed to send form email:", error);
  return { error: fallback, status: 502 };
}
