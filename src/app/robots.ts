import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Disallow private admin routes
        disallow: ["/admin", "/api/"],
      },
      {
        // Googlebot can crawl everything
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    sitemap: "https://rashidxxmhd.vercel.app/sitemap.xml",
  };
}
