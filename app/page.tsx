import { About } from "@/components/(main) about";
import { SmoothCursor } from "@/components/magicui/smooth-cursor";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import Hero from "@/components/(main) hero";
import Projects from "@/components/(main) project";
import ContactReveal from "@/components/contact-reveal";
import { DockDemo } from "@/components/techstack";
import ContactSection from "@/components/(main) contact";
import GitHubCalendar from 'react-github-calendar';


export default function Home() {
  return (
    <>
      <div id="hero"></div>
      <ScrollProgress className="top" />
      <div className="hidden sm:block">
        <SmoothCursor />
      </div>
      <Hero />
      <About />
      <Projects />
      <ContactReveal />
      {/* <GitHubCalendar username="sakhandaru" /> */}
    </>
  );
}


  
