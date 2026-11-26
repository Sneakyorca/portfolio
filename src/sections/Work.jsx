import ProjectCard from "../components/projects-card";
import moreWork from "../components/more-work.json";

const ARROW =
  "M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z";

const hostOf = (url) => {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
};

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
        <div>
          <p className="title fade-in">Selected work</p>
          <h2 className="fade-in-up t-h2" data-reveal-delay="0.06s">
            Things I&apos;ve built
          </h2>
        </div>
        <p
          className="fade-in t-lead max-w-md lg:text-right"
          data-reveal-delay="0.12s"
        >
          A mix of freelance client work and personal builds, each designed and
          shipped end to end.
        </p>
      </div>

      <div className="projects grid grid-cols-1 gap-6 items-stretch md:grid-cols-2 xl:grid-cols-3">
        <ProjectCard />
      </div>

      {/* Shorter list for client work that doesn't need a full case study */}
      <div className="mt-20">
        <p className="muted-text mb-4 fade-in">More client work</p>
        <ul className="border-t border-border">
          {moreWork.map((item, i) => (
            <li
              key={item.link}
              className="reveal"
              data-reveal-delay={`${0.06 * i}s`}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-x-8 gap-y-2 py-6 border-b border-border md:grid-cols-[13rem_minmax(0,1fr)_auto] lg:grid-cols-[16rem_minmax(0,1fr)_auto] md:items-center"
              >
                <div>
                  <h3 className="t-h4 transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="t-small text-muted-foreground">
                    {item.tagline}
                  </p>
                </div>
                <p className="t-small max-w-md">{item.summary}</p>
                <div className="flex items-center gap-4 md:justify-end">
                  <ul className="flex gap-1.5" aria-label="Tech stack">
                    {item.stack.map((s) => (
                      <li key={s} className="badge">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <span className="t-meta text-muted-foreground hidden xl:inline">
                    {hostOf(item.link)}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-3.5 shrink-0 rotate-225 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d={ARROW} clipRule="evenodd" />
                  </svg>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Work;
