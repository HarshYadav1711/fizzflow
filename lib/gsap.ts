import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isRegistered = false;

/** Singleton GSAP + ScrollTrigger registration; ticker tuned for scroll-linked motion. */
export function getGSAP() {
  if (!isRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.ticker.lagSmoothing(0);
    isRegistered = true;
  }

  return gsap;
}
