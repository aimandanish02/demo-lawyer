"use client";

import Image from "next/image";
import { FileArrowDown, GraduationCap, MapPin } from "@phosphor-icons/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CREDENTIALS = [
  { icon: GraduationCap, label: "Meridian University School of Law, J.D." },
  { icon: MapPin, label: "Cedar Falls, Meridian" },
];

export function About() {
  const scope = useScrollReveal<HTMLDivElement>("[data-reveal]");

  return (
    <section id="about" className="py-(--space-section)">
      <div
        ref={scope}
        className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:gap-10 md:px-10"
      >
        <div data-reveal className="md:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] border border-ink-line">
            <Image
              src="https://images.unsplash.com/photo-1758518729929-8210d3b0839e?q=80&w=900&h=1125&fit=crop&crop=faces&auto=format"
              alt="Elena Marchetti reviewing documents at her desk"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 35vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div data-reveal className="md:col-span-7">
          <h2 className="font-display text-4xl leading-tight text-bone md:text-5xl">
            Seventeen years in <em className="italic text-moss-strong">the room</em>.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-muted">
            Elena spent nine years as senior litigation associate at
            Calloway &amp; Voss LLP before opening her own practice in 2016.
            She has argued before the Meridian Court of Appeals and tried
            cases to verdict in both civil and criminal courts.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-bone-muted">
            Her practice is deliberately small — every client works directly
            with Elena, not a rotating team of associates.
          </p>

          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-8">
            {CREDENTIALS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm text-bone">
                <Icon size={20} weight="light" className="text-moss-strong" />
                {label}
              </li>
            ))}
          </ul>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink-line px-6 py-3.5 text-sm font-semibold text-bone transition-colors duration-150 hover:border-moss/60 hover:text-moss-strong"
          >
            View Resume
            <FileArrowDown size={16} weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
}
