export const colors = {
  ink: "#09131a",
  inkDeep: "#030a11",
  inkMuted: "#252f37",
  slate: "#4c575f",
  slateSoft: "#586c7b",
  border: "rgba(9, 19, 26, 0.12)",
  borderStrong: "#b8babc",
  borderFaq: "#cedbe4",
  divider: "rgba(9, 19, 26, 0.14)",
  cream: "#fcfcf9",
  creamSoft: "#f9f8f5",
  creamMuted: "rgba(249, 248, 245, 0.4)",
  white: "#ffffff",
  pink: "#008fdb",
  pinkAlt: "#009352",
  error: "#d92d20",
  blue: "#008fdb",
  blueDeep: "#005481",
  blueLink: "#1581c5",
  blueLearn: "#004cff",
  blueShadow: "#008fdb",
  green: "#009352",
  greenAlt: "#74be44",
  orange: "#f05a27",
  purple: "#a684ff",
  btnText: "#f8f5ee",
  btnTextAlt: "#fdfcf8",
  logoMuted: "#9da6ad",
  brandGradient:
    "linear-gradient(90deg, #009352 0%, #74be44 35%, #1581c5 70%, #008fdb 100%)",
  blueGradient: "linear-gradient(90deg, #008fdb 0%, #005481 100%)",
  heroGradient:
    "linear-gradient(148.69deg, #e8f6ff 0%, #ecfdf5 40%, #e0f2fe 70%, #ecfccb 100%)",
  ctaGradient:
    "linear-gradient(135.27deg, #e8f6ff 0%, #ecfdf5 50%, #ecfccb 100%)",
} as const;

export type ColorToken = keyof typeof colors;
