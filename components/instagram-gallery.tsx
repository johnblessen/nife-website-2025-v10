"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, MessageCircle, Share2, Play } from "lucide-react"

export default function InstagramGallery() {
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({})
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

  const toggleLike = (id: string) => {
    setLikedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const handleVideoPlay = (id: string) => {
    setPlayingVideo(id)
  }

  const handleVideoPause = () => {
    setPlayingVideo(null)
  }

  const posts = [
    {
      id: "post1",
      type: "image",
      username: "NiFe_wellness",
      avatar: "/images/instagram1.png?height=40&width=40",
      image: "/insta images/wellness.jpg?height=400&width=400&text=NiFe+Card+Unboxing",
      caption: "Just received my NiFe card! Can't wait to start enjoying the benefits. #NiFeCard #HealthInsurance",
      likes: 124,
      comments: 18,
      time: "2 hours ago",
    },
    {
      id: "post2",
      type: "image",
      username: "health_enthusiast",
      avatar: "/images/instagram1.png?height=40&width=40",
      image: "/insta images/healthcare expenses.jpg?height=400&width=400&text=Hospital+Visit",
      caption: "Used my NiFe card at Apollo Hospital today and got 20% discount on my consultation! #NiFeBenefits",
      likes: 89,
      comments: 7,
      time: "1 day ago",
    },
    {
      id: "post3",
      type: "image",
      username: "fitness_guru",
      avatar: "/images/instagram1.png?height=40&width=40",
      image: "/insta images/health.jpg?height=400&width=400&text=Workout+Session",
      caption: "Join me for a quick workout session sponsored by NiFe! Stay healthy and earn rewards. #NiFeWellness",
      likes: 215,
      comments: 32,
      time: "3 days ago",
    },
    {
      id: "post4",
      type: "image",
      username: "gold_investor",
      avatar: "/images/instagram1.png?height=40&width=40",
      image: "/insta images/gold.jpg?height=400&width=400&text=Digital+Gold+Rewards",
      caption: "My digital gold rewards from NiFe have grown to 2 grams in just 3 months! #NiFeGold #PassiveIncome",
      likes: 156,
      comments: 24,
      time: "1 week ago",
    },
    {
      id: "post5",
      type: "video",
      username: "gold_rewards",
      avatar: "/images/instagram1.png?height=40&width=40",
      videoUrl: "/insta images/Rewards1.mpeg4",
      thumbnail: "/insta images/health.jpg",
      caption: "My digital gold rewards from NiFe have grown to 2 grams in just 3 months! #NiFeGold #PassiveIncome",
      likes: 156,
      comments: 24,
      time: "1 week ago",
    },
    {
      id: "post6",
      type: "video",
      username: "family-protect",
      avatar: "/images/instagram1.png?height=40&width=40",
      videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_fN2Cr1cMwcAB8RG7Pe5Tu69EuhJt/w6KyYRGFsm3m3f3A33RL_-/public/insta%20images/familyprotect.mp4",
      thumbnail: "/insta images/wellness.jpg",
      caption: "My digital gold rewards from NiFe have grown to 2 grams in just 3 months! #NiFeGold #PassiveIncome",
      likes: 156,
      comments: 24,
      time: "1 week ago",
    },
    {
      id: "post7",
      type: "video",
      username: "family_rewards",
      avatar: "/images/instagram1.png?height=40&width=40",
      videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_fN2Cr1cMwcAB8RG7Pe5Tu69EuhJt/_Uo9drMM-7eqCF27G-sB5A/public/insta%20images/unlock.mp4",
      thumbnail: "/insta images/health2.jpg",
      caption: "My digital gold rewards from NiFe have grown to 2 grams in just 3 months! #NiFeGold #PassiveIncome",
      likes: 156,
      comments: 24,
      time: "1 week ago",
    },
    {
      id: "post8",
      type: "video",
      username: "NiFe_intro",
      avatar: "/images/instagram1.png?height=40&width=40",
      videoUrl: "/insta images/NiFeintro.mp4",
      thumbnail: "/insta images/health3.jpg",
      caption: "My digital gold rewards from NiFe have grown to 2 grams in just 3 months! #NiFeGold #PassiveIncome",
      likes: 156,
      comments: 24,
      time: "1 week ago",
    },
  ]

  return (
    <div className="space-y-8">
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
        <TabsContent value="posts" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts
              .filter((post) => post.type === "image")
              .map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-3 flex items-center gap-2 border-b">
                    <div className="h-8 w-8 rounded-full bg-purple-100 overflow-hidden">
                      <Image
                        src={post.avatar || "/placeholder.svg"}
                        alt={post.username}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <div className="text-sm font-medium">{post.username}</div>
                  </div>
                  <div className="aspect-square relative">
                    <Image src={post.image || "/placeholder.svg"} alt="Instagram post" fill className="object-cover" />
                  </div>
                  <div className="p-3">
                    <div className="flex items-center gap-4 mb-2">
                      <button onClick={() => toggleLike(post.id)} className="flex items-center gap-1">
                        <Heart
                          className={`h-5 w-5 ${likedPosts[post.id] ? "fill-red-500 text-red-500" : "text-gray-700"}`}
                        />
                        <span className="text-xs">{likedPosts[post.id] ? post.likes + 1 : post.likes}</span>
                      </button>
                      <button className="flex items-center gap-1">
                        <MessageCircle className="h-5 w-5 text-gray-700" />
                        <span className="text-xs">{post.comments}</span>
                      </button>
                      <button className="flex items-center gap-1">
                        <Share2 className="h-5 w-5 text-gray-700" />
                      </button>
                    </div>
                    <p className="text-sm mb-1">
                      <span className="font-medium">{post.username}</span> {post.caption}
                    </p>
                    <p className="text-xs text-gray-500">{post.time}</p>
                  </div>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="videos" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts
              .filter((post) => post.type === "video")
              .map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-3 flex items-center gap-2 border-b">
                    <div className="h-8 w-8 rounded-full bg-purple-100 overflow-hidden">
                      <Image
                        src={post.avatar || "/placeholder.svg"}
                        alt={post.username}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <div className="text-sm font-medium">{post.username}</div>
                  </div>
                  <div className="aspect-square relative">
                    <Image
                      src={post.thumbnail || "/placeholder.svg"}
                      alt="Video thumbnail"
                      fill
                      className="object-cover"
                      style={{ display: playingVideo === post.id ? 'none' : 'block' }}
                    />
                    <video
                      src={post.videoUrl}
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                      onClick={() => handleVideoPlay(post.id)}
                      style={{ display: playingVideo === post.id ? 'block' : 'none' }}
                    />
                    {playingVideo !== post.id && (
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <Button 
                          variant="outline" 
                          className="rounded-full w-12 h-12 p-0 bg-white/70 hover:bg-white"
                          onClick={() => handleVideoPlay(post.id)}
                        >
                          <Play className="h-5 w-5 text-purple-600" />
                        </Button>
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <div className="flex items-center gap-4 mb-2">
                      <button onClick={() => toggleLike(post.id)} className="flex items-center gap-1">
                        <Heart
                          className={`h-5 w-5 ${likedPosts[post.id] ? "fill-red-500 text-red-500" : "text-gray-700"}`}
                        />
                        <span className="text-xs">{likedPosts[post.id] ? post.likes + 1 : post.likes}</span>
                      </button>
                      <button className="flex items-center gap-1">
                        <MessageCircle className="h-5 w-5 text-gray-700" />
                        <span className="text-xs">{post.comments}</span>
                      </button>
                      <button className="flex items-center gap-1">
                        <Share2 className="h-5 w-5 text-gray-700" />
                      </button>
                    </div>
                    <p className="text-sm mb-1">
                      <span className="font-medium">{post.username}</span> {post.caption}
                    </p>
                    <p className="text-xs text-gray-500">{post.time}</p>
                  </div>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="text-center">
        <Button variant="outline" className="mt-6">
          View More Posts
        </Button>
      </div>
    </div>
  )
}
