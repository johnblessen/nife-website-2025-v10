import { Cookie, Settings, Eye, Shield, ToggleLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-6 py-3 text-orange-600 font-medium mb-6">
              <Cookie className="h-5 w-5" />
              Cookie Usage & Tracking
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Learn how we use cookies and similar technologies to improve your experience on our website and mobile
              app.
            </p>
          </div>

          {/* Cookie Policy Content */}
          <div className="space-y-8">
            {/* What Are Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Cookie className="h-6 w-6 text-orange-600" />
                  What Are Cookies?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    Cookies are small text files that are stored on your device when you visit our website or use our
                    mobile app. They help us provide you with a better, faster, and more secure experience.
                  </p>
                  <p className="text-gray-700">
                    We use cookies to remember your preferences, analyze how you use our services, and provide
                    personalized content and advertisements.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Types of Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Settings className="h-6 w-6 text-blue-600" />
                  Types of Cookies We Use
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-green-400 pl-4">
                    <h4 className="font-semibold text-green-800 mb-2">Essential Cookies</h4>
                    <p className="text-sm text-gray-600 mb-3">Required for basic website functionality and security.</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• User authentication and login sessions</li>
                      <li>• Shopping cart and transaction processing</li>
                      <li>• Security and fraud prevention</li>
                      <li>• Website navigation and functionality</li>
                    </ul>
                    <div className="mt-3 text-xs text-green-700 font-medium">✓ Always Active (Cannot be disabled)</div>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Help us understand how visitors interact with our website.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Google Analytics for usage statistics</li>
                      <li>• Page views and user behavior tracking</li>
                      <li>• Performance monitoring and optimization</li>
                      <li>• Error tracking and debugging</li>
                    </ul>
                    <div className="mt-3">
                      <Button size="sm" variant="outline" className="text-xs bg-transparent">
                        <ToggleLeft className="h-3 w-3 mr-1" />
                        Manage Preferences
                      </Button>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="font-semibold text-purple-800 mb-2">Marketing Cookies</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Used to deliver personalized advertisements and content.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Facebook Pixel and Google Ads tracking</li>
                      <li>• Personalized content recommendations</li>
                      <li>• Retargeting and remarketing campaigns</li>
                      <li>• Social media integration and sharing</li>
                    </ul>
                    <div className="mt-3">
                      <Button size="sm" variant="outline" className="text-xs bg-transparent">
                        <ToggleLeft className="h-3 w-3 mr-1" />
                        Manage Preferences
                      </Button>
                    </div>
                  </div>

                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">Functional Cookies</h4>
                    <p className="text-sm text-gray-600 mb-3">Enable enhanced functionality and personalization.</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Language and region preferences</li>
                      <li>• Theme and display settings</li>
                      <li>• Chat widget and customer support</li>
                      <li>• Form auto-fill and saved preferences</li>
                    </ul>
                    <div className="mt-3">
                      <Button size="sm" variant="outline" className="text-xs bg-transparent">
                        <ToggleLeft className="h-3 w-3 mr-1" />
                        Manage Preferences
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Eye className="h-6 w-6 text-indigo-600" />
                  Third-Party Cookies & Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    We work with trusted third-party services that may also set cookies on your device:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-indigo-800 mb-2">Google Services</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Google Analytics</li>
                        <li>• Google Ads</li>
                        <li>• Google Maps</li>
                        <li>• reCAPTCHA</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Social Media</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Facebook Pixel</li>
                        <li>• Instagram Integration</li>
                        <li>• LinkedIn Insights</li>
                        <li>• YouTube Embed</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Support & Chat</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Customer support chat</li>
                        <li>• Help desk integration</li>
                        <li>• Feedback collection</li>
                        <li>• Live chat widgets</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Managing Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Settings className="h-6 w-6 text-green-600" />
                  Managing Your Cookie Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">You have several options to manage cookies:</h4>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h5 className="font-semibold">Cookie Consent Banner</h5>
                        <p className="text-sm text-gray-600">
                          Accept or reject non-essential cookies when you first visit our website.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h5 className="font-semibold">Browser Settings</h5>
                        <p className="text-sm text-gray-600">
                          Configure your browser to block or delete cookies. Note that this may affect website
                          functionality.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h5 className="font-semibold">Account Settings</h5>
                        <p className="text-sm text-gray-600">
                          Manage cookie preferences in your NiFe account settings (for registered users).
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <div>
                        <h5 className="font-semibold">Opt-out Links</h5>
                        <p className="text-sm text-gray-600">
                          Use direct opt-out links for specific services like Google Analytics or Facebook.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <Settings className="h-4 w-4 mr-2" />
                    Manage Cookie Preferences
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Browser Instructions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-purple-600" />
                  Browser-Specific Instructions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Desktop Browsers:</h4>
                    <div className="space-y-3 text-sm">
                      <div className="border-l-4 border-purple-400 pl-3">
                        <strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data
                      </div>
                      <div className="border-l-4 border-purple-400 pl-3">
                        <strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data
                      </div>
                      <div className="border-l-4 border-purple-400 pl-3">
                        <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
                      </div>
                      <div className="border-l-4 border-purple-400 pl-3">
                        <strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Mobile Browsers:</h4>
                    <div className="space-y-3 text-sm">
                      <div className="border-l-4 border-purple-400 pl-3">
                        <strong>Chrome Mobile:</strong> Menu → Settings → Site Settings → Cookies
                      </div>
                      <div className="border-l-4 border-purple-400 pl-3">
                        <strong>Safari iOS:</strong> Settings → Safari → Block All Cookies
                      </div>
                      <div className="border-l-4 border-purple-400 pl-3">
                        <strong>Firefox Mobile:</strong> Menu → Settings → Data Management → Cookies
                      </div>
                      <div className="border-l-4 border-purple-400 pl-3">
                        <strong>Samsung Internet:</strong> Menu → Settings → Sites and downloads → Cookies
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact of Disabling Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Eye className="h-6 w-6 text-yellow-600" />
                  Impact of Disabling Cookies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">Disabling cookies may affect your experience on our website:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Potential Issues:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Difficulty logging in or staying logged in</li>
                        <li>• Loss of personalized settings and preferences</li>
                        <li>• Reduced website functionality and performance</li>
                        <li>• Inability to complete transactions or forms</li>
                        <li>• Less relevant content and advertisements</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">What Still Works:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Basic website browsing and navigation</li>
                        <li>• Reading content and information pages</li>
                        <li>• Contacting customer support</li>
                        <li>• Downloading resources and documents</li>
                        <li>• Accessing public information</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Updates to Cookie Policy */}
            <Card>
              <CardHeader>
                <CardTitle>Policy Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or legal
                    requirements.
                  </p>
                  <p className="text-gray-700">
                    We will notify you of significant changes through our website banner or email notification. Please
                    review this policy periodically for updates.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Questions About Cookies?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">If you have questions about our use of cookies or this policy:</p>
                  <div className="space-y-2">
                    <p>
                      <strong>Email:</strong> privacy@nifecard.com
                    </p>
                    <p>
                      <strong>Phone:</strong> 1800-XXX-XXXX
                    </p>
                    <p>
                      <strong>Address:</strong> WeWork - Ground Floor, 36, Infantry Rd, Tasker Town, Shivaji Nagar,
                      Bengaluru, Karnataka 560001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Last Updated */}
            <div className="text-center py-8 border-t border-gray-200">
              <p className="text-gray-600">
                <strong>Last Updated:</strong>{" "}
                {new Date().toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
