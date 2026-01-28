import { useState, useCallback, type RefObject } from "react"
import { MAGNIFICATION_CONFIG } from "@/utils/constants"

interface UseDockMagnificationProps {
  dockRef: RefObject<HTMLElement>
  iconCount: number
}

export const useDockMagnification = ({
  dockRef,
  iconCount,
}: UseDockMagnificationProps) => {
  const [scales, setScales] = useState<number[]>(
    new Array(iconCount).fill(MAGNIFICATION_CONFIG.baseScale)
  )
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const calculateScale = useCallback(
    (mouseY: number, iconY: number): number => {
      const distance = Math.abs(mouseY - iconY)
      const { maxDistance, maxScale, baseScale } = MAGNIFICATION_CONFIG

      if (distance > maxDistance) return baseScale

      // Smoother easing function for natural feel
      const normalizedDistance = distance / maxDistance
      const easedDistance = 1 - Math.pow(normalizedDistance, 1.5)

      return baseScale + (maxScale - baseScale) * easedDistance
    },
    []
  )

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (!dockRef.current) return

      const mouseY = event.clientY

      // Filter out absolute positioned children (backdrop blur helper)
      const iconChildren = Array.from(
        dockRef.current.children as HTMLCollectionOf<HTMLElement>
      ).filter(child => !child.classList.contains("absolute"))

      const newScales = iconChildren.map(child => {
        const rect = child.getBoundingClientRect()
        const iconCenterY = rect.top + rect.height / 2
        return calculateScale(mouseY, iconCenterY)
      })

      // Find the index with the maximum scale (the one being hovered)
      const maxScale = Math.max(...newScales)
      const maxIndex = newScales.indexOf(maxScale)
      setHoveredIndex(maxScale > 1.3 ? maxIndex : null)

      setScales(newScales)
    },
    [dockRef, calculateScale]
  )

  const handleMouseLeave = useCallback(() => {
    setScales(new Array(iconCount).fill(MAGNIFICATION_CONFIG.baseScale))
    setHoveredIndex(null)
  }, [iconCount])

  return {
    scales,
    hoveredIndex,
    handleMouseMove,
    handleMouseLeave,
  }
}
