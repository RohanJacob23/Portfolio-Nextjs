"use client";

import React, { useEffect } from "react";
import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { Project } from "./ProjectGallary";

export default function ProjectCard({
  project,
  setShowDialog,
  setActiveProject,
}: {
  project: Project;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveProject: React.Dispatch<React.SetStateAction<Project | undefined>>;
}) {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveProject(undefined);
        setShowDialog(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [setShowDialog, setActiveProject]);

  return (
    <MotionConfig transition={{ bounce: 0, duration: 0.5, type: "spring" }}>
      <section
        onClick={() => {
          setActiveProject(project);
          setShowDialog(true);
        }}
      >
        <motion.div
          style={{ boxShadow: "none", borderRadius: 8 }}
          layoutId={`card-${project.title}`}
          className="flex h-full cursor-pointer flex-col gap-2 border bg-zinc-900"
        >
          <motion.div
            layoutId={`card-image-${project.title}`}
            className="relative overflow-hidden p-2 pb-0"
            style={{ borderRadius: 8 }}
          >
            <Image
              src={project.src}
              alt="placeholder"
              width={1920}
              height={980}
              className="aspect-video size-full object-cover"
            />
          </motion.div>
          {/* card header */}
          <motion.h2
            layoutId={`title-${project.title}`}
            layout="position"
            className="border-none p-4 underline decoration-primary"
          >
            {project.title}
          </motion.h2>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
