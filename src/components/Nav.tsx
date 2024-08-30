"use client";

import React, { useEffect, useMemo, useState } from "react";
import { domAnimation, LazyMotion, m } from "framer-motion";
import TransitionLink from "./animation/TransitionLink";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Nav() {
  const links = useMemo(
    () => [
      { id: 1, name: "Home", href: "/" },
      { id: 3, name: "Projects", href: "/projects" },
      { id: 4, name: "Contact", href: "/contact" },
      {
        id: 4,
        name: "Library",
        href: "https://framer-motion-journey.vercel.app/",
      },
    ],
    [],
  );

  const [position, setPosition] = useState<{
    width: number;
    left: number;
    height: number;
    top: number;
  }>();

  const pathname = usePathname();

  useEffect(() => {
    const selectedList = document.getElementById(pathname);

    if (selectedList) {
      setPosition({
        width: selectedList.offsetWidth,
        left: selectedList.offsetLeft,
        height: selectedList.offsetHeight,
        top: selectedList.offsetTop,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="sticky top-2 z-40 mt-4 justify-self-center rounded-full border bg-background/75 backdrop-blur">
      <ul className="flex w-full justify-center gap-2 p-2 md:gap-4 md:px-4">
        {links.map((link) => (
          <Tab
            href={link.href}
            id={link.href}
            key={link.id}
            setPosition={setPosition}
          >
            {link.name}
          </Tab>
        ))}
      </ul>
      <NavClip position={position} links={links} />
    </nav>
  );
}

const NavClip = ({
  links,
  position,
}: {
  links: {
    id: number;
    name: string;
    href: string;
  }[];
  position?: Position;
}) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{
          clipPath: "inset(100%)",
        }}
        animate={{
          clipPath: position
            ? `inset(${position.top}px calc(100% - (${position.left}px + ${position.width}px)) ${position.top}px ${position.left}px round 50px)`
            : "inset(100%)",
        }}
        transition={{ duration: 0.75, type: "spring", bounce: 0.3 }}
        className="absolute inset-0 z-50 size-full bg-primary will-change-[clip-path]"
      >
        <ul className="flex w-full justify-center gap-2 p-2 md:gap-4 md:px-4">
          {links.map((link) => (
            <Tab key={link.id} className="text-black" href={link.href}>
              {link.name}
            </Tab>
          ))}
        </ul>
      </m.div>
    </LazyMotion>
  );
};

const Tab = ({
  id,
  children,
  className,
  href,
  setPosition,
}: {
  id?: string;
  className?: string;
  children: string;
  href: string;
  setPosition?: React.Dispatch<React.SetStateAction<Position | undefined>>;
}) => {
  const handleMouseOver = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    if (!setPosition) return;

    const target = e.currentTarget;

    setPosition({
      width: target.offsetWidth,
      left: target.offsetLeft,
      height: target.offsetHeight,
      top: target.offsetTop,
    });
  };

  const isSame = "";
  return (
    <li id={id ?? "#"} onClick={handleMouseOver}>
      <TransitionLink
        href={href}
        className={cn(
          "inline-block cursor-pointer px-2 py-1 text-base text-foreground md:px-3 md:py-1.5 md:text-xl md:font-medium",
          className,
        )}
      >
        {children}
      </TransitionLink>
    </li>
  );
};

type Position = {
  width: number;
  left: number;
  height: number;
  top: number;
};
