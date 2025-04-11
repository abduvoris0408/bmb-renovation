import { ImageSlider } from '@/components/ui/image-slider'
import { ParallaxScroll } from '@/components/ui/parallax-scroll'
import Link from 'next/link'
import About from './about/aboutpage'
import Contact from './contact/contactpage'
import LocationsPage from './locations/locationpage'
import PortfolioPage from './portfolio/portfoliopage'
import ServicesPage from './services/servicepage'

export default function Home() {
	const images = [
		{
			src: '/main.png',
			alt: 'Slide 1',
		},
		{
			src: '/main1.png',
			alt: 'Slide 2',
		},
		{
			src: '/main2.png',
			alt: 'Slide 3',
		},
		{
			src: '/main3.png',
			alt: 'Slide 4',
		},
	]

	return (
		<main className=' bg-white'>
			<ParallaxScroll>
				{/* Hero Section */}
				<div id='hero'>
					<div className='container mx-auto px-4  pt-[50px] md:pt-[80px]'>
						<section className='w-full mt-5 md:mt-10 '>
							<div className='relative overflow-hidden w-full  '>
								{/* <Image
									src='./main.png'
									alt='Modern living room interior design'
									fill
									className='rounded-xl object-cover'
									priority
								/> */}
								<ImageSlider images={images} />

								<div className='absolute inset-0  bg-opacity-30 flex flex-col justify-end items-center p-6 md:p-16'>
									<div className='border p-1 bg-white rounded-lg'>
										<div className='flex flex-wrap '>
											<Link
												href='/#services'
												className='bg-[#1d1f1c] text-white px-2 md:px-8 md:py-3 py-1 rounded-lg hover:bg-opacity-90 transition-all text-sm md:text-base'
											>
												Our Services
											</Link>
											<Link
												href='/#locations'
												className='bg-white text-[#1d1f1c] px-2 md:px-8 md:py-3 py-1 rounded-lg hover:bg-opacity-90 transition-all text-sm md:text-base'
											>
												Locations
											</Link>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
				{/* about section */}
				<div id='about'>
					<About />
				</div>
				{/* our services */}
				<div id='services'>
					<ServicesPage />
				</div>
				{/* portfolio */}
				<div id='portfolio'>
					<PortfolioPage />
				</div>

				{/* Locations */}
				<div id='locations'>
					<LocationsPage />
				</div>

				{/* Contact */}
				<div className='pt-[35px] md:pt-[70px]' id='contact'>
					<Contact />
				</div>
			</ParallaxScroll>
		</main>
	)
}
