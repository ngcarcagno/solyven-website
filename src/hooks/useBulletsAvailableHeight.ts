import { RefObject, useEffect } from "react";

type Refs = {
  rootRef: RefObject<HTMLElement>;
  titleRef?: RefObject<HTMLElement>;
  introRef?: RefObject<HTMLElement>;
  ctaRef?: RefObject<HTMLElement>;
  padding?: number;
};

// Computes available vertical space for the bullets list and writes it to
// the CSS variable `--about-bullets-height` on the rootRef element.
export default function useBulletsAvailableHeight({ rootRef, titleRef, introRef, ctaRef, padding = 12 }: Refs) {
  useEffect(() => {
    if (!rootRef?.current) return;

    const update = () => {
      try {
        // Prefer measuring the real window innerHeight (handles desktop and mobile reliably)
        const viewportH = window.innerHeight || document.documentElement.clientHeight;

        // Header height may be provided as CSS var --header-height (e.g. "64px")
        const headerVar = getComputedStyle(document.documentElement).getPropertyValue("--header-height") || "";
        const headerHeight = headerVar ? parseFloat(headerVar) || 0 : 0;

        const titleH = titleRef?.current?.offsetHeight || 0;
        const introH = introRef?.current?.offsetHeight || 0;
        const ctaH = ctaRef?.current?.offsetHeight || 0;

        // extra safety gaps to avoid exact pixel collisions
        const safety = 8;

        // available space for bullets area
        const available = Math.max(
          80,
          Math.round(viewportH - headerHeight - titleH - introH - ctaH - padding - safety)
        );

        if (rootRef.current) {
          rootRef.current.style.setProperty("--about-bullets-height", `${available}px`);
        }
      } catch (err) {
        // fallback: do nothing
      }
    };

    update();

    // update on resize and orientation changes
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    // observe size changes of the measured elements (title/intro/cta) to recompute
    const ResizeObs = (window as any).ResizeObserver || null;
    let ro: any = null;
    if (ResizeObs) {
      ro = new ResizeObs(() => update());
      [titleRef?.current, introRef?.current, ctaRef?.current, rootRef?.current].forEach((el) => {
        if (el) ro.observe(el);
      });
    }

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
      if (ro) ro.disconnect();
    };
  }, [rootRef, titleRef, introRef, ctaRef, padding]);
}
