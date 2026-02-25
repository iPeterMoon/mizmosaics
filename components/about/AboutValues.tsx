import { Playfair_Display } from "next/font/google";
import { Palette, Heart, Star, User } from "@boxicons/react";

const playfair = Playfair_Display({
  variable: "--font-title-display",
  subsets: ["latin"],
});

const values = [
  {
    icon: <Palette size="lg" />,
    title: "Artistry",
    description: "Every mosaic tells a story. We transform your vision into breathtaking crystalline artwork.",
  },
  {
    icon: <Heart size="lg" />,
    title: "Passion",
    description: "We pour our hearts into every tile, creating pieces that evoke emotion and stand the test of time.",
  },
  {
    icon: <Star size="lg" />,
    title: "Quality",
    description: "Premium materials and meticulous craftsmanship ensure your mosaic remains vibrant for generations.",
  },
  {
    icon: <User size="lg" />,
    title: "Collaboration",
    description: "We work closely with architects, designers, and homeowners to bring unique visions to life.",
  },
];

export default function AboutValues() {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primarylight font-semibold tracking-wider uppercase text-sm">
            Why Choose Us
          </span>
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-primary mt-2`}>
            Our Core Values
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}