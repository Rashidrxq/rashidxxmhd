"use client";

import { ReactLenis } from 'lenis/react';
import { useEffect, useState } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [options, setOptions] = useState({
    lerp: 0.1,
    duration: 1.5,
    smoothWheel: true,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateOptions = () => {
      const reduced = mediaQuery.matches;
      setOptions(
        reduced
          ? { lerp: 1, duration: 0.1, smoothWheel: false }
          : { lerp: 0.1, duration: 1.5, smoothWheel: true }
      );
    };

    updateOptions();
    mediaQuery.addEventListener?.("change", updateOptions);
    return () => mediaQuery.removeEventListener?.("change", updateOptions);
  }, []);

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}
