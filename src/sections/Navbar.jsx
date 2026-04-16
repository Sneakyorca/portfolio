import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../hooks/ThemeContext";
const navItems = ["about", "work", "skills", "contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-lg border-b border-border/50 shadow-xs"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-24 flex items-center justify-between">
          <a
            href="#"
            className="font-display text-lg font-bold tracking-tight text-foreground"
          >
            abdulmaleek<span className="text-primary">.</span>dev
          </a>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="relative text-sm font-body text-muted-foreground hover:text-foreground active:text-foreground transition-colors duration-200 capitalize after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full active:after:w-full"
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="relative w-10 h-10 rounded-full flex items-center justify-center bg-secondary text-foreground hover:bg-secondary/80 active:bg-secondary/80 transition-all duration-300 cursor-pointer"
              aria-label="Toggle theme"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-0 absolute dark:w-4.5 dark:rotate-360 rotate-0 dark:opacity-100 opacity-0 transition-all duration-500 ease-in-out"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4.5 absolute rotate-0 opacity-100 dark:w-0 dark:opacity-0 dark:rotate-360 transition-all duration-500 ease-in-out"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            </button>

            <button
              onClick={() => {
                if (window.innerWidth < 768) {
                  setMobileOpen((current) => !current);
                } else {
                  setMobileOpen(false);
                }
              }}
              className="md:hidden w-10 h-10 rounded-full flex items-center justify-center bg-secondary text-foreground cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navItems.map((item, i) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setMobileOpen(false)}
            className="text-3xl font-display font-bold text-foreground hover:text-primary active:text-primary transition-colors capitalize"
            style={{
              transitionDelay: mobileOpen ? `${i * 75}ms` : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.4s ease, transform 0.4s ease, color 0.2s ease",
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
