"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";

export function Hero() {
  const scope = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !scope.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-hero-headline]",
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.9 },
      )
        .fromTo(
          "[data-hero-subtext]",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.55",
        )
        .fromTo(
          "[data-hero-cta]",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          "-=0.45",
        )
        .fromTo(
          "[data-hero-image]",
          { clipPath: "inset(0 0 100% 0)" },
          { clipPath: "inset(0 0 0% 0)", duration: 1.1, ease: "power4.out" },
          0.1,
        );
    }, scope);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      id="top"
      ref={scope}
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:gap-8 md:px-10">
        <div className="md:col-span-7">
          <h1
            data-hero-headline
            className="max-w-lg font-display text-5xl leading-[1.08] tracking-tight text-bone md:text-7xl"
          >
            Lorem ipsum <em className="italic text-moss-strong">dolor</em> sit
            amet.
          </h1>
          <p
            data-hero-subtext
            className="mt-6 max-w-md text-base leading-relaxed text-bone-muted md:text-lg"
          >
            Consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua ut enim minim.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              data-hero-cta
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-moss px-6 py-3.5 text-sm font-semibold text-ink transition-transform duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-moss-strong"
            >
              Book Consult
              <ArrowRight size={16} weight="bold" />
            </a>
            <a
              data-hero-cta
              href="#practice"
              className="inline-flex items-center rounded-full border border-ink-line px-6 py-3.5 text-sm font-semibold text-bone transition-colors duration-150 hover:border-moss/60 hover:text-moss-strong"
            >
              View Practice
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div
            data-hero-image
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] border border-ink-line"
          >
            <Image
              src="https://picsum.photos/seed/lorem-ipsum-attorney-portrait/900/1125"
              alt="Portrait of attorney in office"
              fill
              priority
              fetchPriority="high"
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
