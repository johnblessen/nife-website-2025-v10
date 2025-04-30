"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, Search, ThumbsUp, ThumbsDown, Copy, Share2 } from "lucide-react"
import VapiAssistant from "@/components/vapi-assistant"

const FAQItem = ({
  question,
  answer,
  category,
  colorClass = "bg-purple-100",
}: {
  question: string
  answer: string
  category: string
  colorClass?: string
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [helpful, setHelpful] = useState<boolean | null>(null)

  return (
    <div className={`rounded-lg ${colorClass} p-4 transition-all duration-200 hover:shadow-md`}>
      <button className="flex w-full items-center justify-between text-left" onClick={() => setIsOpen(!isOpen)}>
        <span className="font-semibold">{question}</span>
        <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="mt-4 space-y-4">
          <div className="text-gray-700">
            <p>{answer}</p>
          </div>
          <div className="border-t border-gray-200 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Was this helpful?</span>
              <Button
                variant="outline"
                size="sm"
                className={`h-8 px-2 ${helpful === true ? "bg-green-100 border-green-300" : ""}`}
                onClick={(e) => {
                  e.stopPropagation()
                  setHelpful(true)
                }}
              >
                <ThumbsUp className="h-4 w-4 mr-1" /> Yes
              </Button>
              <Button
                variant="outline"
                size="sm"
                className={`h-8 px-2 ${helpful === false ? "bg-red-100 border-red-300" : ""}`}
                onClick={(e) => {
                  e.stopPropagation()
                  setHelpful(false)
                }}
              >
                <ThumbsDown className="h-4 w-4 mr-1" /> No
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8 px-2">
                <Copy className="h-4 w-4 mr-1" /> Copy
              </Button>
              <Button variant="outline" size="sm" className="h-8 px-2">
                <Share2 className="h-4 w-4 mr-1" /> Share
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className="mt-2 flex justify-between items-center">
        <span className="text-xs text-gray-500">{category}</span>
        {!isOpen && (
          <Button
            variant="ghost"
            size="sm"
            className="p-0 h-auto text-xs font-medium"
            onClick={() => setIsOpen(!isOpen)}
          >
            Read More
          </Button>
        )}
      </div>
    </div>
  )
}

export default function FAQsPage() {
  const healthInsuranceFAQs = [
    {
      question: "What health insurance is included with my NiFe membership?",
      answer:
        "Your NiFe membership includes complimentary health insurance coverage of ₹3L with Basic plan, ₹5L with Premium plan, or ₹10L with Elite plan. The coverage is active from day one with no waiting period and no medical checkup required.",
      category: "Coverage",
      colorClass: "bg-green-100",
    },
    {
      question: "Is there a waiting period for using my health insurance?",
      answer:
        "No, there is no waiting period for the basic health insurance included with your membership. Your coverage is active from day one. However, for top-up insurance plans, there is a 12-month waiting period.",
      category: "Coverage",
      colorClass: "bg-green-100",
    },
    {
      question: "Do I need a medical checkup to get insurance coverage?",
      answer:
        "No, one of the key benefits of NiFe's health insurance is that no medical checkup is required to get coverage. This applies to both the basic coverage included with your membership and the top-up insurance options.",
      category: "Eligibility",
      colorClass: "bg-green-100",
    },
    {
      question: "What hospitals are included in the NiFe network?",
      answer:
        "NiFe has partnerships with 200+ top hospitals across India including Apollo, Manipal, Fortis, Gleneagles, Sparsh, Altius, Aster, MGM, Global, and many more. Members receive discounts of up to 25% on outpatient services at these hospitals.",
      category: "Network",
      colorClass: "bg-green-100",
    },
    {
      question: "How do I upgrade my insurance coverage?",
      answer:
        "You can enhance your coverage with our top-up insurance options available in your dashboard. We offer plans from ₹10L to ₹1 Crore at rates up to 40% below market price. No medical checkup is required, though there is a 12-month waiting period for these top-up plans.",
      category: "Top-up",
      colorClass: "bg-green-100",
    },
    {
      question: "How many family members are covered under tele-consultation?",
      answer:
        "Your NiFe membership includes unlimited tele-consultation benefits for a family of up to 6 members. This means you and five other family members can access medical consultations remotely whenever needed.",
      category: "Benefits",
      colorClass: "bg-green-100",
    },
    {
      question: "What is the process for making a claim?",
      answer:
        "Making a claim is simple. You can initiate a claim through your NiFe account dashboard, our mobile app, or by calling our 24/7 customer support. Our team will guide you through the documentation needed and process your claim within 48-72 hours.",
      category: "Claims",
      colorClass: "bg-green-100",
    },
    {
      question: "Are pre-existing conditions covered?",
      answer:
        "Pre-existing conditions are covered after a waiting period of 12 months for the basic insurance included with your membership. For top-up insurance plans, the waiting period for pre-existing conditions is 24 months.",
      category: "Coverage",
      colorClass: "bg-green-100",
    },
  ]

  const rupayCardFAQs = [
    {
      question: "What is the NiFe RuPay card?",
      answer:
        "The NiFe RuPay card is a prepaid card that comes with your membership. It works like any other prepaid card - you can load money and use it for transactions anywhere RuPay is accepted. The unique benefit is that 1% of every transaction is automatically invested in digital gold.",
      category: "Basics",
      colorClass: "bg-blue-100",
    },
    {
      question: "How do I load money onto my NiFe RuPay card?",
      answer:
        "You can load money onto your card through multiple methods: UPI transfer, net banking, debit/credit card, or by setting up auto-reload. The minimum amount for loading is ₹500, and there are no loading fees.",
      category: "Usage",
      colorClass: "bg-blue-100",
    },
    {
      question: "Is there a limit to how much I can load or spend?",
      answer:
        "Yes, the default monthly loading limit is ₹2,00,000. The daily spending limit is set at ₹50,000 for point-of-sale transactions and ₹25,000 for online transactions. You can adjust these limits in your account settings based on your needs.",
      category: "Limits",
      colorClass: "bg-blue-100",
    },
    {
      question: "How do I earn digital gold rewards with my card?",
      answer:
        "Every time you make a purchase using your NiFe RuPay card, 1% of the transaction amount is automatically invested in digital gold. For Elite plan members, this reward is 1.5%. These rewards are credited to your digital gold wallet within 24 hours of the transaction.",
      category: "Rewards",
      colorClass: "bg-blue-100",
    },
    {
      question: "Can I use my NiFe RuPay card internationally?",
      answer:
        "Yes, your NiFe RuPay card can be used internationally at merchants that accept RuPay. However, international usage needs to be enabled in your account settings. A foreign transaction fee of 2% applies to international transactions.",
      category: "Usage",
      colorClass: "bg-blue-100",
    },
    {
      question: "What should I do if my card is lost or stolen?",
      answer:
        "If your card is lost or stolen, you should immediately lock your card through the NiFe app or dashboard. Then contact our customer support to report the loss and request a replacement card. Your card balance is safe and will be transferred to your new card.",
      category: "Security",
      colorClass: "bg-blue-100",
    },
    {
      question: "Are there any transaction fees or monthly charges?",
      answer:
        "There are no monthly maintenance fees for your NiFe RuPay card. Domestic transactions are free, while international transactions incur a 2% fee. ATM withdrawals cost ₹20 per transaction after the first 3 free withdrawals each month.",
      category: "Fees",
      colorClass: "bg-blue-100",
    },
    {
      question: "How is my card related to my health insurance?",
      answer:
        "Your NiFe RuPay card serves as your health insurance card as well. It contains your membership details and is recognized by hospitals in our network for cashless treatments. Simply present your card at our partner hospitals to access your insurance benefits and discounts.",
      category: "Integration",
      colorClass: "bg-blue-100",
    },
  ]

  const digitalGoldFAQs = [
    {
      question: "How does the digital gold reward system work?",
      answer:
        "When you use your NiFe RuPay card for transactions, 1% of the spending amount (1.5% for Elite members) is automatically invested in digital gold at the day's market rate. The gold is stored in your name in secure vaults, and you can track its value in real-time through your dashboard.",
      category: "Rewards",
      colorClass: "bg-yellow-100",
    },
    {
      question: "Is the digital gold physically backed?",
      answer:
        "Yes, all digital gold in your account is 100% backed by physical 24K gold of 99.9% purity. The gold is stored in secure, insured vaults on your behalf, and you can convert it to physical gold coins or bars at any time.",
      category: "Storage",
      colorClass: "bg-yellow-100",
    },
    {
      question: "How do I convert my digital gold to physical gold?",
      answer:
        "You can convert your digital gold to physical gold through your NiFe dashboard or app. The minimum quantity for conversion is 0.5 grams. You can choose from various coin and bar denominations, and the physical gold will be delivered to your address after verification.",
      category: "Conversion",
      colorClass: "bg-yellow-100",
    },
    {
      question: "Can I sell my digital gold or withdraw its value?",
      answer:
        "Yes, you can sell your digital gold at any time through your NiFe dashboard or app. The current market value will be credited to your linked bank account within 1-2 business days. There's no lock-in period, and you can sell as little as 0.001 grams.",
      category: "Liquidation",
      colorClass: "bg-yellow-100",
    },
    {
      question: "Are there any fees for buying or selling digital gold?",
      answer:
        "There are no buying fees as the gold is received as rewards. For selling digital gold, there's a small processing fee of 0.5% of the transaction value. Physical gold conversion incurs making charges depending on the design and size of coins or bars.",
      category: "Fees",
      colorClass: "bg-yellow-100",
    },
    {
      question: "Can I invest additional money in digital gold?",
      answer:
        "Yes, besides the rewards earned through card transactions, you can make additional investments in digital gold. You can start a Systematic Investment Plan (SIP) with as little as ₹100 per month or make one-time purchases through your NiFe dashboard.",
      category: "Investment",
      colorClass: "bg-yellow-100",
    },
    {
      question: "How is the price of digital gold determined?",
      answer:
        "The price of digital gold is based on the current market rate of 24K gold. It's updated in real-time and includes a small premium for storage and insurance. The buying and selling prices are transparent and visible in your dashboard before any transaction.",
      category: "Pricing",
      colorClass: "bg-yellow-100",
    },
    {
      question: "Is my digital gold investment safe and insured?",
      answer:
        "Yes, your digital gold investment is both safe and fully insured. The physical gold backing your digital holdings is stored in secure vaults managed by our partners, with comprehensive insurance coverage against theft, damage, or loss.",
      category: "Security",
      colorClass: "bg-yellow-100",
    },
  ]

  const membershipFAQs = [
    {
      question: "How much does NiFe membership cost?",
      answer:
        "NiFe membership starts at ₹3,499 per year for the Basic plan. We also offer Premium (₹5,999/year) and Elite (₹9,999/year) plans with enhanced benefits and higher insurance coverage.",
      category: "Pricing",
      colorClass: "bg-purple-100",
    },
    {
      question: "Can I cancel my membership? Is there a refund policy?",
      answer:
        "Yes, you can cancel your membership within 15 days of purchase for a full refund if you haven't utilized any benefits. After 15 days, refunds are prorated based on the remaining membership period, minus any benefits used.",
      category: "Cancellation",
      colorClass: "bg-purple-100",
    },
    {
      question: "How do I access the hospital discounts?",
      answer:
        "Simply present your NiFe card at any of our partner hospitals to automatically receive the applicable discounts on outpatient services. The discounts are applied directly at billing, with no paperwork needed from your side.",
      category: "Benefits",
      colorClass: "bg-purple-100",
    },
    {
      question: "Can I upgrade my membership plan?",
      answer:
        "Yes, you can upgrade your membership plan at any time. When upgrading, you'll pay the difference between your current plan and the new plan, prorated for the remaining membership period. Your enhanced benefits become active immediately.",
      category: "Changes",
      colorClass: "bg-purple-100",
    },
    {
      question: "How do I access tele-consultation services?",
      answer:
        "You can access tele-consultations through the NiFe app or website. Simply select the specialty you need, choose from available doctors, and schedule a consultation. You can have video or audio consultations and receive prescriptions digitally.",
      category: "Services",
      colorClass: "bg-purple-100",
    },
    {
      question: "What gift cards are available in the marketplace?",
      answer:
        "Our marketplace offers gift cards from over 100 popular brands across categories like shopping, entertainment, dining, and travel. You can get up to 25% discount on these gift cards and also earn digital gold rewards when purchasing through your NiFe card.",
      category: "Marketplace",
      colorClass: "bg-purple-100",
    },
    {
      question: "How does the referral program work?",
      answer:
        "When you refer friends or family to NiFe, you earn ₹500 for each successful referral who signs up and activates their membership. Your referral also gets ₹500 off their first year's membership fee. There's no limit to how many people you can refer.",
      category: "Referrals",
      colorClass: "bg-purple-100",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "Our customer support is available 24/7 through multiple channels. You can reach us via phone at 1800-123-4567, email at support@NiFecard.com, live chat on our website or app, or through our AI assistant that can answer common questions instantly.",
      category: "Support",
      colorClass: "bg-purple-100",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-white/80 mb-8">
              Find answers to common questions about NiFe's services, benefits, and features.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Input type="search" placeholder="Search for answers..." className="pl-10 py-6 text-black rounded-full" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <Tabs defaultValue="health" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 max-w-3xl mx-auto mb-8">
            <TabsTrigger value="health">Health Insurance</TabsTrigger>
            <TabsTrigger value="card">RuPay Card</TabsTrigger>
            <TabsTrigger value="gold">Digital Gold</TabsTrigger>
            <TabsTrigger value="membership">Membership</TabsTrigger>
          </TabsList>

          <TabsContent value="health" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {healthInsuranceFAQs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  category={faq.category}
                  colorClass={faq.colorClass}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="card" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rupayCardFAQs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  category={faq.category}
                  colorClass={faq.colorClass}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gold" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {digitalGoldFAQs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  category={faq.category}
                  colorClass={faq.colorClass}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="membership" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {membershipFAQs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  category={faq.category}
                  colorClass={faq.colorClass}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Still Have Questions */}
        <div className="mt-16 bg-white rounded-xl shadow-sm p-8 text-center">
          <h3 className="text-2xl font-bold text-purple-700 mb-4">Still Have Questions?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            If you couldn't find the answer you were looking for, our support team is here to help. Contact us through
            any of the channels below.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-purple-600 hover:bg-purple-700">Contact Support</Button>
            <Button variant="outline">Schedule a Call</Button>
            <Button variant="outline">Live Chat</Button>
          </div>
        </div>
      </div>
      <VapiAssistant />
    </main>
  )
}
