"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Shield, Heart, Coins, Play, FileText, CheckCircle, Hospital, Phone, CreditCard, Gift, Star, Users, Award, Clock, Zap, Calendar } from "lucide-react"
import React from "react"

export default function LandingPage() {
  const [activeTab, setActiveTab] = React.useState("health")

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-[#f5f5f5] via-[#e0e0e0] to-[#bdbdbd] text-gray-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.png')] opacity-10"></div>
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#dc3545]/5 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-[#dc3545]/5 blur-3xl"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Logo and Headings Section */}
              <div className="flex flex-col items-center lg:items-start space-y-6">
                <Image
                  src="/images/kims-health-logo.png"
                  alt="KIMS Health Logo"
                  width={1000}
                  height={400}
                  className="h-100 w-auto opacity-90"
                  priority
                />
                <div className="inline-block rounded-full bg-[#dc3545]/10 backdrop-blur-sm px-4 py-2 text-sm text-[#dc3545]">
                  Exclusive KIMS Health Card
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 text-center lg:text-left">
                  Your Health & Wealth
                  <span className="block text-[#dc3545]">In One Card</span>
                </h1>
              </div>
              <p className="text-xl text-gray-600">
                Experience premium healthcare with the exclusive KIMS Health Card. Get complimentary health insurance, 
                exclusive KIMS hospital discounts, and earn digital gold rewards with every transaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kimshealth/get-started">
                  <Button size="lg" className="bg-[#dc3545] hover:bg-[#c82333] text-white text-lg px-8">
                    Get Your Card Now
                  </Button>
                </Link>
                <Link href="/kimshealth/benefits">
                  <Button size="lg" variant="outline" className="border-gray-800 text-gray-800 hover:bg-gray-800/10 text-lg px-8">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-gray-800 overflow-hidden">
                      <Image
                        src={`/images/people.png?height=40&width=40&text=${i}`}
                        alt="User"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-gray-600">
                  <span className="font-bold text-gray-900">10,000+</span> happy KIMS Health members
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg z-20">
                <Shield className="h-8 w-8 text-[#dc3545]" />
                <p className="text-sm font-medium mt-2 text-gray-800">Health Insurance</p>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg z-20">
                <Coins className="h-8 w-8 text-[#dc3545]" />
                <p className="text-sm font-medium mt-2 text-gray-800">Digital Gold</p>
              </div>
              <div className="relative w-full max-w-xl mx-auto">
                <Image
                  src="/images/kims-nife-card.png"
                  alt="KIMS Health Card by NiFe"
                  width={600}
                  height={378}
                  className="rounded-2xl shadow-2xl object-contain z-10"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Features */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/20 to-transparent h-32"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-[#dc3545]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-[#dc3545]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Health Insurance</h3>
              <p className="text-gray-600">Up to ₹10L coverage from day one</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-[#dc3545]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-[#dc3545]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">KIMS Network</h3>
              <p className="text-gray-600">Up to 25% discount at KIMS hospitals</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-[#dc3545]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coins className="h-6 w-6 text-[#dc3545]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Digital Gold</h3>
              <p className="text-gray-600">Earn 1% rewards on every transaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why KIMS Health Card Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-[#dc3545]/10 px-3 py-1 text-sm text-[#dc3545]">
              Exclusive Partnership
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose KIMS Health Card by NiFe?</h2>
            <p className="text-gray-600">
              A unique partnership between Kerala's leading healthcare provider and India's first health & wealth card
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#dc3545]/10 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-[#dc3545]" />
                </div>
                <CardTitle>Exclusive Access</CardTitle>
                <CardDescription>Special privileges at KIMS hospitals</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>Priority appointments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>Dedicated customer care</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>Exclusive health packages</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#dc3545]/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#dc3545]" />
                </div>
                <CardTitle>Family Coverage</CardTitle>
                <CardDescription>Comprehensive care for your loved ones</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>Coverage for family of 6</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>Unlimited tele-consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>Family wellness programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#dc3545]/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-[#dc3545]" />
                </div>
                <CardTitle>Premium Benefits</CardTitle>
                <CardDescription>Enhanced healthcare experience</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>Higher insurance coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>Extended hospital network</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>Premium wellness services</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#dc3545]/10 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-[#dc3545]" />
                </div>
                <CardTitle>Instant Benefits</CardTitle>
                <CardDescription>No waiting period for services</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>Immediate insurance coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>Instant card activation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>Quick access to benefits</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* KIMS Network Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-[#dc3545]/10 px-3 py-1 text-sm text-[#dc3545]">
              KIMS Hospital Network
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Access to Kerala's Premier Healthcare Network</h2>
            <p className="text-gray-600">
              Get exclusive benefits at all KIMS hospitals across Kerala and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#dc3545]/10 rounded-full flex items-center justify-center mb-4">
                  <Hospital className="h-6 w-6 text-[#dc3545]" />
                </div>
                <CardTitle>KIMS Trivandrum</CardTitle>
                <CardDescription>Flagship Hospital</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>25% discount on all services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>Priority appointments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>Exclusive health packages</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#dc3545]/10 rounded-full flex items-center justify-center mb-4">
                  <Hospital className="h-6 w-6 text-[#dc3545]" />
                </div>
                <CardTitle>KIMS Kochi</CardTitle>
                <CardDescription>Specialty Center</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>20% discount on all services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>Priority appointments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>Specialty consultations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#dc3545]/10 rounded-full flex items-center justify-center mb-4">
                  <Hospital className="h-6 w-6 text-[#dc3545]" />
                </div>
                <CardTitle>KIMS Calicut</CardTitle>
                <CardDescription>Regional Center</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>20% discount on all services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>Priority appointments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>Regional health programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exclusive Hospital Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-[#dc3545]/10 px-3 py-1 text-sm text-[#dc3545]">
              Exclusive Hospital Benefits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Premium Healthcare Benefits at KIMS</h2>
            <p className="text-gray-600">
              Enjoy exclusive discounts and premium services across all KIMS hospitals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#dc3545]/10 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-[#dc3545]" />
                </div>
                <CardTitle>Diagnostics & OPD</CardTitle>
                <CardDescription>Comprehensive diagnostic benefits</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>Up to 25% discount on all diagnostic tests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>10% discount on OPD consultations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>Priority appointment scheduling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#dc3545]/10 rounded-full flex items-center justify-center mb-4">
                  <Gift className="h-6 w-6 text-[#dc3545]" />
                </div>
                <CardTitle>Hospitalization Benefits</CardTitle>
                <CardDescription>Premium inpatient care benefits</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>Up to 10% cashback on hospitalization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>Free room upgrades (subject to availability)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>Priority pass for emergency care</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#dc3545]/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#dc3545]" />
                </div>
                <CardTitle>Additional Benefits</CardTitle>
                <CardDescription>Extra perks for card members</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>5% discount on pharmacy purchases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>Discounted health checkup packages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dc3545] mt-0.5" />
                    <span>Dedicated support at hospital premises</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-block rounded-full bg-[#dc3545]/10 px-3 py-1 text-sm text-[#dc3545]">
              Comprehensive Benefits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Boost Your Health And Wealth With NiFe</h2>
            <p className="text-gray-600">
              Exclusive KIMS Health Card by NiFe provides a complete wellness ecosystem with health insurance, 
              KIMS hospital discounts, and wealth-building opportunities.
            </p>
          </div>

          <Tabs defaultValue="health" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="health">Health Benefits</TabsTrigger>
              <TabsTrigger value="wealth">Wealth Benefits</TabsTrigger>
            </TabsList>
            <TabsContent value="health" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <Shield className="h-8 w-8 text-[#dc3545] mb-2" />
                    <CardTitle>Health Insurance</CardTitle>
                    <CardDescription>Complimentary health insurance worth ₹3L, ₹5L, or ₹10L</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-[#dc3545] mt-0.5" />
                        <span>No health checkup required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-[#dc3545] mt-0.5" />
                        <span>Coverage from day one</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-[#dc3545] mt-0.5" />
                        <span>No waiting period</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-[#dc3545] mt-0.5" />
                        <span>Top-up options up to ₹50L at 40% discount</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <Hospital className="h-8 w-8 text-[#dc3545] mb-2" />
                    <CardTitle>KIMS Hospital Network</CardTitle>
                    <CardDescription>Access to KIMS hospitals with exclusive discounts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-[#dc3545] mt-0.5" />
                        <span>Up to 25% discount on OP services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-[#dc3545] mt-0.5" />
                        <span>KIMS Trivandrum, KIMS Kochi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-[#dc3545] mt-0.5" />
                        <span>KIMS Calicut, KIMS Bangalore</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-[#dc3545] mt-0.5" />
                        <span>And many more KIMS facilities</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <Phone className="h-8 w-8 text-[#dc3545] mb-2" />
                    <CardTitle>Additional Benefits</CardTitle>
                    <CardDescription>More health services for complete wellness</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-[#dc3545] mt-0.5" />
                        <span>Unlimited tele-consultation for family of 6</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-[#dc3545] mt-0.5" />
                        <span>Up to 15% discount on medicines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-[#dc3545] mt-0.5" />
                        <span>Up to 30% discount on health checkups</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-[#dc3545] mt-0.5" />
                        <span>Priority appointments at KIMS</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="wealth" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CreditCard className="h-8 w-8 text-[#dc3545] mb-2" />
                    <CardTitle>RuPay Prepaid Card</CardTitle>
                    <CardDescription>Convenient payment solution with rewards</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-[#dc3545] mt-0.5" />
                        <span>Preload and use anywhere</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-[#dc3545] mt-0.5" />
                        <span>1% reward on every transaction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-[#dc3545] mt-0.5" />
                        <span>Automatic investment in digital gold</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-[#dc3545] mt-0.5" />
                        <span>Wide acceptance across merchants</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <Gift className="h-8 w-8 text-[#dc3545] mb-2" />
                    <CardTitle>Digital Gold</CardTitle>
                    <CardDescription>Build wealth with every transaction</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-[#dc3545] mt-0.5" />
                        <span>1% of spending invested in digital gold</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-[#4caf50] mt-0.5" />
                        <span>Convert to physical gold anytime</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-[#4caf50] mt-0.5" />
                        <span>Liquidate whenever needed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-[#4caf50] mt-0.5" />
                        <span>SIP in digital gold from ₹100</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <Gift className="h-8 w-8 text-[#4caf50] mb-2" />
                    <CardTitle>Partner Discounts</CardTitle>
                    <CardDescription>Exclusive offers from premium partners</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-[#4caf50] mt-0.5" />
                        <span>1MG, PeeSafe, Cult Fitness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-[#4caf50] mt-0.5" />
                        <span>Gold's Gym, Lakme Salon</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-[#4caf50] mt-0.5" />
                        <span>Diva Yoga, Ode Spa, Reenz Salon</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-[#4caf50] mt-0.5" />
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

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-[#4caf50]/10 px-3 py-1 text-sm text-[#4caf50]">
              Simple Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">How to Get Your KIMS Health Card</h2>
            <p className="text-gray-600">
              Get your exclusive KIMS Health Card in just a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4caf50]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#4caf50]">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Apply Online</h3>
              <p className="text-gray-600">Fill out the simple application form</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4caf50]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#4caf50]">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Verification</h3>
              <p className="text-gray-600">Instant verification process</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4caf50]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#4caf50]">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Card Delivery</h3>
              <p className="text-gray-600">Get your card delivered to your doorstep</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4caf50]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#4caf50]">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Start Using</h3>
              <p className="text-gray-600">Activate and start enjoying benefits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-block rounded-full bg-[#dc3545]/10 px-3 py-1 text-sm text-[#dc3545]">
              Membership Plans
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Choose Your KIMS Health Card</h2>
            <p className="text-gray-600">
              Get access to comprehensive health insurance & exclusive KIMS benefits with our affordable membership plans.
            </p>
            <p className="text-gray-600">
              Eligibility age 18 years to 60 years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-[#dc3545]/20 transform transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle>Individual Health Protect</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold">₹3,499</span>
                  <span className="text-gray-500 ml-1">/year</span>
                </div>
                <CardDescription className="mt-2">Essential Health Coverage for individuals</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#dc3545] mt-0.5" />
                    <span>₹3L health insurance coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#dc3545] mt-0.5" />
                    <span>KIMS hospital discounts up to 25%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#dc3545] mt-0.5" />
                    <span>Unlimited 24/7 tele-consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#dc3545] mt-0.5" />
                    <span>RuPay prepaid card</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#dc3545] mt-0.5" />
                    <span>Up to 1% digital gold rewards</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#dc3545] hover:bg-[#c82333]">Get Started</Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-[#dc3545]/20 transform transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle>Family Health Protect</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold">₹5,999</span>
                  <span className="text-gray-500 ml-1">/year</span>
                </div>
                <CardDescription className="mt-2">Comprehensive coverage for your family</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#dc3545] mt-0.5" />
                    <span>₹5L health insurance coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#dc3545] mt-0.5" />
                    <span>Coverage for family of 6</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#dc3545] mt-0.5" />
                    <span>All Individual plan benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#dc3545] mt-0.5" />
                    <span>Family wellness programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#dc3545] mt-0.5" />
                    <span>Higher digital gold rewards</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#dc3545] hover:bg-[#c82333]">Get Started</Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-[#dc3545]/20 transform transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle>Premium Health Protect</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold">₹9,999</span>
                  <span className="text-gray-500 ml-1">/year</span>
                </div>
                <CardDescription className="mt-2">Ultimate health & wealth protection</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#dc3545] mt-0.5" />
                    <span>₹10L health insurance coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#dc3545] mt-0.5" />
                    <span>All Family plan benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#dc3545] mt-0.5" />
                    <span>Premium wellness services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#dc3545] mt-0.5" />
                    <span>Extended hospital network</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#dc3545] mt-0.5" />
                    <span>Maximum digital gold rewards</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#dc3545] hover:bg-[#c82333]">Get Started</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-[#4caf50]/10 px-3 py-1 text-sm text-[#4caf50]">
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Common Questions About KIMS Health Card</h2>
            <p className="text-gray-600">
              Find answers to the most common questions about your KIMS Health Card
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border border-gray-100 shadow-sm">
              <CardHeader>
                <CardTitle>Who can apply for the KIMS Health Card?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Any individual between 18-60 years of age can apply for the KIMS Health Card. The card is available for both new and existing KIMS patients.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 shadow-sm">
              <CardHeader>
                <CardTitle>What are the benefits of the KIMS Health Card?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The card offers complimentary health insurance, exclusive discounts at KIMS hospitals, digital gold rewards, and access to a wide network of healthcare partners.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 shadow-sm">
              <CardHeader>
                <CardTitle>How do I use my KIMS Health Card?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  You can use your card for payments at KIMS hospitals, earn digital gold rewards on transactions, and access all the health insurance benefits. The card works as a regular RuPay card at all merchant locations.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 shadow-sm">
              <CardHeader>
                <CardTitle>Is there a waiting period for benefits?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  No, there is no waiting period. All benefits including health insurance coverage and hospital discounts are available from day one of card activation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2c3e50] via-[#34495e] to-[#7f8c8d] text-white">
        <div className="container">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Experience Premium Healthcare?</h2>
            <p className="text-xl text-white/80">
              Join thousands of KIMS Health members who are already enjoying the benefits of their exclusive health card
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#dc3545] hover:bg-[#c82333] text-white text-lg px-8">
                Get Your Card Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 