import TextEffect from "@/components/animation/TextEffect";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "About Page",
};

export default function page() {
  const skills = ["React", "Next.js", "MongoDB", "Tailwind CSS"];
  return (
    <div className="max-h-[calc(100dvh-64px)] max-w-screen-lg space-y-4 overflow-y-auto p-4 text-xl text-muted-foreground md:max-h-[calc(100dvh-68px)] md:p-8">
      <p>
        I&apos;m{" "}
        <TextEffect className="font-medium text-foreground underline decoration-primary underline-offset-2">
          Rohan Koshy Jacob
        </TextEffect>
        , a highly motivated and results-oriented{" "}
        <TextEffect className="font-medium text-foreground underline decoration-primary underline-offset-2">
          web developer
        </TextEffect>{" "}
        with a strong foundation in both front-end and back-end development.
      </p>
      <p>
        I possess proficiency in popular web development stacks like
        {skills.map((skill, i) => (
          <React.Fragment key={i}>
            {i === skills.length - 1 ? " and " : " "}
            <TextEffect className="font-medium text-foreground underline decoration-primary underline-offset-2">
              {skill}
            </TextEffect>
            {i !== skills.length - 1 && ","}
          </React.Fragment>
        ))}
        . Eager to leverage my skills and problem-solving abilities to
        contribute to real-world projects and gain practical experience in a
        professional environment.
      </p>
      <p>
        I&apos;m passionate about creating impactful{" "}
        <TextEffect className="font-medium text-foreground underline decoration-primary underline-offset-2">
          web applications
        </TextEffect>{" "}
        and seek an opportunity to learn and grow alongside experienced
        developers.
      </p>
    </div>
  );
}
