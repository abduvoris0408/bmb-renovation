import { servicesData } from '@/lib/serviceData'
import Image from 'next/image'
type Props = {
	params: {
		slug: string
	}
}
export default function ServiceDetailPage({ params }: Props) {
	const service = servicesData.find(s => s.slug === params.slug)

	return (
		<main className='min-h-screen bg-white'>
			<section className='container mx-auto px-4 pt-[70px] md:pt-[100px]'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
					<div className='md:col-span-2'>
						<div className='relative h-[200px] md:h-[400px] rounded-lg overflow-hidden'>
							<Image
								src={service?.images[0]}
								alt='Modern living room with gray sofa and orange accents'
								fill
								className='object-cover'
							/>
						</div>
					</div>
					<div className='grid grid-cols-2 md:grid-cols-1 gap-4'>
						<div className='relative h-[100px] md:h-[190px] rounded-lg overflow-hidden'>
							<Image
								src={service?.images[1]}
								alt='Elegant living room design'
								fill
								className='object-cover'
							/>
						</div>
						<div className='relative h-[100px] md:h-[190px]  rounded-lg overflow-hidden'>
							<Image
								src={service?.images[2]}
								alt='Modern interior with colorful artwork'
								fill
								className='object-cover'
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Service Description */}
			<section className='container mx-auto px-4 py-8'>
				<h1 className='text-3xl md:text-4xl font-bold text-[#1d1f1c] mb-4'>
					{service?.title}{' '}
				</h1>
				{service?.description}

				{/* <div className='max-w-4xl'>
					<h2 className='text-2xl font-bold text-[#1d1f1c] mb-4'>
						Painting
					</h2>

					<h3 className='text-xl font-semibold text-[#1d1f1c] mt-6 mb-3'>
						Asosiy turlari:
					</h3>
					<ul className='list-disc pl-6 space-y-2 text-[#758195]'>
						<li>
							Interyer bo‘yash: Ichki makon devorlarini bo‘yash.
							Bu makon ko‘rinishini o‘zgartirish yoki yaxshilash
							uchun qilinadi.
						</li>
						<li>
							Eksteryer bo‘yash: Binoning tashqi tomonlarini
							himoya qilish va ko‘rinishini yaxshilash uchun
							bo‘yash.
						</li>
					</ul>

					<h3 className='text-xl font-semibold text-[#1d1f1c] mt-6 mb-3'>
						Bo‘yoq turlari:
					</h3>
					<ul className='list-disc pl-6 space-y-2 text-[#758195]'>
						<li>
							Water-based paints: Eco-friendly options with low
							odor, ideal for most interior applications.
						</li>
						<li>
							Oil-based paints: Durable finishes that provide
							excellent coverage and a smooth finish.
						</li>
						<li>
							Textured paints: Specialty formulations that add
							dimension and unique visual interest to walls.
						</li>
					</ul>

					<h3 className='text-xl font-semibold text-[#1d1f1c] mt-6 mb-3'>
						Techniques:
					</h3>
					<ul className='list-disc pl-6 space-y-2 text-[#758195]'>
						<li>
							Brush painting: For detailed areas and precision
							work.
						</li>
						<li>
							Roller painting: For larger surfaces with efficient
							coverage.
						</li>
						<li>
							Spray painting: For even application and reaching
							difficult areas.
						</li>
					</ul>

					<h2 className='text-2xl font-bold text-[#1d1f1c] mt-8 mb-4'>
						Decorations
					</h2>

					<h3 className='text-xl font-semibold text-[#1d1f1c] mt-6 mb-3'>
						Wall Decorations:
					</h3>
					<ul className='list-disc pl-6 space-y-2 text-[#758195]'>
						<li>
							Custom stencil designs for unique wall patterns.
						</li>
						<li>
							Wallpaper installation (traditional, vinyl, or
							specialty materials).
						</li>
						<li>
							3D panel installation for dimensional decorative
							elements.
						</li>
					</ul>

					<h3 className='text-xl font-semibold text-[#1d1f1c] mt-6 mb-3'>
						Ceiling Decorations:
					</h3>
					<ul className='list-disc pl-6 space-y-2 text-[#758195]'>
						<li>Drywall ceiling designs and installations.</li>
						<li>LED lighting integration for ambiance.</li>
						<li>
							Decorative moldings and trims from various
							materials.
						</li>
					</ul>

					<h3 className='text-xl font-semibold text-[#1d1f1c] mt-6 mb-3'>
						Floor Treatments:
					</h3>
					<ul className='list-disc pl-6 space-y-2 text-[#758195]'>
						<li>Laminate or parquet floor installation.</li>
						<li>
							Vinyl or ceramic tile installation with custom
							patterns.
						</li>
					</ul>

					<h3 className='text-xl font-semibold text-[#1d1f1c] mt-6 mb-3'>
						Design Accessories:
					</h3>
					<ul className='list-disc pl-6 space-y-2 text-[#758195]'>
						<li>Art pieces, frames, and decorative mirrors.</li>
						<li>Accent lighting to enhance atmosphere.</li>
					</ul>

					<h2 className='text-2xl font-bold text-[#1d1f1c] mt-8 mb-4'>
						Materials and Tools
					</h2>

					<h3 className='text-xl font-semibold text-[#1d1f1c] mt-6 mb-3'>
						For Painting:
					</h3>
					<ul className='list-disc pl-6 space-y-2 text-[#758195]'>
						<li>Brushes, rollers, and spray equipment.</li>
						<li>Primers, base coats, and specialty finishes.</li>
						<li>Protective tapes and coverings for clean work.</li>
					</ul>

					<h3 className='text-xl font-semibold text-[#1d1f1c] mt-6 mb-3'>
						For Decoration:
					</h3>
					<ul className='list-disc pl-6 space-y-2 text-[#758195]'>
						<li>
							Wallpaper adhesives, installation tools, and
							decorative tiles.
						</li>
						<li>
							LED lighting systems, design elements (moldings,
							frames).
						</li>
					</ul>
				</div> */}
			</section>
		</main>
	)
}
