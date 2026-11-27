import { createContext, useEffect, useState } from "react";
import { flushSync } from "react-dom";

const ThemeContext = createContext();

const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
  } catch {
    /* storage blocked: fall through to system preference */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const applyTheme = (theme) => {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  try {
    localStorage.setItem("theme", theme);
  } catch {
    /* ignore */
  }
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  /**
   * Switch theme. When called from a click, the new theme spreads out in a
   * circle from the pointer using the View Transitions API. Browsers without
   * it, or users with reduced motion, get an instant switch.
   */
  const toggleTheme = (event) => {
    const next = theme === "light" ? "dark" : "light";
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!document.startViewTransition || reduce) {
      setTheme(next);
      return;
    }

    const x = event?.clientX ?? window.innerWidth - 40;
    const y = event?.clientY ?? 40;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const root = document.documentElement;
    root.classList.add("theme-switching");
    const transition = document.startViewTransition(() => {
      flushSync(() => setTheme(next));
      applyTheme(next);
    });

    transition.ready.then(() => {
      root.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 650,
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
    transition.finished.finally(() => root.classList.remove("theme-switching"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeProvider };
