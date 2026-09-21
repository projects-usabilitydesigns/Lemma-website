export type JobApplicationPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  jobTitle: string;
  jobId: string;
  pageUrl: string;
  cvFilename: string;
};

export async function sendJobApplication(values: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  jobTitle: string;
  jobId: string;
  consent: boolean;
  cv?: File | null;
  pageUrl?: string;
}) {
  const form = new FormData();
  form.append("firstName", values.firstName);
  form.append("lastName", values.lastName);
  form.append("email", values.email);
  form.append("phone", values.phone);
  form.append("company", values.company);
  form.append("message", values.message);
  form.append("jobTitle", values.jobTitle);
  form.append("jobId", values.jobId);
  form.append("consent", String(values.consent));
  form.append("pageUrl", typeof window !== "undefined" ? window.location.href : values.pageUrl ?? "");
  if (values.cv) form.append("cv", values.cv);

  const response = await fetch("/api/job-application", {
    method: "POST",
    body: form,
  });

  const result = (await response.json().catch(() => null)) as { error?: string } | null;

  if (!response.ok) {
    throw new Error(result?.error || "Could not send your application. Please try again.");
  }
}