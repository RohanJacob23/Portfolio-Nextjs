"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

export default function Nav() {
  const links = useMemo(
    () => [
      { id: 1, name: "Home", href: "/" },
      { id: 2, name: "About", href: "/about" },
      { id: 3, name: "Projects", href: "/projects" },
      { id: 4, name: "Contact", href: "/contact" },
    ],
    [],
  );
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);
  const highlightRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      setActiveLink(href);

      const targetRect = event.currentTarget.getBoundingClientRect();
      const navRect = navRef.current?.getBoundingClientRect();

      if (highlightRef.current && navRect) {
        const { style } = highlightRef.current;
        style.opacity = "1";
        style.width = `${targetRect.width}px`;
        style.height = `${targetRect.height}px`;
        style.transform = `translate(${targetRect.left - navRect.left}px, ${targetRect.top - navRect.top}px)`;
      }
    },
    [],
  );

  useEffect(() => {
    const activeElement = document.getElementById(activeLink);
    if (highlightRef.current && activeElement) {
      const { style } = highlightRef.current;
      style.opacity = "1";
      style.width = `${activeElement.offsetWidth}px`;
      style.height = `${activeElement.offsetHeight}px`;
      style.transform = `translate(${activeElement.offsetLeft}px, ${activeElement.offsetTop}px)`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav
      ref={navRef}
      className="relative flex w-full justify-center gap-4 p-4 md:justify-start"
    >
      {links.map((link) => (
        <Link
          key={link.id}
          id={link.href}
          href={link.href}
          className="block rounded-lg px-2 py-1 md:px-3 md:py-1.5"
          onClick={(event) => handleClick(event, link.href)}
        >
          <span
            className={cn(
              "transition-color relative z-20 text-sm duration-300 ease-in-out md:text-base md:font-medium",
              activeLink === link.href && "text-primary-foreground",
            )}
          >
            {link.name}
          </span>
        </Link>
      ))}
      <div
        ref={highlightRef}
        className="absolute inset-0 size-0 rounded-lg bg-primary opacity-0 transition-all duration-300 ease-in-out"
      />
    </nav>
  );
}
