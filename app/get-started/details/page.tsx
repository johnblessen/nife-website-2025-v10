"use client"
import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import CardComparison from '../../../components/card-comparison';

function CheckoutSummary({ plan, user, onPay }: { plan: any, user: any, onPay: (paymentInfo: any) => void }) {
  const [upiId, setUpiId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePay = () => {
    setError("");
    if (!upiId.match(/^\w+@\w+$/)) {
      setError("Please enter a valid UPI ID (e.g. name@bank)");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onPay({ upiId, transactionId: `TXN${Date.now()}` });
    }, 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full mx-auto mt-10 animate-fade-in-up">
      <h2 className="text-2xl font-bold text-purple-900 mb-4">Checkout Summary</h2>
      <div className="mb-4 text-left">
        <div className="font-semibold text-lg mb-2">Plan: <span className="text-purple-700">{plan?.name}</span></div>
        <div className="mb-2">Annual Fee: <span className="font-bold">₹{plan?.annualFee?.toLocaleString()}</span></div>
        <div className="mb-2">Benefits:</div>
        <ul className="list-disc ml-6 text-sm text-gray-700 mb-4">
          {plan?.benefits?.map((b: string, i: number) => <li key={i}>{b}</li>)}
        </ul>
        <div className="mb-2">Name: <span className="font-semibold">{user?.fullName}</span></div>
        <div className="mb-2">Email: <span className="font-semibold">{user?.email}</span></div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Pay with UPI</label>
        <input
          type="text"
          value={upiId}
          onChange={e => setUpiId(e.target.value)}
          placeholder="yourname@bank"
          className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
        />
        {error && <div className="text-red-600 text-xs mt-2 animate-shake">{error}</div>}
      </div>
      <button
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
        onClick={handlePay}
        disabled={loading}
      >
        {loading ? "Processing..." : `Pay ₹${plan?.annualFee?.toLocaleString()}`}
      </button>
    </div>
  );
}

function Receipt({ plan, user, payment }: { plan: any, user: any, payment: any }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-300">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-lg w-full text-center animate-fade-in-up">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-bounce" />
        <h1 className="text-3xl font-bold text-purple-900 mb-4">Payment Successful!</h1>
        <div className="mb-4 text-left">
          <div className="mb-2">Transaction ID: <span className="font-mono">{payment.transactionId}</span></div>
          <div className="mb-2">Date: {new Date().toLocaleString()}</div>
          <div className="mb-2">Plan: <span className="font-semibold">{plan?.name}</span></div>
          <div className="mb-2">Name: <span className="font-semibold">{user?.fullName}</span></div>
          <div className="mb-2">Email: <span className="font-semibold">{user?.email}</span></div>
          <div className="mb-2">Paid via UPI: <span className="font-mono">{payment.upiId}</span></div>
          <div className="mb-2">Amount: <span className="font-bold">₹{plan?.annualFee?.toLocaleString()}</span></div>
        </div>
        <button
          className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-200"
          onClick={() => window.print()}
        >
          Download/Print Receipt
        </button>
      </div>
    </div>
  );
}

export default function RegisterDetailsPage() {
  const [showFlow, setShowFlow] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [payment, setPayment] = useState<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowFlow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // This function will be called from CardComparison when registration is done
  const handleRegistrationComplete = (plan: any, userData: any) => {
    setSelectedPlan(plan);
    setUser(userData);
    setShowCheckout(true);
  };

  const handlePay = (paymentInfo: any) => {
    setPayment(paymentInfo);
    setShowReceipt(true);
  };

  if (showReceipt && selectedPlan && user && payment) {
    return <Receipt plan={selectedPlan} user={user} payment={payment} />;
  }

  if (showCheckout && selectedPlan && user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-300 py-10">
        <CheckoutSummary plan={selectedPlan} user={user} onPay={handlePay} />
      </div>
    );
  }

  if (showFlow) {
    // Pass a prop to CardComparison to call handleRegistrationComplete when done
    return <CardComparison onComplete={handleRegistrationComplete} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-300">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-lg w-full text-center animate-fade-in-up">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-bounce" />
        <h1 className="text-3xl font-bold text-purple-900 mb-4">Registration Successful!</h1>
        <p className="text-gray-700 mb-6">You have successfully verified your mobile number. Please continue your registration below.</p>
      </div>
    </div>
  );
} 