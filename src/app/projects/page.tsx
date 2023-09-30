import { projectArray } from "@/projectArray/projectArray";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className="w-full grow my-8">
      <h1 className="text-primary text-[2rem] lg:text-[3.5625rem] font-semibold">
        Projects
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-16 lg:gap-20 items-start font-normal text-2xl lg:font-medium lg:text-[2rem] mt-6 lg:mt-16">
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
                "flex flex-col gap-8 items-center justify-center lg:justify-normal",
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
            >
              {/* Project Image */}
              <div
                className={clsx(
                  "flex relative h-[25.125rem] w-[12.5625rem] lg:h-[27.3125rem] lg:min-w-[34.625rem]",
                  i % 2 === 0
                    ? "items-start justify-start"
                    : "justify-end lg:justify-normal lg:items-end"
                )}
              >
                <div
                  className={clsx(
                    "relative w-[11.5625rem] h-[24.125rem] lg:w-[32.625rem] lg:h-[25.3125rem] z-40 rounded-lg",
                    i % 2 !== 0 && classTitle
                  )}
                >
                  <Image
                    src={desktop}
                    alt={alt}
                    fill
                    className="hidden lg:block object-left object-cover rounded-lg"
                    style={{ objectPosition }}
                  />
                  <Image
                    src={mobile}
                    alt={alt}
                    fill
                    className="block lg:hidden object-left object-cover rounded-lg"
                    style={{ objectPosition }}
                  />
                </div>
                <div
                  className={clsx(
                    "absolute lg:left-8 w-[11.5625rem] h-[24.125rem] lg:w-[32.625rem] lg:h-[25.5625rem] z-30 rounded-lg",
                    i % 2 === 0
                      ? [classTitle, "top-4 right-0 lg:top-7"]
                      : "bottom-7 left-0"
                  )}
                  style={{ backgroundColor: bgColor }}
                ></div>
              </div>
              <div className="flex flex-col gap-6 justify-center items-center lg:items-start max-w-md lg:max-w-none">
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
