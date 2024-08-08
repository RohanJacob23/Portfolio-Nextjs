"use client";

import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import CardDialog from "./animation/CardDialog";

export type Project = {
  id: number;
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
  src: string;
};

export default function ProjectGallary({ projects }: { projects: Project[] }) {
  const [showDialog, setShowDialog] = useState(false);
  const [activeProject, setActiveProject] = useState<Project>();

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
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12 }}
        className="flex flex-wrap gap-4"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            setActiveProject={setActiveProject}
            setShowDialog={setShowDialog}
          />
        ))}
      </motion.div>

      {/* card modal */}
      <AnimatePresence>
        {activeProject && (
          <CardDialog
            {...activeProject}
            setShowDialog={setShowDialog}
            setActiveProject={setActiveProject}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-40 size-full bg-black/95"
          />
        )}
      </AnimatePresence>
    </>
  );
}
