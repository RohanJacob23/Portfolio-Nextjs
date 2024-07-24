import MorpEffect from "@/components/animation/MorpEffect";
import TextEffect from "@/components/animation/TextEffect";
import Image from "next/image";
import Link from "next/link";

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
          <div
            key={index}
            className="animate-marquee flex justify-center gap-4 group-hover/marquee:paused"
          >
            {skillList.map(({ id, name, img }) => (
              <div
                key={id}
                className="flex flex-col items-center gap-2 rounded-full border bg-zinc-900 p-2.5 grayscale transition-[filter] duration-500 ease-in-out hover:grayscale-0"
              >
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
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
