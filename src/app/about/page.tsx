import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "About Page",
};

export default function page() {
  const skills = ["React", "Next.js", "MongoDB", "Tailwind CSS"];
  return (
    <div className="max-w-screen-lg flex-1 space-y-4 p-4 text-xl text-muted-foreground md:p-8">
      <p>
        I&apos;m{" "}
        <span className="font-medium text-foreground underline decoration-primary underline-offset-2">
          Rohan Koshy Jacob
        </span>
        , a highly motivated and results-oriented{" "}
        <span className="font-medium text-foreground underline decoration-primary underline-offset-2">
          web developer
        </span>{" "}
        with a strong foundation in both front-end and back-end development.
      </p>
      <p>
        I possess proficiency in popular web development stacks like
        {skills.map((skill, i) => (
          <React.Fragment key={i}>
            {i === skills.length - 1 ? " and " : " "}
            <span className="font-medium text-foreground underline decoration-primary underline-offset-2">
              {skill}
            </span>
            {i !== skills.length - 1 && ","}
          </React.Fragment>
        ))}
        . Eager to leverage my skills and problem-solving abilities to
        contribute to real-world projects and gain practical experience in a
        professional environment.
      </p>
      <p>
        I&apos;m passionate about creating impactful{" "}
        <span className="font-medium text-foreground underline decoration-primary underline-offset-2">
          web applications
        </span>{" "}
        and seek an opportunity to learn and grow alongside experienced
        developers.
      </p>
    </div>
  );
}
