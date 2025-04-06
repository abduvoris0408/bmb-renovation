import { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = {
	title: 'Biz haqimizda',
}
export default function About() {
	return (
		<section className='container mx-auto px-4  pt-[70px] md:pt-[100px]'>
			<h1 className='text-3xl md:text-4xl font-bold text-center text-[#1d1f1c] mb-12'>
				About Us
			</h1>

			<div
				data-aos='zoom-in'
				className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16'
			>
				<div className='bg-[#1b1d20] rounded-lg p-8 flex flex-col items-center justify-center'>
					<div className='w-48 h-48 relative mb-6'>
						<Image
							src='/Logo.svg'
							alt='BMB Renovation Logo'
							width={300}
							height={300}
							className='object-contain'
						/>
					</div>
					<h3 className='text-[#e1c789] text-xl font-bold text-center'>
						BMB RENOVATION UK
					</h3>
				</div>

				<div className='flex flex-col'>
					<h2 className='text-2xl font-bold text-[#1d1f1c] mb-4'>
						London House Renovations
					</h2>
					<p className='text-[#758195] mb-6 leading-relaxed'>
						London House Renovations: Expertly Crafting Elegance &
						Functionality in Every Home Transformation. From
						meticulous planning to flawless execution, we specialize
						in bespoke, luxury renovations, ensuring every space we
						curate is a perfect blend of style and excellence.
					</p>
				</div>
			</div>
		</section>
	)
}
