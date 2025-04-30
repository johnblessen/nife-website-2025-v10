"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SignupModal } from "@/components/signup-modal"
import { Shield, CreditCard, Gift, CheckCircle, Clock, ArrowRight, Users, Heart, Sparkles } from "lucide-react"

export default function GetStartedPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [savedProgress, setSavedProgress] = useState<{ step: number } | null>(null)

  useEffect(() => {
    // Check for saved progress
    const savedData = localStorage.getItem("signupProgress")
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData)
        setSavedProgress({ step: parsedData.step })
      } catch (error) {
        console.error("Error parsing saved progress:", error)
      }
    }
  }, [])

  const handleSignup = () => {
    console.log('Signup button clicked, setting isModalOpen to true')
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-700 to-purple-900 text-white py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-5xl">
              Protect Your Family's Health & Secure Your Financial Future
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl opacity-90">
              Join thousands of families who trust NiFe for comprehensive health coverage and financial wellness
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleSignup}
                size="lg"
                className="bg-white text-purple-700 hover:bg-gray-100 text-lg px-8"
              >
                Get Started Now
              </Button>
              {savedProgress && (
                <Button
                  onClick={handleSignup}
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 text-lg px-8"
                >
                  Resume Application
                </Button>
              )}
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4" />
                <span>5-minute signup</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4" />
                <span>Instant approval</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4" />
                <span>No medical tests</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose NiFe Health?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-purple-50 rounded-xl p-6 text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Health Protection</h3>
                <p className="text-gray-600">
                  Comprehensive health insurance coverage up to ₹10L with no medical tests required.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Financial Wellness</h3>
                <p className="text-gray-600">
                  RuPay prepaid card with exclusive discounts and rewards on every transaction.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Exclusive Benefits</h3>
                <p className="text-gray-600">
                  Premium partner benefits including Lenskart Gold membership and hospital discounts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOMO Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 text-white mb-8 md:mb-0">
                  <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1 rounded-full text-sm font-medium mb-6">
                    <Clock className="h-4 w-4" />
                    Limited Time Offer
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Today is the Day to Protect Your Family</h2>
                  <p className="text-xl opacity-90 mb-6">
                    Join now and receive 3 months of free health insurance coverage. This offer expires soon!
                  </p>
                  <Button
                    onClick={handleSignup}
                    size="lg"
                    className="bg-white text-purple-700 hover:bg-gray-100"
                  >
                    Sign Up Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="bg-white p-6 rounded-xl text-center w-full max-w-xs">
                    <div className="text-purple-600 font-bold text-lg mb-2">Offer Ends In:</div>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-gray-100 p-2 rounded">
                        <div className="text-2xl font-bold">24</div>
                        <div className="text-xs text-gray-500">Hours</div>
                      </div>
                      <div className="bg-gray-100 p-2 rounded">
                        <div className="text-2xl font-bold">00</div>
                        <div className="text-xs text-gray-500">Minutes</div>
                      </div>
                      <div className="bg-gray-100 p-2 rounded">
                        <div className="text-2xl font-bold">00</div>
                        <div className="text-xs text-gray-500">Seconds</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">Don't miss out on this exclusive offer!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Members Say</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Sparkles key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "The NiFe card has been a game-changer for my family. We've saved over ₹25,000 on medical expenses in
                  just 6 months!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">Priya Sharma</p>
                    <p className="text-sm text-gray-500">Member since 2022</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Sparkles key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "The signup process was incredibly simple, and I was approved instantly. The gold rewards are an
                  amazing bonus!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">Rahul Patel</p>
                    <p className="text-sm text-gray-500">Member since 2023</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Sparkles key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "I love how NiFe combines health insurance with financial benefits. The hospital discounts alone have
                  paid for my membership!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">Ananya Gupta</p>
                    <p className="text-sm text-gray-500">Member since 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4 text-center">
            <Heart className="h-12 w-12 text-purple-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Family's Health?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of families who trust NiFe for their health and financial wellness needs.
            </p>
            <Button
              onClick={handleSignup}
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-lg px-8"
            >
              Get Your NiFe Card Today
            </Button>
          </div>
        </section>
      </main>

      {/* Signup Modal */}
      <SignupModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        initialStep={savedProgress?.step || 1}
      />
    </div>
  )
}
