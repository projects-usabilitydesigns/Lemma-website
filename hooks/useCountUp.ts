"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

type Options = {
  end: number;
  duration?: number;
  decimals?: number;
  startOnView?: boolean;
};

export function useCountUp({
  end,
  duration = 1400,
  decimals = 0,
  startOnView = true,
}: Options) {
  const ref = useRef<HTMLElement | null>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(!startOnView);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!startOnView) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!started) return;
    if (reduced) {
      setValue(end);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Number((eased * end).toFixed(decimals)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, end, duration, decimals, reduced]);

  return { ref, value };
}
