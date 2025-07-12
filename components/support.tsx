"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HelpCircle, MessageCircle, Phone, Mail, FileText, Search } from "lucide-react"

export default function Support() {
  const [activeTab, setActiveTab] = useState("faq")

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Support Overview */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-4 bg-purple-100 rounded-full">
                  <HelpCircle className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">How can we help you?</h2>
                  <p className="text-gray-600">Choose a support option below</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <MessageCircle className="h-6 w-6 text-purple-600" />
                      <div>
                        <h3 className="font-medium">Live Chat</h3>
                        <p className="text-sm text-gray-500">Chat with our support team</p>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Start Chat</Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <Phone className="h-6 w-6 text-purple-600" />
                      <div>
                        <h3 className="font-medium">Phone Support</h3>
                        <p className="text-sm text-gray-500">Call us at 1800-123-4567</p>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Call Now</Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <Mail className="h-6 w-6 text-purple-600" />
                      <div>
                        <h3 className="font-medium">Email Support</h3>
                        <p className="text-sm text-gray-500">support@NiFecard.com</p>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Send Email</Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <FileText className="h-6 w-6 text-purple-600" />
                      <div>
                        <h3 className="font-medium">Knowledge Base</h3>
                        <p className="text-sm text-gray-500">Browse our help articles</p>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Browse Articles</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Support Navigation */}
        <div>
          <Tabs defaultValue="faq" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-1 mb-4">
              <TabsTrigger value="faq" className="justify-start">
                <HelpCircle className="mr-2 h-4 w-4" /> FAQs
              </TabsTrigger>
              <TabsTrigger value="contact" className="justify-start">
                <Phone className="mr-2 h-4 w-4" /> Contact Us
              </TabsTrigger>
              <TabsTrigger value="tickets" className="justify-start">
                <FileText className="mr-2 h-4 w-4" /> My Tickets
              </TabsTrigger>
            </TabsList>

            <TabsContent value="faq">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search FAQs..."
                      className="w-full pl-10 p-2 border rounded-md"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-medium mb-2">How do I activate my NiFe card?</h3>
                      <p className="text-sm text-gray-600">
                        You can activate your NiFe card through the mobile app or by calling our customer support.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-medium mb-2">How do I file a health insurance claim?</h3>
                      <p className="text-sm text-gray-600">
                        You can file a claim through the app, website, or by contacting our support team.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-medium mb-2">How do I redeem my digital gold rewards?</h3>
                      <p className="text-sm text-gray-600">
                        You can redeem your digital gold rewards through the app or website.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium mb-2">Customer Support</h3>
                    <p className="text-sm text-gray-600">1800-123-4567</p>
                    <p className="text-sm text-gray-600">support@NiFecard.com</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium mb-2">Business Hours</h3>
                    <p className="text-sm text-gray-600">Monday - Friday: 9 AM - 6 PM</p>
                    <p className="text-sm text-gray-600">Saturday: 10 AM - 4 PM</p>
                  </div>
                  <Button className="w-full">Create Support Ticket</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tickets">
              <Card>
                <CardHeader>
                  <CardTitle>My Support Tickets</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Card Activation Issue</p>
                        <p className="text-sm text-gray-500">Status: In Progress</p>
                      </div>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Claim Processing</p>
                        <p className="text-sm text-gray-500">Status: Resolved</p>
                      </div>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  </div>
                  <Button className="w-full">Create New Ticket</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
