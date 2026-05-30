import { motion } from "framer-motion"
import { Dock } from "@/components/dock/Dock"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Launched, OpenSource } from "@/components/sections/Projects"
import { Skills } from "@/components/sections/Skills"
import { Contact } from "@/components/sections/Contact"
import { useScrollSpy } from "@/hooks/useScrollSpy"
import { useElasticScroll } from "@/hooks/useElasticScroll"

function App() {
  const activeSection = useScrollSpy()
  const { scrollDelta } = useElasticScroll()

  return (
    <div className="relative">
      {/* Main content with elastic transform */}
      <motion.main
        animate={{
          y: scrollDelta * 0.3,
          scale: 1 - Math.abs(scrollDelta) * 0.0002,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        style={{
          transformOrigin: scrollDelta > 0 ? "top" : "bottom",
        }}
      >
        <Hero />
        <About />
        <Launched />
        <OpenSource />
        <Skills />
        <Contact />
      </motion.main>

      {/* Dock navigation */}
      <Dock activeSection={activeSection} />

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800 relative z-10">
        <p>
          &copy; {new Date().getFullYear()} Daniel Oquelis. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
