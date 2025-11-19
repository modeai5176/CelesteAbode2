import type { Metadata } from "next";
import { projectMetadata, projectSlugToId } from "@/lib/project-metadata";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // Handle both slug and legacy numeric IDs for backward compatibility
  let projectId: number | undefined;
  
  if (/^\d+$/.test(params.slug)) {
    // Legacy numeric ID
    projectId = parseInt(params.slug);
  } else {
    // Slug format
    projectId = projectSlugToId[params.slug];
  }
  
  const project = projectId ? projectMetadata[projectId] : undefined;

  if (!project) {
    return {
      title: "Project Not Found | Celeste Abode",
      description: "The requested project could not be found.",
    };
  }

  const projectSlug = project.slug;

  return {
    title: project.title,
    description: project.description,
    keywords: project.keywords,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://www.celesteabode.com/projects/${projectSlug}`,
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
      canonical: `https://www.celesteabode.com/projects/${projectSlug}`,
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

