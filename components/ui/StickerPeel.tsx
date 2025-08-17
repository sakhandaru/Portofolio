"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

interface StickerBounceProps {
  imageSrc: string;
  width?: number;
  rotationFactor?: number; // seberapa besar rotasi saat drag
  bounceEase?: string; // easing saat balik
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

    // set initial position
    if (initialPosition !== "center" && typeof initialPosition === "object") {
      gsap.set(target, { x: initialPosition.x, y: initialPosition.y });
    }

    const draggable = Draggable.create(target, {
      type: "x,y",
      inertia: true,
      bounds: window,
      onDrag(this: Draggable) {
        const rot = gsap.utils.clamp(-15, 15, this.deltaX * rotationFactor);
        gsap.to(target, { rotation: rot, duration: 0.15, ease: "power1.out" });
      },
      onDragEnd() {
        gsap.to(target, { rotation: 0, duration: 0.8, ease: bounceEase });
      },
      onDragStart() {
        target.style.cursor = "grabbing";
      },
      onRelease() {
        target.style.cursor = "grab";
      },
    });

    draggableInstanceRef.current = draggable[0];

    return () => {
      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.kill();
      }
    };
  }, [initialPosition, rotationFactor, bounceEase]);

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
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
};

export default StickerBounce;
