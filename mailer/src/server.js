require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const origins = (process.env.CORS_ORIGIN || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
app.use(cors(origins.length > 0 ? { origin: origins } : {}));

app.use(express.json({ limit: "2mb" }));

app.get("/health", (req, res) => {
  res.json({ ok: true, service: "lemma-mailer" });
});

app.use("/api/contact", require("./routes/contact"));
app.use("/api/request-demo", require("./routes/request-demo"));
app.use("/api/job-application", require("./routes/job-application"));
app.use("/api/subscribe", require("./routes/subscribe"));

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

const PORT = Number(process.env.PORT || 4000);
app.listen(PORT, () => {
  console.log(`lemma-mailer listening on port ${PORT}`);
});
