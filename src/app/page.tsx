import MorpEffect from "@/components/animation/MorpEffect";
import TextEffect from "@/components/animation/TextEffect";
import Image from "next/image";

/**
 * Renders the Home component.
 *
 * @return {JSX.Element} The rendered Home component.
 */
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

  return (
    <div className="h-full max-h-[calc(100dvh-64px)] content-center space-y-4 overflow-y-auto p-4 md:max-h-[calc(100dvh-68px)] md:p-8">
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
    </div>
  );
}

const MarqueeList = ({
  skillList,
}: {
  skillList: {
    id: number;
    name: string;
    img: string;
  }[];
}) => {
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

      <div className="absolute inset-0 size-full rounded-full p-2.5 transition-all duration-500 ease-in-out [clip-path:circle(0%_at_50%_50%)] group-hover/skill:[clip-path:circle(50%_at_50%_50%)]">
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
