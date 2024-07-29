"use client";

import Image from "next/image";
import MorpEffect from "./animation/MorpEffect";
import TextEffect from "./animation/TextEffect";
import {
  motion,
  MotionValue,
  useAnimate,
  useScroll,
  useTransform,
  ValueAnimationTransition,
} from "framer-motion";
import { useRef } from "react";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { Card, CardHeader, CardTitle } from "./ui/card";

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

  const frontend = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "React.js",
    "Next.js",
    "Tailwindcss",
  ];
  const backend = ["Typescript", "Node.js", "Express.js", "MongoDB"];
  const other = [
    "Git",
    "Github",
    "VS Code",
    "Figma",
    "Tailwindcss",
    "Framer Motion",
  ];

  const firstSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: firstSectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useParallax(scrollYProgress, -100, true);
  const textYVariant1 = useParallax(scrollYProgress, -150, true);
  const marqueeY = useParallax(scrollYProgress, -200, true);

  return (
    <section className="flex h-full flex-col">
      <motion.div
        ref={firstSectionRef}
        className="z-10 min-h-dvh content-center space-y-4 bg-background p-4 md:p-8"
      >
        <motion.h1 style={{ y: textY }} className="flex flex-col gap-4">
          <span>
            Hello<span className="text-primary">!</span>
          </span>
          <span className="overflow-hidden">
            I&apos;m{" "}
            <TextEffect className="text-primary">Rohan K. Jacob</TextEffect>{" "}
          </span>
        </motion.h1>

        <MorpEffect y={textYVariant1} />

        {/* marquee */}
        <motion.div
          style={{ y: marqueeY }}
          className="group/marquee relative flex h-fit max-w-screen-md space-x-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
        >
          {Array.from({ length: 2 }, (_, index) => (
            <MarqueeList key={index} skillList={skillList} />
          ))}
        </motion.div>

        <ScrollDownBadge />
      </motion.div>

      <SkillSection
        // scrollYProgress={scrollYProgress}
        frontend={frontend}
        backend={backend}
        other={other}
      />
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
  backend,
  frontend,
  other,
}: {
  frontend: string[];
  backend: string[];
  other: string[];
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.1"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#18181b", "#09090b"],
  );

  const textY = useParallax(scrollYProgress, 200);
  const textYVariant1 = useParallax(scrollYProgress, 200);
  const textYVariant2 = useParallax(scrollYProgress, 300);
  const textYVariant3 = useParallax(scrollYProgress, 400);

  const toolCardY = useParallax(scrollYProgress, 200);
  const toolCardYVariant1 = useParallax(scrollYProgress, 300);
  const toolCardYVariant2 = useParallax(scrollYProgress, 400);
  return (
    <motion.div
      ref={sectionRef}
      style={{ backgroundColor }}
      className="z-20 flex min-h-dvh flex-col justify-center space-y-4 p-4 pt-8 md:p-8 md:pt-12"
    >
      <motion.h1 style={{ y: textY }}>
        Tools I use<span className="text-primary">...</span>
      </motion.h1>
      <motion.h2 style={{ y: textYVariant1 }}>Frontend</motion.h2>
      <div className="grid grid-cols-2 overflow-hidden md:grid-cols-3">
        {frontend.map((name, i) => (
          <ToolCard key={i} y={toolCardY} name={name} />
        ))}
      </div>
      <motion.h2 style={{ y: textYVariant2 }}>Backend</motion.h2>
      <div className="grid grid-cols-2 overflow-hidden md:grid-cols-3">
        {backend.map((name, i) => (
          <ToolCard key={i} y={toolCardYVariant1} name={name} />
        ))}
      </div>
      <motion.h2 style={{ y: textYVariant3 }}>Other</motion.h2>
      <div className="grid grid-cols-2 overflow-hidden md:grid-cols-3">
        {other.map((name, i) => (
          <ToolCard key={i} y={toolCardYVariant2} name={name} />
        ))}
      </div>
    </motion.div>
  );
};

const ToolCard = ({ name, y }: { name: string; y: MotionValue<number> }) => {
  const OPEN = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
  const CLOSE = "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)";

  const [cardRef, animateCard] = useAnimate();

  const transitionOptions: ValueAnimationTransition = {
    type: "spring",
    duration: 0.65,
    bounce: 0,
  };

  const handleMouseEnter = () => {
    animateCard(
      cardRef.current,
      {
        clipPath: OPEN,
      },
      transitionOptions,
    );
  };
  const handleMouseLeave = () => {
    animateCard(
      cardRef.current,
      {
        clipPath: CLOSE,
      },
      transitionOptions,
    );
  };

  return (
    <motion.div
      style={{ y }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <Card className="cursor-default rounded-none bg-primary text-center text-black">
        <CardHeader className="p-2 md:p-4">
          <CardTitle className="text-xl md:text-2xl">{name}</CardTitle>
        </CardHeader>
      </Card>

      <div
        ref={cardRef}
        style={{
          clipPath: CLOSE,
        }}
        className="absolute inset-0 size-full"
      >
        <Card className="rounded-none text-center text-primary">
          <CardHeader className="p-2 md:p-4">
            <CardTitle className="text-xl md:text-2xl">{name}</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </motion.div>
  );
};

const useParallax = (
  value: MotionValue<number>,
  distance: number,
  invert: boolean = false,
) => {
  return useTransform(value, [0, 1], invert ? [0, distance] : [distance, 0]);
};

const ScrollDownBadge = () => {
  return (
    <p className="absolute bottom-24 left-1/2 inline-flex size-fit -translate-x-1/2 items-center gap-2 rounded-full border border-primary px-4 py-1.5 text-muted-foreground md:py-2">
      Scroll Down
      <ArrowDownIcon className="inline-block h-5 w-5 animate-bounce text-foreground" />
    </p>
  );
};

type Skill = {
  id: number;
  name: string;
  img: string;
};
