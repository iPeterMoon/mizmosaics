import Image from "next/image";
import Navbar from "@/components/navbar";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-title-display",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col  bg-white ">
        <Navbar />
        <div className="w-full h-80 md:h-96 lg:h-120 relative">
          <Image
            src="https://placehold.co/1200x600/png"
            alt="Hero Image"
            fill={true}
            style={{ objectFit: "cover" }}
            className="absolute"
          />
          <div
            className={`${playfair.className} absolute top-1/2 left-8 lg:left-12 -translate-y-1/2 `}
          >
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-primary">
              ARCHITECTURAL
              <br />
              SURFACES
            </h1>
            <span className="text-primary text-sm md:text-md lg:text-lg mt-4">For Pools, Spas, Walls & <span className="text-secondary">Luxury Interiors</span></span>
            <div className="flex mt-4 gap-4">
              <button className="bg-primarylight light py-2 px-4 rounded-lg shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-indigo-800 font-sans hover:font-bold">Explore Gallery</button>
              <button className="bg-white text-primary py-2 px-4 rounded-lg shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-primarylight hover:text-sky-100 font-sans hidden sm:block hover:font-bold">Custom Preview</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
