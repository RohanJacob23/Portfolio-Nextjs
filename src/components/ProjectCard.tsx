"use client";

import React from "react";
import { motion, MotionConfig } from "framer-motion";
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
  return (
    <MotionConfig transition={{ bounce: 0, duration: 0.5, type: "spring" }}>
      <section
        onClick={() => {
          setActiveProject(project);
          setShowDialog(true);
        }}
      >
        <motion.div
          layoutId={`card-${project.title}`}
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
              filter: "blur(4px)",
              transition: { type: "spring", bounce: 0.5 },
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { type: "spring", bounce: 0.5 },
            },
          }}
          style={{ borderRadius: "50px" }}
          className="flex h-full cursor-pointer items-center gap-2 border bg-card px-2 md:px-4"
        >
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
