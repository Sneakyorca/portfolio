import OutlinedButton from "../components/outlined-button";
import SkillCard from "../components/skill-card";

const Skills = () => {
  return (
    <section id="skills" className="section bg-secondary/30">
      <p className="title fade-in">EXPERTISE</p>
      <h2
        className="fade-in-up text-4xl font-display text-foreground font-semibold mb-3"
        data-reveal-delay="0.06s"
      >
        My toolkit
      </h2>
      <p className="fade-in mb-16" data-reveal-delay="0.12s">
        Technologies and tools I use daily to bring ideas to life.
      </p>
      <div
        className="reveal grid gap-8 grid-cols-1 md:grid-cols-2 mb-12"
        data-reveal-delay="0.18s"
      >
        {" "}
        <SkillCard
          group="Languages & Core"
          skills={[
            { name: "HTML5", level: 95 },
            { name: "CSS3", level: 95 },
            { name: "Javascript (ES6+)", level: 90 },
          ]}
        />
        <SkillCard
          group="Frameworks & Libraries"
          skills={[
            { name: "React", level: 90 },
            { name: "Tailwind CSS", level: 92 },
            { name: "Sass / SCSS", level: 85 },
          ]}
        />
      </div>
      <p className="muted-text fade-in mb-4 !text-xs" data-reveal-delay="0.24s">
        ALSO FAMILIAR WITH
      </p>
      <div
        className="reveal flex gap-2 flex-wrap text-xs"
        data-reveal-delay="0.3s"
      >
        <OutlinedButton text="Git / GitHub" />
        <OutlinedButton text="Responsive Design" />
        <OutlinedButton text="CSS Animations" />
        <OutlinedButton text="REST APIs" />
        <OutlinedButton text="Accessibility (WCAG)" />
        <OutlinedButton text="Figma" />
        <OutlinedButton text="Vite" />
        <OutlinedButton text="npm" />
      </div>
    </section>
  );
};

export default Skills;
