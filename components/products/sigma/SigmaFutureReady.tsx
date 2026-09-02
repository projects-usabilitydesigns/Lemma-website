"use client";

import { ProductIntro } from "@/components/products/ProductIntro";
import { WordPlay } from "@/components/ui/WordPlay";

export function SigmaFutureReady() {
  return (
    <ProductIntro
      title={
        <>
          <WordPlay word="lemmaMaster" /> control & enjoy unparalleled transparency
        </>
      }
      description="Lemma Sigma boosts programmatic bidding for DOOH, CTV, and Retail, making inventory easily discoverable to global DSPs including DV360 and TTD and others. Single native engine to optimize monetization at all times."
    />
  );
}
