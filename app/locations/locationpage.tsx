'use client'
import { Button } from '@/components/ui/button'
import { ArrowRight, MapPin, Navigation } from 'lucide-react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import type React from 'react'
import { useEffect, useState } from 'react'

const MapComponent = dynamic(() => import('@/components/map-component'), {
	ssr: false,
	loading: () => (
		<div className='h-[calc(100vh-80px)] w-full bg-gray-100 flex items-center justify-center'>
			<p className='text-gray-500'>Loading map...</p>
		</div>
	),
})
export default function LocationsPage() {
	const [isMounted, setIsMounted] = useState(false)

	const coordinates = {
		lat: 41.33205,
		lng: 69.29172,
		formatted: '41°19\'55.4"N 69°17\'30.2"E',
	}

	const locationName = 'CJSC-RMH Tashkent'

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) {
		return null
	}
	return (
		<section className='px-4  pt-[70px] md:pt-[100px]'>
			<div className='container mx-auto  text-center'>
				<h2 className='text-3xl font-bold text-[#1d1f1c] mb-4'>
					Our Locations
				</h2>
				<p className='text-[#758195] mb-12'>
					We have offices and teams all around the UK.
				</p>

				<div className='flex min-h-screen flex-col'>
					<div className='bg-white p-4 shadow-sm border-b'>
						<div className='flex items-center gap-2'>
							<MapPin className='text-red-500' size={20} />
							<h1 className='text-lg font-semibold'>
								{coordinates.formatted}
							</h1>
						</div>
						<p className='text-gray-600 text-sm ml-7'>
							{locationName}
						</p>
					</div>

					{/* Map container */}
					<div className='relative flex-1'>
						<MapComponent coordinates={coordinates} />

						<div className='absolute top-4 right-4  bg-white rounded shadow-md'>
							<a
								href={`https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`}
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-500 hover:text-blue-700 text-sm px-3 py-2 flex items-center'
							>
								View larger map
							</a>
						</div>

						{/* Directions button */}
						<div className='absolute top-4 right-40  bg-white rounded shadow-md'>
							<Button
								variant='ghost'
								className='p-2 h-10 flex items-center gap-2 text-blue-500 hover:bg-gray-100'
							>
								<Navigation size={16} />
								<span className='text-sm'>Directions</span>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

interface NavItemProps {
	href: string
	children: React.ReactNode
	isActive?: boolean
}

function NavItem({ href, children, isActive }: NavItemProps) {
	return (
		<Link
			href={href}
			className={`relative px-1 py-2 font-medium ${
				isActive
					? 'text-[#1d1f1c]'
					: 'text-[#758195] hover:text-[#1d1f1c]'
			} transition-colors`}
		>
			{children}
			{isActive && (
				<span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#e1c789]'></span>
			)}
		</Link>
	)
}

interface OfficeCardProps {
	city: string
	address: string
	phone: string
	email: string
}

function OfficeCard({ city, address, phone, email }: OfficeCardProps) {
	return (
		<div className='bg-white p-6 rounded-lg shadow-sm'>
			<h3 className='text-xl font-semibold text-[#1d1f1c] mb-3'>
				{city}
			</h3>
			<address className='not-italic text-[#758195] mb-4'>
				{address}
			</address>
			<div className='space-y-2'>
				<p className='text-[#758195]'>{phone}</p>
				<p className='text-[#758195]'>{email}</p>
			</div>
			<Link
				href={`/contact?location=${city.toLowerCase()}`}
				className='mt-4 inline-flex items-center text-[#1d1f1c] font-medium hover:text-[#e1c789] transition-colors'
			>
				Contact this office
				<ArrowRight size={16} className='ml-1' />
			</Link>
		</div>
	)
}
