// src/components/project.tsx
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";

export default function Project() {
  const projects = [
    {
      tag: "Conceptual Work",
      image: "/MacBook.png",
      title: "Promotional landing page for our favorite show",
      description:
        "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
      info: [
        { label: "Year", value: "2023" },
        { label: "Role", value: "Front-end Developer" },
      ],
      links: [
        { label: "Live Demo", icon: <ArrowUpRight size={16} />, href: "#" },
        { label: "See on GitHub", icon: <Github size={16} />, href: "#" },
      ],
    },
    {
      tag: "ini dummy hehe",
      image: "/MacBook.png",
      title: "Blog site for World News",
      description:
        "Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in front-end development.",
      info: [
        { label: "Client", value: "World News" },
        { label: "Year", value: "2022" },
        { label: "Role", value: "Front-end Developer" },
      ],
      links: [
        { label: "View Project", icon: <ArrowUpRight size={16} />, href: "#" },
      ],
    },
    {
      tag: "Challenge",
      image: "/MacBook.png",
      title: "E-commerce product page",
      description:
        "Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.",
      info: [
        { label: "Year", value: "2022" },
        { label: "Role", value: "Front-end Developer" },
      ],
      links: [
        { label: "Live Demo", icon: <ArrowUpRight size={16} />, href: "#" },
        { label: "See on GitHub", icon: <Github size={16} />, href: "#" },
      ],
    },
  ];

  return (
    <section id="projects" className="bg-gray-100 text-neutral-900 dark:bg-black dark:text-white py-16 px-4 transition-colors duration-300">
      <h2 className="max-w-6xl mx-auto text-md font-bold text-black dark:text-white md:text-1xl lg:text-2xl mb-8 ">
        My Projects 🧑‍💻
      </h2>
      <div className="max-w-6xl mx-auto space-y-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="relative h-full">
              {project.tag && (
                <span className="absolute top-3 left-3 bg-neutral-300/80 text-neutral-700 dark:bg-neutral-800/80 dark:text-neutral-300 text-xs px-3 py-1 rounded-full">
                  {project.tag}
                </span>
              )}
              <div className="bg-neutral-200 dark:bg-neutral-900 p-4 rounded-xl h-full flex items-center justify-center transition-colors duration-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-md"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h3 className="text-sm text-neutral-500 dark:text-neutral-500 tracking-wide mb-2">
                  PROJECT INFO
                </h3>
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
