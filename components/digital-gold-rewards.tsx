"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Coins, TrendingUp, CreditCard, ChevronRight, Calendar, ArrowUpRight, ArrowDownLeft } from "lucide-react"

export default function DigitalGoldRewards() {
  const [transactions] = useState([
    {
      id: 1,
      merchant: "Amazon.in",
      date: "Today",
      amount: "₹2,450.00",
      type: "spend",
      gold: "+0.038g",
      goldValue: "₹245.00",
    },
    {
      id: 2,
      merchant: "Manipal Hospital",
      date: "Yesterday",
      amount: "₹1,200.00",
      type: "spend",
      gold: "+0.018g",
      goldValue: "₹120.00",
    },
    {
      id: 3,
      merchant: "Apollo Pharmacy",
      date: "May 5, 2023",
      amount: "₹650.00",
      type: "spend",
      gold: "+0.010g",
      goldValue: "₹65.00",
    },
    {
      id: 4,
      merchant: "Gold Redemption",
      date: "Apr 28, 2023",
      amount: "0.5g",
      type: "redeem",
      gold: "-0.5g",
      goldValue: "₹3,250.00",
    }
  ])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 hover:shadow-lg transition-all">
          <CardHeader>
            <div className="flex flex-wrap items-start justify-between">
              <div>
                <CardTitle>Your Digital Gold</CardTitle>
                <CardDescription>Track your accumulated gold and its growth</CardDescription>
              </div>
              <Button variant="outline" className="gap-2">
                <Coins className="h-4 w-4" />
                Buy More Gold
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <Coins className="h-8 w-8 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Gold Balance</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-3xl font-bold text-yellow-600">0.85g</h3>
                    <p className="text-sm text-gray-500">≈ ₹5,525</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Monthly Target: 0.2g</span>
                  <span className="font-medium">0.12g / 0.2g</span>
                </div>
                <Progress value={60} className="h-2" />
                <p className="text-xs text-gray-500">60% of your monthly goal completed</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="h-4 w-4 text-yellow-600" />
                  <p className="text-sm font-medium text-yellow-800">1 Year Growth</p>
                </div>
                <p className="text-xl font-bold text-yellow-900">+18.5%</p>
                <p className="text-xs text-yellow-700">Based on gold price trends</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <CreditCard className="h-4 w-4 text-yellow-600" />
                  <p className="text-sm font-medium text-yellow-800">This Month</p>
                </div>
                <p className="text-xl font-bold text-yellow-900">+0.12g</p>
                <p className="text-xs text-yellow-700">From 32 transactions</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="h-4 w-4 text-yellow-600" />
                  <p className="text-sm font-medium text-yellow-800">Total Earned</p>
                </div>
                <p className="text-xl font-bold text-yellow-900">1.35g</p>
                <p className="text-xs text-yellow-700">Since you joined NiFe</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View Detailed Analytics</Button>
          </CardFooter>
        </Card>
        
        <Card className="hover:shadow-lg transition-all">
          <CardHeader>
            <CardTitle>Gold Options</CardTitle>
            <CardDescription>Manage your digital gold</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-yellow-50 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Coins className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium">Redeem Physical Gold</p>
                  <p className="text-xs text-gray-500">Convert to physical gold coins</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">Minimum:</span>
                <span className="font-medium">0.5g</span>
              </div>
              <Button variant="outline" size="sm" className="w-full text-yellow-700">
                Redeem Now
              </Button>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-gray-600"
                  >
                    <path d="M12 5v14"></path>
                    <path d="M5 12h14"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Start SIP</p>
                  <p className="text-xs text-gray-500">Regular investment in gold</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">From:</span>
                <span className="font-medium">₹100/month</span>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Set Up SIP
              </Button>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-purple-600"
                  >
                    <line x1="20" x2="16" y1="8" y2="8"></line>
                    <line x1="4" x2="8" y1="16" y2="16"></line>
                    <line x1="17" x2="9" y1="17" y2="9"></line>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Liquidate Gold</p>
                  <p className="text-xs text-gray-500">Convert to cash instantly</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">Minimum:</span>
                <span className="font-medium">0.1g</span>
              </div>
              <Button variant="outline" size="sm" className="w-full text-purple-700">
                Liquidate Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="hover:shadow-lg transition-all">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Track your gold earnings and redemptions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === 'spend' ? 'bg-green-100' : 'bg-yellow-100'
                  }`}>
                    {transaction.type === 'spend' ? (
                      <ArrowDownLeft className="h-5 w-5 text-green-600" />
                    ) : (
                      <ArrowUpRight className="h-5 w-5 text-yellow-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{transaction.merchant}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{transaction.amount}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className={transaction.type === 'spend' ? 'text-green-600' : 'text-yellow-600'}>
                      {transaction.gold}
                    </span>
                    <span className="text-gray-500">({transaction.goldValue})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">View All Transactions</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

