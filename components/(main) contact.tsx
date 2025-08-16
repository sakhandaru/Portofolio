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
      top-26
        relative 
        min-h-screen flex px-8 py-20 overflow-hidden
        bg-black text-white
        dark:bg-gray-100 dark:text-black
      "
    >
      
      
      <div className="max-w-5xl mx-auto mb-0 bottom-0 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-0 w-full">
        
        {/* Column 1 - Tagline */}
        <div>
          <h2 className="text-2xl font-medium leading-snug">
            Rifqis Sakha
            <br />
            Hilmi Aziz
          </h2>
          
        </div>

        {/* Column 2 - Services */}
        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-1 text-gray-300 dark:text-gray-600 text-sm">
            <li>Website Design</li>
            <li>Mobile App Design</li>
            <li>SaaS/Dashboard</li>
            <li>Consultant</li>
          </ul>
        </div>

        {/* Column 3 - Explore */}
        <div>
          <h3 className="font-semibold mb-3">Explore</h3>
          <ul className="space-y-1 text-gray-300 dark:text-gray-600 text-sm">
            <li>All Projects</li>
            <li>Newsletter</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 4 - Contact & Social */}
        <div className="flex flex-col gap-6">
          <Link
            href="#"
            className="
              border rounded-full px-8 py-3 text-lg font-medium transition-colors w-fit
              border-white hover:bg-white hover:text-black
              dark:border-black dark:hover:bg-black dark:hover:text-white
            "
          >
            Contact
          </Link>

          <div>
            <h3 className="font-semibold mb-3">Say hello!</h3>
            <div className="flex flex-wrap gap-2">
              <SocialButton
                icon={<FaWhatsapp />}
                link="https://wa.me/nomorWA"
                label="WhatsApp"
              />
              <SocialButton
                icon={<FaInstagram />}
                link="https://instagram.com/username"
                label="Instagram"
              />
              <SocialButton
                icon={<FaXTwitter />}
                link="https://x.com/username"
                label="X"
              />
              <SocialButton
                icon={<FaLinkedin />}
                link="https://linkedin.com/in/username"
                label="LinkedIn"
              />
              <SocialButton
                icon={<FaGithub />}
                link="https://github.com/username"
                label="GitHub"
              />
              <SocialButton
                icon={<FaGitlab />}
                link="https://gitlab.com/username"
                label="GitLab"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Big background text */}
      <div className="absolute bottom-[-1rem] left-0 w-full text-[14rem] md:text-[28rem] font-extrabold opacity-10 leading-none 
        text-white dark:text-black
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
      "
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </Link>
  );
}
