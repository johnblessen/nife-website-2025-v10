"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Shield,
  Hospital,
  CreditCard,
  Gift,
  UserPlus,
  FileText,
  Sparkles,
  Star,
  Heart,
  Coins,
  Building2,
  Smartphone,
  TrendingUp,
  ArrowRight,
  Play,
} from "lucide-react"
import SignupModal from "@/components/signup-modal"
import { useState, useEffect } from "react"

export default function Home2() {
  const [showSignupModal, setShowSignupModal] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Signup Modal */}
      <SignupModal isOpen={showSignupModal} onClose={() => setShowSignupModal(false)} />

      {/* Hero Section - Modern & Colorful */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8" data-aos="fade-right">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 text-purple-700 font-medium">
                <Sparkles className="h-5 w-5" />
                India's First Health & Wealth Card
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
                  NiFe Health
                </span>
                <br />
                <span className="text-gray-900">Protect & Prosper</span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                Get ₹3L-₹1Cr health coverage + earn 1% gold coins on every purchase. 100% cashless treatment at 10,000+
                hospitals with no co-payment. Your health protection that builds wealth!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => setShowSignupModal(true)}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Your NiFe Card
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-bold px-8 py-4 text-lg rounded-full bg-transparent"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">₹1 Cr</div>
                  <div className="text-sm text-gray-600">Max Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">10K+</div>
                  <div className="text-sm text-gray-600">Hospitals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">1%</div>
                  <div className="text-sm text-gray-600">Gold Rewards</div>
                </div>
              </div>
            </div>

            {/* Right Content - Interactive Card Display */}
            <div className="relative" data-aos="fade-left">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Main Card */}
                <div className="relative transform rotate-6 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-3xl p-8 shadow-2xl">
                    <div className="text-white">
                      <div className="flex justify-between items-start mb-8">
                        <div>
                          <h3 className="text-2xl font-bold">NiFe Health</h3>
                          <p className="text-white/80">Premium Wellness Card</p>
                        </div>
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <Heart className="h-6 w-6 text-white" />
                        </div>
                      </div>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3">
                          <Shield className="h-5 w-5 text-white/80" />
                          <span>₹10L Health Coverage</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Coins className="h-5 w-5 text-white/80" />
                          <span>1% Gold Rewards</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Hospital className="h-5 w-5 text-white/80" />
                          <span>10,000+ Cashless Hospitals</span>
                        </div>
                      </div>

                      <div className="text-2xl font-mono tracking-wider">•••• •••• •••• 1234</div>
                    </div>
                  </div>
                </div>

                {/* Floating Benefits */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl animate-bounce">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Coins className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">+50 Gold Coins</div>
                      <div className="text-xs text-gray-500">Earned today</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl animate-pulse">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">100% Covered</div>
                      <div className="text-xs text-gray-500">Cashless treatment</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Colorful Cards */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Everything You Need
              </span>
              <br />
              <span className="text-gray-900">In One Card</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NiFe Card combines health insurance, wealth building, and wellness benefits in one revolutionary product
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Health Insurance */}
            <Card
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-blue-800">Health Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>₹3L to ₹1Cr coverage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>100% cashless treatment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>No co-payment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>12 months PED waiting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Gold Rewards */}
            <Card
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-yellow-50 to-orange-100 border-orange-200"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Coins className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-orange-800">Gold Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>1% gold coins on every spend</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>Real-time gold pricing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>Buy, sell, convert to physical</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>Wealth building made easy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Wellness Benefits */}
            <Card
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-green-100 border-green-200"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-green-800">Wellness Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Unlimited Apollo consultations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Free annual health checkup</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>25% hospital discounts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Wellness marketplace access</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Digital Services */}
            <Card
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-purple-800">Digital Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span>Free ABHA card registration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span>Digital health records</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span>NiFe mobile app</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span>24/7 customer support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Prepaid Card */}
            <Card
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-pink-800">RuPay Prepaid Card</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-pink-500" />
                    <span>PayU powered card</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-pink-500" />
                    <span>Accepted everywhere</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-pink-500" />
                    <span>Secure transactions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-pink-500" />
                    <span>Real-time notifications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Partner Benefits */}
            <Card
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-indigo-800">Partner Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-indigo-500" />
                    <span>Lenskart Gold membership</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-indigo-500" />
                    <span>Dental clinic discounts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-indigo-500" />
                    <span>Pharmacy discounts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-indigo-500" />
                    <span>Diagnostic test savings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works - Interactive Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                How NiFe Card Works
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started in minutes and enjoy comprehensive health and wealth benefits
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>

              {/* Step 1 */}
              <div className="relative flex items-center mb-16" data-aos="fade-right">
                <div className="flex-1 text-right pr-8">
                  <div className="bg-white rounded-2xl p-6 shadow-xl">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">1. Apply Online</h3>
                    <p className="text-gray-600 mb-4">
                      Fill out our simple online application form with basic details. No medical checkup required!
                    </p>
                    <div className="flex justify-end">
                      <Badge className="bg-purple-100 text-purple-800">2 minutes</Badge>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center z-10">
                  <UserPlus className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-center mb-16" data-aos="fade-left">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center z-10">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1 text-left pl-8">
                  <div className="bg-white rounded-2xl p-6 shadow-xl">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">2. Instant Approval</h3>
                    <p className="text-gray-600 mb-4">
                      Get instant approval and digital card within minutes. Physical card delivered in 7-10 days.
                    </p>
                    <div className="flex justify-start">
                      <Badge className="bg-blue-100 text-blue-800">Instant</Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-center mb-16" data-aos="fade-right">
                <div className="flex-1 text-right pr-8">
                  <div className="bg-white rounded-2xl p-6 shadow-xl">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">3. Start Using Benefits</h3>
                    <p className="text-gray-600 mb-4">
                      Immediately access cashless treatment, Apollo consultations, and start earning gold coins.
                    </p>
                    <div className="flex justify-end">
                      <Badge className="bg-green-100 text-green-800">Day 1</Badge>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center z-10">
                  <Gift className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-center" data-aos="fade-left">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center z-10">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1 text-left pl-8">
                  <div className="bg-white rounded-2xl p-6 shadow-xl">
                    <h3 className="text-2xl font-bold text-orange-800 mb-4">4. Build Wealth</h3>
                    <p className="text-gray-600 mb-4">
                      Watch your gold coins grow with every purchase. Convert to physical gold or cash anytime.
                    </p>
                    <div className="flex justify-start">
                      <Badge className="bg-orange-100 text-orange-800">Ongoing</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Cards */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real people who transformed their health and wealth with NiFe Card
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/images/dinesh.png"
                    alt="Dinesh Kumar"
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg">Dinesh Kumar</h4>
                    <p className="text-gray-600">Software Engineer</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  "Saved ₹2.5L on my father's surgery with 100% cashless treatment. Plus earning gold coins daily!"
                </p>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-sm font-semibold text-green-800">Claim: ₹2,50,000 settled</p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/images/saniya.png"
                    alt="Saniya Sharma"
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg">Saniya Sharma</h4>
                    <p className="text-gray-600">Marketing Manager</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  "Collected 500+ gold coins in 6 months. Apollo consultations are amazing for my family!"
                </p>
                <div className="bg-yellow-50 rounded-lg p-3">
                  <p className="text-sm font-semibold text-yellow-800">Gold earned: ₹3,250 worth</p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/images/vikas.png"
                    alt="Vikas Patel"
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg">Vikas Patel</h4>
                    <p className="text-gray-600">Business Owner</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  "25% hospital discounts + 10% cashback saved my family ₹15,000 annually on health expenses!"
                </p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm font-semibold text-blue-800">Annual savings: ₹15,000</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA - Gradient Background */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto" data-aos="fade-up">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Ready to Join the
              <br />
              <span className="text-yellow-300">NiFe Revolution?</span>
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90">
              Get comprehensive health coverage, earn gold rewards, and access exclusive wellness benefits. Your journey
              to health and wealth starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                onClick={() => setShowSignupModal(true)}
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-12 py-4 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Get Your NiFe Card Now!
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <div className="text-center">
                <p className="text-white/80 text-sm">✓ No medical checkup required</p>
                <p className="text-white/80 text-sm">✓ Coverage starts from day 1</p>
                <p className="text-white/80 text-sm">✓ 7-10 days delivery</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-white/80">Happy Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">₹50Cr+</div>
                <div className="text-white/80">Claims Settled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4.8/5</div>
                <div className="text-white/80">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-white/80">Claim Success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  )
}
