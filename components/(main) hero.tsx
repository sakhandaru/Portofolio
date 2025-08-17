"use client";

import { useEffect, useRef, useState } from "react"; // 1. Import useState
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { WordRotate } from "@/components/magicui/word-rotate";
import { ConfettiButton } from "./magicui/confetti";
import PhotoCircle from "./photo-circle";
import StickerBounce from "@/components/ui/StickerPeel"; // Pastikan path ini benar

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  // 2. Buat state untuk posisi stiker, awalnya null
  const [stickerPositionTopRight, setStickerPositionTopRight] = useState<{x: number; y: number} | null>(null);
  const [stickerPositionBottomLeft, setStickerPositionBottomLeft] = useState<{x: number; y: number} | null>(null);

  // Efek untuk ScrollTrigger
  useEffect(() => {
    if (!heroRef.current) return;

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: false,
      scrub: false,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // 3. Efek BARU untuk menghitung posisi stiker HANYA di client
  useEffect(() => {
    // Kode ini hanya berjalan di browser, jadi aman mengakses 'window'
    const topRight = { x: window.innerWidth - 140, y: 20 };
    const bottomLeft = { x: 20, y: window.innerHeight - 170 };

    setStickerPositionTopRight(topRight);
    setStickerPositionBottomLeft(bottomLeft);
  }, []); // Dependensi kosong agar hanya berjalan sekali saat komponen mount

  return (
    <>
      <section
        ref={heroRef}
        className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-[#121212] py-32 md:py-48 relative"
      >
        {/* 4. Render stiker secara kondisional */}
        {stickerPositionTopRight && (
          <StickerBounce
            imageSrc="/sticker2.svg"
            width={300}
            initialPosition={{ x: 450, y: 200 }}
            className="z-10"
          />
        )}

        {stickerPositionBottomLeft && (
          <StickerBounce
            imageSrc="/sticker1.svg"
            width={350}
            initialPosition={{ x: -380, y: -200 }}
            className="z-10"
          />
        )}

        <div className="container mx-auto flex max-w-3xl flex-col items-center text-center relative z-10">
          <div className="flex items-center gap-4">
            {" "}
            <h1
              className="pointer-events-none whitespace-pre-wrap text-black dark:text-white bg-clip-text 
               text-6xl sm:text-6xl md:text-8xl font-semibold leading-none"
            >
              Hi dude!!
            </h1>
            <PhotoCircle />
          </div>
          <ConfettiButton>
            <WordRotate
              className="text-2xl text-black dark:text-neutral-300 mt-4"
              words={[
                "Welcome 🙌",
                "click me 🤪",
                "drag the sticker 🏷️",
                "⭐️✨💫🌟",
                "🏃‍♂️🧑‍💻👳‍♀️👨‍🎓",
                "mewing 🤫🧏‍♂️",
              ]}
            />
          </ConfettiButton>
        </div>
      </section>
    </>
  );
}