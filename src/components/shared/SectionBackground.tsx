import { motion } from "framer-motion"

interface SectionBackgroundProps {
  variant?: "primary" | "secondary" | "tertiary"
}

export const SectionBackground = ({
  variant = "primary",
}: SectionBackgroundProps) => {
  const orbPositions = {
    primary: {
      orb1: "top-1/4 left-1/4",
      orb2: "bottom-1/3 right-1/4",
    },
    secondary: {
      orb1: "top-1/3 right-1/4",
      orb2: "bottom-1/4 left-1/3",
    },
    tertiary: {
      orb1: "top-1/2 left-1/4",
      orb2: "bottom-1/4 right-1/3",
    },
  }

  const positions = orbPositions[variant]

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Animated gradient orbs */}
      <motion.div
        className={`absolute ${positions.orb1} w-96 h-96 bg-primary-500/20 rounded-full blur-3xl`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute ${positions.orb2} w-96 h-96 bg-orange-600/20 rounded-full blur-3xl`}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
          style={{
            left: `${(i * 7) % 100}%`,
            top: `${(i * 13) % 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 139, 77, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 139, 77, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  )
}
