import fs from "fs";

const raw = fs.readFileSync(".env.local", "utf8");
const env = {};
for (const line of raw.split(/\r?\n/)) {
  const t = line.trim();
  if (!t || t.startsWith("#")) continue;
  const i = t.indexOf("=");
  if (i < 0) continue;
  env[t.slice(0, i)] = t.slice(i + 1).trim().replace(/^["']|["']$/g, "");
}

const host = (env.LEADSQUARED_API_HOST || "").replace(/\/$/, "");
const url = `${host}/LeadManagement.svc/LeadsMetaData.Get`;
const res = await fetch(url, {
  headers: {
    "x-LSQ-AccessKey": env.LEADSQUARED_ACCESS_KEY,
    "x-LSQ-SecretKey": env.LEADSQUARED_SECRET_KEY,
    Accept: "application/json",
  },
});
const rows = await res.json();
for (const name of ["FirstName", "LastName", "EmailAddress", "Phone", "Company", "Source", "mx_Country"]) {
  const f = rows.find((x) => x.SchemaName === name);
  console.log(name, "mandatory", f?.IsMandatory, "identifier", f?.IsLeadIdentifier);
}
