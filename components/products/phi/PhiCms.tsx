"use client";

import Image from "next/image";
import { ProductActivation } from "@/components/products/ProductActivation";
import { phiAssets, phiJourney } from "@/lib/phi-data";

export function PhiCms() {
  return (
    <ProductActivation
      data={phiJourney}
      background="#eef6ff"
      compact
      visual={
        <div className="relative w-full max-w-[520px]">
          <Image
            src={phiAssets.laptop}
            alt="Lemma Phi analytics dashboard on a laptop"
            width={1536}
            height={1024}
            priority={false}
            className="h-auto w-full object-contain object-left"
            sizes="(max-width: 1024px) 80vw, 520px"
          />
        </div>
      }
    />
  );
}
