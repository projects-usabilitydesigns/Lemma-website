"use client";

import { ProductActivation } from "@/components/products/ProductActivation";
import { sigmaJourney, sigmaKpis } from "@/lib/sigma-data";

export function SigmaMonetization() {
  return (
    <ProductActivation
      data={sigmaJourney}
      kpis={sigmaKpis}
      chartTitle="Publisher Revenue and Yield Over Time"
      chartLegend={{ primary: "Revenue", secondary: "Yield" }}
      chartId="sigma"
      chartViewBox="0 0 560 168"
      chartPaths={{
        primary:
          "M0 100 C60 88, 100 118, 150 104 S240 58, 300 86 S400 42, 460 66 S520 84, 560 70",
        secondary:
          "M0 74 C60 92, 100 128, 150 90 S240 72, 300 52 S400 78, 460 38 S520 48, 560 24",
      }}
    />
  );
}
