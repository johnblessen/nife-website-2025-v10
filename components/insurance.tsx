"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Hospital, FileText, Clock, Download, Share2 } from "lucide-react"

export default function Insurance() {
  const [activeTab, setActiveTab] = useState("coverage")

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Insurance Overview */}
        <div className="lg:col-span-2">
          <Card className="bg-gradient-to-br from-purple-600 to-pink-600 text-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Health Insurance</h2>
                  <p className="text-white/80">Premium Coverage</p>
                </div>
                <Shield className="h-8 w-8" />
              </div>
              
              <div className="mb-8">
                <div className="text-4xl font-bold mb-4">₹5,00,000</div>
                <p className="text-white/80">Total Coverage Amount</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white/60 text-sm">Policy Number</p>
                  <p className="font-medium">NiFe-2024-12345</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-white/60 text-sm">Valid Until</p>
                  <p className="font-medium">Dec 31, 2024</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="bg-white/10 hover:bg-white/20">
                  <Download className="mr-2 h-4 w-4" /> Download Policy
                </Button>
                <Button variant="outline" className="bg-white/10 hover:bg-white/20">
                  <Share2 className="mr-2 h-4 w-4" /> Share
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Insurance Details */}
        <div>
          <Tabs defaultValue="coverage" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="coverage">Coverage</TabsTrigger>
              <TabsTrigger value="claims">Claims</TabsTrigger>
            </TabsList>

            <TabsContent value="coverage">
              <Card>
                <CardHeader>
                  <CardTitle>Coverage Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-medium mb-2">Hospitalization</h3>
                    <p className="text-sm text-gray-600">Coverage up to ₹5 Lakhs per year</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-medium mb-2">Pre & Post Hospitalization</h3>
                    <p className="text-sm text-gray-600">Coverage for 30 days before and 60 days after</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-medium mb-2">Day Care Procedures</h3>
                    <p className="text-sm text-gray-600">Coverage for 500+ day care procedures</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-medium mb-2">Ambulance Charges</h3>
                    <p className="text-sm text-gray-600">Coverage up to ₹2,000 per hospitalization</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="claims">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Claims</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Hospital className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-500">Apollo Hospital</p>
                      <p className="font-medium">₹25,000</p>
                    </div>
                    <div className="ml-auto">
                      <p className="text-sm text-green-600">Approved</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-500">Max Hospital</p>
                      <p className="font-medium">₹15,000</p>
                    </div>
                    <div className="ml-auto">
                      <p className="text-sm text-green-600">Approved</p>
                    </div>
                  </div>
                  <Button className="w-full">File New Claim</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
} 