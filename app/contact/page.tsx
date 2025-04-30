"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import VapiAssistant from "@/components/vapi-assistant"
import {
  Phone,
  Mail,
  MessageSquare,
  Clock,
  MapPin,
  ArrowRight,
  CheckCircle,
  Send,
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  subject: z.string().min(1, { message: "Please select a subject" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type FormValues = z.infer<typeof formSchema>

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button className="flex w-full items-center justify-between text-left" onClick={() => setIsOpen(!isOpen)}>
        <span className="font-medium text-gray-900">{question}</span>
        <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  )
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log(data)
    setIsSubmitting(false)
    setIsSuccess(true)
    form.reset()
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 py-20 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-pink-400 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 h-20 w-20 rounded-full bg-yellow-300 animate-pulse delay-700"></div>
        </div>
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Get in Touch With Us</h1>
            <p className="mb-8 text-lg text-white/90">
              Have questions about our services? Want to learn more about NiFe's health insurance and wellness benefits?
              Our team is here to help you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90">
                <Phone className="mr-2 h-4 w-4" /> Call Us Now
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <MessageSquare className="mr-2 h-4 w-4" /> Live Chat
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/10 blur-xl"></div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="container py-16">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Contact Information */}
          <div className="md:col-span-5">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <Phone className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="mb-1 font-medium text-gray-900">Call Us</h3>
                  <p className="mb-1 text-lg font-medium text-purple-600">1800-123-4567</p>
                  <p className="text-sm text-gray-500">Monday to Saturday, 9am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <Mail className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="mb-1 font-medium text-gray-900">Email Us</h3>
                  <p className="mb-1 text-lg font-medium text-purple-600">support@NiFecard.com</p>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <Clock className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="mb-1 font-medium text-gray-900">Working Hours</h3>
                  <p className="mb-1 text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <MapPin className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="mb-1 font-medium text-gray-900">Visit Us</h3>
                  <p className="text-gray-600">
                    NiFe Headquarters
                    <br />
                    123 Wellness Street, Health City
                    <br />
                    Bangalore - 560001, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="mb-4 text-xl font-bold text-gray-900">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600 transition-colors hover:bg-purple-600 hover:text-white"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600 transition-colors hover:bg-purple-600 hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600 transition-colors hover:bg-purple-600 hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600 transition-colors hover:bg-purple-600 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600 transition-colors hover:bg-purple-600 hover:text-white"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-7">
            <Card className="border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-gray-900">Message Sent Successfully!</h3>
                    <p className="mb-6 text-gray-600">
                      Thank you for contacting us. We have received your message and will get back to you shortly.
                    </p>
                    <Button onClick={() => setIsSuccess(false)} className="bg-purple-600 hover:bg-purple-700">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="johndoe@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+91 9876543210" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a subject" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="general">General Inquiry</SelectItem>
                                  <SelectItem value="membership">Membership Plans</SelectItem>
                                  <SelectItem value="insurance">Health Insurance</SelectItem>
                                  <SelectItem value="card">RuPay Card</SelectItem>
                                  <SelectItem value="hospitals">Hospital Network</SelectItem>
                                  <SelectItem value="claims">Insurance Claims</SelectItem>
                                  <SelectItem value="technical">Technical Support</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please describe your query in detail..."
                                className="h-32 resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2 h-4 w-4" /> Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Channels Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">How Would You Like to Get Support?</h2>
            <p className="text-gray-600">
              We offer multiple ways to get in touch with our support team. Choose the one that works best for you.
            </p>
          </div>

          <Tabs defaultValue="chat" className="w-full">
            <TabsList className="mx-auto mb-8 grid w-full max-w-2xl grid-cols-3">
              <TabsTrigger value="chat">Live Chat</TabsTrigger>
              <TabsTrigger value="email">Email Support</TabsTrigger>
              <TabsTrigger value="phone">Phone Support</TabsTrigger>
            </TabsList>

            <TabsContent value="chat" className="mx-auto max-w-3xl">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                      <MessageSquare className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold">Live Chat Support</h3>
                    <p className="text-gray-600">
                      Chat with our support team instantly through our live chat system. Quick responses for all your
                      queries.
                    </p>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" /> Available 24/7
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="h-4 w-4 text-green-500" /> Typically responds in under 2 minutes
                      </div>
                    </div>
                    <Button className="mt-2 bg-purple-600 hover:bg-purple-700">
                      Start Live Chat <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="email" className="mx-auto max-w-3xl">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                      <Mail className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold">Email Support</h3>
                    <p className="text-gray-600">
                      Send us an email with your query. Our team will get back to you within 24 hours with a detailed
                      response.
                    </p>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" /> Response within 24 hours
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="h-4 w-4 text-green-500" /> Detailed responses to complex queries
                      </div>
                    </div>
                    <div className="mt-2 flex flex-col gap-2 text-center">
                      <p className="font-medium text-purple-600">support@NiFecard.com</p>
                      <p className="text-sm text-gray-500">For general inquiries</p>
                    </div>
                    <div className="flex flex-col gap-2 text-center">
                      <p className="font-medium text-purple-600">claims@NiFecard.com</p>
                      <p className="text-sm text-gray-500">For insurance claims</p>
                    </div>
                    <Button
                      className="mt-2 bg-purple-600 hover:bg-purple-700"
                      onClick={() => (window.location.href = "mailto:support@NiFecard.com")}
                    >
                      Send Email <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="phone" className="mx-auto max-w-3xl">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                      <Phone className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold">Phone Support</h3>
                    <p className="text-gray-600">
                      Call our dedicated helpline to speak directly with our support team for immediate assistance.
                    </p>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" /> Monday to Saturday, 9am to 6pm
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="h-4 w-4 text-green-500" /> Direct conversation with support agents
                      </div>
                    </div>
                    <div className="mt-2 flex flex-col gap-1">
                      <p className="text-2xl font-bold text-purple-600">1800-123-4567</p>
                      <p className="text-sm text-gray-500">Toll-free for all customers</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-lg font-medium text-purple-600">+91 80 1234 5678</p>
                      <p className="text-sm text-gray-500">For international callers</p>
                    </div>
                    <Button className="mt-2 bg-purple-600 hover:bg-purple-700">
                      Call Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Office Locations</h2>
            <p className="text-gray-600">
              Visit us at any of our offices across India. Our team is ready to assist you in person.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=250&width=500&text=Bangalore+Office"
                  alt="Bangalore Office"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">Bangalore - Headquarters</h3>
                <div className="space-y-2 text-gray-600">
                  <p>123 Wellness Street, Health City</p>
                  <p>Bangalore - 560001, Karnataka</p>
                  <p>
                    <span className="font-medium">Phone:</span> +91 80 1234 5678
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> bangalore@NiFecard.com
                  </p>
                </div>
                <Button className="mt-4 w-full bg-purple-600 hover:bg-purple-700">Get Directions</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden transition-all hover:shadow-md">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=250&width=500&text=Mumbai+Office"
                  alt="Mumbai Office"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">Mumbai Office</h3>
                <div className="space-y-2 text-gray-600">
                  <p>456 Health Avenue, Wellness Park</p>
                  <p>Mumbai - 400001, Maharashtra</p>
                  <p>
                    <span className="font-medium">Phone:</span> +91 22 2345 6789
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> mumbai@NiFecard.com
                  </p>
                </div>
                <Button className="mt-4 w-full bg-purple-600 hover:bg-purple-700">Get Directions</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden transition-all hover:shadow-md">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=250&width=500&text=Delhi+Office"
                  alt="Delhi Office"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">Delhi Office</h3>
                <div className="space-y-2 text-gray-600">
                  <p>789 Care Lane, Insurance Hub</p>
                  <p>New Delhi - 110001, Delhi</p>
                  <p>
                    <span className="font-medium">Phone:</span> +91 11 3456 7890
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> delhi@NiFecard.com
                  </p>
                </div>
                <Button className="mt-4 w-full bg-purple-600 hover:bg-purple-700">Get Directions</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find quick answers to common questions about our support and contact services.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <FAQItem
              question="What are your customer support hours?"
              answer="Our customer support team is available Monday to Friday from 9:00 AM to 6:00 PM, and Saturday from 9:00 AM to 1:00 PM. We're closed on Sundays and public holidays. For urgent matters, you can use our 24/7 chat support."
            />
            <FAQItem
              question="How quickly will I get a response to my email inquiry?"
              answer="We aim to respond to all email inquiries within 24 hours during business days. For complex issues that require investigation, it may take up to 48 hours. Rest assured, we'll keep you updated on the progress of your query."
            />
            <FAQItem
              question="Can I visit your office without an appointment?"
              answer="Yes, you can visit any of our offices during working hours without an appointment. However, for a dedicated consultation with our insurance or health benefits experts, we recommend scheduling an appointment in advance to ensure the right specialist is available to assist you."
            />
            <FAQItem
              question="How do I schedule a video consultation with a health advisor?"
              answer="You can schedule a video consultation through our app or website. Navigate to the 'Consultations' section, select 'Video Consultation', choose your preferred date and time, and book your slot. You'll receive a confirmation email with the meeting link."
            />
            <FAQItem
              question="What information should I keep ready when contacting support about a claim?"
              answer="When contacting us about a claim, please have your membership ID, claim reference number (if already filed), date of treatment, hospital details, and any relevant medical reports or bills ready. This helps us address your query more efficiently."
            />
            <FAQItem
              question="How can I provide feedback about your customer service?"
              answer="We value your feedback! You can provide feedback about our customer service through multiple channels: by responding to the feedback email sent after each interaction, through the feedback form in our app or website, or by writing to feedback@NiFecard.com."
            />
          </div>

          <div className="mt-10 text-center">
            <p className="mb-4 text-gray-600">Still have questions? Contact our support team for assistance.</p>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Link href="#" className="flex items-center">
                <MessageSquare className="mr-2 h-4 w-4" /> Chat with Support
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 p-8 md:p-12 text-center text-white shadow-lg">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Join the NiFe Family?</h2>
            <p className="mb-8 max-w-2xl mx-auto text-white/80">
              Get comprehensive health coverage, exclusive hospital discounts, and wealth-building rewards with every
              transaction. Apply now to start your wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                <Link href="/get-started">Apply for NiFe Card</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/offers">Explore Special Offers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vapi Assistant */}
      <VapiAssistant />
    </main>
  )
}
