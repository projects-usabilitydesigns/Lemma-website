import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { DEMO_LOGO_CID } from "@/lib/demo-email";
import { FORM_INBOX_EMAIL } from "@/lib/form-inbox";

export function readLocalEnv() {
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

export function envValue(key: string, localEnv: Record<string, string>) {
  const fromFile = localEnv[key]?.trim().replace(/^["']|["']$/g, "");
  if (fromFile) return fromFile;
  return process.env[key]?.trim().replace(/^["']|["']$/g, "") || "";
}

export function getFormInbox(localEnv: Record<string, string>) {
  return (
    envValue("FORM_INBOX_EMAIL", localEnv) ||
    envValue("DEMO_INBOX_EMAIL", localEnv) ||
    FORM_INBOX_EMAIL
  );
}

export async function sendFormMail({
  smtpUser,
  smtpPass,
  localEnv,
  to,
  replyTo,
  subject,
  text,
  html,
}: {
  smtpUser: string;
  smtpPass: string;
  localEnv: Record<string, string>;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
}) {
  const transporter = nodemailer.createTransport({
    host: envValue("SMTP_HOST", localEnv) || "smtp.gmail.com",
    port: Number(envValue("SMTP_PORT", localEnv) || 587),
    secure: false,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const result = await transporter.sendMail({
    from: `"Lemma" <${smtpUser}>`,
    to,
    replyTo,
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

  return {
    to,
    messageId: result.messageId,
    accepted: result.accepted,
    rejected: result.rejected,
    response: result.response,
  };
}
