import { useEffect, useRef } from "react";

/**
 * Lets a single interactive element lean toward the cursor once the pointer
 * comes within `radius` px of its edge, then springs back when it leaves.
 * Proximity is measured on window pointermove, so neighbouring magnetic
 * elements never steal each other's hit area. Mouse only; respects reduced motion.
 */
const Magnetic = ({
  children,
  strength = 0.35,
  radius = 80,
  className = "",
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;

    let frame = 0;
    let active = false;

    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        // Measure the untransformed box so the pull doesn't feed back on itself.
        const r = el.parentElement.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const near =
          Math.abs(dx) < r.width / 2 + radius &&
          Math.abs(dy) < r.height / 2 + radius;

        if (near) {
          active = true;
          el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
        } else if (active) {
          active = false;
          el.style.transform = "";
        }
      });
    };

    const reset = () => {
      active = false;
      el.style.transform = "";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", reset);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", reset);
    };
  }, [strength, radius]);

  return (
    <span className={`inline-block ${className}`}>
      <span ref={ref} className="magnetic-inner inline-block">
        {children}
      </span>
    </span>
  );
};

export default Magnetic;
