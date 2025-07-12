"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight, Shield, AlertTriangle, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

interface UserDetails {
  fullName: string
  panName: string
  panNumber: string
  aadharNumber: string
  dateOfBirth: string
  gender: string
  email: string
  address: string
  city: string
  state: string
  pincode: string
  nominee: string
  nomineeRelation: string
  termsAccepted: boolean
}

export default function RegistrationDetailsPage() {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    fullName: "",
    panName: "",
    panNumber: "",
    aadharNumber: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    nominee: "",
    nomineeRelation: "",
    termsAccepted: false,
  })

  const [errors, setErrors] = useState<Partial<UserDetails>>({})
  const [selectedPlan, setSelectedPlan] = useState<any>(null)
  const [userAge, setUserAge] = useState(0)
  const [ageValidation, setAgeValidation] = useState({ isValid: true, message: "" })
  const router = useRouter()

  useEffect(() => {
    // Get selected plan from localStorage
    const planId = localStorage.getItem("selectedPlan")
    if (!planId) {
      router.push("/dashboard")
      return
    }

    // Mock plan data - in real app, fetch from API
    const plans = {
      essential: { name: "Essential Plan", premium: 3499, baseInsurance: 300000, topUp: 500000, ageLimit: 60 },
      family: { name: "Family Plan", premium: 5999, baseInsurance: 500000, topUp: 1000000, ageLimit: 65 },
      premium: { name: "Premium Plan", premium: 12999, baseInsurance: 1000000, topUp: 5000000, ageLimit: 60 },
    }

    setSelectedPlan(plans[planId as keyof typeof plans])
  }, [router])

  const calculateAge = (dob: string) => {
    const today = new Date()
    const birthDate = new Date(dob)
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }

    return age
  }

  const validateAge = (dob: string) => {
    const age = calculateAge(dob)
    setUserAge(age)

    if (age < 18) {
      setAgeValidation({ isValid: false, message: "Minimum age requirement is 18 years" })
      return false
    }

    if (selectedPlan && age > selectedPlan.ageLimit) {
      setAgeValidation({
        isValid: false,
        message: `Age limit for ${selectedPlan.name} is ${selectedPlan.ageLimit} years. Please select a different plan.`,
      })
      return false
    }

    setAgeValidation({ isValid: true, message: "" })
    return true
  }

  const validatePAN = (pan: string) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
    return panRegex.test(pan)
  }

  const validateAadhar = (aadhar: string) => {
    const aadharRegex = /^[0-9]{12}$/
    return aadharRegex.test(aadhar)
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePincode = (pincode: string) => {
    const pincodeRegex = /^[0-9]{6}$/
    return pincodeRegex.test(pincode)
  }

  const handleInputChange = (field: keyof UserDetails, value: string | boolean) => {
    setUserDetails((prev) => ({ ...prev, [field]: value }))

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }

    // Special validation for date of birth
    if (field === "dateOfBirth" && typeof value === "string") {
      validateAge(value)
    }
  }

  const validateForm = () => {
    const newErrors: Partial<UserDetails> = {}

    if (!userDetails.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!userDetails.panName.trim()) newErrors.panName = "Name as per PAN is required"
    if (!userDetails.panNumber.trim()) {
      newErrors.panNumber = "PAN number is required"
    } else if (!validatePAN(userDetails.panNumber)) {
      newErrors.panNumber = "Invalid PAN format (e.g., ABCDE1234F)"
    }
    if (!userDetails.aadharNumber.trim()) {
      newErrors.aadharNumber = "Aadhar number is required"
    } else if (!validateAadhar(userDetails.aadharNumber)) {
      newErrors.aadharNumber = "Invalid Aadhar format (12 digits)"
    }
    if (!userDetails.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required"
    } else if (!validateAge(userDetails.dateOfBirth)) {
      newErrors.dateOfBirth = ageValidation.message
    }
    if (!userDetails.gender) newErrors.gender = "Gender is required"
    if (!userDetails.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(userDetails.email)) {
      newErrors.email = "Invalid email format"
    }
    if (!userDetails.address.trim()) newErrors.address = "Address is required"
    if (!userDetails.city.trim()) newErrors.city = "City is required"
    if (!userDetails.state.trim()) newErrors.state = "State is required"
    if (!userDetails.pincode.trim()) {
      newErrors.pincode = "Pincode is required"
    } else if (!validatePincode(userDetails.pincode)) {
      newErrors.pincode = "Invalid pincode format (6 digits)"
    }
    if (!userDetails.nominee.trim()) newErrors.nominee = "Nominee name is required"
    if (!userDetails.nomineeRelation.trim()) newErrors.nomineeRelation = "Nominee relation is required"
    if (!userDetails.termsAccepted) newErrors.termsAccepted = "Please accept terms and conditions"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = () => {
    if (validateForm() && ageValidation.isValid) {
      // Store user details in localStorage
      localStorage.setItem("userDetails", JSON.stringify(userDetails))
      localStorage.setItem("userAge", userAge.toString())

      // Redirect to payment page
      router.push("/get-started/payment")
    }
  }

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-8">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" onClick={() => router.back()} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Complete Your Registration</h1>
            <p className="text-gray-600">Please provide your details to proceed with your NiFe Card</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Shield className="h-6 w-6" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                {/* Age Validation Warning */}
                {!ageValidation.isValid && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                      <p className="text-red-700 font-semibold">{ageValidation.message}</p>
                    </div>
                  </div>
                )}

                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-semibold text-gray-700">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      value={userDetails.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className={errors.fullName ? "border-red-500" : ""}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="panName" className="text-sm font-semibold text-gray-700">
                      Name as per PAN *
                    </Label>
                    <Input
                      id="panName"
                      value={userDetails.panName}
                      onChange={(e) => handleInputChange("panName", e.target.value)}
                      className={errors.panName ? "border-red-500" : ""}
                      placeholder="Name exactly as on PAN card"
                    />
                    {errors.panName && <p className="text-red-500 text-xs">{errors.panName}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="panNumber" className="text-sm font-semibold text-gray-700">
                      PAN Card Number *
                    </Label>
                    <Input
                      id="panNumber"
                      value={userDetails.panNumber}
                      onChange={(e) => handleInputChange("panNumber", e.target.value.toUpperCase())}
                      className={errors.panNumber ? "border-red-500" : ""}
                      placeholder="ABCDE1234F"
                      maxLength={10}
                    />
                    {errors.panNumber && <p className="text-red-500 text-xs">{errors.panNumber}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="aadharNumber" className="text-sm font-semibold text-gray-700">
                      Aadhar Card Number *
                    </Label>
                    <Input
                      id="aadharNumber"
                      value={userDetails.aadharNumber}
                      onChange={(e) => handleInputChange("aadharNumber", e.target.value.replace(/\D/g, ""))}
                      className={errors.aadharNumber ? "border-red-500" : ""}
                      placeholder="123456789012"
                      maxLength={12}
                    />
                    {errors.aadharNumber && <p className="text-red-500 text-xs">{errors.aadharNumber}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth" className="text-sm font-semibold text-gray-700">
                      Date of Birth *
                    </Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={userDetails.dateOfBirth}
                      onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                      className={errors.dateOfBirth ? "border-red-500" : ""}
                      max={new Date().toISOString().split("T")[0]}
                    />
                    {userAge > 0 && ageValidation.isValid && (
                      <p className="text-green-600 text-xs flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" />
                        Age: {userAge} years (Eligible for selected plan)
                      </p>
                    )}
                    {errors.dateOfBirth && <p className="text-red-500 text-xs">{errors.dateOfBirth}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gender" className="text-sm font-semibold text-gray-700">
                      Gender *
                    </Label>
                    <Select value={userDetails.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                      <SelectTrigger className={errors.gender ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.gender && <p className="text-red-500 text-xs">{errors.gender}</p>}
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={userDetails.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={errors.email ? "border-red-500" : ""}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                  </div>
                </div>

                {/* Address Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Address Information</h3>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-sm font-semibold text-gray-700">
                      Full Address *
                    </Label>
                    <Textarea
                      id="address"
                      value={userDetails.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      className={errors.address ? "border-red-500" : ""}
                      placeholder="Enter your complete address"
                      rows={3}
                    />
                    {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-sm font-semibold text-gray-700">
                        City *
                      </Label>
                      <Input
                        id="city"
                        value={userDetails.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        className={errors.city ? "border-red-500" : ""}
                        placeholder="Enter city"
                      />
                      {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state" className="text-sm font-semibold text-gray-700">
                        State *
                      </Label>
                      <Select value={userDetails.state} onValueChange={(value) => handleInputChange("state", value)}>
                        <SelectTrigger className={errors.state ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          {states.map((state) => (
                            <SelectItem key={state} value={state}>
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.state && <p className="text-red-500 text-xs">{errors.state}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pincode" className="text-sm font-semibold text-gray-700">
                        Pincode *
                      </Label>
                      <Input
                        id="pincode"
                        value={userDetails.pincode}
                        onChange={(e) => handleInputChange("pincode", e.target.value.replace(/\D/g, ""))}
                        className={errors.pincode ? "border-red-500" : ""}
                        placeholder="123456"
                        maxLength={6}
                      />
                      {errors.pincode && <p className="text-red-500 text-xs">{errors.pincode}</p>}
                    </div>
                  </div>
                </div>

                {/* Nominee Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Nominee Information</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nominee" className="text-sm font-semibold text-gray-700">
                        Nominee Name *
                      </Label>
                      <Input
                        id="nominee"
                        value={userDetails.nominee}
                        onChange={(e) => handleInputChange("nominee", e.target.value)}
                        className={errors.nominee ? "border-red-500" : ""}
                        placeholder="Enter nominee name"
                      />
                      {errors.nominee && <p className="text-red-500 text-xs">{errors.nominee}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="nomineeRelation" className="text-sm font-semibold text-gray-700">
                        Relation with Nominee *
                      </Label>
                      <Select
                        value={userDetails.nomineeRelation}
                        onValueChange={(value) => handleInputChange("nomineeRelation", value)}
                      >
                        <SelectTrigger className={errors.nomineeRelation ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select relation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="spouse">Spouse</SelectItem>
                          <SelectItem value="father">Father</SelectItem>
                          <SelectItem value="mother">Mother</SelectItem>
                          <SelectItem value="son">Son</SelectItem>
                          <SelectItem value="daughter">Daughter</SelectItem>
                          <SelectItem value="brother">Brother</SelectItem>
                          <SelectItem value="sister">Sister</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.nomineeRelation && <p className="text-red-500 text-xs">{errors.nomineeRelation}</p>}
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="terms"
                      checked={userDetails.termsAccepted}
                      onCheckedChange={(checked) => handleInputChange("termsAccepted", checked as boolean)}
                      className={errors.termsAccepted ? "border-red-500" : ""}
                    />
                    <Label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed">
                      I agree to the{" "}
                      <a
                        href="/terms-of-use"
                        target="_blank"
                        className="text-purple-600 hover:underline"
                        rel="noreferrer"
                      >
                        Terms & Conditions
                      </a>
                      ,{" "}
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        className="text-purple-600 hover:underline"
                        rel="noreferrer"
                      >
                        Privacy Policy
                      </a>
                      , and authorize NiFe to process my information for insurance and wellness services.
                    </Label>
                  </div>
                  {errors.termsAccepted && <p className="text-red-500 text-xs">{errors.termsAccepted}</p>}
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={!ageValidation.isValid}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-3 text-lg rounded-lg"
                >
                  Proceed to Payment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
                <CardTitle>Registration Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {selectedPlan && (
                  <>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-900">{selectedPlan.name}</h3>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span>Base Coverage:</span>
                          <span>₹{(selectedPlan.baseInsurance / 100000).toFixed(0)}L</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Top-up:</span>
                          <span>₹{(selectedPlan.topUp / 100000).toFixed(0)}L</span>
                        </div>
                        <div className="flex justify-between font-semibold border-t pt-2">
                          <span>Total Coverage:</span>
                          <span>₹{((selectedPlan.baseInsurance + selectedPlan.topUp) / 100000).toFixed(0)}L</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold text-green-600 border-t pt-2">
                          <span>Annual Premium:</span>
                          <span>₹{selectedPlan.premium.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">What's Included</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• 100% Cashless Treatment</li>
                        <li>• 24/7 Tele-consultation</li>
                        <li>• Gold Rewards on Spending</li>
                        <li>• Wellness Marketplace Access</li>
                        <li>• No Co-payment</li>
                      </ul>
                    </div>

                    {userAge > 0 && (
                      <div className={`rounded-lg p-4 ${ageValidation.isValid ? "bg-green-50" : "bg-red-50"}`}>
                        <div className="flex items-center gap-2">
                          {ageValidation.isValid ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <AlertTriangle className="h-5 w-5 text-red-500" />
                          )}
                          <span
                            className={`font-semibold ${ageValidation.isValid ? "text-green-800" : "text-red-800"}`}
                          >
                            Age Verification
                          </span>
                        </div>
                        <p className={`text-sm mt-1 ${ageValidation.isValid ? "text-green-700" : "text-red-700"}`}>
                          {ageValidation.isValid
                            ? `Age ${userAge} years - Eligible for this plan`
                            : ageValidation.message}
                        </p>
                      </div>
                    )}
                  </>
                )}

                <p className="text-xs text-gray-500 text-center">🔒 Your information is secure and encrypted</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
