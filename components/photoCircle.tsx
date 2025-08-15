// components/PhotoCircle.tsx
import Image from "next/image";

export default function PhotoCircle() {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-20 h-20 rounded-full overflow-hidden ">
        <Image
          src="/pp2.png" // File harus ada di folder `public`
          alt="Foto Profil"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 128px" // Optimisasi responsive
        />
      </div>
    </div>
  );
}