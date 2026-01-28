import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import type { ReactNode } from "react"
import type { SectionId } from "../../types/navigation.types"

interface SectionWrapperProps {
  id: SectionId
  children: ReactNode
  className?: string
}

export const SectionWrapper = ({
  id,
  children,
  className = "",
}: SectionWrapperProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`min-h-screen flex items-center justify-center px-4 py-20 ${className}`}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  )
}
