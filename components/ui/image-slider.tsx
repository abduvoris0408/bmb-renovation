'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

interface ImageSliderProps {
	images: {
		src: string
		alt: string
	}[]
	autoPlay?: boolean
	autoPlayInterval?: number
	showIndicators?: boolean
	showArrows?: boolean
	className?: string
}

export function ImageSlider({
	images,
	autoPlay = true,
	autoPlayInterval = 5000,
	showIndicators = true,
	showArrows = true,
	className,
}: ImageSliderProps) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isHovering, setIsHovering] = useState(false)

	const goToNext = () => {
		setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
	}

	const goToPrevious = () => {
		setCurrentIndex(
			prevIndex => (prevIndex - 1 + images.length) % images.length
		)
	}

	const goToSlide = (index: number) => {
		setCurrentIndex(index)
	}

	useEffect(() => {
		if (!autoPlay || isHovering) return

		const interval = setInterval(goToNext, autoPlayInterval)
		return () => clearInterval(interval)
	}, [autoPlay, autoPlayInterval, isHovering])

	if (!images || images.length === 0) {
		return null
	}

	return (
		<div
			className={cn(
				'relative w-full h-full md:h-[600px] overflow-hidden rounded-lg',
				className
			)}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
		>
			<div
				className='flex transition-transform duration-500 ease-out'
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{images.map((image, index) => (
					<div key={index} className='min-w-full'>
						<div className='relative aspect-video w-full'>
							<img
								src={image.src || '/placeholder.svg'}
								alt={image.alt}
								className='h-full w-full object-cover'
							/>
						</div>
					</div>
				))}
			</div>

			{showArrows && images.length > 1 && (
				<>
					<Button
						variant='ghost'
						size='icon'
						className='absolute left-4 top-1/2 transform -translate-y-1/2 z-20 md:left-6 bg-white/30 p-2 rounded-full backdrop-blur-sm hover:bg-white/50 transition'
						onClick={goToPrevious}
						aria-label='Previous slide'
					>
						<ChevronLeft className='h-6 w-6 text-white' />
					</Button>

					<Button
						variant='ghost'
						size='icon'
						className='absolute right-4 top-1/2 transform -translate-y-1/2 z-20 md:right-6 bg-white/30 p-2 rounded-full backdrop-blur-sm hover:bg-white/50 transition'
						onClick={goToNext}
						aria-label='Next slide'
					>
						<ChevronRight className='h-6 w-6 text-white' />
					</Button>
				</>
			)}

			{/* {showIndicators && images.length > 1 && (
				<div className='absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2'>
					{images.map((_, index) => (
						<button
							key={index}
							className={cn(
								'h-2 w-2 rounded-full transition-all',
								currentIndex === index
									? 'bg-white w-4'
									: 'bg-white/50'
							)}
							onClick={() => goToSlide(index)}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			)} */}
		</div>
	)
}
