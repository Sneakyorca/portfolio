import { allWork } from "../components/work-stats";

// Each tool lists the stack names that count as "used" across all shipped work.
// Counts are computed, never typed by hand, so they stay honest as projects change.
const groups = [
  {
    name: "Languages",
    tools: [
      // Every site ships HTML and CSS, whatever the stack lists.
      { name: "HTML & CSS", match: "*" },
      { name: "JavaScript", match: ["JavaScript", "React", "Next.js"] },
      { name: "TypeScript", match: ["TypeScript"] },
    ],
  },
  {
    name: "Frameworks",
    tools: [
      { name: "React", match: ["React", "Next.js"] },
      { name: "Next.js", match: ["Next.js"] },
      { name: "Tailwind CSS", match: ["Tailwind CSS"] },
      { name: "Sass / SCSS", match: [] },
    ],
  },
  {
    name: "Data & tooling",
    tools: [
      { name: "REST APIs", match: ["REST API"] },
      { name: "Supabase", match: ["Supabase"] },
      { name: "Git & GitHub", match: [] },
      { name: "Vite", match: [] },
      { name: "Figma", match: [] },
    ],
  },
];

const usedIn = (match) =>
  match === "*"
    ? allWork.length
    : allWork.filter((p) => p.stack.some((s) => match.includes(s))).length;

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
        <div>
          <p className="title fade-in">Expertise</p>
          <h2 className="fade-in-up t-h2" data-reveal-delay="0.06s">
            My toolkit
          </h2>
        </div>
        <p
          className="fade-in t-lead max-w-md lg:text-right"
          data-reveal-delay="0.12s"
        >
          What I reach for, and how often it has made it into shipped work.
        </p>
      </div>

      <div className="grid gap-12 md:gap-10 md:grid-cols-3">
        {groups.map((group, gi) => (
          <div
            key={group.name}
            className="reveal border-t-2 border-foreground pt-5"
            data-reveal-delay={`${0.08 * gi}s`}
          >
            <h3 className="t-eyebrow text-primary mb-6">{group.name}</h3>
            <ul className="divide-y divide-border">
              {group.tools.map((tool) => {
                const count = usedIn(tool.match);
                return (
                  <li
                    key={tool.name}
                    className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0"
                  >
                    <span className="font-display font-semibold text-foreground text-[1.0625rem]">
                      {tool.name}
                    </span>
                    {count > 0 && (
                      <span className="t-meta text-muted-foreground whitespace-nowrap">
                        {count}/{allWork.length} projects
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
