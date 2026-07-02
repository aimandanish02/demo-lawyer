"use client";

import { Bank, Certificate, Scales, SealCheck } from "@phosphor-icons/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CREDENTIALS = [
  { icon: Scales, name: "Lorem State Bar", detail: "Admitted 2014" },
  { icon: Certificate, name: "Ipsum Bar Association", detail: "Member" },
  { icon: SealCheck, name: "Dolor Trial Lawyers", detail: "Fellow" },
  { icon: Bank, name: "Sit Federal Court", detail: "Admitted" },
];

export function TrustStrip() {
  const scope = useScrollReveal<HTMLDivElement>("[data-reveal]");

  return (
    <section
      aria-label="Bar admissions and credentials"
      className="border-y border-ink-line/60"
    >
      <div
        ref={scope}
        className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-8 px-6 py-10 md:grid-cols-4 md:gap-8 md:px-10 md:py-8"
      >
        {CREDENTIALS.map(({ icon: Icon, name, detail }) => (
          <div
            key={name}
            data-reveal
            className="flex items-center gap-3 text-bone-muted"
          >
            <Icon size={22} weight="light" className="shrink-0 text-moss-strong" />
            <div className="leading-tight">
              <p className="text-sm font-medium text-bone">{name}</p>
              <p className="text-xs text-bone-muted">{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
