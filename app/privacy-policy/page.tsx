import { Shield, Eye, Lock, Database, Users, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-6 py-3 text-blue-600 font-medium mb-6">
              <Shield className="h-5 w-5" />
              Privacy & Data Protection
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal
              information.
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="space-y-8">
            {/* Information We Collect */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Database className="h-6 w-6 text-blue-600" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Personal Information:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Name, email address, phone number, and date of birth</li>
                    <li>Aadhaar number, PAN card details for KYC verification</li>
                    <li>Address and contact information</li>
                    <li>Bank account details for card loading and transactions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Health Information:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Medical history and health records (with consent)</li>
                    <li>Insurance claims and treatment details</li>
                    <li>ABHA card information and health ID</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Usage Data:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Transaction history and spending patterns</li>
                    <li>App usage and interaction data</li>
                    <li>Device information and IP address</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Eye className="h-6 w-6 text-green-600" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span>To provide health insurance and wellness services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span>To process transactions and manage your NiFe card</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span>To calculate and credit gold coin rewards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span>To facilitate insurance claims and hospital treatments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span>To provide customer support and technical assistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span>To comply with legal and regulatory requirements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Lock className="h-6 w-6 text-purple-600" />
                  Data Security & Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <p className="mb-4">
                    We implement industry-standard security measures to protect your personal information:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 256-bit SSL encryption for all data transmission</li>
                    <li>• Secure cloud storage with regular backups</li>
                    <li>• Two-factor authentication for account access</li>
                    <li>• Regular security audits and vulnerability assessments</li>
                    <li>• Compliance with RBI and IRDAI data protection guidelines</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-orange-600" />
                  Information Sharing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 mb-4">
                  We may share your information with trusted partners and service providers:
                </p>
                <div className="space-y-3">
                  <div className="border-l-4 border-orange-400 pl-4">
                    <h4 className="font-semibold">Insurance Partners:</h4>
                    <p className="text-gray-600">For policy issuance, claims processing, and coverage verification</p>
                  </div>
                  <div className="border-l-4 border-orange-400 pl-4">
                    <h4 className="font-semibold">Healthcare Providers:</h4>
                    <p className="text-gray-600">For treatment authorization and medical record management</p>
                  </div>
                  <div className="border-l-4 border-orange-400 pl-4">
                    <h4 className="font-semibold">Financial Institutions:</h4>
                    <p className="text-gray-600">For card services, transaction processing, and KYC compliance</p>
                  </div>
                  <div className="border-l-4 border-orange-400 pl-4">
                    <h4 className="font-semibold">Regulatory Authorities:</h4>
                    <p className="text-gray-600">When required by law or regulatory compliance</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-indigo-600" />
                  Your Privacy Rights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-indigo-800">Access & Control:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• View your personal information</li>
                      <li>• Update or correct your data</li>
                      <li>• Download your data</li>
                      <li>• Delete your account</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-indigo-800">Communication:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Opt-out of marketing emails</li>
                      <li>• Control notification preferences</li>
                      <li>• Manage consent settings</li>
                      <li>• Contact privacy officer</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Eye className="h-6 w-6 text-yellow-600" />
                  Cookies & Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar technologies to improve your experience:
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Essential cookies for website functionality</li>
                    <li>• Analytics cookies to understand usage patterns</li>
                    <li>• Marketing cookies for personalized content</li>
                    <li>• Security cookies for fraud prevention</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    You can manage cookie preferences through your browser settings or our cookie policy.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Updates to Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  Policy Updates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-red-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    We may update this privacy policy from time to time to reflect changes in our practices or legal
                    requirements.
                  </p>
                  <p className="text-gray-700">
                    We will notify you of significant changes via email or app notification. Continued use of our
                    services after updates constitutes acceptance of the revised policy.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Our Privacy Team</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    For privacy-related questions or concerns, contact our Data Protection Officer:
                  </p>
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
