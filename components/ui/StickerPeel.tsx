"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

// Pastikan plugin sudah diregistrasi
gsap.registerPlugin(Draggable);

// Interface untuk props komponen
interface StickerBounceProps {
  imageSrc: string;
  width?: number;
  rotationFactor?: number; // Seberapa besar rotasi saat drag
  bounceEase?: string; // Easing saat rotasi kembali
  className?: string;
  initialPosition?: "center" | { x: number; y: number };
}

const StickerBounce: React.FC<StickerBounceProps> = ({
  imageSrc,
  width = 150,
  rotationFactor = 0.3,
  bounceEase = "elastic.out(1, 0.3)",
  className = "",
  initialPosition = "center",
}) => {
  const dragTargetRef = useRef<HTMLDivElement>(null);
  const draggableInstanceRef = useRef<Draggable | null>(null);

  useEffect(() => {
    const target = dragTargetRef.current;
    if (!target) return;

    // Atur posisi awal jika ditentukan
    if (initialPosition !== "center" && typeof initialPosition === "object") {
      gsap.set(target, { x: initialPosition.x, y: initialPosition.y });
    }

    // Buat instance Draggable
    const draggable = Draggable.create(target, {
      type: "x,y",
      inertia: true,
      bounds: window,
      onDrag(this: Draggable) {
        // Memberi efek rotasi saat digeser ke samping
        const rot = gsap.utils.clamp(-15, 15, this.deltaX * rotationFactor);
        gsap.to(target, { rotation: rot, duration: 0.15, ease: "power1.out" });
      },
      onDragEnd() {
        // Mengembalikan rotasi ke 0 saat selesai digeser
        gsap.to(target, { rotation: 0, duration: 0.8, ease: bounceEase });
      },
      onDragStart() {
        target.style.cursor = "grabbing";
        // BARIS BARU: Mencegah body di-scroll saat stiker mulai digeser
        document.body.style.overflow = "hidden";
      },
      onRelease() {
        target.style.cursor = "grab";
        // BARIS BARU: Mengizinkan body untuk di-scroll kembali saat stiker dilepas
        document.body.style.overflow = "";
      },
    });

    draggableInstanceRef.current = draggable[0];

    // Cleanup function untuk memberhentikan instance Draggable saat komponen di-unmount
    return () => {
      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.kill();
      }
      // Pastikan overflow di-reset jika komponen unmount saat sedang di-drag
      document.body.style.overflow = "";
    };
  }, [initialPosition, rotationFactor, bounceEase]); // dependensi useEffect

  return (
    <div
      ref={dragTargetRef}
      className={`absolute cursor-grab touch-none select-none ${className}`}
      style={{ width }}
    >
      <img
        src={imageSrc}
        alt="Sticker"
        className="w-full h-auto block pointer-events-none"
        // Atribut untuk mencegah interaksi default gambar
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
};

export default StickerBounce;