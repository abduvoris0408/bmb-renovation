'use client'

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useRef } from 'react'

const fixLeafletIcon = () => {
	delete (L.Icon.Default.prototype as any)._getIconUrl
	L.Icon.Default.mergeOptions({
		iconRetinaUrl:
			'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
		iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
		shadowUrl:
			'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
	})
}

interface MapComponentProps {
	coordinates: {
		lat: number
		lng: number
	}
}

export default function MapComponent({ coordinates }: MapComponentProps) {
	const mapRef = useRef<L.Map | null>(null)
	const mapContainerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!mapContainerRef.current) return

		// Fix Leaflet icon issue
		fixLeafletIcon()

		// Initialize map if it doesn't exist
		if (!mapRef.current) {
			mapRef.current = L.map(mapContainerRef.current).setView(
				[coordinates.lat, coordinates.lng],
				15
			)

			// Add OpenStreetMap tile layer
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
				maxZoom: 19,
			}).addTo(mapRef.current)

			// Add marker at the coordinates
			const marker = L.marker([coordinates.lat, coordinates.lng]).addTo(
				mapRef.current
			)

			// Add a circle to highlight the area
			L.circle([coordinates.lat, coordinates.lng], {
				color: 'red',
				fillColor: '#f03',
				fillOpacity: 0.1,
				radius: 100,
			}).addTo(mapRef.current)
		}

		// Cleanup function
		return () => {
			if (mapRef.current) {
				mapRef.current.remove()
				mapRef.current = null
			}
		}
	}, [coordinates])

	return (
		<div
			ref={mapContainerRef}
			className='h-[calc(100vh-80px)] w-full z-0'
		/>
	)
}
