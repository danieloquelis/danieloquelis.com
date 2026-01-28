import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionBackground } from "@/components/shared/SectionBackground"
import { AnimatedText } from "@/components/shared/AnimatedText"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "Framer Motion",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    title: "Tools & More",
    skills: ["Git", "Docker", "VS Code", "Figma", "Vite"],
  },
]

export const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <SectionBackground variant="primary" />
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4">
        <AnimatedText>
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary-400 to-orange-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto text-lg">
            Tools and technologies I work with
          </p>
        </AnimatedText>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <AnimatedText key={category.title} delay={0.3 + index * 0.1}>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-primary-500/30 transition-all duration-300 h-full">
                <h3 className="text-2xl font-bold mb-6 text-primary-400">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-4 py-2.5 rounded-xl bg-gray-800/50 text-gray-300 hover:bg-primary-500/10 hover:text-primary-400 hover:border-primary-500/40 transition-all cursor-default border border-gray-700/50 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
