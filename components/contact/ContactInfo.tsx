import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-title-display",
  subsets: ["latin"],
});

export default function ContactInfo() {
  const contactMethods = [
    {
      title: "Email",
      value: "info@mizmosaics.com",
      icon: "✉️",
      link: "mailto:info@mizmosaics.com",
    },
    {
      title: "Phone",
      value: "(555) 123-4567",
      icon: "📱",
      link: "tel:+15551234567",
    },
    {
      title: "Address",
      value: "123 Mosaic Lane, Creative City, CA 90000",
      icon: "📍",
      link: "https://maps.google.com",
    },
    {
      title: "Hours",
      value: "Mon - Fri: 9:00 AM - 6:00 PM PT",
      icon: "🕐",
    },
  ];

  return (
    <section className="py-20 px-8 md:px-16 lg:px-24 bg-zinc-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-gray-900 mb-4`}>
            Contact Information
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Reach out to us through any of these methods. We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{method.icon}</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{method.title}</h3>
              {method.link ? (
                <a
                  href={method.link}
                  className="text-primarylight hover:underline font-medium transition-all"
                  target={method.title === "Address" ? "_blank" : undefined}
                  rel={method.title === "Address" ? "noopener noreferrer" : undefined}
                >
                  {method.value}
                </a>
              ) : (
                <p className="text-gray-600 font-medium">{method.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
