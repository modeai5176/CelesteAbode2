import type React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.celesteabode.com"),
  title: {
    default: "AI-Powered Real Estate Consulting in India | Celeste Abode",
    template: "%s | Celeste Abode",
  },
  description:
    "Buy luxury apartments, flats & villas in Noida, Gurgaon, Delhi NCR, Ghaziabad, and Lucknow with Celeste Abode – India's trusted AI-driven real estate advisory.",
  keywords: [
    "real estate consulting India",
    "luxury apartments Noida",
    "property advisory Delhi NCR",
    "AI real estate",
    "property investment India",
    "NRI property services",
    "Greater Noida properties",
    "Yamuna Expressway projects",
    "ready to move apartments",
    "property investment advisory",
    "real estate Noida",
    "luxury villas Gurgaon",
    "property consultant Noida",
    "real estate agent Delhi NCR",
    "property advisor India",
  ],
  authors: [{ name: "Celeste Abode" }],
  creator: "Celeste Abode",
  publisher: "Celeste Abode",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.celesteabode.com",
    siteName: "Celeste Abode",
    title: "AI-Powered Real Estate Consulting in India | Celeste Abode",
    description:
      "Buy luxury apartments, flats & villas in Noida, Gurgaon, Delhi NCR, Ghaziabad, and Lucknow with Celeste Abode – India's trusted AI-driven real estate advisory.",
    images: [
      {
        url: "/hero.avif",
        width: 1200,
        height: 630,
        alt: "Celeste Abode - AI-Powered Real Estate Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Real Estate Consulting in India | Celeste Abode",
    description:
      "Buy luxury apartments, flats & villas in Noida, Gurgaon, Delhi NCR, Ghaziabad, and Lucknow with Celeste Abode.",
    images: ["/hero.avif"],
    creator: "@celesteabode",
  },
  alternates: {
    canonical: "https://www.celesteabode.com",
  },
  category: "Real Estate",
  classification: "Real Estate Consulting",
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Noida",
    "geo.position": "28.5355;77.3910",
    "ICBM": "28.5355, 77.3910",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/hero.avif" as="image" type="image/avif" />
        <link rel="icon" href="/logoceleste.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/logoceleste.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/logoceleste.ico" sizes="180x180" />
        <meta name="msapplication-TileImage" content="/logoceleste.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
