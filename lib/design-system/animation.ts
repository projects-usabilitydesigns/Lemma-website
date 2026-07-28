export const animation = {
  duration: {
    fast: 0.4,
    base: 0.55,
    slow: 0.75,
  },
  ease: [0.16, 1, 0.3, 1] as const,
  easeOut: "easeOut" as const,
  stagger: 0.1,
  marqueeSpeed: 40,
} as const;
