"use client";

import { Quotes } from "@phosphor-icons/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const TESTIMONIALS = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    name: "Livia M.",
    role: "Former Client",
  },
  {
    quote:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
    name: "Cassius R.",
    role: "Business Owner",
  },
  {
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
    name: "Junia P.",
    role: "Estate Client",
  },
];

export function Testimonials() {
  const scope = useScrollReveal<HTMLDivElement>("[data-reveal]");

  return (
    <section className="py-(--space-section)">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <h2 className="max-w-lg font-display text-4xl leading-tight text-bone md:text-5xl">
          Duis aute irure dolor.
        </h2>

        <div ref={scope} className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map(({ quote, name, role }) => (
            <figure
              key={name}
              data-reveal
              className="flex flex-col justify-between rounded-[20px] border border-ink-line bg-ink-raised p-7"
            >
              <div>
                <Quotes size={28} weight="fill" className="text-moss/40" />
                <blockquote className="mt-4 text-base leading-relaxed text-bone">
                  {quote}
                </blockquote>
              </div>
              <figcaption className="mt-6 text-sm">
                <span className="font-medium text-bone">{name}</span>
                <span className="text-bone-muted"> - {role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
