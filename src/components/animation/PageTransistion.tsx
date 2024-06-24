"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PageTransistion({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          bounce: 0.35,
          duration: 0.5,
        }}
        className="flex min-h-[calc(100vh-64px)] flex-1 flex-col md:min-h-[calc(100vh-68px)]"
      >
        {children}
      </motion.section>
    </>
  );
}
