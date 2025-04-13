// import Seo from '@/layout/seo/seo'
// import type { Metadata } from 'next'
// import { Inter, Roboto } from 'next/font/google'
// import NextTopLoader from 'nextjs-toploader'
// import type React from 'react'
// import Footer from './components/Footer'
// import Navbar from './components/Navbar'
// import './globals.css'

// const inter = Inter({ subsets: ['latin'] })
// const roboto = Roboto({
// 	weight: ['400', '700'],
// 	style: ['normal', 'italic'],
// 	subsets: ['latin'],
// 	display: 'swap',
// })
// export const metadata: Metadata = {
// 	title: 'BMB Renovation - Professional Renovation Services',
// 	description:
// 		'BMB Renovation offers expert renovation services for residential and commercial properties in London and across the UK.',
// 	keywords: [
// 		'renovation services',
// 		'home improvement',
// 		'commercial renovation',
// 		'London renovation',
// 		'UK renovation experts',
// 		'BMB Renovation',
// 	],
// 	icons: '/Logo.svg',
// }

// export default function RootLayout({
// 	children,
// }: Readonly<{
// 	children: React.ReactNode
// }>) {
// 	return (
// 		<html lang='en'>
// 			<body className={inter.className}>
// 				<Seo>
// 					<NextTopLoader />
// 					<Navbar />
// 					{children}
// 					<Footer />
// 				</Seo>
// 			</body>
// 		</html>
// 	)
// }

import Seo from '@/layout/seo/seo'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import Script from 'next/script' // Script komponentini import qilish
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

				{/* Replain chat widget */}
				<Script id='replain-widget' strategy='afterInteractive'>
					{`
            window.replainSettings = { id: '86a294f6-21a5-42db-9fed-d785ce3565da' };
            (function(u){var s=document.createElement('script');s.async=true;s.src=u;
            var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
            })('https://widget.replain.cc/dist/client.js');
          `}
				</Script>
			</body>
		</html>
	)
}
