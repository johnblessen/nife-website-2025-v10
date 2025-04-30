import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Clock, Eye, Share2, Download, ChevronRight } from "lucide-react"
import VapiAssistant from "@/components/vapi-assistant"

const featuredVideo = {
  id: "featured",
  title: "NiFe: Revolutionizing Health Insurance & Wealth Building",
  description:
    "Watch our comprehensive explainer video to understand how NiFe is transforming the health insurance landscape while helping members build wealth through digital gold rewards.",
  thumbnail: "/placeholder.svg?height=600&width=1200&text=NiFe+Explainer+Video",
  duration: "4:32",
  views: 24567,
  date: "October 15, 2023",
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
  },
]

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Explainer Videos & Tutorials</h1>
            <p className="text-xl text-white/80">
              Watch our collection of videos to better understand NiFe's benefits and features.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        {/* Featured Video */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-12">
          <div className="relative aspect-video">
            <Image
              src={featuredVideo.thumbnail || "/placeholder.svg"}
              alt={featuredVideo.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                className="rounded-full w-16 h-16 bg-purple-600 hover:bg-purple-700 flex items-center justify-center"
                size="icon"
              >
                <Play className="h-8 w-8 text-white" />
              </Button>
            </div>
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
              {featuredVideo.duration}
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{featuredVideo.title}</h2>
            <p className="text-gray-600 mb-4">{featuredVideo.description}</p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center text-sm text-gray-500">
                <Eye className="h-4 w-4 mr-1" />
                <span>{featuredVideo.views.toLocaleString()} views</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>{featuredVideo.date}</span>
              </div>
              <div className="flex-grow"></div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" /> Share
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                  <Play className="mr-2 h-4 w-4" /> Watch Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button variant="outline" className="rounded-full">
            All Videos
          </Button>
          <Button variant="outline" className="rounded-full bg-purple-50">
            Health Insurance
          </Button>
          <Button variant="outline" className="rounded-full">
            Wealth Building
          </Button>
          <Button variant="outline" className="rounded-full">
            RuPay Card
          </Button>
          <Button variant="outline" className="rounded-full">
            Testimonials
          </Button>
          <Button variant="outline" className="rounded-full">
            Tutorials
          </Button>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden hover:shadow-md transition-all">
              <div className="relative aspect-video">
                <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/30">
                  <Button
                    className="rounded-full w-12 h-12 bg-purple-600 hover:bg-purple-700 flex items-center justify-center"
                    size="icon"
                  >
                    <Play className="h-6 w-6 text-white" />
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {video.duration}
                </div>
                <div className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded-full text-xs">
                  {video.category}
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{video.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-gray-600 text-sm line-clamp-2">{video.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between pt-0">
                <div className="flex items-center text-xs text-gray-500">
                  <Eye className="h-3 w-3 mr-1" />
                  <span>{video.views.toLocaleString()} views</span>
                </div>
                <div className="text-xs text-gray-500">{video.date}</div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Webinars Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Upcoming Live Webinars</h2>
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 relative">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Live+Webinar"
                  alt="Live Webinar"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  LIVE
                </div>
              </div>
              <div className="md:w-2/3 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    November 25, 2023 • 7:00 PM IST
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-purple-700">Maximizing Your Health Insurance Benefits</h3>
                <p className="text-gray-700">
                  Join our expert panel as they discuss strategies to get the most out of your NiFe health insurance
                  coverage. Learn about lesser-known benefits, efficient claim processes, and how to optimize your
                  healthcare expenses.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full bg-purple-400 border-2 border-white">
                        <Image
                          src={`/placeholder.svg?height=30&width=30&text=${i}`}
                          alt="Speaker"
                          width={30}
                          height={30}
                          className="rounded-full"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">3 Expert Speakers</span> • 60 min + Q&A
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-purple-600 hover:bg-purple-700">Register Now (Free)</Button>
                  <Button variant="outline">
                    View All Upcoming Webinars <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Request Custom Video */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-8 text-center">
          <h3 className="text-xl font-bold text-purple-700 mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            If you need information on a specific topic that isn't covered in our video library, let us know. Our team
            can create custom tutorial videos to address your questions.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700">Request a Custom Video</Button>
        </div>
      </div>
      <VapiAssistant />
    </main>
  )
}
