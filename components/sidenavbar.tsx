"use client";

import { Home, User, Folder, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function SideNavbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: "#home", icon: <Home size={20} />, label: "Home" },
    { href: "#about", icon: <User size={20} />, label: "About" },
    { href: "#projects", icon: <Folder size={20} />, label: "Projects" },
    { href: "#contact", icon: <Mail size={20} />, label: "Contact" },
  ];

  return (
    
<div className="fixed right-0 top-0 h-full w-[50px] z-50 group">
  {/* Area Hover (transparan) */}
  
  {/* Navbar asli */}
  <div
    className={`
      absolute right-0 top-1/2 -translate-y-1/2
      flex flex-col justify-between
      shadow-lg transition-transform duration-300
      translate-x-[70%] group-hover:translate-x-0
      ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}
    `}
  >
    {/* isi navbar */}

      {/* Navigation Icons */}
      <div className="flex flex-col items-center space-y-4 p-2">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="p-2 hover:opacity-70 transition"
          >
            {item.icon}
          </Link>
        ))}
      </div>

      {/* Dark Mode Toggle */}
      <div className="p-2 flex justify-center">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 hover:opacity-70 transition"
        >
          {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
        </button>
      </div>
    </div>
      </div>
  );
}
