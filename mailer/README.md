# lemma-mailer

Standalone Node.js email service for Lemma websites. Receives form submissions over HTTP and sends branded emails with **nodemailer** (SMTP). Used by the Lemma-website contact, request-demo, job-application, and subscribe forms.

## Setup

```bash
npm install
cp .env.example .env   # then fill in SMTP_USER + SMTP_PASS
```

## Run

```bash
npm run dev    # local dev (nodemon, port 4000)
npm start      # production
```

## Environment

| Variable | Required | Default | Purpose |
|---|---|---|---|
| `PORT` | no | `4000` | HTTP port |
| `CORS_ORIGIN` | no | allow all | Comma-separated website origins (set in production) |
| `SMTP_USER` | **yes** | — | SMTP login (also the `From` address) |
| `SMTP_PASS` | **yes** | — | SMTP password / app password |
| `SMTP_HOST` | no | `smtp.gmail.com` | SMTP server |
| `SMTP_PORT` | no | `587` | SMTP port |
| `FORM_INBOX_EMAIL` | no | `enquiry@lemmamedia.com` | Contact + demo notification recipient |
| `DEMO_INBOX_EMAIL` | no | (falls back to above) | Demo-only recipient override |
| `JOBS_INBOX_EMAIL` | no | `sairaj.lole@usabilitydesigns.com` | Job-application recipient (falls back to `SMTP_USER`) |

Never commit `.env` — only `.env.example`.

## Endpoints

| Method + path | Body | Sends |
|---|---|---|
| `POST /api/contact` | JSON: firstName, lastName, company, email, designation, message, country, mobile, audience | Team email + visitor thank-you |
| `POST /api/request-demo` | JSON: firstName, lastName, email, company, jobTitle, phone, role, region, interests[], message, pageUrl, consent | Team email + visitor thank-you |
| `POST /api/job-application` | multipart: firstName, lastName, email, phone, company, message, jobTitle, jobId, pageUrl, consent, cv (PDF/DOC/DOCX ≤ 5 MB) | Team email (CV attached) + candidate thank-you |
| `POST /api/subscribe` | JSON: email, pageUrl | Team notification + subscriber confirmation |
| `GET /health` | — | `{ ok: true }` checks |

All endpoints validate input (`400` on bad input), return `{ ok: true }` on success, and send the visitor/candidate email **best-effort** (a failure never fails the submission).

## Production

```bash
# PM2
pm2 start src/server.js --name lemma-mailer
pm2 logs lemma-mailer
```

Optional: put Nginx in front with SSL (e.g. `mailer.lemmatechnologies.com`) and set `CORS_ORIGIN` to the website origins. `Dockerfile` can be added later if needed.

## Verify

```bash
curl http://127.0.0.1:4000/health
```
