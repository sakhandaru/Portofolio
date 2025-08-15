import { About } from "@/components/about";
import { SmoothCursor } from "@/components/magicui/smooth-cursor";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import Hero from "@/components/hero";
import Projects from "@/components/project";
import ContactMe from "@/components/contact";
import ContactReveal from "@/components/ContactReveal";
import Lanyard from "@/components/Lanyard/Lanyard";

export default function Home() {
    return (
        <>
            <div id="hero"></div>
            <ScrollProgress className="top" />  
            <div className="cursor-none"><SmoothCursor /></div> 
            <Hero /> 
            <About />  
            <Projects />
            <ContactReveal />
            {/* <ContactMe /> */}
            
        </>
    );
}
