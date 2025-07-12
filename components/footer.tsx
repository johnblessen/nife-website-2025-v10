import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="NiFe Health Logo" width={120} height={48} className="h-12 w-auto" />
          </Link>
          <p className="text-sm">
            NiFe Health is India's first health insurance card, offering comprehensive health and wealth benefits.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Youtube className="h-6 w-6" />
            </Link>
          </div>

          {/* Download App Section - Moved here */}
          <div className="pt-4">
            <h4 className="text-white font-semibold mb-3">Download NiFe App</h4>
            <div className="flex flex-col gap-3">
              <Link href="/download-app" className="flex items-center gap-3 hover:text-white transition-colors">
                <Image
                  src="/images/apple-store.png"
                  alt="Download on App Store"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <Link href="/download-app" className="flex items-center gap-3 hover:text-white transition-colors">
                <Image
                  src="/images/google-play.png"
                  alt="Get it on Google Play"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-white transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/press" className="hover:text-white transition-colors">
                Press
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/resources/faqs" className="hover:text-white transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/resources/support" className="hover:text-white transition-colors">
                Contact Support
              </Link>
            </li>
            <li>
              <Link href="/terms-of-use" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-white transition-colors">
                Important Disclaimer
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <span>Hello@NiFeCard.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <span>1800-123-4567</span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="h-5 w-5 mt-1" />
            <div>
              <span>WeWork - Ground Floor, 36, Infantry Rd,</span>
              <br />
              <span>Tasker Town, Shivaji Nagar,</span>
              <br />
              <span>Bengaluru, Karnataka 560001</span>
              <br />
              <Link
                href="https://maps.google.com/?q=WeWork+Ground+Floor+36+Infantry+Road+Tasker+Town+Shivaji+Nagar+Bengaluru+Karnataka+560001"
                target="_blank"
                className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-1 mt-2"
              >
                <ExternalLink className="h-4 w-4" />
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-center text-sm border-t border-gray-700 pt-8">
        <p>&copy; {new Date().getFullYear()} NiFe Health. All rights reserved.</p>
      </div>
    </footer>
  )
}
