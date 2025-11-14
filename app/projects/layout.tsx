import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Projects & Properties in Noida, Greater Noida, Delhi NCR | Celeste Abode",
  description:
    "Explore 13+ premium real estate projects in Noida, Greater Noida, Yamuna Expressway, and Ghaziabad. Luxury apartments, investment properties, and ready-to-move homes. Browse by category: Buying to Live, Investment Opportunities, Luxury Residences.",
  keywords: [
    "luxury projects Noida",
    "properties Greater Noida",
    "real estate projects Delhi NCR",
    "apartments Yamuna Expressway",
    "investment properties Noida",
    "ready to move apartments",
    "luxury apartments Greater Noida West",
    "property projects Noida",
    "residential projects Delhi NCR",
    "premium apartments Noida",
  ],
  openGraph: {
    title: "Luxury Projects & Properties in Noida, Greater Noida, Delhi NCR | Celeste Abode",
    description:
      "Explore 13+ premium real estate projects including luxury apartments and investment properties in Delhi NCR.",
    url: "https://www.celesteabode.com/projects",
    siteName: "Celeste Abode",
    images: [
      {
        url: "/hero-.avif",
        width: 1200,
        height: 630,
        alt: "Celeste Abode Projects - Luxury Properties in Delhi NCR",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Projects & Properties in Noida, Greater Noida, Delhi NCR",
    description:
      "Explore 13+ premium real estate projects including luxury apartments and investment properties.",
    images: ["/hero-.avif"],
  },
  alternates: {
    canonical: "https://www.celesteabode.com/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

