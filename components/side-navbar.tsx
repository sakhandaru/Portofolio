"use client";

import { Home, User, Folder, Mail, Moon, Sun, Share2 } from "lucide-react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGitlab,
  FaWhatsapp,
} from "react-icons/fa6";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function SideNavbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: "#home", icon: <Home size={20} />, label: "Home" },
    { href: "#about", icon: <User size={20} />, label: "About" },
    { href: "#projects", icon: <Folder size={20} />, label: "Projects" },
    { href: "#contact", icon: <Mail size={20} />, label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://wa.me/+6287716632356",
      icon: <FaWhatsapp size={20} />,
      label: "WhatsApp",
    },
    {
      href: "https://instagram.com/sakhandaru",
      icon: <FaInstagram size={20} />,
      label: "Instagram",
    },
    {
      href: "https://linkedin.com/in/Rifqis Sakha",
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/sakhandaru",
      icon: <FaGithub size={20} />,
      label: "GitHub",
    },
    {
      href: "https://gitlab.com/sakhandaru",
      icon: <FaGitlab size={20} />,
      label: "GitLab",
    },
  ];

  return (
    <div className="fixed right-0 top-0 h-full w-[50px] z-50 group">
      <div
        className={`
          absolute right-0 top-1/2 -translate-y-1/2
          flex flex-col justify-between
          shadow-lg transition-all duration-300
          ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}
          md:translate-x-[70%] md:group-hover:translate-x-0
        `}
      >
        {/* Top Section: Navigation & Socials */}
        <div className="flex flex-col items-center p-2">
          {/* Container for all icons */}
          <div className="flex flex-col items-center space-y-4">
            {/* Standard Nav Icons */}
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="p-2 hover:opacity-70 transition"
              >
                {item.icon}
              </Link>
            ))}

            {/* Social Icons Accordion - now part of the main list */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => setIsSocialOpen(!isSocialOpen)}
                className="p-2 hover:opacity-70 transition"
                aria-expanded={isSocialOpen}
                aria-controls="social-links-container"
              >
                <Share2 size={20} />
              </button>
              <div
                id="social-links-container"
                className={`flex flex-col items-center space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${
                  isSocialOpen ? "max-h-96 mt-2" : "max-h-0"
                }`}
              >
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:opacity-70 transition"
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Dark Mode Toggle */}
        <div className="p-2 flex justify-center">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 hover:opacity-70 transition"
          >
            {mounted &&
              (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
          </button>
        </div>
      </div>
    </div>
  );
}
