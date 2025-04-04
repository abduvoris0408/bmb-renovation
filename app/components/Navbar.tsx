// 'use client'

// import MobileNavigation from '@/components/mobile-navigation'
// import { Phone } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import React from 'react'

// export default function Navbar() {
// 	const pathname = usePathname()

// 	const [activeNav, setActiveNav] = React.useState<string | null>(null)

// 	React.useEffect(() => {
// 		if (typeof window !== 'undefined') {
// 			const currentHash = window.location.hash || '#hero'
// 			setActiveNav(currentHash)

// 			setTimeout(() => {
// 				const section = document.getElementById(
// 					currentHash.replace('#', '')
// 				)
// 				section?.scrollIntoView({ behavior: 'smooth' })
// 			}, 0)
// 		}
// 	}, [])

// 	const scrollToSection = (id: string) => {
// 		if (typeof window !== 'undefined') {
// 			const section = document.getElementById(id)
// 			if (section) {
// 				section.scrollIntoView({ behavior: 'smooth' })
// 				setActiveNav(`#${id}`)
// 			}
// 		}
// 	}

// 	return (
// 		<div className='backdrop-blur-sm w-full bg-white/70 fixed top-0  z-50'>
// 			<div className='container px-4 mx-auto'>
// 				<div className='w-full py-4 md:px-8 flex items-center justify-between'>
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
// 						<h1 className='text-[#1d1f1c] text-[21px] font-[450] tracking-tighter'>
// 							BMB Renovation
// 						</h1>
// 					</div>

// 					<nav className='hidden md:flex items-center gap-8'>
// 						{
// 							<>
// 								<NavItem
// 									isActive={activeNav === '#hero'}
// 									onClick={() => scrollToSection('hero')}
// 								>
// 									Home
// 								</NavItem>
// 								<NavItem
// 									isActive={activeNav === '#about'}
// 									onClick={() => scrollToSection('about')}
// 								>
// 									About Us
// 								</NavItem>
// 								<NavItem
// 									isActive={activeNav === '#services'}
// 									onClick={() => scrollToSection('services')}
// 								>
// 									Our Services
// 								</NavItem>
// 								<NavItem
// 									isActive={activeNav === '#portfolio'}
// 									onClick={() => scrollToSection('portfolio')}
// 								>
// 									Portfolio
// 								</NavItem>
// 								<NavItem
// 									isActive={activeNav === '#locations'}
// 									onClick={() => scrollToSection('locations')}
// 								>
// 									Our Locations
// 								</NavItem>
// 							</>
// 						}
// 					</nav>
// 					<NavItem onClick={() => scrollToSection('contact')}>
// 						<div className='hidden md:flex bg-[#1d1f1c] text-[#e1c789] px-6 py-3 rounded-lg items-center gap-2 hover:bg-opacity-90 transition-all'>
// 							<Phone size={18} />
// 							<span>Contact Us</span>
// 						</div>
// 					</NavItem>

// 					<MobileNavigation />
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// interface NavItemProps {
// 	href?: string
// 	children: React.ReactNode
// 	isActive?: boolean
// 	onClick?: () => void
// }

// function NavItem({ href, children, isActive, onClick }: NavItemProps) {
// 	const classes = `relative px-1 py-2 font-medium ${
// 		isActive
// 			? 'text-[#1d1f1c] font-semibold'
// 			: 'text-[#758195] hover:text-[#1d1f1c]'
// 	} transition-colors`

// 	if (onClick) {
// 		return (
// 			<button onClick={onClick} className={classes}>
// 				{children}
// 				{isActive && (
// 					<span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#e1c789]' />
// 				)}
// 			</button>
// 		)
// 	}

// 	return (
// 		<Link href={href!} className={classes}>
// 			{children}
// 			{isActive && (
// 				<span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#e1c789]' />
// 			)}
// 		</Link>
// 	)
// }

'use client'

import MobileNavigation from '@/components/mobile-navigation'
import { Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

export default function Navbar() {
	const pathname = usePathname()
	const router = useRouter()

	const [activeNav, setActiveNav] = React.useState<string | null>(null)

	const isHomePage = pathname === '/'

	React.useEffect(() => {
		if (typeof window !== 'undefined') {
			if (isHomePage) {
				const currentHash = window.location.hash || '#hero'
				setActiveNav(currentHash)

				setTimeout(() => {
					const section = document.getElementById(
						currentHash.replace('#', '')
					)
					section?.scrollIntoView({ behavior: 'smooth' })
				}, 0)
			} else {
				setActiveNav(pathname)
			}
		}
	}, [pathname, isHomePage])

	const handleNavigation = (id: string) => {
		if (isHomePage) {
			scrollToSection(id)
		} else {
			router.push(`/#${id}`)
		}
	}

	const scrollToSection = (id: string) => {
		if (typeof window !== 'undefined') {
			const section = document.getElementById(id)
			if (section) {
				section.scrollIntoView({ behavior: 'smooth' })
				setActiveNav(`#${id}`)
			}
		}
	}

	return (
		<div className='backdrop-blur-sm w-full bg-white/70 fixed top-0 z-50'>
			<div className='container px-4 mx-auto'>
				<div className='w-full py-3 md:px-8 flex items-center justify-between'>
					<div className='flex items-center gap-2'>
						<div className='w-10 h-10 relative'>
							<Image
								src='/Logo.svg'
								alt='BMB Renovation Logo'
								width={40}
								height={40}
								className='object-contain'
							/>
						</div>
						<h1 className='text-[#1d1f1c] text-[21px] font-[450] tracking-tighter'>
							BMB Renovation
						</h1>
					</div>

					<nav className='hidden md:flex items-center gap-8'>
						<NavItem
							isActive={
								activeNav === '#hero' ||
								(!activeNav && isHomePage)
							}
							onClick={() => handleNavigation('hero')}
						>
							Home
						</NavItem>
						<NavItem
							isActive={activeNav === '#about'}
							onClick={() => handleNavigation('about')}
						>
							About Us
						</NavItem>
						<NavItem
							isActive={
								activeNav === '#services' ||
								pathname === '/services'
							}
							onClick={() => handleNavigation('services')}
						>
							Our Services
						</NavItem>
						<NavItem
							isActive={
								activeNav === '#portfolio' ||
								pathname === '/portfolio'
							}
							onClick={() => handleNavigation('portfolio')}
						>
							Portfolio
						</NavItem>
						<NavItem
							isActive={
								activeNav === '#locations' ||
								pathname === '/locations'
							}
							onClick={() => handleNavigation('locations')}
						>
							Our Locations
						</NavItem>
					</nav>
					<NavItem onClick={() => handleNavigation('contact')}>
						<div className='hidden md:flex bg-[#1d1f1c] text-[#e1c789] px-6 py-3 rounded-lg items-center gap-2 hover:bg-opacity-90 transition-all'>
							<Phone size={18} />
							<span>Contact Us</span>
						</div>
					</NavItem>

					<MobileNavigation />
				</div>
			</div>
		</div>
	)
}

interface NavItemProps {
	href?: string
	children: React.ReactNode
	isActive?: boolean
	onClick?: () => void
}

function NavItem({ href, children, isActive, onClick }: NavItemProps) {
	const classes = `relative px-1 py-2 font-medium ${
		isActive ? 'text-[#1d1f1c] ' : 'text-[#758195] hover:text-[#1d1f1c]'
	} transition-colors`

	if (onClick) {
		return (
			<button onClick={onClick} className={classes}>
				{children}
				{isActive && (
					<span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#e1c789]' />
				)}
			</button>
		)
	}

	return (
		<Link href={href!} className={classes}>
			{children}
			{isActive && (
				<span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#e1c789]' />
			)}
		</Link>
	)
}
