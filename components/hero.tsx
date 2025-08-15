"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Meteors } from "./magicui/meteors";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PhotoCircle from "./photoCircle";
import { WordRotate } from "@/components/magicui/word-rotate";
import { ConfettiButton } from "./magicui/confetti";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "+=100%", // durasi pin
      pin: true,
      pinSpacing: false, // supaya section di bawah langsung "numpuk"
      scrub: false,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="w-full min-h-screen flex items-center justify-center bg-transparent py-32 md:py-48 relative"
      >
        
        <div className="container mx-auto flex max-w-3xl flex-col items-center text-center relative z-10">
          <div className="flex items-center gap-4"> {/* Tambahkan wrapper flex ini */}
            <h1 className="pointer-events-none whitespace-pre-wrap text-black dark:text-white bg-clip-text text-8xl font-semibold leading-none">
              Hi dude!!
            </h1>
            <PhotoCircle />

          </div>
          <ConfettiButton>
            <WordRotate
              className="text-2xl text-black dark:text-neutral-300 mt-4"
              words={["Welcome 🙌","click me 🤪", "Enjoy 🦄", "⭐️✨💫🌟", "🏃‍♂️🧑‍💻👳‍♀️👨‍🎓", "mewing 🤫🧏‍♂️"]}
            />
          </ConfettiButton>
          {/* <p className="mt-96 text-2xl font-bold animate-bounce">↓</p> */}
        </div>
        {/* <Meteors className="left-80 top-0" /> */}
      </section>
    </>
  );
}
