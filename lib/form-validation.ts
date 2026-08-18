const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "ymail.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "msn.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "aol.com",
  "protonmail.com",
  "proton.me",
]);

const EMAIL_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
const PHONE_PATTERN = /^\+?[\d\s().-]+$/;

export function getEmailError(email: string, { requireWorkEmail = false } = {}) {
  const value = email.trim().toLowerCase();

  if (!value) return requireWorkEmail ? "Enter your work email" : "Enter your email address";
  if (value.length > 254 || value.includes("..") || !EMAIL_PATTERN.test(value)) {
    return "Enter a valid email address";
  }

  const [local, domain] = value.split("@");
  if (
    !local ||
    !domain ||
    local.startsWith(".") ||
    local.endsWith(".") ||
    domain.startsWith(".") ||
    domain.endsWith(".") ||
    domain.startsWith("-") ||
    domain.endsWith("-")
  ) {
    return "Enter a valid email address";
  }

  if (requireWorkEmail && FREE_EMAIL_DOMAINS.has(domain)) {
    return "Please use your work email";
  }

  return undefined;
}

export function getPhoneError(phone: string, { required = false } = {}) {
  const value = phone.trim();

  if (!value) return required ? "Enter your phone number" : undefined;
  if (!PHONE_PATTERN.test(value)) return "Enter a valid phone number";

  const digits = value.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) return "Enter a valid phone number";

  return undefined;
}
