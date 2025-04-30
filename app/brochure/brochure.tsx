import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Eye, FileText, Clock, ChevronRight } from "lucide-react"
import VapiAssistant from "@/components/vapi-assistant"

const brochures = [
  {
    id: 1,
    title: "NiFe Comprehensive Product Guide",
    description: "Complete overview of all NiFe products, services, and benefits in one comprehensive brochure.",
    image: "/placeholder.svg?height=400&width=600&text=Comprehensive+Guide",
    pages: 24,
    downloadSize: "8.5 MB",
    format: "PDF",
    downloadCount: 3245,
    featured: true,
    readTime: "15 min",
  },
  {
    id: 2,
    title: "Health Insurance Benefits Explained",
    description: "Detailed explanation of all health insurance benefits, coverage details, and claim processes.",
    image: "/placeholder.svg?height=400&width=600&text=Health+Insurance+Guide",
    pages: 16,
    downloadSize: "5.2 MB",
    format: "PDF",
    downloadCount: 2187,
    featured: false,
    readTime: "10 min",
  },
  {
    id: 3,
    title: "Digital Gold Investment Strategy",
    description: "Learn how to maximize your wealth through NiFe's digital gold rewards and investment options.",
    image: "/placeholder.svg?height=400&width=600&text=Digital+Gold+Guide",
    pages: 12,
    downloadSize: "4.8 MB",
    format: "PDF",
    downloadCount: 1567,
    featured: false,
    readTime: "8 min",
  },
  {
    id: 4,
    title: "Hospital Network Directory 2023",
    description: "Complete directory of all partner hospitals with specialties, discounts, and contact information.",
    image: "/placeholder.svg?height=400&width=600&text=Hospital+Directory",
    pages: 32,
    downloadSize: "12.4 MB",
    format: "PDF",
    downloadCount: 4356,
    featured: true,
    readTime: "20 min",
  },
  {
    id: 5,
    title: "Member Benefits & Privileges Guide",
    description: "Explore all the exclusive benefits and privileges available to NiFe members across categories.",
    image: "/placeholder.svg?height=400&width=600&text=Member+Benefits",
    pages: 18,
    downloadSize: "6.7 MB",
    format: "PDF",
    downloadCount: 2934,
    featured: false,
    readTime: "12 min",
  },
  {
    id: 6,
    title: "Corporate Wellness Program",
    description: "Comprehensive guide to NiFe's corporate wellness program for businesses and organizations.",
    image: "/placeholder.svg?height=400&width=600&text=Corporate+Wellness",
    pages: 20,
    downloadSize: "7.2 MB",
    format: "PDF",
    downloadCount: 1843,
    featured: false,
    readTime: "14 min",
  },
]

export default function BrochuresPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive Brochures</h1>
            <p className="text-xl text-white/80">
              Detailed guides and brochures to help you understand all aspects of NiFe's offerings.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        {/* Featured Brochures */}
        <h2 className="text-2xl font-bold mb-6">Featured Brochures</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {brochures
            .filter((brochure) => brochure.featured)
            .map((brochure) => (
              <Card key={brochure.id} className="overflow-hidden hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative">
                    <Image
                      src={brochure.image || "/placeholder.svg"}
                      alt={brochure.title}
                      width={300}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-xs font-bold">
                      Featured
                    </div>
                  </div>
                  <div className="md:w-3/5 p-6">
                    <h3 className="text-xl font-bold mb-2">{brochure.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{brochure.description}</p>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <FileText className="h-4 w-4 mr-1" />
                        <span>{brochure.pages} pages</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{brochure.readTime} read</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Eye className="h-4 w-4 mr-1" />
                        <span>{brochure.downloadCount} downloads</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-4 w-4" /> Preview
                      </Button>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        <Download className="mr-2 h-4 w-4" /> Download
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
        </div>

        {/* All Brochures */}
        <h2 className="text-2xl font-bold mb-6">All Brochures</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brochures
            .filter((brochure) => !brochure.featured)
            .map((brochure) => (
              <Card key={brochure.id} className="overflow-hidden hover:shadow-md transition-all">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={brochure.image || "/placeholder.svg"}
                    alt={brochure.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{brochure.title}</CardTitle>
                  <CardDescription>{brochure.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center text-sm text-gray-500">
                      <FileText className="h-4 w-4 mr-1" />
                      <span>{brochure.pages} pages</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{brochure.readTime} read</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Eye className="h-4 w-4 mr-1" />
                      <span>{brochure.downloadCount} downloads</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Eye className="mr-2 h-4 w-4" /> Preview
                  </Button>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    <Download className="mr-2 h-4 w-4" /> Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>

        {/* Request Physical Brochures */}
        <div className="mt-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <Image
                src="/placeholder.svg?height=300&width=300&text=Physical+Brochures"
                alt="Physical Brochures"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-2/3 space-y-4">
              <h3 className="text-2xl font-bold text-purple-700">Need Physical Brochures?</h3>
              <p className="text-gray-700">
                We can send high-quality printed brochures directly to your doorstep. Perfect for sharing with friends,
                family, or potential members. The first 10 brochures are complimentary for all NiFe members.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Clock className="h-4 w-4 text-purple-600" />
                <span>Delivery within 3-5 business days</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700">Request Physical Brochures</Button>
                <Button variant="outline">
                  Bulk Order for Business <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VapiAssistant />
    </main>
  )
}
