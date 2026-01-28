import { motion } from "framer-motion"
import { Heart, Code, Palette, Rocket } from "lucide-react"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionBackground } from "@/components/shared/SectionBackground"
import { AnimatedText } from "@/components/shared/AnimatedText"
import { staggerContainer } from "@/utils/animations"

const interests = [
  { icon: Code, label: "Clean Code", color: "text-primary-500" },
  { icon: Palette, label: "UI/UX Design", color: "text-primary-400" },
  { icon: Rocket, label: "Innovation", color: "text-primary-600" },
  { icon: Heart, label: "Open Source", color: "text-primary-500" },
]

export const About = () => {
  return (
    <SectionWrapper id="about">
      <SectionBackground variant="secondary" />
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4">
        <AnimatedText>
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-primary-400 to-orange-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto text-lg">
            Passionate developer with a love for creating seamless digital
            experiences
          </p>
        </AnimatedText>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <AnimatedText delay={0.3}>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-primary-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-primary-400">
                My Journey
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I'm a full-stack developer who loves building things for the
                web. With a strong foundation in modern web technologies, I
                specialize in creating responsive, user-friendly applications
                that solve real-world problems. My approach combines clean code
                practices with creative problem-solving.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.4}>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-primary-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-primary-400">
                What I Do
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I work across the full stack, from designing intuitive
                interfaces to building robust backend systems. I'm always
                exploring new technologies and best practices to deliver
                high-quality solutions. Whether it's a complex web application
                or a simple landing page, I bring the same level of dedication
                to every project.
              </p>
            </div>
          </AnimatedText>
        </div>

        <AnimatedText delay={0.5}>
          <h3 className="text-3xl font-bold text-center mb-10">
            What I{" "}
            <span className="bg-gradient-to-r from-primary-400 to-orange-500 bg-clip-text text-transparent">
              Love
            </span>
          </h3>
        </AnimatedText>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {interests.map((interest, index) => (
            <AnimatedText key={interest.label} delay={0.6 + index * 0.1}>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-primary-500/40 hover:bg-gray-800/50 transition-all duration-300">
                <interest.icon
                  className={`w-12 h-12 mx-auto mb-4 ${interest.color}`}
                />
                <p className="text-gray-300 font-medium">{interest.label}</p>
              </div>
            </AnimatedText>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
