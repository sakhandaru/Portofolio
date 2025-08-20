"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function Project() {
  const projects = [
    {
      tag: "Conceptual Work",
      video: {
        mp4: "/project-demo/tvku-demo-kecil.mp4",
        webm: "/project-demo/tvku-demo-kecil.webm",
        poster: "/project-demo/tvku-demo-thumbnail.jpg",
      },
      title: "Landing Page TVKU",
      description:
        "The TVKU Website is a modern, responsive web application built with Next.js, designed to deliver a seamless and engaging user experience for accessing TVKU’s content and services. Featuring server-side rendering and static site generation, it ensures fast performance, SEO optimization, and a user-friendly interface, showcasing proficiency in scalable web development with a focus on modern design and accessibility.",
      info: [
        { label: "Year", value: "2025" },
        { label: "Role", value: "Front-end Developer" },
      ],
      links: [
        { label: "Live Demo", icon: <ArrowUpRight size={16} />, href: "#" },
        { label: "See on GitHub", icon: <Github size={16} />, href: "#" },
      ],
    },
    {
      tag: "Conceptual Work",
      video: {
        mp4: "/project-demo/chatbot-kecil.mp4",
        webm: "/project-demo/chatbot-kecil.webm",
        poster: "/project-demo/chatbot-thumbnail.jpg",
      },
      title: "Chatbot Ai Assistant",
      description:
        "The TVKU AI Assistant Chatbot is an intelligent conversational tool developed to enhance user interaction with TVKU's services, built using modern AI frameworks. It provides real-time, personalized responses to user inquiries, seamlessly integrating with the TVKU platform to deliver information, support, and engagement. The chatbot leverages natural language processing to ensure intuitive communication, showcasing expertise in AI-driven solutions and user-centric design.",
      info: [
        { label: "Year", value: "2025" },
        { label: "Role", value: "Front-end Developer" },
      ],
      links: [
        { label: "Live Demo", icon: <ArrowUpRight size={16} />, href: "#" },
        { label: "See on GitHub", icon: <Github size={16} />, href: "#" },
      ],
    },
    {
      tag: "Conceptual Work",
      video: {
        mp4: "/project-demo/ezendaSaaS-kecil.mp4",
        webm: "/project-demo/ezendaSaaS-kecil.webm",
        poster: "/project-demo/ezendaSaaS-kecil-thumbnail.jpg",
      },
      title: "Ezenda SaaS",
      description:
        "Ezenda is a smart SaaS POS solution designed to simplify service booking management for providers like salons, spas, or clinics, featuring an intuitive interface and customizable tools tailored to your business needs—from appointment scheduling to payment and stock tracking, all within a modern dashboard.",
      info: [
        { label: "Year", value: "2025" },
        { label: "Role", value: "Front-end Developer" },
      ],
      links: [
        { label: "Live Demo", icon: <ArrowUpRight size={16} />, href: "#" },
        { label: "See on GitHub", icon: <Github size={16} />, href: "#" },
      ],
    },
    {
      tag: "Conceptual Work",
      video: {
        mp4: "/project-demo/ezendatemplate-kecil.mp4",
        webm: "/project-demo/ezendatemplate-kecil.webm",
        poster: "/project-demo/ezendatemplate-thumbnail.jpg",
      },
      title: "Ezenda Template",
      description:
        "MEzenda is a versatile SaaS POS platform designed to streamline service booking management for providers like salons, spas, or clinics, offering a customizable, intuitive dashboard that adapts to your business—managing appointments, payments, and inventory with ease, all tailored to enhance your operational efficiency.",
      info: [
        { label: "Year", value: "2023" },
        { label: "Role", value: "Front-end Developer" },
      ],
      links: [
        { label: "Live Demo", icon: <ArrowUpRight size={16} />, href: "#" },
        { label: "See on GitHub", icon: <Github size={16} />, href: "#" },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gray-100 text-neutral-900 dark:bg-black dark:text-white py-16 px-4 transition-colors duration-300"
    >
      <h2 className="max-w-6xl mx-auto text-2xl font-bold md:text-3xl lg:text-4xl mb-12">
        My Projects 🧑‍💻
      </h2>

      <div className="max-w-6xl mx-auto space-y-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-12 md:items-center"
          >
            {/* Video looping + lazy load */}
            <div className="relative">
              {project.tag && (
                <span className="absolute top-4 left-4 bg-neutral-300/80 text-neutral-700 dark:bg-neutral-800/80 dark:text-neutral-300 text-xs px-3 py-1 rounded-full">
                  {project.tag}
                </span>
              )}
              <div className="bg-neutral-200 dark:bg-neutral-900 p-3 rounded-xl flex items-center justify-center">
                <LazyVideo video={project.video} alt={project.title} />
              </div>
            </div>

            {/* Text Section */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                {project.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed text-sm md:text-base">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm text-neutral-500 tracking-wide mb-2">
                  PROJECT INFO
                </h4>
                <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
                  {project.info.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between py-2 text-neutral-700 dark:text-neutral-300 text-sm"
                    >
                      <span>{item.label}</span>
                      <span>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lime-600 dark:text-lime-400 hover:underline text-sm transition-colors duration-300"
                  >
                    {link.label} {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --- Komponen Lazy Video --- */
function LazyVideo({
  video,
  alt,
}: {
  video: { mp4: string; webm: string; poster: string };
  alt: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setIsVisible(entries[0].isIntersecting),
      { threshold: 0.25 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="none" // 👈 lazy load
      poster={video.poster} // 👈 preview thumbnail
      className="rounded-md w-full h-auto object-contain shadow-sm"
      aria-label={alt}
    >
      <source src={video.webm} type="video/webm" />
      <source src={video.mp4} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
