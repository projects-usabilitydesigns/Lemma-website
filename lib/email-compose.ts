import { FORM_INBOX_EMAIL } from "@/lib/form-inbox";

export function getEmailComposeUrl(email: string = FORM_INBOX_EMAIL) {
  return `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${encodeURIComponent(email)}`;
}
