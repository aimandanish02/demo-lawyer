"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const STEPS = [
  {
    number: "01",
    title: "Excepteur",
    description: "Sint occaecat cupidatat non proident sunt in culpa.",
  },
  {
    number: "02",
    title: "Occaecat",
    description: "Qui officia deserunt mollit anim id est laborum.",
  },
  {
    number: "03",
    title: "Cupidatat",
    description: "Sed ut perspiciatis unde omnis iste natus error.",
  },
  {
    number: "04",
    title: "Proident",
    description: "Voluptatem accusantium doloremque laudantium totam rem.",
  },
];

export function Process() {
  const scope = useScrollReveal<HTMLDivElement>("[data-reveal]");

  return (
    <section className="py-(--space-section)">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <h2 className="max-w-lg font-display text-4xl leading-tight text-bone md:text-5xl">
          Quis nostrud exercitation.
        </h2>

        <div ref={scope} className="relative mt-14 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-ink-line md:block"
          />
          {STEPS.map((step) => (
            <div key={step.number} data-reveal className="relative">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-moss/50 bg-ink font-display text-base italic text-moss-strong">
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-xl text-bone md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[32ch] text-sm leading-relaxed text-bone-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
