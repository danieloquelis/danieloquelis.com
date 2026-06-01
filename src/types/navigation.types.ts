export type SectionId = "hero" | "about" | "launched" | "opensource" | "contact"

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
