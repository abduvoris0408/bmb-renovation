"use client"

import { useEffect, useRef } from "react"

interface Location {
  name: string
  lat: number
  lng: number
  details?: string
}

interface WorldMapProps {
  locations: Location[]
  className?: string
}

export default function WorldMap({ locations, className = "w-full h-[400px]" }: WorldMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapRef.current) return

    const canvas = document.createElement("canvas")
    canvas.width = mapRef.current.clientWidth
    canvas.height = mapRef.current.clientHeight
    mapRef.current.appendChild(canvas)

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Draw world map (simplified)
    ctx.fillStyle = "#f0f0f0"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw grid lines
    ctx.strokeStyle = "#e0e0e0"
    ctx.lineWidth = 0.5

    // Draw horizontal grid lines
    for (let i = 0; i < canvas.height; i += 20) {
      ctx.beginPath()
      ctx.moveTo(0, i)
      ctx.lineTo(canvas.width, i)
      ctx.stroke()
    }

    // Draw vertical grid lines
    for (let i = 0; i < canvas.width; i += 20) {
      ctx.beginPath()
      ctx.moveTo(i, 0)
      ctx.lineTo(i, canvas.height)
      ctx.stroke()
    }

    // Draw location markers
    locations.forEach((location) => {
      // Convert lat/lng to x/y coordinates (simplified)
      const x = (location.lng + 180) * (canvas.width / 360)
      const y = (90 - location.lat) * (canvas.height / 180)

      // Draw marker
      ctx.fillStyle = "#1d1f1c"
      ctx.beginPath()
      ctx.arc(x, y, 5, 0, 2 * Math.PI)
      ctx.fill()

      // Draw pulse effect
      ctx.strokeStyle = "#1d1f1c"
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(x, y, 8, 0, 2 * Math.PI)
      ctx.stroke()
    })

    return () => {
      if (mapRef.current && canvas.parentNode === mapRef.current) {
        mapRef.current.removeChild(canvas)
      }
    }
  }, [locations])

  return <div ref={mapRef} className={className}></div>
}

