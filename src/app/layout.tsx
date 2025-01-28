import type { Metadata } from 'next'

import './globals.css'


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