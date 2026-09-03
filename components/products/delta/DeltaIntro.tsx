"use client";

import { ProductIntro } from "@/components/products/ProductIntro";

export function DeltaIntro() {
  return (
    <ProductIntro
      title={
        <>
          With the right tools{" "}
          E
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-cta)" }}
          >
            lemma
          </span>
          nate the complexities of digital advertising
        </>
      }
      description="Built for SMBs and growing agencies, Lemma Delta, the omnichannel DSP, simplifies media buying, enabling seamless supply deal curation across DOOH, CTV, and OTT platforms."
    />
  );
}
