import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-title-display",
  subsets: ["latin"],
});

// Adjusted for a new business - focus on what you're building toward
const stats = [
  { number: "100%", label: "Dedication" },
  { number: "Custom", label: "Design" },
  { number: "Premium", label: "Materials" },
  { number: "Expert", label: "Craftsmanship" },
];

export default function AboutStats() {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <span className={`${playfair.className} text-4xl md:text-5xl font-bold text-white block`}>
                {stat.number}
              </span>
              <span className="text-secondary text-lg mt-2 block">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}