"use client";

import Image from "next/image";

export default function PhotoCircle() {
  return (
    <div className="flex justify-center items-center">
      <div className="relative 
        w-14 h-14       /* default (mobile) */
        sm:w-20 sm:h-20 /* small screen */
        md:w-20 md:h-20 /* tablet */
        lg:w-20 lg:h-20 /* desktop */
        rounded-full overflow-hidden
      ">
        <Image
          src="/pp2.png" 
          alt="Foto Profil"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 64px, (max-width: 768px) 96px, 112px"
        />
      </div>
    </div>
  );
}
