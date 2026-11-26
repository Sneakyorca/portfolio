import projects from "./projects.json";
import moreWork from "./more-work.json";

// Everything shipped: featured case studies plus the shorter "More client work" list.
export const allWork = [...projects, ...moreWork];

export const totalProjects = allWork.length;
export const clientProjects = allWork.filter(
  (p) => p.projectType === "Freelance",
).length;
