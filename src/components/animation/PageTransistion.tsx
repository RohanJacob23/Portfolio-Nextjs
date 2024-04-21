"use client";

import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

export default function PageTransistion({
  children,
}: {
  children: React.ReactNode;
}) {
  const [blackSliderRef, blackSliderAnimate] = useAnimate();
  const [whiteSliderRef, whiteSliderAnimate] = useAnimate();

  useEffect(() => {
    const whiteSliderAnimation = async () => {
      await whiteSliderAnimate(
        whiteSliderRef.current,
        { scaleY: 1, transformOrigin: "top" },
        { duration: 1, ease: "easeOut" }
      );

      await whiteSliderAnimate(
        whiteSliderRef.current,
        { scaleY: 0, transformOrigin: "bottom" },
        { delay: 0.5, duration: 1, ease: "easeOut" }
      );
    };

    const blackSliderAnimation = async () => {
      await blackSliderAnimate(
        blackSliderRef.current,
        { scaleY: 1, transformOrigin: "top" },
        { delay: 0.25, duration: 1, ease: "easeOut" }
      );

      await blackSliderAnimate(
        blackSliderRef.current,
        { scaleY: 0, transformOrigin: "bottom" },
        { duration: 1, ease: "easeOut" }
      );
    };
    const animate = async () => {
      whiteSliderAnimation();
      blackSliderAnimation();
    };
    animate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <motion.div
        ref={blackSliderRef}
        initial={{ scaleY: 0 }}
        className="absolute inset-0 size-full bg-accent z-50"
      ></motion.div>
      <motion.div
        ref={whiteSliderRef}
        initial={{ scaleY: 0 }}
        className="absolute inset-0 size-full bg-white z-40"
      ></motion.div>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 2.25 }}
        className="flex flex-col flex-1"
      >
        {children}
      </motion.section>
    </>
  );
}
