"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import CardDialog from "./animation/CardDialog";

export default function ProjectCard({
  title,
  description,
  liveLink,
  githubLink,
  src,
}: {
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
  src: string;
}) {
  const [showDialog, setShowDialog] = useState(false);
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setShowDialog(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <section onClick={() => setShowDialog(true)}>
        <motion.div
          style={{ borderRadius: 8 }}
          layoutId={`card-${title}`}
          className="flex h-full cursor-pointer flex-col gap-2 border"
        >
          <motion.div
            layoutId={`card-image-${title}`}
            className="relative overflow-hidden p-2 pb-0"
            style={{ borderRadius: 8 }}
          >
            <Image
              src={src}
              alt="placeholder"
              width={1920}
              height={980}
              className="aspect-video size-full object-cover"
            />
          </motion.div>
          {/* card header */}
          <motion.h3
            layoutId={`title-${title}`}
            className="border-0 p-4 underline decoration-primary"
          >
            {title}
          </motion.h3>
        </motion.div>

        {/* card modal */}
        <AnimatePresence>
          {showDialog && (
            <CardDialog
              title={title}
              src={src}
              description={description}
              liveLink={liveLink}
              githubLink={githubLink}
              setShowDialog={setShowDialog}
            />
          )}
        </AnimatePresence>
      </section>

      <AnimatePresence>
        {showDialog && (
          <motion.div
            key={`title-overlay-${title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-40 size-full bg-black/90"
          />
        )}
      </AnimatePresence>
    </>
  );
}
