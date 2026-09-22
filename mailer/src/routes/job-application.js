const express = require("express");
const multer = require("multer");
const router = express.Router();
const { buildJobApplicationAckEmail } = require("../templates/job-application-ack-email");
const { buildJobApplicationEmail } = require("../templates/job-application-email");
const { getEmailError, getPhoneError } = require("../validation");
const { JOBS_INBOX_EMAIL } = require("../inboxes");
const { envValue, sendFormMail } = require("../mailer");

const MAX_CV_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_CV_EXTENSIONS = new Set([".pdf", ".doc", ".docx"]);

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_CV_SIZE },
});

function asTrimmedString(value) {
  return typeof value === "string" ? value.trim() : "";
}

function getFileExtension(filename) {
  const name = String(filename || "");
  const index = name.lastIndexOf(".");
  return index === -1 ? "" : name.slice(index).toLowerCase();
}

function jobsInbox() {
  return envValue("JOBS_INBOX_EMAIL") || envValue("SMTP_USER") || JOBS_INBOX_EMAIL;
}

router.post("/", upload.single("cv"), async (req, res) => {
  const body = req.body || {};

  const values = {
    firstName: asTrimmedString(body.firstName),
    lastName: asTrimmedString(body.lastName),
    email: asTrimmedString(body.email).toLowerCase(),
    phone: asTrimmedString(body.phone),
    company: asTrimmedString(body.company),
    message: asTrimmedString(body.message),
    jobTitle: asTrimmedString(body.jobTitle),
    jobId: asTrimmedString(body.jobId),
    pageUrl: asTrimmedString(body.pageUrl),
    cvFilename: "",
  };

  // Multipart form fields always arrive as strings.
  if (body.consent !== "true" && body.consent !== true) {
    return res.status(400).json({ error: "Please accept the privacy policy to continue." });
  }

  if (!values.firstName || !values.lastName || !values.email || !values.jobTitle) {
    return res.status(400).json({ error: "Please complete the required fields." });
  }

  const emailError = getEmailError(values.email, { requireWorkEmail: false });
  if (emailError) return res.status(400).json({ error: emailError });

  const phoneError = getPhoneError(values.phone, { required: false });
  if (phoneError) return res.status(400).json({ error: phoneError });

  let cvFiles = [];
  if (req.file) {
    const extension = getFileExtension(req.file.originalname);
    if (!ALLOWED_CV_EXTENSIONS.has(extension)) {
      return res.status(400).json({ error: "Please attach your CV as a PDF, DOC, or DOCX file." });
    }
    values.cvFilename = req.file.originalname;
    cvFiles = [{ filename: req.file.originalname, content: req.file.buffer }];
  }

  const { subject, html, text } = buildJobApplicationEmail(values);

  try {
    await sendFormMail({
      to: jobsInbox(),
      replyTo: values.email,
      subject,
      text,
      html,
      files: cvFiles,
    });

    // Best-effort acknowledgment to the candidate — a failure here must not
    // fail the application, the team email is the source of truth.
    try {
      const ack = buildJobApplicationAckEmail({
        firstName: values.firstName,
        jobTitle: values.jobTitle,
        cvFilename: values.cvFilename || undefined,
      });
      await sendFormMail({
        to: values.email,
        replyTo: jobsInbox(),
        subject: ack.subject,
        text: ack.text,
        html: ack.html,
      });
    } catch (error) {
      console.error("Failed to send acknowledgment email to candidate:", error);
    }

    return res.json({ ok: true });
  } catch (error) {
    if (error && error.statusCode) return res.status(error.statusCode).json({ error: error.message });
    return res.status(502).json({ error: "Could not send your application. Please try again." });
  }
});

// Multer file-size errors arrive here.
router.use((error, req, res, next) => {
  if (error && error.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({ error: "Your CV must be smaller than 5 MB." });
  }
  return next(error);
});

module.exports = router;
