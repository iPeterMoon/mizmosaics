import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { Award, Heart, Palette, User, Star } from "@boxicons/react";

const playfair = Playfair_Display({
  variable: "--font-title-display",
  subsets: ["latin"],
});

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "50+", label: "Artisans" },
  { number: "100%", label: "Satisfaction" },
];

const values = [
    {
      icon: <Palette size="lg" />,
      title: "Artistry",
    description: "Every mosaic tells a story. Our master artisans transform your vision into breathtaking crystalline artwork.",
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
      icon: <User size="32px" />,
      title: "Collaboration",
    description: "We work closely with architects, designers, and homeowners to bring unique visions to life.",
  },
];

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full flex-col bg-white">
        <Navbar />
        
        {/* Hero Section */}
        <div className="w-full h-80 md:h-96 relative">
          <Image
            src="/Hero-Image.png"
            alt="About Hero"
            fill={true}
            style={{ objectFit: "cover" }}
            className="absolute"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className={`${playfair.className} absolute top-1/2 left-8 lg:left-12 -translate-y-1/2 z-10`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
              About Us
            </h1>
            <p className="text-white text-lg md:text-xl mt-4 drop-shadow-md max-w-xl">
              Crafting timeless mosaics for extraordinary spaces
            </p>
          </div>
        </div>

        {/* Story Section */}
        <section className="py-20 px-8 md:px-16 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-primarylight font-semibold tracking-wider uppercase text-sm">
                  Our Story
                </span>
                <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-primary mt-2 mb-6`}>
                  Two Decades of Mosaic Excellence
                </h2>
                <div className="space-y-4 text-zinc-600 leading-relaxed">
                  <p>
                    Founded in 2010, Miz Mosaics began as a small family workshop with a singular vision: 
                    to transform ordinary surfaces into extraordinary works of art. What started as a 
                    passion for tesserae has grown into one of the region's most trusted names in 
                    architectural mosaics.
                  </p>
                  <p>
                    Today, we specialize in creating stunning mosaics for pools, spas, feature walls, 
                    and luxury interiors. Our team of skilled artisans combines traditional techniques 
                    with modern innovation, ensuring each piece is a unique masterpiece.
                  </p>
                  <p>
                    From conceptual design to final installation, we collaborate closely with our 
                    clients to bring their dreams to life—one beautiful tile at a time.
                  </p>
                </div>
              </div>
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Hero-Image.png"
                  alt="Mosaic craft"
                  fill={true}
                  style={{ objectFit: "cover" }}
                  className="hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
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

        {/* Values Section */}
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

        {/* Process Section */}
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
              {[
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
              ].map((item, index) => (
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

        {/* CTA Section */}
        <section className="py-20 px-8 md:px-16 lg:px-24 bg-primarylight">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-white mb-6`}>
              Ready to Transform Your Space?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's create something beautiful together. Contact us today for a free consultation 
              and discover how mosaics can elevate your project.
            </p>
            <button className="bg-white text-primarylight px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              Start Your Project
            </button>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
