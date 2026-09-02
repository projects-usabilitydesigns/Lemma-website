"use client";

import { ProductActivation } from "@/components/products/ProductActivation";
import { deltaJourney, deltaKpis } from "@/lib/delta-data";

export function DeltaActivation() {
  return (
    <ProductActivation
      data={deltaJourney}
      kpis={deltaKpis}
      chartTitle="Campaign Performance Over Time"
      chartLegend={{ primary: "Impressions", secondary: "Activations" }}
      chartId="delta"
    />
  );
}
