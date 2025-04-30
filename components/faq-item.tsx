import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
  category: string
  colorClass: string
}

export function FAQItem({ question, answer, category, colorClass }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`rounded-lg ${colorClass} p-4`}>
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <span className="text-xs font-medium text-purple-600 mb-1 block">{category}</span>
          <h4 className="font-medium">{question}</h4>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-purple-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="mt-4 text-sm text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
} 