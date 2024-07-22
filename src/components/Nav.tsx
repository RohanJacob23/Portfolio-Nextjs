"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Nav() {
  const pathname = usePathname();
  const navLinks = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "/about" },
    { id: 3, name: "Projects", href: "/projects" },
    { id: 4, name: "Contact", href: "/contact" },
  ];
  return (
    <nav className="flex w-full justify-center gap-4 p-4 md:justify-start">
      {navLinks.map((link) => (
        <div
          key={link.id}
          className="relative rounded-full px-2 py-1 md:px-3 md:py-1.5"
        >
          <Link
            href={link.href}
            className={cn(
              "relative z-20 text-sm transition md:text-base md:font-medium",
              pathname === link.href && "text-primary-foreground",
            )}
          >
            {link.name}
          </Link>

          {pathname === link.href && (
            <motion.div
              layoutId="nav"
              transition={{
                type: "spring",
                bounce: 0,
                duration: 0.3,
              }}
              style={{ borderRadius: 8 }}
              className="absolute inset-0 z-10 size-full bg-primary mix-blend-difference"
            />
          )}
        </div>
      ))}
    </nav>
  );
}
