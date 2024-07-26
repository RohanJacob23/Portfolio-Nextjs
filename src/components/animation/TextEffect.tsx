"use client";

import React from "react";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { cn } from "@/lib/utils";

export default function TextEffect({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const text = children.split("");

  return (
    <LazyMotion features={domAnimation}>
      <m.span
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.025 }}
        className="inline-block"
      >
        {text.map((char, index) => (
          <m.span
            key={char + index}
            className={cn(
              "relative inline-block cursor-default text-nowrap text-inherit",
              className,
            )}
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 0.5,
            }}
          >
            {char === " " ? <>&nbsp;</> : char}
          </m.span>
        ))}
      </m.span>
    </LazyMotion>
  );
}
