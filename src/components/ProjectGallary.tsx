"use client";

import React, { useState } from "react";
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

  return (
    <>
      <div className="grid max-w-screen-2xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-x-4 xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            setActiveProject={setActiveProject}
            setShowDialog={setShowDialog}
          />
        ))}
      </div>

      {/* card modal */}
      <AnimatePresence>
        {activeProject && (
          <CardDialog
            title={activeProject.title}
            src={activeProject.src}
            description={activeProject.description}
            liveLink={activeProject.liveLink}
            githubLink={activeProject.githubLink}
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
