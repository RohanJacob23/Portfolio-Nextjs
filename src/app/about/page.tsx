import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "About Page",
};

export default function page() {
  const skills = ["React", "Next.js", "MongoDB", "Tailwind CSS"];
  return (
    <div className="flex-1 p-4 md:p-8 space-y-4 text-xl text-muted-foreground max-w-screen-lg">
      <p>
        I&apos;m{" "}
        <span className="text-foreground font-medium underline underline-offset-2 decoration-primary">
          Rohan Koshy Jacob
        </span>
        , a highly motivated and results-oriented{" "}
        <span className="text-foreground font-medium underline underline-offset-2 decoration-primary">
          web developer
        </span>{" "}
        with a strong foundation in both front-end and back-end development.
      </p>
      <p>
        I possess proficiency in popular web development stacks like
        {skills.map((skill, i) => (
          <React.Fragment key={i}>
            {i === skills.length - 1 ? " and " : " "}
            <span className="text-foreground font-medium underline underline-offset-2 decoration-primary">
              {skill}
              {i !== skills.length - 1 && ","}
            </span>{" "}
          </React.Fragment>
        ))}
        .Eager to leverage my skills and problem-solving abilities to contribute
        to real-world projects and gain practical experience in a professional
        environment.
      </p>
      <p>
        I&apos;m passionate about creating impactful{" "}
        <span className="text-foreground font-medium underline underline-offset-2 decoration-primary">
          web applications
        </span>{" "}
        and seek an opportunity to learn and grow alongside experienced
        developers.
      </p>
    </div>
  );
}
