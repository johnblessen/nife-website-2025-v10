import type { Metadata } from 'next'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'KIMS Health Card by NiFe - Your Health & Wealth in One Card',
  description: 'Experience premium healthcare with the exclusive KIMS Health Card. Get complimentary health insurance, exclusive KIMS hospital discounts, and earn digital gold rewards.',
}

export default function KimsHealthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* KimsHealth-specific header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/kimshealth" className="flex items-center space-x-2">
              <Image
                src="/images/kims-health-logo.png"
                alt="KIMS Health Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/kimshealth" className="text-gray-600 hover:text-[#dc3545]">
                Home
              </Link>
              <Link href="/kimshealth/benefits" className="text-gray-600 hover:text-[#dc3545]">
                Benefits
              </Link>
              <Link href="/kimshealth/hospitals" className="text-gray-600 hover:text-[#dc3545]">
                KIMS Hospitals
              </Link>
              <Link href="/kimshealth/get-started" className="text-gray-600 hover:text-[#dc3545]">
                Get Started
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/kimshealth/login" className="text-gray-600 hover:text-[#dc3545]">
                Login
              </Link>
              <Link 
                href="/kimshealth/get-started"
                className="bg-[#dc3545] text-white px-4 py-2 rounded-lg hover:bg-[#c82333]"
              >
                Get Your Card
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      {/* KimsHealth-specific footer */}
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/kims-health-logo.png"
                alt="KIMS Health Logo"
                width={120}
                height={40}
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-600 text-sm">
                Your Health & Wealth in One Card
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/kimshealth" className="text-gray-600 hover:text-[#dc3545]">Home</Link></li>
                <li><Link href="/kimshealth/benefits" className="text-gray-600 hover:text-[#dc3545]">Benefits</Link></li>
                <li><Link href="/kimshealth/hospitals" className="text-gray-600 hover:text-[#dc3545]">KIMS Hospitals</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="/kimshealth/contact" className="text-gray-600 hover:text-[#dc3545]">Contact Us</Link></li>
                <li><Link href="/kimshealth/faq" className="text-gray-600 hover:text-[#dc3545]">FAQ</Link></li>
                <li><Link href="/kimshealth/terms" className="text-gray-600 hover:text-[#dc3545]">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-600">
                <li>KIMS Health Card Support</li>
                <li>Email: support@kimshealthcard.com</li>
                <li>Phone: 1800-XXX-XXXX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-8 pt-8 text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} KIMS Health Card by NiFe. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
} 