import type { ContactRequestPayload } from "@/lib/send-contact-request";
import { DEMO_LOGO_CID } from "@/lib/demo-email";

const SITE_URL = "https://lemmamedia.com";

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

export function buildContactRequestEmail(values: ContactRequestPayload) {
  const firstName = values.firstName.trim();
  const lastName = values.lastName.trim();
  const fullName = `${firstName} ${lastName}`.trim();
  const email = values.email.trim();
  const company = values.company.trim();
  const mobile = values.mobile.trim();
  const message = values.message.trim();
  const audienceLabel = values.audience === "media-owners" ? "Media owner" : "Advertiser";
  const subject = `New contact message from ${fullName} (${company})`;

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
                    <td height="5" width="20%" style="background:#008fdb;font-size:0;line-height:0;">&nbsp;</td>
                    <td height="5" width="20%" style="background:#005481;font-size:0;line-height:0;">&nbsp;</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="background:#09131a;padding:28px 32px;">
                <img src="cid:${DEMO_LOGO_CID}" alt="Lemma" width="149" height="32" style="display:block;border:0;outline:none;height:32px;width:149px;" />
              </td>
            </tr>
            <tr>
              <td style="background:#008fdb;padding:28px 32px;">
                <p style="margin:0;color:#d7effa;font-size:11px;letter-spacing:1.6px;text-transform:uppercase;font-weight:700;">New contact message</p>
                <h1 style="margin:8px 0 0;color:#ffffff;font-size:26px;line-height:32px;font-weight:700;">${escapeHtml(fullName)} reached out</h1>
                <p style="margin:10px 0 0;color:#e8f6fd;font-size:15px;line-height:22px;">${escapeHtml(company)}${values.designation.trim() ? ` · ${escapeHtml(values.designation.trim())}` : ""} · ${escapeHtml(audienceLabel)}</p>
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
                  ${row("Mobile", mobile ? `<a href="tel:${escapeHtml(mobile)}" style="color:#008fdb;text-decoration:none;">${escapeHtml(mobile)}</a>` : "—")}
                  <tr>
                    <td colspan="2" style="padding:20px 0 8px;color:#09131a;font-size:13px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;border-bottom:1px solid #eef2f4;">Company</td>
                  </tr>
                  ${row("Company", displayValue(company))}
                  ${row("Designation", displayValue(values.designation))}
                  ${row("Country", displayValue(values.country))}
                  ${row("I am a", escapeHtml(audienceLabel))}
                  <tr>
                    <td colspan="2" style="padding:20px 0 8px;color:#09131a;font-size:13px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;border-bottom:1px solid #eef2f4;">Message</td>
                  </tr>
                  <tr>
                    <td colspan="2" style="padding:10px 0;color:#09131a;font-size:14px;line-height:22px;vertical-align:top;">${messageHtml}</td>
                  </tr>
                </table>
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                  <tr>
                    <td style="border-radius:999px;background:#008fdb;">
                      <a href="mailto:${escapeHtml(email)}?subject=${encodeURIComponent(`Re: Lemma contact from ${fullName}`)}" style="display:inline-block;padding:12px 22px;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;">Reply to ${escapeHtml(firstName || "them")}</a>
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
    `New Lemma contact message`,
    `${fullName} reached out`,
    "",
    `Name: ${fullName}`,
    `Work email: ${email}`,
    `Mobile: ${mobile || "—"}`,
    `Company: ${company}`,
    `Designation: ${values.designation.trim() || "—"}`,
    `Country: ${values.country.trim() || "—"}`,
    `I am a: ${audienceLabel}`,
    `Message: ${message || "—"}`,
  ].join("\n");

  return { subject, html, text };
}
