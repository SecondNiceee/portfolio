import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LenisProvider } from "@/components/lenis-provider"
import { VisitorTracker } from "@/components/visitor-tracker"
import { JsonLd } from "@/components/json-ld"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Создать качественный лендинг всего за 3000 рублей | NiceSite",
  description: "Создать сайт или купить лендинг недорого. Профессиональное создание лендингов и сайтов под ключ от 3000 рублей. SEO-оптимизация, адаптивный дизайн, быстрая загрузка.",
  keywords: [
    "создать сайт",
    "создать лендинг", 
    "купить лендинг",
    "купить сайт",
    "заказать сайт",
    "заказать лендинг",
    "создание сайтов",
    "разработка лендинга",
    "сайт под ключ",
    "лендинг недорого"
  ],
  authors: [{ name: "NiceSite" }],
  creator: "NiceSite",
  publisher: "NiceSite",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://nicesite.ru",
    siteName: "NiceSite",
    title: "Создать качественный лендинг всего за 3000 рублей",
    description: "Профессиональное создание сайтов и лендингов под ключ. Купить лендинг или заказать сайт недорого с SEO-оптимизацией.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Создать качественный лендинг всего за 3000 рублей | NiceSite",
    description: "Профессиональное создание сайтов и лендингов под ключ. Купить лендинг или заказать сайт недорого.",
  },
  alternates: {
    canonical: "https://nicesite.ru",
  },
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <JsonLd />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <LenisProvider>{children}</LenisProvider>
        <VisitorTracker />
        <Analytics />
      </body>
    </html>
  )
}
