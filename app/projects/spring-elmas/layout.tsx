import type { Metadata } from "next";
import { projectMetadata, projectSlugToId } from "@/lib/project-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const projectId = projectSlugToId["spring-elmas"];
  const project = projectMetadata[projectId];

  return {
    title: project.title,
    description: project.description,
    keywords: project.keywords,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://www.celesteabode.com/projects/spring-elmas`,
      siteName: "Celeste Abode",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} - Celeste Abode`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
    alternates: {
      canonical: `https://www.celesteabode.com/projects/spring-elmas`,
    },
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
  };
}

export default function PropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
