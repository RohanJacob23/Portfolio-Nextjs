import { projectArray } from "@/projectArray/projectArray";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className="w-full grow my-8">
      <h1 className="text-primary text-[2rem] md:text-[3.5625rem] font-semibold">
        Projects
      </h1>
      <section className="flex flex-col gap-16 md:gap-20 items-start font-normal text-2xl md:font-medium md:text-[2rem] mt-6 md:mt-16">
        {/* project1 */}
        {projectArray.map(
          (
            {
              id,
              alt,
              desktop,
              bgColor,
              content,
              objectPosition,
              classTitle,
              mobile,
              githubLink,
              link,
            },
            i
          ) => (
            <div
              key={id}
              className={clsx(
                "flex flex-col gap-8 items-center justify-center md:justify-normal",
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              {/* Project Image */}
              <div
                className={clsx(
                  "flex relative h-[25.125rem] w-[12.5625rem] md:h-[27.3125rem] md:min-w-[34.625rem]",
                  i % 2 === 0
                    ? "items-start justify-start"
                    : "justify-end md:justify-normal md:items-end"
                )}
              >
                <div
                  className={clsx(
                    "relative w-[11.5625rem] h-[24.125rem] md:w-[32.625rem] md:h-[25.3125rem] z-40 rounded-lg",
                    i % 2 !== 0 && classTitle
                  )}
                >
                  <Image
                    src={desktop}
                    alt={alt}
                    fill
                    className="hidden md:block object-left object-cover rounded-lg"
                    style={{ objectPosition }}
                  />
                  <Image
                    src={mobile}
                    alt={alt}
                    fill
                    className="block md:hidden object-left object-cover rounded-lg"
                    style={{ objectPosition }}
                  />
                </div>
                <div
                  className={clsx(
                    "absolute md:left-8 w-[11.5625rem] h-[24.125rem] md:w-[32.625rem] md:h-[25.5625rem] z-30 rounded-lg",
                    i % 2 === 0
                      ? [classTitle, "top-4 right-0 md:top-7"]
                      : "bottom-7 left-0"
                  )}
                  style={{ backgroundColor: bgColor }}
                ></div>
              </div>
              <div className="flex flex-col gap-6 justify-center items-center md:items-start">
                {content}

                <div className="flex items-center justify-center gap-6">
                  <Link href={githubLink} target="_blank">
                    <Image
                      src="/icons/github.png"
                      alt="github"
                      width={200}
                      height={200}
                      className="w-8 h-8"
                    />
                  </Link>
                  <Link href={link} target="_blank">
                    <Image
                      src="/icons/link.png"
                      alt="link"
                      width={200}
                      height={200}
                      className="w-7 h-7"
                    />
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </section>
    </main>
  );
}
