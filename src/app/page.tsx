export default function Home() {
  return (
    <main className="flex w-full grow items-center">
      <section className="flex flex-col gap-1 items-start max-w-[44.125rem] font-semibold">
        <p className="text-lg md:text-2xl">Nice to Meet You!!</p>
        <h1 className="text-[2.6875rem] md:text-[4.75rem] font-bold">
          I&apos;m <span className="gradient">Rohan K. Jacob</span>
        </h1>
        <h3 className="text-[2rem] md:text-[2.68rem]">
          A freelance web developerfrom India.
        </h3>
        <p className="text-lg md:text-2xl">My Resume</p>
      </section>
    </main>
  );
}
