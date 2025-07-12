"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Shield,
  Hospital,
  Phone,
  CreditCard,
  Gift,
  FileText,
  Heart,
  Coins,
  Building2,
  Smartphone,
  ShoppingCart,
  Zap,
  TrendingUp,
  AlertTriangle,
  Wallet,
  Globe,
  HelpCircle,
  Play,
  Star,
  Users,
  Calendar,
} from "lucide-react"
import InstagramGallery from "@/components/instagram-gallery"
import SignupModal from "@/components/signup-modal"
import { useState, useEffect, useRef } from "react"
import Script from "next/script"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const [isCardInView, setIsCardInView] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem("isLoggedIn") === "true"
    setIsLoggedIn(loggedIn)
  }, [])

  // Initialize marquee animation with vanilla JavaScript
  useEffect(() => {
    const initializeMarquee = () => {
      const marqueeTrack = document.querySelector(".network-marquee-track") as HTMLElement
      if (marqueeTrack) {
        // Clone the content for seamless loop
        const marqueeContent = marqueeTrack.innerHTML
        marqueeTrack.innerHTML = marqueeContent + marqueeContent

        // Start animation
        marqueeTrack.style.animation = "marquee 30s linear infinite"
      }
    }

    // Initialize after component mounts
    const timer = setTimeout(initializeMarquee, 100)
    return () => clearTimeout(timer)
  }, [])

  // Card intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCardInView(entry.isIntersecting)
      },
      { threshold: 0.3 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const videoTestimonials = [
    {
      id: "dQw4w9WgXcQ",
      title: "Priya's Success Story",
      description: "How NiFe Card saved ₹2.5 lakhs during emergency heart surgery",
      author: "Priya Sharma",
      role: "Software Engineer, Mumbai",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Priya's+Story",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Rajesh's Gold Journey",
      description: "Earning 800+ gold coins in just 4 months",
      author: "Rajesh Kumar",
      role: "Business Owner, Delhi",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Rajesh's+Journey",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Vikram Family Protection",
      description: "Complete family health coverage and savings",
      author: "Vikram Singh",
      role: "Teacher, Bangalore",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Family+Protection",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Anita's Emergency Care",
      description: "24/7 doctor consultation during medical emergency",
      author: "Anita Patel",
      role: "Homemaker, Ahmedabad",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Emergency+Care",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Suresh's Cashless Treatment",
      description: "100% cashless surgery at Apollo Hospital",
      author: "Suresh Reddy",
      role: "Engineer, Hyderabad",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Cashless+Treatment",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Meera's Gold Investment",
      description: "Building wealth through daily spending rewards",
      author: "Meera Joshi",
      role: "Doctor, Pune",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Gold+Investment",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Kiran's Family Plan",
      description: "Covering 6 family members under one plan",
      author: "Kiran Gupta",
      role: "Businessman, Jaipur",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Family+Plan",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Deepak's Hospital Discount",
      description: "25% discount on medicines and treatments",
      author: "Deepak Agarwal",
      role: "Teacher, Kolkata",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Hospital+Discount",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Kavya's Digital Records",
      description: "ABHA card integration for health records",
      author: "Kavya Menon",
      role: "IT Professional, Chennai",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Digital+Records",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Rohit's Wellness Benefits",
      description: "Comprehensive wellness marketplace access",
      author: "Rohit Sharma",
      role: "Sales Manager, Lucknow",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Wellness+Benefits",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Neha's Quick Settlement",
      description: "2-hour claim settlement for emergency surgery",
      author: "Neha Kapoor",
      role: "Marketing Executive, Chandigarh",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Quick+Settlement",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Amit's Gold SIP",
      description: "Systematic gold investment through NiFe Card",
      author: "Amit Verma",
      role: "Accountant, Indore",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Gold+SIP",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Pooja's Partner Benefits",
      description: "Exclusive discounts at partner hospitals",
      author: "Pooja Jain",
      role: "Nurse, Surat",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Partner+Benefits",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Sanjay's Customer Support",
      description: "Excellent 24/7 customer service experience",
      author: "Sanjay Yadav",
      role: "Farmer, Patna",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Customer+Support",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Ritu's No Medical Test",
      description: "₹5L coverage without medical checkup",
      author: "Ritu Malhotra",
      role: "HR Manager, Gurgaon",
      thumbnail: "/placeholder.svg?height=120&width=200&text=No+Medical+Test",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Manoj's Tele-consultation",
      description: "Unlimited doctor consultations during COVID",
      author: "Manoj Kumar",
      role: "Shopkeeper, Bhopal",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Tele-consultation",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Shreya's Top-up Insurance",
      description: "₹1 Crore coverage at affordable premium",
      author: "Shreya Iyer",
      role: "Physiotherapist, Coimbatore",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Top-up+Insurance",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Arjun's Physical Gold",
      description: "Converting gold coins to physical gold",
      author: "Arjun Nair",
      role: "Pilot, Kochi",
      thumbnail: "/placeholder.svg?height=120&width=200&text=Physical+Gold",
    },
  ]

  const faqQuestions = [
    {
      question: "What is NiFe Card and how is it different?",
      answer:
        "NiFe Card is India's first comprehensive health and wellness card that combines health insurance, gold rewards, and wellness benefits in one card.",
      category: "General",
      color: "from-blue-500 to-purple-500",
    },
    {
      question: "What coverage amounts are available?",
      answer:
        "NiFe Card offers flexible coverage options starting from ₹3 lakhs up to ₹10 lakhs base coverage, with top-up options available up to ₹1 crore.",
      category: "Insurance",
      color: "from-green-500 to-emerald-500",
    },
    {
      question: "How do I earn gold coins?",
      answer:
        "You earn up to 1% gold coins on every purchase made with your NiFe RuPay card. Gold coins are automatically credited within 24 hours.",
      category: "Rewards",
      color: "from-yellow-500 to-orange-500",
    },
    {
      question: "How do I download the NiFe app?",
      answer:
        "Download the NiFe app from Google Play Store or Apple App Store. Search for 'NiFe Card' and register using your mobile number.",
      category: "Technical",
      color: "from-pink-500 to-red-500",
    },
    {
      question: "Is medical test required for signup?",
      answer:
        "No medical test is required for individuals up to age 60 for coverage up to ₹5 lakhs. This makes NiFe Card accessible to most Indians.",
      category: "General",
      color: "from-indigo-500 to-blue-500",
    },
    {
      question: "Which hospitals are covered?",
      answer:
        "NiFe Card provides cashless treatment at 10,000+ hospitals across India including Apollo, Fortis, Max, Manipal, and many more.",
      category: "Insurance",
      color: "from-teal-500 to-green-500",
    },
    {
      question: "Can I convert gold coins to cash?",
      answer:
        "Yes! You can convert gold coins to physical gold or sell them for cash at current market rates through the NiFe mobile app.",
      category: "Rewards",
      color: "from-amber-500 to-yellow-500",
    },
    {
      question: "What if my card is not working?",
      answer:
        "Check if you have sufficient balance, ensure merchant accepts RuPay cards, or contact our 24/7 helpline for immediate assistance.",
      category: "Technical",
      color: "from-rose-500 to-pink-500",
    },
    {
      question: "How quickly does coverage start?",
      answer:
        "Coverage starts from day 1 for new diseases and accidents. For pre-existing diseases, there's only a 12-month waiting period.",
      category: "General",
      color: "from-cyan-500 to-blue-500",
    },
    {
      question: "What is the claim settlement process?",
      answer:
        "For cashless treatment, pre-authorization is processed within 2-4 hours. Reimbursement claims are settled within 7-15 days.",
      category: "Insurance",
      color: "from-emerald-500 to-teal-500",
    },
    {
      question: "Where can I use my card for rewards?",
      answer:
        "NiFe RuPay card is accepted anywhere RuPay is accepted - online shopping, grocery stores, restaurants, petrol pumps, and more.",
      category: "Rewards",
      color: "from-orange-500 to-red-500",
    },
    {
      question: "How do I update my information?",
      answer:
        "Personal information can be updated through the mobile app or by contacting customer support. Some changes may require verification.",
      category: "Technical",
      color: "from-violet-500 to-purple-500",
    },
    {
      question: "Can I cover my entire family?",
      answer:
        "Yes, NiFe Card offers comprehensive family floater plans that can cover you, your spouse, children, and dependent parents.",
      category: "General",
      color: "from-lime-500 to-green-500",
    },
    {
      question: "Are pre-existing diseases covered?",
      answer:
        "Yes, pre-existing diseases are covered after a waiting period of 12 months, which is shorter than typical 2-4 years.",
      category: "Insurance",
      color: "from-sky-500 to-cyan-500",
    },
    {
      question: "Is there any limit on gold earning?",
      answer:
        "There may be monthly caps depending on your card variant. Premium members typically have higher earning limits.",
      category: "Rewards",
      color: "from-red-500 to-rose-500",
    },
    {
      question: "How secure is my data with NiFe?",
      answer:
        "NiFe uses bank-grade security with 256-bit SSL encryption, two-factor authentication, and secure cloud storage.",
      category: "Technical",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const customerReviewsData = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      review:
        "Excellent service! Got my claim approved within 2 hours during emergency. The cashless facility worked perfectly at Fortis Hospital. Highly recommended!",
      date: "2 weeks ago",
      useCase: "Emergency Care",
    },
    {
      name: "Priya Sharma",
      location: "Delhi",
      review:
        "NiFe Card saved my family ₹3 lakhs during my father's heart surgery. 100% cashless treatment with no hassle. The gold rewards are an added bonus!",
      date: "1 month ago",
      useCase: "Heart Surgery",
    },
    {
      name: "Vikram Singh",
      location: "Bangalore",
      review:
        "Best health card in India! No co-payment, instant coverage, and amazing customer support. The mobile app is very user-friendly.",
      date: "3 weeks ago",
      useCase: "General Coverage",
    },
    {
      name: "Anita Patel",
      location: "Ahmedabad",
      review:
        "The 24/7 doctor consultation feature is fantastic. Helped me during COVID when I couldn't visit hospital. Very satisfied with the service.",
      date: "1 week ago",
      useCase: "Tele-consultation",
    },
    {
      name: "Suresh Reddy",
      location: "Hyderabad",
      review:
        "Impressed with the hospital network. Got treatment at Apollo without any advance payment. The process was smooth and hassle-free.",
      date: "2 months ago",
      useCase: "Cashless Treatment",
    },
    {
      name: "Meera Joshi",
      location: "Pune",
      review:
        "Love the gold coin feature! Earning rewards on daily spending is amazing. Already accumulated 500+ gold coins in 6 months.",
      date: "1 month ago",
      useCase: "Gold Rewards",
    },
    {
      name: "Kiran Gupta",
      location: "Jaipur",
      review:
        "Family plan is excellent value for money. Covered my entire family of 6 under one policy. Claims process is very transparent.",
      date: "3 weeks ago",
      useCase: "Family Plan",
    },
    {
      name: "Deepak Agarwal",
      location: "Kolkata",
      review:
        "The hospital discounts are real! Got 25% off on my wife's surgery at Max Hospital. Plus the cashback was credited immediately.",
      date: "2 weeks ago",
      useCase: "Hospital Discounts",
    },
    {
      name: "Kavya Menon",
      location: "Chennai",
      review:
        "ABHA card integration is seamless. All my health records are now digital and easily accessible. Great innovation by NiFe team.",
      date: "1 month ago",
      useCase: "ABHA Integration",
    },
    {
      name: "Rohit Sharma",
      location: "Lucknow",
      review:
        "Wellness marketplace has amazing deals. Got gym membership at 40% discount. The partner network is really extensive.",
      date: "2 weeks ago",
      useCase: "Wellness Marketplace",
    },
    {
      name: "Neha Kapoor",
      location: "Chandigarh",
      review:
        "Emergency claim settlement in just 2 hours! When my son had an accident, NiFe team was incredibly supportive and efficient.",
      date: "1 week ago",
      useCase: "Emergency Claims",
    },
    {
      name: "Amit Verma",
      location: "Indore",
      review:
        "Gold SIP feature is brilliant. I'm systematically investing in gold through my daily expenses. Smart way to build wealth.",
      date: "3 weeks ago",
      useCase: "Gold Investment",
    },
    {
      name: "Pooja Jain",
      location: "Surat",
      review:
        "As a nurse, I appreciate the extensive hospital network. NiFe Card is accepted everywhere I work. Very convenient.",
      date: "2 months ago",
      useCase: "Healthcare Professional",
    },
    {
      name: "Sanjay Yadav",
      location: "Patna",
      review:
        "Customer support is outstanding. They helped me understand all benefits clearly. 24/7 availability is a big plus.",
      date: "1 month ago",
      useCase: "Customer Support",
    },
    {
      name: "Ritu Malhotra",
      location: "Gurgaon",
      review:
        "No medical test for ₹5L coverage was a relief. At my age, getting insurance was difficult elsewhere. Thank you NiFe!",
      date: "2 weeks ago",
      useCase: "Senior Citizen",
    },
    {
      name: "Manoj Kumar",
      location: "Bhopal",
      review:
        "Tele-consultation saved my life during COVID lockdown. Doctor was available within minutes. Excellent service quality.",
      date: "1 month ago",
      useCase: "COVID Care",
    },
    {
      name: "Shreya Iyer",
      location: "Coimbatore",
      review:
        "Top-up insurance option is fantastic. Got ₹1 crore coverage at very affordable premium. Peace of mind for my family.",
      date: "3 weeks ago",
      useCase: "Top-up Insurance",
    },
    {
      name: "Arjun Nair",
      location: "Kochi",
      review:
        "Converted my gold coins to physical gold for my daughter's wedding. The process was smooth and transparent. Great feature!",
      date: "2 weeks ago",
      useCase: "Gold Conversion",
    },
    {
      name: "Sunita Devi",
      location: "Ranchi",
      review:
        "Rural area coverage is excellent. Even small hospitals in my town accept NiFe Card. Truly pan-India network.",
      date: "1 week ago",
      useCase: "Rural Coverage",
    },
    {
      name: "Ramesh Patel",
      location: "Vadodara",
      review:
        "Pharmacy discounts are real. Saving 15% on medicines every month. The card pays for itself through these savings.",
      date: "2 months ago",
      useCase: "Pharmacy Benefits",
    },
    {
      name: "Lakshmi Reddy",
      location: "Visakhapatnam",
      review:
        "Maternity benefits were excellent. Entire delivery was cashless and smooth. NiFe team coordinated everything perfectly.",
      date: "1 month ago",
      useCase: "Maternity Coverage",
    },
    {
      name: "Harish Chandra",
      location: "Dehradun",
      review:
        "Senior citizen plan is very thoughtful. My parents are covered with special benefits. Affordable and comprehensive.",
      date: "3 weeks ago",
      useCase: "Senior Care",
    },
    {
      name: "Divya Agarwal",
      location: "Nagpur",
      review:
        "Pre-existing diabetes covered after just 12 months. Other insurers wanted 4 years waiting. NiFe is truly different.",
      date: "2 weeks ago",
      useCase: "Pre-existing Disease",
    },
    {
      name: "Rakesh Gupta",
      location: "Kanpur",
      review:
        "Business owner here. NiFe Card helps me save on employee health benefits. Group plans are very competitive.",
      date: "1 month ago",
      useCase: "Business Owner",
    },
    {
      name: "Sneha Joshi",
      location: "Nashik",
      review:
        "Student plan is perfect for my budget. Got ₹3L coverage for just ₹999. Parents are relieved about my health security.",
      date: "3 weeks ago",
      useCase: "Student Plan",
    },
    {
      name: "Vinod Kumar",
      location: "Ludhiana",
      review:
        "Cashless surgery for kidney stones at Fortis. No paperwork hassle, direct billing. Recovery was stress-free.",
      date: "2 weeks ago",
      useCase: "Kidney Treatment",
    },
    {
      name: "Geeta Sharma",
      location: "Jodhpur",
      review:
        "Women-specific health checkups covered 100%. Annual mammography and gynec consultations all free. Excellent coverage.",
      date: "1 week ago",
      useCase: "Women's Health",
    },
    {
      name: "Arun Reddy",
      location: "Mysore",
      review:
        "Accident coverage saved me ₹2 lakhs. Bike accident treatment was completely cashless. Quick claim approval.",
      date: "2 months ago",
      useCase: "Accident Coverage",
    },
    {
      name: "Priyanka Singh",
      location: "Gwalior",
      review:
        "Mental health counseling sessions covered. In today's stress, this benefit is invaluable. Progressive thinking by NiFe.",
      date: "1 month ago",
      useCase: "Mental Health",
    },
    {
      name: "Sunil Jain",
      location: "Rajkot",
      review:
        "Dental treatment coverage is comprehensive. Root canal and implants covered. Saved ₹50,000 on dental work.",
      date: "3 weeks ago",
      useCase: "Dental Coverage",
    },
    {
      name: "Madhuri Patel",
      location: "Surat",
      review:
        "Eye surgery for cataract was 100% covered. Premium hospitals like Sankara Nethralaya accepted NiFe Card.",
      date: "2 weeks ago",
      useCase: "Eye Treatment",
    },
    {
      name: "Rajesh Yadav",
      location: "Allahabad",
      review:
        "Alternative medicine coverage is unique. Ayurveda and homeopathy treatments covered. Holistic health approach.",
      date: "1 week ago",
      useCase: "Alternative Medicine",
    },
    {
      name: "Kavita Gupta",
      location: "Faridabad",
      review:
        "Preventive health checkups every year. Early detection of thyroid issues helped avoid major complications.",
      date: "2 months ago",
      useCase: "Preventive Care",
    },
    {
      name: "Mohan Lal",
      location: "Agra",
      review:
        "Organ transplant coverage gave hope. Kidney transplant for my brother was covered. Life-saving insurance.",
      date: "1 month ago",
      useCase: "Organ Transplant",
    },
    {
      name: "Shweta Mishra",
      location: "Varanasi",
      review:
        "Cancer treatment coverage is comprehensive. Chemotherapy and radiation all covered. Fighting cancer with confidence.",
      date: "3 weeks ago",
      useCase: "Cancer Treatment",
    },
  ]

  const faqQuestionsData = [
    {
      question: "What is NiFe Card and how is it different?",
      answer:
        "NiFe Card is India's first comprehensive health and wellness card that combines health insurance, gold rewards, and wellness benefits in one card. Unlike traditional insurance, NiFe Card offers 100% cashless treatment with no co-payment, instant coverage from day 1, and additional benefits like gold rewards on spending, 24/7 tele-consultation, and wellness marketplace access.",
      category: "General",
      color: "from-blue-500 to-purple-500",
    },
    {
      question: "What coverage amounts are available?",
      answer:
        "NiFe Card offers flexible coverage options starting from ₹3 lakhs up to ₹10 lakhs base coverage, with top-up options available up to ₹1 crore. You can customize your plan based on family size and health needs. All plans include 100% cashless treatment at 10,000+ hospitals with no co-payment or deductibles.",
      category: "Insurance",
      color: "from-green-500 to-emerald-500",
    },
    {
      question: "How do I earn gold coins?",
      answer:
        "You earn up to 1% gold coins on every purchase made with your NiFe RuPay card. Gold coins are automatically credited within 24 hours of transaction. You can earn on groceries, shopping, bill payments, dining, and any merchant that accepts RuPay cards. Gold coins can be converted to physical gold or sold for cash at current market rates.",
      category: "Rewards",
      color: "from-yellow-500 to-orange-500",
    },
    {
      question: "How do I download the NiFe app?",
      answer:
        "Download the NiFe app from Google Play Store or Apple App Store. Search for 'NiFe Card' and register using your mobile number. The app allows you to manage your health insurance, track gold coins, access tele-consultation, view hospital network, and manage your wellness benefits all in one place.",
      category: "Technical",
      color: "from-pink-500 to-red-500",
    },
    // Add 12 more FAQ items to make it 16 total for 4x4 layout
    {
      question: "Is medical test required for signup?",
      answer:
        "No medical test is required for individuals up to age 60 for coverage up to ₹5 lakhs. For higher coverage amounts or older age groups, minimal health declarations may be required. This makes NiFe Card accessible to most Indians without the hassle of medical examinations.",
      category: "General",
      color: "from-indigo-500 to-blue-500",
    },
    {
      question: "Which hospitals are covered?",
      answer:
        "NiFe Card provides cashless treatment at 10,000+ hospitals across India including Apollo, Fortis, Max, Manipal, AIIMS, and many more. Our network covers metro cities, tier-2 cities, and rural areas ensuring healthcare access wherever you are in India.",
      category: "Insurance",
      color: "from-teal-500 to-green-500",
    },
    {
      question: "Can I convert gold coins to cash?",
      answer:
        "Yes! You can convert gold coins to physical gold or sell them for cash at current market rates through the NiFe mobile app. The conversion is instant and transparent with real-time gold pricing. You can also use gold coins for purchases within the NiFe wellness marketplace.",
      category: "Rewards",
      color: "from-amber-500 to-yellow-500",
    },
    {
      question: "What if my card is not working?",
      answer:
        "Check if you have sufficient balance, ensure merchant accepts RuPay cards, or contact our 24/7 helpline for immediate assistance. Common issues include insufficient balance, expired card, or merchant terminal problems. Our support team can resolve most issues within minutes.",
      category: "Technical",
      color: "from-rose-500 to-pink-500",
    },
    {
      question: "How quickly does coverage start?",
      answer:
        "Coverage starts from day 1 for new diseases and accidents. For pre-existing diseases, there's only a 12-month waiting period, which is much shorter than traditional insurance companies that require 2-4 years. Emergency coverage is immediate upon card activation.",
      category: "General",
      color: "from-cyan-500 to-blue-500",
    },
    {
      question: "What is the claim settlement process?",
      answer:
        "For cashless treatment, pre-authorization is processed within 2-4 hours. Simply show your NiFe Card at any network hospital and treatment begins immediately. For reimbursement claims, settlement happens within 7-15 days with minimal documentation required.",
      category: "Insurance",
      color: "from-emerald-500 to-teal-500",
    },
    {
      question: "Where can I use my card for rewards?",
      answer:
        "NiFe RuPay card is accepted anywhere RuPay is accepted - online shopping, grocery stores, restaurants, petrol pumps, bill payments, and more. You earn gold coins on all transactions, making every purchase a step towards building your gold investment portfolio.",
      category: "Rewards",
      color: "from-orange-500 to-red-500",
    },
    {
      question: "How do I update my information?",
      answer:
        "Personal information can be updated through the mobile app or by contacting customer support. Some changes may require verification documents. Address changes, nominee updates, and contact information can be modified easily through the app interface.",
      category: "Technical",
      color: "from-violet-500 to-purple-500",
    },
    {
      question: "Can I cover my entire family?",
      answer:
        "Yes, NiFe Card offers comprehensive family floater plans that can cover you, your spouse, children, and dependent parents. Family plans offer better value with shared coverage limits and additional discounts for multiple members under one policy.",
      category: "General",
      color: "from-lime-500 to-green-500",
    },
    {
      question: "Are pre-existing diseases covered?",
      answer:
        "Yes, pre-existing diseases are covered after a waiting period of 12 months, which is shorter than typical 2-4 years in traditional insurance. Common conditions like diabetes, hypertension, and thyroid disorders are covered with proper medical history disclosure.",
      category: "Insurance",
      color: "from-sky-500 to-cyan-500",
    },
    {
      question: "Is there any limit on gold earning?",
      answer:
        "There may be monthly caps depending on your card variant. Premium members typically have higher earning limits. Standard cards may have a monthly cap of 100 gold coins, while premium cards can earn up to 500 gold coins per month.",
      category: "Rewards",
      color: "from-red-500 to-rose-500",
    },
    {
      question: "How secure is my data with NiFe?",
      answer:
        "NiFe uses bank-grade security with 256-bit SSL encryption, two-factor authentication, and secure cloud storage. Your health data is protected under strict privacy policies and is never shared with third parties without your explicit consent.",
      category: "Technical",
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <main>
      {/* Vapi Integration Script */}
      <Script
        id="vapi-phone-widget"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           (function() {
             var vapiInstance = null;
             const assistant = "8542df2a-047f-43db-be24-658552b8a403";
             const apiKey = "92205ca1-8f79-4a4b-bbfe-5a83a933f5a3";
             
             const buttonConfig = {
               position: 'custom',
               parentSelector: '#vapi-phone-widget',
               theme: 'dark',
               show: true,
               size: 'large',
               tooltip: 'Call our AI Agent',
               icon: 'phone',
               zIndex: 10003,
               borderRadius: '50%',
               backgroundColor: '#fff',
               iconColor: '#1a73e8',
               pulse: true,
               shadow: true,
               label: '',
             };
             
             function initVapi() {
               if (typeof window.vapiSDK !== 'undefined') {
                 try {
                   vapiInstance = window.vapiSDK.run({
                     apiKey: apiKey,
                     assistant: assistant,
                     config: buttonConfig,
                   });
                   console.log('Vapi widget initialized successfully');
                 } catch (error) {
                   console.error('Error initializing Vapi widget:', error);
                 }
               } else {
                 console.log('Vapi SDK not loaded yet, retrying...');
                 setTimeout(initVapi, 100);
               }
             }
             
             // Load Vapi SDK
             var script = document.createElement('script');
             script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
             script.async = true;
             script.onload = function() {
               console.log('Vapi SDK loaded');
               setTimeout(initVapi, 100);
             };
             script.onerror = function() {
               console.error('Failed to load Vapi SDK');
             };
             document.head.appendChild(script);
           })();
         `,
        }}
      />

      {/* Signup Modal */}
      <SignupModal isOpen={showSignupModal} onClose={() => setShowSignupModal(false)} />

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <div className="w-full min-h-screen bg-[url('/images/home-banner.png')] bg-no-repeat bg-[length:100%_auto] md:bg-[length:100%_auto]"></div>
        </div>

        <section className="relative min-h-screen text-white overflow-visible">
          <div className="relative z-10 container mx-auto px-4 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-8 mt-20" data-aos="fade-right">
                <div className="heading">
                  <Image
                    src="/images/headingContent.svg"
                    alt="headingContent"
                    width={1600}
                    height={400}
                    className="w-full max-w-[1600px]"
                  />
                </div>
                <div className="content">
                  <p className="text-lg text-white/90 leading-relaxed max-w-[500px]">
                    India's First Health Insurance Card! Get ₹3L-₹10L Coverage + Top-up Options up to ₹1 Crore. 100%
                    Cashless at 10,000+ Hospitals. No Co-payment. Only 12 months waiting for PED. Get up to 25%
                    discounts + 10% cashback on top of insurance!
                  </p>
                  <Button
                    onClick={() => setShowSignupModal(true)}
                    className="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg mt-6 transition-transform duration-200 hover:scale-105 hover:from-pink-500 hover:to-orange-400"
                  >
                    JOIN THE REVOLUTION!
                  </Button>
                </div>
              </div>
              <div className="relative flex justify-center items-center" data-aos="fade-left">
                <div className="relative w-full max-w-[500px]">
                  <Image
                    src="/images/HI.png"
                    alt="Health Insurance Card"
                    width={500}
                    height={500}
                    className="object-contain w-full opacity-100"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Floating Images Container */}
            <div className="vactorsImages pointer-events-none absolute inset-0 z-10">
              <div className="ring mouseAnimate absolute right-10 top-[70%]">
                <div className="w-[140px] h-[140px] overflow-hidden">
                  <Image
                    src="/images/ring.png"
                    alt="ring"
                    width={140}
                    height={140}
                    className="object-contain"
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      outline: "none",
                      display: "block",
                    }}
                  />
                </div>
              </div>
              <div className="box mouseAnimate absolute left-1/4 top-[75%]">
                <Image src="/images/box.png" alt="box" width={120} height={120} />
              </div>
              <div className="coin3 mouseAnimate absolute right-1/4 top-[80%]">
                <Image src="/images/coin3.png" alt="coin3" width={100} height={100} />
              </div>
              <div className="coin2 mouseAnimate absolute left-1/3 top-[85%]">
                <Image src="/images/coin2.png" alt="coin2" width={90} height={90} />
              </div>
              <div className="coin1 mouseAnimate absolute right-1/3 top-[90%]">
                <Image src="/images/coin1.png" alt="coin1" width={90} height={90} />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Plus Image positioned above Network Hospitals Section */}
      <div className="relative -mt-20 z-20 flex justify-center">
        <div className="plus mouseAnimate">
          <Image src="/images/plus.png" alt="plus" width={120} height={120} />
        </div>
      </div>

      {/* Network Hospitals Section - Original Design with Flowing Background */}
      <section className="relative py-20 text-white">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[url('/images/home-banner.png')] bg-no-repeat bg-[length:100%_auto] bg-[position:0_-100vh] md:bg-[length:100%_auto]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col items-center mb-12" data-aos="fade-up">
            <div className="relative mb-8">
              <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  10,000+
                </span>
                <span className="text-[#421e63]"> Cashless Hospitals</span>
              </h2>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Badge className="bg-green-500 text-white px-4 py-2 text-lg font-semibold">
                  100% Cashless Treatment
                </Badge>
                <Badge className="bg-blue-500 text-white px-4 py-2 text-lg font-semibold">No Co-payment</Badge>
                <Badge className="bg-purple-500 text-white px-4 py-2 text-lg font-semibold">
                  12 Months PED Waiting
                </Badge>
                <Badge className="bg-orange-500 text-white px-4 py-2 text-lg font-semibold">Up to 25% Discounts</Badge>
                <Badge className="bg-pink-500 text-white px-4 py-2 text-lg font-semibold">10% Cashback Rewards</Badge>
              </div>
            </div>
          </div>

          <div className="text-center mb-8" data-aos="fade-up" data-aos-delay="200">
            <h5 className="text-3xl font-bold text-[#421e63]">Network Hospitals & Wellness Partners</h5>
          </div>

          <div className="network-marquee mt-4 overflow-hidden w-full" data-aos="fade-up" data-aos-delay="400">
            <div className="network-marquee-track flex items-center">
              {[13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map((num, idx) => (
                <div
                  key={idx}
                  className="mx-6 flex-shrink-0"
                  style={{ height: 60, display: "flex", alignItems: "center" }}
                >
                  <Image
                    src={`/images/image${num}logo.png`}
                    alt={`Partner ${num}`}
                    width={150}
                    height={60}
                    style={{ objectFit: "contain", height: 60, width: "auto" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Content with Statistics */}
          <div className="max-w-6xl mx-auto text-center mt-12" data-aos="fade-up" data-aos-delay="600">
            <p className="text-xl text-[#421e63] leading-relaxed mb-12">
              Access 10,000+ cashless hospitals nationwide with 100% cashless treatment and no co-payment. Get
              comprehensive health insurance coverage up to ₹1 Crore with only 12 months waiting for pre-existing
              diseases. Earn up to 10% cashback on top of insurance benefits!
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                data-aos="zoom-in"
                data-aos-delay="700"
              >
                <div className="text-4xl font-bold text-[#421e63] mb-2">₹1 Cr</div>
                <div className="text-lg text-[#421e63]">Maximum Coverage</div>
              </div>
              <div
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                data-aos="zoom-in"
                data-aos-delay="800"
              >
                <div className="text-4xl font-bold text-[#421e63] mb-2">10,000+</div>
                <div className="text-lg text-[#421e63]">Cashless Hospitals</div>
              </div>
              <div
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                data-aos="zoom-in"
                data-aos-delay="900"
              >
                <div className="text-4xl font-bold text-[#421e63] mb-2">100%</div>
                <div className="text-lg text-[#421e63]">Cashless Treatment</div>
              </div>
              <div
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                data-aos="zoom-in"
                data-aos-delay="1000"
              >
                <div className="text-4xl font-bold text-[#421e63] mb-2">10%</div>
                <div className="text-lg text-[#421e63]">Cashback Rewards</div>
              </div>
            </div>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="1100">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-green-800 mb-2">Instant Coverage</h4>
                <p className="text-green-700">Coverage starts from day 1 for new diseases with no medical checkup</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hospital className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-blue-800 mb-2">Premium Network</h4>
                <p className="text-blue-700">Access to top-tier hospitals including Apollo, Fortis, Max, and more</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wallet className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-purple-800 mb-2">Zero Out-of-Pocket</h4>
                <p className="text-purple-700">No co-payment, no deductibles, complete cashless experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What's Included in NiFe Card Wellness Membership - Enhanced with Floating Animation */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 max-w-4xl mx-auto mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-6 py-3 text-purple-600 font-medium">
              <Gift className="h-5 w-5" />
              Complete Wellness Package
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              What's Included in Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                NiFe Card Wellness Membership
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get instant access to comprehensive health and wellness benefits the moment you receive your NiFe Card
            </p>
          </div>

          {/* Enhanced Card Layout - Center with Left/Right Benefits */}
          <div className="relative max-w-7xl mx-auto">
            {/* Top Benefit - No Medical Test */}
            <div className="text-center mb-8" data-aos="fade-down">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full shadow-lg">
                <CheckCircle className="h-6 w-6" />
                <span className="font-bold text-lg">No Medical Test for Signup</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Left Side Benefits */}
              <div className="space-y-6" data-aos="fade-right">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-purple-500">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <CreditCard className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">NiFe RuPay Wellness Card</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Premium RuPay prepaid card with wellness benefits</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-500">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Health Insurance</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Coverage from ₹3L to ₹1 Crore with 100% cashless treatment</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-yellow-500">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <Coins className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Up to 1% Gold Rewards</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Earn gold coins on every swipe with your NiFe card</p>
                </div>
              </div>

              {/* Center - NiFe Card with Floating Animation */}
              <div className="relative flex justify-center items-center" data-aos="zoom-in" ref={cardRef}>
                <div className="relative">
                  <div className={`relative z-10 ${isCardInView ? "animate-float" : ""}`}>
                    <Image
                      src="/images/NiFe Health protect card.png"
                      alt="NiFe Health Protect Card"
                      width={400}
                      height={250}
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                    {/* Updated Card Details Overlay - Removed RuPay and moved content up */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6 text-white text-sm font-medium">
                      {/* Top Section - Coverage only */}
                      <div className="flex justify-end items-start">
                        <div className="text-right bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                          <p className="text-xs opacity-90">COVERAGE</p>
                          <p className="font-bold text-lg text-green-300">₹5,00,000</p>
                        </div>
                      </div>

                      {/* Middle Section - Card Holder Name moved up more */}
                      <div className="mt-[-20px]">
                        <p className="text-xs opacity-80">CARD HOLDER</p>
                        <p className="font-bold text-xl tracking-wider">RAJESH KUMAR</p>

                        {/* 16-digit Card Number */}
                        <div className="mt-2">
                          <p className="text-xs opacity-80">CARD NUMBER</p>
                          <p className="font-bold text-lg tracking-widest font-mono">4532 1234 5678 8765</p>
                        </div>

                        {/* Valid Thru - moved up to avoid heart overlap */}
                        <div className="mt-1">
                          <p className="text-xs opacity-80">VALID THRU</p>
                          <p className="font-bold text-base">12/27</p>
                        </div>
                      </div>

                      {/* Bottom Section - Removed RuPay Logo */}
                      <div className="flex justify-end items-end">{/* Empty space where RuPay was */}</div>
                    </div>
                  </div>

                  {/* Pulsing Ring Animation */}
                  <div className="absolute inset-0 rounded-full border-4 border-purple-300 animate-ping opacity-20"></div>
                  <div
                    className="absolute inset-4 rounded-full border-2 border-blue-300 animate-ping opacity-30"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                </div>
              </div>

              {/* Right Side Benefits */}
              <div className="space-y-6" data-aos="fade-left">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-green-500">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">24/7 Tele-consultation</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Unlimited access to qualified doctors for consultations</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-orange-500">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <Hospital className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Hospital Discounts</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Up to 25% discounts plus 10% cashback on medical expenses</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-pink-500">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <ShoppingCart className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Wellness Marketplace</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Exclusive access to wellness products and services</p>
                </div>
              </div>
            </div>

            {/* Bottom Benefit - Free 3 Lac Health Insurance with Eligibility */}
            <div className="text-center mt-8" data-aos="fade-up">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full shadow-lg mb-4">
                <Shield className="h-6 w-6" />
                <span className="font-bold text-lg">Free ₹3 Lac Health Insurance</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-gray-900">Base Insurance Eligibility</h4>
                      <p className="text-gray-600 text-sm">Available up to age 60</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-gray-900">Top-up Insurance</h4>
                      <p className="text-gray-600 text-sm">Available up to age 65</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
            <Button
              size="lg"
              onClick={() => setShowSignupModal(true)}
              className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-bold px-12 py-4 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get Your NiFe Card Today!
            </Button>
          </div>
        </div>
      </section>

      {/* Section 4: Why NiFe Health Insurance is Important - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 max-w-4xl mx-auto mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-6 py-3 text-red-600 font-medium">
              <AlertTriangle className="h-5 w-5" />
              Health Crisis Reality Check
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              One Hospital Bill Away From{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
                Bankruptcy
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Without proper health coverage, a single medical emergency can wipe out your life savings and compromise
              your family's future. Don't let healthcare costs destroy your financial stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card
              className="border-red-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-red-50 to-red-100"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-4">
                  <AlertTriangle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-red-800 text-xl">The Healthcare Crisis</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>70% of Indians have no health insurance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Average ICU cost: ₹15,000-₹50,000 per day</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Heart surgery: ₹3-8 Lakhs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Cancer treatment: ₹10-25 Lakhs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>55 million Indians pushed into poverty due to medical bills</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className="border-orange-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-orange-50 to-orange-100"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-orange-800 text-xl">Rising Healthcare Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Healthcare inflation: 15% annually</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Private hospital costs 3x higher than government</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Emergency treatments cost 5x more</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Diagnostic tests increasing 20% yearly</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Medicine costs rising 12% annually</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className="border-green-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-green-100"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-green-800 text-xl">NiFe Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>100% cashless treatment at 10,000+ hospitals</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>No co-payment or deductibles</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Coverage from ₹3L to ₹1 Crore</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Only 12 months waiting for PED</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Additional 10% cashback rewards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div
            className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <h3 className="text-3xl font-bold mb-6">NiFeCard India's Health & Wellness Card</h3>
            <p className="text-xl mb-8 leading-relaxed">
              Just like you have Aadhaar for identity and PAN for taxes, have NiFe Card for health and wellness. Your
              complete healthcare companion that protects your health and builds your wealth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <CreditCard className="h-10 w-10 text-white" />
                </div>
                <h4 className="font-bold text-xl mb-2">Aadhaar Card</h4>
                <p className="text-white/80">For Identity Verification</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="h-10 w-10 text-white" />
                </div>
                <h4 className="font-bold text-xl mb-2">PAN Card</h4>
                <p className="text-white/80">For Tax Compliance</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h4 className="font-bold text-xl mb-2">NiFe Card</h4>
                <p className="text-white/80">For Health & Wealth Protection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: How NiFe Members Earn Gold Coins - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 max-w-4xl mx-auto mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-200 px-6 py-3 text-yellow-800 font-medium">
              <Coins className="h-5 w-5" />
              Wealth Building Made Simple
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Earn Up to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
                1% NiFe Gold Coins
              </span>{" "}
              on Every Purchase
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Turn your everyday spending into gold investment. Earn NiFe Gold Coins on groceries, shopping, bills, and
              more!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card
              className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-yellow-50 border-yellow-200"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-green-800">Grocery Shopping</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-3">1%</div>
                <p className="text-gray-600 mb-4">BigBasket, Grofers, Local stores</p>
                <div className="bg-yellow-100 rounded-lg p-3">
                  <p className="text-sm font-semibold text-yellow-800">₹5,000 spend = 50 gold coins</p>
                  <p className="text-xs text-yellow-700 mt-1">Worth ≈ ₹325</p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50 border-blue-200"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-blue-800">Online Shopping</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-3">1%</div>
                <p className="text-gray-600 mb-4">Amazon, Flipkart, Myntra</p>
                <div className="bg-yellow-100 rounded-lg p-3">
                  <p className="text-sm font-semibold text-yellow-800">₹10,000 spend = 100 gold coins</p>
                  <p className="text-xs text-yellow-700 mt-1">Worth ≈ ₹650</p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50 border-purple-200"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-purple-800">Bill Payments</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-3">1%</div>
                <p className="text-gray-600 mb-4">Electricity, Gas, Mobile, DTH</p>
                <div className="bg-yellow-100 rounded-lg p-3">
                  <p className="text-sm font-semibold text-yellow-800">₹3,000 bills = 30 gold coins</p>
                  <p className="text-xs text-yellow-700 mt-1">Worth ≈ ₹195</p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50 border-orange-200"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-orange-800">Retail Stores</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-3">1%</div>
                <p className="text-gray-600 mb-4">Malls, Restaurants, Petrol pumps</p>
                <div className="bg-yellow-100 rounded-lg p-3">
                  <p className="text-sm font-semibold text-yellow-800">₹2,000 spend = 20 gold coins</p>
                  <p className="text-xs text-yellow-700 mt-1">Worth ≈ ₹130</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-2xl mb-16" data-aos="fade-up" data-aos-delay="600">
            <h3 className="text-3xl font-bold text-center mb-12">How Gold Coin Collection Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="h-12 w-12 text-white" />
                </div>
                <h4 className="font-bold text-xl mb-4">1. Spend with NiFe Card</h4>
                <p className="text-gray-600 leading-relaxed">
                  Use your NiFe RuPay card for any purchase - online or offline, anywhere RuPay is accepted
                </p>
              </div>
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Coins className="h-12 w-12 text-white" />
                </div>
                <h4 className="font-bold text-xl mb-4">2. Earn Gold Coins</h4>
                <p className="text-gray-600 leading-relaxed">
                  Automatically earn 1% of your spend as NiFe Gold Coins, credited within 24 hours
                </p>
              </div>
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="h-12 w-12 text-white" />
                </div>
                <h4 className="font-bold text-xl mb-4">3. Manage on NiFe App</h4>
                <p className="text-gray-600 leading-relaxed">
                  Buy, sell, or convert gold coins to physical gold on the NiFe mobile app with real-time pricing
                </p>
              </div>
            </div>
          </div>

          <div
            className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-12 text-white text-center shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <h3 className="text-3xl font-bold mb-8">Monthly Gold Earning Example</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h4 className="font-bold text-xl mb-6">Average Family Spending</h4>
                <ul className="text-left space-y-4">
                  <li className="flex justify-between items-center">
                    <span>🛒 Groceries: ₹8,000</span>
                    <span className="font-bold">→ 80 gold coins</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>⚡ Bills: ₹5,000</span>
                    <span className="font-bold">→ 50 gold coins</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>🛍️ Shopping: ₹7,000</span>
                    <span className="font-bold">→ 70 gold coins</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>🍽️ Dining: ₹3,000</span>
                    <span className="font-bold">→ 30 gold coins</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h4 className="font-bold text-xl mb-6">Monthly Gold Accumulation</h4>
                <div className="text-5xl font-bold mb-4">230 Gold Coins</div>
                <p className="text-xl mb-4">Worth approximately ₹1,500-2,000</p>
                <p className="text-sm opacity-90">*Based on current gold prices</p>
                <div className="mt-6 bg-white/20 rounded-lg p-4">
                  <p className="font-semibold">Annual Gold Savings: ₹18,000-24,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: ABHA Card Integration - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 max-w-4xl mx-auto mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-6 py-3 text-blue-600 font-medium">
              <Globe className="h-5 w-5" />
              Government Integration
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Free{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                ABHA Card Registration
              </span>{" "}
              & Management
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get your government ABHA (Ayushman Bharat Health Account) card for free and manage all your health records
              in one place through the NiFe mobile app
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8" data-aos="fade-right">
              <h3 className="text-3xl font-bold mb-8">What is ABHA Card?</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Digital Health ID</h4>
                    <p className="text-gray-600">Unique 14-digit health ID for all Indians under Ayushman Bharat</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Health Records Storage</h4>
                    <p className="text-gray-600">
                      Store all medical records, prescriptions, and test reports digitally
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Hospital className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Hospital Integration</h4>
                    <p className="text-gray-600">Seamless access to health records at any ABHA-enabled hospital</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">NiFe + ABHA Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                    <span>Free ABHA card registration (usually ₹50-100)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                    <span>Instant digital card generation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                    <span>Integrated health record management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                    <span>Easy sharing with doctors and hospitals</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                    <span>Backup and sync across devices</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                    <span>Government scheme eligibility check</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-delay="400">
            <Button
              size="lg"
              onClick={() => setShowSignupModal(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-12 py-4 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get Free ABHA Card with NiFe
            </Button>
          </div>
        </div>
      </section>

      {/* Section 7: Video Testimonials - Enhanced 6x3 Grid with Main Video */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 max-w-4xl mx-auto mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-6 py-3 text-red-600 font-medium">
              <Play className="h-5 w-5" />
              Real Stories, Real Results
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
                Members Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Watch real NiFe Card members share their success stories and experiences
            </p>
          </div>

          {/* Main Video Player - Reduced to 60% of original size */}
          <div className="mb-12" data-aos="fade-up">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="aspect-video bg-black relative mx-auto" style={{ maxWidth: "60%" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${videoTestimonials[selectedVideo].id}`}
                  title={videoTestimonials[selectedVideo].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{videoTestimonials[selectedVideo].title}</h3>
                <p className="text-gray-600 mb-4">{videoTestimonials[selectedVideo].description}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {videoTestimonials[selectedVideo].author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{videoTestimonials[selectedVideo].author}</p>
                    <p className="text-gray-500 text-sm">{videoTestimonials[selectedVideo].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6x3 Video Grid with Left-to-Right Animation */}
          <div className="relative overflow-hidden" data-aos="fade-up" data-aos-delay="200">
            <div
              className="flex gap-4 animate-scroll-left"
              style={{
                width: "calc(200px * 18 + 4rem * 17)", // 18 videos * 200px width + gaps
                animation: "scrollLeft 60s linear infinite",
              }}
            >
              {videoTestimonials.map((video, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-48 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    selectedVideo === index ? "ring-4 ring-blue-500" : ""
                  }`}
                  onClick={() => setSelectedVideo(index)}
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="aspect-video bg-gray-200 relative overflow-hidden">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                          <Play className="h-6 w-6 text-gray-800 ml-1" />
                        </div>
                      </div>
                      {selectedVideo === index && (
                        <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          PLAYING
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-sm mb-2 line-clamp-2">{video.title}</h4>
                      <p className="text-xs text-gray-600 mb-2 line-clamp-2">{video.description}</p>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xs">{video.author.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="text-xs font-semibold">{video.author}</p>
                          <p className="text-xs text-gray-500">{video.role.split(",")[0]}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Categories */}
          <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="400">
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="rounded-full bg-transparent" onClick={() => setSelectedVideo(0)}>
                Success Stories
              </Button>
              <Button variant="outline" className="rounded-full bg-transparent" onClick={() => setSelectedVideo(6)}>
                Family Protection
              </Button>
              <Button variant="outline" className="rounded-full bg-transparent" onClick={() => setSelectedVideo(12)}>
                Gold Investment
              </Button>
              <Button variant="outline" className="rounded-full bg-transparent" onClick={() => setSelectedVideo(1)}>
                Emergency Care
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Customer Reviews Section - 6x3 with 20+ reviews and left-to-right animation */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 max-w-4xl mx-auto mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-6 py-3 text-green-600 font-medium">
              <Star className="h-5 w-5" />
              Customer Reviews
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Customers Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Real reviews from real customers who trust NiFe Card for their health and wellness needs
            </p>
          </div>

          {/* Reviews Grid with Left-to-Right Animation */}
          <div className="relative overflow-hidden" data-aos="fade-up" data-aos-delay="200">
            <div
              className="flex gap-6 animate-scroll-left-reviews"
              style={{
                width: `calc(350px * ${customerReviewsData.length} + 1.5rem * ${customerReviewsData.length - 1})`, // 22 reviews * 350px width + gaps
                animation: "scrollLeftReviews 120s linear infinite",
              }}
            >
              {customerReviewsData.map((review, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-80 h-64 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{review.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{review.name}</h4>
                          <p className="text-sm text-gray-500">{review.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm line-clamp-4">{review.review}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="600">
            <Button
              size="lg"
              onClick={() => setShowSignupModal(true)}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-12 py-4 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Join 5,000+ Happy Customers
            </Button>
          </div>
        </div>
      </section>

      {/* Section 9: FAQ Section with 4x4 Card Layout and Moving Animation */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 max-w-4xl mx-auto mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-6 py-3 text-indigo-600 font-medium">
              <HelpCircle className="h-5 w-5" />
              Got Questions? We've Got Answers
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to know about NiFe Card, health insurance, rewards, and more
            </p>
          </div>

          {/* FAQ Cards with Moving Animation and Expandable Content */}
          <div className="relative overflow-hidden" data-aos="fade-up" data-aos-delay="200">
            <div
              className="flex gap-6 animate-scroll-left-slow"
              style={{
                width: `calc(320px * ${faqQuestionsData.length} + 1.5rem * ${faqQuestionsData.length - 1})`, // 16 cards * 320px width
                animation: "scrollLeftSlow 80s linear infinite",
              }}
            >
              {faqQuestionsData.map((faq, index) => (
                <Card
                  key={index}
                  className={`flex-shrink-0 w-80 ${expandedFaq === index ? "h-auto" : "h-64"} bg-gradient-to-br ${faq.color.replace(
                    "from-",
                    "from-",
                  )}/10 to-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group`}
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <CardContent className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <div
                        className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${faq.color} px-3 py-1 mb-4`}
                      >
                        <span className="text-xs font-semibold text-white">{faq.category}</span>
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-purple-700 transition-colors leading-tight">
                        {faq.question}
                      </h3>
                    </div>
                    {expandedFaq === index ? (
                      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 mt-4">
                        <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    ) : (
                      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4">
                        <p className="text-gray-500 text-sm italic">Click to read answer...</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* View All FAQs Button */}
          <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold px-12 py-4 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              View All FAQs
            </Button>
          </div>
        </div>
      </section>

      {/* Section 10: Instagram Gallery */}
      <InstagramGallery />

      {/* Section 11: Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto" data-aos="fade-up">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Ready to Transform Your Health & Wealth Journey?
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Join thousands of Indians who are already protecting their health and building wealth with NiFe Card
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                onClick={() => setShowSignupModal(true)}
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-12 py-4 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Get Your NiFe Card Now!
              </Button>
              <div className="text-center">
                <p className="text-lg font-semibold">Starting at just ₹999/year</p>
                <p className="text-sm opacity-80">No hidden charges • 15-day money back guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vapi Phone Widget Container */}
      <div id="vapi-phone-widget" className="fixed bottom-6 right-6 z-50"></div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-200px * 9 - 2rem * 8)); }
        }
        
        @keyframes scrollLeftSlow {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-320px * 8 - 1.5rem * 7)); }
        }
        
        @keyframes scrollLeftReviews {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-350px * 11 - 1.5rem * 10)); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-scroll-left {
          animation: scrollLeft 60s linear infinite;
        }
        
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
        
        .animate-scroll-left-slow {
          animation: scrollLeftSlow 80s linear infinite;
        }
        
        .animate-scroll-left-slow:hover {
          animation-play-state: paused;
        }
        
        .animate-scroll-left-reviews {
          animation: scrollLeftReviews 120s linear infinite;
        }
        
        .animate-scroll-left-reviews:hover {
          animation-play-state: paused;
        }
        
        .mouseAnimate {
          animation: float 3s ease-in-out infinite;
        }
        
        .mouseAnimate:nth-child(2) {
          animation-delay: 0.5s;
        }
        
        .mouseAnimate:nth-child(3) {
          animation-delay: 1s;
        }
        
        .mouseAnimate:nth-child(4) {
          animation-delay: 1.5s;
        }
        
        .mouseAnimate:nth-child(5) {
          animation-delay: 2s;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  )
}
