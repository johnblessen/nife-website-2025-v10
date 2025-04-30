"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle, ChevronRight, Shield, CreditCard, Gift, Clock, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

interface SignupModalProps {
  isOpen: boolean
  onClose: () => void
  initialStep?: number
}

export function SignupModal({ isOpen, onClose, initialStep = 1 }: SignupModalProps) {
  const [step, setStep] = useState(initialStep)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    plan: "premium",
    termsAccepted: false,
  })
  const [otpSent, setOtpSent] = useState(false)
  const [otpVerified, setOtpVerified] = useState(false)
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [timeLeft, setTimeLeft] = useState(0)
  const router = useRouter()

  // Save progress to localStorage
  useEffect(() => {
    if (isOpen && step > 1) {
      localStorage.setItem("signupProgress", JSON.stringify({ step, formData }))
    }
  }, [step, formData, isOpen])

  // Timer for OTP
  useEffect(() => {
    if (otpSent && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [otpSent, timeLeft])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handlePlanChange = (value: string) => {
    setFormData({
      ...formData,
      plan: value,
    })
  }

  const sendOTP = () => {
    // Simulate OTP sending
    setOtpSent(true)
    setTimeLeft(120) // 2 minutes
  }

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`)
        if (nextInput) nextInput.focus()
      }

      // Check if OTP is complete
      if (newOtp.join("").length === 6) {
        verifyOTP(newOtp.join(""))
      }
    }
  }

  const verifyOTP = (otpValue: string) => {
    // Simulate OTP verification
    if (otpValue === "123456") {
      setOtpVerified(true)
    }
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    localStorage.removeItem("signupProgress")
    router.push("/registration-success")
    onClose()
  }

  const formatTimeLeft = () => {
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  // Timeline steps
  const timelineSteps = [
    { number: 1, title: "Details" },
    { number: 2, title: "Plan" },
    { number: 3, title: "Review" },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
              boxShadow: "0 20px 60px -15px rgba(0,0,0,0.3), 0 10px 30px -10px rgba(128, 90, 213, 0.4)",
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Close signup form"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Limited time offer banner */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 px-4 text-center text-sm font-bold flex items-center justify-center">
              <Clock className="h-4 w-4 mr-2" />
              Limited time offer: Sign up today and get ₹3L health insurance coverage!
            </div>

            {/* Timeline */}
            <div className="px-6 pt-6 pb-2">
              <div className="flex items-center justify-between mb-6">
                {timelineSteps.map((timelineStep, index) => (
                  <div key={timelineStep.number} className="flex flex-col items-center relative">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        step >= timelineStep.number ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {step > timelineStep.number ? <CheckCircle className="h-5 w-5" /> : timelineStep.number}
                    </div>
                    <span className="mt-1 text-xs font-medium text-gray-600">{timelineStep.title}</span>

                    {/* Connector line */}
                    {index < timelineSteps.length - 1 && (
                      <div className="absolute top-4 left-8 w-[calc(100%-2rem)] h-0.5 -translate-y-1/2">
                        <div className={`h-full ${step > timelineStep.number ? "bg-purple-600" : "bg-gray-200"}`} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-center mb-1">Join NiFe Health Today</h2>
              <p className="text-center text-gray-600 mb-6">
                Protect your family's health and secure your financial future
              </p>
            </div>

            <form onSubmit={handleSubmit} className="px-6 pb-6">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <div className="flex gap-2">
                      <Input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="Enter your 10-digit mobile number"
                        required
                        className="h-11"
                      />
                      {!otpSent ? (
                        <Button
                          type="button"
                          onClick={sendOTP}
                          className="whitespace-nowrap h-11 bg-purple-600 hover:bg-purple-700"
                          disabled={!formData.mobile || formData.mobile.length !== 10}
                        >
                          Send OTP
                        </Button>
                      ) : (
                        <Button type="button" variant="outline" disabled className="whitespace-nowrap h-11">
                          {timeLeft > 0 ? formatTimeLeft() : "Resend OTP"}
                        </Button>
                      )}
                    </div>
                  </div>

                  {otpSent && (
                    <div className="space-y-2">
                      <Label htmlFor="otp">Enter OTP</Label>
                      <div className="flex justify-between gap-2">
                        {otp.map((digit, index) => (
                          <Input
                            key={index}
                            id={`otp-${index}`}
                            value={digit}
                            onChange={(e) => handleOtpChange(index, e.target.value)}
                            className="h-12 w-12 text-center text-lg font-medium"
                            maxLength={1}
                            inputMode="numeric"
                            pattern="[0-9]*"
                          />
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        OTP sent to {formData.mobile}. Valid for {formatTimeLeft()}
                      </p>
                    </div>
                  )}

                  <div className="pt-4 flex justify-end">
                    <Button
                      type="button"
                      onClick={nextStep}
                      disabled={!otpVerified}
                      className="bg-purple-600 hover:bg-purple-700 h-11"
                    >
                      Continue <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div>
                    <h3 className="text-lg font-medium mb-4">Select Your Membership Plan</h3>

                    <RadioGroup value={formData.plan} onValueChange={handlePlanChange} className="space-y-4">
                      <div
                        className={`relative rounded-lg border p-4 transition-all ${
                          formData.plan === "basic"
                            ? "border-purple-600 bg-purple-50 shadow-[0_0_0_2px_rgba(128,90,213,0.2)]"
                            : "border-gray-200 hover:border-purple-300"
                        }`}
                      >
                        <RadioGroupItem value="basic" id="basic" className="absolute right-4 top-4" />
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <Label htmlFor="basic" className="text-base font-medium">
                              Basic Plan
                            </Label>
                            <div className="text-right">
                              <span className="text-lg font-bold">₹3,499</span>
                              <span className="text-sm text-gray-500">/year</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">Essential coverage for individuals</p>
                          <ul className="space-y-1 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                              <span>₹3L health insurance coverage</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                              <span>Hospital discounts up to 15%</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                              <span>RuPay prepaid card with 1% gold rewards</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div
                        className={`relative rounded-lg border p-4 transition-all ${
                          formData.plan === "premium"
                            ? "border-purple-600 bg-purple-50 shadow-[0_0_0_2px_rgba(128,90,213,0.2)]"
                            : "border-gray-200 hover:border-purple-300"
                        }`}
                      >
                        <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-purple-800">
                          Most Popular
                        </Badge>
                        <RadioGroupItem value="premium" id="premium" className="absolute right-4 top-4" />
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <Label htmlFor="premium" className="text-base font-medium">
                              Premium Plan
                            </Label>
                            <div className="text-right">
                              <span className="text-lg font-bold">₹5,999</span>
                              <span className="text-sm text-gray-500">/year</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">Enhanced coverage for families</p>
                          <ul className="space-y-1 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                              <span>₹5L health insurance coverage</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                              <span>Hospital discounts up to 20%</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                              <span>RuPay prepaid card with 1% gold rewards</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                              <span>Lenskart gold membership</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div
                        className={`relative rounded-lg border p-4 transition-all ${
                          formData.plan === "elite"
                            ? "border-purple-600 bg-purple-50 shadow-[0_0_0_2px_rgba(128,90,213,0.2)]"
                            : "border-gray-200 hover:border-purple-300"
                        }`}
                      >
                        <RadioGroupItem value="elite" id="elite" className="absolute right-4 top-4" />
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <Label htmlFor="elite" className="text-base font-medium">
                              Elite Plan
                            </Label>
                            <div className="text-right">
                              <span className="text-lg font-bold">₹9,999</span>
                              <span className="text-sm text-gray-500">/year</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">Comprehensive coverage for extended families</p>
                          <ul className="space-y-1 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                              <span>₹10L health insurance coverage</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                              <span>Hospital discounts up to 25%</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                              <span>Premium RuPay card with 1.5% gold rewards</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                              <span>Lenskart gold & Clove memberships</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <Button type="button" variant="outline" onClick={prevStep} className="h-11">
                      Back
                    </Button>
                    <Button type="button" onClick={nextStep} className="bg-purple-600 hover:bg-purple-700 h-11">
                      Continue <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="font-medium">{formData.fullName}</p>
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm text-gray-500">Email Address</p>
                        <p className="font-medium">{formData.email}</p>
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm text-gray-500">Mobile Number</p>
                        <p className="font-medium">
                          {formData.mobile} <span className="text-green-600 text-xs">(Verified)</span>
                        </p>
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm text-gray-500">Selected Plan</p>
                        <p className="font-medium capitalize">{formData.plan} Plan</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
                      <h4 className="font-medium mb-2">Plan Benefits</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-start gap-2">
                          <Shield className="h-5 w-5 text-purple-600" />
                          <div>
                            <p className="font-medium">Health Insurance</p>
                            <p className="text-sm text-gray-600">
                              {formData.plan === "basic" && "₹3L coverage"}
                              {formData.plan === "premium" && "₹5L coverage"}
                              {formData.plan === "elite" && "₹10L coverage"}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <CreditCard className="h-5 w-5 text-purple-600" />
                          <div>
                            <p className="font-medium">RuPay Card</p>
                            <p className="text-sm text-gray-600">
                              {formData.plan === "elite" ? "Premium card" : "Standard card"}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <Gift className="h-5 w-5 text-purple-600" />
                          <div>
                            <p className="font-medium">Gold Rewards</p>
                            <p className="text-sm text-gray-600">
                              {formData.plan === "elite" ? "1.5% on transactions" : "1% on transactions"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* FOMO section */}
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-yellow-800">Limited Time Offer</p>
                        <p className="text-sm text-gray-700">
                          Our special promotion ends in 24 hours. Join now to lock in current rates and receive 3 Lac
                          of free health insurance coverage!
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Checkbox
                        id="terms"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            termsAccepted: checked as boolean,
                          })
                        }
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the Terms of Service and Privacy Policy
                        </label>
                        <p className="text-sm text-gray-500">
                          By checking this box, you agree to our Terms of Service and Privacy Policy.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <Button type="button" variant="outline" onClick={prevStep} className="h-11">
                      Back
                    </Button>
                    <Button
                      type="submit"
                      disabled={!formData.termsAccepted}
                      className="bg-purple-600 hover:bg-purple-700 h-11"
                    >
                      Complete Registration
                    </Button>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
