import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nifecard - RuPay Wellness Card, Free ₹ 300,000/- Heath Insurance, Upto 1% Digital Gold Reward, upto 25% Discount on Healthcare',
  description: 'Free Health Insurance of ₹ 300,000/- & Earn Rewards upto 1% as Digital Gold Coins',
  keywords: 'health insurance, buy health insurance, health insurance india, best health insurance india, nifeCard health insurance, nifecard health membership,free health insurance , group health insurance,insurnace plans, health insurance plans india, wellness , wellness dicsount , diagnostic dicsount, hospital dicsount, free upgrade, gyn membership,yoga membership, spas,digtal gold , rewards gold Coins, digi gold, RuPay wellness card, RuPay preapid, giftcard , insurnce card, family floater, ax savings under Section 80D, NCCMC card , metro train card , recharge, heathcheckup discount, room upgrade,free Ambulance, healthcare,healthCard,healthy,health centre,cheap insurance',
  authors: [{ name: 'Nife Healthcare Team' }],
  openGraph: {
    url: 'https://www.nifecard.com/',
    title: 'Nifecard - RuPay Wellness Card, Free ₹ 300,000/- Heath Insurance, Upto 1% Digital Gold Reward, upto 25% Discount on Healthcare',
    description: 'Nifecard is a RuPay Wellness Card with Free Health Insurance of ₹ 300,000/- & Earn Rewards upto 1% as Digital Gold Coins on every card spends',
    type: 'website',
    siteName: 'NifeCard',
    images: [
      {
        url: 'https://nifewebsite.s3.ap-south-1.amazonaws.com/assets/images/HI.png',
        width: 860,
        height: 452,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@Nife_Healthcare',
    creator: 'Nife Healthcare Team',
    title: 'Nifecard - RuPay Wellness Card',
    description: 'Nifecard is a RuPay Wellness Card with Free Health Insurance of ₹ 300,000/- & Earn Rewards upto 1% as Digital Gold Coins on every card spends',
    images: ['https://nifewebsite.s3.ap-south-1.amazonaws.com/assets/images/HI.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#421e63',
  other: {
    'revisit-after': '2 days',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'application-name': 'NifeCard',
    'apple-mobile-web-app-title': 'NifeCard',
  },
  icons: {
    icon: '/assets/images/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-W8FQ5CFJ"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        
        {/* Scripts */}
        <Script src="https://code.jquery.com/jquery-3.5.1.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js" strategy="afterInteractive" />
        
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W8FQ5CFJ');
          `}
        </Script>

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-T94YKZ3FXT" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T94YKZ3FXT');
          `}
        </Script>

        <Script id="carousel-init" strategy="afterInteractive">
          {`
            $(document).ready(function(){
              $('.bannerVectorCarousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                dots: false,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                items: 1
              });
              
              AOS.init({
                duration: 1000,
                once: true
              });
            });
          `}
        </Script>
      </body>
    </html>
  )
}
