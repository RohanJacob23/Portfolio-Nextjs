"use client";

import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";

type SocialLinks = {
  icon: JSX.Element;
  name: string;
  href: string;
};

export default function SocialGrid({
  socialLinks,
}: {
  socialLinks: SocialLinks[];
}) {
  return (
    <LazyMotion strict features={domAnimation}>
      <m.ul
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        className="flex flex-col gap-4"
      >
        {socialLinks.map((sLink, i) => (
          <SocialLink key={i} {...sLink} />
        ))}
      </m.ul>
    </LazyMotion>
  );
}

const SocialLink = ({ href, icon, name }: SocialLinks) => {
  return (
    <m.li
      variants={{
        hidden: { opacity: 0, y: 50, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
    >
      <Button
        variant="link"
        asChild
        className="gap-2 pl-0 text-xl text-white decoration-primary"
      >
        <Link href={href} target="_blank">
          {icon}
          {name}
        </Link>
      </Button>
    </m.li>
  );
};
