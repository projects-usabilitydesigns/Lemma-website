"use client";

import { ProductIntro } from "@/components/products/ProductIntro";

export function SigmaFutureReady() {
  return (
    <ProductIntro
      title={
        <>
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #008fdb 0%, #009352 100%)",
            }}
          >
            lemma
          </span>
          Master control & enjoy unparalleled transparency
        </>
      }
      description="Lemma Sigma boosts programmatic bidding for DOOH, CTV, and Retail, making inventory easily discoverable to global DSPs including DV360 and TTD and others. Single native engine to optimize monetization at all times."
    />
  );
}
