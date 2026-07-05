"use client";

import { Quotes } from "@phosphor-icons/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const TESTIMONIALS = [
  {
    quote:
      "Elena walked me through every step after my accident and never let the insurance company push me around. I knew exactly where things stood the whole time.",
    name: "Rachel M.",
    role: "Personal Injury Client",
  },
  {
    quote:
      "We hired Elena for a partnership dispute that could have sunk the business. She settled it in four months for terms better than we expected.",
    name: "Daniel R.",
    role: "Business Owner",
  },
  {
    quote:
      "Estate planning felt overwhelming until we sat down with Elena. She explained everything in plain language and the whole process took under a month.",
    name: "Julia P.",
    role: "Estate Planning Client",
  },
];

const PRESS_FEATURE = {
  publication: "The Meridian Herald",
  headline:
    "“One of the few solo practitioners taking on cases larger firms turn down.”",
  context: "Profiled in a 2023 feature on independent trial attorneys in Cedar Falls.",
};

export function Testimonials() {
  const scope = useScrollReveal<HTMLDivElement>("[data-reveal]");

  return (
    <section className="py-(--space-section)">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <h2 className="max-w-lg font-display text-4xl leading-tight text-bone md:text-5xl">
          What clients say.
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

        <div
          data-reveal
          className="mt-10 flex flex-col gap-3 rounded-[20px] border border-ink-line bg-ink-raised/60 p-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-moss-strong">
              As Featured In - {PRESS_FEATURE.publication}
            </p>
            <blockquote className="mt-2 max-w-xl font-display text-lg italic leading-snug text-bone">
              {PRESS_FEATURE.headline}
            </blockquote>
          </div>
          <p className="max-w-[22ch] text-xs text-bone-muted/70 sm:text-right">
            {PRESS_FEATURE.context}
          </p>
        </div>

        <p className="mt-4 text-xs text-bone-muted/70">
          Representative press feature shown for demonstration purposes.
        </p>
      </div>
    </section>
  );
}
