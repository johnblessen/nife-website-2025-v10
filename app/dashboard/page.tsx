"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Shield,
  Users,
  Calculator,
  CreditCard,
  Heart,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Gift,
  Phone,
  Coins,
  TrendingUp,
  Award,
  AlertTriangle,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function Dashboard() {
  const [familySize, setFamilySize] = useState([2])
  const [baseInsurance, setBaseInsurance] = useState([500000])
  const [topUpCoverage, setTopUpCoverage] = useState([1000000])
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [userMobile, setUserMobile] = useState("")
  const [userAge, setUserAge] = useState(25) // Default age
  const [showAgeWarning, setShowAgeWarning] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    const mobile = localStorage.getItem("userMobile")

    if (!isLoggedIn) {
      router.push("/")
      return
    }

    if (mobile) {
      setUserMobile(mobile)
    }
  }, [router])

  const calculatePremium = () => {
    const basePremium = baseInsurance[0] * 0.008 // 0.8% of sum insured
    const topUpPremium = topUpCoverage[0] * 0.003 // 0.3% of top-up
    const familyMultiplier = familySize[0] === 1 ? 1 : familySize[0] * 0.7
    const ageMultiplier = userAge > 45 ? 1.5 : userAge > 35 ? 1.2 : 1
    return Math.round((basePremium + topUpPremium) * familyMultiplier * ageMultiplier)
  }

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)} Cr`
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(0)} L`
    return `₹${amount.toLocaleString()}`
  }

  const validatePlanSelection = (planId: string) => {
    const plan = plans.find((p) => p.id === planId)
    if (!plan) return false

    // Age validation for different plans
    if (userAge > 60 && plan.baseInsurance > 300000) {
      setShowAgeWarning(true)
      return false
    }
    if (userAge > 65 && plan.topUp > 1000000) {
      setShowAgeWarning(true)
      return false
    }

    setShowAgeWarning(false)
    return true
  }

  const handlePlanSelection = (planId: string) => {
    if (validatePlanSelection(planId)) {
      setSelectedPlan(planId)
    }
  }

  const handleProceedToDetails = () => {
    if (selectedPlan) {
      localStorage.setItem("selectedPlan", selectedPlan)
      router.push("/get-started/details")
    }
  }

  const plans = [
    {
      id: "essential",
      name: "Essential Plan",
      description: "Perfect for individuals and young couples",
      baseInsurance: 300000,
      topUp: 500000,
      premium: 3499,
      features: ["Basic health coverage", "Emergency support", "Tele-consultation"],
      badge: "Most Popular",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      ageLimit: "Up to 60 years",
    },
    {
      id: "family",
      name: "Family Plan",
      description: "Comprehensive coverage for growing families",
      baseInsurance: 500000,
      topUp: 1000000,
      premium: 5999,
      features: ["Family coverage", "Maternity benefits", "Child care"],
      badge: "Best Value",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      ageLimit: "Up to 65 years",
    },
    {
      id: "premium",
      name: "Premium Plan",
      description: "Maximum protection with luxury benefits",
      baseInsurance: 1000000,
      topUp: 5000000,
      premium: 12999,
      features: ["Premium hospitals", "International coverage", "Concierge service"],
      badge: "Recommended",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      ageLimit: "Up to 60 years",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Enhanced Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome to NiFe Dashboard</h1>
                <p className="text-gray-600">Choose your perfect health & wellness plan</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Registered Mobile</p>
              <p className="font-semibold text-gray-900">+91 {userMobile}</p>
              <div className="mt-2">
                <Label className="text-sm text-gray-600">Your Age</Label>
                <input
                  type="number"
                  value={userAge}
                  onChange={(e) => setUserAge(Number.parseInt(e.target.value) || 25)}
                  className="ml-2 w-16 px-2 py-1 border rounded text-sm"
                  min="18"
                  max="80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Plan Customization */}
          <div className="lg:col-span-2 space-y-8">
            {/* Welcome Card */}
            <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">Congratulations! 🎉</h2>
                    <p className="text-purple-100 text-lg">You're one step away from complete health protection</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center bg-white/10 rounded-xl p-4">
                    <Gift className="h-6 w-6 mx-auto mb-2" />
                    <p className="text-sm font-semibold">50 Welcome</p>
                    <p className="text-xs text-purple-200">Gold Coins</p>
                  </div>
                  <div className="text-center bg-white/10 rounded-xl p-4">
                    <Shield className="h-6 w-6 mx-auto mb-2" />
                    <p className="text-sm font-semibold">₹3L Free</p>
                    <p className="text-xs text-purple-200">Insurance</p>
                  </div>
                  <div className="text-center bg-white/10 rounded-xl p-4">
                    <Phone className="h-6 w-6 mx-auto mb-2" />
                    <p className="text-sm font-semibold">24/7 Doctor</p>
                    <p className="text-xs text-purple-200">Consultation</p>
                  </div>
                  <div className="text-center bg-white/10 rounded-xl p-4">
                    <CreditCard className="h-6 w-6 mx-auto mb-2" />
                    <p className="text-sm font-semibold">Digital Card</p>
                    <p className="text-xs text-purple-200">Ready Now</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Age Warning */}
            {showAgeWarning && (
              <Card className="border-orange-200 bg-orange-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-6 w-6 text-orange-500" />
                    <div>
                      <h3 className="font-bold text-orange-800">Age Restriction Notice</h3>
                      <p className="text-orange-700 text-sm">
                        Based on your age ({userAge} years), this plan may have limited coverage or require medical
                        checkup. Please consider the Essential Plan or contact our support team.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Plan Customizer */}
            <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Calculator className="h-6 w-6" />
                  Customize Your Perfect Plan
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                {/* Family Size */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <Label className="text-lg font-semibold">Family Size: {familySize[0]} members</Label>
                  </div>
                  <Slider
                    value={familySize}
                    onValueChange={setFamilySize}
                    max={6}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Individual</span>
                    <span>Large Family (6)</span>
                  </div>
                </div>

                <Separator />

                {/* Base Insurance */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-600" />
                    <Label className="text-lg font-semibold">Base Insurance: {formatCurrency(baseInsurance[0])}</Label>
                  </div>
                  <Slider
                    value={baseInsurance}
                    onValueChange={setBaseInsurance}
                    max={1000000}
                    min={300000}
                    step={100000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹3 Lakhs</span>
                    <span>₹10 Lakhs</span>
                  </div>
                </div>

                <Separator />

                {/* Top-up Coverage */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                    <Label className="text-lg font-semibold">Top-up Coverage: {formatCurrency(topUpCoverage[0])}</Label>
                  </div>
                  <Slider
                    value={topUpCoverage}
                    onValueChange={setTopUpCoverage}
                    max={10000000}
                    min={500000}
                    step={500000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹5 Lakhs</span>
                    <span>₹1 Crore</span>
                  </div>
                </div>

                {/* Premium Calculation */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Your Custom Plan Premium</h3>
                      <p className="text-gray-600">Annual premium for your selected coverage</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-orange-600">₹{calculatePremium().toLocaleString()}</div>
                      <p className="text-sm text-gray-600">per year</p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span>Total Coverage:</span>
                      <span className="font-semibold">{formatCurrency(baseInsurance[0] + topUpCoverage[0])}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly EMI:</span>
                      <span className="font-semibold">₹{Math.round(calculatePremium() / 12).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Plan Cards */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 text-center">Choose Your Perfect Plan</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((plan) => (
                  <Card
                    key={plan.id}
                    className={`cursor-pointer transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border-2 ${
                      selectedPlan === plan.id
                        ? "border-purple-500 shadow-2xl scale-105"
                        : "border-gray-200 hover:border-purple-300"
                    } bg-gradient-to-br ${plan.bgColor}`}
                    onClick={() => handlePlanSelection(plan.id)}
                  >
                    <CardHeader className="text-center relative">
                      {plan.badge && (
                        <Badge
                          className={`absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${plan.color} text-white px-3 py-1`}
                        >
                          {plan.badge}
                        </Badge>
                      )}
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4 mt-4`}
                      >
                        <Heart className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                      <p className="text-gray-600 text-sm">{plan.description}</p>
                      <p className="text-xs text-gray-500 mt-2">{plan.ageLimit}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-900">₹{plan.premium.toLocaleString()}</div>
                        <p className="text-sm text-gray-600">per year</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Base Coverage:</span>
                          <span className="font-semibold">{formatCurrency(plan.baseInsurance)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Top-up:</span>
                          <span className="font-semibold">{formatCurrency(plan.topUp)}</span>
                        </div>
                        <div className="flex justify-between text-sm font-bold border-t pt-2">
                          <span>Total Coverage:</span>
                          <span>{formatCurrency(plan.baseInsurance + plan.topUp)}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-semibold py-2 rounded-lg transition-all duration-200`}
                        onClick={() => handlePlanSelection(plan.id)}
                      >
                        {selectedPlan === plan.id ? "Selected" : "Select Plan"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Proceed Button */}
            {selectedPlan && (
              <div className="text-center">
                <Button
                  size="lg"
                  onClick={handleProceedToDetails}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold px-12 py-4 text-xl rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Proceed to Registration Details
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            )}
          </div>

          {/* Enhanced Sticky Summary Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 shadow-2xl border-0 bg-gradient-to-br from-white to-purple-50">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3">
                  <Award className="h-6 w-6" />
                  Your NiFe Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Instant Benefits */}
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900">Instant Benefits (Active Now)</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Shield className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">₹3L Health Insurance</p>
                        <p className="text-xs text-gray-600">Active immediately</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Coins className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">50 Welcome Gold Coins</p>
                        <p className="text-xs text-gray-600">Worth ≈ ₹325</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Phone className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">24/7 Tele-consultation</p>
                        <p className="text-xs text-gray-600">Unlimited access</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Selected Plan Summary */}
                {selectedPlan && (
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h3 className="font-bold text-purple-800 mb-2">Selected Plan</h3>
                    <div className="text-sm space-y-1">
                      <p>
                        <span className="font-semibold">Plan:</span> {plans.find((p) => p.id === selectedPlan)?.name}
                      </p>
                      <p>
                        <span className="font-semibold">Premium:</span> ₹
                        {plans.find((p) => p.id === selectedPlan)?.premium.toLocaleString()}/year
                      </p>
                      <p>
                        <span className="font-semibold">Coverage:</span>{" "}
                        {formatCurrency(
                          (plans.find((p) => p.id === selectedPlan)?.baseInsurance || 0) +
                            (plans.find((p) => p.id === selectedPlan)?.topUp || 0),
                        )}
                      </p>
                    </div>
                  </div>
                )}

                <p className="text-xs text-gray-500 text-center">🔒 Secure payment • 15-day money-back guarantee</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
