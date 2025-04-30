"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Shield, Gift, History, Download, Share2 } from "lucide-react"

export default function MyCard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Card Preview */}
        <div className="lg:col-span-2">
          <Card className="bg-gradient-to-br from-purple-600 to-pink-600 text-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">NiFe RuPay Card</h2>
                  <p className="text-white/80">Premium Membership</p>
                </div>
                <Image
                  src="/images/NiFe-logo.png"
                  alt="NiFe Logo"
                  width={120}
                  height={30}
                  className="h-8 w-auto"
                />
              </div>
              
              <div className="mb-8">
                <div className="text-4xl font-mono mb-4">**** **** **** 1234</div>
                <div className="flex justify-between text-sm">
                  <div>
                    <p className="text-white/60">Valid Thru</p>
                    <p>12/25</p>
                  </div>
                  <div>
                    <p className="text-white/60">CVV</p>
                    <p>***</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white/60 text-sm">Card Holder</p>
                  <p className="font-medium">John Doe</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="bg-white/10 hover:bg-white/20">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="bg-white/10 hover:bg-white/20">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Card Details */}
        <div>
          <Tabs defaultValue="overview" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>Card Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-500">Card Number</p>
                      <p className="font-medium">**** **** **** 1234</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-500">Status</p>
                      <p className="font-medium text-green-600">Active</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Gift className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-500">Rewards Rate</p>
                      <p className="font-medium">1% Digital Gold</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <History className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-500">Member Since</p>
                      <p className="font-medium">January 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="benefits">
              <Card>
                <CardHeader>
                  <CardTitle>Card Benefits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-medium mb-2">Health Insurance</h3>
                    <p className="text-sm text-gray-600">Comprehensive coverage up to ₹5 Lakhs</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-medium mb-2">Hospital Discounts</h3>
                    <p className="text-sm text-gray-600">Up to 20% off on medical services</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-medium mb-2">Digital Gold Rewards</h3>
                    <p className="text-sm text-gray-600">Earn 1% in digital gold on all spends</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-medium mb-2">Tele-consultation</h3>
                    <p className="text-sm text-gray-600">Free consultations with top doctors</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
} 