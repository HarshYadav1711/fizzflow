import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isRegistered = false;

/**
 * Returns the GSAP instance. First call runs one-time setup:
 * ScrollTrigger registration + `gsap.ticker.lagSmoothing(0)` (no duplicate calls).
 */
export function getGSAP() {
  if (!isRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.ticker.lagSmoothing(0);
    isRegistered = true;
  }

  return gsap;
}
