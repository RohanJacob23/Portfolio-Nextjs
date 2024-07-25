import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Page",
};

export default function page() {
  const socialLinks = [
    {
      icon: <TwitterLogoIcon className="size-6" />,
      name: "Twitter",
      href: "https://twitter.com/R_Jacob2374",
    },
    {
      icon: <GitHubLogoIcon className="size-6" />,
      name: "Github",
      href: "https://github.com/RohanJacob23",
    },
    {
      icon: (
        <Image
          src="/upwork.svg"
          width={48}
          height={48}
          alt="upwork"
          className="size-6"
        />
      ),
      name: "Upwork",
      href: "https://www.upwork.com/freelancers/~01d2bfd9aef1481102?mp_source=share",
    },
    {
      icon: <LinkedInLogoIcon className="size-6" />,
      name: "Linkedin",
      href: "https://www.linkedin.com/in/rohan-koshy-jacob-310b31261/",
    },
    {
      icon: <EnvelopeClosedIcon className="size-6" />,
      name: "Email",
      href: "mailto: rohankoshyjacob@gmail.com",
    },
  ];
  return (
    <div className="flex-1 space-y-4 p-4 text-xl md:p-8">
      {/* social links */}
      <div className="flex flex-col items-start gap-4">
        {socialLinks.map(({ href, icon, name }, i) => (
          <Button
            key={i}
            variant="link"
            asChild
            className="gap-2 pl-0 text-xl text-white decoration-primary"
          >
            <Link href={href} target="_blank">
              {icon}
              {name}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
