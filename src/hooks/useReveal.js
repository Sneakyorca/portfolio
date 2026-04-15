import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animatedSelector = [
      ".reveal",
      ".fade-in",
      ".fade-in-up",
      ".slide-in-right",
      ".slide-in-left",
    ].join(", ");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = revealDelayMap.get(entry.target);
            if (delay) {
              entry.target.style.transitionDelay = delay;
            }
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -12% 0px" },
    );

    const revealDelayMap = new Map();
    const children = Array.from(el.querySelectorAll(animatedSelector));

    children.forEach((child, index) => {
      const explicitDelay = child.getAttribute("data-reveal-delay");
      const hasDelayUtility = /(^|\s)delay-\d+(\s|$)/.test(child.className);

      if (explicitDelay) {
        revealDelayMap.set(child, explicitDelay);
      } else if (!hasDelayUtility) {
        // Apply a subtle fallback stagger for elements without explicit delay.
        revealDelayMap.set(child, `${(index % 6) * 0.05}s`);
      }

      observer.observe(child);
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}
