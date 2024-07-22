import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { cn } from "@/lib/utils";

const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Welcome",
  description: "Welcome to my portfolio",
};

/**
 * Renders the root layout of the application.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The child components to render.
 * @return {React.ReactElement} The root layout component.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", jetBrains_Mono.variable)}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
