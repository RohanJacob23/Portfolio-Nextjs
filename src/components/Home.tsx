"use client";

import Image from "next/image";
import MorpEffect from "./animation/MorpEffect";
import TextEffect from "./animation/TextEffect";
import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  const skillList = [
    {
      id: 1,
      name: "HTML",
      img: "/skills/htmlLogo.png",
    },
    {
      id: 2,
      name: "CSS",
      img: "/skills/cssLogo.png",
    },
    {
      id: 3,
      name: "Javascript",
      img: "/skills/jsLogo.png",
    },
    {
      id: 4,
      name: "Typescript",
      img: "/skills/tsLogo.png",
    },
    {
      id: 5,
      name: "React.js",
      img: "/skills/reactLogo.png",
    },
    {
      id: 6,
      name: "Next.js",
      img: "/skills/nextjsLogo.png",
    },
    {
      id: 7,
      name: "Tailwindcss",
      img: "/skills/tailwindcssLogo.png",
    },
    {
      id: 8,
      name: "Framer Motion",
      img: "/skills/framer-motion.svg",
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: sectionRef,
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-full flex-col overflow-y-auto overflow-x-hidden bg-zinc-800"
    >
      {/* <div className="h-full max-h-[calc(100dvh-64px)] content-center space-y-4 p-4 md:max-h-[calc(100dvh-68px)] md:p-8"> */}

      <motion.div
        style={{ scale, rotate }}
        className="sticky top-0 z-10 flex-[1_0_100%] content-center space-y-4 bg-background p-4 md:p-8"
      >
        <h1 className="flex flex-col gap-4">
          <span>
            Hello<span className="text-primary">!</span>
          </span>
          <span className="overflow-hidden">
            I&apos;m{" "}
            <TextEffect className="text-primary">Rohan K. Jacob</TextEffect>{" "}
          </span>
        </h1>
        <MorpEffect />

        {/* marquee */}
        <div className="group/marquee relative flex h-fit max-w-screen-md space-x-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          {Array.from({ length: 2 }, (_, index) => (
            <MarqueeList key={index} skillList={skillList} />
          ))}
        </div>

        {/* languages I know */}
      </motion.div>

      <SkillSection scrollYProgress={scrollYProgress} />
    </section>
  );
}

const MarqueeList = ({ skillList }: { skillList: Skill[] }) => {
  return (
    <div className="flex animate-marquee justify-center gap-4 group-hover/marquee:paused">
      {skillList.map(({ id, name, img }) => (
        <SkillCard key={id} name={name} img={img} />
      ))}
    </div>
  );
};

const SkillCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <div className="group/skill relative rounded-full border bg-zinc-900 p-2.5">
      <div className="relative size-12 md:size-16">
        <Image
          src={img}
          width={200}
          height={200}
          alt={name}
          className="aspect-square size-full rounded-lg grayscale"
        />
      </div>

      <div className="absolute inset-0 size-full rounded-full bg-background p-2.5 transition-all duration-500 ease-in-out [clip-path:circle(0%_at_50%_50%)] group-hover/skill:[clip-path:circle(50%_at_50%_50%)]">
        <div className="relative size-12 md:size-16">
          <Image
            src={img}
            width={200}
            height={200}
            alt={name}
            className="aspect-square size-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

const SkillSection = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [10, 0]);
  return (
    <motion.div
      style={{ scale, rotate }}
      className="z-20 flex-[1_0_100%] content-center space-y-4 bg-zinc-900 p-4 md:p-8"
    >
      <h1 className="text-muted-foreground">Comming Soon...</h1>
    </motion.div>
  );
};

type Skill = {
  id: number;
  name: string;
  img: string;
};
