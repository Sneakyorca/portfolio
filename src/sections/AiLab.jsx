import aiProjects from "../components/ai-projects.json";

const ARROW =
  "M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z";

/**
 * Side projects built quickly with AI tools. Kept separate from client work
 * and labelled clearly. Renders nothing until ai-projects.json has entries.
 *
 * Entry shape: { title, summary, link, builtWith: ["Claude Code"], stack: ["Next.js"] }
 */
const AiLab = () => {
  if (!aiProjects.length) return null;

  return (
    <section id="lab" className="section">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
        <div>
          <p className="title fade-in">Built with AI</p>
          <h2 className="fade-in-up t-h2" data-reveal-delay="0.06s">
            Experiments
          </h2>
        </div>
        <p
          className="fade-in t-lead max-w-md lg:text-right"
          data-reveal-delay="0.12s"
        >
          Side projects I built quickly with AI tools, to test ideas and learn
          new stacks.
        </p>
      </div>

      {/* Never leave an empty column: 2 projects → 2 columns, 3+ → 3 */}
      <ul
        className={`grid gap-4 sm:grid-cols-2 ${aiProjects.length > 2 ? "lg:grid-cols-3" : ""}`}
      >
        {aiProjects.map((p, i) => (
          <li
            key={p.link}
            className="reveal"
            data-reveal-delay={`${0.06 * (i % 3)}s`}
          >
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-xl border bg-card/40 p-6 transition-colors hover:bg-card"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="t-h4 transition-colors group-hover:text-primary">
                  {p.title}
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-1 size-3.5 shrink-0 rotate-225 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d={ARROW} clipRule="evenodd" />
                </svg>
              </div>
              <p className="t-small mb-5">{p.summary}</p>
              <div className="mt-auto space-y-3">
                {p.builtWith?.length > 0 && (
                  <p className="t-meta text-primary">
                    Built with {p.builtWith.join(", ")}
                  </p>
                )}
                {p.lighthouse && (
                  <p className="t-small text-muted-foreground">
                    Lighthouse mobile:{" "}
                    <span className="font-semibold text-foreground">
                      {p.lighthouse.performance}
                    </span>{" "}
                    performance,{" "}
                    <span className="font-semibold text-foreground">
                      {p.lighthouse.lcp}
                    </span>{" "}
                    LCP
                  </p>
                )}
                <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
                  {(p.stack || []).map((s) => (
                    <li key={s} className="badge">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AiLab;
