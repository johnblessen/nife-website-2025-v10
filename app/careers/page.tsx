import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Briefcase, Clock, Mail, Phone } from "lucide-react"

export default function CareersPage() {
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
            <Link href="/careers" className="text-sm font-medium text-purple-600">
              Careers
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-purple-600">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Mission</h1>
            <p className="text-xl text-white/90 mb-8">
              Help us revolutionize healthcare access in India and build innovative solutions that impact millions of
              lives.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
                <Input
                  placeholder="Search for jobs..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600 mb-4">
              Why Join NiFe
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Build Your Career With Purpose</h2>
            <p className="text-gray-600">
              At NiFe, we're not just building a product - we're on a mission to transform healthcare access in India.
              Join us and be a part of this meaningful journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
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
                    className="h-6 w-6 text-purple-600"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Meaningful Impact</h3>
                <p className="text-gray-600">
                  Your work directly contributes to making quality healthcare accessible to millions of Indians who
                  previously couldn't afford it.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
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
                    className="h-6 w-6 text-purple-600"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Vibrant Culture</h3>
                <p className="text-gray-600">
                  We foster a culture of innovation, collaboration, and continuous learning. We celebrate diversity and
                  value different perspectives.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
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
                    className="h-6 w-6 text-purple-600"
                  >
                    <line x1="12" y1="20" x2="12" y2="10"></line>
                    <line x1="18" y1="20" x2="18" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="16"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Growth Opportunities</h3>
                <p className="text-gray-600">
                  As a rapidly growing startup, we offer numerous opportunities for professional development and career
                  advancement.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Benefits & Perks</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
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
                      className="h-5 w-5 text-green-500 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Comprehensive health insurance for you and your family</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="h-5 w-5 text-green-500 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Competitive salary and equity options</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="h-5 w-5 text-green-500 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Flexible work arrangements and remote work options</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="h-5 w-5 text-green-500 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Learning and development budget</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="h-5 w-5 text-green-500 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Regular team outings and events</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="h-5 w-5 text-green-500 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Wellness programs and mental health support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="relative rounded-xl overflow-hidden h-full min-h-[300px]">
              <Image
                src="/placeholder.svg?height=500&width=500&text=NiFe+Team"
                alt="NiFe Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Our Team</h3>
                  <p>
                    We're a diverse team of passionate individuals working together to revolutionize healthcare access
                    in India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600 mb-4">
              Open Positions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Growing Team</h2>
            <p className="text-gray-600">
              We're looking for talented individuals who are passionate about making a difference in healthcare and
              fintech.
            </p>
          </div>

          <Tabs defaultValue="engineering" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-8">
              <TabsTrigger value="engineering">Engineering</TabsTrigger>
              <TabsTrigger value="product">Product</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
            </TabsList>

            <TabsContent value="engineering" className="space-y-4">
              {[
                {
                  title: "Senior Backend Engineer",
                  location: "Bengaluru, India",
                  type: "Full-time",
                  experience: "5+ years",
                  tags: ["Node.js", "Python", "AWS", "Microservices"],
                },
                {
                  title: "Frontend Developer",
                  location: "Bengaluru, India",
                  type: "Full-time",
                  experience: "3+ years",
                  tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
                },
                {
                  title: "DevOps Engineer",
                  location: "Remote, India",
                  type: "Full-time",
                  experience: "4+ years",
                  tags: ["Kubernetes", "Docker", "CI/CD", "AWS"],
                },
                {
                  title: "Mobile App Developer",
                  location: "Bengaluru, India",
                  type: "Full-time",
                  experience: "3+ years",
                  tags: ["React Native", "Flutter", "iOS", "Android"],
                },
                {
                  title: "Data Engineer",
                  location: "Bengaluru, India",
                  type: "Full-time",
                  experience: "4+ years",
                  tags: ["Python", "SQL", "Spark", "Data Pipelines"],
                },
                {
                  title: "QA Engineer",
                  location: "Bengaluru, India",
                  type: "Full-time",
                  experience: "3+ years",
                  tags: ["Selenium", "Cypress", "API Testing", "Test Automation"],
                },
                {
                  title: "Security Engineer",
                  location: "Bengaluru, India",
                  type: "Full-time",
                  experience: "5+ years",
                  tags: ["Application Security", "Penetration Testing", "OWASP"],
                },
                {
                  title: "Machine Learning Engineer",
                  location: "Bengaluru, India",
                  type: "Full-time",
                  experience: "4+ years",
                  tags: ["Python", "TensorFlow", "PyTorch", "NLP"],
                },
              ].map((job, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{job.experience}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {job.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="bg-purple-100 text-purple-800 hover:bg-purple-200"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button className="md:self-start whitespace-nowrap bg-purple-600 hover:bg-purple-700">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="product" className="space-y-4">
              {[
                {
                  title: "Product Manager",
                  location: "Bengaluru, India",
                  type: "Full-time",
                  experience: "5+ years",
                  tags: ["Healthcare", "Fintech", "B2C Products", "Agile"],
                },
                {
                  title: "Product Analyst",
                  location: "Bengaluru, India",
                  type: "Full-time",
                  experience: "3+ years",
                  tags: ["Data Analysis", "SQL", "Product Metrics", "A/B Testing"],
                },
                {
                  title: "Technical Product Manager",
                  location: "Bengaluru, India",
                  type: "Full-time",
                  experience: "4+ years",
                  tags: ["API Products", "Developer Experience", "Technical Background"],
                },
                {
                  title: "Associate Product Manager",
                  location: "Bengaluru, India",
                  type: "Full-time",
                  experience: "2+ years",
                  tags: ["Product Development", "User Research", "Roadmapping"],
                },
              ].map((job, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{job.experience}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {job.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="bg-purple-100 text-purple-800 hover:bg-purple-200"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button className="md:self-start whitespace-nowrap bg-purple-600 hover:bg-purple-700">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="design" className="space-y-4">
              {[
                {
                  title: "UI/UX Designer",
                  location: "Bengaluru, India",
                  type: "Full-time",
                  experience: "3+ years",
                  tags: ["Figma", "User Research", "Wireframing", "Prototyping"],
                },
                {
                  title: "Product Designer",
                  location: "Bengaluru, India",
                  type: "Full-time",
                  experience: "4+ years",
                  tags: ["Mobile Design", "Design Systems", "User Testing"],
                },
                {
                  title: "Visual Designer",
                  location: "Remote, India",
                  type: "Full-time",
                  experience: "3+ years",
                  tags: ["Brand Identity", "Typography", "Illustration"],
                },
                {
                  title: "Motion Designer",
                  location: "Bengaluru, India",
                  type: "Full-time",
                  experience: "2+ years",
                  tags: ["After Effects", "Lottie", "UI Animation"],
                },
              ].map((job, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{job.experience}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {job.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="bg-purple-100 text-purple-800 hover:bg-purple-200"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button className="md:self-start whitespace-nowrap bg-purple-600 hover:bg-purple-700">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="business" className="space-y-4">
              {[
                {
                  title: "Business Development Manager",
                  location: "Bengaluru, India",
                  type: "Full-time",
                  experience: "5+ years",
                  tags: ["Healthcare", "Partnerships", "B2B Sales"],
                },
                {
                  title: "Marketing Manager",
                  location: "Bengaluru, India",
                  type: "Full-time",
                  experience: "4+ years",
                  tags: ["Digital Marketing", "Growth", "Content Strategy"],
                },
                {
                  title: "Customer Success Manager",
                  location: "Bengaluru, India",
                  type: "Full-time",
                  experience: "3+ years",
                  tags: ["Customer Retention", "Relationship Management"],
                },
                {
                  title: "HR Business Partner",
                  location: "Bengaluru, India",
                  type: "Full-time",
                  experience: "5+ years",
                  tags: ["Talent Acquisition", "Employee Experience", "HR Tech"],
                },
              ].map((job, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{job.experience}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {job.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="bg-purple-100 text-purple-800 hover:bg-purple-200"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button className="md:self-start whitespace-nowrap bg-purple-600 hover:bg-purple-700">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600 mb-4">
              Employee Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Life at NiFe</h2>
            <p className="text-gray-600">
              Hear from our team members about their experiences working at NiFe and the impact they're making.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ananya Patel",
                role: "Senior Product Manager",
                quote:
                  "Working at NiFe has been the most rewarding experience of my career. The opportunity to build products that make healthcare accessible to millions is incredibly fulfilling.",
                image: "/placeholder.svg?height=100&width=100&text=Ananya",
              },
              {
                name: "Rahul Sharma",
                role: "Frontend Developer",
                quote:
                  "The engineering culture at NiFe is amazing. We're encouraged to innovate, experiment, and learn continuously. The problems we solve are challenging and meaningful.",
                image: "/placeholder.svg?height=100&width=100&text=Rahul",
              },
              {
                name: "Priya Desai",
                role: "Customer Success Lead",
                quote:
                  "What I love most about NiFe is the impact we're making. Every day, I hear stories from customers about how our product has made quality healthcare affordable for their families.",
                image: "/placeholder.svg?height=100&width=100&text=Priya",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-purple-600 text-sm mb-4">{testimonial.role}</p>
                    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make an Impact?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join our mission to revolutionize healthcare access in India and build innovative solutions that impact
              millions of lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                View All Openings
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Join Our Talent Network
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
