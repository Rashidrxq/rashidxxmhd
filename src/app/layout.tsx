import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoaderWrapper from "@/components/LoaderWrapper";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

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
    default: "Muhammed Rashid P P | Frontend Developer",
    template: "%s | Muhammed Rashid P P",
  },
  description: "Portfolio of Muhammed Rashid P P, a passionate Frontend & Software Developer. Discover my latest projects, skills, and experiences. Rashid Developer.",
  keywords: ["Muhammed Rashid P P", "Rashid Developer", "Frontend Developer", "Software Developer", "Web Developer", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Muhammed Rashid P P" }],
  creator: "Muhammed Rashid P P",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rashidxxmhd.vercel.app",
    title: "Muhammed Rashid P P | Frontend Developer",
    description: "Portfolio of Muhammed Rashid P P, a passionate Frontend & Software Developer. Discover my latest projects, skills, and experiences.",
    siteName: "Muhammed Rashid P P Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Rashid P P | Frontend Developer",
    description: "Portfolio of Muhammed Rashid P P, a passionate Frontend & Software Developer.",
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
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
