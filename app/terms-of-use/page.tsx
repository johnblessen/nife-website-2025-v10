import { FileText, Shield, CreditCard, AlertTriangle, Scale, Phone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-6 py-3 text-indigo-600 font-medium mb-6">
              <FileText className="h-5 w-5" />
              Legal Terms & Conditions
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Terms of Use</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Please read these terms carefully before using NiFe services. By using our services, you agree to these
              terms.
            </p>
          </div>

          {/* Terms Content */}
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Scale className="h-6 w-6 text-indigo-600" />
                  Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    By accessing or using NiFe services, including our website, mobile application, and NiFe card, you
                    agree to be bound by these Terms of Use and all applicable laws and regulations.
                  </p>
                  <p className="text-gray-700">
                    If you do not agree with any of these terms, you are prohibited from using or accessing our
                    services.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Service Description */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                  NiFe Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">NiFe provides the following services through licensed partners:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="font-semibold mb-2">Health Insurance Services:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Group health insurance policies</li>
                      <li>• Cashless treatment facilities</li>
                      <li>• Claims processing and support</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-green-400 pl-4">
                    <h4 className="font-semibold mb-2">Financial Services:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Prepaid card services</li>
                      <li>• Digital wallet facilities</li>
                      <li>• Gold coin rewards program</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="font-semibold mb-2">Wellness Services:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Tele-consultation services</li>
                      <li>• Health record management</li>
                      <li>• ABHA card integration</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-orange-400 pl-4">
                    <h4 className="font-semibold mb-2">Partner Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Hospital discounts</li>
                      <li>• Cashback rewards</li>
                      <li>• Wellness marketplace access</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-green-600" />
                  User Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">You agree to:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Provide accurate and complete information during registration</li>
                      <li>• Maintain the confidentiality of your account credentials</li>
                      <li>• Use services only for lawful purposes</li>
                      <li>• Comply with all applicable laws and regulations</li>
                      <li>• Notify us immediately of any unauthorized use of your account</li>
                      <li>• Keep your contact information updated</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">You agree NOT to:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Use services for fraudulent or illegal activities</li>
                      <li>• Share your card or account with unauthorized persons</li>
                      <li>• Attempt to hack or compromise our systems</li>
                      <li>• Provide false information for insurance claims</li>
                      <li>• Violate any terms of our partner agreements</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CreditCard className="h-6 w-6 text-purple-600" />
                  NiFe Card Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Card Usage:</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Valid for 3 years from issue date</li>
                      <li>• Can be used at all RuPay accepting merchants</li>
                      <li>• Subject to daily and monthly transaction limits</li>
                      <li>• Requires sufficient balance for transactions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Rewards & Benefits:</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Gold coins credited within 24-48 hours</li>
                      <li>• Subject to monthly earning caps</li>
                      <li>• Cannot be combined with other offers</li>
                      <li>• Rewards may vary by merchant category</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Insurance Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-red-600" />
                  Insurance Coverage Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-red-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    <strong>Important:</strong> Insurance coverage is provided by licensed insurance companies, not by
                    NiFe directly.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold">Coverage Details:</h4>
                      <ul className="text-sm text-gray-600 mt-2 space-y-1">
                        <li>• Coverage starts from policy effective date</li>
                        <li>• Pre-existing diseases covered after waiting period</li>
                        <li>• Subject to policy terms and exclusions</li>
                        <li>• Claims processed as per insurer guidelines</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">Claim Process:</h4>
                      <ul className="text-sm text-gray-600 mt-2 space-y-1">
                        <li>• Cashless treatment requires pre-authorization</li>
                        <li>• Reimbursement claims require proper documentation</li>
                        <li>• Claims subject to medical review and approval</li>
                        <li>• Settlement timelines as per IRDAI guidelines</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                  Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">NiFe's liability is limited to the extent permitted by law:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• We are not liable for insurance claim denials by insurance partners</li>
                    <li>• We are not responsible for third-party service failures</li>
                    <li>• Our liability is limited to the amount of fees paid by you</li>
                    <li>• We are not liable for indirect or consequential damages</li>
                    <li>• Force majeure events are excluded from liability</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                  Account Termination
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">By You:</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Cancel anytime with 30 days notice</li>
                      <li>• Complete pending transactions before closure</li>
                      <li>• Insurance coverage continues as per policy terms</li>
                      <li>• Unused card balance will be refunded</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">By NiFe:</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• For violation of terms and conditions</li>
                      <li>• For fraudulent or illegal activities</li>
                      <li>• For providing false information</li>
                      <li>• With appropriate notice as per regulations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Scale className="h-6 w-6 text-indigo-600" />
                  Governing Law & Disputes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of
                    courts in Bengaluru, Karnataka.
                  </p>
                  <p className="text-gray-700">
                    We encourage resolving disputes through our customer support team before pursuing legal action.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-green-600" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">For questions about these terms or our services:</p>
                  <div className="space-y-2">
                    <p>
                      <strong>Email:</strong> Hello@NiFeCard.com
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
              <p className="text-sm text-gray-500 mt-2">
                These terms may be updated from time to time. Continued use constitutes acceptance of revised terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
