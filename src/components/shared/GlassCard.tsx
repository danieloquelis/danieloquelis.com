import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export const GlassCard = ({
  children,
  className = "",
  hover = true,
  onClick,
}: GlassCardProps) => {
  return (
    <motion.div
      className={`glass ${hover ? "glass-hover cursor-pointer" : ""} rounded-2xl p-6 ${className}`}
      onClick={onClick}
      whileHover={hover ? { scale: 1.02 } : {}}
      whileTap={hover && onClick ? { scale: 0.98 } : {}}
    >
      {children}
    </motion.div>
  )
}
