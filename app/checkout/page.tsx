"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, Lock, Shield, ArrowRight } from "lucide-react"

export default function Checkout() {
  const [step, setStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState("card")

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 1 ? "bg-purple-600 text-white" : "bg-gray-200"
              }`}>
                1
              </div>
              <div className="ml-2">Plan Selection</div>
            </div>
            <div className="flex-1 h-1 mx-4 bg-gray-200">
              <div className={`h-full bg-purple-600 transition-all`} style={{ width: step >= 2 ? "100%" : "0%" }} />
            </div>
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 2 ? "bg-purple-600 text-white" : "bg-gray-200"
              }`}>
                2
              </div>
              <div className="ml-2">Payment</div>
            </div>
            <div className="flex-1 h-1 mx-4 bg-gray-200">
              <div className={`h-full bg-purple-600 transition-all`} style={{ width: step >= 3 ? "100%" : "0%" }} />
            </div>
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 3 ? "bg-purple-600 text-white" : "bg-gray-200"
              }`}>
                3
              </div>
              <div className="ml-2">Confirmation</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Select Your Plan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-2">Basic</h3>
                        <div className="text-3xl font-bold mb-2">₹3,499</div>
                        <p className="text-sm text-gray-500 mb-4">per year</p>
                        <ul className="space-y-2 text-sm">
                          <li>• Health Insurance up to ₹2 Lakhs</li>
                          <li>• Hospital Discounts</li>
                          <li>• Basic Tele-consultation</li>
                        </ul>
                        <Button className="w-full mt-4">Select Plan</Button>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow cursor-pointer border-purple-600">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-2">Premium</h3>
                        <div className="text-3xl font-bold mb-2">₹5,999</div>
                        <p className="text-sm text-gray-500 mb-4">per year</p>
                        <ul className="space-y-2 text-sm">
                          <li>• Health Insurance up to ₹5 Lakhs</li>
                          <li>• Enhanced Hospital Discounts</li>
                          <li>• Premium Tele-consultation</li>
                          <li>• Digital Gold Rewards</li>
                        </ul>
                        <Button className="w-full mt-4">Select Plan</Button>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-2">Elite</h3>
                        <div className="text-3xl font-bold mb-2">₹9,999</div>
                        <p className="text-sm text-gray-500 mb-4">per year</p>
                        <ul className="space-y-2 text-sm">
                          <li>• Health Insurance up to ₹10 Lakhs</li>
                          <li>• Maximum Hospital Discounts</li>
                          <li>• 24/7 Tele-consultation</li>
                          <li>• Enhanced Digital Gold Rewards</li>
                          <li>• Family Coverage</li>
                        </ul>
                        <Button className="w-full mt-4">Select Plan</Button>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            )}

            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Payment Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2 mb-4">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card">Credit/Debit Card</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="upi" id="upi" />
                      <Label htmlFor="upi">UPI</Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "card" && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Card Number</Label>
                        <Input placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Expiry Date</Label>
                          <Input placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label>CVV</Label>
                          <Input placeholder="123" type="password" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Name on Card</Label>
                        <Input placeholder="John Doe" />
                      </div>
                    </div>
                  )}

                  {paymentMethod === "upi" && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>UPI ID</Label>
                        <Input placeholder="yourname@upi" />
                      </div>
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the terms and conditions
                    </Label>
                  </div>

                  <Button className="w-full">
                    Pay Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            )}

            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle>Order Confirmation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      Your order has been confirmed. You will receive an email with the details.
                    </p>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-medium mb-4">Order Details</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Order Number</span>
                        <span className="font-medium">NiFe-2024-12345</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Plan</span>
                        <span className="font-medium">Premium</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Amount</span>
                        <span className="font-medium">₹5,999</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full">View Order Details</Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Premium Plan</span>
                  <span>₹5,999</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (18%)</span>
                  <span>₹1,079.82</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>₹7,078.82</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Lock className="h-4 w-4" />
                  <span>Secure payment powered by Razorpay</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
