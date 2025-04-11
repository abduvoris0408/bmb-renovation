import { Compare } from '@/components/ui/compare'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function PortfolioPage() {
	return (
		<div className='bg-white px-4  pt-[70px] md:pt-[100px]'>
			{/* Portfolio Section */}
			<section className='container mx-auto'>
				<h1 className='text-3xl text-center md:text-4xl font-bold text-[#1d1f1c]'>
					Portfolio
				</h1>
				<div className='flex justify-end items-center mb-6'>
					<Link
						href='/portfolio'
						className='flex items-center gap-1 text-[#1d1f1c] font-medium border rounded-lg px-4 py-2  hover:text-[#e1c789] transition-colors'
					>
						View All
						<ArrowRight size={16} />
					</Link>
				</div>

				<div className='flex flex-col gap-5'>
					<div className='p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row items-center md:justify-between gap-6'>
						<div className='text-center md:text-left'>
							<h2 className='font-bold text-[26px]'>
								BMB Renovation
							</h2>
							<p className='font-[400] text-[17px] tracking-[0px]'>
								We provide expert Home, Kitchen & Bathroom
								Re-modeling services in London.
							</p>
						</div>
						<Compare
							firstImage='/compare11.png'
							secondImage='/compare22.png'
							firstImageClassName='object-cover object-left-top'
							secondImageClassname='object-cover object-left-top'
							className='h-[350px] w-full md:h-[700px] md:w-[700px]'
							slideMode='hover'
						/>
					</div>
					<div className='p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 flex  flex-col-reverse md:flex-row items-center md:justify-between gap-6'>
						<Compare
							firstImage='/compare3.png'
							secondImage='/compare33.png'
							firstImageClassName='object-cover object-left-top'
							secondImageClassname='object-cover object-left-top'
							className='h-[350px] w-full md:h-[700px] md:w-[700px]'
							slideMode='hover'
						/>
						<div className='text-center md:text-left'>
							<h2 className='font-bold text-[26px]'>
								BMB Renovation
							</h2>
							<p className='font-[400] text-[17px] tracking-[0px]'>
								We provide expert Home, Kitchen & Bathroom
								Re-modeling services in London.
							</p>
						</div>
					</div>
					<div className='p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row items-center md:justify-between gap-6'>
						<div className='text-center md:text-left'>
							<h2 className='font-bold text-[26px]'>
								BMB Renovation
							</h2>
							<p className='font-[400] text-[17px] tracking-[0px]'>
								We provide expert Home, Kitchen & Bathroom
								Re-modeling services in London.
							</p>
						</div>
						<Compare
							firstImage='/compare4.png'
							secondImage='/compare44.png'
							firstImageClassName='object-cover object-left-top'
							secondImageClassname='object-cover object-left-top'
							className='h-[350px] w-full md:h-[700px] md:w-[700px]'
							slideMode='hover'
						/>
					</div>
				</div>
			</section>

			{/* Portfolio Banner */}

			<section className='container mx-auto rounded-xl bg-[#1d1f1c] text-white px-6 py-12 mt-5 md:px-10'>
				<div className='flex flex-col md:flex-row items-center justify-between gap-6'>
					<div className='text-center md:text-left'>
						<h2 className='text-3xl md:text-4xl font-bold mb-3'>
							The premier renovation service across the UK.
						</h2>
						<p className='text-gray-300 mb-6'>
							BMB is a trusted renovation company. We deliver
							exceptional quality and service nationwide.
						</p>
					</div>
					<div className='flex flex-wrap justify-center md:justify-start gap-3'>
						<Link
							href='/contact'
							className='bg-[#e1c789] text-[#1d1f1c] px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all'
						>
							Get Started
						</Link>
						<Link
							href='/about'
							className='bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-all'
						>
							Learn More
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}

interface PortfolioCardProps {
	title: string
	image: string
	category: string
}

function PortfolioCard({ title, image, category }: PortfolioCardProps) {
	return (
		<Link
			href={`/portfolio/${title.toLowerCase().replace(/\s+/g, '-')}`}
			className='group'
		>
			<div className='relative h-64 rounded-lg overflow-hidden mb-4'>
				<Image
					src={image || '/placeholder.svg'}
					alt={title}
					fill
					className='object-cover transition-transform duration-500 group-hover:scale-110'
				/>
				<div className='absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all'></div>
			</div>
			<h3 className='text-xl font-semibold text-[#1d1f1c] group-hover:text-[#e1c789] transition-colors'>
				{title}
			</h3>
			<p className='text-[#758195]'>{category}</p>
		</Link>
	)
}

interface TestimonialCardProps {
	quote: string
	author: string
	location: string
}

function TestimonialCard({ quote, author, location }: TestimonialCardProps) {
	return (
		<div className='bg-white p-8 rounded-lg shadow-md'>
			<p className='text-[#1d1f1c] text-lg italic mb-6'>"{quote}"</p>
			<div>
				<p className='font-semibold text-[#1d1f1c]'>{author}</p>
				<p className='text-[#758195]'>{location}</p>
			</div>
		</div>
	)
}
