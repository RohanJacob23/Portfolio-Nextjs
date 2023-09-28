import { Separator } from "@/components/ui/separator";
import "./globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ weight: ["500"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={quicksand.className}>
        <section className="flex flex-col">
          <div className="flex items-center justify-between md:justify-normal py-4 px-2 md:gap-6 md:py-6 md:px-4 text-lg md:text-2xl md:font-semibold">
            <h1 className="cursor-pointer">About Me</h1>
            <h1 className="cursor-pointer">Projects</h1>
            <h1 className="cursor-pointer">Contact Me</h1>
          </div>
          <Separator className="h-0.5 bg-[#404F4C]" />
        </section>
        {children}
      </body>
    </html>
  );
}
