"use client";

import { animate } from "framer-motion";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface TransitionLinkProps extends LinkProps {
  href: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function TransitionLink({
  href,
  children,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = async (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    if (pathname === href) {
      return;
    }
    animate(
      "main",
      { x: "100%", opacity: 0 },
      { type: "spring", bounce: 0, duration: 1 },
    );
    await sleep(500);
    router.push(href);
  };
  return (
    <Link onClick={handleClick} href={href} {...props}>
      {children}
    </Link>
  );
}
