"use client";

import Image from "next/image";
import { GraduationCap, MapPin } from "@phosphor-icons/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CREDENTIALS = [
  { icon: GraduationCap, label: "Lorem University, J.D." },
  { icon: MapPin, label: "Ipsum Dolor, Sit State" },
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
              src="https://picsum.photos/seed/lorem-ipsum-desk-study/900/1125"
              alt="Attorney reviewing documents at a desk"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 35vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div data-reveal className="md:col-span-7">
          <h2 className="font-display text-4xl leading-tight text-bone md:text-5xl">
            Sit amet <em className="italic text-moss-strong">consectetur</em>.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-muted">
            Ut enim ad minim veniam quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-bone-muted">
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>

          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-8">
            {CREDENTIALS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm text-bone">
                <Icon size={20} weight="light" className="text-moss-strong" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
