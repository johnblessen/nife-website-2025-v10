"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Eye, FileText, Clock, BookOpen, Share2 } from "lucide-react"
import { motion } from "framer-motion"

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
    color: "bg-gradient-to-br from-purple-600 to-pink-600",
    category: "General",
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
    color: "bg-gradient-to-br from-blue-600 to-cyan-600",
    category: "Insurance",
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
    color: "bg-gradient-to-br from-yellow-600 to-amber-600",
    category: "Investment",
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
    color: "bg-gradient-to-br from-green-600 to-emerald-600",
    category: "Network",
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
    color: "bg-gradient-to-br from-indigo-600 to-blue-600",
    category: "Membership",
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
    color: "bg-gradient-to-br from-red-600 to-rose-600",
    category: "Corporate",
  },
]

export default function DownloadableBrochures() {
  const [downloadingId, setDownloadingId] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(brochures.map((brochure) => brochure.category)))

  const filteredBrochures = brochures.filter(
    (brochure) => activeCategory === null || brochure.category === activeCategory,
  )

  const featuredBrochures = filteredBrochures.filter((brochure) => brochure.featured)
  const regularBrochures = filteredBrochures.filter((brochure) => !brochure.featured)

  const handleDownload = (id: number) => {
    setDownloadingId(id)
    // Simulate download delay
    setTimeout(() => {
      setDownloadingId(null)
      // In a real app, you would trigger the actual download here
      console.log(`Downloading brochure ${id}`)
    }, 1500)
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Comprehensive Brochures</h2>
          <p className="max-w-2xl text-gray-600">
            Download our detailed brochures to get in-depth information about NiFe's services, benefits, and programs.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <Button
            variant={activeCategory === null ? "default" : "outline"}
            onClick={() => setActiveCategory(null)}
            className={activeCategory === null ? "bg-gray-800" : ""}
          >
            All Categories
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? "bg-gray-800" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {featuredBrochures.length > 0 && (
          <>
            <h3 className="mb-6 text-2xl font-bold">Featured Brochures</h3>
            <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {featuredBrochures.map((brochure) => (
                <motion.div
                  key={brochure.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all h-full">
                    <div className="flex flex-col md:flex-row h-full">
                      <div className="md:w-2/5 relative">
                        <div className={`absolute inset-0 ${brochure.color}`}></div>
                        <Image
                          src={brochure.image || "/placeholder.svg"}
                          alt={brochure.title}
                          width={300}
                          height={400}
                          className="h-full w-full object-cover mix-blend-overlay"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-yellow-500 text-white hover:bg-yellow-600">Featured</Badge>
                        </div>
                      </div>
                      <div className="md:w-3/5 p-6 flex flex-col">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{brochure.title}</h3>
                          <p className="text-gray-600 text-sm mb-4">{brochure.description}</p>
                        </div>
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
                            <span>{brochure.downloadCount.toLocaleString()} downloads</span>
                          </div>
                        </div>
                        <div className="mt-auto flex justify-between">
                          <Button variant="outline" size="sm">
                            <Eye className="mr-2 h-4 w-4" /> Preview
                          </Button>
                          <Button
                            onClick={() => handleDownload(brochure.id)}
                            disabled={downloadingId === brochure.id}
                            size="sm"
                            className={brochure.color}
                          >
                            {downloadingId === brochure.id ? (
                              <>
                                <span className="mr-1 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                                Downloading...
                              </>
                            ) : (
                              <>
                                <Download className="mr-2 h-4 w-4" /> Download
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </>
        )}

        <h3 className="mb-6 text-2xl font-bold">All Brochures</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {regularBrochures.map((brochure) => (
            <motion.div
              key={brochure.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                <div className="relative">
                  <div className={`absolute inset-0 ${brochure.color}`}></div>
                  <Image
                    src={brochure.image || "/placeholder.svg"}
                    alt={brochure.title}
                    width={600}
                    height={300}
                    className="h-48 w-full object-cover mix-blend-overlay"
                  />
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {brochure.format} • {brochure.downloadSize}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{brochure.title}</CardTitle>
                    <Badge variant="outline">{brochure.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2 flex-grow">
                  <p className="text-gray-600 text-sm">{brochure.description}</p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <div className="flex items-center text-xs text-gray-500">
                      <BookOpen className="h-3 w-3 mr-1" />
                      <span>{brochure.pages} pages</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{brochure.readTime} read</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Eye className="h-3 w-3 mr-1" />
                      <span>{brochure.downloadCount.toLocaleString()} downloads</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2 border-t">
                  <div className="flex w-full justify-between">
                    <Button variant="ghost" size="sm">
                      <Eye className="mr-1 h-4 w-4" /> Preview
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button
                        onClick={() => handleDownload(brochure.id)}
                        disabled={downloadingId === brochure.id}
                        size="sm"
                        className={brochure.color}
                      >
                        {downloadingId === brochure.id ? (
                          <>
                            <span className="mr-1 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                          </>
                        ) : (
                          <>
                            <Download className="mr-1 h-4 w-4" /> Download
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredBrochures.length === 0 && (
          <div className="mt-8 rounded-lg border border-dashed border-gray-300 p-8 text-center">
            <p className="text-gray-500">No brochures found in this category.</p>
            <Button variant="outline" className="mt-4" onClick={() => setActiveCategory(null)}>
              View All Brochures
            </Button>
          </div>
        )}

        <div className="mt-12 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 p-8">
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
                <Button variant="outline">Bulk Order for Business</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
