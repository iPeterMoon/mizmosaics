import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-title-display",
  subsets: ["latin"],
});

export default function AboutProcess() {
  const steps = [
    {
      step: "01",
      title: "Consultation",
      description: "We discuss your vision, space, and preferences to create a personalized design concept.",
    },
    {
      step: "02",
      title: "Design & Approval",
      description: "Our artists craft detailed renderings. We refine until the design perfectly matches your dreams.",
    },
    {
      step: "03",
      title: "Crafting & Installation",
      description: "Master artisans handcraft your mosaic with precision, then professionally install it.",
    },
  ];

  return (
    <section className="py-20 px-8 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primarylight font-semibold tracking-wider uppercase text-sm">
            Our Process
          </span>
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-primary mt-2`}>
            From Vision to Reality
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <span className={`${playfair.className} text-6xl font-bold text-primary/10 absolute top-0 left-0`}>
                {item.step}
              </span>
              <div className="pt-16 pl-4">
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}