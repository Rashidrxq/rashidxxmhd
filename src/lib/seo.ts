// SEO utility functions for consistent metadata across the app

export const baseUrl = "https://rashidxxmhd.vercel.app";
export const authorName = "Muhammed Rashid P P";

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url: string;
  type?: "website" | "article" | "profile";
}

// Generate Open Graph metadata
export function generateOpenGraph(config: SEOConfig) {
  return {
    title: config.title,
    description: config.description,
    url: config.url,
    type: config.type || "website",
    images: config.image
      ? [
          {
            url: config.image,
            width: 1200,
            height: 630,
            alt: config.title,
          },
        ]
      : [
          {
            url: `${baseUrl}/og-image.png`,
            width: 1200,
            height: 630,
            alt: authorName,
          },
        ],
    siteName: "Muhammed Rashid Portfolio",
  };
}

// Generate Twitter Card metadata
export function generateTwitterCard(config: SEOConfig) {
  return {
    card: "summary_large_image",
    title: config.title,
    description: config.description,
    images: config.image ? [config.image] : [`${baseUrl}/og-image.png`],
  };
}

// Generate JSON-LD schema for structured data
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: authorName,
    alternateName: "Rashid Developer",
    url: baseUrl,
    jobTitle: "Frontend Developer",
    sameAs: [
      "https://linkedin.com/in/rashidxxmhd",
      "https://github.com/Rashidrxq",
      "https://instagram.com/rshidxxmhd",
    ],
    email: "rashid.mhd.pp@gmail.com",
    location: {
      "@type": "Place",
      name: "India",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Frontend Development",
      "UI/UX Design",
      "Web Development",
      "AI Integration",
    ],
  };
}

// Generate Organization schema
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: authorName,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      "Portfolio and case studies of Muhammed Rashid P P, a Frontend Developer specializing in React, Next.js, and AI applications.",
    sameAs: [
      "https://linkedin.com/in/rashidxxmhd",
      "https://github.com/Rashidrxq",
    ],
  };
}

// Generate Project/Article schema
export function generateProjectSchema(project: {
  id: string;
  title: string;
  description: string;
  image: string;
  year: string;
  role: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.description,
    image: project.image,
    datePublished: `${project.year}-01-01`,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: authorName,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/projects/${project.id}`,
    },
  };
}

// Generate Breadcrumb schema
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
