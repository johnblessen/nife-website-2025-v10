"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Gift, Coins, History, Download, Share2, ArrowRight } from "lucide-react"

export default function Rewards() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Rewards Overview */}
        <div className="lg:col-span-2">
          <Card className="bg-gradient-to-br from-purple-600 to-pink-600 text-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Digital Gold Rewards</h2>
                  <p className="text-white/80">Premium Membership</p>
                </div>
                <Gift className="h-8 w-8" />
              </div>
              
              <div className="mb-8">
                <div className="text-4xl font-bold mb-4">24.5 g</div>
                <p className="text-white/80">Total Digital Gold</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white/60 text-sm">Current Value</p>
                  <p className="font-medium">₹1,25,000</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white/60 text-sm">Earned This Month</p>
                  <p className="font-medium">2.5 g</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="bg-white/10 hover:bg-white/20">
                  <Download className="mr-2 h-4 w-4" /> Download Statement
                </Button>
                <Button variant="outline" className="bg-white/10 hover:bg-white/20">
                  <Share2 className="mr-2 h-4 w-4" /> Share
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Rewards Details */}
        <div>
          <Tabs defaultValue="overview" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>Rewards Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-medium mb-2">Earning Rate</h3>
                    <p className="text-sm text-gray-600">1% in digital gold on all spends</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-medium mb-2">Minimum Redemption</h3>
                    <p className="text-sm text-gray-600">0.1 g of digital gold</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-medium mb-2">Redemption Options</h3>
                    <p className="text-sm text-gray-600">Physical gold, cash, or gift cards</p>
                  </div>
                  <Button className="w-full">
                    Redeem Rewards <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Coins className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-500">Grocery Shopping</p>
                      <p className="font-medium">+0.5 g</p>
                    </div>
                    <div className="ml-auto">
                      <p className="text-sm text-gray-500">Today</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <History className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-500">Monthly Bonus</p>
                      <p className="font-medium">+1.0 g</p>
                    </div>
                    <div className="ml-auto">
                      <p className="text-sm text-gray-500">Yesterday</p>
                    </div>
                  </div>
                  <Button className="w-full">View All Transactions</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
} 