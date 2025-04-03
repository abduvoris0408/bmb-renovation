// import MobileNavigation from '@/components/mobile-navigation'
// import { Phone } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// export default function Navbar() {
// 	return (
// 		<div className='backdrop-blur-sm bg-white/70 sticky top-0 z-10'>
// 			<div className='container px-1 mx-auto'>
// 				<div className='w-full py-4  md:px-8 flex items-center justify-between '>
// 					<div className='flex items-center gap-2'>
// 						<Link href={'/'}>
// 							<div className='w-10 h-10 relative'>
// 								<Image
// 									src='/Logo.svg'
// 									alt='BMB Renovation Logo'
// 									width={40}
// 									height={40}
// 									className='object-contain'
// 								/>
// 							</div>
// 						</Link>
// 						<h1 className='text-[#1d1f1c]  text-[21px] font-[450] tracking-tighter'>
// 							BMB Renovation
// 						</h1>
// 					</div>

// 					<nav className='hidden md:flex items-center gap-8'>
// 						<NavItem href='/' isActive>
// 							Home
// 						</NavItem>
// 						<NavItem href='/about'>About Us</NavItem>
// 						<NavItem href='/services'>Our Services</NavItem>
// 						<NavItem href='/portfolio'>Portfolio</NavItem>
// 						<NavItem href='/locations'>Our Locations</NavItem>
// 					</nav>

// 					<Link
// 						href='/contact'
// 						className='hidden md:flex bg-[#1d1f1c] text-white px-6 py-3 rounded-lg items-center gap-2 hover:bg-opacity-90 transition-all'
// 					>
// 						<Phone size={18} />
// 						<span>Contact Us</span>
// 					</Link>

// 					<MobileNavigation />
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// interface NavItemProps {
// 	href: string
// 	children: React.ReactNode
// 	isActive?: boolean
// }

// function NavItem({ href, children, isActive }: NavItemProps) {
// 	return (
// 		<Link
// 			href={href}
// 			className={`relative px-1 py-2 font-medium ${
// 				isActive
// 					? 'text-[#1d1f1c]'
// 					: 'text-[#758195] hover:text-[#1d1f1c]'
// 			} transition-colors`}
// 		>
// 			{children}
// 			{isActive && (
// 				<span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#e1c789]'></span>
// 			)}
// 		</Link>
// 	)
// }

'use client'

import MobileNavigation from '@/components/mobile-navigation'
import { Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navbar() {
	const pathname = usePathname()

	return (
		<div className='backdrop-blur-sm bg-white/70 sticky top-0 z-50'>
			<div className='container px-4 mx-auto'>
				<div className='w-full py-4 md:px-8 flex items-center justify-between '>
					<div className='flex items-center gap-2'>
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

					<nav className='hidden md:flex items-center gap-8'>
						<NavItem href='/' isActive={pathname === '/'}>
							Home
						</NavItem>
						<NavItem href='/about' isActive={pathname === '/about'}>
							About Us
						</NavItem>
						<NavItem
							href='/services'
							isActive={pathname === '/services'}
						>
							Our Services
						</NavItem>
						<NavItem
							href='/portfolio'
							isActive={pathname === '/portfolio'}
						>
							Portfolio
						</NavItem>
						<NavItem
							href='/locations'
							isActive={pathname === '/locations'}
						>
							Our Locations
						</NavItem>
					</nav>

					<Link
						href='/contact'
						className='hidden md:flex bg-[#1d1f1c] text-[#e1c789] px-6 py-3 rounded-lg items-center gap-2 hover:bg-opacity-90 transition-all'
					>
						<Phone size={18} />
						<span>Contact Us</span>
					</Link>

					<MobileNavigation />
				</div>
			</div>
		</div>
	)
}

interface NavItemProps {
	href: string
	children: React.ReactNode
	isActive: boolean
}

function NavItem({ href, children, isActive }: NavItemProps) {
	return (
		<Link
			href={href}
			className={`relative px-1 py-2 font-medium ${
				isActive
					? 'text-[#1d1f1c] font-semibold'
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
