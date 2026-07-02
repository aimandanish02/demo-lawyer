"use client";

import Image from "next/image";
import {
  Briefcase,
  FileText,
  House,
  Scales,
  UsersThree,
} from "@phosphor-icons/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PRACTICE_AREAS = [
  {
    icon: Scales,
    title: "Lorem Ipsum",
    description:
      "Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.",
    featured: true,
  },
  {
    icon: Briefcase,
    title: "Dolor Sit",
    description: "Ut labore et dolore magna aliqua ut enim minim veniam.",
    tint: true,
  },
  {
    icon: House,
    title: "Consectetur",
    description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    icon: UsersThree,
    title: "Adipiscing Elit",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit.",
    tint: true,
  },
  {
    icon: FileText,
    title: "Eiusmod Tempor",
    description: "Excepteur sint occaecat cupidatat non proident sunt culpa.",
  },
];

export function PracticeAreas() {
  const scope = useScrollReveal<HTMLDivElement>("[data-reveal]");

  return (
    <section id="practice" className="py-(--space-section)">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <h2 className="max-w-xl font-display text-4xl leading-tight text-bone md:text-5xl">
          Consectetur adipiscing elit.
        </h2>

        <div
          ref={scope}
          className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[180px] lg:grid-flow-dense"
        >
          {PRACTICE_AREAS.map(({ icon: Icon, title, description, featured, tint }) => (
            <article
              key={title}
              data-reveal
              className={[
                "relative flex flex-col justify-end overflow-hidden rounded-[20px] border border-ink-line p-6",
                featured
                  ? "md:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[280px]"
                  : "min-h-[180px]",
                tint ? "bg-moss/10" : featured ? "" : "bg-ink-raised",
              ].join(" ")}
            >
              {featured && (
                <Image
                  src="https://picsum.photos/seed/lorem-ipsum-law-office/900/900"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="absolute inset-0 -z-10 object-cover"
                />
              )}
              {featured && (
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              )}

              <Icon
                size={26}
                weight="light"
                className="mb-4 text-moss-strong"
              />
              <h3 className="font-display text-xl text-bone md:text-2xl">
                {title}
              </h3>
              <p className="mt-2 max-w-[38ch] text-sm leading-relaxed text-bone-muted">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
