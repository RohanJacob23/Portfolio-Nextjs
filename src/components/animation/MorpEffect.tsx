"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function MorpEffect() {
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
      <h2 className="border-none">
        A freelance{" "}
        <MorphText className="text-primary">{textList[index]}</MorphText>{" "}
        developer from{" "}
        <span className="underline decoration-primary">India</span>.
      </h2>
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
    <span className="mr-32 text-nowrap md:mr-0">
      <AnimatePresence mode="popLayout">
        {textToDisplay.map(({ char, key }) => (
          <motion.span
            key={key}
            layoutId={key}
            className={cn("inline-block text-inherit", className)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.25,
              type: "spring",
              bounce: 0,
              opacity: {
                duration: 0.35,
                type: "tween",
              },
            }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </span>
  );
};
