import Image from "next/image";
import { ArrowRight, Palette } from "@boxicons/react";
import Link from "next/link";

interface MosaicPhoto {
  src: string;
  alt: string;
  className: string;
  title: string;
  category: string;
}

const mosaicPhotos: MosaicPhoto[] = [
  {
    src: "/mosaic1.png",
    alt: "Custom Pool Mosaic",
    className: "md:rotate-3 md:-translate-y-4 md:ml-8",
    title: "Infinity Pool Design",
    category: "Custom Fabrication",
  },
  {
    src: "/mosaic2.png",
    alt: "Residential Feature Wall",
    className: "md:-rotate-2 md:translate-y-6 md:-mr-4",
    title: "Luxury Residence",
    category: "Feature Wall",
  },
  {
    src: "/mosaic3.png",
    alt: "Commercial Space Mosaic",
    className: "md:rotate-4 md:translate-y-2 md:ml-4",
    title: "Commercial Lobby",
    category: "Brand Integration",
  },
];

export default function CollectionPreview() {
  return (
    <section className="w-full py-16 md:py-24 px-8 md:px-16 lg:px-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 md:mb-16 gap-6">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Custom Projects Showcase
            </h2>
            <p className="text-zinc-600 text-lg md:text-xl max-w-xl">
              See how architects, builders, and designers transform their visions into stunning glass mosaics
            </p>
          </div>
          <Link
            href="/login"
            className="group inline-flex items-center gap-3 bg-primary text-white py-3 px-8 rounded-xl shadow-lg transition-all duration-300 hover:bg-primarylight hover:scale-105 hover:shadow-xl"
          >
            <span className="text-lg font-semibold">Start Your Project</span>
            <ArrowRight
              pack="filled"
              className="transition-transform duration-300 group-hover:translate-x-2"
              size="lg"
            />
          </Link>
        </div>

        <div className="flex flex-wrap justify-center items-end gap-4 md:gap-8 mb-12">
          {mosaicPhotos.map((photo, index) => (
            <div
              key={index}
              className={`relative w-64 h-80 md:w-80 md:h-112 overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-0 hover:z-10 hover:shadow-indigo-500/30 ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end pb-6 px-4">
                <p className="text-emerald-400 text-sm font-semibold mb-1 flex items-center gap-1">
                  <Palette size="xs" />
                  {photo.category}
                </p>
                <p className="text-white font-bold text-lg">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}