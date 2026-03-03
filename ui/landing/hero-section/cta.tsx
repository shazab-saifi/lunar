"use client";

import { Button } from "@/components";
import { useEffect, useState } from "react";

export const Cta = () => {
  const [os, setOs] = useState("Unknown");

  useEffect(() => {
    const findOs = () => {
      const ua = navigator.userAgent;

      if (/android/i.test(ua)) setOs("Android");
      else if (/iPad|iPhone|iPod/.test(ua)) setOs("iOS");
      else if (/Win/.test(ua)) setOs("Windows");
      else if (/Mac/.test(ua)) setOs("macOS");
      else if (/Linux/.test(ua)) setOs("Linux");
    };

    findOs();
  }, []);

  return <Button>Download for {os}</Button>;
};
