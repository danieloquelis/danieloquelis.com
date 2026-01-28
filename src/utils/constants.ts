import type { DockItem, SectionId } from "../types/navigation.types"

export const SECTION_IDS: Record<string, SectionId> = {
  HERO: "hero",
  ABOUT: "about",
  PROJECTS: "projects",
  SKILLS: "skills",
  CONTACT: "contact",
}

export const DOCK_ITEMS: DockItem[] = [
  {
    id: "hero",
    label: "Home",
    icon: "Home",
    ariaLabel: "Navigate to Home section",
  },
  {
    id: "about",
    label: "About",
    icon: "User",
    ariaLabel: "Navigate to About section",
  },
  {
    id: "projects",
    label: "Projects",
    icon: "Briefcase",
    ariaLabel: "Navigate to Projects section",
  },
  {
    id: "skills",
    label: "Skills",
    icon: "Code2",
    ariaLabel: "Navigate to Skills section",
  },
  {
    id: "contact",
    label: "Contact",
    icon: "Mail",
    ariaLabel: "Navigate to Contact section",
  },
]

export const SPRING_CONFIG = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
  mass: 0.8,
}

export const MAGNIFICATION_CONFIG = {
  maxDistance: 120,
  maxScale: 1.8,
  baseScale: 1,
}
