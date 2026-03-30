"use client";

import { useState } from "react";
import Loader from "@/components/Loader";

export default function LoaderWrapper() {
  const [loading, setLoading] = useState(true);

  if (!loading) return null;

  return <Loader onComplete={() => setLoading(false)} />;
}
