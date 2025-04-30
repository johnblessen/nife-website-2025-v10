"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { CreditCard, DollarSign, Lock, History, Wallet, Gift, ArrowUpRight, ArrowDownLeft, Coins } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

export default function DashboardPage() {
  const [cardLocked, setCardLocked] = useState(false)
  const [onlineTransactions, setOnlineTransactions] = useState(true)
  const [internationalTransactions, setInternationalTransactions] = useState(false)
  const [contactlessPayments, setContactlessPayments] = useState(true)
  const [dailyLimit, setDailyLimit] = useState([10000])
  const [topUpAmount, setTopUpAmount] = useState("1000")

  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Card Balance Section */}
          <Card className="flex-1 relative overflow-hidden">
            <CardHeader className="pb-0">
              <CardTitle>NiFe RuPay Card</CardTitle>
              <CardDescription>Manage your card and balance</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white mb-6">
                <div className="absolute top-4 right-4">
                  <Image src="/images/rupay-logo.png" alt="RuPay" width={60} height={20} className="h-6 w-auto" />
                </div>
                <div className="mb-6">
                  <p className="text-sm text-white/80">Available Balance</p>
                  <h3 className="text-3xl font-bold">₹12,540.75</h3>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-white/80 mb-1">Card Number</p>
                    <p className="font-mono">•••• •••• •••• 4289</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-white/80 mb-1">Valid Thru</p>
                    <p>05/26</p>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 opacity-10">
                  <CreditCard className="h-32 w-32" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700 h-auto py-3">
                  <Wallet className="h-4 w-4 mr-2" />
                  Top Up Card
                </Button>
                <Button variant="outline" className="h-auto py-3">
                  <History className="h-4 w-4 mr-2" />
                  Transaction History
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Rewards Section */}
          <Card className="flex-1">
            <CardHeader className="pb-0">
              <CardTitle>Gold Rewards</CardTitle>
              <CardDescription>Your digital gold accumulation</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Coins className="h-8 w-8 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Gold Accumulated</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-3xl font-bold text-yellow-600">0.85g</h3>
                    <p className="text-sm text-gray-500">≈ ₹5,525</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Monthly Target: 0.2g</span>
                    <span className="font-medium">0.12g / 0.2g</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>

                <div className="bg-yellow-50 rounded-lg p-4 text-sm">
                  <p className="font-medium text-yellow-800 mb-1">This Month&apos;s Earnings</p>
                  <p className="text-gray-600">
                    You&apos;ve earned 0.12g of gold (₹780) from 32 transactions this month.
                  </p>
                </div>

                <Button variant="outline" className="w-full">
                  <Gift className="h-4 w-4 mr-2" />
                  View Rewards Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your recent card activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: 1,
                  merchant: "Apollo Pharmacy",
                  date: "Today, 10:30 AM",
                  amount: "₹650.00",
                  type: "debit",
                  category: "Health",
                  gold: "0.01g",
                },
                {
                  id: 2,
                  merchant: "Card Top-up",
                  date: "Yesterday, 2:15 PM",
                  amount: "₹5,000.00",
                  type: "credit",
                  category: "Transfer",
                  gold: "-",
                },
                {
                  id: 3,
                  merchant: "Manipal Hospital",
                  date: "Apr 15, 2023",
                  amount: "₹1,200.00",
                  type: "debit",
                  category: "Health",
                  gold: "0.018g",
                },
                {
                  id: 4,
                  merchant: "Amazon.in",
                  date: "Apr 12, 2023",
                  amount: "₹2,450.00",
                  type: "debit",
                  category: "Shopping",
                  gold: "0.038g",
                },
                {
                  id: 5,
                  merchant: "Digital Gold Redemption",
                  date: "Apr 10, 2023",
                  amount: "₹3,250.00",
                  type: "credit",
                  category: "Rewards",
                  gold: "-0.5g",
                },
              ].map((transaction) => (
                <div key={transaction.id} className="flex justify-between items-center py-3 border-b last:border-0">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === "credit" ? "bg-green-100" : "bg-gray-100"
                      }`}
                    >
                      {transaction.type === "credit" ? (
                        <ArrowDownLeft
                          className={`h-5 w-5 ${transaction.type === "credit" ? "text-green-600" : "text-gray-600"}`}
                        />
                      ) : (
                        <ArrowUpRight className="h-5 w-5 text-gray-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{transaction.merchant}</p>
                      <p className="text-xs text-gray-500">
                        {transaction.date} • {transaction.category}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${transaction.type === "credit" ? "text-green-600" : ""}`}>
                      {transaction.type === "credit" ? "+" : ""}
                      {transaction.amount}
                    </p>
                    {transaction.gold !== "-" && (
                      <p className="text-xs text-yellow-600">
                        {transaction.gold.startsWith("-") ? "" : "+"}
                        {transaction.gold} gold
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Transactions
            </Button>
          </CardFooter>
        </Card>

        {/* Card Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Card Settings</CardTitle>
            <CardDescription>Manage your card security and limits</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="security">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="limits">Spending Limits</TabsTrigger>
                <TabsTrigger value="topup">Top Up</TabsTrigger>
              </TabsList>

              <TabsContent value="security" className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="font-medium">Lock Card</p>
                      <p className="text-sm text-gray-500">Temporarily lock your card</p>
                    </div>
                  </div>
                  <Switch checked={cardLocked} onCheckedChange={setCardLocked} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="font-medium">Online Transactions</p>
                      <p className="text-sm text-gray-500">Enable online payments</p>
                    </div>
                  </div>
                  <Switch checked={onlineTransactions} onCheckedChange={setOnlineTransactions} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="font-medium">International Transactions</p>
                      <p className="text-sm text-gray-500">Enable international payments</p>
                    </div>
                  </div>
                  <Switch checked={internationalTransactions} onCheckedChange={setInternationalTransactions} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Wallet className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="font-medium">Contactless Payments</p>
                      <p className="text-sm text-gray-500">Enable tap-to-pay</p>
                    </div>
                  </div>
                  <Switch checked={contactlessPayments} onCheckedChange={setContactlessPayments} />
                </div>

                <div className="pt-2">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Save Security Settings</Button>
                </div>
              </TabsContent>

              <TabsContent value="limits" className="space-y-6 pt-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Daily Transaction Limit</Label>
                    <span className="font-medium">₹{dailyLimit[0].toLocaleString()}</span>
                  </div>
                  <Slider value={dailyLimit} min={1000} max={50000} step={1000} onValueChange={setDailyLimit} />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>₹1,000</span>
                    <span>₹50,000</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">ATM Withdrawal Limit</p>
                      <p className="text-sm text-gray-500">Maximum daily ATM withdrawal</p>
                    </div>
                    <div className="font-medium">₹10,000</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Online Transaction Limit</p>
                      <p className="text-sm text-gray-500">Maximum online transaction</p>
                    </div>
                    <div className="font-medium">₹25,000</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">POS Transaction Limit</p>
                      <p className="text-sm text-gray-500">Maximum point of sale transaction</p>
                    </div>
                    <div className="font-medium">₹50,000</div>
                  </div>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700">Update Limits</Button>
              </TabsContent>

              <TabsContent value="topup" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="topup-amount">Top Up Amount</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                    <Input
                      id="topup-amount"
                      type="number"
                      value={topUpAmount}
                      onChange={(e) => setTopUpAmount(e.target.value)}
                      className="pl-8"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  {["1,000", "2,000", "5,000", "10,000"].map((amount) => (
                    <Button
                      key={amount}
                      variant="outline"
                      className="flex-1"
                      onClick={() => setTopUpAmount(amount.replace(",", ""))}
                    >
                      ₹{amount}
                    </Button>
                  ))}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Amount</span>
                    <span>₹{Number.parseInt(topUpAmount).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Processing Fee</span>
                    <span>₹0</span>
                  </div>
                  <div className="flex justify-between font-medium pt-2 border-t">
                    <span>Total</span>
                    <span>₹{Number.parseInt(topUpAmount).toLocaleString()}</span>
                  </div>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700">Proceed to Payment</Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
