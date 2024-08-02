"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export default function MorpEffect({ y }: { y?: MotionValue<number> }) {
  const textList = useMemo(
    () => ["Frontend", "Fullstack", "Next.js", "React.js"],
    [],
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textList.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [textList]);

  return (
    <>
      <motion.h3 style={{ y }} className="relative overflow-hidden border-none">
        A freelance{" "}
        <MorphText className="text-primary">{textList[index]}</MorphText>{" "}
        developer from{" "}
        <span className="underline decoration-primary">India</span>.
      </motion.h3>
    </>
  );
}

const MorphText = ({
  children,
  className,
}: {
  children: string | string[];
  className?: string;
}) => {
  const generateKeys = (text: string) => {
    const chars: { [keys: string]: number } = {};
    return text.split("").map((char: string) => {
      if (!chars[char]) {
        chars[char] = 0;
      }
      const key = `${char}-${chars[char]}`;
      chars[char]++;
      return { char, key };
    });
  };

  const textToDisplay = generateKeys(children as string);
  return (
    <span className="text-nowrap">
      <AnimatePresence initial={false} mode="popLayout">
        {textToDisplay.map(({ char, key }) => (
          <motion.span
            key={key}
            layoutId={key}
            className={cn("inline-block text-inherit", className)}
            initial={{ opacity: 0, y: -25, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 25, filter: "blur(4px)" }}
            transition={{
              duration: 0.5,
              type: "spring",
              bounce: 0,
            }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </span>
  );
};
