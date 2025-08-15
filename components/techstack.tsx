"use client";

import React from "react";
import Image from "next/image";
import { Dock, DockIcon } from "@/components/magicui/dock";

const techIcons = [
  { name: "JavaScript", src: "/icon/js.svg" },
  { name: "React", src: "/icon/React.svg" },
  { name: "Next.js", src: "/icon/Next.svg" },
  { name: "Svelte", src: "/icon/Svelte.svg" },
  { name: "Tailwind", src: "/icon/Tailwind.svg" }, // kalau ini svg, tambahkan .svg di file aslinya
  { name: "npm", src: "/icon/npm.svg" },
  { name: "Node.js", src: "/icon/Node.png" },
  { name: "Jest", src: "/icon/jest2.svg" },
  { name: "ESLint", src: "/icon/ESLint.svg" },
  { name: "Git", src: "/icon/git.svg" },
  { name: "Figma", src: "/icon/figma.svg" },
  { name: "Framer", src: "/icon/Framer3.svg" },
  { name: "Supabase", src: "/icon/Supabase.png" },
  { name: "PostgreSQL", src: "/icon/PostgreSQL.svg" },
];

export function DockDemo() {
  return (
    <div className="relative pt-10">
      <Dock direction="middle">
        {techIcons.map((icon) => (
          <DockIcon key={icon.name}>
            <Image
              src={icon.src}
              alt={icon.name}
              width={24}
              height={24}
              className="object-contain"
            />
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
}
