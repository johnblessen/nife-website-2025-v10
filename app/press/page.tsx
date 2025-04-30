import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Download, ExternalLink, ChevronRight, MapPin, Mail, Phone } from "lucide-react"
import VapiAssistant from "@/components/vapi-assistant"

export default function PressPage() {
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
            <Link href="/blog" className="text-sm font-medium hover:text-purple-600">
              Blog
            </Link>
            <Link href="/press" className="text-sm font-medium text-purple-600">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Press & Media</h1>
            <p className="text-xl text-white/90 mb-8">
              Stay updated with the latest news, announcements, and media coverage about NiFe.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-purple-600 hover:bg-white/90">
                Press Kit <Download className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Media Inquiries
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Press Release */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600 mb-4">
                Featured Announcement
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                NiFe Raises $25 Million to Expand Healthcare Access Across India
              </h2>
              <p className="text-gray-600 mb-6">
                NiFe, the company behind India's first free health insurance card, has raised $25 million in Series A
                funding led by Sequoia Capital India, with participation from Accel Partners and Elevation Capital. The
                funding will be used to expand NiFe's hospital network, enhance its technology platform, and reach more
                users across India.
              </p>
              <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>April 10, 2023</span>
                </div>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Read Full Release <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-100 rounded-lg z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-100 rounded-lg z-0"></div>
              <Image
                src="/placeholder.svg?height=500&width=500&text=Funding+Announcement"
                alt="Funding Announcement"
                width={500}
                height={500}
                className="rounded-xl shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600 mb-4">
              Press Releases
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Latest Announcements</h2>
            <p className="text-gray-600">Stay updated with the latest news and announcements from NiFe.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "NiFe Partners with Apollo Hospitals to Offer Enhanced Healthcare Benefits",
                excerpt:
                  "NiFe announces a strategic partnership with Apollo Hospitals, India's leading healthcare provider, to offer enhanced discounts and benefits to NiFe members.",
                date: "March 15, 2023",
                category: "Partnership",
              },
              {
                title: "NiFe Launches Digital Gold Rewards Program for RuPay Card Users",
                excerpt:
                  "NiFe introduces a first-of-its-kind digital gold rewards program that allows users to accumulate gold with every transaction made using their NiFe RuPay card.",
                date: "February 28, 2023",
                category: "Product Launch",
              },
              {
                title: "NiFe Expands to 10 New Cities Across India",
                excerpt:
                  "NiFe announces expansion to 10 new cities across India, bringing its innovative health insurance and wellness benefits to millions more Indians.",
                date: "January 20, 2023",
                category: "Expansion",
              },
              {
                title: "NiFe Appoints Former NPCI Executive as Chief Operating Officer",
                excerpt:
                  "NiFe strengthens its leadership team with the appointment of Anand Sharma, former NPCI executive, as Chief Operating Officer to drive operational excellence.",
                date: "December 15, 2022",
                category: "Leadership",
              },
              {
                title: "NiFe Crosses 500,000 Active Users Milestone",
                excerpt:
                  "NiFe announces a significant milestone of crossing 500,000 active users, demonstrating the strong market demand for its innovative health insurance and wellness solutions.",
                date: "November 10, 2022",
                category: "Milestone",
              },
              {
                title: "NiFe Wins 'Most Innovative Fintech Solution' at India FinTech Awards",
                excerpt:
                  "NiFe's innovative approach to combining health insurance with financial benefits has been recognized with the 'Most Innovative Fintech Solution' award at the prestigious India FinTech Awards.",
                date: "October 5, 2022",
                category: "Award",
              },
            ].map((release, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">{release.category}</Badge>
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{release.date}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{release.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{release.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-purple-600 hover:text-purple-700 p-0">
                    Read Full Release <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline">View All Press Releases</Button>
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600 mb-4">
              Media Coverage
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">NiFe in the News</h2>
            <p className="text-gray-600">
              Read what the media is saying about NiFe and our mission to revolutionize healthcare access in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "How NiFe is Revolutionizing Healthcare Access in India",
                publication: "The Economic Times",
                excerpt:
                  "NiFe's innovative approach to combining health insurance with a RuPay card is making quality healthcare accessible to millions of Indians who previously couldn't afford it.",
                date: "April 5, 2023",
                logo: "/placeholder.svg?height=50&width=150&text=Economic+Times",
                link: "#",
              },
              {
                title: "NiFe: The Next Big Startup Solving Healthcare for a Billion People",
                publication: "YourStory",
                excerpt:
                  "With its unique model of providing complimentary health insurance through a RuPay card, NiFe is addressing one of India's biggest challenges - affordable healthcare access.",
                date: "March 20, 2023",
                logo: "/placeholder.svg?height=50&width=150&text=YourStory",
                link: "#",
              },
              {
                title: "Digital Gold: How NiFe is Helping Indians Build Wealth Through Everyday Transactions",
                publication: "Mint",
                excerpt:
                  "NiFe's digital gold rewards program is not just helping users access healthcare but also building wealth through everyday transactions, creating a unique value proposition.",
                date: "February 15, 2023",
                logo: "/placeholder.svg?height=50&width=150&text=Mint",
                link: "#",
              },
              {
                title: "The Future of Health Insurance in India: Insights from NiFe's CEO",
                publication: "Business Standard",
                excerpt:
                  "In an exclusive interview, NiFe's CEO Rajesh Kumar shares his vision for the future of health insurance in India and how NiFe is leading this transformation.",
                date: "January 25, 2023",
                logo: "/placeholder.svg?height=50&width=150&text=Business+Standard",
                link: "#",
              },
            ].map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <div className="h-8">
                      <Image
                        src={article.logo || "/placeholder.svg"}
                        alt={article.publication}
                        width={150}
                        height={50}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl mt-4">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="gap-2">
                    Read Article <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline">View All Media Coverage</Button>
          </div>
        </div>
      </section>

      {/* Make in India Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=250&width=250&text=Make+in+India"
                    alt="Make in India"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=250&width=250&text=RuPay"
                    alt="RuPay"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=250&width=250&text=Digital+India"
                    alt="Digital India"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=250&width=250&text=Startup+India"
                    alt="Startup India"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-block rounded-full bg-orange-200 px-3 py-1 text-sm text-orange-800 mb-4">
                Proudly Indian
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Supporting Make in India & RuPay</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  NiFe is proud to be a part of India's journey towards self-reliance and digital transformation. We
                  believe in the vision of a healthier and financially inclusive India, which is why we've partnered
                  with RuPay, India's homegrown payment network.
                </p>
                <p>
                  Our integration with RuPay enables us to offer a unique value proposition - a card that not only
                  provides health insurance but also helps users build wealth through digital gold rewards on everyday
                  transactions.
                </p>
                <p>
                  As a Make in India startup, we're committed to creating solutions that address the unique healthcare
                  challenges of our country, while contributing to the Digital India vision by making these services
                  accessible through technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Contact Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600 mb-4">
              Press Contact
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600">
              For press inquiries, interview requests, or media opportunities, please contact our press team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <Mail className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-4">
                    For press inquiries, please reach out to our media relations team.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Link href="mailto:press@NiFecard.com">press@NiFecard.com</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <Phone className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-4">
                    Our press team is available for media inquiries during business hours.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Link href="tel:+911234567890">+91 1234 567 890</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <MapPin className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Visit Us</h3>
                  <p className="text-gray-600 mb-4">Our headquarters is located in Bengaluru, India.</p>
                  <Button variant="outline" className="w-full">
                    <Link href="https://goo.gl/maps" target="_blank">
                      Get Directions
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
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
                  <MapPin className="h-5 w-5 mt-0.5" />
                  <span>NiFe Tower, 123 Health Avenue, Koramangala, Bengaluru</span>
                </li>
                <li className="flex items-start gap-2 text-gray-400">
                  <Mail className="h-5 w-5 mt-0.5" />
                  <span>info@NiFecard.com</span>
                </li>
                <li className="flex items-start gap-2 text-gray-400">
                  <Phone className="h-5 w-5 mt-0.5" />
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

      {/* Vapi AI Assistant */}
      <VapiAssistant />
    </div>
  )
}
