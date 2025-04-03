import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<main className=' bg-white'>
			{/* Hero Section */}
			<div className='container mx-auto px-2'>
				<section className='w-full mt-5 md:mt-10 '>
					<div className='relative overflow-hidden w-full h-[300px] md:h-[650px]'>
						<Image
							src='./main.png'
							alt='Modern living room interior design'
							fill
							className='rounded-xl object-cover'
							priority
						/>
						<div className='absolute inset-0  bg-opacity-30 flex flex-col justify-end items-center p-6 md:p-16'>
							<div className='border p-1 bg-white rounded-lg'>
								<div className='flex flex-wrap '>
									<Link
										href='/services'
										className='bg-[#1d1f1c] text-white px-6 md:px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all text-sm md:text-base'
									>
										Our Services
									</Link>
									<Link
										href='/locations'
										className='bg-white text-[#1d1f1c] px-6 md:px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all text-sm md:text-base'
									>
										Locations
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	)
}
