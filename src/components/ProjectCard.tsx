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
    <div className="group/project relative flex max-w-xs flex-col transition-transform duration-200 ease-in-out md:hover:-translate-y-4">
      <div className="mb-2 w-fit">
        <h4>{title}</h4>
        <div className="h-1 w-full bg-primary transition-all duration-500 ease-out md:w-0 md:group-hover/project:w-full"></div>
      </div>
      <p className="lead cursor-default">{description}</p>

      <div className="mt-4 flex items-center gap-4 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover/project:opacity-100">
        <Button
          asChild
          size="icon"
          variant="ghost"
          className="hover:text-black"
        >
          <Link target="_blank" href={githubLink}>
            <GitHubLogoIcon className="size-6" />
          </Link>
        </Button>
        <Button
          asChild
          size="icon"
          variant="ghost"
          className="hover:text-black"
        >
          <Link target="_blank" href={liveLink}>
            <Link2Icon className="size-6" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
