import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cichlids Cartel - Premium African Cichlids for Sale',
  description: 'Shop high-quality African Cichlids online. We offer a wide selection of premium fish, expert care advice, and reliable shipping. Your trusted source for beautiful cichlids.',
  keywords: 'African Cichlids, Malawi, Tanganyika, Hap, Peacock, cichlids for sale, aquarium fish, fish store, cichlid breeding, fish shipping',
  icons: {
    icon: [
      { url: '/images/favicon.ico', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/images/favicon.ico', type: 'image/x-icon' },
    ],
  },
  openGraph: {
    title: 'Cichlids Cartel - Premium African Cichlids',
    description: 'Shop high-quality African Cichlids online. Expert care and reliable shipping.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Cichlids Cartel',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" type="image/x-icon" href="/images/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
