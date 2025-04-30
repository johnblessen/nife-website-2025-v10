"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, Search, ThumbsUp, ThumbsDown, Copy, Share2, HelpCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
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

export default function FAQResources() {
  const [searchTerm, setSearchTerm] = useState("")

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
  ]

  const allFAQs = [...healthInsuranceFAQs, ...rupayCardFAQs, ...digitalGoldFAQs, ...membershipFAQs]

  const filteredFAQs = allFAQs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="max-w-2xl text-gray-600">
            Find answers to common questions about NiFe's services, benefits, and features.
          </p>
        </div>

        <div className="relative max-w-xl mx-auto mb-10">
          <Input
            type="search"
            placeholder="Search for answers..."
            className="pl-10 py-6 text-black rounded-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        {searchTerm ? (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Search Results</h3>
            {filteredFAQs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredFAQs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    category={faq.category}
                    colorClass={faq.colorClass}
                  />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">No results found</h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any FAQs matching your search term. Try different keywords or browse our
                    categories.
                  </p>
                  <Button variant="outline" onClick={() => setSearchTerm("")}>
                    Clear Search
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        ) : (
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
        )}

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
    </section>
  )
}
