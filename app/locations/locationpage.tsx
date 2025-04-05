'use client'
import Script from 'next/script'
import { useEffect } from 'react'

const LondonMap = () => {
	const locations = [
		{ name: 'City of London', coordinates: [51.5155, -0.0922] },
		{ name: 'Victoria', coordinates: [51.4966, -0.1448] },
		{ name: 'Mill Hill', coordinates: [51.6152, -0.2356] },
		{ name: 'Golders Green', coordinates: [51.5724, -0.1991] },
		{ name: 'Barnet', coordinates: [51.6501, -0.2001] },
		{ name: 'Camden', coordinates: [51.5391, -0.1426] },
		{ name: 'Fulham', coordinates: [51.4779, -0.1956] },
		{ name: 'Chelsea', coordinates: [51.4878, -0.169] },
		{ name: 'Kensington', coordinates: [51.5015, -0.1932] },
		{ name: 'Wandsworth', coordinates: [51.4571, -0.1927] },
		{ name: 'Radlett', coordinates: [51.6827, -0.3169] },
		{ name: 'St. Albans', coordinates: [51.7554, -0.3568] },
		{ name: 'Harpenden', coordinates: [51.818, -0.3563] },
		{ name: 'Hampstead', coordinates: [51.5559, -0.1762] },
		{ name: 'Islington', coordinates: [51.5362, -0.1033] },
		{ name: 'West London', coordinates: [51.505, -0.3] },
		{ name: 'Ealing', coordinates: [51.5126, -0.3055] },
		{ name: 'Essex', coordinates: [51.7343, 0.469] },
		{ name: 'Loughton', coordinates: [51.6486, 0.0742] },
		{ name: 'Chingford', coordinates: [51.6326, -0.0039] },
		{ name: 'North London', coordinates: [51.5854, -0.1211] },
	]

	// Initialize the map after the API is loaded
	const initMap = () => {
		if (window.ymaps) {
			window.ymaps.ready(() => {
				// Create a map centered on London
				const map = new window.ymaps.Map('map-container', {
					center: [51.5074, -0.1278], // London center
					zoom: 10,
					controls: [
						'zoomControl',
						'typeSelector',
						'fullscreenControl',
					],
				})

				// Add markers for each location
				locations.forEach(location => {
					const placemark = new window.ymaps.Placemark(
						location.coordinates,
						{
							hintContent: location.name,
							balloonContent: `<strong>${location.name}</strong>`,
						},
						{
							preset: 'islands#greenDotIconWithCaption',
							iconCaptionMaxWidth: '200',
						}
					)

					map.geoObjects.add(placemark)
				})

				// Create a clusterer for better performance with many points
				const clusterer = new window.ymaps.Clusterer({
					preset: 'islands#greenClusterIcons',
					groupByCoordinates: false,
					clusterDisableClickZoom: false,
					clusterHideIconOnBalloonOpen: false,
					geoObjectHideIconOnBalloonOpen: false,
				})

				// Add all placemarks to the clusterer
				const placemarks = locations.map(location => {
					return new window.ymaps.Placemark(
						location.coordinates,
						{
							balloonContentHeader: location.name,
						},
						{
							preset: 'islands#greenDotIconWithCaption',
						}
					)
				})

				clusterer.add(placemarks)
				map.geoObjects.add(clusterer)

				// Fit map to include all markers
				map.setBounds(map.geoObjects.getBounds(), {
					checkZoomRange: true,
					zoomMargin: 35,
				})
			})
		}
	}

	useEffect(() => {
		if (window.ymaps) {
			initMap()
		}
	}, [])

	return (
		<div className='container mx-auto pt-[70px] md:pt-[100px]'>
			<div className='text-center'>
				<h2 className='text-3xl font-bold text-[#1d1f1c] mb-4'>
					Our Locations
				</h2>
				<p className='text-[#758195] mb-12'>
					We have offices and teams all around the UK.
				</p>
			</div>
			<div className='map-wrapper container mx-auto '>
				<Script
					src='https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=en_US'
					onLoad={initMap}
				/>
				<div
					id='map-container'
					style={{
						width: '100%',
						height: '600px',
						borderRadius: '8px',
					}}
				></div>
			</div>
		</div>
	)
}

export default LondonMap
