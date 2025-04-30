import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gift, Clock, Percent, Eye, CreditCard, Heart, ShoppingBag } from "lucide-react"

export default function OffersPage() {
  const offers = [
    {
      id: 1,
      title: "20% Off at Apollo Hospitals",
      description: "Get 20% off on all health check-ups and consultations",
      category: "Healthcare",
      validTill: "May 31, 2023",
      image: "/placeholder.svg?height=200&width=300&text=Apollo+Hospitals",
      icon: Heart,
    },
    {
      id: 2,
      title: "Buy 1 Get 1 Free at Lenskart",
      description: "Buy any frame and get another one free",
      category: "Eyewear",
      validTill: "June 15, 2023",
      image: "/placeholder.svg?height=200&width=300&text=Lenskart",
      icon: Eye,
    },
    {
      id: 3,
      title: "10% Cashback on Medicines",
      description: "Get 10% cashback on all medicine purchases at PharmEasy",
      category: "Pharmacy",
      validTill: "Ongoing",
      image: "/placeholder.svg?height=200&width=300&text=PharmEasy",
      icon: ShoppingBag,
    },
    {
      id: 4,
      title: "15% Off on Health Insurance",
      description: "Get 15% off on new health insurance policies",
      category: "Insurance",
      validTill: "July 31, 2023",
      image: "/placeholder.svg?height=200&width=300&text=Health+Insurance",
      icon: CreditCard,
    },
    {
      id: 5,
      title: "25% Off at Fitness First",
      description: "Get 25% off on annual gym memberships",
      category: "Fitness",
      validTill: "June 30, 2023",
      image: "/placeholder.svg?height=200&width=300&text=Fitness+First",
      icon: Heart,
    },
    {
      id: 6,
      title: "5% Gold Rewards Bonus",
      description: "Get additional 5% gold rewards on all transactions",
      category: "Rewards",
      validTill: "Limited Time",
      image: "/placeholder.svg?height=200&width=300&text=Gold+Rewards",
      icon: Percent,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Exclusive Offers & Discounts</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Enjoy special discounts and offers with your NiFe card at our partner establishments across healthcare,
          wellness, and lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <Card key={offer.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative">
              <Image src={offer.image || "/placeholder.svg"} alt={offer.title} fill className="object-cover" />
              <Badge className="absolute top-3 left-3 bg-purple-600">{offer.category}</Badge>
            </div>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{offer.title}</CardTitle>
                  <CardDescription>{offer.description}</CardDescription>
                </div>
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <offer.icon className="h-5 w-5 text-purple-600" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                Valid till: {offer.validTill}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">View Offer</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-purple-50 rounded-xl p-8 text-center">
        <Gift className="h-12 w-12 text-purple-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Don't Have a NiFe Card Yet?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Sign up today to access all these exclusive offers and much more. Enjoy health benefits, financial rewards,
          and special discounts with your NiFe card.
        </p>
        <Link href="/get-started">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Get Your NiFe Card
          </Button>
        </Link>
      </div>
    </div>
  )
}
