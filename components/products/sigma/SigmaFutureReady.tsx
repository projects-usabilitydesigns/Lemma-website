"use client";

import { ProductIntro } from "@/components/products/ProductIntro";
import { GradientText } from "@/components/ui/GradientText";

export function SigmaFutureReady() {
  return (
    <ProductIntro
      title={
        <>
          <GradientText>Lemma</GradientText>
          Master control & enjoy unparalleled transparency
        </>
      }
      description="Lemma Sigma boosts programmatic bidding for DOOH, CTV, and Retail, making inventory easily discoverable to global DSPs including DV360 and TTD and others. Single native engine to optimize monetization at all times."
    />
  );
}
