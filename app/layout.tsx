import Seo from '@/layout/seo/seo'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import type React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
})
export const metadata: Metadata = {
	title: 'BMB Renovation - Professional Renovation Services',
	description:
		'BMB Renovation offers expert renovation services for residential and commercial properties in London and across the UK.',
	keywords: [
		'renovation services',
		'home improvement',
		'commercial renovation',
		'London renovation',
		'UK renovation experts',
		'BMB Renovation',
	],
	icons: '/Logo.svg',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Seo>
					<NextTopLoader />
					<Navbar />
					{children}
					<Footer />
				</Seo>
			</body>
		</html>
	)
}
