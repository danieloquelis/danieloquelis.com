import { useRef } from "react"
import { motion } from "framer-motion"
import { DockIcon } from "./DockIcon"
import { useDockMagnification } from "@/hooks/useDockMagnification"
import { DOCK_ITEMS } from "@/utils/constants"
import type { DockProps } from "./dock.types"
import type { SectionId } from "@/types/navigation.types"

export const Dock = ({ activeSection }: DockProps) => {
  const dockRef = useRef<HTMLDivElement>(null)
  const { scales, hoveredIndex, handleMouseMove, handleMouseLeave } =
    useDockMagnification({
      dockRef: dockRef as React.RefObject<HTMLElement>,
      iconCount: DOCK_ITEMS.length,
    })

  const scrollToSection = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      window.history.pushState(null, "", `#${sectionId}`)
    }
  }

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50"
      aria-label="Main navigation"
    >
      <div
        ref={dockRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative flex flex-col items-center gap-3 py-3 rounded-3xl backdrop-blur-2xl bg-gray-900/40 border border-white/10 shadow-2xl overflow-visible"
        style={{
          width: "60px",
          boxShadow:
            "0 8px 32px rgba(0, 0, 0, 0.6), 0 2px 8px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Backdrop blur helper */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/5 to-transparent pointer-events-none" />

        {/* Icons */}
        {DOCK_ITEMS.map((item, index) => (
          <DockIcon
            key={item.id}
            {...item}
            isActive={activeSection === item.id}
            scale={scales[index]}
            showTooltip={hoveredIndex === index}
            onClick={() => scrollToSection(item.id)}
          />
        ))}
      </div>
    </motion.nav>
  )
}
