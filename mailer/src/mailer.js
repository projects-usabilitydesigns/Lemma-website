const path = require("path");
const nodemailer = require("nodemailer");
const { FORM_INBOX_EMAIL } = require("./inboxes");

const LOGO_CID = "lemma-logo";

function envValue(key) {
  return (process.env[key] || "").trim().replace(/^["']|["']$/g, "");
}

function getFormInbox() {
  return envValue("FORM_INBOX_EMAIL") || envValue("DEMO_INBOX_EMAIL") || FORM_INBOX_EMAIL;
}

async function sendFormMail({ to, replyTo, subject, text, html, files = [] }) {
  const smtpUser = envValue("SMTP_USER");
  const smtpPass = envValue("SMTP_PASS");

  if (!smtpUser || !smtpPass) {
    const error = new Error("Email sending is not configured. Set SMTP_USER and SMTP_PASS.");
    error.statusCode = 500;
    throw error;
  }

  const transporter = nodemailer.createTransport({
    host: envValue("SMTP_HOST") || "smtp.gmail.com",
    port: Number(envValue("SMTP_PORT") || 587),
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
        path: path.join(__dirname, "..", "assets", "logo-lemma.png"),
        cid: LOGO_CID,
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

module.exports = { envValue, getFormInbox, sendFormMail, LOGO_CID };
