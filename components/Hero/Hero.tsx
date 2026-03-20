"use client";

import { memo, useRef } from "react";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { useHeroVisualMouseParallax } from "@/hooks/useHeroVisualMouseParallax";
import { HeadlineLetters } from "./HeadlineLetters";
import { HERO_HEADLINE_LINES, HERO_STATS } from "./hero.constants";

function HeroRoot() {
  const rootRef = useRef<HTMLElement>(null);
  const visualOuterRef = useRef<HTMLDivElement>(null);
  const visualParallaxRef = useRef<HTMLDivElement>(null);
  useHeroAnimation(rootRef);
  useHeroVisualMouseParallax({
    sectionRef: rootRef,
    outerVisualRef: visualOuterRef,
    innerParallaxRef: visualParallaxRef
  });

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-[220vh] flex-col overflow-hidden bg-[#0B0B0F] px-4 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16"
      aria-labelledby="hero-heading"
    >
      {/* Whisper top fade — stays on #0B0B0F base; no accent hues */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.025] via-transparent to-transparent"
        aria-hidden
      />
      <div className="hero-noise" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col">
        <header className="shrink-0 pt-1">
          <h1
            id="hero-heading"
            className="max-w-[18ch] text-[clamp(2.25rem,6vw,3.75rem)] font-medium uppercase leading-[1.05] tracking-[0.22em] text-white md:tracking-[0.26em]"
          >
            {HERO_HEADLINE_LINES.map((line, lineIndex) => (
              <span
                key={line}
                className={lineIndex === 0 ? "block" : "mt-3 block md:mt-4"}
              >
                <HeadlineLetters text={line} />
              </span>
            ))}
          </h1>
        </header>

        <div className="relative flex min-h-0 flex-1 flex-col items-center justify-center py-12 md:py-16 lg:py-20">
          {/* Radial depth: centered on the orb region (this flex cell) */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_78%_72%_at_50%_50%,rgba(255,255,255,0.028)_0%,rgba(22,22,30,0.42)_40%,rgba(11,11,15,0)_72%)]"
            aria-hidden
          />

          <div
            ref={visualOuterRef}
            data-hero-visual
            className="relative z-10 flex aspect-square w-full max-w-[min(100%,22rem)] items-center justify-center backface-hidden will-change-transform sm:max-w-md"
            aria-hidden
          >
            <div
              ref={visualParallaxRef}
              className="relative flex h-full w-full items-center justify-center will-change-transform"
            >
              <div className="pointer-events-none absolute inset-[11%] rotate-[22deg] rounded-full border border-white/[0.14]" />

              <div className="relative h-14 w-14 rounded-full bg-white shadow-[0_0_28px_rgba(255,255,255,0.2),0_0_72px_rgba(255,255,255,0.08),0_0_120px_rgba(255,255,255,0.04)] md:h-16 md:w-16" />
            </div>
          </div>
        </div>

        <footer className="shrink-0 border-t border-white/[0.08] pt-10 md:pt-14">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-12 sm:gap-x-12 md:grid-cols-4 md:gap-x-14">
            {HERO_STATS.map((item) => (
              <li
                key={item.label}
                className="flex max-w-[12rem] flex-col gap-2"
                data-hero-stat
              >
                <p className="text-[1.65rem] font-medium tabular-nums tracking-tight text-white md:text-[1.85rem]">
                  {item.value}
                </p>
                <p className="text-[0.65rem] font-medium uppercase leading-snug tracking-[0.2em] text-white/50">
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </section>
  );
}

export const Hero = memo(HeroRoot);
