"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WordRotate } from "@/components/ux/word-rotate";
import { ConfettiButton } from "./ux/confetti";
import PhotoCircle from "./photo-circle";
import StickerBounce from "@/components/ui/StickerPeel"; // Pastikan path ini benar

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  // State untuk menyimpan posisi stiker, awalnya null agar tidak error di server
  const [stickerPositions, setStickerPositions] = useState<{
    stickerBawah: { x: number; y: number } | null;
    stickerAtas: { x: number; y: number } | null;
    stickerTengah: { x: number; y: number } | null;
  }>({ stickerBawah: null, stickerAtas: null, stickerTengah: null });

  // Efek untuk ScrollTrigger (tidak diubah)
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

  useEffect(() => {
    const handleResize = () => {
  if (window.innerWidth <= 768) {
    // MOBILE
    setStickerPositions({
      stickerAtas: { 
        x: 0,
        y: - 250
      },
      stickerBawah: { 
        x: 0,
        y: -250
      },
      stickerTengah: {
        x: 0,
        y: -250
      }
    });
  } else if (769 <= window.innerWidth && window.innerWidth <= 1024) {
    // TABLET
    setStickerPositions({
      stickerAtas: { 
        x: -350, 
        y: -200 
      },
      stickerBawah: { 
        x: 400, 
        y: 200 
      },
      stickerTengah: {
        x: -350,
        y: 200
      }
    });
  } else if (1025 <= window.innerWidth && window.innerWidth <= 1440) {
    // DESKTOP KECIL
    setStickerPositions({
      stickerAtas: { 
        x: -350, 
        y: -200 
      },
      stickerBawah: { 
        x: 400, 
        y: 200 
      },
      stickerTengah: {
        x: -350,
        y: 200
      }
    });
  } else {
    // DESKTOP BESAR
    setStickerPositions({
      stickerAtas: { 
        x: -350, 
        y: -200
      },
      stickerBawah: { 
        x: 400, 
        y: 200
      },
      stickerTengah: {
        x: -350,
        y: 200
      }
    });
  }
};


    // Panggil sekali saat komponen dimuat
    handleResize();

    // Tambahkan listener untuk dijalankan setiap kali ukuran jendela berubah
    window.addEventListener("resize", handleResize);

    // Cleanup: Hapus listener saat komponen tidak lagi digunakan
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Dependensi kosong agar hanya berjalan sekali saat komponen mount

  return (
    <>
      <section
        
        ref={heroRef}
        className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-[#121212] py-32 md:py-48 relative overflow-hidden" // Tambahkan overflow-hidden
      >
        {/* Render stiker kanan atas secara kondisional dengan posisi dari state */}
        {stickerPositions.stickerBawah && (
          <StickerBounce
            imageSrc="/sticker2.svg"
            width={350}
            initialPosition={stickerPositions.stickerBawah} // <-- MENGGUNAKAN STATE
            className="z-11"
          />
        )}

        {/* Render stiker kiri bawah secara kondisional dengan posisi dari state */}
        {stickerPositions.stickerAtas && (
          <StickerBounce
            imageSrc="/sticker1.svg"
            width={350}
            initialPosition={stickerPositions.stickerAtas} // <-- MENGGUNAKAN STATE
            className="z-10"
          />
        )}
        {stickerPositions.stickerTengah && (
          <StickerBounce
            imageSrc="/sticker3.svg"
            width={350}
            initialPosition={stickerPositions.stickerTengah} // <-- MENGGUNAKAN STATE2
            className="z-12"
          />
        )}

        <div className="container mx-auto flex max-w-3xl flex-col items-center text-center relative z-10">
          <div className="flex items-center gap-4">
            {" "}
            {/* <p>{window.innerWidth}</p> */}
            <PhotoCircle />
            <h1
              className="pointer-events-none whitespace-pre-wrap text-black dark:text-white bg-clip-text 
               text-6xl sm:text-6xl md:text-8xl font-semibold leading-none"
            >
              Hi dude!!
            </h1>
            
          </div>
          <ConfettiButton>
            <WordRotate
              className="text-2xl text-black dark:text-neutral-300 mt-4"
              words={[
                "Welcome 🙌",
                "Scroll now 👇",
                "scroll slowly 🐢",
                "click me 🤪",
                "drag the sticker 🏷️",
              ]}
            />
          </ConfettiButton>
        </div>
        
      </section>
    </>
  );
}