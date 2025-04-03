import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className='bg-[#f8f8f8] py-12'>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-center gap-2'>
					<Link href={'/'}>
						<div className='w-10 h-10 relative'>
							<Image
								src='/Logo.svg'
								alt='BMB Renovation Logo'
								width={40}
								height={40}
								className='object-contain'
							/>
						</div>
					</Link>
					<h1 className='text-[#1d1f1c] text-[21px] font-[450] tracking-tighter'>
						BMB Renovation
					</h1>
				</div>
				<div className='flex flex-col md:flex-row justify-between items-center mb-8'>
					<nav className='flex gap-6'>
						<Link
							href='/'
							className='text-[#758195] hover:text-[#1d1f1c] transition-colors'
						>
							Home
						</Link>
						<Link
							href='/about'
							className='text-[#758195] hover:text-[#1d1f1c] transition-colors'
						>
							About
						</Link>
						<Link
							href='/services'
							className='text-[#758195] hover:text-[#1d1f1c] transition-colors'
						>
							Services
						</Link>
						<Link
							href='/testimonials'
							className='text-[#758195] hover:text-[#1d1f1c] transition-colors'
						>
							Testimonials
						</Link>
					</nav>

					<div className='flex gap-4 mt-4 md:mt-0'>
						<SocialIcon href='#' icon='twitter' />
						<SocialIcon href='#' icon='instagram' />
						<SocialIcon href='#' icon='youtube' />
						<SocialIcon href='#' icon='facebook' />
					</div>
				</div>

				<div className='text-center text-[#758195] text-sm'>
					<p>
						&copy; {new Date().getFullYear()} - London, BMB
						Renovation LTD.
					</p>
				</div>
			</div>
		</footer>
	)
}
interface SocialIconProps {
	href: string
	icon: 'twitter' | 'instagram' | 'youtube' | 'facebook'
}

function SocialIcon({ href, icon }: SocialIconProps) {
	return (
		<a
			href={href}
			className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-[#1d1f1c] hover:bg-[#e1c789] transition-colors'
			aria-label={`Follow us on ${icon}`}
		>
			{icon === 'twitter' && (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
				</svg>
			)}
			{icon === 'instagram' && (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<rect
						x='2'
						y='2'
						width='20'
						height='20'
						rx='5'
						ry='5'
					></rect>
					<path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
					<line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
				</svg>
			)}
			{icon === 'youtube' && (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z'></path>
					<polygon points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02'></polygon>
				</svg>
			)}
			{icon === 'facebook' && (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
				</svg>
			)}
		</a>
	)
}
