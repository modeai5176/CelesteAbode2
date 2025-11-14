import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Powered Real Estate Consulting in India | Celeste Abode",
  description:
    "Buy luxury apartments, flats & villas in Noida, Gurgaon, Delhi NCR, Ghaziabad, and Lucknow with Celeste Abode – India's trusted AI-driven real estate advisory. Expert property consultation, investment advisory, and NRI services.",
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
  ],
  openGraph: {
    title: "AI-Powered Real Estate Consulting in India | Celeste Abode",
    description:
      "Buy luxury apartments, flats & villas in Noida, Gurgaon, Delhi NCR, Ghaziabad, and Lucknow with Celeste Abode – India's trusted AI-driven real estate advisory.",
    url: "https://www.celesteabode.com",
    siteName: "Celeste Abode",
    images: [
      {
        url: "/hero.avif",
        width: 1200,
        height: 630,
        alt: "Celeste Abode - AI-Powered Real Estate Consulting",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Real Estate Consulting in India | Celeste Abode",
    description:
      "Buy luxury apartments, flats & villas in Noida, Gurgaon, Delhi NCR, Ghaziabad, and Lucknow with Celeste Abode.",
    images: ["/hero.avif"],
  },
  alternates: {
    canonical: "https://www.celesteabode.com",
  },
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

