import { FAQItem } from "./faq-item"

const faqs = {
  health: [
    {
      question: "What is NiFe?",
      answer: "NiFe is a wellness company that offers the world's first free health insurance card. It's a co-branded debit and credit card that provides holistic wellness membership to take care of both health and wealth.",
      category: "General",
      colorClass: "bg-purple-100"
    },
    {
      question: "How much does the membership cost?",
      answer: "The NiFe membership starts at ₹3,499 per year. This gives you access to all health and wealth benefits including complimentary health insurance, hospital discounts, tele-consultation, and the RuPay prepaid card with digital gold rewards.",
      category: "Pricing",
      colorClass: "bg-purple-100"
    },
    {
      question: "Is there a waiting period for the health insurance?",
      answer: "No, there is no waiting period for the basic health insurance coverage. The health insurance coverage is active from day one of your membership. Additionally, no health checkup is required to get the insurance coverage. However, for top-up insurance plans, there is a 12-month waiting period.",
      category: "Insurance",
      colorClass: "bg-purple-100"
    }
  ],
  card: [
    {
      question: "How do I get my RuPay card?",
      answer: "Once you sign up for a NiFe membership, your RuPay card will be delivered to your registered address within 7-10 business days. The card is pre-activated and ready to use upon delivery.",
      category: "Card Delivery",
      colorClass: "bg-blue-100"
    },
    {
      question: "What are the benefits of the RuPay card?",
      answer: "The NiFe RuPay card offers multiple benefits including 1% digital gold rewards on all transactions, exclusive discounts at partner merchants, and seamless integration with your health insurance benefits.",
      category: "Benefits",
      colorClass: "bg-blue-100"
    },
    {
      question: "Is there a minimum balance requirement?",
      answer: "No, there is no minimum balance requirement for the RuPay card. You can load any amount you want and use it for transactions. The card works on a prepaid basis.",
      category: "Card Usage",
      colorClass: "bg-blue-100"
    }
  ],
  gold: [
    {
      question: "How does digital gold rewards work?",
      answer: "With every transaction made using your NiFe RuPay card, you earn 1% of the transaction amount in digital gold. This gold is automatically invested and can be converted to physical gold or liquidated whenever you need.",
      category: "Rewards",
      colorClass: "bg-yellow-100"
    },
    {
      question: "Can I convert digital gold to physical gold?",
      answer: "Yes, you can convert your digital gold to physical gold at any time. The conversion process is simple and can be done through the NiFe app. You can choose to receive the physical gold at your doorstep or collect it from our partner stores.",
      category: "Conversion",
      colorClass: "bg-yellow-100"
    },
    {
      question: "What is the minimum amount for digital gold investment?",
      answer: "You can start investing in digital gold with as little as ₹100. There is no upper limit to how much digital gold you can accumulate through your transactions.",
      category: "Investment",
      colorClass: "bg-yellow-100"
    }
  ]
}

export function FAQSection() {
  return (
    <div className="space-y-8">
      {Object.entries(faqs).map(([topic, topicFaqs]) => (
        <div key={topic} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topicFaqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                category={faq.category}
                colorClass={faq.colorClass}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
} 