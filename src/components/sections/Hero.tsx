import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { SectionWrapper } from "../shared/SectionWrapper"
import { SectionBackground } from "../shared/SectionBackground"
import { staggerContainer, fadeInUp, scaleIn } from "../../utils/animations"
import { useRef } from "react"

export const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <SectionWrapper id="hero" className="relative overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <SectionBackground variant="primary" />
      </motion.div>

      {/* Content with parallax */}
      <motion.div
        ref={ref}
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]),
          opacity,
        }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center px-4"
      >
        {/* Profile Image with 3D effect */}
        <motion.div
          variants={scaleIn}
          className="mb-12 inline-block perspective-1000"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              rotateY: 5,
              rotateX: 5,
              scale: 1.05,
            }}
            className="relative"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Glow effect */}
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-75"
              style={{
                background:
                  "radial-gradient(circle, rgba(255, 139, 77, 0.6) 0%, transparent 70%)",
                transform: "translateZ(-20px)",
              }}
            />
            <img
              src="/src/assets/dani-profile.png"
              alt="Daniel Oquelis"
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-primary-500/60 object-cover shadow-2xl"
              style={{
                transform: "translateZ(20px)",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Title with 3D text effect */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          style={{
            textShadow: "0 4px 20px rgba(255, 139, 77, 0.3)",
          }}
        >
          Hi, I'm{" "}
          <motion.span
            className="inline-block bg-gradient-to-r from-primary-400 via-primary-500 to-orange-500 bg-clip-text text-transparent"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 30px rgba(255, 139, 77, 0.8)",
            }}
          >
            Daniel Oquelis
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-3xl text-gray-300 mb-8 font-light"
        >
          Full-Stack Developer & Creative Technologist
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Building beautiful, interactive web experiences with modern
          technologies and a passion for clean code.
        </motion.p>

        {/* Scroll indicator */}
        <motion.button
          variants={fadeInUp}
          onClick={scrollToNext}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gray-800/60 hover:bg-gray-800/80 border border-gray-700/50 hover:border-primary-500/50 text-gray-300 hover:text-primary-400 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-primary-500/20"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to next section"
        >
          <span className="font-medium">Explore My Work</span>
          <motion.div
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </motion.div>
    </SectionWrapper>
  )
}
