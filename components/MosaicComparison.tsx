import Image from "next/image";

const standardFeatures = [
  "Uniform tile sizes for consistency",
  "Machine-cut precision",
  "Perfect grid alignment",
  "Standardized color palette",
  "Faster production time",
  "Cost-effective solution",
];

const artisanFeatures = [
  "Unique, hand-cut stone pieces",
  "Natural variations in shape",
  "Artistic, organic arrangement",
  "Custom color blending",
  "Crafted with traditional techniques",
  "One-of-a-kind character",
];

export default function MosaicComparison() {
  return (
    <section className="w-full py-16 md:py-24 px-8 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Standard vs. Artisan
          </h2>
          <p className="text-zinc-600 text-lg md:text-xl max-w-2xl mx-auto">
            Choose the style that best fits your vision
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Standard Mosaics */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://placehold.co/600x400/png"
                alt="Standard Mosaics - Pixel Art Style"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Standard Mosaics
              </h3>
              <p className="text-zinc-600 mb-4">
                Our standard mosaic collection features precision-cut tiles in a classic pixel art
                aesthetic. Perfect for those seeking consistent patterns and clean lines.
              </p>
              <ul className="space-y-2">
                {standardFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-zinc-700">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Artisan Mosaics */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://placehold.co/600x400/png"
                alt="Artisan Mosaics - Hand-Cut Style"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-secondary/20" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Artisan Mosaics
              </h3>
              <p className="text-zinc-600 mb-4">
                Hand-cut with passion and precision, our artisan mosaics celebrate the natural
                beauty of irregular stone shapes. Each piece tells a unique story of craftsmanship.
              </p>
              <ul className="space-y-2">
                {artisanFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-zinc-700">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}