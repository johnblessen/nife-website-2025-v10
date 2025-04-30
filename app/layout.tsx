import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'NiFe - Your Digital Financial Platform',
  description: 'NiFe is a comprehensive digital financial platform offering various services including gift cards, health games, and more.',
  generator: 'Next.js',
  metadataBase: new URL('https://NiFecard.com'),
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
