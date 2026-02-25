import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-title-display",
  subsets: ["latin"],
});

export default function ContactHero() {
  return (
    <div className="w-full h-80 md:h-96 relative">
      <Image
        src="/Hero-Image.png"
        alt="Contact Hero"
        fill={true}
        style={{ objectFit: "cover" }}
        className="absolute"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className={`${playfair.className} absolute top-1/2 left-8 lg:left-12 -translate-y-1/2 z-10`}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
          Get In Touch
        </h1>
        <p className="text-white text-lg md:text-xl mt-4 drop-shadow-md max-w-xl">
          We'd love to hear from you. Let's create something extraordinary together.
        </p>
      </div>
    </div>
  );
}
