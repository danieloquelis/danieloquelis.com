import type { DockItem, SectionId } from "@/types/navigation.types"

export const SECTION_IDS: Record<string, SectionId> = {
  HERO: "hero",
  ABOUT: "about",
  LAUNCHED: "launched",
  OPENSOURCE: "opensource",
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
    id: "launched",
    label: "Launched",
    icon: "Rocket",
    ariaLabel: "Navigate to Launched products section",
  },
  {
    id: "opensource",
    label: "Open Source",
    icon: "Github",
    ariaLabel: "Navigate to Open Source section",
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
