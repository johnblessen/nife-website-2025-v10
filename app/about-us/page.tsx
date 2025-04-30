import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Mail, Phone, ChevronRight, Users, Award, Target, Heart } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About NiFe</h1>
            <p className="text-xl text-white/90 mb-8">
              We're on a mission to make quality healthcare accessible and affordable for every Indian citizen while
              helping them build wealth through everyday transactions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                <div className="text-3xl font-bold">1K+</div>
                <div className="text-sm text-white/80">Active Users</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                <div className="text-3xl font-bold">₹500Cr+</div>
                <div className="text-sm text-white/80">Insurance Coverage</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                <div className="text-3xl font-bold">200+</div>
                <div className="text-sm text-white/80">Hospital Partners</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                <div className="text-3xl font-bold">9kg+</div>
                <div className="text-sm text-white/80">Digital Gold Rewards</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600 mb-4">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Revolutionizing Healthcare Access in India</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2024, NiFe was born from a simple yet powerful idea: what if every Indian citizen could
                  access quality healthcare without worrying about affordability?
                </p>
                <p>
                  Our founders, having experienced the challenges of healthcare access firsthand, set out to create a
                  solution that combines health insurance, hospital discounts, and wealth-building opportunities in one
                  seamless package.
                </p>
                <p>
                  The result is NiFe - the world's first free health insurance card that not only provides comprehensive
                  health coverage but also helps users build wealth through digital gold rewards on everyday
                  transactions.
                </p>
                <p>
                  Today, NiFe is trusted by over 1 million users across India and has partnered with 200+ top hospitals
                  to make quality healthcare accessible to all.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-100 rounded-lg z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-100 rounded-lg z-0"></div>
              <Image
                src="/images/medical1.png?height=500&width=500&text=NiFe+Office"
                alt="NiFe Office"
                width={500}
                height={500}
                className="rounded-xl shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600 mb-4">
              Our Mission & Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Drives Us Forward</h2>
            <p className="text-gray-600">
              At NiFe, we're guided by a set of core values that shape everything we do. Our mission is to create a
              healthier and wealthier India by making quality healthcare accessible to all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Accessible Healthcare</h3>
                <p className="text-gray-600">
                  We believe quality healthcare should be accessible to every Indian citizen, regardless of their
                  economic background.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Customer First</h3>
                <p className="text-gray-600">
                  Our customers are at the heart of everything we do. We're committed to providing exceptional service
                  and support.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in all aspects of our business, from product development to customer service.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We're constantly innovating to create solutions that address the evolving needs of our customers and
                  the healthcare industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600 mb-4">
              Our Leadership
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the Team Behind NiFe</h2>
            <p className="text-gray-600">
              Our diverse team of experts is united by a common goal: to revolutionize healthcare access in India and
              create a healthier, wealthier nation.
            </p>
          </div>

          <Tabs defaultValue="founders" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="founders">Founders</TabsTrigger>
              <TabsTrigger value="team">Tech Team</TabsTrigger>
            </TabsList>

            <TabsContent value="founders">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    name: "Saniya A.K",
                    role: "Co-Founder & CBO",
                    bio: "Former healthcare executive with 15+ years of experience in the insurance industry. Passionate about making healthcare accessible to all.",
                    image: "/images/saniya.png?height=300&width=300&text=Saniya",
                  },
                  {
                    name: "SIddesh J.S",
                    role: "Co-Founder & COO",
                    bio: "Ex-McKinsey consultant with expertise in healthcare operations. Led multiple healthcare initiatives across rural India.",
                    image: "/images/siddesh.png?height=300&width=300&text=Siddesh",
                  },
                  {
                    name: "Dinesh Sheety",
                    role: "Co-Founder & Financial Controller",
                    bio: "Tech veteran with previous experience at Google and Amazon. Built scalable fintech platforms serving millions of users.",
                    image: "/images/dinesh.png?height=300&width=300&text=Dinesh",
                  },
                  {
                    name: "Vikas Rathod",
                    role: "Co-Founder & CTO",
                    bio: "Tech veteran with previous experience at Google and Amazon. Built scalable fintech platforms serving millions of users.",
                    image: "/images/vikas.png?height=300&width=300&text=Vikas",
                  },
                  {
                    name: "Fareeda Gaffar ",
                    role: "Co-Founder & Chief Marketing Officer",
                    bio: "Tech veteran with previous experience at Google and Amazon. Built scalable fintech platforms serving millions of users.",
                    image: "/images/fareeda.png?height=300&width=300&text=Fareeda",
                  },
                  {
                    name: "Jacob Alex",
                    role: "Co-Founder & CEO Duabi",
                    bio: "Tech veteran with previous experience at Google and Amazon. Built scalable fintech platforms serving millions of users.",
                    image: "/images/jacob.png?height=300&width=300&text=Jacob",
                  },
                  {
                    name: "N.S.L Murthy",
                    role: "Independent Director",
                    bio: "Tech veteran with previous experience at Google and Amazon. Built scalable fintech platforms serving millions of users.",
                    image: "/images/murthy.png?height=300&width=300&text=Murthy",
                  },
                ].map((founder) => (
                  <Card key={founder.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-square relative">
                      <Image
                        src={founder.image || "/placeholder.svg"}
                        alt={founder.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold">{founder.name}</h3>
                      <p className="text-purple-600 mb-2">{founder.role}</p>
                      <p className="text-gray-600 text-sm">{founder.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="team">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {Array.from({ length: 15 }).map((_, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-square relative">
                      <Image
                        src={`/placeholder.svg?height=200&width=200&text=Team+${index + 1}`}
                        alt={`Team Member ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="pt-4 pb-4">
                      <h3 className="font-bold">Team Member {index + 1}</h3>
                      <p className="text-purple-600 text-sm">
                        {index % 5 === 0
                          ? "Engineering Lead"
                          : index % 5 === 1
                            ? "Senior Developer"
                            : index % 5 === 2
                              ? "Product Manager"
                              : index % 5 === 3
                                ? "UX Designer"
                                : "QA Engineer"}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Office Location Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600 mb-4">
                Our Office
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Us</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-bold">Headquarters</h3>
                    <p className="text-gray-600">
                      NiFe Tower, 123 Health Avenue, Koramangala
                      <br />
                      Bengaluru, Karnataka 560034
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-bold">Email Us</h3>
                    <p className="text-gray-600">
                      General Inquiries: info@NiFecard.com
                      <br />
                      Support: support@NiFecard.com
                      <br />
                      Careers: careers@NiFecard.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-bold">Call Us</h3>
                    <p className="text-gray-600">
                      Customer Support: +91 1800-123-4567
                      <br />
                      Business Inquiries: +91 80-4567-8901
                    </p>
                  </div>
                </div>

                <Button className="bg-purple-600 hover:bg-purple-700">
                  Get Directions <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
              {/* Google Map Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5831950181483!2d77.61053431482133!3d12.934494090877592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c118b2b531%3A0x5f4adbdbab8bd80f!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
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
                  NiFe is proud to be a part of India's journey towards self-reliance and digital transformation. We are
                  committed to the Make in India initiative, building innovative solutions that address the unique
                  healthcare challenges of our nation.
                </p>
                <p>
                  Our partnership with RuPay, India's homegrown card payment network, reflects our dedication to
                  supporting indigenous financial systems while promoting financial inclusion across the country.
                </p>
                <p>
                  Through our digital-first approach, we're contributing to the Digital India vision, making healthcare
                  and financial services accessible to millions of Indians through technology.
                </p>
                <p>
                  As a recognized startup under the Startup India program, we're creating jobs, driving innovation, and
                  building solutions that have the potential to transform healthcare access for a billion people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the NiFe Revolution</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Be a part of our mission to make quality healthcare accessible to every Indian citizen while helping them
              build wealth through everyday transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                <Link href="/get-started">Get Your NiFe Card</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/careers">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
