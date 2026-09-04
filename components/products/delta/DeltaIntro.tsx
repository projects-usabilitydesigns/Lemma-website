"use client";

import { ProductIntro } from "@/components/products/ProductIntro";
import { GradientText } from "@/components/ui/GradientText";

export function DeltaIntro() {
  return (
    <ProductIntro
      title={
        <>
          With the right tools{" "}
          E
          <GradientText>lemma</GradientText>
          nate the complexities of digital advertising
        </>
      }
      description="Built for SMBs and growing agencies, Lemma Delta, the omnichannel DSP, simplifies media buying, enabling seamless supply deal curation across DOOH, CTV, and OTT platforms."
    />
  );
}
