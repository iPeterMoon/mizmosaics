import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { Sparkles, Target, Community } from "@boxicons/react";

const playfair = Playfair_Display({
  variable: "--font-title-display",
  subsets: ["latin"],
});

const offerings = [
  {
    icon: <Sparkles size="lg" />,
    title: "Custom Mosaics",
    description: "Bespoke designs tailored to your space and vision. Every piece is crafted with attention to detail.",
  },
  {
    icon: <Target size="lg" />,
    title: "Premium Materials",
    description: "Hand-selected tiles and stones from trusted suppliers worldwide, ensuring lasting beauty.",
  },
  {
    icon: <Community size="lg" />,
    title: "Expert Installation",
    description: "Professional craftsmanship with precise installation techniques for flawless results.",
  },
];

export default function AboutVision() {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primarylight font-semibold tracking-wider uppercase text-sm">
            Our Vision
          </span>
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-primary mt-2`}>
            Transforming Spaces, One Tile at a Time
          </h2>
          <p className="text-zinc-600 mt-4 max-w-2xl mx-auto text-lg">
            We believe that art belongs in everyday spaces. Our mission is to bring the beauty of mosaic craftsmanship to homes and businesses, creating lasting impressions that inspire.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/mosaic4.png"
              alt="Mosaic art"
              fill={true}
              style={{ objectFit: "cover" }}
              className="hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="space-y-6">
            <p className="text-zinc-600 leading-relaxed text-lg">
              At Miz Mosaics, we combine artistic vision with technical expertise to create stunning mosaic installations. Whether you're looking to enhance a pool, feature wall, or interior space, we're dedicated to bringing your ideas to life.
            </p>
            <p className="text-zinc-600 leading-relaxed text-lg">
              Every project is an opportunity to create something unique. We work collaboratively with architects, designers, and homeowners to ensure each mosaic reflects their personality and vision.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="bg-zinc-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                {offering.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{offering.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{offering.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}