import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionBackground } from "@/components/shared/SectionBackground"
import { AnimatedText } from "@/components/shared/AnimatedText"
import { staggerContainer } from "@/utils/animations"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "REST APIs", "Edge Functions"],
  },
  {
    title: "XR & AI",
    skills: ["Unity", "C#", "Meta Quest", "OpenAI", "Computer Vision"],
  },
]

export const About = () => {
  return (
    <SectionWrapper id="about">
      <SectionBackground variant="secondary" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4">
        <AnimatedText>
          <h2 className="mb-4 text-center text-4xl font-bold md:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-primary-400 to-orange-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-400">
            Passionate software engineer with a love for creating seamless
            digital experiences
          </p>
        </AnimatedText>

        {/* Journey + What I do */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <AnimatedText delay={0.3}>
            <div className="h-full rounded-3xl border border-gray-800 bg-gray-900/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary-500/30">
              <h3 className="mb-4 text-2xl font-bold text-primary-400">
                My Journey
              </h3>
              <p className="leading-relaxed text-gray-400">
                I'm a full-stack software engineer who loves building things for
                the web. With a strong foundation in modern web technologies, I
                specialize in creating responsive, user-friendly applications
                that solve real-world problems — combining clean code practices
                with creative problem-solving.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.4}>
            <div className="h-full rounded-3xl border border-gray-800 bg-gray-900/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary-500/30">
              <h3 className="mb-4 text-2xl font-bold text-primary-400">
                What I Do
              </h3>
              <p className="leading-relaxed text-gray-400">
                I work across the full stack, from designing intuitive
                interfaces to building robust backend systems — and increasingly
                at the edge of XR and AI. I'm always exploring new technologies
                to deliver high-quality, dedicated work on every project.
              </p>
            </div>
          </AnimatedText>
        </div>

        {/* Skills & Technologies */}
        <AnimatedText delay={0.5}>
          <h3 className="mb-8 text-center text-3xl font-bold">
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary-400 to-orange-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h3>
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {skillCategories.map((category, index) => (
            <AnimatedText key={category.title} delay={0.6 + index * 0.1}>
              <div className="h-full rounded-3xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary-500/30">
                <h4 className="mb-4 text-xl font-bold text-primary-400">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map(skill => (
                    <span
                      key={skill}
                      className="cursor-default rounded-xl border border-gray-700/50 bg-gray-800/50 px-3.5 py-2 text-sm font-medium text-gray-300 transition-all hover:border-primary-500/40 hover:bg-primary-500/10 hover:text-primary-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedText>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
