import projects from "./projects.json";
import { trackSpotlight } from "../hooks/spotlight";

const GITHUB_PATH =
  "M5.851 3.001c.214-.006.492.012.835.085c.384.081.848.23 1.399.483c.355.164.748.373 1.179.637a12.9 12.9 0 0 1 5.738 0a11 11 0 0 1 1.268-.677c.724-.325 1.294-.463 1.723-.51a3 3 0 0 1 .553-.01a2 2 0 0 1 .285.046l.013.004l.006.001l.003.001h.002s.001.001-.277.962l.278-.96a1 1 0 0 1 .638.558a5.22 5.22 0 0 1 .283 3.37c.928 1.21 1.297 2.77 1.21 4.244c-.097 1.673-.789 3.386-2.123 4.505c-.859.72-1.88 1.122-2.888 1.356c.168.483.237.995.201 1.506V21a1 1 0 1 1-2 0v-2.435q0-.04.004-.08c.02-.26-.015-.522-.106-.768a1.85 1.85 0 0 0-.425-.663a1 1 0 0 1 .601-1.7c1.329-.144 2.498-.45 3.328-1.146c.827-.694 1.34-1.845 1.412-3.09c.073-1.243-.302-2.43-1.05-3.197a1 1 0 0 1-.218-1.055a3.2 3.2 0 0 0 .146-1.794c-.198.05-.457.137-.781.282a10 10 0 0 0-1.363.762a1 1 0 0 1-.803.13a10.9 10.9 0 0 0-5.578 0a1 1 0 0 1-.803-.13a10 10 0 0 0-1.294-.73a5 5 0 0 0-.85-.314a3.2 3.2 0 0 0 .146 1.794a1 1 0 0 1-.218 1.055c-.706.725-1.08 1.82-1.058 2.992s.438 2.293 1.145 3.037c.837.88 2.12 1.25 3.615 1.432a1 1 0 0 1 .59 1.697a1.85 1.85 0 0 0-.422.655c-.09.244-.127.502-.109.759l.003.072V21a1 1 0 1 1-2 0v-.462c-.653.083-1.237.06-1.765-.06c-.864-.198-1.483-.634-1.957-1.096a8 8 0 0 1-.597-.664l-.16-.198a12 12 0 0 0-.29-.35c-.279-.32-.433-.412-.557-.442a1 1 0 1 1 .474-1.943c.746.182 1.244.673 1.59 1.07c.123.14.251.3.366.442l.125.154c.154.189.296.354.446.5c.288.28.593.482 1.006.576c.31.071.732.093 1.314-.01a3.8 3.8 0 0 1 .211-1.409c-1.185-.283-2.393-.793-3.332-1.78c-1.11-1.167-1.666-2.797-1.695-4.378c-.026-1.383.351-2.824 1.221-3.958a5.2 5.2 0 0 1 .283-3.371a1 1 0 0 1 .638-.559l.278.96l-.278-.96h.003l.004-.002l.008-.002l.018-.005a1 1 0 0 1 .137-.028a2 2 0 0 1 .271-.024";

const ARROW_PATH =
  "M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z";

const hostOf = (url) => {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
};

const ProjectCard = () => {
  return (
    <>
      {projects.map((project, index) => {
        const featured = index === 0;
        // On 2-column tablets an odd leftover card spans the row instead of sitting alone.
        const orphanOnTablet =
          index === projects.length - 1 && (projects.length - 1) % 2 === 1;
        return (
          <article
            key={project.id}
            data-reveal-delay={`${0.08 * index}s`}
            onPointerMove={trackSpotlight}
            className={`project-card spotlight reveal relative flex flex-col h-full bg-card rounded-xl border group overflow-hidden focus-within:ring-2 focus-within:ring-primary/50 ${
              featured
                ? "md:col-span-2 xl:col-span-3 lg:grid lg:grid-cols-[1.25fr_1fr]"
                : orphanOnTablet
                  ? "md:col-span-2 xl:col-span-1 lg:grid lg:grid-cols-[1.25fr_1fr] xl:flex"
                  : ""
            }`}
          >
            {/* Screenshot in a minimal browser frame; pans on hover */}
            <div
              className={`p-3 pb-0 ${featured ? "lg:p-4 lg:pr-0" : orphanOnTablet ? "lg:p-4 lg:pr-0 xl:p-3 xl:pb-0" : ""}`}
            >
              <div className="rounded-t-md lg:rounded-md overflow-hidden border border-border/70 bg-background/60">
                <div className="flex items-center gap-1.5 px-3 h-7 border-b border-border/70">
                  <span className="size-2 rounded-full bg-foreground/15" />
                  <span className="size-2 rounded-full bg-foreground/15" />
                  <span className="size-2 rounded-full bg-foreground/15" />
                  <span className="ml-2 font-mono text-[0.6875rem] text-muted-foreground truncate">
                    {hostOf(project.link)}
                  </span>
                </div>
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  width={1200}
                  height={1200}
                  loading={featured ? "eager" : "lazy"}
                  decoding="async"
                  className={`w-full object-cover object-top transition-[object-position] duration-[2.4s] ease-in-out group-hover:object-[50%_40%] ${
                    featured ? "h-56 md:h-72 lg:h-[23rem]" : "h-48 md:h-56"
                  }`}
                />
              </div>
            </div>

            <div className="p-7 md:p-9 flex flex-col flex-1">
              <div className="mb-5 flex items-center gap-3 t-meta text-muted-foreground">
                <span className="text-foreground">
                  {String(project.id).padStart(2, "0")}
                </span>
                <span className="h-px w-6 bg-border" />
                <span>{project.projectType}</span>
                <span aria-hidden="true">·</span>
                <span>{project.year}</span>
              </div>

              <h3 className="t-h3 mb-2 transition-colors duration-300 group-hover:text-primary">
                {/* Stretched link: its ::after covers the card so it stays clickable */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
                >
                  {project.title}
                </a>
              </h3>
              <p className="flex items-center gap-2 t-small text-muted-foreground mb-5">
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full"
                  style={{ background: project.accent }}
                />
                {project.tagline}
              </p>

              <p className="text-foreground/85 mb-5">{project.summary}</p>

              <ul className="mb-6 space-y-2 t-small">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.6em] h-px w-3 shrink-0 bg-primary"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {project.metrics?.length > 0 && (
                <div className="mb-6">
                  <dl className="grid grid-cols-3 gap-2">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-md bg-muted/60 px-3 py-2.5 flex flex-col-reverse"
                      >
                        <dt className="t-meta text-muted-foreground">
                          {m.label}
                        </dt>
                        <dd className="font-display text-2xl font-bold text-foreground leading-none mb-1.5">
                          {m.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  {project.metricsSource && (
                    <p className="t-meta text-muted-foreground mt-2">
                      {project.metricsSource}
                    </p>
                  )}
                </div>
              )}

              <div className="mt-auto pt-5 border-t border-border/70 flex justify-between items-end gap-4">
                <ul className="flex gap-1.5 flex-wrap" aria-label="Tech stack">
                  {project.stack.map((stack) => (
                    <li key={stack} className="badge">
                      {stack}
                    </li>
                  ))}
                </ul>
                <div className="relative z-10 flex items-center gap-2 shrink-0">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code on GitHub`}
                      className="inline-flex p-2.5 rounded-full bg-secondary hover:bg-foreground hover:text-background transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-3.5"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d={GITHUB_PATH}
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live site`}
                    className="inline-flex p-3 rounded-full bg-secondary group-hover:bg-primary transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="0.8"
                      className="size-3.5 rotate-225 text-foreground transition-transform duration-300 group-hover:text-background group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d={ARROW_PATH}
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};
export default ProjectCard;
