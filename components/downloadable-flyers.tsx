"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Eye, Share2, Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

const flyers = [
  {
    id: 1,
    title: "Health Insurance Benefits",
    description: "Comprehensive overview of all health insurance benefits included with your NiFe membership.",
    image: "/placeholder.svg?height=400&width=300&text=Health+Insurance+Flyer",
    downloadSize: "2.4 MB",
    format: "PDF",
    downloadCount: 1245,
    category: "Insurance",
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
  },
  {
    id: 2,
    title: "RuPay Card Features & Rewards",
    description: "Learn about the exclusive features and digital gold rewards with your NiFe RuPay card.",
    image: "/placeholder.svg?height=400&width=300&text=RuPay+Card+Flyer",
    downloadSize: "1.8 MB",
    format: "PDF",
    downloadCount: 987,
    category: "Card",
    color: "bg-gradient-to-br from-purple-500 to-purple-700",
  },
  {
    id: 3,
    title: "Hospital Network Directory",
    description: "Complete list of 200+ partner hospitals with discount details and contact information.",
    image: "/placeholder.svg?height=400&width=300&text=Hospital+Network+Flyer",
    downloadSize: "3.2 MB",
    format: "PDF",
    downloadCount: 1567,
    category: "Network",
    color: "bg-gradient-to-br from-green-500 to-green-700",
  },
  {
    id: 4,
    title: "Digital Gold Investment Guide",
    description: "Step-by-step guide to maximize your wealth through NiFe's digital gold rewards program.",
    image: "/placeholder.svg?height=400&width=300&text=Digital+Gold+Flyer",
    downloadSize: "2.1 MB",
    format: "PDF",
    downloadCount: 856,
    category: "Investment",
    color: "bg-gradient-to-br from-yellow-500 to-yellow-700",
  },
  {
    id: 5,
    title: "Membership Plans Comparison",
    description: "Detailed comparison of Basic, Premium, and Elite membership plans with all benefits.",
    image: "/placeholder.svg?height=400&width=300&text=Membership+Plans+Flyer",
    downloadSize: "1.5 MB",
    format: "PDF",
    downloadCount: 2134,
    category: "Membership",
    color: "bg-gradient-to-br from-pink-500 to-pink-700",
  },
  {
    id: 6,
    title: "Top-Up Insurance Options",
    description: "Enhance your coverage with our discounted top-up insurance plans from ₹10L to ₹1 Crore.",
    image: "/placeholder.svg?height=400&width=300&text=Top-Up+Insurance+Flyer",
    downloadSize: "1.9 MB",
    format: "PDF",
    downloadCount: 743,
    category: "Insurance",
    color: "bg-gradient-to-br from-indigo-500 to-indigo-700",
  },
]

export default function DownloadableFlyers() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [downloadingId, setDownloadingId] = useState<number | null>(null)

  const categories = Array.from(new Set(flyers.map((flyer) => flyer.category)))

  const filteredFlyers = flyers.filter(
    (flyer) =>
      flyer.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (activeCategory === null || flyer.category === activeCategory),
  )

  const handleDownload = (id: number) => {
    setDownloadingId(id)
    // Simulate download delay
    setTimeout(() => {
      setDownloadingId(null)
      // In a real app, you would trigger the actual download here
      console.log(`Downloading flyer ${id}`)
    }, 1500)
  }

  return (
    <section className="py-12">
      <div className="container">
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Downloadable Flyers</h2>
          <p className="max-w-2xl text-gray-600">
            Access and download our informative flyers to learn more about NiFe's benefits and services. Perfect for
            sharing with friends and family.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Input
              type="search"
              placeholder="Search flyers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={activeCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(null)}
              className={activeCategory === null ? "bg-gray-800" : ""}
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "bg-gray-800" : ""}
              >
                {category}
              </Button>
            ))}
            <Button variant="outline" size="sm" className="gap-1">
              <Filter className="h-4 w-4" /> More Filters
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredFlyers.map((flyer) => (
            <motion.div
              key={flyer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                <div className="relative aspect-[3/4]">
                  <Image src={flyer.image || "/placeholder.svg"} alt={flyer.title} fill className="object-cover" />
                  <div className={`absolute inset-0 opacity-80 ${flyer.color}`}></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <Button variant="secondary" size="sm" className="mr-2">
                      <Eye className="mr-1 h-4 w-4" /> Preview
                    </Button>
                    <Button
                      onClick={() => handleDownload(flyer.id)}
                      disabled={downloadingId === flyer.id}
                      className="bg-white text-gray-800 hover:bg-gray-100"
                      size="sm"
                    >
                      {downloadingId === flyer.id ? (
                        <>
                          <span className="mr-1 h-4 w-4 animate-spin rounded-full border-2 border-gray-800 border-t-transparent"></span>
                          Downloading...
                        </>
                      ) : (
                        <>
                          <Download className="mr-1 h-4 w-4" /> Download
                        </>
                      )}
                    </Button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                    <h3 className="mb-1 font-bold">{flyer.title}</h3>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                        {flyer.category}
                      </Badge>
                      <span className="text-sm">
                        {flyer.format} • {flyer.downloadSize}
                      </span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="line-clamp-2 text-sm text-gray-600">{flyer.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between border-t p-4">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700">{flyer.downloadCount}</span> downloads
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={() => handleDownload(flyer.id)}
                      disabled={downloadingId === flyer.id}
                      size="sm"
                      className={flyer.color}
                    >
                      {downloadingId === flyer.id ? (
                        <>
                          <span className="mr-1 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                          Downloading...
                        </>
                      ) : (
                        <>
                          <Download className="mr-1 h-4 w-4" /> Download
                        </>
                      )}
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredFlyers.length === 0 && (
          <div className="mt-8 rounded-lg border border-dashed border-gray-300 p-8 text-center">
            <p className="text-gray-500">No flyers found matching your search criteria.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchTerm("")
                setActiveCategory(null)
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        <div className="mt-12 rounded-xl bg-gray-50 p-6 text-center">
          <h3 className="mb-2 text-xl font-bold">Need Custom Flyers?</h3>
          <p className="mb-4 text-gray-600">
            We can create customized flyers tailored to your specific needs or audience. Contact our team to discuss.
          </p>
          <Button>Request Custom Flyers</Button>
        </div>
      </div>
    </section>
  )
}
