"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Reveals every element matching `selector` inside the returned scope as it
 * enters the viewport. Motivated by hierarchy: content arrives in the order
 * the reader should notice it, not all at once.
 */
export function useScrollReveal<T extends HTMLElement>(selector: string) {
  const scope = useRef<T>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !scope.current) return;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(selector);
      targets.forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: index * 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, scope);

    return () => ctx.revert();
  }, [reduce, selector]);

  return scope;
}
