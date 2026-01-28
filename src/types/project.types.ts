export type ProjectCategory = "all" | "featured" | "web" | "personal"

export interface TechStack {
  name: string
  color?: string
}

export interface ProjectLink {
  type: "demo" | "github" | "figma" | "other"
  url: string
  label: string
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  category: ProjectCategory[]
  techStack: TechStack[]
  links: ProjectLink[]
  image?: string
  featured: boolean
  year: number
}
