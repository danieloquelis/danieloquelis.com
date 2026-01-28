import { useEffect, useRef, useState } from "react"
import type { SectionId } from "../types/navigation.types"
import { SECTION_IDS } from "../utils/constants"

const SCROLL_THRESHOLD = 50 // pixels to trigger section change
const sections = Object.values(SECTION_IDS) as SectionId[]

export const useElasticScroll = () => {
  const [currentSection, setCurrentSection] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [scrollDelta, setScrollDelta] = useState(0)
  const lastScrollTime = useRef(0)
  const touchStartY = useRef(0)

  // Sync currentSection with actual scroll position
  useEffect(() => {
    const syncCurrentSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            setCurrentSection(i)
            break
          }
        }
      }
    }

    // Sync on scroll (for dock navigation)
    window.addEventListener("scroll", syncCurrentSection)
    syncCurrentSection() // Initial sync

    return () => {
      window.removeEventListener("scroll", syncCurrentSection)
    }
  }, [])

  useEffect(() => {
    let accumulatedDelta = 0

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      if (isTransitioning) return

      const now = Date.now()
      const timeSinceLastScroll = now - lastScrollTime.current
      lastScrollTime.current = now

      // Reset accumulated delta if too much time has passed
      if (timeSinceLastScroll > 200) {
        accumulatedDelta = 0
      }

      accumulatedDelta += e.deltaY

      // Visual feedback - elastic pull effect
      const elasticDelta =
        Math.sign(accumulatedDelta) * Math.min(Math.abs(accumulatedDelta), 100)
      setScrollDelta(elasticDelta)

      // Check if we've crossed the threshold
      if (Math.abs(accumulatedDelta) > SCROLL_THRESHOLD) {
        const direction = accumulatedDelta > 0 ? 1 : -1
        const newSection = currentSection + direction

        if (newSection >= 0 && newSection < sections.length) {
          setIsTransitioning(true)
          setCurrentSection(newSection)
          accumulatedDelta = 0
          setScrollDelta(0)

          // Scroll to section with elastic animation
          const element = document.getElementById(sections[newSection])
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }

          // Reset transition state
          setTimeout(() => {
            setIsTransitioning(false)
          }, 800)
        } else {
          // Bounce back if at edges
          accumulatedDelta = 0
          setScrollDelta(0)
        }
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isTransitioning) return

      const touchY = e.touches[0].clientY
      const delta = touchStartY.current - touchY

      // Visual feedback
      const elasticDelta = Math.sign(delta) * Math.min(Math.abs(delta), 100)
      setScrollDelta(elasticDelta)
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioning) return

      const touchY = e.changedTouches[0].clientY
      const delta = touchStartY.current - touchY

      if (Math.abs(delta) > SCROLL_THRESHOLD) {
        const direction = delta > 0 ? 1 : -1
        const newSection = currentSection + direction

        if (newSection >= 0 && newSection < sections.length) {
          setIsTransitioning(true)
          setCurrentSection(newSection)
          setScrollDelta(0)

          const element = document.getElementById(sections[newSection])
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }

          setTimeout(() => {
            setIsTransitioning(false)
          }, 800)
        }
      }

      setScrollDelta(0)
    }

    // Add passive: false to allow preventDefault
    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("touchstart", handleTouchStart, { passive: true })
    window.addEventListener("touchmove", handleTouchMove, { passive: true })
    window.addEventListener("touchend", handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [currentSection, isTransitioning])

  return {
    currentSection: sections[currentSection],
    scrollDelta,
    isTransitioning,
  }
}
