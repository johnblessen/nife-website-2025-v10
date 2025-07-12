"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, ArrowLeft, Loader2, CreditCard, Lock } from "lucide-react"
import Link from "next/link"

const cardTiers = {
  individual: {
    name: "Individual Wellness",
    color: "from-purple-500 to-indigo-500",
    annualFee: 3499,
  },
  "family-protect": {
    name: "Family Protect Wellness",
    color: "from-pink-500 to-purple-500",
    annualFee: 6999,
  },
  "premium-family": {
    name: "Premium Family Wellness",
    color: "from-yellow-400 to-pink-500",
    annualFee: 9999,
  },
  "platinum-parents": {
    name: "Platinum Parents Wellness",
    color: "from-green-400 to-blue-500",
    annualFee: 8999,
  },
};

export default function PaymentPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [registrationData, setRegistrationData] = useState<any>(null)
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    upiId: "",
  })
  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi">("card")

  useEffect(() => {
    // Retrieve registration data from localStorage
    const savedData = localStorage.getItem("registrationData")
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData)
        setRegistrationData(parsedData)
      } catch (error) {
        console.error("Error parsing saved data:", error)
        router.push("/get-started")
      }
    } else {
      router.push("/get-started")
    }
  }, [router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPaymentData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Clear registration data from localStorage
      localStorage.removeItem("registrationData")

      // Redirect to success page
      router.push("/get-started/success")
    } catch (error) {
      console.error("Error processing payment:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!registrationData) {
    return null
  }

  const selectedPlan = cardTiers[registrationData.planId as keyof typeof cardTiers]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div className="ml-2 text-sm font-medium text-purple-600">Plan Selection</div>
              </div>
              <div className="flex-1 h-1 mx-4 bg-purple-600"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div className="ml-2 text-sm font-medium text-purple-600">Personal Details</div>
              </div>
              <div className="flex-1 h-1 mx-4 bg-purple-600"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center">
                  3
                </div>
                <div className="ml-2 text-sm font-medium text-purple-600">Payment</div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="mb-8">
            <div className={`p-6 rounded-2xl bg-gradient-to-r ${selectedPlan.color} text-white`}>
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedPlan.name}</h2>
                  <p className="text-white/80">Annual Fee: ₹{selectedPlan.annualFee.toLocaleString()}</p>
                </div>
                <Link href="/get-started/details" className="text-white/80 hover:text-white flex items-center">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Details
                </Link>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Payment Details</h1>
              <div className="flex items-center text-sm text-gray-500">
                <Lock className="h-4 w-4 mr-2" />
                Secure Payment
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="mb-6">
              <div className="flex gap-4">
                <button
                  className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                    paymentMethod === "card"
                      ? "border-purple-600 bg-purple-50"
                      : "border-gray-200 hover:border-purple-200"
                  }`}
                  onClick={() => setPaymentMethod("card")}
                >
                  <div className="flex items-center justify-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    <span className="font-medium">Credit/Debit Card</span>
                  </div>
                </button>
                <button
                  className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                    paymentMethod === "upi"
                      ? "border-purple-600 bg-purple-50"
                      : "border-gray-200 hover:border-purple-200"
                  }`}
                  onClick={() => setPaymentMethod("upi")}
                >
                  <div className="flex items-center justify-center gap-2">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="font-medium">UPI</span>
                  </div>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {paymentMethod === "card" ? (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      value={paymentData.cardNumber}
                      onChange={handleInputChange}
                      required
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input
                      id="cardName"
                      name="cardName"
                      value={paymentData.cardName}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        name="expiryDate"
                        value={paymentData.expiryDate}
                        onChange={handleInputChange}
                        required
                        placeholder="MM/YY"
                        maxLength={5}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        name="cvv"
                        type="password"
                        value={paymentData.cvv}
                        onChange={handleInputChange}
                        required
                        placeholder="123"
                        maxLength={3}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="upiId">UPI ID</Label>
                  <Input
                    id="upiId"
                    name="upiId"
                    value={paymentData.upiId}
                    onChange={handleInputChange}
                    required
                    placeholder="yourname@upi"
                  />
                </div>
              )}

              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing Payment...
                    </>
                  ) : (
                    <>
                      Pay ₹{selectedPlan.annualFee.toLocaleString()}
                      <CheckCircle className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
