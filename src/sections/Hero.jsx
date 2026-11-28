import Magnetic from "../components/magnetic";
import RotatingWord from "../components/rotating-word";
import HeroShowcase from "../components/hero-showcase";
import { clientProjects, totalProjects } from "../components/work-stats";

const stats = [
  { value: "2+", label: "Years building" },
  { value: String(totalProjects), label: "Projects shipped" },
  { value: String(clientProjects), label: "For clients" },
];

const ARROW_RIGHT =
  "M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z";
const ARROW_DOWN =
  "M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative isolate section grid lg:grid-cols-[1.05fr_1fr] items-center gap-x-12 gap-y-16"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border)/0.35)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.35)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_30%_40%,black_30%,transparent_100%)]"
      />

      <div>
        <p
          className="fade-in-up t-eyebrow flex items-center gap-3 mb-8 text-muted-foreground"
          data-reveal-delay="0.05s"
        >
          <span className="relative flex size-2">
            <span className="absolute inset-0 rounded-full bg-green-500 ripple" />
            <span className="relative size-2 rounded-full bg-green-500" />
          </span>
          Taking on new projects · Lagos and UK
        </p>

        <h1
          className="fade-in-up t-display hero-title mb-8"
          data-reveal-delay="0.12s"
        >
          I build
          <br />
          the web for
          <br />
          <RotatingWord
            className="text-primary"
            words={["studios.", "salons.", "traders.", "agencies.", "AI apps."]}
          />
        </h1>

        <p className="fade-in t-lead max-w-lg mb-10" data-reveal-delay="0.2s">
          Booking sites and websites for small businesses, built in React and
          Next.js. Since 2024 I&apos;ve shipped {totalProjects} projects,{" "}
          {clientProjects} of them for paying clients.
        </p>

        <div
          className="fade-in flex flex-wrap items-center gap-4 font-display font-semibold mb-12"
          data-reveal-delay="0.28s"
        >
          <Magnetic>
            <a
              href="#contact"
              className="group/cta flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground dark:text-background hover:bg-primary/90 hover:shadow-[0_8px_24px_-8px_hsl(var(--primary)/0.6)] transition-[background-color,box-shadow] duration-300"
            >
              Start a project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4 transition-transform duration-300 group-hover/cta:translate-x-1"
                aria-hidden="true"
              >
                <path fillRule="evenodd" d={ARROW_RIGHT} clipRule="evenodd" />
              </svg>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#work"
              className="inline-block px-7 py-3.5 rounded-full text-foreground border hover:bg-muted/60 transition-colors duration-300"
            >
              See my work
            </a>
          </Magnetic>
        </div>

        <dl
          className="fade-in flex divide-x divide-border"
          data-reveal-delay="0.34s"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col-reverse px-4 sm:px-6 first:pl-0 last:pr-0"
            >
              <dt className="t-meta text-muted-foreground mt-2">{s.label}</dt>
              <dd className="font-display font-extrabold text-foreground text-3xl md:text-4xl leading-none tracking-tight">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="slide-in-right" data-reveal-delay="0.25s">
        <HeroShowcase />
      </div>

      <a
        href="#work"
        className="fade-in t-meta absolute bottom-0 left-6 md:left-12 lg:left-20 hidden lg:flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        data-reveal-delay="0.42s"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-3.5 animate-bounce"
          aria-hidden="true"
        >
          <path fillRule="evenodd" d={ARROW_DOWN} clipRule="evenodd" />
        </svg>
        Scroll to explore
      </a>
    </section>
  );
};

export default Hero;
