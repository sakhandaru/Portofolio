"use client";

import React from "react";
import Image from "next/image";
import { Dock, DockIcon } from "@/components/magicui/dock";

const techIcons = [
  { name: "JavaScript", src: "/icon/js.svg" },
  { name: "React", src: "/icon/React.svg" },
  { name: "Next.js", src: "/icon/Next.svg" },
  { name: "Svelte", src: "/icon/Svelte.svg" },
  { name: "Tailwind", src: "/icon/Tailwind.svg" },
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
    <div className="relative bg-gray-100 dark:bg-black mb-[10rem] mt-10">
      {/* Wrapper biar bisa swipe di mobile */}
      <div className="overflow-x-auto sm:overflow-visible">
        <div className="flex justify-center sm:block w-max sm:w-full px-4 sm:px-0">
          <Dock direction="middle" className="gap-3 sm:gap-4 md:gap-6">
            {techIcons.map((icon) => (
              <DockIcon key={icon.name}>
                <Image
                  src={icon.src}
                  alt={icon.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                />
              </DockIcon>
            ))}
          </Dock>
        </div>
      </div>
    </div>
  );
}
