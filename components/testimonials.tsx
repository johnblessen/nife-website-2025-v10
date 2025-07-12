"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

const testimonials = [
  {
    name: "Rahul Patel",
    role: "Member since 2023",
    content: "The signup process was incredibly simple, and I was approved instantly. The gold rewards are an amazing bonus!",
    image: "/placeholder.svg?height=100&width=100&text=R"
  },
  {
    name: "Priya Sharma",
    role: "Member since 2022",
    content: "The NiFe card has been a game-changer for my family. We've saved over ₹25,000 on medical expenses in just 6 months!",
    image: "/placeholder.svg?height=100&width=100&text=P"
  },
  {
    name: "Vikram Singh",
    role: "Member since 2023",
    content: "I love how NiFe combines health insurance with financial benefits. The hospital discounts alone have paid for my membership!",
    image: "/placeholder.svg?height=100&width=100&text=V"
  }
]

export function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Sparkles key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <CardContent className="p-0">
            <p className="text-gray-600 mb-6">{testimonial.content}</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
