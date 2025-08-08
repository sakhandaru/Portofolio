// components/Navbar.tsx
"use client";

import { useState } from "react";
import { Origami } from "lucide-react"; // Icon contoh
import Image from "next/image";
import { ModeToggle } from "./toggle-dark";

export default function Navbar() {
  const [active, setActive] = useState("");

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Project", href: "#project" },
    { label: "Contact Me", href: "#contact" },
  ];

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <div
      className="flex items-center gap-8 px-6 py-2 rounded-full border border-white/30 
      bg-black/30 backdrop-blur-xl shadow-lg"
      style={{
        border: "1.5px solid rgba(255,255,255,0.25)",
        // boxShadow: "0 4px 32px 0 rgba(31, 38, 135, 0.37)",
        background: "rgba(0,0,0,0.25)",
        backdropFilter: "blur(12px)",
      }}
      >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Origami className="w-6 h-6 text-white" />
      </div>

      {/* Menu */}
      {navItems.map((item) => (
        <a
        key={item.href}
        href={item.href}
        className="relative text-gray-200 dark:text-gray-100 transition-colors duration-200 hover:text-gray-200 font-normal hover:font-semibold"
        >
        {item.label}
        </a>
      ))}

      {/* Icon button contoh */}
      <ModeToggle />
      </div>
    </nav>
  );
}
