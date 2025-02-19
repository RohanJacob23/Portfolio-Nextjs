"use client";

import Image from "next/image";
import MorpEffect from "./animation/MorpEffect";
import TextEffect from "./animation/TextEffect";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { ArrowDownIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Card, CardHeader, CardTitle } from "./ui/card";

export default function Home() {
  const skillList = [
    {
      name: "HTML",
      src: "/skills/htmlLogo.png",
    },
    {
      name: "CSS",
      src: "/skills/cssLogo.png",
    },
    {
      name: "Javascript",
      src: "/skills/jsLogo.png",
    },
    {
      name: "Typescript",
      src: "/skills/tsLogo.png",
    },
    {
      name: "React.js",
      src: "/skills/reactLogo.png",
    },
    {
      name: "Next.js",
      src: "/skills/nextjsLogo.png",
    },
    {
      name: "Tailwindcss",
      src: "/skills/tailwindcssLogo.png",
    },
    {
      name: "Framer Motion",
      src: "/skills/framer-motion.svg",
    },
  ];

  const frontend = [
    {
      name: "HTML",
      src: "/skills/htmlLogo.png",
    },
    { name: "CSS", src: "/skills/cssLogo.png" },
    {
      name: "Javascript",
      src: "/skills/jsLogo.png",
    },
    {
      name: "Typescript",
      src: "/skills/tsLogo.png",
    },
    {
      name: "React.js",
      src: "/skills/reactLogo.png",
    },
    {
      name: "Next.js",
      src: "/skills/nextjsLogo.png",
    },
    {
      name: "Tailwindcss",
      src: "/skills/tailwindcssLogo.png",
    },
  ];
  const backend = [
    { name: "Hono.js", src: "/skills/hono.png" },
    { name: "Node.js", src: "/skills/nodejs.png" },
    { name: "Express.js", src: "/skills/express.svg" },
    { name: "MongoDB", src: "/skills/mongodb.png" },
  ];
  const other = [
    { name: "Git", src: "/skills/git.png" },
    { name: "Github" },
    { name: "VS Code", src: "/skills/vscode.png" },
    { name: "Figma", src: "/skills/figma.png" },
    { name: "Framer Motion", src: "/skills/framer-motion.svg" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main data-lenis-prevent-touch className="flex h-full flex-col">
      <motion.div
        ref={containerRef}
        className="relative z-0 min-h-dvh content-center space-y-4 bg-background p-4 md:p-8"
      >
        <motion.h1 style={{ y }} className="flex flex-col gap-4">
          <span>
            Hello<span className="text-primary">!</span>
          </span>
          <span className="overflow-hidden">
            I&apos;m{" "}
            <TextEffect className="text-primary">Rohan K. Jacob</TextEffect>{" "}
          </span>
        </motion.h1>

        <MorpEffect y={y} />

        {/* marquee */}
        <motion.div
          style={{ y }}
          className="group/marquee relative flex h-fit max-w-screen-md space-x-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
        >
          {Array.from({ length: 2 }, (_, index) => (
            <MarqueeList key={index} skillList={skillList} />
          ))}
        </motion.div>

        <ScrollDownBadge y={y} opacity={opacity} />
      </motion.div>

      <About />

      <Education />

      <SkillSection frontend={frontend} backend={backend} other={other} />
    </main>
  );
}

const MarqueeList = ({ skillList }: { skillList: Skill[] }) => {
  return (
    <div className="flex animate-marquee justify-center gap-4 group-hover/marquee:paused">
      {skillList.map(({ name, src }, i) => (
        <SkillCard key={i} name={name} img={src} />
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

const About = () => {
  const skills = ["React", "Next.js", "MongoDB", "Tailwind CSS"];

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: backgroundScrollProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end"],
  });

  const y = useParallax(scrollYProgress, -500);

  const backgroundColor = useTransform(
    backgroundScrollProgress,
    [0, 1],
    ["#18181b", "#09090b"],
  );

  return (
    <motion.div
      ref={containerRef}
      style={{ backgroundColor }}
      className="z-10 min-h-screen content-center space-y-4 overflow-hidden bg-zinc-900 p-4 text-xl text-muted-foreground md:p-8"
    >
      <motion.p style={{ y }} className="max-w-screen-lg">
        I&apos;m{" "}
        <span className="inline-flex overflow-hidden">
          <TextEffect className="font-medium text-primary">
            Rohan Koshy Jacob
          </TextEffect>
        </span>
        , a highly motivated and results-oriented{" "}
        <span className="inline-flex overflow-hidden">
          <TextEffect className="font-medium text-primary">
            web developer
          </TextEffect>
        </span>{" "}
        with a strong foundation in both front-end and back-end development.
      </motion.p>
      <motion.p style={{ y }} className="max-w-screen-lg">
        I possess proficiency in popular web development stacks like
        {skills.map((skill, i) => (
          <React.Fragment key={i}>
            {i === skills.length - 1 ? " and " : " "}
            <span className="inline-flex overflow-hidden">
              <TextEffect className="font-medium text-primary">
                {skill}
              </TextEffect>
            </span>
            {i !== skills.length - 1 && ","}
          </React.Fragment>
        ))}
        . Eager to leverage my skills and problem-solving abilities to
        contribute to real-world projects and gain practical experience in a
        professional environment.
      </motion.p>
      <motion.p style={{ y }} className="max-w-screen-lg">
        I&apos;m passionate about creating impactful{" "}
        <span className="inline-flex overflow-hidden">
          <TextEffect className="font-medium text-primary">
            web applications
          </TextEffect>
        </span>{" "}
        and seek an opportunity to learn and grow alongside experienced
        developers.
      </motion.p>
    </motion.div>
  );
};

const Education = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: backgroundScrollProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end"],
  });

  const y = useParallax(scrollYProgress, -500);

  const backgroundColor = useTransform(
    backgroundScrollProgress,
    [0, 1],
    ["#18181b", "#09090b"],
  );

  return (
    <motion.div
      ref={containerRef}
      style={{ backgroundColor }}
      className="relative z-20 min-h-dvh content-center *:will-change-transform"
    >
      <motion.div
        style={{ y }}
        className="grid grid-rows-[auto_1fr] gap-4 p-4 pt-8 md:p-8 md:pt-12"
      >
        <div className="space-y-2">
          <h1 className="underline decoration-primary">Education</h1>
          <p className="text-xl text-muted-foreground">
            A summary of my academic achievements.
          </p>
        </div>

        <div className="grid gap-4">
          <EducationCard
            qualification="Bachelor of Computer Application"
            institute="St. Xavier's College, Jaipur"
            year="2022 - 2025"
          />
          <EducationCard
            qualification="High School"
            institute="D.A.V International School, Ahmedabad"
            year="2019 - 2022"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const EducationCard = ({
  qualification,
  institute,
  year,
}: {
  qualification: string;
  institute: string;
  year: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ amount: "all", once: true }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="grid cursor-default rounded-lg border p-4"
    >
      {/* header */}
      <div className="flex flex-wrap items-center justify-between">
        <h3 className="text-primary">{qualification}</h3>
        <p className="text-muted-foreground">{year}</p>
      </div>

      {/* studied from */}
      <p className="text-lg text-muted-foreground">{institute}</p>
    </motion.div>
  );
};

const SkillSection = ({
  backend,
  frontend,
  other,
}: {
  frontend: Skill[];
  backend: Skill[];
  other: (
    | Skill
    | {
        name: string;
        src?: undefined;
      }
  )[];
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#18181b", "#09090b"],
  );

  const y = useTransform(scrollYProgress, [0, 1], [500, 0]);

  return (
    <motion.div
      ref={sectionRef}
      style={{ backgroundColor }}
      className="z-30 min-h-dvh content-center"
    >
      <motion.div
        style={{ y }}
        className="flex flex-col justify-center space-y-4 p-4 pt-8 will-change-transform md:p-8 md:pt-12"
      >
        <h1>
          <TextEffect>Tools I use</TextEffect>
          <TextEffect className="text-primary">...</TextEffect>
        </h1>
        <h2>Frontend</h2>
        <div className="flex max-w-screen-lg flex-wrap gap-2 overflow-hidden">
          {frontend.map(({ name, src }, i) => (
            <ToolCard key={i} name={name} src={src} />
          ))}
        </div>
        <h2>Backend</h2>
        <div className="flex max-w-screen-lg flex-wrap gap-2 overflow-hidden">
          {backend.map(({ name, src }, i) => (
            <ToolCard key={i} name={name} src={src} />
          ))}
        </div>
        <h2>Other</h2>
        <div className="flex max-w-screen-lg flex-wrap gap-2 overflow-hidden">
          {other.map(({ name, src }, i) => (
            <ToolCard key={i} name={name} src={src} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ToolCard = ({ name, src }: { name: string; src?: string }) => {
  return (
    <Card className="flex cursor-default items-center gap-2 rounded-full p-2 px-4 text-center text-primary">
      {src ? (
        <div className="size-8 shrink-0">
          <Image
            src={src}
            width={800}
            height={800}
            alt={name}
            className="aspect-square size-full"
          />
        </div>
      ) : (
        <GitHubLogoIcon className="size-8 text-white" />
      )}
      <CardHeader className="p-0">
        <CardTitle className="text-xl md:text-2xl">{name}</CardTitle>
      </CardHeader>
    </Card>
  );
};

const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

const ScrollDownBadge = ({
  y,
  opacity,
}: {
  y: MotionValue<number>;
  opacity: MotionValue<number>;
}) => {
  return (
    <motion.p
      style={{ y, opacity, x: "-50%" }}
      className="absolute bottom-24 left-1/2 inline-flex size-fit items-center gap-2 rounded-full border border-primary px-4 py-1.5 text-muted-foreground md:py-2"
    >
      Scroll Down
      <ArrowDownIcon className="inline-block h-5 w-5 animate-bounce text-foreground" />
    </motion.p>
  );
};

type Skill = {
  name: string;
  src: string;
};
