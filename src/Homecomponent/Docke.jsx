import React from "react";
// import Link from "next/link";
import {
  FiHome,
  FiPenTool,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

import { Dock, DockIcon } from "../components/magicui/dock";

const DATA = {
  navbar: [
    { href: "#", icon: FiHome, label: "Home" },
    // { href: "#", icon: FiPenTool, label: "Blog" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ankittbisht",
        icon: FiGithub,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ankittbisht/",
        icon: FiLinkedin,
      },
      Twitter: {
        name: "Twitter",
        url: "https://x.com/AnkittBishtt",
        icon: FaXTwitter,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/ankittbisht/",
        icon: SiLeetcode,
      },
      email: {
        name: "Send Email",
        url: "mailto:ab67743@gmail.com",
        icon: FiMail,
      },
    },
  },
};

export function DockDemo() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-12 flex origin-bottom h-full max-h-14">
      <Dock
        direction="middle"
        className="z-50 mb-12 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      >
        {DATA.navbar.map((item) => (
          <DockIcon key={item.label}>
            <a
              href={item.href}
              aria-label={item.label}
              className="flex aspect-square cursor-pointer items-center justify-center rounded-full"
            >
              <div className=" inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-[#f5f5f5] hover:text-accent-foreground rounded-full size-12">
                <item.icon className="size-6 " />
              </div>
            </a>
          </DockIcon>
        ))}
        {Object.entries(DATA.contact.social).map(([name, social]) => (
          <DockIcon key={name}>
            <a
              href={social.url}
              aria-label={social.name}
              className="flex aspect-square cursor-pointer items-center justify-center rounded-full"
            >
              <div className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-[#f5f5f5] hover:text-accent-foreground rounded-full size-12">
                <social.icon className="size-6" />
              </div>
            </a>
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
}
