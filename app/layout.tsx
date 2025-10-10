import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Celeste Abode - Luxury Real Estate Consulting",
  description:
    "Redefining luxury real estate consulting in India's premium segment. From masterpiece of time into a masterpiece of living.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/hero.avif"
          as="image"
          type="image/avif"
        />
        <link
          rel="icon"
          href="/favicon.png"
          type="image/png"
          sizes="48x48"
        />
        <link
          rel="icon"
          href="/favicon.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/favicon.png"
          type="image/png"
          sizes="24x24"
        />
        <link
          rel="icon"
          href="/favicon.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon.png"
          sizes="180x180"
        />
        <link
          rel="icon"
          href="/favicon.png"
          type="image/png"
          sizes="192x192"
        />
        <link
          rel="icon"
          href="/favicon.png"
          type="image/png"
          sizes="512x512"
        />
        <meta name="msapplication-TileImage" content="/favicon.png" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
