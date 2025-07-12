import { LearningCenter } from "@/components/learning-center"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function LearningCenterPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Learning Center</h1>
            <p className="text-lg text-white/80">
              Access comprehensive training materials, marketing resources, and product demos to help you understand and
              promote NiFe's services effectively.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/get-started">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                  Get Started <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <LearningCenter />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Learn More?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Explore our comprehensive resources and become an expert in NiFe's health insurance and wealth benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                  Contact Sales Team
                </Button>
              </Link>
              <Link href="/get-started">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Schedule Training
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
