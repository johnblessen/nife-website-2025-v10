"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const section1Height = window.innerHeight // Height of the first section

      // Show/hide navbar based on scroll position
      if (currentScrollY > section1Height) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      // Update scrolled state for transparency
      setIsScrolled(currentScrollY > 20)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isVisible 
          ? 'translate-y-0' 
          : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-purple-900/30 backdrop-blur-sm' 
          : 'bg-transparent'
      }`}
    >
      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="logo">
              <Image src="/images/logo.png" alt="Logo" width={200} height={70} className="object-contain" />
            </Link>
            
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/#benefits" className={`${isScrolled ? 'text-white' : 'text-white'} hover:text-purple-200 transition-colors text-base font-normal`}>Benefits</Link>
              <Link href="/#pricing" className={`${isScrolled ? 'text-white' : 'text-white'} hover:text-purple-200 transition-colors text-base font-normal`}>Pricing</Link>
              <Link href="/#marketplace" className={`${isScrolled ? 'text-white' : 'text-white'} hover:text-purple-200 transition-colors text-base font-normal`}>Marketplace</Link>
              <Link href="/#games" className={`${isScrolled ? 'text-white' : 'text-white'} hover:text-purple-200 transition-colors text-base font-normal`}>Health Games</Link>
              <Link href="/#faq" className={`${isScrolled ? 'text-white' : 'text-white'} hover:text-purple-200 transition-colors text-base font-normal`}>FAQ</Link>
              <Link href="/get-started">
                <Button className="bg-[#F94747] text-white px-8 py-2 rounded-full hover:bg-[#F94747]/90 transition-colors text-base font-medium">
                  Join the Revolution!
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className={`md:hidden ${isScrolled ? 'text-white' : 'text-white'} hover:text-purple-200`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-6 border-t border-white/20">
              <div className="flex flex-col space-y-6">
                <Link href="/#benefits" className="text-white hover:text-purple-200 transition-colors text-base font-normal">Benefits</Link>
                <Link href="/#pricing" className="text-white hover:text-purple-200 transition-colors text-base font-normal">Pricing</Link>
                <Link href="/#marketplace" className="text-white hover:text-purple-200 transition-colors text-base font-normal">Marketplace</Link>
                <Link href="/#games" className="text-white hover:text-purple-200 transition-colors text-base font-normal">Health Games</Link>
                <Link href="/#faq" className="text-white hover:text-purple-200 transition-colors text-base font-normal">FAQ</Link>
                <Link href="/get-started">
                  <Button className="bg-[#F94747] text-white px-8 py-2 rounded-full hover:bg-[#F94747]/90 transition-colors w-full text-base font-medium">
                    Join the Revolution!
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
} 