import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Advisory Session - Personalized Property Consultation | Celeste Abode",
  description:
    "Book a personalized real estate advisory session with Celeste Abode. Get expert guidance on property buying, investment, and portfolio optimization tailored to your needs, budget, and timeline.",
  keywords: [
    "property advisory session",
    "real estate consultation booking",
    "personalized property advice",
    "property investment consultation",
    "real estate expert consultation",
  ],
  openGraph: {
    title: "Request Advisory Session - Personalized Property Consultation | Celeste Abode",
    description:
      "Book a personalized real estate advisory session with expert guidance on property buying and investment.",
    url: "https://www.celesteabode.com/advisory-session",
    siteName: "Celeste Abode",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Request Advisory Session - Personalized Property Consultation",
    description: "Book a personalized real estate advisory session with expert guidance.",
  },
  alternates: {
    canonical: "https://www.celesteabode.com/advisory-session",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AdvisorySessionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

