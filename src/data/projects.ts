import type { Project } from "../types/project.types"

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Modern portfolio website with macOS-style dock navigation and glassmorphism design",
    longDescription:
      "A sleek, interactive portfolio website built with React 19, TypeScript, and Framer Motion. Features a unique macOS-inspired dock navigation system with magnification effects and smooth scroll animations.",
    category: ["featured", "web"],
    techStack: [
      { name: "React 19" },
      { name: "TypeScript" },
      { name: "Tailwind CSS v4" },
      { name: "Framer Motion" },
      { name: "Vite" },
    ],
    links: [
      { type: "demo", url: "https://danieloquelis.com", label: "Live Demo" },
      {
        type: "github",
        url: "https://github.com/danieloquelis/portfolio",
        label: "Source Code",
      },
    ],
    featured: true,
    year: 2026,
  },
  // Add more projects here
]
