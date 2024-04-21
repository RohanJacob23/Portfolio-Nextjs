export default function Home() {
  return (
    <div className="flex-1 p-4 md:p-8 content-center space-y-4">
      <h1 className="flex flex-col gap-4">
        <span>Hello!</span>
        <span>
          I&apos;m{" "}
          <span className="border-b-2 border-[#ffffcc]">Rohan K. Jacob</span>
        </span>
      </h1>
      <h2 className="border-none">A freelance web developer from India.</h2>
    </div>
  );
}
