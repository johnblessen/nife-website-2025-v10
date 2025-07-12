import { Metadata } from "next"

export const metadata: Metadata = {
  title: "NiFe - World's First Free Health Insurance Card",
  description: "Get comprehensive health insurance coverage with hospital discounts and digital gold rewards. Join NiFe today!",
  keywords: ["health insurance", "hospital discounts", "digital gold", "wellness", "health card"],
  openGraph: {
    title: "NiFe - World's First Free Health Insurance Card",
    description: "Get comprehensive health insurance coverage with hospital discounts and digital gold rewards. Join NiFe today!",
    url: "https://NiFecard.com",
    siteName: "NiFe",
    images: [
      {
        url: "https://NiFecard.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NiFe Health Insurance Card",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NiFe - World's First Free Health Insurance Card",
    description: "Get comprehensive health insurance coverage with hospital discounts and digital gold rewards. Join NiFe today!",
    images: ["https://NiFecard.com/images/twitter-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  alternates: {
    canonical: "https://NiFecard.com",
  },
  verification: {
    google: "your-google-site-verification",
  },
}
