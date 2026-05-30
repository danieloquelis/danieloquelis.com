import { ExternalLink, Github, Star } from "lucide-react"
import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionBackground } from "@/components/shared/SectionBackground"
import { AnimatedText } from "@/components/shared/AnimatedText"
import { Marquee } from "@/components/shared/Marquee"
import { products, openSource } from "@/data/projects"
import type { Project } from "@/types/project.types"
import type { SectionId } from "@/types/navigation.types"

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      className="group relative flex w-[340px] shrink-0 flex-col overflow-hidden rounded-3xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-colors duration-300 hover:border-primary-500/40"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Glow effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Cover */}
      <div className="relative h-44 overflow-hidden">
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={project.title}
            loading="lazy"
            draggable={false}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={`relative flex h-full w-full items-center justify-center bg-gradient-to-br ${project.gradient ?? "from-primary-500 to-orange-600"}`}
          >
            {project.badge && (
              <span className="text-5xl opacity-90 drop-shadow-lg transition-transform duration-500 group-hover:scale-110">
                {project.badge}
              </span>
            )}
          </div>
        )}

        {/* Stars badge */}
        {typeof project.stars === "number" && (
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-xs font-medium text-gray-100 backdrop-blur-md">
            <Star className="h-3.5 w-3.5 fill-primary-400 text-primary-400" />
            {project.stars}
          </div>
        )}

        {/* Bottom fade into card */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-gray-900/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-100 transition-colors group-hover:text-primary-400">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tech.map(tech => (
            <span
              key={tech}
              className="rounded-full border border-primary-500/20 bg-primary-500/10 px-3 py-1 text-xs text-primary-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.links.map(link => {
            const isDemo = link.type === "demo"
            const Icon = isDemo ? ExternalLink : Github
            return (
              <motion.a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                draggable={false}
                onClick={e => e.stopPropagation()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  isDemo
                    ? "bg-primary-500/10 text-primary-400 shadow-lg shadow-primary-500/0 hover:bg-primary-500/20 hover:shadow-primary-500/20"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-800"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{link.label}</span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

const ProjectsSection = ({
  id,
  eyebrow,
  titlePlain,
  titleAccent,
  description,
  items,
  speed,
}: {
  id: SectionId
  eyebrow: string
  titlePlain: string
  titleAccent: string
  description: string
  items: Project[]
  speed?: number
}) => (
  <SectionWrapper id={id} className="overflow-hidden">
    <SectionBackground variant="tertiary" />
    <div className="relative z-10 flex w-full flex-col">
      <div className="mx-auto mb-12 max-w-6xl px-4 text-center">
        <AnimatedText>
          <span className="text-sm font-medium uppercase tracking-widest text-primary-400/80">
            {eyebrow}
          </span>
        </AnimatedText>
        <AnimatedText delay={0.1}>
          <h2 className="mt-2 text-4xl font-bold md:text-6xl">
            {titlePlain}{" "}
            <span className="bg-gradient-to-r from-primary-400 to-orange-500 bg-clip-text text-transparent">
              {titleAccent}
            </span>
          </h2>
        </AnimatedText>
        <AnimatedText delay={0.2}>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            {description}
          </p>
        </AnimatedText>
      </div>

      <AnimatedText delay={0.3} className="w-full">
        <Marquee speed={speed} className="py-4">
          {items.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Marquee>
      </AnimatedText>

      <p className="mt-6 text-center text-xs text-gray-600">
        Hover to pause · drag to explore
      </p>
    </div>
  </SectionWrapper>
)

export const Launched = () => (
  <ProjectsSection
    id="launched"
    eyebrow="Shipped Products"
    titlePlain="Things I've"
    titleAccent="Launched"
    description="Products I've designed, built, and shipped to real users."
    items={products}
    speed={35}
  />
)

export const OpenSource = () => (
  <ProjectsSection
    id="opensource"
    eyebrow="Open Source"
    titlePlain="Built in the"
    titleAccent="Open"
    description="Tools and libraries I've open-sourced — XR, AI, and developer tooling."
    items={openSource}
    speed={28}
  />
)
