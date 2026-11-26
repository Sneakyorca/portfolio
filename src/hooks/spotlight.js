// Pointer handler for `.spotlight` cards: feeds the cursor position into
// CSS custom properties that drive a soft radial highlight (see index.css).
export function trackSpotlight(e) {
  if (e.pointerType !== "mouse") return;
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
}
