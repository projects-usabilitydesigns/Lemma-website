const express = require("express");
const router = express.Router();
const {
  buildSubscribeAckEmail,
  buildSubscribeNotificationEmail,
} = require("../templates/subscribe-email");
const { getEmailError } = require("../validation");
const { envValue, sendFormMail } = require("../mailer");

function asTrimmedString(value) {
  return typeof value === "string" ? value.trim() : "";
}

router.post("/", async (req, res) => {
  const body = req.body || {};

  const email = asTrimmedString(body.email).toLowerCase();
  const pageUrl = asTrimmedString(body.pageUrl);

  const emailError = getEmailError(email, { requireWorkEmail: false });
  if (emailError) return res.status(400).json({ error: emailError });

  const { subject, html, text } = buildSubscribeNotificationEmail(email, pageUrl);

  try {
    // Subscriber list notifications go to the sending account for now.
    await sendFormMail({
      to: envValue("SMTP_USER"),
      replyTo: email,
      subject,
      text,
      html,
    });

    // Best-effort confirmation to the subscriber — a failure here must not
    // fail the subscription.
    try {
      const ack = buildSubscribeAckEmail();
      await sendFormMail({
        to: email,
        replyTo: envValue("SMTP_USER"),
        subject: ack.subject,
        text: ack.text,
        html: ack.html,
      });
    } catch (error) {
      console.error("Failed to send subscription confirmation email:", error);
    }

    return res.json({ ok: true });
  } catch (error) {
    if (error && error.statusCode) return res.status(error.statusCode).json({ error: error.message });
    return res.status(502).json({ error: "Could not subscribe. Please try again." });
  }
});

module.exports = router;
