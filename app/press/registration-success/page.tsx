import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function RegistrationSuccessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full border-b bg-white">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/NiFe-logo.png" alt="NiFe Logo" width={120} height={30} className="h-8 w-auto" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl font-bold">Registration Successful!</CardTitle>
            <CardDescription>Your NiFe account has been created successfully</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Application ID</span>
                <span className="font-medium">NiFe-2023-78945</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Selected Plan</span>
                <span className="font-medium">Premium Plan</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Amount Paid</span>
                <span className="font-medium">₹5,999</span>
              </div>
            </div>

            <div className="text-center space-y-2">
              <p className="font-medium">What happens next?</p>
              <ol className="text-sm text-gray-600 space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <span className="bg-purple-100 text-purple-600 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <span>Your application will be processed within 24-48 hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-purple-100 text-purple-600 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <span>You will receive an email with your login credentials.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-purple-100 text-purple-600 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <span>Your NiFe RuPay card will be delivered to your address within 7-10 business days.</span>
                </li>
              </ol>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
            <Button variant="outline" className="w-full">
              <Link href="/">Return to Home</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
