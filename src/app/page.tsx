import MorpEffect from "@/components/animation/MorpEffect";
import Link from "next/link";

/**
 * Renders the Home component.
 *
 * @return {JSX.Element} The rendered Home component.
 */
export default function Home() {
  return (
    <div className="h-full content-center space-y-4 p-4 md:p-8">
      <h1 className="flex flex-col gap-4">
        <span>
          Hello<span className="text-primary">!</span>
        </span>
        <span>
          I&apos;m{" "}
          <span className="underline decoration-primary">Rohan K. Jacob</span>
        </span>
      </h1>
      <MorpEffect />
    </div>
  );
}
