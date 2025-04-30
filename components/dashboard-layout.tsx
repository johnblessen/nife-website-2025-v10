"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  BellIcon,
  Home,
  LayoutDashboard,
  Menu,
  Settings,
  LogOut,
  CreditCard,
  ShieldCheck,
  Gift,
  Headphones,
  ArrowRight,
} from "lucide-react"
import VapiAssistant from "@/components/vapi-assistant"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [user] = useState({
    name: "Rajesh Kumar",
    email: "rajesh.kumar@example.com",
    avatarUrl: "/placeholder.svg?height=40&width=40&text=RK",
  })

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="flex flex-col h-full">
                  <div className="py-4 flex justify-center border-b">
                    <Link href="/">
                      <Image
                        src="/images/NiFe-logo.png"
                        alt="NiFe Logo"
                        width={120}
                        height={30}
                        className="h-8 w-auto"
                      />
                    </Link>
                  </div>
                  <nav className="flex-1 overflow-auto py-4">
                    <ul className="space-y-2 px-2">
                      <li>
                        <Link
                          href="/dashboard"
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-purple-600"
                        >
                          <LayoutDashboard className="h-4 w-4" />
                          <span>Dashboard</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dashboard/card"
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-purple-600"
                        >
                          <CreditCard className="h-4 w-4" />
                          <span>My Card</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dashboard/insurance"
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-purple-600"
                        >
                          <ShieldCheck className="h-4 w-4" />
                          <span>Insurance</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dashboard/rewards"
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-purple-600"
                        >
                          <Gift className="h-4 w-4" />
                          <span>Rewards</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dashboard/support"
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-purple-600"
                        >
                          <Headphones className="h-4 w-4" />
                          <span>Support</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <div className="border-t p-4">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/">
                        <LogOut className="mr-2 h-4 w-4" />
                        Log Out
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/" className="hidden md:flex items-center gap-2">
              <Image src="/images/NiFe-logo.png" alt="NiFe Logo" width={120} height={30} className="h-8 w-auto" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <BellIcon className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="sr-only">Notifications</span>
            </Button>
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatarUrl || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback>RK</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium leading-none">{user.name}</p>
                <p className="text-xs text-gray-500 leading-none mt-1">{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden md:flex w-64 flex-col border-r bg-white">
          <div className="flex flex-col flex-1 pt-5">
            <nav className="flex-1 px-4 pb-4">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-purple-600 hover:bg-purple-50"
                  >
                    <LayoutDashboard className="h-5 w-5" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/card"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-purple-600 hover:bg-purple-50"
                  >
                    <CreditCard className="h-5 w-5" />
                    <span>My Card</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/insurance"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-purple-600 hover:bg-purple-50"
                  >
                    <ShieldCheck className="h-5 w-5" />
                    <span>Insurance</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/rewards"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-purple-600 hover:bg-purple-50"
                  >
                    <Gift className="h-5 w-5" />
                    <span>Rewards</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/settings"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-purple-600 hover:bg-purple-50"
                  >
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/support"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-purple-600 hover:bg-purple-50"
                  >
                    <Headphones className="h-5 w-5" />
                    <span>Support</span>
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="border-t p-4">
              <div className="bg-purple-50 rounded-lg p-3 mb-3">
                <div className="flex items-center gap-3">
                  <Home className="h-5 w-5 text-purple-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Back to homepage</p>
                    <p className="text-xs text-gray-500">View NiFe website</p>
                  </div>
                  <Link href="/">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-purple-600">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <Button variant="outline" className="w-full justify-start gap-2">
                <LogOut className="h-4 w-4" />
                Log Out
              </Button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6">{children}</main>
      </div>

      {/* Vapi AI Assistant */}
      <VapiAssistant />
    </div>
  )
}
