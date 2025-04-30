"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { FileText, Video, Headphones, HelpCircle, FileSpreadsheet, CreditCard } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image src="/images/NiFe-logo.png" alt="NiFe Logo" width={180} height={40} className="h-9 w-auto" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Home
          </Link>
          <Link href="/#benefits" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Benefits
          </Link>
          <Link href="/#pricing" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Membership
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium hover:text-purple-600 transition-colors">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <div className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/resources/videos"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-600 to-pink-600 p-6 no-underline outline-none focus:shadow-md"
                        >
                          <Video className="h-6 w-6 text-white" />
                          <div className="mt-4 mb-2 text-lg font-medium text-white">
                            Video Resources
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Watch tutorials, webinars, and product demos
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <Link
                      href="/resources/health-wealth-card"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50 focus:bg-purple-50"
                    >
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4 text-purple-600" />
                        <div className="text-sm font-medium leading-none">Health & Wealth Card</div>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                        Learn about your NiFe health and wealth benefits
                      </p>
                    </Link>
                    <Link
                      href="/resources/flyers"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50 focus:bg-purple-50"
                    >
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-purple-600" />
                        <div className="text-sm font-medium leading-none">Flyers</div>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                        Download marketing flyers and promotional materials
                      </p>
                    </Link>
                    <Link
                      href="/resources/brochures"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50 focus:bg-purple-50"
                    >
                      <div className="flex items-center gap-2">
                        <FileSpreadsheet className="h-4 w-4 text-purple-600" />
                        <div className="text-sm font-medium leading-none">Brochures</div>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                        Detailed product brochures and information sheets
                      </p>
                    </Link>
                    <Link
                      href="/resources/faqs"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50 focus:bg-purple-50"
                    >
                      <div className="flex items-center gap-2">
                        <HelpCircle className="h-4 w-4 text-purple-600" />
                        <div className="text-sm font-medium leading-none">FAQs</div>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                        Frequently asked questions and answers
                      </p>
                    </Link>
                    <Link
                      href="/resources/support"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50 focus:bg-purple-50"
                    >
                      <div className="flex items-center gap-2">
                        <Headphones className="h-4 w-4 text-purple-600" />
                        <div className="text-sm font-medium leading-none">Support</div>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                        Get help and contact support
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link href="/#marketplace" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Marketplace
          </Link>
          <Link href="/#games" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Health Games
          </Link>
          <Link href="/#faq" className="text-sm font-medium hover:text-purple-600 transition-colors">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex hover:bg-purple-50">
            <Link href="/login" className="w-full h-full flex items-center justify-center">
              Login
            </Link>
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Link href="/get-started" className="w-full h-full flex items-center justify-center">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
} 