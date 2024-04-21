"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const pathname = usePathname();
  const navLinks = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "/about" },
    { id: 3, name: "Projects", href: "/projects" },
    { id: 4, name: "Contact", href: "/contact" },
  ];
  return (
    <nav className="flex justify-center md:justify-start gap-4 w-full p-4">
      {navLinks.map((link) => (
        <div
          key={link.id}
          className="relative py-1 px-2 md:py-1.5 md:px-3 rounded-full"
        >
          <Link
            href={link.href}
            className="text-sm md:text-base relative md:font-medium text-foreground transition"
          >
            {link.name}
          </Link>

          {pathname === link.href && (
            <motion.div
              layoutId="nav"
              transition={{
                type: "spring",
                bounce: 0.35,
                duration: 0.5,
              }}
              style={{ borderRadius: "9999px" }}
              className="absolute inset-0 size-full bg-white z-10 mix-blend-difference"
            ></motion.div>
          )}
        </div>
      ))}
    </nav>
  );
}
