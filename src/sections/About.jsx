import { useScrollProgress } from "../hooks/useScrollProgress";

// Milestones use only facts from the project data and the original bio.
const journey = [
  {
    when: "2024",
    what: "Started the journey",
    tools: "HTML, CSS and JavaScript fundamentals",
  },
  {
    when: "2025",
    what: "Moved to React",
    tools: "React, APIs, Tailwind, Sass",
  },
  {
    when: "2026",
    what: "First freelance clients",
    tools: "Planet 9, TradeWithNifemi, Cravue and two salon brands",
  },
  {
    when: "2026",
    what: "Shipped ResumeIQ",
    tools: "Next.js, TypeScript, Supabase, Gemini API",
  },
];

const About = () => {
  const trackRef = useScrollProgress();
  return (
    <section id="about" className="section">
      <div className="lg:grid grid-cols-6 gap-12">
        <div className="heading col-span-2 reveal lg:sticky lg:top-32 self-start">
          <p className="title fade-in">About</p>
          <h2 className="fade-in-up t-h2 mb-12" data-reveal-delay="0.06s">
            A bit about me
          </h2>
        </div>
        <div className="text col-span-4 reveal" data-reveal-delay="0.1s">
          <div className="mb-16 max-w-2xl space-y-6">
            <p
              className="fade-in-up t-lead text-foreground"
              data-reveal-delay="0.14s"
            >
              I&apos;m Abdulmaleek, a self-taught frontend developer in Lagos. I
              started with HTML, CSS and JavaScript in 2024 and now build full
              React and Next.js apps.
            </p>
            <p className="fade-in-up" data-reveal-delay="0.2s">
              Most of my work so far has been for real clients: a cinematic
              portfolio site for a Lagos film studio, a landing page with
              performance charts for a trading service, and the platform
              frontend for a brand marketing agency, plus sites for two salon
              brands. On my own time I built ResumeIQ, an AI resume reviewer
              with sign-in, saved reports and PDF export.
            </p>
            <p className="fade-in-up" data-reveal-delay="0.26s">
              The part I enjoy most is the detail people feel but rarely notice:
              spacing, motion that has a reason, and pages that still load fast
              on a phone.
            </p>
            <p className="fade-in-up" data-reveal-delay="0.32s">
              I build with AI tools like Claude Code, ChatGPT and GitHub
              Copilot. They let me ship faster and try more ideas, and I review
              and test everything myself before it goes live.
            </p>
          </div>
          <div className="journey">
            <p className="muted-text mb-8">My journey</p>
            <ol ref={trackRef} className="journey-track space-y-10">
              {journey.map((step, i) => (
                <li
                  key={step.what}
                  data-at={((i / journey.length) * 0.92 + 0.03).toFixed(2)}
                  className="journey-step relative pl-10"
                >
                  <span
                    aria-hidden="true"
                    className="journey-dot absolute left-0 top-1.5 size-3 rounded-full"
                  />
                  <p className="t-meta text-muted-foreground mb-2">
                    {step.when}
                  </p>
                  <h3 className="t-h4 mb-1">{step.what}</h3>
                  <p className="t-small">{step.tools}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
