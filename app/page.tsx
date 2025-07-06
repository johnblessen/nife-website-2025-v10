"use client"

import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, CheckCircle, Shield, Hospital, Phone, CreditCard, Gift, Play, Coins, Heart, UserPlus, Share2, FileText, Download, Video, ChevronLeft } from "lucide-react"
import InstagramGallery from "@/components/instagram-gallery"
import DigitalGoldRewards from "@/components/digital-gold-rewards"
import HealthGames from "@/components/health-games"
import GiftCardMarketplace from "@/components/gift-card-marketplace"
import AIAssistant from "@/components/ai-assistant"
import { Testimonials } from "@/components/testimonials"
import { FAQSection } from "@/components/faq-section"
import { FAQItem } from "@/components/faq-item"
import React, { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [showPopup, setShowPopup] = useState(true)
  const [formData, setFormData] = useState({
    phone: '',
    otp: ''
  })
  const [showOtp, setShowOtp] = useState(false)
  const [otpSent, setOtpSent] = useState(false)
  const [showGetStarted, setShowGetStarted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically call your API to send OTP
    setOtpSent(true)
    setShowOtp(true)
  }

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically verify the OTP
    setShowOtp(false)
    setShowGetStarted(true)
  }

  const handleGetStarted = () => {
    setShowPopup(false)
    router.push('/register/details')
  }

  const handleCtaClick = () => {
    setShowPopup(true)
  }

  return (
    <main>
      {/* Pre-launch Popup Modal */}
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden border-0 bg-transparent shadow-none">
          <div className="grid grid-cols-1 md:grid-cols-2 bg-white/95 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl">
            {/* Left side - Card Image */}
            <div className="relative h-[400px] flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/images/pre-launch.png"
                  alt="Pre-launch Offer"
                  width={400}
                  height={400}
                  className="object-contain"
                  style={{
                    WebkitMaskImage: "url('/images/pre-launch.png')",
                    WebkitMaskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    backgroundColor: "transparent"
                  }}
                />
              </div>

              {/* Floating Offer Card */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ 
                  y: [0, -15, 0],
                  opacity: 1,
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 1 }
                }}
                className="absolute top-4 right-4"
              >
                <Image
                  src="/images/offerCard.png"
                  alt="Special Offer"
                  width={120}
                  height={120}
                  className="object-contain drop-shadow-xl"
                  style={{
                    filter: "drop-shadow(0 0 15px rgba(0,0,0,0.2))"
                  }}
                />
              </motion.div>
            </div>

            {/* Right side - Registration Form */}
            <div className="p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Exclusive Pre-launch Offer
                  </DialogTitle>
                  <p className="text-center text-gray-600 mb-6">
                    Join our exclusive invite-only list
                  </p>
                </DialogHeader>

                {!showOtp && !showGetStarted ? (
                  <form onSubmit={handlePhoneSubmit} className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
                      >
                        Get OTP
                      </Button>
                    </motion.div>
                  </form>
                ) : showOtp ? (
                  <form onSubmit={handleOtpSubmit} className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="otp">Enter OTP</Label>
                      <Input
                        id="otp"
                        type="text"
                        placeholder="Enter OTP sent to your phone"
                        value={formData.otp}
                        onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                        required
                        className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
                      >
                        Verify & Continue
                      </Button>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-sm text-center text-gray-500"
                    >
                      {otpSent ? "OTP sent successfully!" : "Sending OTP..."}
                    </motion.p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="text-center space-y-4">
                      <h3 className="text-xl font-bold text-purple-600">Welcome to NiFe!</h3>
                      <p className="text-gray-600">
                        You're just a few steps away from securing your health and wealth benefits.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-purple-600" />
                        </div>
                        <span className="text-gray-700">Phone number verified</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                          <Shield className="h-5 w-5 text-purple-600" />
                        </div>
                        <span className="text-gray-700">Health insurance coverage</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                          <Gift className="h-5 w-5 text-purple-600" />
                        </div>
                        <span className="text-gray-700">Digital gold rewards</span>
                      </div>
                    </div>

                    <Button 
                      onClick={handleGetStarted}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
                    >
                      Complete Registration
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Hero Section with Network Hospitals */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <div className="w-full min-h-screen bg-[url('/images/home-banner.png')] bg-no-repeat bg-[length:100%_auto] md:bg-[length:100%_auto]"></div>
        </div>
        {/* Hero Section */}
        <section className="relative min-h-screen text-white overflow-visible">
          <div className="relative z-10 container mx-auto px-4 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-8 mt-20">
                <div className="heading" data-aos="fade-right" data-aos-once="true" data-aos-delay="50">
                  <Image 
                    src="/images/headingContent.svg" 
                    alt="headingContent" 
                    width={1600} 
                    height={400} 
                    className="w-full max-w-[1600px]" 
                  />
                </div>
                <div className="content" data-aos="fade-right" data-aos-once="true" data-aos-delay="60">
                  <p className="text-lg text-white/90 leading-relaxed max-w-[500px]">
                    India's First Health Insurance Card! Get ₹3L-₹10L Coverage + Top-up Options. Coverage starts from day 1 for new diseases. Access 6000+ Cashless Hospitals. Your complete health protection starts here!
                  </p>
                  <Link
                    href="/register/details"
                    className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg mt-6 transition-transform duration-200 hover:scale-105 hover:from-pink-500 hover:to-purple-600"
                    data-aos="fade-up"
                    data-aos-once="true"
                  >
                    APPLY NOW
                  </Link>
                </div>
              </div>
              <div className="relative flex justify-center items-center" data-aos="fade-left" data-aos-once="true" data-aos-delay="80">
                <div className="relative w-full max-w-[500px]">
                  <Image 
                    src="/images/HI.png" 
                    alt="Health Insurance Card" 
                    width={500} 
                    height={500} 
                    className="object-contain w-full opacity-100" 
                    priority
                  />
                </div>
              </div>
            </div>
            {/* Floating Images Container */}
            <div className="vactorsImages pointer-events-none absolute inset-0 z-10">
              <div className="plus mouseAnimate absolute left-10 top-[65%] animate-rotate-slow">
                <Image src="/images/plus.png" alt="plus" width={120} height={120} />
              </div>
              <div className="ring mouseAnimate absolute right-10 top-[70%] animate-rotate-slow">
                <div className="w-[140px] h-[140px] overflow-hidden">
                  <Image 
                    src="/images/ring.png" 
                    alt="ring" 
                    width={140} 
                    height={140} 
                    className="object-contain"
                    style={{ 
                      backgroundColor: 'transparent',
                      border: 'none',
                      outline: 'none',
                      display: 'block'
                    }}
                  />
                </div>
              </div>
              <div className="box mouseAnimate absolute left-1/4 top-[75%] animate-bounce-slow">
                <Image src="/images/box.png" alt="box" width={120} height={120} />
              </div>
              <div className="coin3 mouseAnimate absolute right-1/4 top-[80%] animate-float">
                <Image src="/images/coin3.png" alt="coin3" width={100} height={100} />
              </div>
              <div className="coin2 mouseAnimate absolute left-1/3 top-[85%] animate-bounce">
                <Image src="/images/coin2.png" alt="coin2" width={90} height={90} />
              </div>
              <div className="coin1 mouseAnimate absolute right-1/3 top-[90%] animate-float">
                <Image src="/images/coin1.png" alt="coin1" width={90} height={90} />
              </div>
            </div>
          </div>
        </section>

        {/* Network Hospitals Section */}
        <section className="relative py-20 text-white">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-[url('/images/home-banner.png')] bg-no-repeat bg-[length:100%_auto] bg-[position:0_-100vh] md:bg-[length:100%_auto]"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="flex flex-col items-center mb-8" data-aos="fade-up" data-aos-once="true">
              <div className="relative animate-float">
                <Image src="/images/over6000.png" alt="6000+ Cashless Hospitals" width={600} height={200} className="w-full max-w-[600px]" />
              </div>
            </div>
            <div className="text-center mb-8" data-aos="fade-up">
              <h5 className="text-3xl font-bold text-[#421e63]">Network Hospitals & Wellness Partners</h5>
            </div>
            <div className="network-marquee mt-4" style={{ overflow: 'hidden', width: '100%' }}>
              <div className="network-marquee-track flex items-center" style={{ display: 'flex', animation: 'marquee 30s linear infinite', willChange: 'transform' }}>
                {[13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map((num, idx) => (
                  <div key={idx} className="mx-6 flex-shrink-0" style={{ height: 60, display: 'flex', alignItems: 'center' }}>
                    <Image src={`/images/image${num}logo.png`} alt={`Partner ${num}`} width={150} height={60} style={{ objectFit: 'contain', height: 60, width: 'auto' }} />
                  </div>
                ))}
              </div>
            </div>
            <p className="text-2xl text-[#421e63] text-center mt-8" data-aos="fade-up">
              Nifecard Provides access to over 6000+ Cashless Hospital services via its Insurance partners and is powered in partnership with RBI's approved Bank on a Secured RuPay Platform. The convenience of having all your healthcare needs covered in one card makes managing your wellness easier and more accessible with Nife HealthCare's innovative offering.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center" data-aos="fade-up">
              <div>
                <h4 className="text-4xl font-bold text-[#421e63] mb-2">Up to ₹10L</h4>
                <p className="text-5xl font-bold text-[#421e63]">Health Insurance</p>
              </div>
              <div>
                <p className="text-2xl text-[#421e63]">
                  Coverage starts from day 1 for new diseases! Earn up to 1% as Health & Gold coins on spends via Nifecard. Age-based coverage options available up to 65 years.
                </p>
              </div>
            </div>
            <div className="mt-16 flex justify-center" data-aos="fade-up">
              <div className="relative animate-float">
                <Image src="/images/300,000.png" alt="300,000" width={1000} height={400} className="w-full max-w-[1000px]" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Don't Delay Section */}
      <section className="py-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute top-4 right-4 bg-purple-100 rounded-lg p-3 shadow-sm">
              <CreditCard className="h-6 w-6 text-purple-600" />
              <p className="text-xs font-medium mt-1">RuPay Card</p>
            </div>
            <div className="absolute bottom-4 left-4 bg-purple-100 rounded-lg p-3 shadow-sm">
              <Gift className="h-6 w-6 text-purple-600" />
              <p className="text-xs font-medium mt-1">Digital Gold</p>
            </div>
            <Image
              src="/images/family4.jpg?height=500&width=500&text=NiFe+RuPay+Card"
              alt="NiFe Wealth Benefits"
              width={500}
              height={500}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600">
              Health & Wealth Benefits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Don't Delay Your <span className="text-purple-600">Wellness</span> Journey
            </h2>
            <p className="text-gray-600">
              We feel that every citizen deserves top-quality health services. Most people are scared to walk into
              top-class hospitals, thinking they can't afford it. NiFe changes that with comprehensive coverage and
              benefits.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-purple-100 p-2">
                  <Shield className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium">Health Insurance</h3>
                  <p className="text-sm text-gray-500">Up to ₹10L coverage with day 1 protection</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-purple-100 p-2">
                  <Hospital className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium">Hospital Discounts</h3>
                  <p className="text-sm text-gray-500">Up to 25% at top hospitals</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-purple-100 p-2">
                  <Phone className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium">24/7-Tele-Consultation</h3>
                  <p className="text-sm text-gray-500">Unlimited for family of 6</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-purple-100 p-2">
                  <CreditCard className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium">RuPay Card</h3>
                  <p className="text-sm text-gray-500">1% rewards as digital gold</p>
                </div>
              </div>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 transition-colors">
              <Link href="/#benefits" className="w-full h-full flex items-center justify-center">
                Learn More <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600">
              Comprehensive Benefits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Boost Your Health And Wealth With NiFe</h2>
            <p className="text-gray-600">
              NiFe provides a complete wellness ecosystem with health insurance, hospital discounts, and wealth-building
              opportunities.
            </p>
          </div>

          <Tabs defaultValue="health" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="health">Health Benefits</TabsTrigger>
              <TabsTrigger value="wealth">Wealth Benefits</TabsTrigger>
            </TabsList>
            <TabsContent value="health" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <Shield className="h-8 w-8 text-purple-600 mb-2" />
                    <CardTitle>Health Insurance</CardTitle>
                    <CardDescription>Comprehensive health insurance coverage options</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Coverage options: ₹3L, ₹5L, or ₹10L</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>No waiting period for new diseases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>12 months waiting for pre-existing diseases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Top-up options with 30-day waiting period</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Coverage available up to 65 years</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Hospital className="h-8 w-8 text-purple-600 mb-2" />
                    <CardTitle>Hospital Network</CardTitle>
                    <CardDescription>Access to top hospitals with exclusive discounts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Up to 25% discount on OP services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Apollo, Manipal, Fortis, Gleneagles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Sparsh, Altius, Aster, MGM, Global</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>And many more top-notch facilities</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Phone className="h-8 w-8 text-purple-600 mb-2" />
                    <CardTitle>Additional Benefits</CardTitle>
                    <CardDescription>More health services for complete wellness</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Unlimited tele-consultation for family of 6</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Up to 15% discount on medicines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Up to 30% discount on health checkups</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Lenskart gold & Clove memberships</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="wealth" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CreditCard className="h-8 w-8 text-purple-600 mb-2" />
                    <CardTitle>RuPay Prepaid Card</CardTitle>
                    <CardDescription>Convenient payment solution with rewards</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Preload and use anywhere</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>1% reward on every transaction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Automatic investment in digital gold</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Wide acceptance across merchants</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Gift className="h-8 w-8 text-purple-600 mb-2" />
                    <CardTitle>Digital Gold</CardTitle>
                    <CardDescription>Build wealth with every transaction</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>1% of spending invested in digital gold</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Convert to physical gold anytime</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Liquidate whenever needed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>SIP in digital gold from ₹100</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Gift className="h-8 w-8 text-purple-600 mb-2" />
                    <CardTitle>Partner Discounts</CardTitle>
                    <CardDescription>Exclusive offers from premium partners</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>1MG, PeeSafe, Cult Fitness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Gold's Gym, Lakme Salon</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Diva Yoga, Ode Spa, Reenz Salon</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Up to 25% discount + 1% digital gold</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Social Media Gallery & Testimonials */}
      <section className="py-20 bg-white">
        <div className="container space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600">
              NiFe Community
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Join Our Growing Community</h2>
            <p className="text-gray-600">
              See how our members are enjoying the benefits of NiFe and sharing their experiences.
            </p>
          </div>

          <InstagramGallery />

          {/* Testimonials Section */}
          <div className="mt-16">
            <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
              <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600">
                What Our Members Say
              </div>
            </div>
            <Testimonials />
          </div>
        </div>
      </section>

      {/* Digital Gold Rewards Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-yellow-100">
        <div className="container space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-block rounded-full bg-yellow-200 px-3 py-1 text-sm text-yellow-800">
              Digital Gold Rewards
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Earn Gold With Every Transaction</h2>
            <p className="text-gray-700">
              Earn 1% in 24K digital gold for all your spending with the NiFe RuPay Card and build wealth effortlessly.
            </p>
          </div>
          <DigitalGoldRewards />
        </div>
      </section>

      {/* Health Games Section */}
      <section id="games" className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600">
              Health Games
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Play, Refer & Earn Rewards</h2>
            <p className="text-gray-600">
              Engage with fun health quizzes and games, refer friends and family, and earn exclusive rewards.
            </p>
          </div>

          <HealthGames />

          <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 space-y-7">
                <h3 className="text-xl font-bold text-purple-700">Refer Friends & Family</h3>
                <p className="text-gray-600">
                  Invite your loved ones to join NiFe and get rewarded with exclusive benefits for every successful
                  referral.
                </p>
                <div className="flex items-center gap-3">
                  <UserPlus className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">Get ₹500 for each successful referral</span>
                </div>
                <div className="flex items-center gap-3">
                  <Share2 className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">Share via WhatsApp, Facebook, or Email</span>
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">Refer Now</Button>
                <Link href="/nife v10/app/refer" className="w-full h-full flex items-center justify-center">
                </Link>
              </div>
              <div className="w-48 h-48 bg-purple-100 rounded-full flex items-center justify-center">
                <Image
                  src="/images/refer.png?height=120&width=120"
                  alt="Referral Bonus"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section id="marketplace" className="py-20 bg-gray-50">
        <div className="container space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600">
              Gift Card Marketplace
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Exclusive Gift Cards With Up To 25% Discount</h2>
            <p className="text-gray-600">
              Browse and purchase branded gift cards for yourself or gift to your loved ones with exclusive NiFe
              discounts.
            </p>
          </div>

          <GiftCardMarketplace />
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm">Marketing Resources</div>
            <h2 className="text-3xl md:text-4xl font-bold">It's Time To Make Your Decision</h2>
            <p className="text-white/80">
              Access all the resources you need to learn more about NiFe's offerings and benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 border-0 backdrop-blur-sm text-white hover:bg-white/20 transition-all">
              <CardHeader>
                <FileText className="h-8 w-8 mb-2" />
                <CardTitle>Flyers & Brochures</CardTitle>
                <CardDescription className="text-white/70">Download marketing materials</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full text-purple-600 hover:bg-white/10 flex justify-between"
                >
                  Product Flyer <Download className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full text-purple-600  hover:bg-white/10 flex justify-between"
                >
                  Benefits Brochure <Download className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full text-purple-600  hover:bg-white/10 flex justify-between"
                >
                  Membership Guide <Download className="h-4 w-4" />
                </Button>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="/register/details" className="w-full h-full flex items-center justify-center">
                    Get Started
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="bg-white/10 border-0 backdrop-blur-sm text-white hover:bg-white/20 transition-all">
              <CardHeader>
                <Video className="h-8 w-8 mb-2" />
                <CardTitle>Explainer Videos</CardTitle>
                <CardDescription className="text-white/70">Watch how NiFe works</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-black/20">
                  <video
                    src="/insta images/NiFeintro.mp4"
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    poster="/insta images/health3.jpg"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-black/20">
                    <video
                      src="/insta images/familyprotect.mp4"
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                      poster="/insta images/health2.jpg"
                    />
                  </div>
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-black/20">
                    <video
                      src="/insta images/unlock.mp4"
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                      poster="/insta images/healthcare expenses.jpg"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="/register/details" className="w-full h-full flex items-center justify-center">
                    Get Started
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="bg-white/10 border-0 backdrop-blur-sm text-white hover:bg-white/20 transition-all">
              <CardHeader>
                <CardTitle>AI Assistant</CardTitle>
                <CardDescription className="text-white/70">Get instant answers about NiFe</CardDescription>
              </CardHeader>
              <CardContent>
                <AIAssistant />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced Version */}
      <section id="faq" className="py-20">
        <div className="container space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600">
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Common Questions About NiFe</h2>
            <p className="text-gray-600">Find answers to your questions about our services, benefits, and features.</p>
          </div>

          <FAQSection />

          {/* Additional FAQs */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">More Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-4">
                <FAQItem
                  question="When does my health insurance coverage start?"
                  answer="Your coverage starts immediately for new diseases from day 1 of signup. For pre-existing diseases (PED), there is a 12-month waiting period. If you opt for top-up coverage, there is an initial 30-day waiting period and a 12-month waiting period for PED."
                  category="Coverage"
                  colorClass="bg-purple-100"
                />
                <FAQItem
                  question="What are the age limits for coverage?"
                  answer="Base insurance coverage is available for individuals up to 60 years old. Top-up coverage is available up to 65 years. For individuals over 65, membership benefits like discounts and cashback are still available, but health insurance coverage is not provided."
                  category="Coverage"
                  colorClass="bg-purple-100"
                />
                <FAQItem
                  question="What is considered a pre-existing disease?"
                  answer="A pre-existing disease (PED) is any condition, ailment, or injury that you have been diagnosed with or have shown signs or symptoms of before the start of your insurance coverage. These conditions have a 12-month waiting period."
                  category="Coverage"
                  colorClass="bg-purple-100"
                />
              </div>

              <div className="space-y-4">
                <FAQItem
                  question="What benefits are available during the waiting period?"
                  answer="During the waiting period, you still have access to all membership benefits including OPD consultation discounts, diagnostic test discounts, cashback rewards, and hospital network access. Only the health insurance coverage for specific conditions is subject to waiting periods."
                  category="Benefits"
                  colorClass="bg-purple-100"
                />
                <FAQItem
                  question="How much coverage can I get?"
                  answer="We offer flexible coverage options: ₹3L, ₹5L, or ₹10L for base insurance. You can also opt for top-up coverage to enhance your protection. The coverage amount depends on your chosen plan and age eligibility."
                  category="Coverage"
                  colorClass="bg-purple-100"
                />
                <FAQItem
                  question="Can I add family members to my coverage?"
                  answer="Yes, you can add family members to your coverage. Each family member's eligibility is determined by their age, with the same limits applying (up to 60 years for base coverage, up to 65 years for top-up). Children can be covered under family plans with no age restrictions."
                  category="Coverage"
                  colorClass="bg-purple-100"
                />
              </div>

              <div className="space-y-4">
                <FAQItem
                  question="How do I make a claim?"
                  answer="Claims can be made through our network hospitals for cashless treatment or through reimbursement for non-network hospitals. Our 24/7 support team will guide you through the process and ensure quick settlement."
                  category="Claims"
                  colorClass="bg-purple-100"
                />
                <FAQItem
                  question="What documents are needed for claims?"
                  answer="Required documents include your NiFe card, ID proof, hospital bills, discharge summary, and any other relevant medical documents. For cashless claims at network hospitals, the process is simplified with minimal documentation."
                  category="Claims"
                  colorClass="bg-purple-100"
                />
                <FAQItem
                  question="How can I contact customer support?"
                  answer="Our customer support is available 24/7 through multiple channels. You can reach us via phone at 1800-123-4567, email at support@NiFecard.com, live chat on our website or app, or through our AI assistant."
                  category="Support"
                  colorClass="bg-purple-100"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-purple-600 hover:bg-purple-700 transition-colors">
              <Link href="/#faq" className="w-full h-full flex items-center justify-center">
                View All FAQs <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Health & Build Wealth?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of members who are already enjoying comprehensive health coverage and building wealth with
              every transaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 transition-colors font-bold">
                <Link href="/register/details" className="w-full h-full flex items-center justify-center font-bold">
                  Join the Revolution!
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 transition-colors">
                <Link href="/contact" className="w-full h-full flex items-center justify-center">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
