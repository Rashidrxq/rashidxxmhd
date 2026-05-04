// Google Analytics Integration Guide
// Add this component to your layout.tsx to track user interactions

"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    // Initialize Google Analytics
    // Replace GOOGLE_ANALYTICS_ID with your actual Google Analytics 4 ID
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

    if (!GA_ID) {
      console.warn("Google Analytics ID not configured");
      return;
    }

    // Create script to load Google Analytics
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(arguments);
    }
    (window as any).gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_ID);
  }, []);

  return null;
}
