import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react"
import { SectionWrapper } from "../shared/SectionWrapper"
import { SectionBackground } from "../shared/SectionBackground"
import { AnimatedText } from "../shared/AnimatedText"

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    url: "https://github.com/danieloquelis",
    color: "hover:text-primary-400",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://linkedin.com/in/danieloquelis",
    color: "hover:text-primary-400",
  },
  {
    icon: Twitter,
    label: "Twitter",
    url: "https://twitter.com/danieloquelis",
    color: "hover:text-primary-400",
  },
  {
    icon: Mail,
    label: "Email",
    url: "mailto:hello@danieloquelis.com",
    color: "hover:text-primary-400",
  },
]

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here (e.g., send to API endpoint)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <SectionWrapper id="contact">
      <SectionBackground variant="secondary" />
      <div className="relative z-10 max-w-5xl mx-auto w-full px-4">
        <AnimatedText>
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-primary-400 to-orange-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </AnimatedText>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedText delay={0.3}>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-primary-500/30 transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.4}>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-primary-500/30 transition-all duration-300 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-primary-400">
                Connect With Me
              </h3>

              <p className="text-gray-400 mb-8 leading-relaxed">
                Let's build something amazing together. Find me on these
                platforms or drop me an email:
              </p>

              <div className="space-y-3 mb-8 flex-grow">
                {socialLinks.map(link => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 ${link.color} transition-all hover:border-primary-500/40 hover:bg-gray-800 group`}
                    whileHover={{ x: 5 }}
                  >
                    <link.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-gray-300 group-hover:text-primary-400 transition-colors">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>

              <div className="p-5 rounded-xl bg-primary-500/10 border border-primary-500/20">
                <p className="text-sm text-gray-300 text-center leading-relaxed">
                  <strong className="text-primary-400">
                    Available for freelance
                  </strong>
                  <br />
                  opportunities and collaborations
                </p>
              </div>
            </div>
          </AnimatedText>
        </div>
      </div>
    </SectionWrapper>
  )
}
