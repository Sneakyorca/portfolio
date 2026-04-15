import projects from "./projects.json";
const ProjectCard = () => {
  return (
    <>
      {projects.map((project) => (
        <div
          className={
            "project-card cursor-pointer hover:shadow-lg hover:shadow-primary/5 active:shadow-lg active:shadow-primary/5 " +
            project.id +
            ` bg-card dark:bg-card rounded-xl border group`
          }
          key={project.id}
        >
          <img src={project.image} alt={project.title} />
          <div className="p-10">
            <div className="mb-4 flex gap-4 items-center">
              <span className="badge">{project.year}</span>
              <span className="inline-block text-xs text-gray-400 dark:text-gray-600">
                {project.projectType}
              </span>
            </div>
            <h3 className="text-2xl font-display text-foreground mb-4 font-bold">
              {project.title}
            </h3>
            <p className="mb-6 font-sm">{project.description}</p>
            <div className="project-stack flex justify-between items-center gap-3">
              <div className="flex gap-2 flex-wrap">
                {project.stack.map((stack, index) => (
                  <span key={index} className="badge">
                    {stack}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                {" "}
                <a
                  href={project.repo}
                  className="inline-block p-2.5 rounded-full bg-secondary -translate-x-3 opacity-0 group-hover:translate-0 group-hover:opacity-100 group-active:translate-0 group-active:opacity-100 transition-all duration-300"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-3.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.851 3.001c.214-.006.492.012.835.085c.384.081.848.23 1.399.483c.355.164.748.373 1.179.637a12.9 12.9 0 0 1 5.738 0a11 11 0 0 1 1.268-.677c.724-.325 1.294-.463 1.723-.51a3 3 0 0 1 .553-.01a2 2 0 0 1 .285.046l.013.004l.006.001l.003.001h.002s.001.001-.277.962l.278-.96a1 1 0 0 1 .638.558a5.22 5.22 0 0 1 .283 3.37c.928 1.21 1.297 2.77 1.21 4.244c-.097 1.673-.789 3.386-2.123 4.505c-.859.72-1.88 1.122-2.888 1.356c.168.483.237.995.201 1.506V21a1 1 0 1 1-2 0v-2.435q0-.04.004-.08c.02-.26-.015-.522-.106-.768a1.85 1.85 0 0 0-.425-.663a1 1 0 0 1 .601-1.7c1.329-.144 2.498-.45 3.328-1.146c.827-.694 1.34-1.845 1.412-3.09c.073-1.243-.302-2.43-1.05-3.197a1 1 0 0 1-.218-1.055a3.2 3.2 0 0 0 .146-1.794c-.198.05-.457.137-.781.282a10 10 0 0 0-1.363.762a1 1 0 0 1-.803.13a10.9 10.9 0 0 0-5.578 0a1 1 0 0 1-.803-.13a10 10 0 0 0-1.294-.73a5 5 0 0 0-.85-.314a3.2 3.2 0 0 0 .146 1.794a1 1 0 0 1-.218 1.055c-.706.725-1.08 1.82-1.058 2.992s.438 2.293 1.145 3.037c.837.88 2.12 1.25 3.615 1.432a1 1 0 0 1 .59 1.697a1.85 1.85 0 0 0-.422.655c-.09.244-.127.502-.109.759l.003.072V21a1 1 0 1 1-2 0v-.462c-.653.083-1.237.06-1.765-.06c-.864-.198-1.483-.634-1.957-1.096a8 8 0 0 1-.597-.664l-.16-.198a12 12 0 0 0-.29-.35c-.279-.32-.433-.412-.557-.442a1 1 0 1 1 .474-1.943c.746.182 1.244.673 1.59 1.07c.123.14.251.3.366.442l.125.154c.154.189.296.354.446.5c.288.28.593.482 1.006.576c.31.071.732.093 1.314-.01a3.8 3.8 0 0 1 .211-1.409c-1.185-.283-2.393-.793-3.332-1.78c-1.11-1.167-1.666-2.797-1.695-4.378c-.026-1.383.351-2.824 1.221-3.958a5.2 5.2 0 0 1 .283-3.371a1 1 0 0 1 .638-.559l.278.96l-.278-.96h.003l.004-.002l.008-.002l.018-.005a1 1 0 0 1 .137-.028a2 2 0 0 1 .271-.024"
                      className="Vector (Stroke)"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href={project.link}
                  className="inline-block p-3 rounded-full bg-secondary group-hover:bg-primary group-active:bg-primary transition-all duration-300"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    className="size-3.5 rotate-225 text-foreground group-hover:text-background group-active:text-background"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default ProjectCard;
