export type ProjectGroup = "product" | "open-source"

export interface ProjectLink {
  type: "demo" | "github"
  url: string
  label: string
}

export interface Project {
  id: string
  title: string
  description: string
  group: ProjectGroup
  tech: string[]
  /** Imported cover image (real og:image for products) */
  coverImage?: string
  /** Fallback gradient for projects without a cover image (e.g. OSS repos) */
  gradient?: string
  /** Short emoji/label badge shown over the gradient fallback */
  badge?: string
  links: ProjectLink[]
  stars?: number
}
