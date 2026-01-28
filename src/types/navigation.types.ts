export type SectionId = "hero" | "about" | "projects" | "skills" | "contact"

export interface DockItem {
  id: SectionId
  label: string
  icon: string
  ariaLabel: string
}

export interface NavigationState {
  activeSection: SectionId
  isScrolling: boolean
}
