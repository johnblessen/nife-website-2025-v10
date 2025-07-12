"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Gift, Users, Share2, CheckCircle, ArrowRight } from "lucide-react"

export default function ReferralPage() {
  const [referralEmail, setReferralEmail] = useState("")
  const [referralName, setReferralName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle referral submission
    console.log("Referral submitted:", { referralEmail, referralName })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Refer Friends & Family</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Share the benefits of NiFe Health with your loved ones and earn exclusive rewards for every successful referral.
        </p>
      </div>

      {/* Rewards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
          <CardHeader>
            <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mb-4">
              <Gift className="h-6 w-6 text-purple-600" />
            </div>
            <CardTitle>Referral Rewards</CardTitle>
            <CardDescription>Earn exclusive rewards for every successful referral</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                <span>₹500 cashback for each successful referral</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                <span>1% additional gold rewards on transactions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                <span>Premium partner benefits</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <CardTitle>Friend Benefits</CardTitle>
            <CardDescription>Your friends get exclusive benefits too</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <span>3 months free health insurance</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <span>Welcome bonus of ₹1000</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <span>Priority customer support</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100">
          <CardHeader>
            <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mb-4">
              <Share2 className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle>Easy Sharing</CardTitle>
            <CardDescription>Share your referral link with friends</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <span>Unique referral link</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <span>Share via WhatsApp, Email, or SMS</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <span>Track referral status</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Referral Form */}
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Refer a Friend</CardTitle>
          <CardDescription>Enter your friend's details to send them an invitation</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="referralName">Friend's Name</Label>
              <Input
                id="referralName"
                value={referralName}
                onChange={(e) => setReferralName(e.target.value)}
                placeholder="Enter your friend's name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="referralEmail">Friend's Email</Label>
              <Input
                id="referralEmail"
                type="email"
                value={referralEmail}
                onChange={(e) => setReferralEmail(e.target.value)}
                placeholder="Enter your friend's email"
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
              Send Invitation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </form>
      </Card>

      {/* How It Works Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-purple-600">1</span>
            </div>
            <h3 className="font-semibold mb-2">Share Your Link</h3>
            <p className="text-gray-600">Share your unique referral link with friends and family</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-purple-600">2</span>
            </div>
            <h3 className="font-semibold mb-2">Friend Signs Up</h3>
            <p className="text-gray-600">Your friend signs up using your referral link</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-purple-600">3</span>
            </div>
            <h3 className="font-semibold mb-2">Friend Gets Benefits</h3>
            <p className="text-gray-600">Your friend receives their welcome benefits</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-purple-600">4</span>
            </div>
            <h3 className="font-semibold mb-2">You Get Rewarded</h3>
            <p className="text-gray-600">You receive your referral rewards</p>
          </div>
        </div>
      </div>
    </div>
  )
}
