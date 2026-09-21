"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, FileUp, Loader2 } from "lucide-react";
import { sendJobApplication } from "@/lib/send-job-application";
import { fieldClass, labelClass } from "@/lib/form-styles";
import { cn } from "@/lib/utils";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  cv: File | null;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  cv: null,
  consent: false,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+\d][\d\s()-]{6,}$/;
const MAX_CV_SIZE = 5 * 1024 * 1024;
const ALLOWED_CV_EXTENSIONS = [".pdf", ".doc", ".docx"];

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.firstName.trim()) errors.firstName = "Enter your first name";
  if (!values.lastName.trim()) errors.lastName = "Enter your last name";

  const email = values.email.trim();
  if (!email) {
    errors.email = "Enter your email address";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Enter a valid email address";
  }

  const phone = values.phone.trim();
  if (phone && !PHONE_PATTERN.test(phone)) {
    errors.phone = "Enter a valid phone number";
  }

  if (values.cv) {
    const extension = values.cv.name.slice(values.cv.name.lastIndexOf(".")).toLowerCase();
    if (!ALLOWED_CV_EXTENSIONS.includes(extension)) {
      errors.cv = "Please attach your CV as a PDF, DOC, or DOCX file";
    } else if (values.cv.size > MAX_CV_SIZE) {
      errors.cv = "Your CV must be smaller than 5 MB";
    }
  }

  if (!values.consent) errors.consent = "Please accept the privacy policy to continue";

  return errors;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 text-[12px] font-medium text-[var(--color-error)]">
      {message}
    </p>
  );
}

export function JobApplyForm({ jobTitle, jobId }: { jobTitle: string; jobId: string }) {
  const formId = useId();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [submitError, setSubmitError] = useState("");

  const setField = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0];
      document.getElementById(`${formId}-${firstKey}`)?.focus();
      return;
    }

    setSubmitError("");
    setStatus("submitting");

    try {
      await sendJobApplication({ ...values, cv: values.cv, jobTitle, jobId });
      setStatus("success");
    } catch (error) {
      setStatus("idle");
      setSubmitError(
        error instanceof Error ? error.message : "Could not send your application. Please try again.",
      );
    }
  };

  return (
    <div className="rounded-[24px] border border-[var(--color-border)] bg-white/95 p-6 shadow-[0_24px_60px_rgba(9,19,26,0.12)] backdrop-blur-sm md:p-8">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex min-h-[420px] flex-col items-center justify-center text-center"
          >
            <span className="mb-6 flex size-16 items-center justify-center rounded-full bg-[rgba(0,147,82,0.12)] text-[var(--color-green)]">
              <Check className="size-8" strokeWidth={2.5} />
            </span>
            <h3 className="font-heading text-[26px] font-semibold text-[var(--color-ink)] md:text-[30px]">
              Application sent
            </h3>
            <p className="mt-3 max-w-sm text-[16px] leading-relaxed text-[var(--color-slate)]">
              Thanks, {values.firstName || "there"}. Our talent team will review your application
              for {jobTitle} and get back to you.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={onSubmit}
            noValidate
            className="space-y-3.5"
          >
            <div>
              <h3 className="font-heading text-[22px] font-semibold tracking-[-0.3px] text-[var(--color-ink)]">
                Apply for this role
              </h3>
              <p className="mt-1 text-[14px] leading-relaxed text-[var(--color-slate)]">
                Fill in your details and the talent team will get back to you.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor={`${formId}-firstName`}>
                  First name<span className="text-[var(--color-error)]">*</span>
                </label>
                <input
                  id={`${formId}-firstName`}
                  name="firstName"
                  autoComplete="given-name"
                  className={cn(fieldClass, errors.firstName && "border-[var(--color-error)]")}
                  placeholder="John / Jane"
                  value={values.firstName}
                  onChange={(event) => setField("firstName", event.target.value)}
                  aria-invalid={Boolean(errors.firstName)}
                  aria-describedby={errors.firstName ? `${formId}-firstName-error` : undefined}
                />
                <FieldError id={`${formId}-firstName-error`} message={errors.firstName} />
              </div>

              <div>
                <label className={labelClass} htmlFor={`${formId}-lastName`}>
                  Last name<span className="text-[var(--color-error)]">*</span>
                </label>
                <input
                  id={`${formId}-lastName`}
                  name="lastName"
                  autoComplete="family-name"
                  className={cn(fieldClass, errors.lastName && "border-[var(--color-error)]")}
                  placeholder="Doe"
                  value={values.lastName}
                  onChange={(event) => setField("lastName", event.target.value)}
                  aria-invalid={Boolean(errors.lastName)}
                  aria-describedby={errors.lastName ? `${formId}-lastName-error` : undefined}
                />
                <FieldError id={`${formId}-lastName-error`} message={errors.lastName} />
              </div>

              <div>
                <label className={labelClass} htmlFor={`${formId}-email`}>
                  Email ID<span className="text-[var(--color-error)]">*</span>
                </label>
                <input
                  id={`${formId}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={cn(fieldClass, errors.email && "border-[var(--color-error)]")}
                  placeholder="you@example.com"
                  value={values.email}
                  onChange={(event) => setField("email", event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                />
                <FieldError id={`${formId}-email-error`} message={errors.email} />
              </div>

              <div>
                <label className={labelClass} htmlFor={`${formId}-phone`}>
                  Phone
                </label>
                <input
                  id={`${formId}-phone`}
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className={cn(fieldClass, errors.phone && "border-[var(--color-error)]")}
                  placeholder="+91 98765 43210"
                  value={values.phone}
                  onChange={(event) => setField("phone", event.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
                />
                <FieldError id={`${formId}-phone-error`} message={errors.phone} />
              </div>

              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor={`${formId}-company`}>
                  Current company
                </label>
                <input
                  id={`${formId}-company`}
                  name="company"
                  autoComplete="organization"
                  className={fieldClass}
                  placeholder="Current company"
                  value={values.company}
                  onChange={(event) => setField("company", event.target.value)}
                />
              </div>

              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor={`${formId}-message`}>
                  Why are you a great fit?
                </label>
                <textarea
                  id={`${formId}-message`}
                  name="message"
                  rows={3}
                  className={cn(fieldClass, "resize-none")}
                  placeholder="Tell us about your experience and what excites you about this role."
                  value={values.message}
                  onChange={(event) => setField("message", event.target.value)}
                />
              </div>

              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor={`${formId}-cv`}>
                  Submit your CV
                </label>
                <label
                  htmlFor={`${formId}-cv`}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-lg border border-dashed px-4 py-3 transition",
                    errors.cv
                      ? "border-[var(--color-error)] bg-[rgba(220,38,38,0.04)]"
                      : "border-[var(--color-border)] bg-[#f0f0f0] hover:border-[var(--color-blue)] hover:bg-white",
                  )}
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-[#def2ff] text-[var(--color-blue-learn)]">
                    <FileUp className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={cn(
                        "block truncate text-[14px] font-medium",
                        values.cv ? "text-[var(--color-ink)]" : "text-[var(--color-slate)]",
                      )}
                    >
                      {values.cv ? values.cv.name : "Choose a file or drag & drop"}
                    </span>
                    <span className="block text-[12px] text-[var(--color-slate-soft)]">
                      PDF, DOC or DOCX · Max 5 MB · Optional
                    </span>
                  </span>
                </label>
                <input
                  id={`${formId}-cv`}
                  name="cv"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="sr-only"
                  onChange={(event) => {
                    const file = event.target.files?.[0] ?? null;
                    setField("cv", file);
                  }}
                  aria-invalid={Boolean(errors.cv)}
                  aria-describedby={errors.cv ? `${formId}-cv-error` : undefined}
                />
                <FieldError id={`${formId}-cv-error`} message={errors.cv} />
              </div>
            </div>

            <div>
              <label className="flex items-start gap-2.5 text-[12px] leading-relaxed text-[var(--color-slate)]">
                <input
                  id={`${formId}-consent`}
                  name="consent"
                  type="checkbox"
                  className="mt-0.5 size-4 shrink-0 accent-[var(--color-blue)]"
                  checked={values.consent}
                  onChange={(event) => setField("consent", event.target.checked)}
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={errors.consent ? `${formId}-consent-error` : undefined}
                />
                <span>
                  I agree to Lemma processing my details to contact me about this application, in
                  line with the{" "}
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--color-blue-link)] hover:underline"
                  >
                    privacy policy
                  </a>
                  .
                </span>
              </label>
              <FieldError id={`${formId}-consent-error`} message={errors.consent} />
            </div>

            {submitError ? (
              <p className="text-center text-[12px] font-medium text-[var(--color-error)]">{submitError}</p>
            ) : null}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full px-5 py-2.5 text-[16px] font-semibold text-[var(--color-btn-text)] transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(0,143,219,0.35)] disabled:cursor-not-allowed disabled:opacity-70"
              style={{ backgroundImage: "var(--gradient-blue)" }}
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Sending application
                </>
              ) : (
                "Submit application"
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
