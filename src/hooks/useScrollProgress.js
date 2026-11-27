import { useEffect, useRef } from "react";

/**
 * Writes how far an element has been scrolled through into a `--progress`
 * CSS variable (0 → 1) on that element. Progress starts when the element's
 * top reaches `start` of the viewport height and ends when its bottom reaches
 * `end`. Children with `data-at` (0–1) get `is-reached` once progress passes it.
 * Works in every browser; with reduced motion it jumps straight to 1.
 */
export function useScrollProgress({ start = 0.8, end = 0.55 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const steps = [...el.querySelectorAll("[data-at]")];

    const set = (p) => {
      el.style.setProperty("--progress", p.toFixed(3));
      steps.forEach((s) =>
        s.classList.toggle("is-reached", p >= Number(s.dataset.at)),
      );
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      set(1);
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const from = vh * start; // top of element hits this line → 0
      const to = vh * end; // bottom of element hits this line → 1
      const total = r.height + (from - to);
      const p = Math.min(1, Math.max(0, (from - r.top) / total));
      set(p);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [start, end]);

  return ref;
}
