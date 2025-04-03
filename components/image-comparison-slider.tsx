"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface ImageComparisonSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt?: string
  afterAlt?: string
  textPosition?: "left" | "right"
  title: string
  description: string
}

export default function ImageComparisonSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before",
  afterAlt = "After",
  textPosition = "left",
  title,
  description,
}: ImageComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const sliderRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !sliderRef.current) return

    const rect = sliderRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))

    setSliderPosition(percentage)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current || !sliderRef.current) return

    const rect = sliderRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width))
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))

    setSliderPosition(percentage)
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("touchmove", handleTouchMove)
    document.addEventListener("touchend", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleMouseUp)
    }
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {textPosition === "left" && (
        <div className="md:col-span-1 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-[#1d1f1c] mb-3">{title}</h3>
          <p className="text-[#758195]">{description}</p>
        </div>
      )}

      <div
        ref={sliderRef}
        className={`relative h-[300px] md:h-[400px] overflow-hidden rounded-lg md:col-span-2 ${textPosition === "right" ? "md:order-first" : ""}`}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* After Image (Full) */}
        <div className="absolute inset-0 w-full h-full">
          <Image src={afterImage || "/placeholder.svg"} alt={afterAlt} fill className="object-cover" />
          <div className="absolute bottom-4 right-4 bg-white text-[#1d1f1c] px-3 py-1 rounded-md text-sm font-medium">
            After
          </div>
        </div>

        {/* Before Image (Partial - controlled by slider) */}
        <div className="absolute inset-0 h-full overflow-hidden" style={{ width: `${sliderPosition}%` }}>
          <Image
            src={beforeImage || "/placeholder.svg"}
            alt={beforeAlt}
            fill
            className="object-cover"
            // style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: "none" }}
          />
          <div className="absolute bottom-4 left-4 bg-white text-[#1d1f1c] px-3 py-1 rounded-md text-sm font-medium">
            Before
          </div>
        </div>

        {/* Slider Control */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.5 18.5L3 12M3 12L8.5 5.5M3 12H21"
                stroke="#1d1f1c"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {textPosition === "right" && (
        <div className="md:col-span-1 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-[#1d1f1c] mb-3">{title}</h3>
          <p className="text-[#758195]">{description}</p>
        </div>
      )}
    </div>
  )
}

