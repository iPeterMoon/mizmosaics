"use client";

import { Playfair_Display } from "next/font/google";
import { useState } from "react";

const playfair = Playfair_Display({
  variable: "--font-title-display",
  subsets: ["latin"],
});

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData);
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      // You could add a success toast/message here
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-gray-900 mb-4`}>
            Send Us a Message
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primarylight focus:ring-2 focus:ring-primarylight/20 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primarylight focus:ring-2 focus:ring-primarylight/20 transition-all"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primarylight focus:ring-2 focus:ring-primarylight/20 transition-all"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primarylight focus:ring-2 focus:ring-primarylight/20 transition-all"
                placeholder="Project inquiry"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primarylight focus:ring-2 focus:ring-primarylight/20 transition-all resize-none"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primarylight text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
