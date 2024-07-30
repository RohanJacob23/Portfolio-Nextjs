"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { domAnimation, LazyMotion, m } from "framer-motion";
import TransitionLink from "./animation/TransitionLink";

export default function Nav() {
  const links = useMemo(
    () => [
      { id: 1, name: "Home", href: "/" },
      { id: 3, name: "Projects", href: "/projects" },
      { id: 4, name: "Contact", href: "/contact" },
    ],
    [],
  );

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    width: 0,
    opacity: 1,
  });

  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState(pathname);

  useEffect(() => {
    const tab = document.getElementById(pathname);

    if (tab) {
      const rect = tab.getBoundingClientRect();
      setPosition({
        x: rect.left,
        y: rect.top,
        width: rect.width,
        opacity: 1,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="sticky top-0 z-40 border-b bg-background/75 backdrop-blur">
      <ul className="flex w-full justify-center gap-2 px-2 py-4 md:justify-start md:gap-4 md:p-4">
        {links.map((link) => (
          <Tab
            setPosition={setPosition}
            href={link.href}
            key={link.id}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          >
            {link.name}
          </Tab>
        ))}
      </ul>
      <NavBadge {...position} />
    </nav>
  );
}

const NavBadge = ({
  ...position
}: {
  x: number;
  y: number;
  width: number;
  opacity: number;
}) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={false}
        animate={position}
        transition={{ type: "spring", duration: 0.35, bounce: 0 }}
        className="absolute inset-0 z-20 h-8 w-0 bg-primary opacity-100 md:h-10"
      />
    </LazyMotion>
  );
};

const Tab = ({
  children,
  href,
  setPosition,
  activeTab,
  setActiveTab,
}: {
  children: string;
  href: string;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  setPosition: React.Dispatch<
    React.SetStateAction<{
      x: number;
      y: number;
      width: number;
      opacity: number;
    }>
  >;
}) => {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLLIElement, MouseEvent>, href: string) => {
      setActiveTab(href);

      const targetRect = event.currentTarget.getBoundingClientRect();

      setPosition({
        x: targetRect.left,
        y: targetRect.top,
        width: targetRect.width,
        opacity: 1,
      });
    },
    [setPosition, setActiveTab],
  );

  return (
    <li onClick={(e) => handleClick(e, href)}>
      <TransitionLink
        id={href}
        href={href}
        data-active={activeTab === href}
        className="relative z-40 inline-block px-2 py-1 text-base text-foreground transition-colors duration-300 ease-in-out data-[active=true]:text-primary-foreground md:px-3 md:py-1.5 md:text-xl md:font-medium"
      >
        {children}
      </TransitionLink>
    </li>
  );
};
