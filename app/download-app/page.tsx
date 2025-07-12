"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Smartphone,
  Download,
  Shield,
  Coins,
  Hospital,
  Phone,
  CheckCircle,
  Star,
  Apple,
  Play,
  QrCode,
  Users,
  Clock,
  Globe,
} from "lucide-react"

export default function DownloadApp() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-8 max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-6 py-3 text-purple-600 font-medium">
              <Smartphone className="h-5 w-5" />
              Download NiFe App
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Get the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                NiFe Mobile App
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Manage your health insurance, track gold rewards, access tele-consultation, and more - all from your
              smartphone
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - App Features */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Manage Health Insurance</h3>
                    <p className="text-gray-600">
                      View policy details, file claims, track claim status, and access digital insurance card
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Coins className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Track Gold Rewards</h3>
                    <p className="text-gray-600">
                      Monitor your gold coin balance, view transaction history, and convert to physical gold
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">24/7 Tele-consultation</h3>
                    <p className="text-gray-600">
                      Connect with qualified doctors instantly for unlimited consultations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Hospital className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Hospital Locator</h3>
                    <p className="text-gray-600">
                      Find nearby network hospitals, check availability, and book appointments
                    </p>
                  </div>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Download Now</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="https://apps.apple.com/app/nife-card"
                    target="_blank"
                    className="flex items-center gap-3 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition-colors"
                  >
                    <Apple className="h-8 w-8" />
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-lg font-semibold">App Store</div>
                    </div>
                  </Link>

                  <Link
                    href="https://play.google.com/store/apps/details?id=com.nife.card"
                    target="_blank"
                    className="flex items-center gap-3 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition-colors"
                  >
                    <Play className="h-8 w-8" />
                    <div className="text-left">
                      <div className="text-xs">Get it on</div>
                      <div className="text-lg font-semibold">Google Play</div>
                    </div>
                  </Link>
                </div>

                {/* QR Code Section */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center">
                      <QrCode className="h-12 w-12 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Scan QR Code</h4>
                      <p className="text-gray-600 text-sm">Scan to download the app directly on your phone</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Phone Mockup */}
            <div className="relative flex justify-center">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=300&text=NiFe+App+Screenshot"
                  alt="NiFe Mobile App"
                  width={300}
                  height={600}
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Everything You Need in One App</h2>
            <p className="text-xl text-gray-600">
              The NiFe mobile app puts complete control of your health and wealth in your hands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                  <Download className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Easy Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Quick registration process with instant card activation and immediate access to all benefits
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Secure & Safe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Bank-grade security with biometric authentication and encrypted data storage
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <CardTitle>User Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Intuitive interface designed for users of all ages with multilingual support
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle>24/7 Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Round-the-clock access to all services including emergency support and tele-consultation
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Family Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Manage health insurance and benefits for your entire family from a single account
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Multi-language</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Available in multiple Indian languages for better accessibility and user experience
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">App Screenshots</h2>
            <p className="text-xl text-gray-600">Take a look at the NiFe app interface and features</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Dashboard", description: "Main dashboard with all key features" },
              { title: "Gold Rewards", description: "Track and manage your gold coins" },
              { title: "Insurance", description: "View policy details and file claims" },
              { title: "Tele-consultation", description: "Connect with doctors instantly" },
            ].map((screenshot, index) => (
              <div key={index} className="relative group">
                <Image
                  src={`/placeholder.svg?height=500&width=250&text=${screenshot.title}`}
                  alt={`App Screenshot ${index + 1}`}
                  width={250}
                  height={500}
                  className="rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h4 className="font-bold text-lg">{screenshot.title}</h4>
                  <p className="text-sm">{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Trusted by Thousands</h2>
            <p className="text-xl text-gray-600">Join the growing community of NiFe app users</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
              <div className="text-gray-600">App Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">4.8</div>
              <div className="text-gray-600">App Store Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Ready to Take Control of Your Health & Wealth?
            </h2>
            <p className="text-xl leading-relaxed opacity-90">
              Download the NiFe app today and start your journey towards better health and financial security
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="https://apps.apple.com/app/nife-card"
                target="_blank"
                className="flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors font-semibold"
              >
                <Apple className="h-8 w-8" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </Link>

              <Link
                href="https://play.google.com/store/apps/details?id=com.nife.card"
                target="_blank"
                className="flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors font-semibold"
              >
                <Play className="h-8 w-8" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </Link>
            </div>
            <p className="text-sm opacity-80">Available for iOS 12.0+ and Android 6.0+</p>
          </div>
        </div>
      </section>
    </main>
  )
}
