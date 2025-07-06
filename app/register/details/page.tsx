"use client"
import React, { useState, useEffect } from 'react';
import { CheckCircle, Shield, CreditCard, UserPlus, Heart, Coins, ArrowRight, Clock, AlertCircle, Calendar, Mail, Phone, MapPin, Building2, FileText } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users } from "lucide-react"

interface FamilyMember {
  name: string;
  relation: string;
  age: string;
  gender: string;
  preExistingConditions: string[];
}

interface HealthDeclaration {
  hasPreExistingConditions: boolean;
  conditions: string[];
}

export default function RegistrationDetails() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("personal")
  const [selectedCard, setSelectedCard] = useState("kims")
  const [cardName, setCardName] = useState("")
  const [baseInsurance, setBaseInsurance] = useState("5L")
  const [topUpAmount, setTopUpAmount] = useState("0")
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([])
  const [healthDeclaration, setHealthDeclaration] = useState<HealthDeclaration>({
    hasPreExistingConditions: false,
    conditions: []
  })
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    occupation: "",
    annualIncome: "",
    agreeToTerms: false,
    createABHA: false,
  })
  const [showFOMO, setShowFOMO] = useState(true)
  const [timeLeft, setTimeLeft] = useState(1800) // 30 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const handleAddFamilyMember = () => {
    setFamilyMembers([...familyMembers, { 
      name: "", 
      relation: "", 
      age: "", 
      gender: "",
      preExistingConditions: []
    }])
  }

  const handleFamilyMemberChange = (index: number, field: keyof FamilyMember, value: string | string[]) => {
    const updatedMembers = [...familyMembers]
    if (field === "age") {
      const age = parseInt(value as string)
      if (age > 65) {
        // Show warning for members over 65
        alert("Family members over 65 years of age will only receive membership benefits (no health insurance coverage)")
      }
    }
    updatedMembers[index] = { ...updatedMembers[index], [field]: value }
    setFamilyMembers(updatedMembers)
  }

  const handleRazorpayPayment = async () => {
    try {
      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: selectedCard === "kims" ? 699900 : 349900,
          cardType: selectedCard,
          cardName: cardName,
          baseInsurance,
          topUpAmount,
          familyMembers: familyMembers.length,
        }),
      })

      const data = await response.json()

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: "INR",
        name: "NiFe Health",
        description: `${selectedCard === "kims" ? "Kim's Card" : "Health Protect Card"} Registration`,
        order_id: data.orderId,
        handler: function (response: any) {
          router.push("/registration-success")
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#6B46C1",
        },
      }

      const razorpay = new (window as any).Razorpay(options)
      razorpay.open()
    } catch (error) {
      console.error('Payment initialization failed:', error)
    }
  }

  // Generate a random card number for preview
  const generateCardNumber = () => {
    return "4532 " + Array(3).fill(0).map(() => 
      Math.floor(Math.random() * 10000).toString().padStart(4, '0')
    ).join(" ")
  }

  const [cardNumber] = useState(generateCardNumber())
  const [expiryDate] = useState(() => {
    const date = new Date()
    date.setFullYear(date.getFullYear() + 5)
    return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear().toString().slice(-2)}`
  })

  // Add age validation functions
  const calculateAge = (dateOfBirth: string) => {
    const today = new Date()
    const birthDate = new Date(dateOfBirth)
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  const isEligibleForBaseInsurance = (dateOfBirth: string) => {
    const age = calculateAge(dateOfBirth)
    return age <= 60
  }

  const isEligibleForTopUp = (dateOfBirth: string) => {
    const age = calculateAge(dateOfBirth)
    return age <= 65
  }

  const getAgeRestrictionMessage = (dateOfBirth: string) => {
    const age = calculateAge(dateOfBirth)
    if (age > 65) {
      return "Membership benefits only (No health insurance coverage available)"
    } else if (age > 60) {
      return "Eligible for top-up coverage only"
    }
    return "Eligible for full coverage"
  }

  // Update the card selection section
  const handleDateOfBirthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDateOfBirth = e.target.value
    setFormData({ ...formData, dateOfBirth: newDateOfBirth })
    
    // Reset insurance selections if age is not eligible
    if (!isEligibleForBaseInsurance(newDateOfBirth)) {
      setBaseInsurance("0")
    }
    if (!isEligibleForTopUp(newDateOfBirth)) {
      setTopUpAmount("0")
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Complete Your Health Protection</h1>
          <p className="text-gray-600">Secure your family's health with comprehensive coverage</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="card">Card Details</TabsTrigger>
                <TabsTrigger value="health">Health Info</TabsTrigger>
                <TabsTrigger value="family">Family</TabsTrigger>
              </TabsList>

              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Please provide your basic details</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="dateOfBirth">Date of Birth</Label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="dateOfBirth"
                              type="date"
                              value={formData.dateOfBirth}
                              onChange={handleDateOfBirthChange}
                              className="pl-10"
                              required
                            />
                          </div>
                          {formData.dateOfBirth && (
                            <p className={`text-sm ${calculateAge(formData.dateOfBirth) > 65 ? 'text-red-500' : 'text-gray-600'}`}>
                              {getAgeRestrictionMessage(formData.dateOfBirth)}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="gender">Gender</Label>
                          <select
                            id="gender"
                            value={formData.gender}
                            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                            className="w-full px-3 py-2 border rounded-md"
                            required
                          >
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="address"
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State</Label>
                          <Input
                            id="state"
                            value={formData.state}
                            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pincode">Pincode</Label>
                          <Input
                            id="pincode"
                            value={formData.pincode}
                            onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="occupation">Occupation</Label>
                          <Input
                            id="occupation"
                            value={formData.occupation}
                            onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="annualIncome">Annual Income</Label>
                          <Input
                            id="annualIncome"
                            type="number"
                            value={formData.annualIncome}
                            onChange={(e) => setFormData({ ...formData, annualIncome: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button
                          type="button"
                          onClick={() => setActiveTab("card")}
                          className="bg-purple-600 hover:bg-purple-700"
                        >
                          Continue to Card Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="card">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Details</CardTitle>
                    <CardDescription>Choose your card and customize it</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input
                          id="cardName"
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value)}
                          placeholder="Enter name as it should appear on card"
                          className="w-full"
                        />
                      </div>

                      <div className="space-y-4">
                        <Label>Select Card Type</Label>
                        <div className="grid grid-cols-1 gap-4">
                          <div
                            className={`relative cursor-pointer transition-all duration-300 ${
                              selectedCard === "kims" ? "ring-2 ring-purple-600 scale-105" : ""
                            }`}
                            onClick={() => setSelectedCard("kims")}
                          >
                            <Card className="overflow-hidden">
                              <div className="absolute top-0 right-0 bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-bl-lg">
                                Most Popular
                              </div>
                              <CardContent className="pt-6">
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/images/kimscard1.png"
                                    alt="Kim's Card"
                                    width={120}
                                    height={120}
                                    className="rounded-lg"
                                  />
                                  <div>
                                    <h4 className="font-bold text-xl">Kim's Card</h4>
                                    <p className="text-sm text-gray-500">₹6,999/year</p>
                                  </div>
                                </div>
                                <div className="mt-4 space-y-3">
                                  <div className="flex items-start gap-2">
                                    <Shield className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                                    <div>
                                      <p className="font-semibold">₹5L Health Insurance</p>
                                      <p className="text-sm text-gray-600">Comprehensive coverage for you and your family</p>
                                      <p className="text-sm text-green-600 mt-1">
                                        • No waiting period for new diseases
                                        <br />
                                        • 12 months waiting period for pre-existing diseases
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <Building2 className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                                    <div>
                                      <p className="font-semibold">Exclusive Hospital Access</p>
                                      <p className="text-sm text-gray-600">Priority access to all Kim's Health hospital chains</p>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <Heart className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                                    <div>
                                      <p className="font-semibold">OPD Benefits</p>
                                      <p className="text-sm text-gray-600">10% discount on all OPD consultations</p>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <FileText className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                                    <div>
                                      <p className="font-semibold">Diagnostic Services</p>
                                      <p className="text-sm text-gray-600">25% discount on all diagnostic tests</p>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <Coins className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                                    <div>
                                      <p className="font-semibold">Cashback Rewards</p>
                                      <p className="text-sm text-gray-600">Up to 10% cashback on medical expenses</p>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>

                          <div
                            className={`relative cursor-pointer transition-all duration-300 ${
                              selectedCard === "health" ? "ring-2 ring-purple-600 scale-105" : ""
                            }`}
                            onClick={() => setSelectedCard("health")}
                          >
                            <Card className="overflow-hidden">
                              <CardContent className="pt-6">
                                <div className="flex items-center gap-4">
                                  <Image
                                    src="/images/NiFe Health protect card.png"
                                    alt="Health Protect Card"
                                    width={120}
                                    height={120}
                                    className="rounded-lg"
                                  />
                                  <div>
                                    <h4 className="font-bold text-xl">Health Protect Card</h4>
                                    <p className="text-sm text-gray-500">₹3,499/year</p>
                                  </div>
                                </div>
                                <div className="mt-4 space-y-3">
                                  <div className="flex items-start gap-2">
                                    <Shield className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                                    <div>
                                      <p className="font-semibold">₹3L Health Insurance</p>
                                      <p className="text-sm text-gray-600">Basic health coverage for individuals</p>
                                      <p className="text-sm text-green-600 mt-1">
                                        • No waiting period for new diseases
                                        <br />
                                        • 12 months waiting period for pre-existing diseases
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <Heart className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                                    <div>
                                      <p className="font-semibold">OPD Benefits</p>
                                      <p className="text-sm text-gray-600">5% discount on OPD consultations</p>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <FileText className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                                    <div>
                                      <p className="font-semibold">Diagnostic Services</p>
                                      <p className="text-sm text-gray-600">15% discount on diagnostic tests</p>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <Coins className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                                    <div>
                                      <p className="font-semibold">Cashback Rewards</p>
                                      <p className="text-sm text-gray-600">Up to 5% cashback on medical expenses</p>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <Users className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                                    <div>
                                      <p className="font-semibold">Family Coverage</p>
                                      <p className="text-sm text-gray-600">Add up to 2 family members</p>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <Label>Base Insurance Coverage</Label>
                        {formData.dateOfBirth && !isEligibleForBaseInsurance(formData.dateOfBirth) ? (
                          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                            <p className="text-yellow-800">
                              Base insurance coverage is only available for members up to 60 years of age.
                              You can still enjoy all other membership benefits including discounts and cashback.
                            </p>
                          </div>
                        ) : (
                          <RadioGroup
                            value={baseInsurance}
                            onValueChange={setBaseInsurance}
                            className="grid grid-cols-3 gap-4"
                          >
                            <div>
                              <RadioGroupItem value="3L" id="3L" className="peer sr-only" />
                              <Label
                                htmlFor="3L"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                              >
                                <span className="text-2xl font-bold">₹3L</span>
                                <span className="text-sm">Basic</span>
                              </Label>
                            </div>
                            <div>
                              <RadioGroupItem value="5L" id="5L" className="peer sr-only" />
                              <Label
                                htmlFor="5L"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                              >
                                <span className="text-2xl font-bold">₹5L</span>
                                <span className="text-sm">Standard</span>
                              </Label>
                            </div>
                            <div>
                              <RadioGroupItem value="10L" id="10L" className="peer sr-only" />
                              <Label
                                htmlFor="10L"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                              >
                                <span className="text-2xl font-bold">₹10L</span>
                                <span className="text-sm">Premium</span>
                              </Label>
                            </div>
                          </RadioGroup>
                        )}
                      </div>

                      <div className="space-y-4">
                        <Label>Top-up Coverage</Label>
                        {formData.dateOfBirth && !isEligibleForTopUp(formData.dateOfBirth) ? (
                          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                            <p className="text-yellow-800">
                              Top-up coverage is only available for members up to 65 years of age.
                              You can still enjoy all other membership benefits including discounts and cashback.
                            </p>
                          </div>
                        ) : (
                          <>
                            <select
                              value={topUpAmount}
                              onChange={(e) => setTopUpAmount(e.target.value)}
                              className="w-full px-3 py-2 border rounded-md"
                              disabled={!isEligibleForTopUp(formData.dateOfBirth)}
                            >
                              <option value="0">No Top-up</option>
                              <option value="5L">+₹5L</option>
                              <option value="10L">+₹10L</option>
                              <option value="15L">+₹15L</option>
                            </select>
                            {topUpAmount !== "0" && (
                              <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
                                <p className="text-blue-800">
                                  <span className="font-semibold">Top-up Coverage Waiting Period:</span>
                                  <br />
                                  • 30 days waiting period for new diseases
                                  <br />
                                  • 12 months waiting period for pre-existing diseases
                                </p>
                              </div>
                            )}
                          </>
                        )}
                      </div>

                      <div className="flex justify-between">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setActiveTab("personal")}
                        >
                          Back
                        </Button>
                        <Button
                          type="button"
                          onClick={() => setActiveTab("health")}
                          className="bg-purple-600 hover:bg-purple-700"
                        >
                          Continue to Health Info
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="health">
                <Card>
                  <CardHeader>
                    <CardTitle>Health Declaration</CardTitle>
                    <CardDescription>Please provide your health information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="preExisting"
                            checked={healthDeclaration.hasPreExistingConditions}
                            onCheckedChange={(checked) => setHealthDeclaration({
                              ...healthDeclaration,
                              hasPreExistingConditions: checked as boolean
                            })}
                          />
                          <Label htmlFor="preExisting">Do you have any pre-existing conditions?</Label>
                        </div>

                        {healthDeclaration.hasPreExistingConditions && (
                          <div className="space-y-4 pl-6">
                            <Label>Select conditions (if any)</Label>
                            <div className="grid grid-cols-2 gap-4">
                              {["Diabetes", "Hypertension", "Heart Disease", "Asthma", "Cancer", "Other"].map((condition) => (
                                <div key={condition} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={condition}
                                    checked={healthDeclaration.conditions.includes(condition)}
                                    onCheckedChange={(checked) => {
                                      const newConditions = checked
                                        ? [...healthDeclaration.conditions, condition]
                                        : healthDeclaration.conditions.filter(c => c !== condition)
                                      setHealthDeclaration({
                                        ...healthDeclaration,
                                        conditions: newConditions
                                      })
                                    }}
                                  />
                                  <Label htmlFor={condition}>{condition}</Label>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex justify-between">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setActiveTab("card")}
                        >
                          Back
                        </Button>
                        <Button
                          type="button"
                          onClick={() => setActiveTab("family")}
                          className="bg-purple-600 hover:bg-purple-700"
                        >
                          Continue to Family Members
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="family">
                <Card>
                  <CardHeader>
                    <CardTitle>Family Members</CardTitle>
                    <CardDescription>Add family members to your plan</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {familyMembers.map((member, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg">
                          <div className="space-y-2">
                            <Label>Name</Label>
                            <Input
                              value={member.name}
                              onChange={(e) => handleFamilyMemberChange(index, "name", e.target.value)}
                              placeholder="Full Name"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Relation</Label>
                            <select
                              value={member.relation}
                              onChange={(e) => handleFamilyMemberChange(index, "relation", e.target.value)}
                              className="w-full px-3 py-2 border rounded-md"
                            >
                              <option value="">Select relation</option>
                              <option value="spouse">Spouse</option>
                              <option value="child">Child</option>
                              <option value="parent">Parent</option>
                              <option value="sibling">Sibling</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label>Age</Label>
                            <Input
                              type="number"
                              value={member.age}
                              onChange={(e) => handleFamilyMemberChange(index, "age", e.target.value)}
                              placeholder="Age"
                              max={100}
                            />
                            {parseInt(member.age) > 65 && (
                              <p className="text-sm text-red-500">
                                Members over 65 will only receive membership benefits
                              </p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label>Gender</Label>
                            <select
                              value={member.gender}
                              onChange={(e) => handleFamilyMemberChange(index, "gender", e.target.value)}
                              className="w-full px-3 py-2 border rounded-md"
                            >
                              <option value="">Select gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>
                      ))}

                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleAddFamilyMember}
                        className="w-full"
                      >
                        <UserPlus className="mr-2 h-4 w-4" />
                        Add Family Member
                      </Button>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.agreeToTerms}
                          onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                          required
                        />
                        <Label htmlFor="terms" className="text-sm text-gray-600">
                          I agree to the terms and conditions and privacy policy
                        </Label>
                      </div>

                      <div className="flex justify-between">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setActiveTab("health")}
                        >
                          Back
                        </Button>
                        <Button
                          type="button"
                          onClick={handleRazorpayPayment}
                          className="bg-purple-600 hover:bg-purple-700"
                          disabled={!formData.agreeToTerms || !cardName}
                        >
                          Proceed to Payment
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Live Card Preview</CardTitle>
                <CardDescription>See how your card will look</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-[1.586] w-full max-w-md mx-auto">
                  <Image
                    src={selectedCard === "kims" ? "/images/kimscard1.png" : "/images/NiFe Health protect card.png"}
                    alt="Card Preview"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-white font-mono text-xl tracking-wider">
                      {cardName || "YOUR NAME"}
                    </p>
                    <p className="text-white/80 font-mono text-sm tracking-widest mt-2">
                      {cardNumber}
                    </p>
                    <p className="text-white/80 font-mono text-sm tracking-widest mt-1">
                      Expires {expiryDate}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Coverage Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {formData.dateOfBirth && calculateAge(formData.dateOfBirth) > 65 ? (
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                      <p className="text-yellow-800">
                        You are eligible for membership benefits only. Health insurance coverage is not available for members over 65 years of age.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Base Coverage</span>
                        <span className="font-bold">₹{baseInsurance}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Top-up Coverage</span>
                        <span className="font-bold">₹{topUpAmount}</span>
                      </div>
                      <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                        <p className="text-green-800">
                          <span className="font-semibold">Waiting Period Information:</span>
                          <br />
                          • Base Coverage: No waiting period for new diseases, 12 months for pre-existing diseases
                          <br />
                          {topUpAmount !== "0" && "• Top-up Coverage: 30 days for new diseases, 12 months for pre-existing diseases"}
                        </p>
                      </div>
                    </>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Family Members</span>
                    <span className="font-bold">{familyMembers.length}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Coverage</span>
                      <span className="font-bold text-lg">
                        {formData.dateOfBirth && calculateAge(formData.dateOfBirth) > 65 ? (
                          "Membership Benefits Only"
                        ) : (
                          `₹${parseInt(baseInsurance) + parseInt(topUpAmount)}L`
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg">What are the waiting periods for health insurance coverage?</h4>
                      <div className="pl-4 space-y-2">
                        <p className="text-gray-600">
                          <span className="font-medium">Base Coverage:</span>
                          <br />
                          • No waiting period for new diseases - coverage starts from day 1
                          <br />
                          • 12 months waiting period for pre-existing diseases
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Top-up Coverage:</span>
                          <br />
                          • 30 days waiting period for new diseases
                          <br />
                          • 12 months waiting period for pre-existing diseases
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg">What is considered a pre-existing disease?</h4>
                      <p className="text-gray-600 pl-4">
                        A pre-existing disease is any condition, ailment, or injury that you have been diagnosed with or have shown signs or symptoms of before the start of your insurance coverage. This includes conditions like diabetes, hypertension, heart disease, etc.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg">What benefits are available during the waiting period?</h4>
                      <p className="text-gray-600 pl-4">
                        During the waiting period, you still have access to all membership benefits including:
                        <br />
                        • OPD consultation discounts
                        <br />
                        • Diagnostic test discounts
                        <br />
                        • Cashback rewards
                        <br />
                        • Hospital network access
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg">What is the age limit for coverage?</h4>
                      <p className="text-gray-600 pl-4">
                        • Base insurance coverage is available up to 60 years of age
                        <br />
                        • Top-up coverage is available up to 65 years of age
                        <br />
                        • Members above 65 years can still avail membership benefits
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Why Choose NiFe Health?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Comprehensive Coverage</h4>
                      <p className="text-sm text-gray-600">Get up to ₹10L health insurance coverage with our premium plans</p>
                      <p className="text-sm text-green-600 mt-1">No waiting period for new diseases</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Family Protection</h4>
                      <p className="text-sm text-gray-600">Secure your entire family's health with our family coverage options</p>
                      <p className="text-sm text-green-600 mt-1">Coverage starts from day 1 for new diseases</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Coins className="h-6 w-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Rewards & Benefits</h4>
                      <p className="text-sm text-gray-600">Earn digital gold rewards on every transaction</p>
                      <p className="text-sm text-green-600 mt-1">Immediate access to all membership benefits</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Quick Coverage</h4>
                      <p className="text-sm text-gray-600">Get covered from day 1 for new diseases</p>
                      <p className="text-sm text-green-600 mt-1">Minimal waiting periods for comprehensive protection</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Important Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
                    <h4 className="font-semibold text-blue-800 mb-2">Coverage Start Date</h4>
                    <p className="text-blue-800">
                      Your health insurance coverage begins immediately upon successful registration and payment:
                      <br />
                      • New diseases: Coverage from day 1
                      <br />
                      • Pre-existing diseases: Coverage after 12 months
                      <br />
                      • Top-up coverage: 30 days for new diseases
                    </p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 border border-purple-200 rounded-md">
                    <h4 className="font-semibold text-purple-800 mb-2">Membership Benefits</h4>
                    <p className="text-purple-800">
                      All membership benefits are available immediately:
                      <br />
                      • Hospital network access
                      <br />
                      • OPD discounts
                      <br />
                      • Diagnostic test discounts
                      <br />
                      • Cashback rewards
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                    <h4 className="font-semibold text-green-800 mb-2">Age Eligibility</h4>
                    <p className="text-green-800">
                      • Base coverage: Up to 60 years
                      <br />
                      • Top-up coverage: Up to 65 years
                      <br />
                      • Membership benefits: Available at all ages
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
} 