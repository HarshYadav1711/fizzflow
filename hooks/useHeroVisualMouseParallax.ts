"use client";

import { useEffect, type RefObject } from "react";
import { getGSAP } from "@/lib/gsap";

/** Max nudge in px — kept tiny so motion stays “almost invisible”. */
const MAX_PARALLAX_PX = 5;

/** Clamps to [-1, 1] for normalized pointer offset. */
function clampSigned(n: number) {
  return Math.max(-1, Math.min(1, n));
}

type ParallaxRefs = {
  sectionRef: RefObject<HTMLElement | null>;
  outerVisualRef: RefObject<HTMLElement | null>;
  innerParallaxRef: RefObject<HTMLElement | null>;
};

/**
 * Subtle pointer parallax on `innerParallaxRef` only.
 * Scroll/scrub stays on `[data-hero-visual]` (outer); transforms do not conflict.
 */
export function useHeroVisualMouseParallax({
  sectionRef,
  outerVisualRef,
  innerParallaxRef
}: ParallaxRefs) {
  useEffect(() => {
    const section = sectionRef.current;
    const outer = outerVisualRef.current;
    const inner = innerParallaxRef.current;
    if (!section || !outer || !inner) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const gsap = getGSAP();

    const xTo = gsap.quickTo(inner, "x", { duration: 0.65, ease: "power2.out" });
    const yTo = gsap.quickTo(inner, "y", { duration: 0.65, ease: "power2.out" });
    gsap.set(inner, { force3D: true, x: 0, y: 0 });

    let rafId = 0;

    const onMove = (e: PointerEvent) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        const r = outer.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const denom = Math.max(r.width, r.height) * 0.42 + 48;
        const nx = clampSigned((e.clientX - cx) / denom);
        const ny = clampSigned((e.clientY - cy) / denom);
        xTo(nx * MAX_PARALLAX_PX);
        yTo(ny * MAX_PARALLAX_PX);
      });
    };

    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    section.addEventListener("pointermove", onMove, { passive: true });
    section.addEventListener("pointerleave", onLeave);

    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      if (rafId) cancelAnimationFrame(rafId);
      gsap.set(inner, { clearProps: "x,y" });
    };
  }, [sectionRef, outerVisualRef, innerParallaxRef]);
}
