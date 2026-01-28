export type SkillCategory = "frontend" | "backend" | "tools" | "other"

export interface Skill {
  name: string
  category: SkillCategory
  icon?: string
  proficiency?: "beginner" | "intermediate" | "advanced" | "expert"
}

export interface SkillGroup {
  category: SkillCategory
  title: string
  skills: Skill[]
}
