import Image from "next/image";
import React from "react";
import { motion, MotionConfig } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";
import { Cross1Icon, GitHubLogoIcon, Link2Icon } from "@radix-ui/react-icons";
import { Project } from "../ProjectGallary";

export default function CardDialog({
  title,
  src,
  description,
  liveLink,
  githubLink,
  setShowDialog,
  setActiveProject,
}: {
  title: string;
  src: string;
  description: string;
  liveLink: string;
  githubLink: string;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveProject: React.Dispatch<React.SetStateAction<Project | undefined>>;
}) {
  return (
    <MotionConfig transition={{ bounce: 0, duration: 0.5, type: "spring" }}>
      <section
        key={title}
        className="absolute inset-0 z-50 grid size-full p-4 md:place-items-center"
      >
        <motion.div
          layoutId={`card-${title}`}
          style={{ borderRadius: 8 }}
          animate={{ boxShadow: "0px 0px 18px 8px rgba(76, 205, 196, 0.25)" }}
          className="relative z-50 size-fit max-w-screen-sm overflow-hidden border bg-card sm:w-1/2"
        >
          {/* close icon */}
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              e.stopPropagation();
              setActiveProject(undefined);
              setShowDialog(false);
            }}
            className="absolute right-3 top-3 z-50 cursor-pointer rounded-full border bg-background p-1 text-primary"
          >
            <Cross1Icon className="size-4" />
          </motion.div>

          {/* card image */}
          <motion.div layoutId={`card-image-${title}`} className="relative">
            <Image
              src={src}
              alt="placeholder"
              width={1920}
              height={960}
              className="aspect-video size-full object-cover"
            />
          </motion.div>
          {/* card header */}
          <motion.h2
            className="border-0 p-4 underline decoration-primary"
            layoutId={`title-${title}`}
            layout="position"
          >
            {title}
          </motion.h2>

          {/* card content */}
          <motion.p
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{
              opacity: 0,
              filter: "blur(8px)",
              transition: { duration: 0.25 },
            }}
            layout
            className="p-4 pt-0 text-muted-foreground"
          >
            {description}
          </motion.p>

          {/* card footer */}
          <motion.div
            layout
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{
              opacity: 0,
              filter: "blur(8px)",
              transition: { duration: 0.25 },
            }}
            className="flex items-center gap-4 p-4 pt-0"
          >
            <Button
              variant="ghost"
              className="transition-colors duration-200 ease-in-out hover:text-black"
              asChild
              size="icon"
            >
              <Link target="_blank" href={githubLink}>
                <GitHubLogoIcon className="size-6" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="transition-colors duration-200 ease-in-out hover:text-black"
              asChild
              size="icon"
            >
              <Link target="_blank" href={liveLink}>
                <Link2Icon className="size-6" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
