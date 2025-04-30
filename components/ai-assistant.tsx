"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SendIcon, User, Bot } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

const INITIAL_MESSAGES: Message[] = [
  {
    role: "assistant",
    content:
      "Hello! I'm the NiFe AI assistant. How can I help you with information about NiFe's health insurance, wellness benefits, or RuPay card?",
  },
]

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      let response = ""

      if (input.toLowerCase().includes("insurance")) {
        response =
          "NiFe provides complimentary health insurance worth ₹3L, ₹5L, or ₹10L depending on your membership plan. There's no health checkup required, and coverage starts from day one with no waiting period. You can also get top-up insurance up to ₹50L at a 40% discount compared to market rates."
      } else if (input.toLowerCase().includes("hospital") || input.toLowerCase().includes("discount")) {
        response =
          "NiFe has partnerships with top hospitals like Apollo, Manipal, Fortis, and many more. Members get up to 25% discount on outpatient services. Additionally, you get up to 15% discount on medicines and up to 30% discount on health checkups."
      } else if (input.toLowerCase().includes("card") || input.toLowerCase().includes("rupay")) {
        response =
          "The NiFe RuPay prepaid card allows you to make transactions everywhere in your daily life. For every swipe, you earn 1% reward in the form of digital gold. This means 1% of your spending is automatically invested in digital gold, which can be converted to physical gold or liquidated anytime."
      } else if (input.toLowerCase().includes("membership") || input.toLowerCase().includes("cost")) {
        response =
          "NiFe membership starts at ₹3,499 per year for the Basic plan. We also offer Premium (₹5,999/year) and Elite (₹9,999/year) plans with enhanced benefits and higher insurance coverage."
      } else if (input.toLowerCase().includes("digital gold") || input.toLowerCase().includes("reward")) {
        response =
          "With every transaction using your NiFe RuPay card, 1% of your spending is automatically invested in digital gold. You can also start a SIP in digital gold from as low as ₹100. The digital gold can be converted to physical gold or liquidated whenever you need."
      } else {
        response =
          "Thank you for your question. NiFe provides a holistic wellness membership that takes care of both health and wealth. We offer complimentary health insurance, hospital discounts, tele-consultation, and a RuPay prepaid card with digital gold rewards. Is there something specific about these services you'd like to know more about?"
      }

      const assistantMessage: Message = { role: "assistant", content: response }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <Card className="w-full h-[400px] flex flex-col">
      <CardContent className="flex flex-col h-full p-4">
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`flex items-start gap-2 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === "user" ? "bg-purple-100" : "bg-purple-600"
                  }`}
                >
                  {message.role === "user" ? (
                    <User className="h-4 w-4 text-purple-600" />
                  ) : (
                    <Bot className="h-4 w-4 text-white" />
                  )}
                </div>
                <div
                  className={`rounded-lg p-3 ${
                    message.role === "user" ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-start gap-2 max-w-[80%]">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="rounded-lg p-3 bg-gray-100 text-gray-800">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about NiFe..."
            className="w-full rounded-full border border-gray-300 py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-1 top-1 h-7 w-7 rounded-full p-0 flex items-center justify-center bg-purple-600 hover:bg-purple-700"
          >
            <SendIcon className="h-4 w-4 text-white" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
