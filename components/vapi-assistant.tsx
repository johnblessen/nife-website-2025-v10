"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Phone, X, Minimize2, Maximize2 } from "lucide-react"

export default function VapiAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [activeTab, setActiveTab] = useState<"chat" | "call">("chat")
  const [messages, setMessages] = useState<Array<{ type: "user" | "bot"; text: string }>>([
    { type: "bot", text: "👋 Hi there! I'm NiFe's AI Assistant. How can I help you today?" },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  // Initialize Vapi if needed
  useEffect(() => {
    // This would be where you would initialize the Vapi SDK
    // For now, we'll just mock the behavior
  }, [])

  const toggleOpen = () => {
    setIsOpen(!isOpen)
    setIsMinimized(false)
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    setMessages([...messages, { type: "user", text: inputValue }])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      let response = ""

      if (inputValue.toLowerCase().includes("insurance") || inputValue.toLowerCase().includes("coverage")) {
        response =
          "Our health insurance provides coverage of ₹3L, ₹5L, or ₹10L depending on your plan. There's no health checkup required and coverage starts from day one with no waiting period."
      } else if (inputValue.toLowerCase().includes("card") || inputValue.toLowerCase().includes("rupay")) {
        response =
          "The NiFe RuPay card is a prepaid card that can be used anywhere RuPay is accepted. You earn 1% of every transaction in digital gold, helping you build wealth while you spend."
      } else if (inputValue.toLowerCase().includes("gold") || inputValue.toLowerCase().includes("reward")) {
        response =
          "With our digital gold rewards, 1% of every transaction is automatically invested in digital gold. You can convert it to physical gold or liquidate it whenever you need."
      } else if (inputValue.toLowerCase().includes("hospital") || inputValue.toLowerCase().includes("discount")) {
        response =
          "We've partnered with 200+ top hospitals including Apollo, Manipal, and Fortis to provide discounts of up to 25% on outpatient services for our members."
      } else {
        response =
          "Thank you for your question. I'd be happy to help with information about our health insurance, RuPay card, or digital gold rewards. Could you please provide more details about what you'd like to know?"
      }

      setMessages((prev) => [...prev, { type: "bot", text: response }])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  const startCall = () => {
    // This would integrate with the Vapi call API
    alert("Starting a call with our AI assistant...")
    // Real implementation would use the Vapi SDK to initiate a call
  }

  if (!isOpen) {
    return (
      <Button
        onClick={toggleOpen}
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg z-50 flex items-center justify-center"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </Button>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card
        className={`w-full ${isMinimized ? "w-64" : "w-[350px] sm:w-[400px]"} shadow-xl transition-all duration-300`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-t-lg p-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            {!isMinimized && (
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="h-5 w-5" />
              </div>
            )}
            <div>
              <h3 className="font-bold">NiFe AI Assistant</h3>
              {!isMinimized && <p className="text-xs text-white/80">Here to help 24/7</p>}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button
              onClick={toggleMinimize}
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:bg-white/20 rounded-full"
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
            <Button
              onClick={toggleOpen}
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:bg-white/20 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Tabs */}
            <div className="flex border-b">
              <button
                className={`flex-1 py-3 text-sm font-medium ${
                  activeTab === "chat" ? "text-purple-600 border-b-2 border-purple-600" : "text-gray-500"
                }`}
                onClick={() => setActiveTab("chat")}
              >
                <div className="flex items-center justify-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>Chat</span>
                </div>
              </button>
              <button
                className={`flex-1 py-3 text-sm font-medium ${
                  activeTab === "call" ? "text-purple-600 border-b-2 border-purple-600" : "text-gray-500"
                }`}
                onClick={() => setActiveTab("call")}
              >
                <div className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Call</span>
                </div>
              </button>
            </div>

            <CardContent className="p-0">
              {activeTab === "chat" ? (
                <div className="h-[400px] flex flex-col">
                  {/* Chat messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message, index) => (
                      <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.type === "user" ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {message.text}
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-gray-100 rounded-lg p-3 text-gray-800">
                          <div className="flex space-x-1">
                            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Input area */}
                  <div className="border-t p-3 flex gap-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <Button onClick={handleSendMessage} className="bg-purple-600 hover:bg-purple-700">
                      Send
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="h-[400px] flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Talk to our AI Assistant</h3>
                  <p className="text-gray-600 mb-6">
                    Get instant answers to your questions about NiFe's health insurance, RuPay card, and digital gold
                    rewards.
                  </p>
                  <Button onClick={startCall} className="bg-purple-600 hover:bg-purple-700 gap-2">
                    <Phone className="h-4 w-4" />
                    Start Call
                  </Button>
                </div>
              )}
            </CardContent>
          </>
        )}
      </Card>
    </div>
  )
}
