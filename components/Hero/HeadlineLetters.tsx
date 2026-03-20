import { memo } from "react";

type HeadlineLettersProps = {
  text: string;
};

/**
 * One span per glyph for GSAP stagger; `data-hero-letter` is the animation selector.
 */
export const HeadlineLetters = memo(function HeadlineLetters({ text }: HeadlineLettersProps) {
  return (
    <>
      {text.split("").map((char, index) => (
        <span key={`${text}-${index}`} className="inline-block" data-hero-letter>
          {char}
        </span>
      ))}
    </>
  );
});
