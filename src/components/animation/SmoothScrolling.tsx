"use client";

import ReactLenis from "lenis/react";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.05, syncTouch: true, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
