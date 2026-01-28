import { ExternalLink, Github } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { SectionWrapper } from "../shared/SectionWrapper"
import { SectionBackground } from "../shared/SectionBackground"
import { AnimatedText } from "../shared/AnimatedText"
import { useRef, useState } from "react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management",
    tech: ["React", "Node.js", "PostgreSQL"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for tracking social media metrics",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Collaborative project management tool with drag-and-drop",
    tech: ["React", "Firebase", "Framer Motion"],
    gradient: "from-orange-500 to-red-500",
  },
]

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / 20
    const y = (e.clientY - rect.top - rect.height / 2) / 20
    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <AnimatedText delay={0.3 + index * 0.1}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl overflow-hidden hover:border-primary-500/40 transition-all duration-300"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX: mousePosition.y,
          rotateY: mousePosition.x,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        whileHover={{ y: -12, scale: 1.02 }}
      >
        {/* 3D Glow effect */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            transform: "translateZ(-10px)",
          }}
        />

        {/* Project Image/Gradient */}
        <div
          className={`h-48 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-all duration-300 relative`}
          style={{
            transform: "translateZ(20px)",
          }}
        >
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Content */}
        <div className="p-6" style={{ transform: "translateZ(30px)" }}>
          <h3 className="text-xl font-bold mb-2 text-gray-100 group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex gap-2 flex-wrap mb-4">
            {project.tech.map(tech => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20 hover:bg-primary-500/20 hover:scale-105 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500/10 hover:bg-primary-500/20 text-primary-400 text-sm font-medium transition-all shadow-lg shadow-primary-500/0 hover:shadow-primary-500/20"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-800 text-gray-300 text-sm font-medium transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </AnimatedText>
  )
}

export const Projects = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"])

  return (
    <SectionWrapper id="projects">
      <SectionBackground variant="tertiary" />
      <motion.div
        ref={ref}
        style={{ y }}
        className="relative z-10 max-w-6xl mx-auto w-full px-4"
      >
        <AnimatedText>
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary-400 to-orange-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto text-lg">
            A showcase of my recent work and creative experiments
          </p>
        </AnimatedText>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ perspective: "1000px" }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
