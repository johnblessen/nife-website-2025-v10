"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Play, FileText, Video, BookOpen, Smartphone, Users, Award } from "lucide-react"

export function LearningCenter() {
  const [activeTab, setActiveTab] = useState("materials")

  const marketingMaterials = [
    {
      title: "Product Flyer",
      description: "Comprehensive overview of NiFe's health insurance and wealth benefits",
      icon: FileText,
      downloadUrl: "/downloads/product-flyer.pdf",
    },
    {
      title: "Benefits Brochure",
      description: "Detailed breakdown of all membership benefits and features",
      icon: BookOpen,
      downloadUrl: "/downloads/benefits-brochure.pdf",
    },
    {
      title: "Sales Guide",
      description: "Complete guide for sales teams with talking points and FAQs",
      icon: Users,
      downloadUrl: "/downloads/sales-guide.pdf",
    },
    {
      title: "Training Manual",
      description: "Step-by-step training materials for new team members",
      icon: Award,
      downloadUrl: "/downloads/training-manual.pdf",
    },
  ]

  const videoContent = [
    {
      title: "NiFe App Demo",
      description: "Complete walkthrough of the NiFe mobile application",
      thumbnail: "/images/app-demo-thumb.jpg",
      videoUrl: "/videos/app-demo.mp4",
    },
    {
      title: "Product Overview",
      description: "Introduction to NiFe's health insurance and wealth benefits",
      thumbnail: "/images/product-overview-thumb.jpg",
      videoUrl: "/videos/product-overview.mp4",
    },
    {
      title: "Sales Training",
      description: "Training video for sales teams",
      thumbnail: "/images/sales-training-thumb.jpg",
      videoUrl: "/videos/sales-training.mp4",
    },
  ]

  const handleDownload = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Learning Center</h2>
        <p className="text-gray-600">Access training materials, marketing resources, and product demos</p>
      </div>

      <Tabs defaultValue="materials" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
          <TabsTrigger value="materials">Marketing Materials</TabsTrigger>
          <TabsTrigger value="videos">Training Videos</TabsTrigger>
          <TabsTrigger value="app">App Demo</TabsTrigger>
        </TabsList>

        <TabsContent value="materials" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingMaterials.map((material, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <material.icon className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle>{material.title}</CardTitle>
                  <CardDescription>{material.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => handleDownload(material.downloadUrl)}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoContent.map((video, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Button 
                      size="icon" 
                      className="rounded-full"
                      onClick={() => window.open(video.videoUrl, '_blank')}
                    >
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{video.title}</CardTitle>
                  <CardDescription>{video.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="app" className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">NiFe Mobile App Demo</h3>
              <p className="text-gray-600">
                Experience the power of NiFe's mobile application. Our app makes it easy to manage your health insurance,
                track your digital gold rewards, and access exclusive benefits.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Smartphone className="h-5 w-5 text-purple-600" />
                  <span>Easy health insurance management</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-purple-600" />
                  <span>Track digital gold rewards</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-purple-600" />
                  <span>Family member management</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button onClick={() => window.open('/videos/app-demo.mp4', '_blank')}>
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
                <Link href="/get-started">
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download App
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-[9/16] max-w-[300px] mx-auto">
              <Image
                src="/images/app-demo.png"
                alt="NiFe Mobile App"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 