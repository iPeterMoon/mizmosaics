import Image from "next/image";
import { Facebook, Instagram, Envelope, LocationPin, Phone } from "@boxicons/react";

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Collections", href: "#" },
  { name: "Installation", href: "#" },
];

const services = [
  { name: "Pool Mosaics", href: "#" },
  { name: "Spa Designs", href: "#" },
  { name: "Wall Art", href: "#" },
  { name: "Custom Orders", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white mt-auto">
      {/* Main Footer Content */}
      <div className="py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logo-text.svg"
              alt="Miz Mosaics Logo"
              width={140}
              height={70}
              className="brightness-0 invert"
            />
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              Crafting extraordinary architectural surfaces that transform pools, spas, and luxury interiors into works of art.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-primarylight hover:scale-110"
              >
                <Facebook className="text-white" size="md" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-primarylight hover:scale-110"
              >
                <Instagram className="text-white" size="md" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-primarylight hover:scale-110"
              >
                <Envelope className="text-white" size="md" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-secondary">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-300 text-sm md:text-base transition-all duration-300 hover:text-white hover:translate-x-2 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-secondary">Services</h3>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-zinc-300 text-sm md:text-base transition-all duration-300 hover:text-white hover:translate-x-2 inline-block"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-secondary">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-zinc-300 text-sm md:text-base">
                <LocationPin className="mt-1 text-secondary shrink-0" size="sm" />
                <span>123 Mosaic Street, Art District, City, State 12345</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-300 text-sm md:text-base">
                <Phone className="text-secondary shrink-0" size="sm" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-300 text-sm md:text-base">
                <Envelope className="text-secondary shrink-0" size="sm" />
                <span>hello@mizmosaics.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6 px-8 md:px-16 lg:px-24 bg-primary/90">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Miz Mosaics. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="transition-all duration-300 hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}