import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NiFe Health",
  description:
    "India's First Health Insurance Card! Get ₹3L-₹10L Coverage + Top-up Options. Coverage starts from day 1 for new diseases. Access 10,000+ Cashless Hospitals. Your complete health protection starts here!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* AOS CSS */}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>

        {/* Scripts at the end of body */}
        <Script
          src="https://unpkg.com/aos@2.3.1/dist/aos.js"
          strategy="afterInteractive"
          onLoad={() => {
            // Initialize AOS when script loads
            if (typeof window !== "undefined" && (window as any).AOS) {
              ;(window as any).AOS.init({
                duration: 1000,
                once: true,
                offset: 100,
              })
            }
          }}
        />
      </body>
    </html>
  )
}
