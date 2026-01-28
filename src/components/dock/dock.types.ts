import type { SectionId } from "../../types/navigation.types"

export interface DockIconProps {
  id: SectionId
  label: string
  icon: string
  ariaLabel: string
  isActive: boolean
  scale: number
  showTooltip?: boolean
  onClick: () => void
}

export interface DockProps {
  activeSection: SectionId
}
