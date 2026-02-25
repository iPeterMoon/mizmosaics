import Image from "next/image"
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-title-display",
  subsets: ["latin"],
});

export default function HeroSection() {
    return (
        <div className="w-full h-96 md:h-120 lg:h-150 relative">
          <Image
            src="/Hero-Image.png"
            alt="Hero Image"
            fill={true}
            style={{ objectFit: "cover" }}
            className="absolute"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div
            className={`${playfair.className} absolute top-1/2 left-8 lg:left-12 -translate-y-1/2 z-10 `}
          >
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
              ARCHITECTURAL
              <br />
              SURFACES
            </h1>
            <span className="text-white text-sm md:text-md lg:text-lg mt-4 drop-shadow-md font-bold">For Pools, Spas, Walls & <span className="text-sky-200 font-semibold">Luxury Interiors</span></span>
            <div className="flex mt-4 gap-4 font-bold">
              <button className="bg-primarylight py-2 px-4 rounded-lg shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-indigo-800 font-sans hover:font-bold">Explore Gallery</button>
              <button className="bg-white text-primary py-2 px-4 rounded-lg shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-primarylight hover:text-sky-100 font-sans hidden sm:block hover:font-bold">Custom Preview</button>
            </div>
          </div>
        </div>
    )
    
}