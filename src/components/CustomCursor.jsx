import { useEffect, useRef, useState } from "react"

const lerp = (start, end, factor) => start + (end - start) * factor

const CustomCursor = () => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)")
    const updateMode = () => setIsDesktop(media.matches)

    updateMode()
    media.addEventListener("change", updateMode)

    return () => media.removeEventListener("change", updateMode)
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let isHovering = false

    const onMove = (event) => {
      mouseX = event.clientX
      mouseY = event.clientY
      dot.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px) scale(${isHovering ? 1.4 : 1})`
    }

    const checkHover = (event) => {
      const target = event.target
      isHovering = !!target.closest("a, button")
      dot.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px) scale(${isHovering ? 1.4 : 1})`
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px) scale(${isHovering ? 1.25 : 1})`
    }

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12)
      ringY = lerp(ringY, mouseY, 0.12)
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px) scale(${isHovering ? 1.25 : 1})`
      window.requestAnimationFrame(animate)
    }

    document.addEventListener("mousemove", onMove)
    document.addEventListener("mouseover", checkHover)
    animate()

    return () => {
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover", checkHover)
    }
  }, [isDesktop])

  if (!isDesktop) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}

export default CustomCursor
