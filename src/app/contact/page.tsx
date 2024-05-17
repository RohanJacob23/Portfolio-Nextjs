import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Page",
};

export default function page() {
  return (
    <div className="flex-1 p-4 md:p-8 space-y-4 text-xl">
      {/* social links */}
      <div className="flex flex-col items-start gap-4">
        <Button
          variant="link"
          asChild
          className="text-xl pl-0 gap-2 decoration-[#ffffcc]"
        >
          <Link href="https://twitter.com/R_Jacob2374">
            <TwitterLogoIcon className="size-6" />
            Twitter
          </Link>
        </Button>
        <Button
          variant="link"
          asChild
          className="text-xl pl-0 gap-2 decoration-[#ffffcc]"
        >
          <Link href="https://github.com/RohanJacob23">
            <GitHubLogoIcon className="size-6" />
            Github
          </Link>
        </Button>
        <Button
          variant="link"
          asChild
          className="text-xl pl-0 gap-2 decoration-[#ffffcc]"
        >
          <Link href="mailto: rohankoshyjacob@gmail.com" target="_blank">
            <EnvelopeClosedIcon className="size-6" />
            Gmail
          </Link>
        </Button>
      </div>
    </div>
  );
}
