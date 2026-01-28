import { motion } from "framer-motion"
import * as LucideIcons from "lucide-react"
import type { DockIconProps } from "./dock.types"

export const DockIcon = ({
  label,
  icon,
  ariaLabel,
  isActive,
  scale,
  showTooltip,
  onClick,
}: DockIconProps) => {
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons] as
    | React.ComponentType<{ className?: string; style?: React.CSSProperties }>
    | undefined

  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found in lucide-react`)
    return null
  }

  const size = 40 + (scale - 1) * 20
  const iconSize = 20 + (scale - 1) * 6

  return (
    <div className="relative flex items-center justify-center w-full">
      {/* Tooltip */}
      <motion.div
        className="absolute left-20 px-3 py-1.5 bg-gray-800/95 backdrop-blur-sm text-white text-xs font-medium rounded-lg shadow-lg pointer-events-none whitespace-nowrap"
        initial={{ opacity: 0, x: -10, scale: 0.9 }}
        animate={{
          opacity: showTooltip ? 1 : 0,
          x: showTooltip ? 0 : -10,
          scale: showTooltip ? 1 : 0.9,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {label}
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-[-4px] w-2 h-2 bg-gray-800/95 rotate-45" />
      </motion.div>

      {/* Icon button */}
      <motion.button
        onClick={onClick}
        aria-label={ariaLabel}
        className={`relative flex items-center justify-center rounded-2xl transition-colors duration-200 cursor-pointer ${
          isActive
            ? "bg-primary-500/30 text-primary-400 shadow-lg shadow-primary-500/30"
            : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
        }`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Active glow */}
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-2xl bg-primary-500/20 blur-lg"
            animate={{
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        {/* Icon */}
        <div className="relative z-10">
          <IconComponent
            className="transition-all duration-200"
            style={{
              width: `${iconSize}px`,
              height: `${iconSize}px`,
            }}
          />
        </div>
      </motion.button>

      {/* Active indicator dot */}
      {isActive && (
        <motion.div
          className="absolute left-[-8px] w-1 h-8 bg-primary-400 rounded-full shadow-lg shadow-primary-500/50"
          layoutId="activeIndicator"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </div>
  )
}
