const DEMO_ACK_LOGO_CID = "lemma-logo";

const SITE_URL = "https://lemmamedia.com";

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function step(number, title, description) {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
      <tr>
        <td width="40" style="vertical-align:top;">
          <span style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:999px;background:#e8f6fd;color:#008fdb;font-size:14px;font-weight:700;">${number}</span>
        </td>
        <td style="vertical-align:top;">
          <p style="margin:0;color:#09131a;font-size:15px;font-weight:700;line-height:22px;">${escapeHtml(title)}</p>
          <p style="margin:2px 0 0;color:#586c7b;font-size:14px;line-height:21px;">${escapeHtml(description)}</p>
        </td>
      </tr>
    </table>
  `;
}

function buildDemoRequestAckEmail({ firstName, company }) {
  const name = String(firstName ?? "").trim();
  const org = String(company ?? "").trim();
  const subject = "Thanks for your interest in a Lemma demo";

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
                <img src="cid:${DEMO_ACK_LOGO_CID}" alt="Lemma" width="149" height="32" style="display:block;border:0;outline:none;height:32px;width:149px;" />
              </td>
            </tr>
            <tr>
              <td style="background:linear-gradient(135deg,#008fdb 0%,#009352 100%);padding:32px;">
                <p style="margin:0;color:#d7effa;font-size:11px;letter-spacing:1.6px;text-transform:uppercase;font-weight:700;">Demo request received</p>
                <h1 style="margin:8px 0 0;color:#ffffff;font-size:28px;line-height:34px;font-weight:700;">Thanks for your interest${name ? `, ${escapeHtml(name)}` : ""}!</h1>
              </td>
            </tr>
            <tr>
              <td style="background:#ffffff;padding:28px 32px;border-left:1px solid #e6eaee;border-right:1px solid #e6eaee;">
                <p style="margin:0;color:#09131a;font-size:16px;line-height:25px;">
                  We've received your request for a walkthrough${org ? ` for <strong>${escapeHtml(org)}</strong>` : ""}.
                  Our team is preparing a tailored look at the Lemma stack for you.
                </p>

                <p style="margin:28px 0 14px;color:#09131a;font-size:13px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;border-bottom:1px solid #eef2f4;padding-bottom:8px;">What happens next?</p>
                ${step("1", "Request review", "Our team reviews your goals and the markets you're interested in.")}
                ${step("2", "Scheduling call", "We'll reach out to schedule a time that works for you.")}
                ${step("3", "Tailored walkthrough", "You'll get a live demo focused on your use case and inventory.")}
              </td>
            </tr>
            <tr>
              <td style="background:#f8fafb;padding:18px 32px;border:1px solid #e6eaee;border-top:0;border-radius:0 0 16px 16px;color:#586c7b;font-size:12px;line-height:18px;">
                This is an automated message · <a href="${SITE_URL}" style="color:#008fdb;text-decoration:none;">lemmamedia.com</a>
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
    `Thanks for your interest in a Lemma demo${name ? `, ${name}` : ""}!`,
    ``,
    `We've received your request for a walkthrough${org ? ` for ${org}` : ""}. Our team is preparing a tailored look at the Lemma stack for you.`,
    ``,
    `What happens next?`,
    `1. Request review — Our team reviews your goals and the markets you're interested in.`,
    `2. Scheduling call — We'll reach out to schedule a time that works for you.`,
    `3. Tailored walkthrough — You'll get a live demo focused on your use case and inventory.`,
    ``,
    `This is an automated message from the Lemma website.`,
  ].join("\n");

  return { subject, html, text };
}

module.exports = { buildDemoRequestAckEmail };
