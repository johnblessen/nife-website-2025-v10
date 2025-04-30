import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Mail,
  MessageSquare,
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  FileText,
  Video,
} from "lucide-react"
import VapiAssistant from "@/components/vapi-assistant"

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">We're Here to Help</h1>
            <p className="text-xl text-white/80">
              Our support team is available 24/7 to assist you with any questions or issues.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                <Phone className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Call Us</CardTitle>
              <CardDescription>Speak directly with our support team</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-lg font-bold text-purple-600">1800-123-4567</p>
              <p className="text-sm text-gray-500">Toll-free • 24/7 Support</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Call Now</Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Live Chat</CardTitle>
              <CardDescription>Chat with our support agents in real-time</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm text-gray-500">Average response time</p>
              <p className="text-lg font-bold text-purple-600">Under 2 minutes</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Start Chat</Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                <Mail className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Email Support</CardTitle>
              <CardDescription>Send us a detailed message</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-lg font-bold text-purple-600">support@NiFecard.com</p>
              <p className="text-sm text-gray-500">Response within 24 hours</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Email Us</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Schedule a Call */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600">
                Premium Support
              </div>
              <h2 className="text-2xl font-bold">Schedule a Call with a Specialist</h2>
              <p className="text-gray-600">
                Book a personalized call with one of our specialists who can provide detailed guidance on your specific
                needs. Choose a convenient time, and we'll call you.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium">Choose Your Preferred Time</h3>
                  <p className="text-sm text-gray-500">Select from available slots in your time zone</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium">30-Minute Dedicated Session</h3>
                  <p className="text-sm text-gray-500">Focused time to address all your questions</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium">Expert Assistance</h3>
                  <p className="text-sm text-gray-500">
                    Speak with specialists in health insurance, digital gold, or card services
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4">Book Your Call</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <Input type="text" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <Input type="tel" placeholder="Your phone number" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input type="email" placeholder="Your email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                  <Input type="time" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
                  <select className="w-full rounded-md border border-gray-300 p-2">
                    <option>Health Insurance</option>
                    <option>RuPay Card</option>
                    <option>Digital Gold</option>
                    <option>Membership Benefits</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                  <Textarea placeholder="Please provide any specific questions or details" />
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Schedule Call</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Visit Us */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600">
                Visit Our Office
              </div>
              <h2 className="text-2xl font-bold">Meet Us in Person</h2>
              <p className="text-gray-600">
                If you prefer face-to-face interaction, visit our office during business hours. Our customer service
                representatives will be happy to assist you with any questions or concerns.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-medium">Headquarters</h3>
                    <p className="text-gray-600">123 Wellness Street, Health City, Bangalore - 560001</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-medium">Business Hours</h3>
                    <p className="text-gray-600">Monday to Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">Get Directions</Button>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-auto rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Office+Map"
                alt="Office Location"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Self-Help Resources */}
        <h2 className="text-2xl font-bold mb-6">Self-Help Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-md transition-all">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                <HelpCircle className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>FAQs</CardTitle>
              <CardDescription>Browse our comprehensive FAQ section</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Find answers to common questions about health insurance, RuPay card, digital gold, and membership
                benefits.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                View FAQs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-md transition-all">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Guides & Tutorials</CardTitle>
              <CardDescription>Step-by-step instructions for common tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Learn how to use your NiFe card, file claims, convert digital gold, and more with our detailed guides.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                View Guides <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-md transition-all">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                <Video className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Video Tutorials</CardTitle>
              <CardDescription>Watch visual demonstrations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Visual learner? Our video tutorials provide clear demonstrations of how to use all NiFe features and
                services.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Watch Videos <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-purple-700 mb-2">Send Us a Message</h2>
            <p className="text-gray-700">
              Have a question or feedback? Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-6 shadow-sm">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <Input type="text" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input type="email" placeholder="Your email" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <Input type="text" placeholder="What is your message about?" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea placeholder="Your message" className="h-32" />
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="consent" className="mr-2" />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I consent to NiFe processing my data to respond to my inquiry
                </label>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
            </div>
          </div>
        </div>
      </div>
      <VapiAssistant />
    </main>
  )
}
