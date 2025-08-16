"use client";

import {
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaGithub,
  FaGitlab,
  FaWhatsapp,
} from "react-icons/fa6";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      className="
        relative 
        min-h-screen flex px-4 sm:px-8 py-16 sm:py-20 overflow-hidden
        bg-black text-white
        dark:bg-gray-100 dark:text-black
        lg:top-28
      "
    >
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 relative z-0">
        {/* Column 1 - Tagline */}
        <div className="md:col-span-1">
          <h2 className="text-xl sm:text-2xl font-medium leading-snug">
            Rifqis Sakha
            <br />
            Hilmi Aziz
          </h2>
        </div>

        {/* Column 2 - Services */}
        <div className="mt-6 md:mt-0">
          <h3 className="font-semibold mb-2 sm:mb-3 text-lg sm:text-base">Services</h3>
          <ul className="space-y-1 text-gray-300 dark:text-gray-600 text-sm">
            <li>Website Design</li>
            <li>Mobile App Design</li>
            <li>SaaS/Dashboard</li>
            <li>Consultant</li>
          </ul>
        </div>

        {/* Column 3 - Explore */}
        <div className="mt-6 md:mt-0">
          <h3 className="font-semibold mb-2 sm:mb-3 text-lg sm:text-base">Explore</h3>
          <ul className="space-y-1 text-gray-300 dark:text-gray-600 text-sm">
            <li>All Projects</li>
            <li>Newsletter</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 4 - Contact & Social */}
        <div className="mt-8 md:mt-0 flex flex-col gap-4 sm:gap-6">
          <Link
            href="#"
            className="
              border rounded-full px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-medium transition-colors w-fit
              border-white hover:bg-white hover:text-black
              dark:border-black dark:hover:bg-black dark:hover:text-white
            "
          >
            Contact
          </Link>

          <div>
            <h3 className="font-semibold mb-2 sm:mb-3 text-lg sm:text-base">Say hello!</h3>
            <div className="flex flex-wrap gap-2">
              <SocialButton
                icon={<FaWhatsapp size={18} />}
                link="https://wa.me/nomorWA"
                label="WhatsApp"
              />
              <SocialButton
                icon={<FaInstagram size={18} />}
                link="https://instagram.com/username"
                label="Instagram"
              />
              <SocialButton
                icon={<FaXTwitter size={18} />}
                link="https://x.com/username"
                label="X"
              />
              <SocialButton
                icon={<FaLinkedin size={18} />}
                link="https://linkedin.com/in/username"
                label="LinkedIn"
              />
              <SocialButton
                icon={<FaGithub size={18} />}
                link="https://github.com/username"
                label="GitHub"
              />
              <SocialButton
                icon={<FaGitlab size={18} />}
                link="https://gitlab.com/username"
                label="GitLab"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Big background text */}
      <div className="absolute bottom-[-1rem] left-0 w-full text-[8rem] sm:text-[14rem] md:text-[28rem] font-extrabold opacity-10 leading-none 
        text-white dark:text-black pointer-events-none
      ">
        Sakha
      </div>
    </section>
  );
}

function SocialButton({
  icon,
  link,
  label,
}: {
  icon: React.ReactNode;
  link: string;
  label: string;
}) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center gap-2 px-3 py-1 rounded-full shadow-sm border text-sm transition-colors
        bg-white text-black border-white hover:bg-gray-200
        dark:bg-black dark:text-white dark:border-black dark:hover:bg-gray-800
        text-xs sm:text-sm
      "
      aria-label={label}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </Link>
  );
}