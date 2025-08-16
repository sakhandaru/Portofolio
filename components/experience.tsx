import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { title } from "process";
import { p } from "framer-motion/client";



const workExperience = [
  {
    title: "Frontend Developer at PT. Mekanikace",
    dateRange: "Jan, 2024 – Jan, 2025",
    duration: "1 year",
    description:
      "Bertanggung jawab mengembangkan antarmuka pengguna sebagai Front End Developer.",
  },
  {
    title: "Frontend Developer at TVKU",
    dateRange: "Mar, 2025 – Jul, 2025",
    duration: "5 months",
    description:
      "Mengembangkan sisi klien untuk berbagai proyek di TVKU sebagai Front End Developer.",
  },
  {
    title: "Lead at DOSCOM",
    dateRange: "Jan, 2024 – Jan, 2025",
    duration: "1 year",
    description:
      "Memegang peran sebagai Lead, mengarahkan dan mengelola tim developer.",
  },
  {
    title: "IT Consultant at NU Online",
    dateRange: "Feb, 2024 – Dec, 2024",
    duration: "11 months",
    description:
      "Bekerja sebagai Konsultan IT, memberikan solusi dan strategi teknologi.",
  },
  {
    title: "Web Developer at CV. ERDUA Digital Printing",
    dateRange: "Apr, 2023 – Dec, 2023",
    duration: "9 months",
    description:
      "Membangun dan memelihara website untuk kebutuhan bisnis perusahaan.",
  },
];

const firstRow = workExperience.slice(0, workExperience.length / 2);
const secondRow = workExperience.slice(workExperience.length / 2);

const ReviewCard = ({
  title,
  dateRange,
  duration,
  description,
}: {
  title: string;
  dateRange: string;
  duration: string;
  description: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-96 cursor-pointer overflow-hidden rounded-xl border p-6",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      {/* Judul */}
      <figcaption className="text-lg font-medium leading-snug dark:text-white">
        {title}
      </figcaption>

      {/* Tanggal & durasi */}
      <p className="mt-2 text-sm dark:text-white/50">
        {dateRange} • {duration}
      </p>

      {/* Deskripsi */}
      <blockquote className="mt-2 text-sm dark:text-white/70 leading-relaxed">
        {description}
      </blockquote>
    </figure>
  );
};


export function MarqueeDemo() {
  return (
    <>
      <h2 className="text-md font-bold text-black dark:text-white md:text-1xl lg:text-2xl mb-8">
        My Experience 🧳
      </h2>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">

          <Marquee pauseOnHover className="[--duration:20s]">
              {workExperience.map((review) => (
                  <ReviewCard key={review.title} {...review} />
              ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-100 dark:from-black to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-100 dark:from-black to-transparent"></div>
      </div>
     
      </>
  );
}
