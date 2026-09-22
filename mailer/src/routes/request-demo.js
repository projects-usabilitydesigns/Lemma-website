const express = require("express");
const router = express.Router();
const { buildDemoRequestAckEmail } = require("../templates/demo-request-ack-email");
const { buildDemoRequestEmail } = require("../templates/demo-email");
const { getEmailError, getPhoneError } = require("../validation");
const { getFormInbox, sendFormMail } = require("../mailer");

function asTrimmedString(value) {
  return typeof value === "string" ? value.trim() : "";
}

function asStringList(value) {
  if (!Array.isArray(value)) return [];
  return value.filter((item) => typeof item === "string" && item.trim().length > 0);
}

router.post("/", async (req, res) => {
  const body = req.body || {};

  const values = {
    firstName: asTrimmedString(body.firstName),
    lastName: asTrimmedString(body.lastName),
    email: asTrimmedString(body.email).toLowerCase(),
    company: asTrimmedString(body.company),
    jobTitle: asTrimmedString(body.jobTitle),
    phone: asTrimmedString(body.phone),
    role: asTrimmedString(body.role),
    region: asTrimmedString(body.region),
    interests: asStringList(body.interests),
    message: asTrimmedString(body.message),
    pageUrl: asTrimmedString(body.pageUrl),
  };

  if (!values.firstName || !values.lastName || !values.email || !values.company || !values.role || body.consent !== true) {
    return res.status(400).json({ error: "Please complete the required fields." });
  }

  const emailError = getEmailError(values.email, { requireWorkEmail: true });
  if (emailError) return res.status(400).json({ error: emailError });

  const phoneError = getPhoneError(values.phone, { required: true });
  if (phoneError) return res.status(400).json({ error: phoneError });

  const { subject, html, text } = buildDemoRequestEmail(values);

  try {
    await sendFormMail({
      to: getFormInbox(),
      replyTo: values.email,
      subject,
      text,
      html,
    });

    // Best-effort acknowledgment to the visitor — a failure here must not
    // fail the request, the team email is the source of truth.
    try {
      const ack = buildDemoRequestAckEmail({
        firstName: values.firstName,
        company: values.company,
      });
      await sendFormMail({
        to: values.email,
        replyTo: getFormInbox(),
        subject: ack.subject,
        text: ack.text,
        html: ack.html,
      });
    } catch (error) {
      console.error("Failed to send demo request acknowledgment email:", error);
    }

    return res.json({ ok: true });
  } catch (error) {
    if (error && error.statusCode) return res.status(error.statusCode).json({ error: error.message });
    return res.status(502).json({ error: "Could not send your request. Please try again." });
  }
});

module.exports = router;
