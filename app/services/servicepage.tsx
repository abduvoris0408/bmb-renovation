import { ArrowRight, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicesPage() {
	return (
		<section className='container mx-auto px-4  pt-[70px] md:pt-[100px]'>
			<h1 className='text-3xl text-center md:text-4xl font-bold text-[#1d1f1c]'>
				Our Services
			</h1>
			<div className='flex justify-end items-center mb-6'>
				<Link
					href='/services'
					className='flex items-center gap-1 text-[#1d1f1c] font-medium border rounded-lg px-4 py-2  hover:text-[#e1c789] transition-colors'
				>
					View All
					<ArrowRight size={16} />
				</Link>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
				<ServiceCard
					title='Painting & Decorations'
					image='/Service1.png'
					href='/services/painting-decorations'
				/>
				<ServiceCard
					title='Bathroom Renovations'
					image='/Service2.png'
					href='/services/bathroom-renovations'
				/>
				<ServiceCard
					title='House Renovation'
					image='/Service3.png'
					href='/services/house-renovations'
				/>
				<ServiceCard
					title='Kitchen Fitting'
					image='/Service4.png'
					href='/services/kitchen-fitting'
				/>
				<ServiceCard
					title='Flooring'
					image='/Service5.png'
					href='/services/flooring'
				/>
				<ServiceCard
					title='House Extension'
					image='/Service6.png'
					href='/services/house-extension'
				/>
				<ServiceCard
					title='Loft Conversion'
					image='/Service7.png'
					href='/services/loft-conversion'
				/>
				<ServiceCard
					title='Tiling'
					image='/Service8.png'
					href='/services/tiling'
				/>
				<ServiceCard
					title='General Handy Man work'
					image='/Service9.png'
					href='/services/general-handy-man-work'
					className='sm:col-span-1 md:col-span-2'
				/>
				<ServiceCard
					title='Carpentry'
					image='/Service10.png'
					href='/services/carpentry'
					className='sm:col-span-1 md:col-span-2'
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
