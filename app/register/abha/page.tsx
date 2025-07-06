"use client"

import { useState, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, CreditCard, UserPlus, CheckCircle, ArrowRight } from "lucide-react"

function ABHARegistrationContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const selectedCard = searchParams.get('card')
  const [activeTab, setActiveTab] = useState("new")

  const handleNewABHA = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the ABHA creation
    // For now, we'll just redirect to the details page
    router.push(`/register/details?card=${selectedCard}`)
  }

  const handleLinkABHA = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the ABHA linking
    // For now, we'll just redirect to the details page
    router.push(`/register/details?card=${selectedCard}`)
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ABHA Registration</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create or link your ABHA ID to continue with your NiFe card registration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Selected Plan Summary */}
          <div className="md:col-span-1">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-purple-600">Selected Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-purple-600" />
                    <div>
                      <p className="font-medium">
                        {selectedCard === 'kims' ? 'Kim\'s Card' : 'Health Protect Card'}
                      </p>
                      <p className="text-sm text-gray-500">
                        {selectedCard === 'kims' ? '₹6,999/year' : '₹3,499/year'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-6 w-6 text-purple-600" />
                    <div>
                      <p className="font-medium">RuPay Card Included</p>
                      <p className="text-sm text-gray-500">1% digital gold rewards</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <UserPlus className="h-6 w-6 text-purple-600" />
                    <div>
                      <p className="font-medium">
                        {selectedCard === 'kims' ? 'Family Coverage' : 'Individual Coverage'}
                      </p>
                      <p className="text-sm text-gray-500">
                        {selectedCard === 'kims' ? '2 Adults' : 'Single Person'}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ABHA Registration Form */}
          <div className="md:col-span-2">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold">ABHA Registration</CardTitle>
                <CardDescription>
                  Create a new ABHA ID or link your existing one
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="new">Create New ABHA</TabsTrigger>
                    <TabsTrigger value="link">Link Existing ABHA</TabsTrigger>
                  </TabsList>

                  <TabsContent value="new">
                    <form onSubmit={handleNewABHA} className="space-y-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="aadhar">Aadhaar Number</Label>
                          <Input
                            id="aadhar"
                            type="text"
                            placeholder="Enter your 12-digit Aadhaar number"
                            required
                            pattern="[0-9]{12}"
                            maxLength={12}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="mobile">Mobile Number</Label>
                          <Input
                            id="mobile"
                            type="tel"
                            placeholder="Enter your registered mobile number"
                            required
                            pattern="[0-9]{10}"
                            maxLength={10}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="otp">OTP</Label>
                          <div className="flex gap-2">
                            <Input
                              id="otp"
                              type="text"
                              placeholder="Enter OTP"
                              required
                              pattern="[0-9]{6}"
                              maxLength={6}
                            />
                            <Button type="button" variant="outline">
                              Get OTP
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                        Create ABHA ID
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="link">
                    <form onSubmit={handleLinkABHA} className="space-y-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="abhaId">ABHA Number</Label>
                          <Input
                            id="abhaId"
                            type="text"
                            placeholder="Enter your ABHA number"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="abhaMobile">Mobile Number</Label>
                          <Input
                            id="abhaMobile"
                            type="tel"
                            placeholder="Enter your registered mobile number"
                            required
                            pattern="[0-9]{10}"
                            maxLength={10}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="abhaOtp">OTP</Label>
                          <div className="flex gap-2">
                            <Input
                              id="abhaOtp"
                              type="text"
                              placeholder="Enter OTP"
                              required
                              pattern="[0-9]{6}"
                              maxLength={6}
                            />
                            <Button type="button" variant="outline">
                              Get OTP
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                        Link ABHA ID
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Back to Card Selection */}
        <div className="text-center mt-8">
          <Link href={`/register/card-selection`}>
            <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-50">
              ← Back to Card Selection
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

function LoadingFallback() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ABHA Registration</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Loading...
          </p>
        </div>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
        </div>
      </div>
    </main>
  )
}

export default function ABHARegistration() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ABHARegistrationContent />
    </Suspense>
  )
} 