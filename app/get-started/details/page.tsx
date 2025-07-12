"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, AlertTriangle, CheckCircle, User, CreditCard, MapPin } from "lucide-react"
import Image from "next/image"

export default function DetailsPage() {
  const router = useRouter()
  const [selectedPlan, setSelectedPlan] = useState<any>(null)
  const [formData, setFormData] = useState({
    fullName: "",
    panName: "",
    panNumber: "",
    aadharNumber: "",
    dateOfBirth: "",
    age: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    occupation: "",
  })
  const [errors, setErrors] = useState<any>({})
  const [ageValidation, setAgeValidation] = useState<any>(null)

  useEffect(() => {
    // Get selected plan from localStorage
    const plan = localStorage.getItem("selectedPlan")
    if (!plan) {
      router.push("/get-started")
      return
    }
    setSelectedPlan(JSON.parse(plan))
  }, [router])

  // Calculate age from date of birth
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

  // Validate age against selected plan
  const validateAge = (age: number) => {
    if (!selectedPlan) return null

    const planLimits = {
      Essential: { min: 18, max: 60 },
      Premium: { min: 18, max: 65 },
      Family: { min: 18, max: 65 },
      Senior: { min: 60, max: 75 },
    }

    const limits = planLimits[selectedPlan.name as keyof typeof planLimits]
    if (!limits) return null

    if (age < limits.min || age > limits.max) {
      return {
        valid: false,
        message: `${selectedPlan.name} plan is available for ages ${limits.min}-${limits.max}. Please select a different plan.`,
        suggestedPlan: age > 60 ? "Senior" : age < 18 ? null : "Essential",
      }
    }

    return { valid: true, message: `Age verified for ${selectedPlan.name} plan` }
  }

  const handleDateOfBirthChange = (dob: string) => {
    setFormData((prev) => ({ ...prev, dateOfBirth: dob }))

    if (dob) {
      const age = calculateAge(dob)
      setFormData((prev) => ({ ...prev, age: age.toString() }))

      const validation = validateAge(age)
      setAgeValidation(validation)
    }
  }

  const validateForm = () => {
    const newErrors: any = {}

    // Required field validation
    const requiredFields = [
      "fullName",
      "panName",
      "panNumber",
      "aadharNumber",
      "dateOfBirth",
      "address",
      "city",
      "state",
      "pincode",
    ]

    requiredFields.forEach((field) => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field] = "This field is required"
      }
    })

    // PAN validation
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
    if (formData.panNumber && !panRegex.test(formData.panNumber)) {
      newErrors.panNumber = "Invalid PAN format (e.g., ABCDE1234F)"
    }

    // Aadhar validation
    const aadharRegex = /^[0-9]{12}$/
    if (formData.aadharNumber && !aadharRegex.test(formData.aadharNumber)) {
      newErrors.aadharNumber = "Aadhar number must be 12 digits"
    }

    // Pincode validation
    const pincodeRegex = /^[0-9]{6}$/
    if (formData.pincode && !pincodeRegex.test(formData.pincode)) {
      newErrors.pincode = "Pincode must be 6 digits"
    }

    // Age validation
    if (ageValidation && !ageValidation.valid) {
      newErrors.age = ageValidation.message
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    if (ageValidation && !ageValidation.valid) {
      return
    }

    // Store form data
    localStorage.setItem("userDetails", JSON.stringify(formData))

    // Redirect to payment
    router.push("/get-started/payment")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev: any) => ({ ...prev, [field]: "" }))
    }
  }

  if (!selectedPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <Image src="/images/NiFe-logo.png" alt="NiFe Logo" width={120} height={40} />
            <div className="ml-auto">
              <Badge variant="outline" className="text-sm">
                Step 2 of 3: Personal Details
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Selected Plan Summary */}
          <Card className="mb-8 border-l-4 border-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Selected Plan: {selectedPlan.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Coverage</p>
                  <p className="font-bold text-lg">{selectedPlan.coverage}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Premium</p>
                  <p className="font-bold text-lg">{selectedPlan.premium}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Benefits</p>
                  <p className="text-sm">{selectedPlan.benefits?.slice(0, 2).join(", ")}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Age Validation Alert */}
          {ageValidation && (
            <Alert className={`mb-6 ${ageValidation.valid ? "border-green-500" : "border-red-500"}`}>
              <div className="flex items-center gap-2">
                {ageValidation.valid ? (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                ) : (
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                )}
                <AlertDescription className={ageValidation.valid ? "text-green-700" : "text-red-700"}>
                  {ageValidation.message}
                  {!ageValidation.valid && ageValidation.suggestedPlan && (
                    <Button
                      variant="link"
                      className="p-0 h-auto ml-2 text-blue-600"
                      onClick={() => router.push("/get-started")}
                    >
                      Change Plan
                    </Button>
                  )}
                </AlertDescription>
              </div>
            </Alert>
          )}

          {/* Personal Details Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Details
              </CardTitle>
              <p className="text-gray-600">Please provide accurate information as per your official documents</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Personal Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        placeholder="Enter your full name"
                        className={errors.fullName ? "border-red-500" : ""}
                      />
                      {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <Label htmlFor="panName">Name as per PAN *</Label>
                      <Input
                        id="panName"
                        value={formData.panName}
                        onChange={(e) => handleInputChange("panName", e.target.value)}
                        placeholder="Name exactly as on PAN card"
                        className={errors.panName ? "border-red-500" : ""}
                      />
                      {errors.panName && <p className="text-red-500 text-sm mt-1">{errors.panName}</p>}
                    </div>

                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleDateOfBirthChange(e.target.value)}
                        className={errors.dateOfBirth ? "border-red-500" : ""}
                      />
                      {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
                    </div>

                    <div>
                      <Label htmlFor="age">Age</Label>
                      <Input
                        id="age"
                        value={formData.age}
                        readOnly
                        placeholder="Calculated from DOB"
                        className="bg-gray-50"
                      />
                      {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
                    </div>

                    <div>
                      <Label htmlFor="occupation">Occupation</Label>
                      <Select onValueChange={(value) => handleInputChange("occupation", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select occupation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="salaried">Salaried Employee</SelectItem>
                          <SelectItem value="business">Business Owner</SelectItem>
                          <SelectItem value="professional">Professional</SelectItem>
                          <SelectItem value="retired">Retired</SelectItem>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="homemaker">Homemaker</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Document Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    Document Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="panNumber">PAN Card Number *</Label>
                      <Input
                        id="panNumber"
                        value={formData.panNumber}
                        onChange={(e) => handleInputChange("panNumber", e.target.value.toUpperCase())}
                        placeholder="ABCDE1234F"
                        maxLength={10}
                        className={errors.panNumber ? "border-red-500" : ""}
                      />
                      {errors.panNumber && <p className="text-red-500 text-sm mt-1">{errors.panNumber}</p>}
                    </div>

                    <div>
                      <Label htmlFor="aadharNumber">Aadhar Card Number *</Label>
                      <Input
                        id="aadharNumber"
                        value={formData.aadharNumber}
                        onChange={(e) => handleInputChange("aadharNumber", e.target.value.replace(/\D/g, ""))}
                        placeholder="123456789012"
                        maxLength={12}
                        className={errors.aadharNumber ? "border-red-500" : ""}
                      />
                      {errors.aadharNumber && <p className="text-red-500 text-sm mt-1">{errors.aadharNumber}</p>}
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Address Information
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="address">Full Address *</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        placeholder="Enter your complete address"
                        rows={3}
                        className={errors.address ? "border-red-500" : ""}
                      />
                      {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                          placeholder="Enter city"
                          className={errors.city ? "border-red-500" : ""}
                        />
                        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                      </div>

                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Select onValueChange={(value) => handleInputChange("state", value)}>
                          <SelectTrigger className={errors.state ? "border-red-500" : ""}>
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                            <SelectItem value="arunachal-pradesh">Arunachal Pradesh</SelectItem>
                            <SelectItem value="assam">Assam</SelectItem>
                            <SelectItem value="bihar">Bihar</SelectItem>
                            <SelectItem value="chhattisgarh">Chhattisgarh</SelectItem>
                            <SelectItem value="goa">Goa</SelectItem>
                            <SelectItem value="gujarat">Gujarat</SelectItem>
                            <SelectItem value="haryana">Haryana</SelectItem>
                            <SelectItem value="himachal-pradesh">Himachal Pradesh</SelectItem>
                            <SelectItem value="jharkhand">Jharkhand</SelectItem>
                            <SelectItem value="karnataka">Karnataka</SelectItem>
                            <SelectItem value="kerala">Kerala</SelectItem>
                            <SelectItem value="madhya-pradesh">Madhya Pradesh</SelectItem>
                            <SelectItem value="maharashtra">Maharashtra</SelectItem>
                            <SelectItem value="manipur">Manipur</SelectItem>
                            <SelectItem value="meghalaya">Meghalaya</SelectItem>
                            <SelectItem value="mizoram">Mizoram</SelectItem>
                            <SelectItem value="nagaland">Nagaland</SelectItem>
                            <SelectItem value="odisha">Odisha</SelectItem>
                            <SelectItem value="punjab">Punjab</SelectItem>
                            <SelectItem value="rajasthan">Rajasthan</SelectItem>
                            <SelectItem value="sikkim">Sikkim</SelectItem>
                            <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                            <SelectItem value="telangana">Telangana</SelectItem>
                            <SelectItem value="tripura">Tripura</SelectItem>
                            <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                            <SelectItem value="uttarakhand">Uttarakhand</SelectItem>
                            <SelectItem value="west-bengal">West Bengal</SelectItem>
                            <SelectItem value="delhi">Delhi</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                      </div>

                      <div>
                        <Label htmlFor="pincode">Pincode *</Label>
                        <Input
                          id="pincode"
                          value={formData.pincode}
                          onChange={(e) => handleInputChange("pincode", e.target.value.replace(/\D/g, ""))}
                          placeholder="123456"
                          maxLength={6}
                          className={errors.pincode ? "border-red-500" : ""}
                        />
                        {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-between pt-6">
                  <Button type="button" variant="outline" onClick={() => router.back()}>
                    Back to Plan Selection
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    disabled={ageValidation && !ageValidation.valid}
                  >
                    Proceed to Payment
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
