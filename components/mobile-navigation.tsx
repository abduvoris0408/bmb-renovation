// 'use client'

// import { ChevronDown, Menu, Phone, X } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useState } from 'react'

// export default function MobileNavigation() {
// 	const [isOpen, setIsOpen] = useState(false)
// 	const [expandedItems, setExpandedItems] = useState<string[]>([])
// 	const pathname = usePathname()

// 	const toggleMenu = () => {
// 		setIsOpen(!isOpen)
// 	}

// 	const toggleExpand = (item: string) => {
// 		if (expandedItems.includes(item)) {
// 			setExpandedItems(expandedItems.filter(i => i !== item))
// 		} else {
// 			setExpandedItems([...expandedItems, item])
// 		}
// 	}

// 	const isActive = (path: string) => pathname === path

// 	return (
// 		<div className='md:hidden'>
// 			<button
// 				onClick={toggleMenu}
// 				className='p-2 text-[#1d1f1c]'
// 				aria-label={isOpen ? 'Close menu' : 'Open menu'}
// 			>
// 				<Menu size={24} />
// 			</button>

// 			<div
// 				className={`fixed top-0 left-0 z-20 h-screen w-[100%] bg-white shadow-lg transform ${
// 					isOpen ? 'translate-x-0' : '-translate-x-full'
// 				} transition-transform duration-300 ease-in-out z-[100]`}
// 			>
// 				<div className='flex flex-col h-full'>
// 					<div className='flex justify-between items-center p-4 border-b'>
// 						<div className='flex items-center gap-2'>
// 							<Link href={'/'} onClick={toggleMenu}>
// 								<div className='w-10 h-10 relative'>
// 									<Image
// 										src='/Logo.svg'
// 										alt='BMB Renovation Logo'
// 										width={40}
// 										height={40}
// 										className='object-contain'
// 									/>
// 								</div>
// 							</Link>
// 							<h1 className='text-[#1d1f1c] text-[21px] font-[450] tracking-tighter'>
// 								BMB Renovation
// 							</h1>
// 						</div>
// 						<button
// 							onClick={toggleMenu}
// 							className='p-2 text-[#1d1f1c]'
// 							aria-label='Close menu'
// 						>
// 							<X size={24} />
// 						</button>
// 					</div>

// 					<nav className='p-4 flex-1 overflow-y-auto'>
// 						<ul className='space-y-4'>
// 							<li className='border-b'>
// 								<Link
// 									href='/'
// 									className={`block py-2 text-lg ${
// 										isActive('/')
// 											? 'text-[#1d1f1c] font-medium'
// 											: 'text-[#758195]'
// 									}`}
// 									onClick={toggleMenu}
// 								>
// 									Home
// 								</Link>
// 							</li>
// 							<li className='border-b'>
// 								<Link
// 									href='/about'
// 									className={`block py-2 text-lg ${
// 										isActive('/about')
// 											? 'text-[#1d1f1c] font-medium'
// 											: 'text-[#758195]'
// 									}`}
// 									onClick={toggleMenu}
// 								>
// 									About Us
// 								</Link>
// 							</li>
// 							<li className='border-b'>
// 								<div className='flex justify-between items-center py-2'>
// 									<Link
// 										href='/services'
// 										className={`text-lg ${
// 											isActive('/services')
// 												? 'text-[#1d1f1c] font-medium'
// 												: 'text-[#758195]'
// 										}`}
// 										onClick={toggleMenu}
// 									>
// 										Our Services
// 									</Link>
// 									<button
// 										onClick={() => toggleExpand('services')}
// 										className='p-1 text-[#758195]'
// 										aria-label={
// 											expandedItems.includes('services')
// 												? 'Collapse services'
// 												: 'Expand services'
// 										}
// 									>
// 										<ChevronDown
// 											size={20}
// 											className={`transition-transform ${
// 												expandedItems.includes(
// 													'services'
// 												)
// 													? 'rotate-180'
// 													: ''
// 											}`}
// 										/>
// 									</button>
// 								</div>
// 								{expandedItems.includes('services') && (
// 									<ul className='pl-4 mt-2 space-y-2 border-l-2 border-gray-100'>
// 										<li>
// 											<Link
// 												href='/services/painting-decorations'
// 												className='block py-1 text-[#758195]'
// 												onClick={toggleMenu}
// 											>
// 												Painting & Decorations
// 											</Link>
// 										</li>
// 										<li>
// 											<Link
// 												href='/services/painting-decorations'
// 												className='block py-1 text-[#758195]'
// 												onClick={toggleMenu}
// 											>
// 												Bathroom Renovations
// 											</Link>
// 										</li>
// 										<li>
// 											<Link
// 												href='/services/painting-decorations'
// 												className='block py-1 text-[#758195]'
// 												onClick={toggleMenu}
// 											>
// 												House Renovation
// 											</Link>
// 										</li>
// 										<li>
// 											<Link
// 												href='/services/painting-decorations'
// 												className='block py-1 text-[#758195]'
// 												onClick={toggleMenu}
// 											>
// 												Kitchen Fitting
// 											</Link>
// 										</li>
// 										<li>
// 											<Link
// 												href='/services'
// 												className='block py-1 text-[#758195] font-medium'
// 												onClick={toggleMenu}
// 											>
// 												View all services
// 											</Link>
// 										</li>
// 									</ul>
// 								)}
// 							</li>
// 							<li className='border-b'>
// 								<Link
// 									href='/portfolio'
// 									className={`block py-2 text-lg ${
// 										isActive('/portfolio')
// 											? 'text-[#1d1f1c] font-medium'
// 											: 'text-[#758195]'
// 									}`}
// 									onClick={toggleMenu}
// 								>
// 									Portfolio
// 								</Link>
// 							</li>
// 							<li className='border-b'>
// 								<Link
// 									href='/locations'
// 									className={`block py-2 text-lg ${
// 										isActive('/locations')
// 											? 'text-[#1d1f1c] font-medium'
// 											: 'text-[#758195]'
// 									}`}
// 									onClick={toggleMenu}
// 								>
// 									Our Locations
// 								</Link>
// 							</li>
// 						</ul>
// 					</nav>

// 					<div className='p-4 border-t'>
// 						<Link
// 							href='/contact'
// 							className='bg-[#1d1f1c] text-[#e1c789] py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all'
// 							onClick={toggleMenu}
// 						>
// 							<Phone size={18} />
// 							<span>Contact Us</span>
// 						</Link>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

'use client'

import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function MobileNavigation() {
	const [isOpen, setIsOpen] = useState(false)
	const [expandedItems, setExpandedItems] = useState<string[]>([])
	const pathname = usePathname()

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const toggleExpand = (item: string) => {
		if (expandedItems.includes(item)) {
			setExpandedItems(expandedItems.filter(i => i !== item))
		} else {
			setExpandedItems([...expandedItems, item])
		}
	}

	const isActive = (path: string) => pathname === path

	return (
		<div className='md:hidden'>
			<button
				onClick={toggleMenu}
				className='p-2 text-[#1d1f1c]'
				aria-label={isOpen ? 'Close menu' : 'Open menu'}
			>
				<Menu size={24} />
			</button>

			<div
				className={`fixed top-0 left-0 z-20 h-screen w-[100%] bg-white shadow-lg transform ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} transition-transform duration-300 ease-in-out z-[100]`}
			>
				<div className='flex flex-col h-full'>
					<div className='flex justify-between items-center p-4 border-b'>
						<div className='flex items-center gap-2'>
							<Link href={'/'} onClick={toggleMenu}>
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
						<button
							onClick={toggleMenu}
							className='p-2 text-[#1d1f1c]'
							aria-label='Close menu'
						>
							<X size={24} />
						</button>
					</div>

					<nav className='p-4 flex-1 overflow-y-auto'>
						<ul className='space-y-4'>
							<li className='border-b'>
								<Link
									href='/#home'
									className={`block py-2 text-lg ${
										isActive('/#home')
											? 'text-[#1d1f1c] font-medium'
											: 'text-[#758195]'
									}`}
									onClick={toggleMenu}
								>
									Home
								</Link>
							</li>
							<li className='border-b'>
								<Link
									href='/#about'
									className={`block py-2 text-lg ${
										isActive('/#about')
											? 'text-[#1d1f1c] font-medium'
											: 'text-[#758195]'
									}`}
									onClick={toggleMenu}
								>
									About Us
								</Link>
							</li>
							<li className='border-b'>
								<div className='flex justify-between items-center py-2'>
									<Link
										href='#services'
										className={`text-lg ${
											isActive('#services')
												? 'text-[#1d1f1c] font-medium'
												: 'text-[#758195]'
										}`}
										onClick={toggleMenu}
									>
										Our Services
									</Link>
									<button
										onClick={() => toggleExpand('services')}
										className='p-1 text-[#758195]'
										aria-label={
											expandedItems.includes('services')
												? 'Collapse services'
												: 'Expand services'
										}
									>
										<ChevronDown
											size={20}
											className={`transition-transform ${
												expandedItems.includes(
													'services'
												)
													? 'rotate-180'
													: ''
											}`}
										/>
									</button>
								</div>
								{expandedItems.includes('services') && (
									<ul className='pl-4 mt-2 space-y-2 border-l-2 border-gray-100'>
										<li>
											<Link
												href='#painting-decorations'
												className='block py-1 text-[#758195]'
												onClick={toggleMenu}
											>
												Painting & Decorations
											</Link>
										</li>
										<li>
											<Link
												href='#bathroom-renovations'
												className='block py-1 text-[#758195]'
												onClick={toggleMenu}
											>
												Bathroom Renovations
											</Link>
										</li>
										<li>
											<Link
												href='#house-renovation'
												className='block py-1 text-[#758195]'
												onClick={toggleMenu}
											>
												House Renovation
											</Link>
										</li>
										<li>
											<Link
												href='#kitchen-fitting'
												className='block py-1 text-[#758195]'
												onClick={toggleMenu}
											>
												Kitchen Fitting
											</Link>
										</li>
										<li>
											<Link
												href='#all-services'
												className='block py-1 text-[#758195] font-medium'
												onClick={toggleMenu}
											>
												View all services
											</Link>
										</li>
									</ul>
								)}
							</li>
							<li className='border-b'>
								<Link
									href='/#portfolio'
									className={`block py-2 text-lg ${
										isActive('/#portfolio')
											? 'text-[#1d1f1c] font-medium'
											: 'text-[#758195]'
									}`}
									onClick={toggleMenu}
								>
									Portfolio
								</Link>
							</li>
							<li className='border-b'>
								<Link
									href='/#locations'
									className={`block py-2 text-lg ${
										isActive('/#locations')
											? 'text-[#1d1f1c] font-medium'
											: 'text-[#758195]'
									}`}
									onClick={toggleMenu}
								>
									Our locations
								</Link>
							</li>
						</ul>
					</nav>

					<div className='p-4 border-t'>
						<Link
							href='#contact'
							className={`bg-[#1d1f1c] text-[#e1c789] py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all ${isActive(
								'/#locations'
							)}`}
							onClick={toggleMenu}
						>
							<Phone size={18} />
							<span>Contact Us</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
