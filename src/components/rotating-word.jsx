import { useEffect, useState } from "react";

/**
 * Cycles through `words` with a masked vertical slide.
 * Screen readers get the first word only; the motion is decorative.
 * With reduced motion the first word is shown statically.
 */
const RotatingWord = ({ words, interval = 2400, className = "" }) => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      // Pause while the tab is hidden (browsers skip transitions there).
      if (document.hidden) return;
      setAnimate(true);
      setIndex((i) => (i >= words.length ? 0 : i + 1));
    }, interval);
    return () => clearInterval(id);
  }, [interval, words.length]);

  // After sliding onto the duplicated first word, jump back to 0 invisibly.
  // Timer-based (not transitionend) so it can never get stuck past the end.
  useEffect(() => {
    if (index < words.length) return;
    const t = setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, 750);
    return () => clearTimeout(t);
  }, [index, words.length]);

  const loop = [...words, words[0]];
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a));

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="sr-only">{words[0]}</span>
      {/* Invisible sizer keeps the line width stable while words change */}
      <span aria-hidden="true" className="invisible">
        {longest}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden"
        style={{ height: "1.1em", top: "-0.09em" }}
      >
        <span
          className="flex flex-col"
          style={{
            transform: `translateY(-${index * 1.1}em)`,
            transition: animate
              ? "transform 0.7s cubic-bezier(0.76, 0, 0.24, 1)"
              : "none",
          }}
        >
          {loop.map((word, i) => (
            <span key={i} className="block leading-[1.1em] h-[1.1em]">
              {word}
            </span>
          ))}
        </span>
      </span>
    </span>
  );
};

export default RotatingWord;
