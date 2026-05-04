import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoaderWrapper from "@/components/LoaderWrapper";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import AudioPlayer from "@/components/AudioPlayer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rashidxxmhd.vercel.app'),
  title: {
    default: "Muhammed Rashid P P | Frontend Developer Kerala",
    template: "%s | Muhammed Rashid P P",
  },
  description:
    "Muhammed Rashid P P is a Frontend Developer from Kerala specializing in React, Next.js, and AI-based applications. Explore projects, skills, and portfolio.",
  keywords: [
    "Muhammed Rashid P P",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "Kerala developer",
    "India",
    "Kozhikode",
    "web development",
    "AI integration",
    "software engineer",
    "web designer",
  ],
  verification: {
    google: "uoqo49KmDxvlyOjr3OSgum2iXh6kLKaLJ_MUrRFz2Ho",
  },
  authors: [{ name: "Muhammed Rashid P P" }],
  creator: "Muhammed Rashid P P",
  publisher: "Muhammed Rashid P P",

  alternates: {
    canonical: "https://rashidxxmhd.vercel.app/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://rashidxxmhd.vercel.app",
    title: "Muhammed Rashid P P | Frontend Developer",
    description:
      "Explore the portfolio of Muhammed Rashid P P, a Frontend Developer specializing in React, Next.js, and AI applications.",
    siteName: "Muhammed Rashid Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammed Rashid Portfolio",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammed Rashid P P | Frontend Developer",
    description: "Portfolio of Muhammed Rashid P P - Frontend Developer",
    images: ["/og-image.png"],
    creator: "@rshidxxmhd",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Enhanced JSON-LD Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammed Rashid P P",
              alternateName: "Rashid Developer",
              url: "https://rashidxxmhd.vercel.app",
              jobTitle: "Frontend Developer",
              description:
                "Frontend Developer specializing in React, Next.js, and AI-based applications",
              email: "rashid.mhd.pp@gmail.com",
              telephone: "+919745393044",
              location: {
                "@type": "Place",
                name: "India",
              },
              sameAs: [
                "https://linkedin.com/in/rashidxxmhd",
                "https://github.com/Rashidrxq",
                "https://instagram.com/rshidxxmhd",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Frontend Development",
                "Web Development",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Muhammed Rashid Portfolio",
              url: "https://rashidxxmhd.vercel.app",
              description: "Portfolio showcasing frontend development projects",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://rashidxxmhd.vercel.app/projects?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <SmoothScroll>
          <LoaderWrapper />
          <CustomCursor />
          <AudioPlayer />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
