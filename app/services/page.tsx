import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicesPage() {
	return (
		<section className='container mx-auto px-4  py-[70px] md:py-[100px]'>
			<h1 className='text-3xl mb-6 text-center md:text-4xl font-bold text-[#1d1f1c]'>
				Our Services
			</h1>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
				<ServiceCard
					title='Painting & Decorations'
					image='/Service1.png'
					href='/services/painting-decorations'
				/>
				<ServiceCard
					title='Bathroom Renovations'
					image='/Service2.png'
					href='/services/painting-decorations'
				/>
				<ServiceCard
					title='House Renovation'
					image='/Service3.png'
					href='/services/painting-decorations'
				/>
				<ServiceCard
					title='Kitchen Fitting'
					image='/Service4.png'
					href='/services/painting-decorations'
				/>
				<ServiceCard
					title='Flooring'
					image='/Service5.png'
					href='/services/painting-decorations'
				/>
				<ServiceCard
					title='House Extension'
					image='/Service6.png'
					href='/services/painting-decorations'
				/>
				<ServiceCard
					title='Loft Conversion'
					image='/Service7.png'
					href='/services/painting-decorations'
				/>
				<ServiceCard
					title='Kitchen Fitting'
					image='/Service8.png'
					href='/services/painting-decorations'
				/>
				<ServiceCard
					title='Tiling'
					image='/Service11.png'
					href='/services/painting-decorations'
				/>
				<ServiceCard
					title='Tiling'
					image='/Service12.png'
					href='/services/painting-decorations'
				/>
				<ServiceCard
					title='Tiling'
					image='/Service13.png'
					href='/services/painting-decorations'
				/>
				<ServiceCard
					title='Kitchen Fitting'
					image='/Service14.png'
					href='/services/painting-decorations'
				/>
				<ServiceCard
					title='Tiling'
					image='/Service15.png'
					href='/services/painting-decorations'
				/>
				<ServiceCard
					title='Tiling'
					image='/Service16.png'
					href='/services/painting-decorations'
				/>
				<ServiceCard
					title='Tiling'
					image='/Service17.png'
					href='/services/painting-decorations'
				/>
				<ServiceCard
					title='Kitchen Fitting'
					image='/Service18.png'
					href='/services/painting-decorations'
				/>
			</div>
		</section>
	)
}

interface ServiceCardProps {
	title: string
	image: string
	href: string
	className?: string
}

function ServiceCard({ title, image, href, className = '' }: ServiceCardProps) {
	return (
		<Link
			href={href}
			className={`group relative rounded-lg overflow-hidden h-[400px] shadow-md hover:shadow-lg transition-shadow ${className}`}
		>
			<Image
				src={image || '/placeholder.svg'}
				alt={title}
				fill
				className='object-cover brightness-75 group-hover:brightness-90 transition-all'
			/>
			<div className='absolute inset-0 flex items-end p-4'>
				<div className='flex items-center justify-between w-full bg-black bg-opacity-60 text-white p-3 rounded-md'>
					<h3 className='text-[#e1c789] font-medium'>{title}</h3>
					<ChevronRight size={18} className='text-[#e1c789]' />
				</div>
			</div>
		</Link>
	)
}
