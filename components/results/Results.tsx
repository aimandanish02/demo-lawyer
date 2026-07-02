"use client";

import { useCountUp } from "@/hooks/useCountUp";

type Stat = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

const STATS: Stat[] = [
  { value: 236, suffix: "+", label: "Lorem Ipsum Resolved" },
  { value: 17, label: "Dolor Sit Practice" },
  { value: 91, suffix: "%", label: "Consectetur Pre-Trial" },
  { value: 4.9, decimals: 1, suffix: "/5", label: "Adipiscing Elit Rating" },
];

function StatTile({ value, decimals = 0, prefix, suffix, label }: Stat) {
  const ref = useCountUp<HTMLSpanElement>(value, decimals);

  return (
    <div className="flex flex-col gap-2 px-6 py-8 first:pl-0 md:border-l md:border-ink-line md:first:border-l-0 md:first:pl-0">
      <p className="font-display text-5xl text-bone md:text-6xl">
        {prefix}
        <span ref={ref}>0</span>
        {suffix}
      </p>
      <p className="text-sm text-bone-muted">{label}</p>
    </div>
  );
}

export function Results() {
  return (
    <section id="results" className="border-y border-ink-line/60 py-(--space-section)">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <h2 className="max-w-lg font-display text-4xl leading-tight text-bone md:text-5xl">
          Ut labore et dolore.
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-4 md:gap-x-0">
          {STATS.map((stat) => (
            <StatTile key={stat.label} {...stat} />
          ))}
        </div>

        <p className="mt-8 max-w-md text-xs text-bone-muted/70">
          Sample figures shown for demonstration purposes. Case outcomes
          depend on individual facts and are not guaranteed.
        </p>
      </div>
    </section>
  );
}
