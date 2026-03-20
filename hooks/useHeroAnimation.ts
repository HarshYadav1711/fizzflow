"use client";

import { useLayoutEffect, type RefObject } from "react";
import { getGsap } from "@/lib/gsap";

/**
 * Hero intro (timeline) + scroll-scrubbed visual motion (ScrollTrigger).
 * Visual scroll uses transform only (y, scale, rotate); ease "none" + scrub.
 */
export function useHeroAnimation(rootRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const gsap = getGsap();

    const ctx = gsap.context(() => {
      const letters = root.querySelectorAll<HTMLElement>("[data-hero-letter]");
      const stats = root.querySelectorAll<HTMLElement>("[data-hero-stat]");
      const visual = root.querySelector<HTMLElement>("[data-hero-visual]");

      if (letters.length > 0) {
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
      }

      if (visual) {
        gsap.fromTo(
          visual,
          { yPercent: 0, scale: 1, rotation: 0 },
          {
            yPercent: -16,
            scale: 0.9,
            rotation: -8,
            ease: "none",
            force3D: true,
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true
            }
          }
        );
      }
    }, root);

    return () => {
      ctx.revert();
    };
  }, [rootRef]);
}
