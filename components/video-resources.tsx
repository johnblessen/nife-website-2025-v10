"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, Eye, Share2, Download, Calendar, ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

const featuredVideo = {
  id: "featured",
  title: "NiFe: Revolutionizing Health Insurance & Wealth Building",
  description:
    "Watch our comprehensive explainer video to understand how NiFe is transforming the health insurance landscape while helping members build wealth through digital gold rewards.",
  thumbnail: "/placeholder.svg?height=600&width=1200&text=NiFe+Explainer+Video",
  duration: "4:32",
  views: 24567,
  date: "October 15, 2023",
  color: "bg-gradient-to-br from-purple-600 to-pink-600",
}

const videos = [
  {
    id: 1,
    title: "How to Maximize Your Health Insurance Benefits",
    description: "Learn how to get the most out of your NiFe health insurance coverage with these expert tips.",
    thumbnail: "/placeholder.svg?height=400&width=600&text=Health+Insurance+Tips",
    duration: "6:45",
    views: 12345,
    category: "Health Insurance",
    date: "November 5, 2023",
    color: "bg-gradient-to-br from-blue-600 to-cyan-600",
  },
  {
    id: 2,
    title: "Digital Gold Rewards Explained",
    description: "Understand how NiFe's unique digital gold rewards system works and how it helps build wealth.",
    thumbnail: "/placeholder.svg?height=400&width=600&text=Digital+Gold+Explained",
    duration: "5:18",
    views: 9876,
    category: "Wealth Building",
    date: "October 28, 2023",
    color: "bg-gradient-to-br from-yellow-600 to-amber-600",
  },
  {
    id: 3,
    title: "Hospital Network Benefits & Discounts",
    description: "Explore the extensive hospital network and learn how to access exclusive discounts.",
    thumbnail: "/placeholder.svg?height=400&width=600&text=Hospital+Network",
    duration: "7:22",
    views: 8765,
    category: "Health Insurance",
    date: "October 20, 2023",
    color: "bg-gradient-to-br from-green-600 to-emerald-600",
  },
  {
    id: 4,
    title: "Getting Started with Your NiFe RuPay Card",
    description: "A step-by-step guide to activating and using your NiFe RuPay card for maximum benefits.",
    thumbnail: "/placeholder.svg?height=400&width=600&text=RuPay+Card+Guide",
    duration: "4:56",
    views: 15432,
    category: "RuPay Card",
    date: "November 12, 2023",
    color: "bg-gradient-to-br from-indigo-600 to-blue-600",
  },
  {
    id: 5,
    title: "How to File a Health Insurance Claim",
    description: "Simple instructions for filing a health insurance claim with NiFe's streamlined process.",
    thumbnail: "/placeholder.svg?height=400&width=600&text=Claim+Process",
    duration: "8:10",
    views: 11234,
    category: "Health Insurance",
    date: "November 8, 2023",
    color: "bg-gradient-to-br from-red-600 to-rose-600",
  },
  {
    id: 6,
    title: "Member Testimonials: Real Success Stories",
    description: "Hear from actual NiFe members about their experiences with our health and wealth benefits.",
    thumbnail: "/placeholder.svg?height=400&width=600&text=Member+Testimonials",
    duration: "9:45",
    views: 18765,
    category: "Testimonials",
    date: "October 30, 2023",
    color: "bg-gradient-to-br from-purple-600 to-violet-600",
  },
  {
    id: 7,
    title: "Top-Up Insurance Options Explained",
    description: "Learn about enhancing your coverage with our discounted top-up insurance plans.",
    thumbnail: "/placeholder.svg?height=400&width=600&text=Top-Up+Insurance",
    duration: "5:34",
    views: 7654,
    category: "Health Insurance",
    date: "November 15, 2023",
    color: "bg-gradient-to-br from-teal-600 to-green-600",
  },
  {
    id: 8,
    title: "Converting Digital Gold to Physical Gold",
    description: "Step-by-step process for converting your digital gold rewards to physical gold coins or bars.",
    thumbnail: "/placeholder.svg?height=400&width=600&text=Digital+to+Physical",
    duration: "6:22",
    views: 9432,
    category: "Wealth Building",
    date: "November 3, 2023",
    color: "bg-gradient-to-br from-amber-600 to-yellow-600",
  },
]

const webinars = [
  {
    id: 1,
    title: "Maximizing Your Health Insurance Benefits",
    description:
      "Join our expert panel as they discuss strategies to get the most out of your NiFe health insurance coverage.",
    date: "November 25, 2023",
    time: "7:00 PM IST",
    duration: "60 min",
    speakers: 3,
    thumbnail: "/placeholder.svg?height=300&width=400&text=Live+Webinar",
    color: "bg-gradient-to-br from-purple-600 to-pink-600",
  },
  {
    id: 2,
    title: "Digital Gold Investment Masterclass",
    description:
      "Learn advanced strategies for maximizing returns on your digital gold investments with our financial experts.",
    date: "December 5, 2023",
    time: "6:30 PM IST",
    duration: "75 min",
    speakers: 2,
    thumbnail: "/placeholder.svg?height=300&width=400&text=Investment+Webinar",
    color: "bg-gradient-to-br from-yellow-600 to-amber-600",
  },
]

export default function VideoResources() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [videoType, setVideoType] = useState("tutorials")

  const categories = Array.from(new Set(videos.map((video) => video.category)))

  const filteredVideos = videos.filter((video) => activeCategory === null || video.category === activeCategory)

  return (
    <section className="py-12">
      <div className="container">
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Video Resources</h2>
          <p className="max-w-2xl text-gray-600">
            Watch our collection of videos to better understand NiFe's benefits and features. From tutorials to
            webinars, we have resources to help you make the most of your membership.
          </p>
        </div>

        <Tabs defaultValue="tutorials" onValueChange={setVideoType} className="w-full">
          <TabsList className="mx-auto mb-8 grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="tutorials">Video Tutorials</TabsTrigger>
            <TabsTrigger value="webinars">Live Webinars</TabsTrigger>
          </TabsList>

          <TabsContent value="tutorials" className="space-y-12">
            {/* Featured Video */}
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <div className={`absolute inset-0 ${featuredVideo.color} opacity-90`}></div>
              <div className="relative flex flex-col md:flex-row">
                <div className="md:w-3/5 p-6 md:p-10 text-white">
                  <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white">Featured Video</Badge>
                  <h3 className="mb-4 text-2xl md:text-3xl font-bold">{featuredVideo.title}</h3>
                  <p className="mb-6 text-white/80">{featuredVideo.description}</p>
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="flex items-center text-sm text-white/80">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{featuredVideo.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-white/80">
                      <Eye className="h-4 w-4 mr-1" />
                      <span>{featuredVideo.views.toLocaleString()} views</span>
                    </div>
                    <div className="flex items-center text-sm text-white/80">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{featuredVideo.date}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-white text-purple-700 hover:bg-white/90">
                      <Play className="mr-2 h-4 w-4" /> Watch Now
                    </Button>
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Button>
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      <Share2 className="mr-2 h-4 w-4" /> Share
                    </Button>
                  </div>
                </div>
                <div className="md:w-2/5 relative">
                  <div className="aspect-video md:h-full relative">
                    <Image
                      src={featuredVideo.thumbnail || "/placeholder.svg"}
                      alt={featuredVideo.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        className="rounded-full w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center"
                        size="icon"
                      >
                        <Play className="h-8 w-8 text-white" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={activeCategory === null ? "default" : "outline"}
                className={activeCategory === null ? "bg-gray-800" : ""}
                onClick={() => setActiveCategory(null)}
              >
                All Videos
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={activeCategory === category ? "bg-gray-800" : ""}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredVideos.map((video) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                    <div className="relative aspect-video">
                      <div className={`absolute inset-0 ${video.color} opacity-80`}></div>
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        fill
                        className="object-cover mix-blend-overlay"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Button
                          className="rounded-full w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center"
                          size="icon"
                        >
                          <Play className="h-6 w-6 text-white" />
                        </Button>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                        {video.duration}
                      </div>
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-white/20 hover:bg-white/30 text-white">{video.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4 flex-grow">
                      <h3 className="font-bold mb-2 line-clamp-1">{video.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{video.description}</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between items-center">
                      <div className="flex items-center text-xs text-gray-500">
                        <Eye className="h-3 w-3 mr-1" />
                        <span>{video.views.toLocaleString()} views</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button size="sm" className={video.color}>
                          <Play className="mr-1 h-4 w-4" /> Watch
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredVideos.length === 0 && (
              <div className="mt-8 rounded-lg border border-dashed border-gray-300 p-8 text-center">
                <p className="text-gray-500">No videos found in this category.</p>
                <Button variant="outline" className="mt-4" onClick={() => setActiveCategory(null)}>
                  View All Videos
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="webinars" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {webinars.map((webinar) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all h-full">
                    <div className="flex flex-col md:flex-row h-full">
                      <div className="md:w-2/5 relative">
                        <div className={`absolute inset-0 ${webinar.color}`}></div>
                        <Image
                          src={webinar.thumbnail || "/placeholder.svg"}
                          alt={webinar.title}
                          width={400}
                          height={300}
                          className="h-full w-full object-cover mix-blend-overlay"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-red-600 text-white hover:bg-red-700">LIVE</Badge>
                        </div>
                      </div>
                      <div className="md:w-3/5 p-6 flex flex-col">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={`${webinar.color} text-white`}>
                              {webinar.date} • {webinar.time}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{webinar.title}</h3>
                          <p className="text-gray-600 text-sm mb-4">{webinar.description}</p>
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex -space-x-2">
                            {Array.from({ length: webinar.speakers }).map((_, i) => (
                              <div key={i} className="h-8 w-8 rounded-full bg-purple-400 border-2 border-white">
                                <Image
                                  src={`/placeholder.svg?height=30&width=30&text=${i + 1}`}
                                  alt="Speaker"
                                  width={30}
                                  height={30}
                                  className="rounded-full"
                                />
                              </div>
                            ))}
                          </div>
                          <p className="text-sm text-gray-700">
                            <span className="font-bold">{webinar.speakers} Expert Speakers</span> • {webinar.duration} +
                            Q&A
                          </p>
                        </div>
                        <div className="mt-auto">
                          <Button className={webinar.color}>Register Now (Free)</Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-gray-50 p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Webinar Schedule</h3>
              <p className="text-gray-600 mb-6">
                Join our expert-led webinars to learn more about health insurance, digital gold investments, and
                wellness benefits. All webinars are free for NiFe members.
              </p>
              <Button>
                View Full Schedule <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Request Custom Video */}
        <div className="mt-12 rounded-xl bg-white shadow-sm p-8 text-center">
          <h3 className="text-xl font-bold text-purple-700 mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            If you need information on a specific topic that isn't covered in our video library, let us know. Our team
            can create custom tutorial videos to address your questions.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700">Request a Custom Video</Button>
        </div>
      </div>
    </section>
  )
}
