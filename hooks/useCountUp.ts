"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Counts a number up from 0 to `value` once its element scrolls into view.
 * Motivated by feedback: it signals "this is a live figure", not static copy.
 */
export function useCountUp<T extends HTMLElement>(value: number, decimals = 0) {
  const ref = useRef<T>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduce) {
      el.textContent = value.toFixed(decimals);
      return;
    }

    const proxy = { count: 0 };
    const tween = gsap.to(proxy, {
      count: value,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        el.textContent = proxy.count.toFixed(decimals);
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value, decimals, reduce]);

  return ref;
}
