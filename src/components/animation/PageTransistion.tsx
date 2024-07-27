"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PageTransistion({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        bounce: 0.5,
        duration: 0.75,
      }}
      className="w-dvw overflow-hidden"
    >
      {children}
    </motion.main>
  );
}
