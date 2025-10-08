import React, { useEffect, useRef, useState } from 'react';

// Types
interface WorkExperience {
  id: number;
  position: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  technologies?: string[];
}

interface AboutProps {
  name: string;
  title: string;
  description: string;
  skills: string[];
  email: string;
  phone?: string;
  location: string;
}

interface WorkExperienceProps {
  experiences: WorkExperience[];
}

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

// Theme Context
const ThemeContext = React.createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {}
});

// Theme Toggle Component
const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = React.useContext(ThemeContext);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // GSAP animation for theme toggle
    if (typeof window !== 'undefined') {
      import('gsap').then(({ gsap }) => {
        const tl = gsap.timeline();
        
        if (toggleRef.current) {
          tl.set(toggleRef.current, { scale: 1 })
            .to(toggleRef.current, {
              scale: 0.9,
              duration: 0.1,
              ease: "power2.out"
            })
            .to(toggleRef.current, {
              scale: 1,
              duration: 0.2,
              ease: "elastic.out(1, 0.3)"
            });
        }
      });
    }
  }, [isDark]);

  return (
    <button
      ref={toggleRef}
      onClick={toggleTheme}
      className={`fixed top-6 right-6 z-50 p-3 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
        isDark 
          ? 'bg-gray-900 border-white text-white hover:bg-gray-800' 
          : 'bg-white border-gray-900 text-gray-900 hover:bg-gray-50'
      }`}
    >
      <div className="w-6 h-6 relative overflow-hidden">
        <div className={`absolute inset-0 transition-transform duration-300 ${isDark ? 'translate-y-0' : '-translate-y-8'}`}>
          ☀️
        </div>
        <div className={`absolute inset-0 transition-transform duration-300 ${isDark ? 'translate-y-8' : 'translate-y-0'}`}>
          🌙
        </div>
      </div>
    </button>
  );
};

// About Component
export const About: React.FC<AboutProps> = ({
  name,
  title,
  description,
  skills,
  email,
  phone,
  location
}) => {
  const { isDark } = React.useContext(ThemeContext);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('gsap').then(({ gsap }) => {
        const tl = gsap.timeline({ delay: 0.2 });

        // Border animation
        tl.fromTo(borderRef.current, 
          { scaleY: 0, transformOrigin: "top" },
          { scaleY: 1, duration: 0.8, ease: "power3.out" }
        );

        // Text animations with stagger
        tl.fromTo([nameRef.current, titleRef.current], 
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power2.out" },
          "-=0.4"
        );

        tl.fromTo(descRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        );

        // Skills animation
        const skillItems = skillsRef.current?.querySelectorAll('.skill-item');
        if (skillItems) {
          tl.fromTo(skillItems,
            { scale: 0, opacity: 0 },
            { 
              scale: 1, 
              opacity: 1, 
              duration: 0.4, 
              stagger: 0.1, 
              ease: "back.out(1.7)" 
            },
            "-=0.2"
          );
        }

        // Contact animation
        const contactItems = contactRef.current?.querySelectorAll('.contact-item');
        if (contactItems) {
          tl.fromTo(contactItems,
            { x: 30, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" },
            "-=0.4"
          );
        }
      });
    }
  }, []);

  return (
    <section className={`py-16 px-6 max-w-4xl mx-auto transition-colors duration-300 ${
      isDark ? 'text-white' : 'text-gray-900'
    }`}>
      <div className="relative pl-8 mb-12">
        <div 
          ref={borderRef}
          className={`absolute left-0 top-0 w-0.5 h-full ${
            isDark ? 'bg-white' : 'bg-black'
          }`}
        />
        <h1 ref={nameRef} className="text-4xl font-light mb-2">
          {name}
        </h1>
        <h2 ref={titleRef} className={`text-xl mb-6 ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {title}
        </h2>
        <p ref={descRef} className={`leading-relaxed text-lg max-w-3xl ${
          isDark ? 'text-gray-200' : 'text-gray-800'
        }`}>
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Skills */}
        <div ref={skillsRef}>
          <h3 className={`text-2xl font-light mb-6 border-b pb-2 ${
            isDark 
              ? 'text-white border-gray-600' 
              : 'text-black border-gray-300'
          }`}>
            Skills
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`skill-item px-4 py-2 border transition-all duration-300 hover:scale-105 cursor-pointer ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700 hover:border-white text-gray-200' 
                    : 'bg-gray-50 border-gray-200 hover:border-black text-gray-800'
                }`}
              >
                <span className="text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div ref={contactRef}>
          <h3 className={`text-2xl font-light mb-6 border-b pb-2 ${
            isDark 
              ? 'text-white border-gray-600' 
              : 'text-black border-gray-300'
          }`}>
            Contact
          </h3>
          <div className="space-y-4">
            <div className="contact-item flex items-center space-x-3">
              <div className={`w-2 h-2 ${isDark ? 'bg-white' : 'bg-black'}`}></div>
              <span className={isDark ? 'text-gray-200' : 'text-gray-800'}>
                {email}
              </span>
            </div>
            {phone && (
              <div className="contact-item flex items-center space-x-3">
                <div className={`w-2 h-2 ${isDark ? 'bg-white' : 'bg-black'}`}></div>
                <span className={isDark ? 'text-gray-200' : 'text-gray-800'}>
                  {phone}
                </span>
              </div>
            )}
            <div className="contact-item flex items-center space-x-3">
              <div className={`w-2 h-2 ${isDark ? 'bg-white' : 'bg-black'}`}></div>
              <span className={isDark ? 'text-gray-200' : 'text-gray-800'}>
                {location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Work Experience Component
export const WorkExperience: React.FC<WorkExperienceProps> = ({ experiences }) => {
  const { isDark } = React.useContext(ThemeContext);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('gsap').then(({ gsap, ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        // Header animation
        gsap.fromTo(headerRef.current,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
            }
          }
        );

        // Timeline items animation
        const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
        if (timelineItems) {
          timelineItems.forEach((item, index) => {
            const dot = item.querySelector('.timeline-dot');
            const content = item.querySelector('.timeline-content');
            const line = item.querySelector('.timeline-line');

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                end: "bottom 20%",
              }
            });

            // Animate dot
            tl.fromTo(dot,
              { scale: 0, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
            );

            // Animate line
            if (line) {
              tl.fromTo(line,
                { scaleY: 0, transformOrigin: "top" },
                { scaleY: 1, duration: 0.6, ease: "power2.out" },
                "-=0.2"
              );
            }

            // Animate content
            tl.fromTo(content,
              { x: 30, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
              "-=0.4"
            );

            // Animate tech badges
            const techBadges = item.querySelectorAll('.tech-badge');
            if (techBadges.length > 0) {
              tl.fromTo(techBadges,
                { scale: 0, opacity: 0 },
                { 
                  scale: 1, 
                  opacity: 1, 
                  duration: 0.3, 
                  stagger: 0.05,
                  ease: "back.out(1.7)" 
                },
                "-=0.2"
              );
            }
          });
        }
      });
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`py-16 px-6 max-w-4xl mx-auto transition-colors duration-300 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}
    >
      <div ref={headerRef} className="relative pl-8 mb-12">
        <div className={`absolute left-0 top-0 w-0.5 h-full ${
          isDark ? 'bg-white' : 'bg-black'
        }`} />
        <h2 className="text-3xl font-light">Work Experience</h2>
      </div>

      <div ref={timelineRef} className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="timeline-item relative">
            {/* Timeline dot */}
            <div className={`timeline-dot absolute left-0 top-2 w-3 h-3 transform -translate-x-1/2 ${
              isDark ? 'bg-white' : 'bg-black'
            }`} />
            
            {/* Timeline line */}
            {index !== experiences.length - 1 && (
              <div className={`timeline-line absolute left-0 top-8 w-px h-24 transform -translate-x-1/2 ${
                isDark ? 'bg-gray-600' : 'bg-gray-300'
              }`} />
            )}

            <div className={`timeline-content ml-8 pb-8 border-b last:border-b-0 ${
              isDark ? 'border-gray-700' : 'border-gray-200'
            }`}>
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                <div>
                  <h3 className="text-xl font-medium mb-1">
                    {exp.position}
                  </h3>
                  <p className={`text-lg mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {exp.company}
                  </p>
                </div>
                <div className="text-right">
                  <p className={`text-sm mb-1 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {exp.duration}
                  </p>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {exp.location}
                  </p>
                </div>
              </div>

              {/* Description */}
              <ul className="space-y-2 mb-6">
                {exp.description.map((desc, descIndex) => (
                  <li key={descIndex} className="flex items-start space-x-3">
                    <div className={`w-1 h-1 mt-3 flex-shrink-0 ${
                      isDark ? 'bg-gray-500' : 'bg-gray-400'
                    }`} />
                    <span className={`leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {desc}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              {exp.technologies && exp.technologies.length > 0 && (
                <div>
                  <h4 className={`text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`tech-badge px-3 py-1 border text-xs transition-all duration-300 hover:scale-105 cursor-pointer ${
                          isDark 
                            ? 'bg-gray-800 border-gray-600 text-gray-300 hover:border-white' 
                            : 'bg-white border-gray-300 text-gray-700 hover:border-black'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Main component with theme provider
export default function ProfileWithTheme() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Sample data
  const aboutData: AboutProps = {
    name: "John Doe",
    title: "Full Stack Developer",
    description: "Passionate software developer with 5+ years of experience creating scalable web applications. I specialize in modern JavaScript frameworks and have a strong background in both frontend and backend development. Always eager to learn new technologies and solve complex problems.",
    skills: [
      "JavaScript", "TypeScript", "React", "Next.js",
      "Node.js", "Express", "PostgreSQL", "MongoDB",
      "AWS", "Docker", "Git", "REST APIs"
    ],
    email: "john.doe@email.com",
    phone: "+62 123 456 7890",
    location: "Jakarta, Indonesia"
  };

  const workData: WorkExperience[] = [
    {
      id: 1,
      position: "Senior Frontend Developer",
      company: "Tech Startup Inc.",
      duration: "2022 - Present",
      location: "Jakarta, ID",
      description: [
        "Led development of customer-facing web application serving 10,000+ daily active users",
        "Implemented responsive design system that improved development efficiency by 40%",
        "Collaborated with UX team to create intuitive user interfaces and improve user experience",
        "Mentored junior developers and conducted code reviews to maintain code quality"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"]
    },
    {
      id: 2,
      position: "Full Stack Developer",
      company: "Digital Agency Co.",
      duration: "2020 - 2022",
      location: "Bandung, ID",
      description: [
        "Developed and maintained multiple client websites using modern web technologies",
        "Built RESTful APIs and integrated third-party services for various projects",
        "Optimized application performance resulting in 50% faster load times",
        "Worked directly with clients to gather requirements and deliver solutions"
      ],
      technologies: ["Vue.js", "Node.js", "Express", "MySQL", "AWS"]
    },
    {
      id: 3,
      position: "Frontend Developer",
      company: "Creative Studio",
      duration: "2019 - 2020",
      location: "Yogyakarta, ID",
      description: [
        "Created responsive websites and web applications for various clients",
        "Collaborated with designers to implement pixel-perfect UI components",
        "Learned and applied modern frontend development best practices",
        "Participated in agile development process and daily standups"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Sass"]
    }
  ];

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}>
        <ThemeToggle />
        
        {/* Add CDN for GSAP */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
        
        <About {...aboutData} />
        <WorkExperience experiences={workData} />
      </div>
    </ThemeContext.Provider>
  );
}