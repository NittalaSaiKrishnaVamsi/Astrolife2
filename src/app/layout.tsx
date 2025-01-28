import type { Metadata } from 'next'

import './globals.css'
import Header from './Header' 
import Footer from './Footer'
import Hero from './Hero'; 

export const metadata: Metadata = {
  title: 'Astrology Website',
  description: 'Discover the wisdom of the stars.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>   {/* Include the Hero component */}
        {children}  {/* Include the Footer component */}
      </body>
    </html>
  )
}