"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { ComponentPropsWithoutRef, FC, ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { MarqueeDemo } from "../experience";
import { DockDemo } from "../techstack";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  title?: string;
  children: string;
}



export const TextReveal: FC<TextRevealProps> = ({
  title,
  children,
  className,
}) => {
  
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const calculateOffset = () => {
      const viewportHeight = window.innerHeight;
      setOffset(300 / viewportHeight); // Konversi 170px ke nilai 0-1
    };
    
    calculateOffset();
    window.addEventListener('resize', calculateOffset);
    return () => window.removeEventListener('resize', calculateOffset);
  }, []);

  // Buat adjustedProgress dengan useTransform
  const adjustedProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1 + offset] // Tambahkan offset di ujung range
  );


  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");
  

  return (
    <div
      ref={targetRef}
      className={cn(
        "relative z-0 h-[200vh] bg-gray-100 dark:bg-black pt-45 md:pt-20 lg:pt-20",
        className
      )}
    >
      <div
        className={
          "sticky top-45 md:top-20 lg:top-20 mx-auto flex items-center justify-center h-screen  px-[1rem] py-[2rem]"
        }
      >
        {/* Container untuk judul dan paragraf agar sejajar */}
        <div className="w-full max-w-6xl">
          {/* Judul */}
          {title && (
            <h2 className="text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl mb-8">
              {title}
            </h2>
          )}

          {/* Container paragraf dengan lebar yang dipersempit */}
          <div className="max-w-7xl">
            <span
              className={
                "pb-14 flex flex-wrap text-sm font-mono font-medium leading-relaxed text-black/20 dark:text-white/20 md:text-base lg:text-lg xl:text-xl"
              }
            >
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                  <Word key={i} progress={adjustedProgress} range={[start, end]}>
                    {word}
                  </Word>
                );
              })}
            </span>
          </div>
          <MarqueeDemo />
          <DockDemo />
        </div>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-black dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};
