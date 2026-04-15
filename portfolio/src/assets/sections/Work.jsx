import ProjectCard from "../components/projects-card";

const Work = () => {
  return (
    <section id="work" className="section ">
      <p className="title">SELECTED WORK</p>
      <h2 className="font-display text-3xl md:text-5xl text-foreground font-bold mb-4">
        Things I've Built
      </h2>
      <p className="w-full md:w-100">
        Personal project, open-source tools, and experiments that keep me sharp.
      </p>
      <div className="projects mt-12 grid grid-cols-1 gap-6 justify-center items-center md:grid-cols-2">
        <ProjectCard />
      </div>
    </section>
  );
};

export default Work;
