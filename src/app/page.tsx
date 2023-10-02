import Link from "next/link";

export default function Home() {
  return (
    <main id="aboutMe" className="flex w-full grow items-center">
      <section className="flex flex-col gap-1 items-start max-w-[44.125rem] font-medium">
        <p className="text-lg md:text-2xl">Nice to Meet You!!</p>
        <h1 className="text-[2.6875rem] md:text-[4.75rem] font-bold">
          I&apos;m <span className="gradient">Rohan K. Jacob</span>
        </h1>
        <h3 className="text-[2rem] md:text-[2.68rem]">
          A freelance web developer from India.
        </h3>
        <Link
          href="/Rohan_Koshy_Jacob_Resume.pdf"
          target="_blank"
          className="text-lg md:text-2xl"
        >
          My Resume
        </Link>
      </section>
    </main>
  );
}
