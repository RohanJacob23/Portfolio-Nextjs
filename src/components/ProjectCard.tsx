"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { GitHubLogoIcon, Link2Icon } from "@radix-ui/react-icons";

export default function ProjectCard({
  title,
  description,
  liveLink,
  githubLink,
}: {
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
}) {
  return (
    <div className="group/project flex flex-col relative max-w-xs md:hover:-translate-y-4 transition-transform duration-200 ease-in-out">
      <div className="w-fit mb-2">
        <h4>{title}</h4>
        <div className="h-1 w-full md:group-hover/project:w-full md:w-0 transition-all duration-500 ease-out bg-primary"></div>
      </div>
      <p className="lead cursor-default">{description}</p>

      <div className="flex items-center gap-4 mt-4 opacity-100 md:group-hover/project:opacity-100 md:opacity-0 transition-opacity duration-300">
        <Button asChild size="icon" variant="ghost">
          <Link target="_blank" href={githubLink}>
            <GitHubLogoIcon className="size-6" />
          </Link>
        </Button>
        <Button asChild size="icon" variant="ghost">
          <Link target="_blank" href={liveLink}>
            <Link2Icon className="size-6" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
