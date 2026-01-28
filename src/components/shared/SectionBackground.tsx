import { motion } from "framer-motion"

interface SectionBackgroundProps {
  variant?: "primary" | "secondary" | "tertiary"
}

export const SectionBackground = ({
  variant = "primary",
}: SectionBackgroundProps) => {
  const orbPositions = {
    primary: {
      orb1: { x: "20%", y: "30%" },
      orb2: { x: "80%", y: "70%" },
    },
    secondary: {
      orb1: { x: "70%", y: "30%" },
      orb2: { x: "30%", y: "70%" },
    },
    tertiary: {
      orb1: { x: "25%", y: "50%" },
      orb2: { x: "75%", y: "60%" },
    },
  }

  const positions = orbPositions[variant]

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-gray-900" />

      {/* Optimized animated gradient orbs - using will-change for GPU acceleration */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full will-change-transform"
        style={{
          left: positions.orb1.x,
          top: positions.orb1.y,
          background:
            "radial-gradient(circle, rgba(255, 139, 77, 0.3) 0%, rgba(255, 139, 77, 0.15) 40%, transparent 70%)",
          filter: "blur(60px)",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full will-change-transform"
        style={{
          left: positions.orb2.x,
          top: positions.orb2.y,
          background:
            "radial-gradient(circle, rgba(255, 120, 60, 0.35) 0%, rgba(255, 100, 50, 0.18) 35%, transparent 65%)",
          filter: "blur(70px)",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Lighter floating particles - reduced count */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full will-change-transform"
          style={{
            left: `${(i * 8 + 10) % 90}%`,
            top: `${(i * 15 + 5) % 90}%`,
            background: "rgba(255, 139, 77, 0.4)",
            boxShadow: "0 0 8px rgba(255, 139, 77, 0.6)",
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 5 + (i % 3),
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Static gradient overlay - no animation for better performance */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255, 139, 77, 0.06) 0%, transparent 60%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 139, 77, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 139, 77, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  )
}
