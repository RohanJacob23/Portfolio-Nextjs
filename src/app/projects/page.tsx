import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Project Page",
};

export default function page() {
  return (
    <div className="flex-1 p-4 md:p-8 space-y-4 text-xl">
      <h2 className="border-none">Projects Page</h2>
      <h3 className="text-muted-foreground">Updating soon...</h3>
    </div>
  );
}
