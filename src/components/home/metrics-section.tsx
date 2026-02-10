"use client";

import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Counter } from "@/components/shared/counter";

const metrics = [
  { value: "3+", label: "Products Shipped" },
  { value: "14", label: "Day Fastest Pivot" },
  { value: "1000+", label: "Events Powered" },
  { value: "100%", label: "Client Retention" },
];

export function MetricsSection() {
  return (
    <SectionWrapper className="border-y border-border">
      <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
        {metrics.map((m) => (
          <Counter key={m.label} value={m.value} label={m.label} />
        ))}
      </div>
    </SectionWrapper>
  );
}
