import ProjectCard from "../components/projects-card";

const Work = () => {
  return (
    <section id="work" className="section">
      <p className="title fade-in">SELECTED WORK</p>
      <h2
        className="fade-in-up font-display text-3xl md:text-5xl text-foreground font-bold mb-4"
        data-reveal-delay="0.06s"
      >
        Things I've Built
      </h2>
      <p className="fade-in w-full md:w-100" data-reveal-delay="0.12s">
        Personal project, open-source tools, and experiments that keep me sharp.
      </p>
      <div
        className="projects reveal mt-12 grid grid-cols-1 gap-6 justify-center items-center md:grid-cols-2"
        data-reveal-delay="0.18s"
      >
        <ProjectCard />
      </div>
    </section>
  );
};

export default Work;
