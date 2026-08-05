type SmoothScroller = { start: () => void; stop: () => void };

let current: SmoothScroller | null = null;

export function registerSmoothScroll(instance: SmoothScroller | null) {
  current = instance;
}

/** Hands scrolling back to the browser, e.g. while a modal is open. */
export function pauseSmoothScroll() {
  current?.stop();
}

export function resumeSmoothScroll() {
  current?.start();
}
