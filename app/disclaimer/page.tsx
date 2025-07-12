import { AlertTriangle, Shield, Phone, Mail, MapPin, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-6 py-3 text-red-600 font-medium mb-6">
              <AlertTriangle className="h-5 w-5" />
              Important Legal Information
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Important Disclaimer</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Please read the following important information about NiFe services, insurance coverage, and regulatory
              compliance
            </p>
          </div>

          {/* Main Disclaimer Content */}
          <div className="space-y-8">
            {/* Insurance Disclaimer */}
            <Card className="border-l-4 border-yellow-400">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-yellow-800">
                  <Shield className="h-6 w-6" />
                  Insurance Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <p className="font-semibold text-yellow-800 mb-3">
                    NiFe is not an insurance company and does not claim to be an insurance company.
                  </p>
                  <p className="mb-4">
                    NiFe is a co-branded health and wellness card provider that offers prepaid cards, digital wallet
                    services, and credit card facilities in partnership with licensed financial institutions.
                  </p>
                  <p className="mb-4">
                    All health insurance coverage is provided and serviced by our certified insurance partners including{" "}
                    <strong>
                      Magma HDI General Insurance Company Limited, Niva Bupa Health Insurance Company Limited, Care
                      Health Insurance Limited, and Bajaj Allianz General Insurance Company Limited
                    </strong>{" "}
                    - all of which are licensed and regulated by the Insurance Regulatory and Development Authority of
                    India (IRDAI).
                  </p>
                  <p>
                    Insurance coverage is provided under group health insurance policies approved by IRDAI-certified
                    insurers. NiFe acts as a corporate agent and facilitator for insurance services under proper
                    regulatory compliance.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Discount and Cashback Terms */}
            <Card className="border-l-4 border-blue-400">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-800">
                  <AlertTriangle className="h-6 w-6" />
                  Discount and Cashback Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="mb-4">
                    Hospital discounts up to 25% and cashback rewards up to 10% are available at partner hospitals and
                    healthcare providers.{" "}
                    <strong>NiFe members must announce themselves as NiFe cardholders before any treatment</strong> at
                    partner hospitals to claim these benefits.
                  </p>
                  <p className="mb-4">
                    <strong>Discounts and cashback rewards cannot be combined together.</strong> Members can choose
                    either the discount benefit or the cashback reward for any single transaction, but not both
                    simultaneously.
                  </p>
                  <p>
                    Discount and cashback rates may vary by hospital, treatment type, and membership level. Actual
                    benefits are subject to partner hospital terms and availability.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Tele-consultation Services */}
            <Card className="border-l-4 border-green-400">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-green-800">
                  <Phone className="h-6 w-6" />
                  Tele-consultation Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <div className="bg-green-50 p-6 rounded-lg">
                  <p>
                    Unlimited doctor consultations are available only for online and tele-consultation services through
                    our partner hospital network and qualified healthcare providers. In-person consultations, physical
                    examinations, and diagnostic tests are subject to separate charges and availability.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Regulatory Compliance */}
            <Card className="border-l-4 border-purple-400">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-purple-800">
                  <Shield className="h-6 w-6" />
                  Regulatory Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <p className="mb-4">
                    All NiFe services are provided in compliance with applicable Indian laws and regulations including
                    RBI guidelines for prepaid instruments, IRDAI regulations for insurance services, and other relevant
                    regulatory frameworks.
                  </p>
                  <p className="mb-4">
                    Gold coin rewards and digital gold services are provided through licensed partners and are subject
                    to applicable tax laws and regulations. Members are advised to consult tax professionals for tax
                    implications.
                  </p>
                  <p>
                    Terms and conditions apply to all services. Complete terms are available on our website and mobile
                    application. NiFe reserves the right to modify terms with appropriate notice as per regulatory
                    requirements.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Important Notice */}
            <Card className="border-l-4 border-red-400">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-red-800">
                  <AlertTriangle className="h-6 w-6" />
                  Important Notice
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <div className="bg-red-50 p-6 rounded-lg">
                  <p className="mb-4">
                    This website and its contents are for informational purposes only. All insurance products are
                    subject to terms, conditions, and exclusions as specified in the policy documents issued by the
                    respective insurance companies.
                  </p>
                  <p className="mb-4">
                    Benefits, coverage amounts, and service availability may vary based on plan selection, geographic
                    location, and partner network. Members should carefully read all policy documents and terms of
                    service before enrollment.
                  </p>
                  <p>
                    For detailed information about insurance coverage, claims process, and policy terms, please refer to
                    the policy documents provided by our insurance partners or contact our customer support team.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-l-4 border-indigo-400">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-indigo-800">
                  <Mail className="h-6 w-6" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <p className="font-semibold mb-4">
                    For any queries or clarifications, please contact our customer support:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-indigo-600" />
                      <span>Email: Hello@NiFeCard.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-indigo-600" />
                      <span>Phone: 1800-XXX-XXXX</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-indigo-600 mt-1" />
                      <div>
                        <span>WeWork - Ground Floor, 36, Infantry Rd,</span>
                        <br />
                        <span>Tasker Town, Shivaji Nagar,</span>
                        <br />
                        <span>Bengaluru, Karnataka 560001</span>
                        <br />
                        <Link
                          href="https://maps.google.com/?q=WeWork+Ground+Floor+36+Infantry+Road+Tasker+Town+Shivaji+Nagar+Bengaluru+Karnataka+560001"
                          target="_blank"
                          className="text-indigo-600 hover:text-indigo-700 transition-colors inline-flex items-center gap-1 mt-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Get Directions
                        </Link>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">Available 24/7 for your assistance</p>
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
                This disclaimer is subject to updates. Please check this page regularly for the latest information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
