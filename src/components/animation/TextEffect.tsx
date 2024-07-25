"use client";

import React from "react";
import { motion } from "framer-motion";
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
    <motion.span
      className="inline-block"
      initial={{ filter: "blur(8px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
    >
      {text.map((char, index) => (
        <motion.span
          key={char + index}
          className={cn(
            "inline-block cursor-default text-nowrap text-inherit",
            className,
          )}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.75,
            delay: 0.025 * index,
          }}
        >
          {char === " " ? <>&nbsp;</> : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
