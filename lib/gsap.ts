import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isRegistered = false;

export function getGsap() {
  if (!isRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    /** Reduces catch-up / smoothing lag; better for scroll-scrubbed transforms. */
    gsap.ticker.lagSmoothing(0);
    isRegistered = true;
  }

  return gsap;
}
