import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-title-display",
  subsets: ["latin"],
});

export default function ContactCTA() {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-24 bg-primarylight">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-white mb-6`}>
          Let's Create Something Beautiful
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Whether you're looking for a custom mosaic installation or have questions about our services,
          our team is ready to bring your vision to life.
        </p>
        <button className="bg-white text-primarylight px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
          Schedule a Consultation
        </button>
      </div>
    </section>
  );
}
