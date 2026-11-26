import projects from "./projects.json";

// Resting and spread-out positions for up to four stacked screenshots.
// x/y are % of the card's own size; r is rotation. Index 0 is in front.
const POSES = [
  { x: "8%", y: "26%", r: "-1deg", sx: "-4%", sy: "36%", sr: "-3deg" },
  { x: "-4%", y: "6%", r: "-7deg", sx: "-18%", sy: "0%", sr: "-10deg" },
  { x: "22%", y: "2%", r: "6deg", sx: "34%", sy: "-6%", sr: "9deg" },
  { x: "10%", y: "-14%", r: "1deg", sx: "12%", sy: "-30%", sr: "3deg" },
];

const hostOf = (url) => {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
};

/**
 * A fanned stack of real project screenshots for the hero. Hovering the
 * stack spreads the cards; hovering a card straightens and lifts it.
 * Each card links to the live project.
 */
const HeroShowcase = () => {
  const shown = projects.slice(0, POSES.length);
  return (
    <div className="showcase relative w-full max-w-[34rem] mx-auto aspect-[5/4]">
      {shown.map((project, i) => {
        const pose = POSES[i];
        return (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} live site`}
            className="showcase-card absolute left-0 top-[12%] w-[78%] rounded-xl overflow-hidden border border-border bg-card focus-visible:outline-2 focus-visible:outline-primary"
            style={{
              zIndex: shown.length - i,
              "--x": pose.x,
              "--y": pose.y,
              "--r": pose.r,
              "--sx": pose.sx,
              "--sy": pose.sy,
              "--sr": pose.sr,
            }}
          >
            <span className="flex items-center gap-1.5 px-3 h-6 border-b border-border bg-background/70">
              <span className="size-1.5 rounded-full bg-foreground/20" />
              <span className="size-1.5 rounded-full bg-foreground/20" />
              <span className="size-1.5 rounded-full bg-foreground/20" />
              <span className="ml-2 font-mono text-[0.625rem] text-muted-foreground truncate">
                {hostOf(project.link)}
              </span>
            </span>
            <img
              src={project.image}
              alt=""
              width={1200}
              height={750}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              className="block w-full aspect-[16/10] object-cover object-top"
            />
            <span className="showcase-label absolute left-3 bottom-3 t-meta px-2 py-1 rounded-md bg-background/90 text-foreground">
              {String(project.id).padStart(2, "0")} {project.title}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default HeroShowcase;
