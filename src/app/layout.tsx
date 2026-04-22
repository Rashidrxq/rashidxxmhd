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
  verification: {
    google: "uoqo49KmDxvlyOjr3OSgum2iXh6kLKaLJ_MUrRFz2Ho",
  },
  keywords: [
    "Muhammed Rashid P P frontend developer",
    "Rashid developer Kerala",
    "React developer India",
    "Next.js developer Kozhikode",
    "Software developer portfolio Rashid"
  ],

  authors: [{ name: "Muhammed Rashid P P" }],
  creator: "Muhammed Rashid P P",

  alternates: {
    canonical: "https://rashidxxmhd.vercel.app/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://rashidxxmhd.vercel.app",
    title: "Muhammed Rashid P P | Frontend Developer",
    description:
      "Portfolio of Muhammed Rashid P P, a frontend developer from Kerala.",
    siteName: "Muhammed Rashid Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammed Rashid Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammed Rashid P P | Frontend Developer",
    description: "Frontend Developer Portfolio",
    images: ["/og-image.png"],
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
              sameAs: [
                "https://linkedin.com/in/rashidxxmhd",
                "https://github.com/Rashidrxq"
              ]
            })
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
