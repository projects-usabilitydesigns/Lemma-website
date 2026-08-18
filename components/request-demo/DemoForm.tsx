"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Loader2, ShieldCheck } from "lucide-react";
import { getEmailError, getPhoneError } from "@/lib/form-validation";
import { demoInterests, demoRegions, demoRoles } from "@/lib/request-demo-data";
import { sendDemoRequest } from "@/lib/send-demo-request";
import { fieldClass, labelClass } from "@/lib/form-styles";
import { cn } from "@/lib/utils";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  phone: string;
  role: string;
  region: string;
  interests: string[];
  message: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  jobTitle: "",
  phone: "",
  role: "",
  region: "",
  interests: [],
  message: "",
  consent: false,
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.firstName.trim()) errors.firstName = "Enter your first name";
  if (!values.lastName.trim()) errors.lastName = "Enter your last name";

  const emailError = getEmailError(values.email, { requireWorkEmail: true });
  if (emailError) errors.email = emailError;

  const phoneError = getPhoneError(values.phone, { required: true });
  if (phoneError) errors.phone = phoneError;

  if (!values.company.trim()) errors.company = "Enter your company name";
  if (!values.role) errors.role = "Select what best describes you";
  if (!values.consent) errors.consent = "Please accept the privacy policy to continue";

  return errors;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 text-[12px] font-medium text-[var(--color-pink)]">
      {message}
    </p>
  );
}

type DemoFormProps = {
  /** Prefills the "I am a" dropdown, e.g. from the solution page in view. */
  defaultRole?: string;
  /** Drops the card chrome when the form already sits inside a surface. */
  frameless?: boolean;
};

export function DemoForm({ defaultRole = "", frameless = false }: DemoFormProps) {
  const formId = useId();
  const [values, setValues] = useState<FormValues>({ ...initialValues, role: defaultRole });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [submitError, setSubmitError] = useState("");

  const setField = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const toggleInterest = (label: string) => {
    setValues((current) => ({
      ...current,
      interests: current.interests.includes(label)
        ? current.interests.filter((item) => item !== label)
        : [...current.interests, label],
    }));
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
      await sendDemoRequest(values);
      setStatus("success");
    } catch (error) {
      setStatus("idle");
      setSubmitError(
        error instanceof Error ? error.message : "Could not send your request. Please try again.",
      );
    }
  };

  return (
    <div
      className={cn(
        "relative",
        !frameless &&
          "rounded-[24px] border border-[var(--color-border)] bg-white/95 p-6 shadow-[0_24px_60px_rgba(9,19,26,0.12)] backdrop-blur-sm md:p-8",
      )}
    >
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={cn(
              "flex flex-col items-center justify-center text-center",
              frameless ? "min-h-[360px]" : "min-h-[520px]",
            )}
          >
            <span className="mb-6 flex size-16 items-center justify-center rounded-full bg-[rgba(0,147,82,0.12)] text-[var(--color-green)]">
              <Check className="size-8" strokeWidth={2.5} />
            </span>
            <h3 className="font-heading text-[26px] font-semibold text-[var(--color-ink)] md:text-[30px]">
              Thanks, {values.firstName || "there"}!
            </h3>
            <p className="mt-3 max-w-sm text-[16px] leading-relaxed text-[var(--color-slate)]">
              Your demo request is in. A Lemma specialist will reach out within 24 hours with a
              couple of times that suit your team.
            </p>
            <a
              href="mailto:contactus@lemmamedia.com"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-black bg-white px-6 py-3 text-[15px] font-semibold text-black transition hover:bg-black hover:text-white"
            >
              Email us directly
              <ArrowRight className="size-4" />
            </a>
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
              <h2 className="font-heading text-[22px] font-semibold tracking-[-0.4px] text-[var(--color-ink)]">
                Book your demo
              </h2>
              <p className="mt-1 text-[14px] leading-relaxed text-[var(--color-slate)]">
                Fill in a few details and we&apos;ll tailor the session to your goals.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor={`${formId}-firstName`}>
                  First name*
                </label>
                <input
                  id={`${formId}-firstName`}
                  name="firstName"
                  autoComplete="given-name"
                  className={cn(fieldClass, errors.firstName && "border-[var(--color-pink)]")}
                  placeholder="Priya"
                  value={values.firstName}
                  onChange={(event) => setField("firstName", event.target.value)}
                  aria-invalid={Boolean(errors.firstName)}
                  aria-describedby={errors.firstName ? `${formId}-firstName-error` : undefined}
                />
                <FieldError id={`${formId}-firstName-error`} message={errors.firstName} />
              </div>

              <div>
                <label className={labelClass} htmlFor={`${formId}-lastName`}>
                  Last name*
                </label>
                <input
                  id={`${formId}-lastName`}
                  name="lastName"
                  autoComplete="family-name"
                  className={cn(fieldClass, errors.lastName && "border-[var(--color-pink)]")}
                  placeholder="Sharma"
                  value={values.lastName}
                  onChange={(event) => setField("lastName", event.target.value)}
                  aria-invalid={Boolean(errors.lastName)}
                  aria-describedby={errors.lastName ? `${formId}-lastName-error` : undefined}
                />
                <FieldError id={`${formId}-lastName-error`} message={errors.lastName} />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor={`${formId}-email`}>
                  Work email*
                </label>
                <input
                  id={`${formId}-email`}
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  className={cn(fieldClass, errors.email && "border-[var(--color-pink)]")}
                  placeholder="you@company.com"
                  value={values.email}
                  onChange={(event) => setField("email", event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                />
                <FieldError id={`${formId}-email-error`} message={errors.email} />
              </div>

              <div>
                <label className={labelClass} htmlFor={`${formId}-phone`}>
                  Phone*
                </label>
                <input
                  id={`${formId}-phone`}
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  className={cn(fieldClass, errors.phone && "border-[var(--color-pink)]")}
                  placeholder="+1 555 000 1234"
                  value={values.phone}
                  onChange={(event) => setField("phone", event.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
                />
                <FieldError id={`${formId}-phone-error`} message={errors.phone} />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor={`${formId}-company`}>
                  Company*
                </label>
                <input
                  id={`${formId}-company`}
                  name="company"
                  autoComplete="organization"
                  className={cn(fieldClass, errors.company && "border-[var(--color-pink)]")}
                  placeholder="Company name"
                  value={values.company}
                  onChange={(event) => setField("company", event.target.value)}
                  aria-invalid={Boolean(errors.company)}
                  aria-describedby={errors.company ? `${formId}-company-error` : undefined}
                />
                <FieldError id={`${formId}-company-error`} message={errors.company} />
              </div>

              <div>
                <label className={labelClass} htmlFor={`${formId}-jobTitle`}>
                  Job title
                </label>
                <input
                  id={`${formId}-jobTitle`}
                  name="jobTitle"
                  autoComplete="organization-title"
                  className={fieldClass}
                  placeholder="Head of Media"
                  value={values.jobTitle}
                  onChange={(event) => setField("jobTitle", event.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor={`${formId}-role`}>
                  I am a*
                </label>
                <select
                  id={`${formId}-role`}
                  name="role"
                  className={cn(fieldClass, errors.role && "border-[var(--color-pink)]")}
                  value={values.role}
                  onChange={(event) => setField("role", event.target.value)}
                  aria-invalid={Boolean(errors.role)}
                  aria-describedby={errors.role ? `${formId}-role-error` : undefined}
                >
                  <option value="">Select an option</option>
                  {demoRoles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
                <FieldError id={`${formId}-role-error`} message={errors.role} />
              </div>

              <div>
                <label className={labelClass} htmlFor={`${formId}-region`}>
                  Region
                </label>
                <select
                  id={`${formId}-region`}
                  name="region"
                  className={fieldClass}
                  value={values.region}
                  onChange={(event) => setField("region", event.target.value)}
                >
                  <option value="">Select a region</option>
                  {demoRegions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <fieldset>
              <legend className={labelClass}>What are you interested in?</legend>
              <div className="flex flex-wrap gap-1.5">
                {demoInterests.map((interest) => {
                  const active = values.interests.includes(interest.label);
                  return (
                    <button
                      key={interest.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggleInterest(interest.label)}
                      className={cn(
                        "rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition",
                        active
                          ? "border-[var(--color-blue)] bg-[rgba(0,143,219,0.1)] text-[var(--color-blue-deep)]"
                          : "border-[var(--color-border)] bg-white text-[var(--color-slate)] hover:border-[var(--color-blue)] hover:text-[var(--color-ink)]",
                      )}
                    >
                      {interest.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div>
              <label className={labelClass} htmlFor={`${formId}-message`}>
                Anything we should know?
              </label>
              <textarea
                id={`${formId}-message`}
                name="message"
                rows={2}
                className={cn(fieldClass, "resize-none")}
                placeholder="Tell us about your campaign goals, markets, or inventory."
                value={values.message}
                onChange={(event) => setField("message", event.target.value)}
              />
            </div>

            <div>
              <label className="flex items-start gap-2.5 text-[12px] leading-relaxed text-[var(--color-slate)]">
                <input
                  id={`${formId}-consent`}
                  name="consent"
                  type="checkbox"
                  className="mt-0.5 size-4 shrink-0 accent-[var(--color-pink)]"
                  checked={values.consent}
                  onChange={(event) => setField("consent", event.target.checked)}
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={errors.consent ? `${formId}-consent-error` : undefined}
                />
                <span>
                  I agree to Lemma processing my details to contact me about this request, in line
                  with the privacy policy.
                </span>
              </label>
              <FieldError id={`${formId}-consent-error`} message={errors.consent} />
            </div>

            {submitError ? (
              <p className="text-center text-[12px] font-medium text-[var(--color-pink)]">{submitError}</p>
            ) : null}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full px-8 py-3 text-[15px] font-semibold text-[var(--color-btn-text)] transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(0,143,219,0.35)] disabled:cursor-not-allowed disabled:opacity-70"
              style={{ backgroundImage: "var(--gradient-blue)" }}
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Sending request
                </>
              ) : (
                <>
                  Request My Demo
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </button>

            <p className="flex items-center justify-center gap-2 text-[12px] text-[var(--color-slate-soft)]">
              <ShieldCheck className="size-4 text-[var(--color-green)]" />
              We reply within 24 hours. No spam, ever.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
