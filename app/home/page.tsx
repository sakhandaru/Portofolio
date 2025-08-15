import { MarqueeDemo } from "@/components/experience";
import Hero from "@/components/hero";
import { Meteors } from "@/components/magicui/meteors";
import { About } from "@/components/about";

import { SmoothCursor } from "@/components/magicui/smooth-cursor";
import { Globe } from "lucide-react";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import Projects from "@/components/project";
import ContactMe from "@/components/contact";

export default function Home() {
    return (
        <>
            <ScrollProgress className="top" />  
            <div className="cursor-none"><SmoothCursor /></div> 

            
            <Hero /> 
            <About />      
            <Projects />
            <ContactMe />
        </>
    );
}
