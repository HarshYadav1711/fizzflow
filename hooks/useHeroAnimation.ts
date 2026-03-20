"use client";

import { useLayoutEffect, type RefObject } from "react";
import { getGsap } from "@/lib/gsap";

/**
 * Hero intro (timeline) + scroll-scrubbed visual (ScrollTrigger).
 * Intro: willChange hints during tween, cleared onComplete to avoid stale layers.
 * Scroll: transform-only scrub; force3D + willChange on visual for compositor path.
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
        gsap.set(letters, { willChange: "transform,opacity" });
        if (stats.length > 0) {
          gsap.set(stats, { willChange: "transform,opacity" });
        }

        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        tl.fromTo(
          letters,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.035,
            force3D: true
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
              stagger: 0.1,
              force3D: true
            },
            ">+=0.12"
          );
        }

        tl.eventCallback("onComplete", () => {
          gsap.set(letters, { clearProps: "willChange" });
          if (stats.length > 0) {
            gsap.set(stats, { clearProps: "willChange" });
          }
        });
      }

      if (visual) {
        gsap.set(visual, { willChange: "transform" });

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
