"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import SignupModal from "./signup-modal"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Only show navbar when scrolled past hero section (keep it fixed on hero)
      setIsScrolled(window.scrollY > window.innerHeight)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    {
      title: "Products",
      items: [
        { title: "NiFe Health Card", href: "/", description: "Complete health insurance with wellness benefits" },
        { title: "Family Plans", href: "/", description: "Comprehensive coverage for your entire family" },
        { title: "Senior Citizen Plans", href: "/", description: "Specialized health coverage for seniors" },
        { title: "Corporate Plans", href: "/", description: "Group health insurance for businesses" },
      ],
    },
    {
      title: "Resources",
      items: [
        { title: "Brochures", href: "/resources/brochures", description: "Download detailed product brochures" },
        { title: "FAQs", href: "/resources/faqs", description: "Frequently asked questions and answers" },
        { title: "Support Materials", href: "/resources/support", description: "Helpful guides and documentation" },
        { title: "Videos", href: "/resources/videos", description: "Educational and promotional videos" },
        { title: "Flyers", href: "/resources/flyers", description: "Marketing materials and flyers" },
      ],
    },
    {
      title: "Company",
      items: [
        { title: "About Us", href: "/about-us", description: "Learn about our mission and values" },
        { title: "Careers", href: "/careers", description: "Join our growing team" },
        { title: "Press", href: "/press", description: "Latest news and press releases" },
        { title: "Blog", href: "/blog", description: "Health tips and industry insights" },
      ],
    },
  ]

  return (
    <>
      <SignupModal isOpen={showSignupModal} onClose={() => setShowSignupModal(false)} />

      {/* Main Header - Fixed and fully transparent on hero, hidden when scrolled */}
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          isScrolled ? "opacity-0 pointer-events-none" : "bg-transparent",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo - White version */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="NiFe Logo"
                width={120}
                height={40}
                className="h-10 w-auto transition-all duration-300 brightness-0 invert"
                priority
              />
            </Link>

            {/* Desktop Navigation - All white text, no background boxes */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="text-base font-medium text-white hover:text-purple-200 bg-transparent border-none shadow-none data-[state=open]:bg-transparent data-[radix-collection-item]:bg-transparent">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.items.map((subItem) => (
                          <li key={subItem.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={subItem.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {subItem.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium text-white hover:text-purple-200 transition-colors bg-transparent hover:bg-transparent focus:bg-transparent focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Buttons - White text */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="font-medium text-white hover:text-purple-200 bg-transparent hover:bg-white/10"
                >
                  Login
                </Button>
              </Link>
              <Button
                onClick={() => setShowSignupModal(true)}
                className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
              >
                Get NiFe Card
              </Button>
            </div>

            {/* Mobile Menu - White icon */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-purple-200 bg-transparent hover:bg-white/10"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <div key={item.title} className="space-y-2">
                      <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                      <div className="pl-4 space-y-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="block py-2 text-gray-600 hover:text-purple-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  <Link
                    href="/contact"
                    className="block py-2 text-gray-900 font-medium hover:text-purple-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>

                  <div className="pt-4 space-y-3">
                    <Link href="/login" className="block">
                      <Button variant="outline" className="w-full bg-transparent" onClick={() => setIsOpen(false)}>
                        Login
                      </Button>
                    </Link>
                    <Button
                      onClick={() => {
                        setIsOpen(false)
                        setShowSignupModal(true)
                      }}
                      className="w-full bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-semibold"
                    >
                      Get NiFe Card
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
