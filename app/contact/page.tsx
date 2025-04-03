'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Select from 'react-select'
export default function Contact() {
	const countryCodes = [
		{ value: '+44', label: 'UK +44' },
		{ value: '+1', label: 'USA +1' },
		{ value: '+33', label: 'France +33' },
		{ value: '+49', label: 'Germany +49' },
		{ value: '+39', label: 'Italy +39' },
		{ value: '+7', label: 'Russia +7' },
		{ value: '+90', label: 'Turkey +90' },
		{ value: '+998', label: 'Uzbekistan +998' },
		{ value: '+91', label: 'India +91' },
		{ value: '+86', label: 'China +86' },
	]
	const [selectedCode, setSelectedCode] = useState(countryCodes[0])

	return (
		<div>
			{/* Contact Form Section */}
			<section className='py-16 px-4'>
				<div className='container mx-auto max-w-7xl'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
						<div>
							<h2 className='text-2xl font-bold text-[#1d1f1c] mb-3'>
								Contact us
							</h2>
							<p className='text-[#758195] mb-6'>
								Our friendly team would love to hear from you.
							</p>

							<form className='space-y-4'>
								<div className='grid grid-cols-2 gap-4'>
									<div>
										<label
											htmlFor='first-name'
											className='block text-sm text-[#758195] mb-1'
										>
											First name
										</label>
										<input
											type='text'
											id='first-name'
											placeholder='First name'
											className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e1c789]'
										/>
									</div>
									<div>
										<label
											htmlFor='last-name'
											className='block text-sm text-[#758195] mb-1'
										>
											Last name
										</label>
										<input
											type='text'
											id='last-name'
											placeholder='Last name'
											className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e1c789]'
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor='email'
										className='block text-sm text-[#758195] mb-1'
									>
										Email
									</label>
									<input
										type='email'
										id='email'
										placeholder='you@example.com'
										className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e1c789]'
									/>
								</div>

								<div>
									<label
										htmlFor='phone'
										className='block text-sm text-[#758195] mb-1'
									>
										Phone number
									</label>
									<div className='flex'>
										<Select
											options={countryCodes}
											value={selectedCode}
											onChange={setSelectedCode}
											className='w-36'
										/>

										{/* Telefon raqam inputi */}
										<input
											type='tel'
											id='phone'
											placeholder='1234 5678'
											className='w-full px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#e1c789]'
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor='message'
										className='block text-sm text-[#758195] mb-1'
									>
										Message
									</label>
									<textarea
										id='message'
										rows={4}
										placeholder='Tell us about your project...'
										className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e1c789]'
									></textarea>
								</div>

								<div className='flex items-start'>
									<input
										type='checkbox'
										id='privacy'
										className='mt-1 mr-2'
									/>
									<label
										htmlFor='privacy'
										className='text-sm text-[#758195]'
									>
										You agree to our friendly{' '}
										<Link
											href='/privacy-policy'
											className='text-[#1d1f1c] underline'
										>
											privacy policy
										</Link>
										.
									</label>
								</div>

								<button
									type='submit'
									className='w-full bg-[#1d1f1c] text-white py-3 rounded-md hover:bg-opacity-90 transition-all'
								>
									Send message
								</button>
							</form>
						</div>

						<div className='hidden md:block'>
							<Image
								src='/placeholder.svg?height=600&width=500'
								alt='Customer service representative'
								width={620}
								height={720}
								className='rounded-lg object-cover'
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
