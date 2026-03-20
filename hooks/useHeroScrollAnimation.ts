"use client";

import { useLayoutEffect } from "react";
import { getGsap } from "@/lib/gsap";

type HeroRefs = {
  root: React.RefObject<HTMLElement | null>;
  heading: React.RefObject<HTMLHeadingElement | null>;
  body: React.RefObject<HTMLParagraphElement | null>;
  visualWrap: React.RefObject<HTMLDivElement | null>;
  ringA: React.RefObject<HTMLDivElement | null>;
  ringB: React.RefObject<HTMLDivElement | null>;
  orb: React.RefObject<HTMLDivElement | null>;
};

export function useHeroScrollAnimation(refs: HeroRefs) {
  useLayoutEffect(() => {
    const gsap = getGsap();

    const {
      root,
      heading,
      body,
      visualWrap,
      ringA,
      ringB,
      orb
    } = refs;

    if (
      !root.current ||
      !heading.current ||
      !body.current ||
      !visualWrap.current ||
      !ringA.current ||
      !ringB.current ||
      !orb.current
    ) {
      return;
    }

    const context = gsap.context(() => {
      const scrollConfig = {
        trigger: root.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      };

      gsap.fromTo(
        heading.current,
        { opacity: 1, yPercent: 0 },
        { opacity: 0.25, yPercent: -22, ease: "none", scrollTrigger: scrollConfig }
      );

      gsap.fromTo(
        body.current,
        { opacity: 1, yPercent: 0 },
        { opacity: 0, yPercent: -16, ease: "none", scrollTrigger: scrollConfig }
      );

      gsap.fromTo(
        visualWrap.current,
        { yPercent: 0, scale: 1, opacity: 1 },
        { yPercent: -18, scale: 0.92, opacity: 0.65, ease: "none", scrollTrigger: scrollConfig }
      );

      gsap.fromTo(
        ringA.current,
        { rotate: 0, scale: 1 },
        { rotate: 28, scale: 1.08, ease: "none", scrollTrigger: scrollConfig }
      );

      gsap.fromTo(
        ringB.current,
        { rotate: 0, scale: 1 },
        { rotate: -22, scale: 0.94, ease: "none", scrollTrigger: scrollConfig }
      );

      gsap.fromTo(
        orb.current,
        { yPercent: 0, scale: 1, opacity: 1 },
        { yPercent: -30, scale: 1.2, opacity: 0.6, ease: "none", scrollTrigger: scrollConfig }
      );
    }, root);

    return () => {
      context.revert();
    };
  }, [refs]);
}
