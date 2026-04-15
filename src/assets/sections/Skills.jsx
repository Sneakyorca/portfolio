import OutlinedButton from "../components/outlined-button";
import SkillCard from "../components/skill-card";

const Skills = () => {
  return (
    <section id="skills" className="section bg-secondary/30">
      <p className="title">EXPERTISE</p>
      <h2 className="text-4xl font-display text-foreground font-semibold mb-3">
        My toolkit
      </h2>
      <p className="mb-16">
        Technologies and tools I use daily to bring ideas to life.
      </p>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mb-12">
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
      <p className="muted-text mb-4 !text-xs">ALSO FAMILIAR WITH</p>
      <div className="flex gap-2 flex-wrap text-xs">
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
