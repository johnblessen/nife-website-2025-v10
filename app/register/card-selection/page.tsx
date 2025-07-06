"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Shield, CreditCard, UserPlus, Heart, Coins, CheckCircle } from "lucide-react"

export default function CardSelection() {
  const router = useRouter()
  const [selectedCard, setSelectedCard] = useState("")

  const handleContinue = () => {
    if (selectedCard) {
      router.push(`/register/abha?card=${selectedCard}`)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your NiFe Card</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the card that best suits your health and wellness needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Kim's Card */}
          <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${selectedCard === 'kims' ? 'ring-2 ring-purple-600' : ''}`}>
            <div className="absolute top-0 right-0 bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-bl-lg">
              Most Popular
            </div>
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/images/kims-card.png"
                  alt="Kim's Card"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <CardTitle className="text-2xl font-bold">Kim's Card</CardTitle>
                  <CardDescription className="text-lg">Comprehensive Health & Wellness</CardDescription>
                </div>
              </div>
              <div className="text-3xl font-bold text-purple-600">₹6,999<span className="text-base font-normal text-gray-500">/year</span></div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-medium">₹5L Health Insurance</p>
                    <p className="text-sm text-gray-500">Coverage for 2 Adults</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CreditCard className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-medium">RuPay Card</p>
                    <p className="text-sm text-gray-500">1% digital gold rewards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-medium">Wellness Benefits</p>
                    <p className="text-sm text-gray-500">Gym, Spa, Salon discounts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Coins className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-medium">Digital Gold</p>
                    <p className="text-sm text-gray-500">Earn rewards on every transaction</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <RadioGroup
                value={selectedCard}
                onValueChange={setSelectedCard}
                className="w-full"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="kims" id="kims" />
                  <Label htmlFor="kims" className="text-lg font-medium">Select Kim's Card</Label>
                </div>
              </RadioGroup>
            </CardFooter>
          </Card>

          {/* Health Protect Card */}
          <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${selectedCard === 'health' ? 'ring-2 ring-purple-600' : ''}`}>
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/images/health-card.png"
                  alt="Health Protect Card"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <CardTitle className="text-2xl font-bold">Health Protect Card</CardTitle>
                  <CardDescription className="text-lg">Essential Health Coverage</CardDescription>
                </div>
              </div>
              <div className="text-3xl font-bold text-purple-600">₹3,499<span className="text-base font-normal text-gray-500">/year</span></div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-medium">₹3L Health Insurance</p>
                    <p className="text-sm text-gray-500">Individual Coverage</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CreditCard className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-medium">RuPay Card</p>
                    <p className="text-sm text-gray-500">1% digital gold rewards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-medium">Basic Wellness</p>
                    <p className="text-sm text-gray-500">Essential health benefits</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Coins className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-medium">Digital Gold</p>
                    <p className="text-sm text-gray-500">Earn rewards on every transaction</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <RadioGroup
                value={selectedCard}
                onValueChange={setSelectedCard}
                className="w-full"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="health" id="health" />
                  <Label htmlFor="health" className="text-lg font-medium">Select Health Protect Card</Label>
                </div>
              </RadioGroup>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6"
            onClick={handleContinue}
            disabled={!selectedCard}
          >
            Continue to ABHA Registration
            <CheckCircle className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>Already have an ABHA ID? <Link href="/register/abha-link" className="text-purple-600 hover:underline">Link your existing ABHA ID</Link></p>
        </div>
      </div>
    </main>
  )
} 