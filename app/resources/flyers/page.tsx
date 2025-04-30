import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Download, Eye, Share2 } from "lucide-react"
import VapiAssistant from "@/components/vapi-assistant"

const flyers = [
  {
    id: 1,
    title: "NiFe Health Insurance Benefits",
    description: "Comprehensive overview of all health insurance benefits included with your NiFe membership.",
    image: "/placeholder.svg?height=400&width=300&text=Health+Insurance+Flyer",
    downloadSize: "2.4 MB",
    format: "PDF",
    downloadCount: 1245,
  },
  {
    id: 2,
    title: "RuPay Card Features & Rewards",
    description: "Learn about the exclusive features and digital gold rewards with your NiFe RuPay card.",
    image: "/placeholder.svg?height=400&width=300&text=RuPay+Card+Flyer",
    downloadSize: "1.8 MB",
    format: "PDF",
    downloadCount: 987,
  },
  {
    id: 3,
    title: "Hospital Network Directory",
    description: "Complete list of 200+ partner hospitals with discount details and contact information.",
    image: "/placeholder.svg?height=400&width=300&text=Hospital+Network+Flyer",
    downloadSize: "3.2 MB",
    format: "PDF",
    downloadCount: 1567,
  },
  {
    id: 4,
    title: "Digital Gold Investment Guide",
    description: "Step-by-step guide to maximize your wealth through NiFe's digital gold rewards program.",
    image: "/placeholder.svg?height=400&width=300&text=Digital+Gold+Flyer",
    downloadSize: "2.1 MB",
    format: "PDF",
    downloadCount: 856,
  },
  {
    id: 5,
    title: "Membership Plans Comparison",
    description: "Detailed comparison of Basic, Premium, and Elite membership plans with all benefits.",
    image: "/placeholder.svg?height=400&width=300&text=Membership+Plans+Flyer",
    downloadSize: "1.5 MB",
    format: "PDF",
    downloadCount: 2134,
  },
  {
    id: 6,
    title: "Top-Up Insurance Options",
    description: "Enhance your coverage with our discounted top-up insurance plans from ₹10L to ₹1 Crore.",
    image: "/placeholder.svg?height=400&width=300&text=Top-Up+Insurance+Flyer",
    downloadSize: "1.9 MB",
    format: "PDF",
    downloadCount: 743,
  },
]

export default function FlyersPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Marketing Flyers & Resources</h1>
            <p className="text-xl text-white/80">
              Download high-quality marketing materials to learn more about NiFe's benefits and share with others.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/3">
              <Image
                src="/placeholder.svg?height=300&width=300&text=Premium+Resources"
                alt="Premium Resources"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-2/3 space-y-4">
              <h2 className="text-2xl font-bold text-purple-700">Exclusive Premium Resources</h2>
              <p className="text-gray-600">
                Get access to our premium marketing materials, customizable templates, and high-resolution assets to
                help you share the benefits of NiFe with your network. Perfect for agents, partners, and enthusiastic
                members.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                  Customizable
                </span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                  High-Resolution
                </span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                  Print-Ready
                </span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                  Digital-Optimized
                </span>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Unlock Premium Resources <span className="ml-2 text-yellow-300">★</span>
              </Button>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Available Flyers</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flyers.map((flyer) => (
            <Card key={flyer.id} className="overflow-hidden hover:shadow-md transition-all">
              <div className="aspect-[3/4] relative">
                <Image src={flyer.image || "/placeholder.svg"} alt={flyer.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold">{flyer.title}</h3>
                  </div>
                </div>
              </div>
              <CardContent className="pt-4">
                <p className="text-gray-600 text-sm">{flyer.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Eye className="h-4 w-4" />
                    <span>{flyer.downloadCount} downloads</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {flyer.format} • {flyer.downloadSize}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Eye className="mr-2 h-4 w-4" /> Preview
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="px-2">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    <Download className="mr-2 h-4 w-4" /> Download
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-purple-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-purple-700 mb-4">Need Custom Marketing Materials?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            We can create customized flyers and marketing materials tailored to your specific audience or requirements.
            Contact our marketing team to discuss your needs.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700">Request Custom Materials</Button>
        </div>
      </div>
      <VapiAssistant />
    </main>
  )
}
