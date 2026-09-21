const SUBSCRIBE_LOGO_CID = "lemma-logo";

const SITE_URL = "https://lemmamedia.com";

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function sanitizePageUrl(value) {
  try {
    const url = new URL(value);
    if (url.protocol !== "http:" && url.protocol !== "https:") return "";
    return url.toString();
  } catch {
    return "";
  }
}

function buildSubscribeNotificationEmail(email, pageUrl) {
  const subscriber = String(email ?? "").trim().toLowerCase();
  const page = sanitizePageUrl(pageUrl);
  const subject = `New Lemma Insights subscriber — ${subscriber}`;

  const pageUrlHtml = page
    ? `<a href="${escapeHtml(page)}" style="color:#008fdb;text-decoration:none;word-break:break-all;">${escapeHtml(page)}</a>`
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
                <img src="cid:${SUBSCRIBE_LOGO_CID}" alt="Lemma" width="149" height="32" style="display:block;border:0;outline:none;height:32px;width:149px;" />
              </td>
            </tr>
            <tr>
              <td style="background:#008fdb;padding:28px 32px;">
                <p style="margin:0;color:#d7effa;font-size:11px;letter-spacing:1.6px;text-transform:uppercase;font-weight:700;">New subscriber</p>
                <h1 style="margin:8px 0 0;color:#ffffff;font-size:26px;line-height:32px;font-weight:700;">Someone subscribed to Lemma Insights</h1>
              </td>
            </tr>
            <tr>
              <td style="background:#ffffff;padding:8px 32px 28px;border-left:1px solid #e6eaee;border-right:1px solid #e6eaee;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 0;width:140px;color:#586c7b;font-size:13px;line-height:20px;vertical-align:top;">Email</td>
                    <td style="padding:10px 0;color:#09131a;font-size:14px;line-height:22px;font-weight:600;vertical-align:top;"><a href="mailto:${escapeHtml(subscriber)}" style="color:#008fdb;text-decoration:none;">${escapeHtml(subscriber)}</a></td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;width:140px;color:#586c7b;font-size:13px;line-height:20px;vertical-align:top;">Subscribed from</td>
                    <td style="padding:10px 0;color:#09131a;font-size:14px;line-height:22px;vertical-align:top;">${pageUrlHtml}</td>
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
    `New Lemma Insights subscriber`,
    ``,
    `Email: ${subscriber}`,
    `Subscribed from: ${page || "—"}`,
  ].join("\n");

  return { subject, html, text };
}

function buildSubscribeAckEmail() {
  const subject = "You're subscribed to Lemma Insights";

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
                <img src="cid:${SUBSCRIBE_LOGO_CID}" alt="Lemma" width="149" height="32" style="display:block;border:0;outline:none;height:32px;width:149px;" />
              </td>
            </tr>
            <tr>
              <td style="background:linear-gradient(135deg,#008fdb 0%,#009352 100%);padding:32px;">
                <p style="margin:0;color:#d7effa;font-size:11px;letter-spacing:1.6px;text-transform:uppercase;font-weight:700;">Newsletter</p>
                <h1 style="margin:8px 0 0;color:#ffffff;font-size:28px;line-height:34px;font-weight:700;">You're in!</h1>
              </td>
            </tr>
            <tr>
              <td style="background:#ffffff;padding:28px 32px;border-left:1px solid #e6eaee;border-right:1px solid #e6eaee;">
                <p style="margin:0;color:#09131a;font-size:16px;line-height:25px;">
                  Thanks for subscribing to <strong>Lemma Insights</strong>. You'll receive practical notes on
                  DOOH, CTV, and omnichannel measurement — no noise.
                </p>
                <p style="margin:16px 0 0;color:#09131a;font-size:16px;line-height:25px;">
                  Watch your inbox for the next briefing.
                </p>
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
    `You're subscribed to Lemma Insights`,
    ``,
    `Thanks for subscribing to Lemma Insights. You'll receive practical notes on DOOH, CTV, and omnichannel measurement — no noise.`,
    ``,
    `Watch your inbox for the next briefing.`,
  ].join("\n");

  return { subject, html, text };
}

module.exports = { buildSubscribeNotificationEmail, buildSubscribeAckEmail };
