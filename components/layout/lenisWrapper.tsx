"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

interface Props {
  children: React.ReactNode;
}

const LenisWrapper: React.FC<Props> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t: number) => t, // linear easing
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      mouseMultiplier: 1,
      smoothTouch: true,
      touchMultiplier: 2,
    });

    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return <>{children}</>;
};

export default LenisWrapper;
