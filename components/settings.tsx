"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Bell, Lock, CreditCard, Shield, LogOut } from "lucide-react"

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Overview */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-6 mb-8">
                <div className="relative h-20 w-20 rounded-full overflow-hidden bg-purple-100">
                  <Image
                    src="/images/placeholder-user.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">John Doe</h2>
                  <p className="text-gray-600">john.doe@example.com</p>
                </div>
                <Button variant="outline" className="ml-auto">
                  Edit Profile
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Member Since</p>
                  <p className="font-medium">January 2024</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Membership Plan</p>
                  <p className="font-medium">Premium</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Settings Navigation */}
        <div>
          <Tabs defaultValue="profile" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-1 mb-4">
              <TabsTrigger value="profile" className="justify-start">
                <User className="mr-2 h-4 w-4" /> Profile Settings
              </TabsTrigger>
              <TabsTrigger value="notifications" className="justify-start">
                <Bell className="mr-2 h-4 w-4" /> Notifications
              </TabsTrigger>
              <TabsTrigger value="security" className="justify-start">
                <Lock className="mr-2 h-4 w-4" /> Security
              </TabsTrigger>
              <TabsTrigger value="payment" className="justify-start">
                <CreditCard className="mr-2 h-4 w-4" /> Payment Methods
              </TabsTrigger>
              <TabsTrigger value="privacy" className="justify-start">
                <Shield className="mr-2 h-4 w-4" /> Privacy
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      defaultValue="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full p-2 border rounded-md"
                      defaultValue="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <input
                      type="tel"
                      className="w-full p-2 border rounded-md"
                      defaultValue="+91 98765 43210"
                    />
                  </div>
                  <Button className="w-full">Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-gray-500">Receive updates via email</p>
                    </div>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">SMS Notifications</p>
                      <p className="text-sm text-gray-500">Receive updates via SMS</p>
                    </div>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Push Notifications</p>
                      <p className="text-sm text-gray-500">Receive updates via push notifications</p>
                    </div>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full">Change Password</Button>
                  <Button className="w-full">Enable Two-Factor Authentication</Button>
                  <Button className="w-full">View Login History</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="payment">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Visa ending in 4242</p>
                        <p className="text-sm text-gray-500">Expires 12/25</p>
                      </div>
                      <Button variant="ghost" size="sm">Remove</Button>
                    </div>
                  </div>
                  <Button className="w-full">Add New Payment Method</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy">
              <Card>
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Data Sharing</p>
                      <p className="text-sm text-gray-500">Allow data sharing with partners</p>
                    </div>
                    <input type="checkbox" className="toggle" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Marketing Communications</p>
                      <p className="text-sm text-gray-500">Receive marketing updates</p>
                    </div>
                    <input type="checkbox" className="toggle" />
                  </div>
                  <Button className="w-full">Download My Data</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Button variant="outline" className="w-full mt-4 text-red-600 hover:text-red-700">
            <LogOut className="mr-2 h-4 w-4" /> Log Out
          </Button>
        </div>
      </div>
    </div>
  )
} 