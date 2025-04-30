import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, User, ChevronRight, ArrowRight } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/NiFe-logo.png" alt="NiFe Logo" width={180} height={40} className="h-10 w-auto" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-purple-600">
              Home
            </Link>
            <Link href="/about-us" className="text-sm font-medium hover:text-purple-600">
              About Us
            </Link>
            <Link href="/careers" className="text-sm font-medium hover:text-purple-600">
              Careers
            </Link>
            <Link href="/blog" className="text-sm font-medium text-purple-600">
              Blog
            </Link>
            <Link href="/press" className="text-sm font-medium hover:text-purple-600">
              Press
            </Link>
            <Link href="/partners" className="text-sm font-medium hover:text-purple-600">
              Partners
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              <Link href="/login">Login</Link>
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">NiFe Blog</h1>
            <p className="text-xl text-white/90 mb-8">
              Insights, updates, and stories about healthcare, fintech, and wellness in India.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600 mb-4">
                Featured Article
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How NiFe is Revolutionizing Healthcare Access in India
              </h2>
              <p className="text-gray-600 mb-6">
                In a country where healthcare costs can be prohibitive for many, NiFe is changing the game by providing
                complimentary health insurance and hospital discounts through its innovative RuPay card. Learn how we're
                making quality healthcare accessible to millions of Indians.
              </p>
              <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>April 15, 2023</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>Rajesh Kumar, CEO</span>
                </div>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Read Full Article <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-100 rounded-lg z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-100 rounded-lg z-0"></div>
              <Image
                src="/placeholder.svg?height=500&width=500&text=Healthcare+Access"
                alt="Healthcare Access"
                width={500}
                height={500}
                className="rounded-xl shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <div>
              <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600 mb-4">
                Latest Articles
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Stay Updated</h2>
            </div>
            <div className="hidden md:block">
              <Button variant="outline" className="flex items-center gap-2">
                View All Articles <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of Health Insurance in India",
                excerpt:
                  "As India's healthcare landscape evolves, new models of health insurance are emerging. Discover how NiFe is leading this transformation.",
                image: "/placeholder.svg?height=300&width=500&text=Health+Insurance",
                date: "April 10, 2023",
                author: "Priya Sharma",
                category: "Healthcare",
              },
              {
                title: "Digital Gold: A New Way to Build Wealth",
                excerpt:
                  "Digital gold is revolutionizing how Indians invest in the precious metal. Learn how NiFe's RuPay card helps users accumulate gold with every transaction.",
                image: "/placeholder.svg?height=300&width=500&text=Digital+Gold",
                date: "April 5, 2023",
                author: "Vikram Singh",
                category: "Fintech",
              },
              {
                title: "Hospital Partnerships: Creating a Win-Win Ecosystem",
                excerpt:
                  "NiFe's partnerships with top hospitals are creating a healthcare ecosystem that benefits both patients and providers. Here's how it works.",
                image: "/placeholder.svg?height=300&width=500&text=Hospital+Partnerships",
                date: "March 28, 2023",
                author: "Ananya Patel",
                category: "Partnerships",
              },
            ].map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">{article.category}</Badge>
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{article.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{article.author}</span>
                  </div>
                  <Button variant="ghost" className="text-purple-600 hover:text-purple-700 p-0">
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button variant="outline">View All Articles</Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600 mb-4">
              Categories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore Topics</h2>
            <p className="text-gray-600">
              Dive into our content categories to learn more about healthcare, fintech, wellness, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "Healthcare",
                description: "Insights on healthcare access, insurance, and medical services in India.",
                image: "/placeholder.svg?height=200&width=300&text=Healthcare",
                count: 24,
              },
              {
                title: "Fintech",
                description: "Exploring the intersection of finance and technology in the Indian market.",
                image: "/placeholder.svg?height=200&width=300&text=Fintech",
                count: 18,
              },
              {
                title: "Wellness",
                description: "Tips and advice for maintaining physical and mental wellbeing.",
                image: "/placeholder.svg?height=200&width=300&text=Wellness",
                count: 15,
              },
              {
                title: "Company News",
                description: "Updates on NiFe's growth, partnerships, and impact.",
                image: "/placeholder.svg?height=200&width=300&text=Company+News",
                count: 12,
              },
            ].map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-xl font-bold">{category.title}</h3>
                      <p className="text-sm text-white/80">{category.count} articles</p>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-purple-600 hover:text-purple-700 p-0">
                    View Articles <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Stay updated with the latest insights, news, and stories about healthcare, fintech, and wellness in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-white text-purple-600 hover:bg-white/90 whitespace-nowrap">Subscribe</Button>
            </div>
            <p className="text-white/60 text-xs mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from NiFe.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src="/images/NiFe-logo.png" alt="NiFe Logo" width={120} height={30} className="h-8 w-auto" />
              </div>
              <p className="text-gray-400">
                World's first free health insurance card. A holistic wellness membership to take care of health and
                wealth.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm-1.24 15.5H8.5v-7.5h2.26v7.5zm-1.13-8.31c-.73 0-1.32-.6-1.32-1.34 0-.74.6-1.34 1.32-1.34.73 0 1.32.6 1.32 1.34 0 .74-.59 1.34-1.32 1.34zm9.37 8.31h-2.25v-3.97c0-.97-.02-2.22-1.35-2.22-1.35 0-1.56 1.06-1.56 2.15v4.04h-2.25v-7.5h2.16v.99h.03c.35-.66 1.2-1.34 2.46-1.34 2.64 0 3.13 1.73 3.13 3.99v3.86z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about-us" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-gray-400 hover:text-white">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="text-gray-400 hover:text-white">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Flyers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Brochures
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Videos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mt-0.5"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>NiFe Tower, 123 Health Avenue, Koramangala, Bengaluru</span>
                </li>
                <li className="flex items-start gap-2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mt-0.5"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>info@NiFecard.com</span>
                </li>
                <li className="flex items-start gap-2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mt-0.5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>+91 1800-123-4567</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} NiFe. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
