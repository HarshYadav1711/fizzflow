"use client";

import { useLayoutEffect, type RefObject } from "react";
import { getGsap } from "@/lib/gsap";

/**
 * Page-load hero intro: staggered letter headline, then staggered stats.
 * Scoped with gsap.context; no ScrollTrigger.
 */
export function useHeroAnimation(rootRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const gsap = getGsap();

    const ctx = gsap.context(() => {
      const letters = root.querySelectorAll<HTMLElement>("[data-hero-letter]");
      const stats = root.querySelectorAll<HTMLElement>("[data-hero-stat]");

      if (letters.length === 0) return;

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(
        letters,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.035
        }
      );

      if (stats.length > 0) {
        tl.fromTo(
          stats,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1
          },
          ">+=0.12"
        );
      }
    }, root);

    return () => {
      ctx.revert();
    };
  }, [rootRef]);
}
