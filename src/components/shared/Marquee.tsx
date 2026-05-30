import { useAnimationFrame, useMotionValue, motion } from "framer-motion"
import { useRef, useState, type ReactNode } from "react"

interface MarqueeProps {
  children: ReactNode
  /** Pixels per second the track moves while idle */
  speed?: number
  className?: string
}

/**
 * Horizontal auto-scrolling marquee.
 * - Loops continuously to the left.
 * - Pauses while hovered or while the user is dragging.
 * - The user can grab and drag horizontally; the loop resumes on release.
 *
 * The children are rendered twice back-to-back so the seam is invisible: when
 * the first copy has fully scrolled out of view we wrap `x` by exactly one
 * copy's width, which lands on an identical frame.
 */
export const Marquee = ({
  children,
  speed = 40,
  className = "",
}: MarqueeProps) => {
  const x = useMotionValue(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const dragging = useRef(false)

  useAnimationFrame((_, delta) => {
    if (paused || dragging.current) return
    const track = trackRef.current
    if (!track) return

    // One copy is half the full track (children rendered twice).
    const copyWidth = track.scrollWidth / 2
    if (copyWidth === 0) return

    let next = x.get() - (speed * delta) / 1000
    // Wrap seamlessly once we've scrolled a full copy.
    if (next <= -copyWidth) next += copyWidth
    x.set(next)
  })

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

      <motion.div
        ref={trackRef}
        className="flex w-max gap-6 cursor-grab active:cursor-grabbing"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -100000, right: 100000 }}
        dragElastic={0.05}
        onDragStart={() => {
          dragging.current = true
        }}
        onDragEnd={() => {
          dragging.current = false
          // Re-normalise x into a single copy so the wrap math stays valid.
          const track = trackRef.current
          if (track) {
            const copyWidth = track.scrollWidth / 2
            if (copyWidth > 0) {
              let nx = x.get() % copyWidth
              if (nx > 0) nx -= copyWidth
              x.set(nx)
            }
          }
        }}
      >
        {children}
        {/* Duplicate for the seamless loop (hidden from a11y tree) */}
        <div className="flex gap-6" aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  )
}
