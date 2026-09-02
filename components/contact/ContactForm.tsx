"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Loader2, ShieldCheck } from "lucide-react";
import { contactAudiences, type ContactAudienceId } from "@/lib/contact-data";
import { countries } from "@/lib/countries";
import { fieldClass, labelClass } from "@/lib/form-styles";
import { cn } from "@/lib/utils";

type FormValues = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  designation: string;
  message: string;
  country: string;
  mobile: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  designation: "",
  message: "",
  country: "",
  mobile: "",
};

const MAX_WORDS = 250;

const countWords = (value: string) => value.trim().split(/\s+/).filter(Boolean).length;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.firstName.trim()) errors.firstName = "Enter your first name";
  if (!values.lastName.trim()) errors.lastName = "Enter your last name";
  if (!values.company.trim()) errors.company = "Enter your company name";

  const email = values.email.trim();
  if (!email) {
    errors.email = "Enter your company email";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.email = "Enter a valid email address";
  }

  if (!values.message.trim()) {
    errors.message = "Tell us how we can help";
  } else if (countWords(values.message) > MAX_WORDS) {
    errors.message = `Please keep your message under ${MAX_WORDS} words`;
  }

  if (!values.country) errors.country = "Select your country";

  const mobile = values.mobile.trim();
  if (!mobile) {
    errors.mobile = "Enter your mobile number";
  } else if (!/^[+\d][\d\s()-]{6,}$/.test(mobile)) {
    errors.mobile = "Enter a valid phone number";
  }

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

export function ContactForm() {
  const formId = useId();
  const [audience, setAudience] = useState<ContactAudienceId>("advertisers");
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const setField = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const wordCount = countWords(values.message);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0];
      document.getElementById(`${formId}-${firstKey}`)?.focus();
      return;
    }

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
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
            className="flex min-h-[460px] flex-col items-center justify-center text-center"
          >
            <span className="mb-6 flex size-16 items-center justify-center rounded-full bg-[rgba(0,147,82,0.12)] text-[var(--color-green)]">
              <Check className="size-8" strokeWidth={2.5} />
            </span>
            <h3 className="font-heading text-[26px] font-semibold text-[var(--color-ink)] md:text-[30px]">
              Message sent
            </h3>
            <p className="mt-3 max-w-sm text-[16px] leading-relaxed text-[var(--color-slate)]">
              Thanks, {values.firstName || "there"}. Our {audience === "advertisers" ? "advertiser" : "media owner"}{" "}
              team will get back to you within 24 hours.
            </p>
            <a
              href="mailto:support@lemmamedia.com"
              className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold text-[var(--color-btn-text)] transition hover:shadow-[0_10px_30px_rgba(0,143,219,0.35)]"
              style={{ backgroundImage: "var(--gradient-blue)" }}
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
            <div
              role="tablist"
              aria-label="Who are you getting in touch as?"
              className="flex rounded-full bg-[#f0f0f0] p-1"
            >
              {contactAudiences.map((item) => {
                const active = audience === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setAudience(item.id)}
                    className={cn(
                      "flex-1 rounded-full px-4 py-2.5 text-[14px] font-semibold transition",
                      active
                        ? "bg-white text-[var(--color-ink)] shadow-[0_2px_8px_rgba(9,19,26,0.12)]"
                        : "text-[var(--color-slate)] hover:text-[var(--color-ink)]",
                    )}
                  >
                    {item.label}
                  </button>
                );
              })}
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
                <label className={labelClass} htmlFor={`${formId}-company`}>
                  Company name<span className="text-[var(--color-error)]">*</span>
                </label>
                <input
                  id={`${formId}-company`}
                  name="company"
                  autoComplete="organization"
                  className={cn(fieldClass, errors.company && "border-[var(--color-error)]")}
                  placeholder="Company name"
                  value={values.company}
                  onChange={(event) => setField("company", event.target.value)}
                  aria-invalid={Boolean(errors.company)}
                  aria-describedby={errors.company ? `${formId}-company-error` : undefined}
                />
                <FieldError id={`${formId}-company-error`} message={errors.company} />
              </div>

              <div>
                <label className={labelClass} htmlFor={`${formId}-email`}>
                  Company email ID<span className="text-[var(--color-error)]">*</span>
                </label>
                <input
                  id={`${formId}-email`}
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  className={cn(fieldClass, errors.email && "border-[var(--color-error)]")}
                  placeholder="you@company.com"
                  value={values.email}
                  onChange={(event) => setField("email", event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                />
                <FieldError id={`${formId}-email-error`} message={errors.email} />
              </div>

              <div>
                <label className={labelClass} htmlFor={`${formId}-country`}>
                  Country<span className="text-[var(--color-error)]">*</span>
                </label>
                <select
                  id={`${formId}-country`}
                  name="country"
                  className={cn(fieldClass, errors.country && "border-[var(--color-error)]")}
                  value={values.country}
                  onChange={(event) => setField("country", event.target.value)}
                  aria-invalid={Boolean(errors.country)}
                  aria-describedby={errors.country ? `${formId}-country-error` : undefined}
                >
                  <option value="">Select country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <FieldError id={`${formId}-country-error`} message={errors.country} />
              </div>

              <div>
                <label className={labelClass} htmlFor={`${formId}-mobile`}>
                  Mobile number<span className="text-[var(--color-error)]">*</span>
                </label>
                <input
                  id={`${formId}-mobile`}
                  name="mobile"
                  type="tel"
                  autoComplete="tel"
                  className={cn(fieldClass, errors.mobile && "border-[var(--color-error)]")}
                  placeholder="+1 555 000 1234"
                  value={values.mobile}
                  onChange={(event) => setField("mobile", event.target.value)}
                  aria-invalid={Boolean(errors.mobile)}
                  aria-describedby={errors.mobile ? `${formId}-mobile-error` : undefined}
                />
                <FieldError id={`${formId}-mobile-error`} message={errors.mobile} />
              </div>

              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor={`${formId}-designation`}>
                  Designation
                </label>
                <input
                  id={`${formId}-designation`}
                  name="designation"
                  autoComplete="organization-title"
                  className={fieldClass}
                  placeholder="Head of Media"
                  value={values.designation}
                  onChange={(event) => setField("designation", event.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between">
                <label className={labelClass} htmlFor={`${formId}-message`}>
                  Message<span className="text-[var(--color-error)]">*</span>
                </label>
                <span
                  className={cn(
                    "text-[11px]",
                    wordCount > MAX_WORDS
                      ? "font-semibold text-[var(--color-error)]"
                      : "text-[var(--color-slate-soft)]",
                  )}
                >
                  {wordCount}/{MAX_WORDS} words
                </span>
              </div>
              <textarea
                id={`${formId}-message`}
                name="message"
                rows={4}
                className={cn(
                  fieldClass,
                  "resize-none",
                  errors.message && "border-[var(--color-error)]",
                )}
                placeholder={
                  audience === "advertisers"
                    ? "Tell us about your campaign goals, channels, and markets."
                    : "Tell us about your inventory, screens, and monetization goals."
                }
                value={values.message}
                onChange={(event) => setField("message", event.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? `${formId}-message-error` : undefined}
              />
              <FieldError id={`${formId}-message-error`} message={errors.message} />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full px-8 py-3 text-[15px] font-semibold text-[var(--color-btn-text)] transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(0,143,219,0.35)] disabled:cursor-not-allowed disabled:opacity-70"
              style={{ backgroundImage: "var(--gradient-blue)" }}
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Sending message
                </>
              ) : (
                <>
                  Send Message
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
