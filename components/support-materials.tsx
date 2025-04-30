"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileText, BookOpen, Video, FileSpreadsheet, FilePieChart } from "lucide-react"
import { motion } from "framer-motion"

const guides = [
  {
    id: 1,
    title: "Getting Started with NiFe",
    description: "A comprehensive guide to help new members make the most of their NiFe membership.",
    type: "PDF Guide",
    pages: 15,
    downloadSize: "3.2 MB",
    downloadCount: 4567,
    image: "/placeholder.svg?height=200&width=300&text=Getting+Started",
    color: "bg-gradient-to-br from-purple-600 to-pink-600",
    category: "Onboarding",
  },
  {
    id: 2,
    title: "Health Insurance Claim Process",
    description: "Step-by-step instructions for filing and tracking health insurance claims.",
    type: "PDF Guide",
    pages: 8,
    downloadSize: "2.1 MB",
    downloadCount: 3245,
    image: "/placeholder.svg?height=200&width=300&text=Claim+Process",
    color: "bg-gradient-to-br from-blue-600 to-cyan-600",
    category: "Insurance",
  },
  {
    id: 3,
    title: "Digital Gold Investment Guide",
    description: "Learn how to maximize your wealth through NiFe's digital gold rewards program.",
    type: "PDF Guide",
    pages: 12,
    downloadSize: "2.8 MB",
    downloadCount: 2876,
    image: "/placeholder.svg?height=200&width=300&text=Digital+Gold",
    color: "bg-gradient-to-br from-yellow-600 to-amber-600",
    category: "Investment",
  },
  {
    id: 4,
    title: "Hospital Network Directory",
    description: "Complete list of partner hospitals with discount details and contact information.",
    type: "PDF Directory",
    pages: 24,
    downloadSize: "5.6 MB",
    downloadCount: 3987,
    image: "/placeholder.svg?height=200&width=300&text=Hospital+Network",
    color: "bg-gradient-to-br from-green-600 to-emerald-600",
    category: "Network",
  },
]

const templates = [
  {
    id: 1,
    title: "Health Expense Tracker",
    description: "Track all your medical expenses and insurance claims in one place.",
    type: "Excel Template",
    downloadSize: "1.2 MB",
    downloadCount: 2345,
    image: "/placeholder.svg?height=200&width=300&text=Expense+Tracker",
    color: "bg-gradient-to-br from-green-600 to-teal-600",
    category: "Finance",
  },
  {
    id: 2,
    title: "Insurance Claim Form",
    description: "Pre-filled form template for submitting insurance claims quickly.",
    type: "PDF Form",
    downloadSize: "0.8 MB",
    downloadCount: 4567,
    image: "/placeholder.svg?height=200&width=300&text=Claim+Form",
    color: "bg-gradient-to-br from-blue-600 to-indigo-600",
    category: "Insurance",
  },
  {
    id: 3,
    title: "Digital Gold Investment Calculator",
    description: "Calculate potential returns on your digital gold investments over time.",
    type: "Excel Calculator",
    downloadSize: "1.5 MB",
    downloadCount: 1876,
    image: "/placeholder.svg?height=200&width=300&text=Investment+Calculator",
    color: "bg-gradient-to-br from-yellow-600 to-orange-600",
    category: "Investment",
  },
  {
    id: 4,
    title: "Health Goals Tracker",
    description: "Set and track your health and wellness goals with this interactive template.",
    type: "Excel Template",
    downloadSize: "1.3 MB",
    downloadCount: 2134,
    image: "/placeholder.svg?height=200&width=300&text=Health+Goals",
    color: "bg-gradient-to-br from-red-600 to-rose-600",
    category: "Wellness",
  },
]

const presentations = [
  {
    id: 1,
    title: "NiFe Benefits Overview",
    description: "Comprehensive presentation explaining all NiFe membership benefits.",
    type: "PowerPoint",
    slides: 22,
    downloadSize: "4.5 MB",
    downloadCount: 1876,
    image: "/placeholder.svg?height=200&width=300&text=Benefits+Overview",
    color: "bg-gradient-to-br from-purple-600 to-indigo-600",
    category: "General",
  },
  {
    id: 2,
    title: "Digital Gold Investment Strategy",
    description: "Presentation on maximizing returns through digital gold investments.",
    type: "PowerPoint",
    slides: 18,
    downloadSize: "3.8 MB",
    downloadCount: 1543,
    image: "/placeholder.svg?height=200&width=300&text=Investment+Strategy",
    color: "bg-gradient-to-br from-yellow-600 to-amber-600",
    category: "Investment",
  },
  {
    id: 3,
    title: "Health Insurance Explained",
    description: "Detailed presentation on NiFe's health insurance coverage and benefits.",
    type: "PowerPoint",
    slides: 25,
    downloadSize: "5.2 MB",
    downloadCount: 2345,
    image: "/placeholder.svg?height=200&width=300&text=Insurance+Explained",
    color: "bg-gradient-to-br from-blue-600 to-cyan-600",
    category: "Insurance",
  },
  {
    id: 4,
    title: "Hospital Network Benefits",
    description: "Presentation on NiFe's hospital network and exclusive member discounts.",
    type: "PowerPoint",
    slides: 16,
    downloadSize: "3.5 MB",
    downloadCount: 1987,
    image: "/placeholder.svg?height=200&width=300&text=Hospital+Benefits",
    color: "bg-gradient-to-br from-green-600 to-emerald-600",
    category: "Network",
  },
]

export default function SupportMaterials() {
  const [downloadingId, setDownloadingId] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("guides")

  const handleDownload = (id: number) => {
    setDownloadingId(id)
    // Simulate download delay
    setTimeout(() => {
      setDownloadingId(null)
      // In a real app, you would trigger the actual download here
      console.log(`Downloading material ${id}`)
    }, 1500)
  }

  const getIcon = (type: string) => {
    if (type.includes("PDF")) return <FileText className="h-5 w-5" />
    if (type.includes("Excel")) return <FileSpreadsheet className="h-5 w-5" />
    if (type.includes("PowerPoint")) return <FilePieChart className="h-5 w-5" />
    if (type.includes("Video")) return <Video className="h-5 w-5" />
    return <FileText className="h-5 w-5" />
  }

  return (
    <section className="py-12">
      <div className="container">
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Support Materials</h2>
          <p className="max-w-2xl text-gray-600">
            Access our collection of guides, templates, and presentations to help you make the most of your NiFe
            membership.
          </p>
        </div>

        <Tabs defaultValue="guides" onValueChange={setActiveTab} className="w-full">
          <TabsList className="mx-auto mb-8 grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="guides">
              <BookOpen className="mr-2 h-4 w-4" /> Guides
            </TabsTrigger>
            <TabsTrigger value="templates">
              <FileSpreadsheet className="mr-2 h-4 w-4" /> Templates
            </TabsTrigger>
            <TabsTrigger value="presentations">
              <FilePieChart className="mr-2 h-4 w-4" /> Presentations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="guides" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {guides.map((guide) => (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                    <div className="relative h-40">
                      <div className={`absolute inset-0 ${guide.color}`}></div>
                      <Image
                        src={guide.image || "/placeholder.svg"}
                        alt={guide.title}
                        fill
                        className="object-cover mix-blend-overlay"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-white/80 text-gray-800">{guide.type}</Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">{guide.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2 flex-grow">
                      <p className="text-gray-600 text-sm">{guide.description}</p>
                      <div className="flex flex-wrap gap-3 mt-4">
                        <div className="flex items-center text-xs text-gray-500">
                          <FileText className="h-3 w-3 mr-1" />
                          <span>{guide.pages} pages</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <span>{guide.downloadSize}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2 border-t">
                      <Button
                        onClick={() => handleDownload(guide.id)}
                        disabled={downloadingId === guide.id}
                        className={`w-full ${guide.color}`}
                      >
                        {downloadingId === guide.id ? (
                          <>
                            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                            Downloading...
                          </>
                        ) : (
                          <>
                            <Download className="mr-2 h-4 w-4" /> Download Guide
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="templates" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {templates.map((template) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                    <div className="relative h-40">
                      <div className={`absolute inset-0 ${template.color}`}></div>
                      <Image
                        src={template.image || "/placeholder.svg"}
                        alt={template.title}
                        fill
                        className="object-cover mix-blend-overlay"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-white/80 text-gray-800">{template.type}</Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">{template.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2 flex-grow">
                      <p className="text-gray-600 text-sm">{template.description}</p>
                      <div className="flex flex-wrap gap-3 mt-4">
                        <div className="flex items-center text-xs text-gray-500">
                          {getIcon(template.type)}
                          <span className="ml-1">{template.type}</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <span>{template.downloadSize}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2 border-t">
                      <Button
                        onClick={() => handleDownload(template.id)}
                        disabled={downloadingId === template.id}
                        className={`w-full ${template.color}`}
                      >
                        {downloadingId === template.id ? (
                          <>
                            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                            Downloading...
                          </>
                        ) : (
                          <>
                            <Download className="mr-2 h-4 w-4" /> Download Template
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="presentations" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {presentations.map((presentation) => (
                <motion.div
                  key={presentation.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                    <div className="relative h-40">
                      <div className={`absolute inset-0 ${presentation.color}`}></div>
                      <Image
                        src={presentation.image || "/placeholder.svg"}
                        alt={presentation.title}
                        fill
                        className="object-cover mix-blend-overlay"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-white/80 text-gray-800">{presentation.type}</Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">{presentation.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2 flex-grow">
                      <p className="text-gray-600 text-sm">{presentation.description}</p>
                      <div className="flex flex-wrap gap-3 mt-4">
                        <div className="flex items-center text-xs text-gray-500">
                          <FilePieChart className="h-3 w-3 mr-1" />
                          <span>{presentation.slides} slides</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <span>{presentation.downloadSize}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2 border-t">
                      <Button
                        onClick={() => handleDownload(presentation.id)}
                        disabled={downloadingId === presentation.id}
                        className={`w-full ${presentation.color}`}
                      >
                        {downloadingId === presentation.id ? (
                          <>
                            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                            Downloading...
                          </>
                        ) : (
                          <>
                            <Download className="mr-2 h-4 w-4" /> Download Presentation
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Request Custom Materials */}
        <div className="mt-12 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <Image
                src="/placeholder.svg?height=300&width=300&text=Custom+Materials"
                alt="Custom Materials"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-2/3 space-y-4">
              <h3 className="text-2xl font-bold text-purple-700">Need Custom Support Materials?</h3>
              <p className="text-gray-700">
                Can't find what you're looking for? Our team can create custom guides, templates, or presentations
                tailored to your specific needs. Whether you need materials for personal use or for sharing with your
                team, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700">Request Custom Materials</Button>
                <Button variant="outline">Contact Support Team</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
