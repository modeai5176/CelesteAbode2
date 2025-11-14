import type { Metadata } from "next";
import { projectMetadata } from "@/lib/project-metadata";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = parseInt(params.id);
  const project = projectMetadata[id];

  if (!project) {
    return {
      title: "Project Not Found | Celeste Abode",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: project.title,
    description: project.description,
    keywords: project.keywords,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://www.celesteabode.com/projects/${id}`,
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
      canonical: `https://www.celesteabode.com/projects/${id}`,
    },
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

