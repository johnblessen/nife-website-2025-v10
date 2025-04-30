"use client"

import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, CheckCircle, Shield, Hospital, Phone, CreditCard, Gift, Play, Coins, Heart, UserPlus, Share2, FileText, Download, Video } from "lucide-react"
import VapiAssistant from "@/components/vapi-assistant"
import InstagramGallery from "@/components/instagram-gallery"
import DigitalGoldRewards from "@/components/digital-gold-rewards"
import HealthGames from "@/components/health-games"
import GiftCardMarketplace from "@/components/gift-card-marketplace"
import AIAssistant from "@/components/ai-assistant"
import { Testimonials } from "@/components/testimonials"
import { FAQSection } from "@/components/faq-section"
import { FAQItem } from "@/components/faq-item"
import React from "react"

export default function Home() {
  const [activeTab, setActiveTab] = React.useState("health")

  return (
    <main>
      <Script
        id="health-insurance-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthInsurancePlan",
            "name": "NiFe Health Insurance Card",
            "description": "Comprehensive health insurance coverage with hospital discounts and digital gold rewards",
            "provider": {
              "@type": "Organization",
              "name": "NiFe",
              "url": "https://NiFecard.com"
            },
            "benefits": [
              "Health insurance coverage up to ₹10L",
              "Hospital discounts up to 25%",
              "Unlimited tele-consultation",
              "Digital gold rewards"
            ],
            "areaServed": {
              "@type": "Country",
              "name": "India"
            }
          })
        }}
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is NiFe?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NiFe is a wellness company that offers the world's first free health insurance card. It's a co-branded debit and credit card that provides holistic wellness membership to take care of both health and wealth."
                }
              },
              {
                "@type": "Question",
                "name": "How much does the membership cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The NiFe membership starts at ₹3,499 per year. This gives you access to all health and wealth benefits including complimentary health insurance, hospital discounts, tele-consultation, and the RuPay prepaid card with digital gold rewards."
                }
              },
              {
                "@type": "Question",
                "name": "Is there a waiting period for the health insurance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, there is no waiting period for the basic health insurance coverage. The health insurance coverage is active from day one of your membership. Additionally, no health checkup is required to get the insurance coverage. However, for top-up insurance plans, there is a 12-month waiting period."
                }
              }
            ]
          })
        }}
      />
      <VapiAssistant />
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-yellow-300 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-purple-400 animate-pulse delay-700"></div>
            <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-pink-400 animate-pulse delay-1000"></div>
          </div>
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-purple-100/20 backdrop-blur-sm px-3 py-1 text-sm text-white">
                World's First Free Health Insurance Card
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Swipe Your Way to <span className="text-yellow-300">Health</span> &{" "}
                <span className="text-yellow-300">Wealth</span>
              </h1>
              <p className="text-white/90 text-lg">
                NiFe provides holistic wellness membership to take care of your health and wealth with complimentary
                health insurance and exclusive benefits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-400 text-purple-900 hover:bg-yellow-300 transition-colors">
                  <Link href="/get-started" className="w-full h-full flex items-center justify-center">
                    Apply Now <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-gray-400 text-purple-900 text-white hover:bg-white/10 transition-colors">
                  <Link href="/resources/videos" className="w-full h-full flex items-center justify-center">
                    <Play className="h-4 w-4" /> Watch How It Works
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors">
                  <Link href="/resources/brochures" className="w-full h-full flex items-center justify-center">
                    <FileText className="h-4 w-4 mr-2" /> View Brochure
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full bg-purple-400 border-2 border-white">
                      <Image
                        src={`/images/people.png?height=30&width=30&text=${i}`}
                        alt="User"
                        width={30}
                        height={30}
                        className="rounded-full"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-white/90">
                  <span className="font-bold">1000+</span> members already joined
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 bg-purple-100/20 backdrop-blur-sm rounded-lg p-3 shadow-sm animate-bounce">
                <Shield className="h-6 w-6 text-white" />
                <p className="text-xs font-medium mt-1 text-white">Secure Coverage</p>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-purple-100/20 backdrop-blur-sm rounded-lg p-3 shadow-sm animate-bounce delay-700">
                <Heart className="h-6 w-6 text-white" />
                <p className="text-xs font-medium mt-1 text-white">Health Benefits</p>
              </div>
              <div className="absolute top-1/3 right-0 transform translate-x-1/2 animate-pulse">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                  <Coins className="h-6 w-6 text-purple-900" />
                </div>
              </div>
              <div className="absolute bottom-1/3 left-0 transform -translate-x-1/2 animate-pulse delay-500">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                  <Coins className="h-6 w-6 text-purple-900" />
                </div>
              </div>
              <Image
                src="/images/family3.jpg?height=500&width=500&text=NiFe+Card"
                alt="NiFe Health Card"
                width={500}
                height={500}
                className="rounded-xl shadow-lg z-10 relative"
              />
            </div>
          </div>
        </section>
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
                    <p className="text-sm text-gray-500">Up to ₹1Cr coverage from day one</p>
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
                    <CardDescription>Complimentary health insurance worth ₹3L, ₹5L, or ₹10L</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>No health checkup required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Coverage from day one</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>No waiting period</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span>Top-up options up to ₹50L at 40% discount</span>
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
        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container space-y-12">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600">
                Membership Plans
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Choose Your NiFe Membership</h2>
              <p className="text-gray-600">
                Get access to comprehensive health insurance & exclusive benefits with our affordable membership plans.
              </p>
              <p className="text-gray-600">
                Eligibility age 18 years to 60 years
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-purple-100 transform transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle>Individual Health Protect </CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₹3,499</span>
                    <span className="text-gray-500 ml-1">/year</span>
                  </div>
                  <CardDescription className="mt-2">Essential Health Coverage for individuals</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                      <span>₹3L health insurance coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                      <span>Hospital discounts up to 25%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                      <span>Unlimited 24/7 tele-consultation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                      <span>RuPay prepaid card</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                      <span>upto 1% digital gold rewards</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
                </CardFooter>
              </Card>
              <Card className="border-2 border-purple-600 relative transform transition-all duration-300 hover:scale-105">
                <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-medium px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  Popular
                </div>
                <CardHeader>
                  <CardTitle>Premium Family Protect </CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₹6,999</span>
                    <span className="text-gray-500 ml-1">/year</span>
                  </div>
                  <CardDescription className="mt-2">Enhanced coverage for families 2A</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                      <span>₹5L health insurance coverage for 2 Adults</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                      <span>Hospital discounts up to 25%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                      <span>Unlimited 24/7 tele-consultation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                      <span>RuPay prepaid card</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                      <span>upto1% digital gold rewards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                      <span>Lenskart gold membership</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
                </CardFooter>
              </Card>
              <Card className="border-2 border-purple-100 transform transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle>Elite Parents Care</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₹9,999</span>
                    <span className="text-gray-500 ml-1">/year</span>
                  </div>
                  <CardDescription className="mt-2">Comprehensive coverage for extended families</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                      <span>₹10L health insurance coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                      <span>Hospital discounts up to 25%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                      <span>Unlimited 24/7 tele-consultation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                      <span>Premium RuPay card</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                      <span>upto 1% digital gold rewards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                      <span>Lenskart gold & Clove memberships</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
                </CardFooter>
              </Card>
            </div>

            {/* Top-Up Insurance Section */}
            <div className="mt-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8">
              <div className="text-center space-y-4 max-w-2xl mx-auto mb-8">
                <div className="inline-block rounded-full bg-purple-200 px-3 py-1 text-sm text-purple-700">
                  Top-Up Health Insurance
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Enhance Your Health Coverage</h2>
                <p className="text-gray-700">
                  No medical checkup required with only 12 months waiting period for corporate-style health coverage with
                  all exclusive privileges and wellness benefits.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="bg-white transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">₹10 Lakh</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-600 mb-2">₹1,999</div>
                    <p className="text-sm text-gray-500 mb-4">per year</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>No medical checkup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>12 months waiting period</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Add to Plan
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-white transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">₹25 Lakh</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-600 mb-2">₹3,499</div>
                    <p className="text-sm text-gray-500 mb-4">per year</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>No medical checkup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>12 months waiting period</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Add to Plan
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-white border-2 border-purple-600 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative">
                  <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-medium px-2 py-0.5 rounded-bl-lg rounded-tr-lg">
                    Best Value
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">₹50 Lakh</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-600 mb-2">₹5,999</div>
                    <p className="text-sm text-gray-500 mb-4">per year</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>No medical checkup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>12 months waiting period</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Add to Plan</Button>
                  </CardFooter>
                </Card>

                <Card className="bg-white transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">₹1 Crore</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-600 mb-2">₹9,999</div>
                    <p className="text-sm text-gray-500 mb-4">per year</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>No medical checkup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>12 months waiting period</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Add to Plan
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
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
                  <Button className="w-full bg-white text-purple-600 hover:bg-white/90">View All Resources</Button>
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
                  <Button className="w-full bg-white text-purple-600 hover:bg-white/90">View All Videos</Button>
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
                    question="How much does NiFe membership cost?"
                    answer="NiFe membership starts at ₹3,499 per year for the Basic plan. We also offer Premium (₹5,999/year) and Elite (₹9,999/year) plans with enhanced benefits and higher insurance coverage."
                    category="Membership"
                    colorClass="bg-purple-100"
                  />
                  <FAQItem
                    question="Can I cancel my membership? Is there a refund policy?"
                    answer="Yes, you can cancel your membership within 15 days of purchase for a full refund if you haven't utilized any benefits. After 15 days, refunds are prorated based on the remaining membership period, minus any benefits used."
                    category="Membership"
                    colorClass="bg-purple-100"
                  />
                  <FAQItem
                    question="How do I access the hospital discounts?"
                    answer="Simply present your NiFe card at any of our partner hospitals to automatically receive the applicable discounts on outpatient services. The discounts are applied directly at billing, with no paperwork needed from your side."
                    category="Benefits"
                    colorClass="bg-purple-100"
                  />
                </div>

                <div className="space-y-4">
                  <FAQItem
                    question="Can I upgrade my membership plan?"
                    answer="Yes, you can upgrade your membership plan at any time. When upgrading, you'll pay the difference between your current plan and the new plan, prorated for the remaining membership period. Your enhanced benefits become active immediately."
                    category="Membership"
                    colorClass="bg-purple-100"
                  />
                  <FAQItem
                    question="How do I access tele-consultation services?"
                    answer="You can access tele-consultations through the NiFe app or website. Simply select the specialty you need, choose from available doctors, and schedule a consultation. You can have video or audio consultations and receive prescriptions digitally."
                    category="Benefits"
                    colorClass="bg-purple-100"
                  />
                  <FAQItem
                    question="What gift cards are available in the marketplace?"
                    answer="Our marketplace offers gift cards from over 100 popular brands across categories like shopping, entertainment, dining, and travel. You can get up to 25% discount on these gift cards and also earn digital gold rewards when purchasing through your NiFe card."
                    category="Marketplace"
                    colorClass="bg-purple-100"
                  />
                </div>

                <div className="space-y-4">
                  <FAQItem
                    question="How does the referral program work?"
                    answer="When you refer friends or family to NiFe, you earn ₹500 for each successful referral who signs up and activates their membership. Your referral also gets ₹500 off their first year's membership fee. There's no limit to how many people you can refer."
                    category="Referrals"
                    colorClass="bg-purple-100"
                  />
                  <FAQItem
                    question="How can I contact customer support?"
                    answer="Our customer support is available 24/7 through multiple channels. You can reach us via phone at 1800-123-4567, email at support@NiFecard.com, live chat on our website or app, or through our AI assistant that can answer common questions instantly."
                    category="Support"
                    colorClass="bg-purple-100"
                  />
                  <FAQItem
                    question="How secure is my data with NiFe?"
                    answer="Your data security is our top priority. We employ bank-grade encryption for all sensitive information, follow strict data protection protocols, and are compliant with all regulatory requirements. We never share your personal data with third parties without your consent."
                    category="Security"
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
                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 transition-colors">
                  <Link href="/get-started" className="w-full h-full flex items-center justify-center">
                    Get Your NiFe Card Today
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
