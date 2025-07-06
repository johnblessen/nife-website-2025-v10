"use client"

import React, { useState, useRef, useEffect } from "react"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { CheckCircle, Shield, Heart, Zap, Star, X } from "lucide-react"
import { useRouter } from 'next/navigation'

const cardTiers = [
  {
    id: "individual",
    name: "Individual Wellness",
    color: "from-purple-500 to-indigo-500",
    annualFee: 3499,
    welcomeBonus: "₹3 Lakh Health Insurance",
    coverage: "Individual",
    benefits: [
      "₹3 Lakh Group Health Insurance",
      "5 free consultations/month",
      "Basic wellness marketplace access",
      "5% hospital cashback",
      "10% pharmacy discount",
      "₹2 Lakh accident insurance",
      "Basic tax benefits",
    ],
  },
  {
    id: "family-protect",
    name: "Family Protect Wellness",
    color: "from-pink-500 to-purple-500",
    annualFee: 6999,
    welcomeBonus: "₹5 Lakh Health Insurance",
    coverage: "2 Adults",
    benefits: [
      "₹5 Lakh Group Health Insurance (2 Adults)",
      "10 free consultations/month",
      "Priority wellness marketplace access",
      "7% hospital cashback",
      "Lenskart Gold Membership",
      "15% pharmacy discount",
      "₹5 Lakh accident insurance",
      "Enhanced tax benefits",
    ],
  },
  {
    id: "premium-family",
    name: "Premium Family Wellness",
    color: "from-yellow-400 to-pink-500",
    annualFee: 9999,
    welcomeBonus: "₹10 Lakh Health Insurance",
    coverage: "2 Adults + 2 Children",
    benefits: [
      "₹10 Lakh Group Health Insurance (2 Adults + 2 Children)",
      "Unlimited Apollo 24/7 consultation",
      "Exclusive priority wellness access",
      "10% hospital cashback",
      "Lenskart Gold + Clove Dental Plan",
      "20% pharmacy discount",
      "₹10 Lakh accident insurance",
      "Maximum tax benefits",
    ],
  },
  {
    id: "platinum-parents",
    name: "Platinum Parents Wellness",
    color: "from-green-400 to-blue-500",
    annualFee: 8999,
    welcomeBonus: "₹10 Lakh Health Insurance",
    coverage: "2 Adults (Senior Care)",
    benefits: [
      "₹10 Lakh Group Health Insurance (2 Adults)",
      "Unlimited Apollo 24/7 + Family consultation",
      "VIP exclusive wellness access",
      "15% hospital cashback",
      "Complete wellness package",
      "25% pharmacy discount",
      "₹10 Lakh accident insurance",
      "Premium tax benefits",
    ],
  },
];

type WellnessPlanSectionProps = {
  selectedPlan: string;
  setSelectedPlan: React.Dispatch<React.SetStateAction<string>>;
  onApply: (planId: string) => void;
};

type MobileVerificationGateProps = {
  selectedPlan: string;
  onVerified: () => void;
};

function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fade-in">
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md p-0 animate-fade-in-up">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-purple-600 transition"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="p-0">
          {children}
        </div>
      </div>
    </div>
  );
}

function WellnessPlanSection({ selectedPlan, setSelectedPlan, onApply }: WellnessPlanSectionProps) {
  return (
    <div className="py-16 bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-300 min-h-[60vh]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight drop-shadow">Choose Your Wellness Plan</h2>
          <p className="text-white/90 max-w-2xl mx-auto text-lg drop-shadow">
            Select the perfect plan for your health and wellness needs. All plans include comprehensive healthcare benefits.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {cardTiers.map((plan) => (
            <div
              key={plan.id}
              className={`group relative rounded-3xl p-1 transition-all duration-300 focus:outline-none ${selectedPlan === plan.id ? 'ring-4 ring-pink-400 scale-105 shadow-2xl' : 'hover:scale-105 hover:shadow-xl'} bg-gradient-to-br ${plan.color}`}
              onClick={() => setSelectedPlan(plan.id)}
              tabIndex={0}
              role="button"
              aria-pressed={selectedPlan === plan.id}
            >
              <div className="flex flex-col h-full w-full bg-white rounded-2xl p-8 transition-all duration-300 group-hover:bg-opacity-95">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">₹{plan.annualFee.toLocaleString()}<span className="text-lg text-gray-500">/year</span></div>
                  <p className="text-gray-600">{plan.coverage}</p>
                </div>
                <ul className="space-y-2 mb-8 flex-1">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full block font-bold py-2 rounded-lg mt-auto transition-all duration-200 ${selectedPlan === plan.id ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg' : 'bg-gray-100 text-purple-700 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 group-hover:text-white'}`}
                  onClick={e => { e.stopPropagation(); onApply(plan.id); }}
                  type="button"
                >
                  {selectedPlan === plan.id ? 'Apply Now' : 'Apply Now'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileVerificationGate({ selectedPlan, onVerified }: MobileVerificationGateProps) {
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  // Start resend timer
  const startResendTimer = () => {
    setResendTimer(30);
    timerRef.current = setInterval(() => {
      setResendTimer(prev => {
        if (prev <= 1) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (otpVerified) {
      onVerified();
    }
  }, [otpVerified, onVerified]);

  return (
    <div className="w-full">
      <div className="max-w-md w-full mx-auto bg-white rounded-xl shadow-none p-8 animate-fade-in-up">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-purple-900 mb-2">Check Your Eligibility!</h2>
          <p className="text-gray-600">Enter your mobile number to get started</p>
        </div>
        
        {!otpSent && (
          <div className="space-y-4 animate-fade-in">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
              <input
                type="tel"
                value={mobile}
                onChange={e => setMobile(e.target.value.replace(/[^0-9]/g, "").slice(0, 10))}
                placeholder="Enter 10-digit mobile number"
                className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                maxLength={10}
              />
            </div>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              disabled={mobile.length !== 10 || otpLoading}
              onClick={() => {
                setOtpLoading(true);
                setOtpError("");
                setTimeout(() => {
                  setOtpSent(true);
                  setOtpLoading(false);
                  startResendTimer();
                }, 1200);
              }}
            >
              {otpLoading ? "Sending OTP..." : "Send OTP"}
            </Button>
            {otpError && <p className="text-sm text-red-600 mt-2 animate-shake">{otpError}</p>}
          </div>
        )}

        {otpSent && !otpVerified && (
          <div className="space-y-4 animate-fade-in">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Enter OTP</label>
              <input
                type="text"
                value={otp}
                onChange={e => setOtp(e.target.value.replace(/[^0-9]/g, "").slice(0, 6))}
                placeholder="Enter 6-digit OTP"
                className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                maxLength={6}
              />
            </div>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              disabled={otp.length !== 6 || otpLoading}
              onClick={() => {
                setOtpLoading(true);
                setOtpError("");
                setTimeout(() => {
                  setOtpVerified(true);
                  setOtpLoading(false);
                }, 1200);
              }}
            >
              {otpLoading ? "Verifying..." : "Verify OTP"}
            </Button>
            {otpError && <p className="text-sm text-red-600 mt-2 animate-shake">{otpError}</p>}
            <div className="text-center">
              <button
                className="text-sm text-purple-600 hover:text-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={resendTimer > 0}
                onClick={() => {
                  setOtpLoading(true);
                  setOtpError("");
                  setTimeout(() => {
                    setOtpLoading(false);
                    startResendTimer();
                  }, 1200);
                }}
              >
                {resendTimer > 0 ? `Resend OTP in ${resendTimer}s` : "Resend OTP"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function GetStartedPage() {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleApply = (planId: string) => {
    setSelectedPlan(planId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOtpVerified = () => {
    router.push(`/get-started/details?plan=${selectedPlan}`);
  };

  return (
    <main>
      <WellnessPlanSection
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        onApply={handleApply}
      />
      <Modal open={showModal} onClose={handleCloseModal}>
        <MobileVerificationGate
          selectedPlan={selectedPlan}
          onVerified={handleOtpVerified}
        />
      </Modal>
    </main>
  );
}
