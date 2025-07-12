"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { UserPlus } from "lucide-react"
import { useRouter } from "next/navigation"

interface SignupModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [mobile, setMobile] = useState("")
  const [referralCode, setReferralCode] = useState("")
  const [otp, setOtp] = useState("")
  const [showOtp, setShowOtp] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSendOtp = () => {
    if (mobile.length === 10) {
      setLoading(true)
      setTimeout(() => {
        setShowOtp(true)
        setLoading(false)
      }, 2000)
    }
  }

  const handleVerifyOtp = () => {
    if (otp === "123456") {
      localStorage.setItem("isLoggedIn", "true")
      localStorage.setItem("userMobile", mobile)
      if (referralCode) {
        localStorage.setItem("referralCode", referralCode)
      }
      onClose()
      router.push("/dashboard")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
              <UserPlus className="h-8 w-8 text-white" />
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold text-center text-purple-900">Join NiFe Revolution!</DialogTitle>
          <p className="text-purple-700 text-center mt-2">Get instant access to ₹3L health coverage + gold rewards</p>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {!showOtp ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="mobile" className="text-purple-800 font-semibold">
                  Mobile Number
                </Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="border-purple-300 focus:border-purple-500 focus:ring-purple-500"
                  maxLength={10}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="referral" className="text-purple-800 font-semibold">
                  Referral Code (Optional)
                </Label>
                <Input
                  id="referral"
                  type="text"
                  placeholder="Enter referral code if you have one"
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value)}
                  className="border-purple-300 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              <Button
                onClick={handleSendOtp}
                disabled={mobile.length !== 10 || loading}
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-3 rounded-lg"
              >
                {loading ? "Sending OTP..." : "Send OTP"}
              </Button>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <Label htmlFor="otp" className="text-purple-800 font-semibold">
                  Enter OTP
                </Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="border-purple-300 focus:border-purple-500 focus:ring-purple-500"
                  maxLength={6}
                />
                <p className="text-sm text-purple-600">OTP sent to +91 {mobile}</p>
              </div>

              <Button
                onClick={handleVerifyOtp}
                disabled={otp.length !== 6}
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-3 rounded-lg"
              >
                Verify & Continue
              </Button>

              <Button
                variant="outline"
                onClick={() => setShowOtp(false)}
                className="w-full border-purple-300 text-purple-600 hover:bg-purple-50"
              >
                Change Mobile Number
              </Button>
            </>
          )}

          <p className="text-xs text-purple-600 text-center">
            By continuing, you agree to our Terms & Conditions and Privacy Policy
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
