import type { SkillGroup } from "../types/skill.types"

export const skillGroups: SkillGroup[] = [
  {
    category: "frontend",
    title: "Frontend",
    skills: [
      { name: "React", category: "frontend", proficiency: "expert" },
      { name: "TypeScript", category: "frontend", proficiency: "advanced" },
      { name: "Tailwind CSS", category: "frontend", proficiency: "expert" },
      { name: "Next.js", category: "frontend", proficiency: "advanced" },
      { name: "Framer Motion", category: "frontend", proficiency: "advanced" },
      { name: "HTML5", category: "frontend", proficiency: "expert" },
      { name: "CSS3", category: "frontend", proficiency: "expert" },
      { name: "JavaScript", category: "frontend", proficiency: "expert" },
    ],
  },
  {
    category: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", category: "backend", proficiency: "advanced" },
      { name: "Express", category: "backend", proficiency: "advanced" },
      { name: "PostgreSQL", category: "backend", proficiency: "intermediate" },
      { name: "MongoDB", category: "backend", proficiency: "intermediate" },
      { name: "REST APIs", category: "backend", proficiency: "advanced" },
      { name: "GraphQL", category: "backend", proficiency: "intermediate" },
    ],
  },
  {
    category: "tools",
    title: "Tools & More",
    skills: [
      { name: "Git", category: "tools", proficiency: "expert" },
      { name: "Docker", category: "tools", proficiency: "intermediate" },
      { name: "VS Code", category: "tools", proficiency: "expert" },
      { name: "Figma", category: "tools", proficiency: "advanced" },
      { name: "Vite", category: "tools", proficiency: "advanced" },
      { name: "Webpack", category: "tools", proficiency: "intermediate" },
    ],
  },
]
