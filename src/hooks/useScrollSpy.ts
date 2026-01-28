import { useState, useEffect } from "react"
import type { SectionId } from "../types/navigation.types"
import { SECTION_IDS } from "../utils/constants"

export const useScrollSpy = () => {
  const [activeSection, setActiveSection] = useState<SectionId>("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(SECTION_IDS)
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i] as SectionId)
            break
          }
        }
      }
    }

    // Handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) as SectionId
      if (hash && Object.values(SECTION_IDS).includes(hash)) {
        setActiveSection(hash)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("hashchange", handleHashChange)

    // Initial check
    handleScroll()
    handleHashChange()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  return activeSection
}
