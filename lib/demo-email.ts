import type { DemoRequestPayload } from "@/lib/send-demo-request";

const SITE_URL = "https://lemmamedia.com";
export const DEMO_LOGO_CID = "lemma-logo";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function displayValue(value: string) {
  const trimmed = value.trim();
  return trimmed ? escapeHtml(trimmed) : "—";
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 0;width:140px;color:#586c7b;font-size:13px;line-height:20px;vertical-align:top;">${label}</td>
      <td style="padding:10px 0;color:#09131a;font-size:14px;line-height:22px;font-weight:600;vertical-align:top;">${value}</td>
    </tr>
  `;
}

function interestPills(interests: string[]) {
  if (!interests.length) return "—";

  return interests
    .map(
      (interest) => `
        <span style="display:inline-block;margin:0 6px 6px 0;padding:6px 10px;border-radius:999px;background:#e8f6fd;color:#005481;font-size:12px;font-weight:600;line-height:16px;">
          ${escapeHtml(interest)}
        </span>
      `,
    )
    .join("");
}

export function buildDemoRequestEmail(values: DemoRequestPayload) {
  const firstName = values.firstName.trim();
  const lastName = values.lastName.trim();
  const fullName = `${firstName} ${lastName}`.trim();
  const email = values.email.trim();
  const company = values.company.trim();
  const phone = values.phone.trim();
  const message = values.message.trim();
  const subject = `New demo request from ${fullName} (${company})`;

  const messageHtml = message
    ? escapeHtml(message).replaceAll("\n", "<br>")
    : "—";

  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(subject)}</title>
  </head>
  <body style="margin:0;padding:0;background:#f3f6f8;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f6f8;padding:32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;">
            <tr>
              <td>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td height="5" width="20%" style="background:#009352;font-size:0;line-height:0;">&nbsp;</td>
                    <td height="5" width="20%" style="background:#74be44;font-size:0;line-height:0;">&nbsp;</td>
                    <td height="5" width="20%" style="background:#1581c5;font-size:0;line-height:0;">&nbsp;</td>
                    <td height="5" width="20%" style="background:#ed2e80;font-size:0;line-height:0;">&nbsp;</td>
                    <td height="5" width="20%" style="background:#f05a27;font-size:0;line-height:0;">&nbsp;</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="background:#09131a;padding:28px 32px;">
                <img src="cid:${DEMO_LOGO_CID}" alt="Lemma" width="148" height="32" style="display:block;border:0;outline:none;height:32px;width:148px;" />
              </td>
            </tr>
            <tr>
              <td style="background:#008fdb;padding:28px 32px;">
                <p style="margin:0;color:#d7effa;font-size:11px;letter-spacing:1.6px;text-transform:uppercase;font-weight:700;">New demo request</p>
                <h1 style="margin:8px 0 0;color:#ffffff;font-size:26px;line-height:32px;font-weight:700;">${escapeHtml(fullName)} wants a walkthrough</h1>
                <p style="margin:10px 0 0;color:#e8f6fd;font-size:15px;line-height:22px;">${escapeHtml(company)}${values.role.trim() ? ` · ${escapeHtml(values.role.trim())}` : ""}</p>
              </td>
            </tr>
            <tr>
              <td style="background:#ffffff;padding:8px 32px 28px;border-left:1px solid #e6eaee;border-right:1px solid #e6eaee;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                  <tr>
                    <td colspan="2" style="padding:20px 0 8px;color:#09131a;font-size:13px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;border-bottom:1px solid #eef2f4;">Contact</td>
                  </tr>
                  ${row("Name", escapeHtml(fullName))}
                  ${row("Work email", `<a href="mailto:${escapeHtml(email)}" style="color:#008fdb;text-decoration:none;">${escapeHtml(email)}</a>`)}
                  ${row("Phone", phone ? `<a href="tel:${escapeHtml(phone)}" style="color:#008fdb;text-decoration:none;">${escapeHtml(phone)}</a>` : "—")}
                  <tr>
                    <td colspan="2" style="padding:20px 0 8px;color:#09131a;font-size:13px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;border-bottom:1px solid #eef2f4;">Company</td>
                  </tr>
                  ${row("Company", displayValue(company))}
                  ${row("Job title", displayValue(values.jobTitle))}
                  ${row("I am a", displayValue(values.role))}
                  ${row("Region", displayValue(values.region))}
                  <tr>
                    <td colspan="2" style="padding:20px 0 8px;color:#09131a;font-size:13px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;border-bottom:1px solid #eef2f4;">Request</td>
                  </tr>
                  ${row("Interested in", interestPills(values.interests))}
                  <tr>
                    <td style="padding:10px 0;width:140px;color:#586c7b;font-size:13px;line-height:20px;vertical-align:top;">Message</td>
                    <td style="padding:10px 0;color:#09131a;font-size:14px;line-height:22px;vertical-align:top;">${messageHtml}</td>
                  </tr>
                </table>
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                  <tr>
                    <td style="border-radius:999px;background:#008fdb;">
                      <a href="mailto:${escapeHtml(email)}?subject=${encodeURIComponent(`Re: Lemma demo request from ${fullName}`)}" style="display:inline-block;padding:12px 22px;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;">Reply to ${escapeHtml(firstName || "them")}</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="background:#f8fafb;padding:18px 32px;border:1px solid #e6eaee;border-top:0;border-radius:0 0 16px 16px;color:#586c7b;font-size:12px;line-height:18px;">
                Sent from the Lemma website · <a href="${SITE_URL}" style="color:#008fdb;text-decoration:none;">lemmamedia.com</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim();

  const text = [
    `New Lemma demo request`,
    `${fullName} wants a walkthrough`,
    "",
    `Name: ${fullName}`,
    `Work email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Company: ${company}`,
    `Job title: ${values.jobTitle.trim() || "—"}`,
    `I am a: ${values.role.trim() || "—"}`,
    `Region: ${values.region.trim() || "—"}`,
    `Interested in: ${values.interests.length ? values.interests.join(", ") : "—"}`,
    `Message: ${message || "—"}`,
  ].join("\n");

  return { subject, html, text };
}
