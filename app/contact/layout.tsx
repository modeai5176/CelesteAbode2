import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Real Estate Consultation Noida | Celeste Abode",
  description:
    "Get in touch with Celeste Abode for luxury property consultation in Noida, Greater Noida, and Delhi NCR. Call +91 9818735258 or visit our office in Sector 62, Noida. Expert real estate advisors available 24/7.",
  keywords: [
    "contact real estate consultant",
    "property advisor Noida",
    "real estate consultation",
    "property expert Delhi NCR",
    "real estate office Noida",
    "property consultation Noida",
  ],
  openGraph: {
    title: "Contact Us - Real Estate Consultation Noida | Celeste Abode",
    description:
      "Get in touch for luxury property consultation. Call +91 9818735258 or visit Sector 62, Noida.",
    url: "https://www.celesteabode.com/contact",
    siteName: "Celeste Abode",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Us - Real Estate Consultation Noida",
    description: "Get in touch for luxury property consultation. Call +91 9818735258.",
  },
  alternates: {
    canonical: "https://www.celesteabode.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

