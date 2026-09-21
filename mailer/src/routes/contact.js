const express = require("express");
const router = express.Router();
const { buildContactRequestEmail } = require("../templates/contact-email");
const { buildContactAckEmail } = require("../templates/contact-ack-email");
const { getEmailError, getPhoneError } = require("../validation");
const { getFormInbox, sendFormMail } = require("../mailer");

function asTrimmedString(value) {
  return typeof value === "string" ? value.trim() : "";
}

router.post("/", async (req, res) => {
  const body = req.body || {};
  const audience = body.audience === "media-owners" ? "media-owners" : "advertisers";

  const values = {
    firstName: asTrimmedString(body.firstName),
    lastName: asTrimmedString(body.lastName),
    company: asTrimmedString(body.company),
    email: asTrimmedString(body.email).toLowerCase(),
    designation: asTrimmedString(body.designation),
    message: asTrimmedString(body.message),
    country: asTrimmedString(body.country),
    mobile: asTrimmedString(body.mobile),
    audience,
  };

  if (!values.firstName || !values.lastName || !values.company || !values.email || !values.message || !values.country) {
    return res.status(400).json({ error: "Please complete the required fields." });
  }

  const emailError = getEmailError(values.email);
  if (emailError) return res.status(400).json({ error: emailError });

  const phoneError = getPhoneError(values.mobile, { required: true });
  if (phoneError) return res.status(400).json({ error: phoneError });

  const { subject, html, text } = buildContactRequestEmail(values);

  try {
    await sendFormMail({
      to: getFormInbox(),
      replyTo: values.email,
      subject,
      text,
      html,
    });

    // Best-effort acknowledgment to the visitor — a failure here must not
    // fail the message, the team email is the source of truth.
    try {
      const ack = buildContactAckEmail({
        firstName: values.firstName,
        audience: values.audience,
      });
      await sendFormMail({
        to: values.email,
        replyTo: getFormInbox(),
        subject: ack.subject,
        text: ack.text,
        html: ack.html,
      });
    } catch (error) {
      console.error("Failed to send contact acknowledgment email:", error);
    }

    return res.json({ ok: true });
  } catch (error) {
    if (error && error.statusCode) return res.status(error.statusCode).json({ error: error.message });
    return res.status(502).json({ error: "Could not send your message. Please try again." });
  }
});

module.exports = router;
