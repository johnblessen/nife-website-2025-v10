"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Search, Gift, ShoppingCart } from "lucide-react"

export default function GiftCardMarketplace() {
  const [searchQuery, setSearchQuery] = useState("")
  const [cartItems, setCartItems] = useState<string[]>([])

  const categories = [
    { id: "shopping", name: "Shopping", icon: <ShoppingBag className="h-4 w-4" /> },
    { id: "entertainment", name: "Entertainment", icon: <Gift className="h-4 w-4" /> },
    { id: "dining", name: "Dining", icon: <ShoppingBag className="h-4 w-4" /> },
    { id: "travel", name: "Travel", icon: <ShoppingBag className="h-4 w-4" /> },
    { id: "telecom", name: "Telecom", icon: <ShoppingBag className="h-4 w-4" /> },
  ]

  const giftCards = [
    {
      id: "amazon",
      name: "Amazon",
      category: "shopping",
      logo: "/images/amazon.png?height=60&width=120&text=Amazon",
      originalPrice: 1000,
      discountedPrice: 850,
      discount: 15,
      description: "Use at Amazon.in for all your shopping needs",
    },
    {
      id: "flipkart",
      name: "Flipkart",
      category: "shopping",
      logo: "/images/flipkart.png?height=60&width=120&text=Flipkart",
      originalPrice: 1000,
      discountedPrice: 900,
      discount: 10,
      description: "Shop online at Flipkart for electronics, fashion & more",
    },
    {
      id: "netflix",
      name: "Netflix",
      category: "entertainment",
      logo: "/images/netflix.png?height=60&width=120&text=Netflix",
      originalPrice: 500,
      discountedPrice: 400,
      discount: 20,
      description: "Stream your favorite shows and movies",
    },
    {
      id: "bookmyshow",
      name: "BookMyShow",
      category: "entertainment",
      logo: "/images/bookmyshow.png?height=60&width=120&text=BookMyShow",
      originalPrice: 500,
      discountedPrice: 425,
      discount: 15,
      description: "Book movie tickets, events and more",
    },
    {
      id: "swiggy",
      name: "Swiggy",
      category: "dining",
      logo: "/images/swiggy.png?height=60&width=120&text=Swiggy",
      originalPrice: 500,
      discountedPrice: 375,
      discount: 25,
      description: "Order food online from restaurants near you",
    },
    {
      id: "zomato",
      name: "Zomato",
      category: "dining",
      logo: "/images/zomato.png?height=60&width=120&text=Zomato",
      originalPrice: 500,
      discountedPrice: 400,
      discount: 20,
      description: "Food delivery from your favorite restaurants",
    },
    {
      id: "makemytrip",
      name: "MakeMyTrip",
      category: "travel",
      logo: "/images/makemytrip.png?height=60&width=120&text=MakeMyTrip",
      originalPrice: 2000,
      discountedPrice: 1600,
      discount: 20,
      description: "Book flights, hotels, and holiday packages",
    },
    {
      id: "MY JIO",
      name: "JIO",
      category: "telecom",
      logo: "/images/jio.png?height=60&width=120&text=OYO",
      originalPrice: 1000,
      discountedPrice: 750,
      discount: 25,
      description: "Book budget hotels and homestays",
    },
  ]

  const filteredGiftCards = giftCards.filter(
    (card) =>
      card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const addToCart = (id: string) => {
    setCartItems([...cartItems, id])
  }

  const isInCart = (id: string) => cartItems.includes(id)

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search gift cards..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Cart:</span>
          <Badge variant="secondary" className="flex items-center gap-1">
            <ShoppingCart className="h-3 w-3" />
            <span>{cartItems.length}</span>
          </Badge>
          {cartItems.length > 0 && (
            <Button variant="outline" size="sm">
              Checkout
            </Button>
          )}
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-6 max-w-2xl mx-auto">
          <TabsTrigger value="all">All</TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-1">
              {category.icon}
              <span className="hidden sm:inline">{category.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGiftCards.map((card) => (
              <Card key={card.id} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="bg-gray-50 p-4 flex items-center justify-center h-24 border-b">
                  <Image
                    src={card.logo || "/placeholder.svg"}
                    alt={card.name}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>{card.name}</CardTitle>
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">{card.discount}% OFF</Badge>
                  </div>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">₹{card.discountedPrice}</span>
                    <span className="text-sm text-gray-500 line-through">₹{card.originalPrice}</span>
                  </div>
                  <div className="text-xs text-green-600 mt-1">
                    + earn {Math.round(card.discountedPrice * 0.01)} gold coins
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${isInCart(card.id) ? "bg-green-600 hover:bg-green-700" : "bg-purple-600 hover:bg-purple-700"}`}
                    onClick={() => !isInCart(card.id) && addToCart(card.id)}
                    disabled={isInCart(card.id)}
                  >
                    {isInCart(card.id) ? "Added to Cart" : "Add to Cart"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredGiftCards
                .filter((card) => card.category === category.id)
                .map((card) => (
                  <Card key={card.id} className="overflow-hidden hover:shadow-lg transition-all">
                    <div className="bg-gray-50 p-4 flex items-center justify-center h-24 border-b">
                      <Image
                        src={card.logo || "/placeholder.svg"}
                        alt={card.name}
                        width={120}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle>{card.name}</CardTitle>
                        <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
                          {card.discount}% OFF
                        </Badge>
                      </div>
                      <CardDescription>{card.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold">₹{card.discountedPrice}</span>
                        <span className="text-sm text-gray-500 line-through">₹{card.originalPrice}</span>
                      </div>
                      <div className="text-xs text-green-600 mt-1">
                        + earn {Math.round(card.discountedPrice * 0.01)} gold coins
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className={`w-full ${isInCart(card.id) ? "bg-green-600 hover:bg-green-700" : "bg-purple-600 hover:bg-purple-700"}`}
                        onClick={() => !isInCart(card.id) && addToCart(card.id)}
                        disabled={isInCart(card.id)}
                      >
                        {isInCart(card.id) ? "Added to Cart" : "Add to Cart"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="text-center">
        <Button variant="outline" className="mt-6">
          View All Gift Cards
        </Button>
      </div>
    </div>
  )
}
