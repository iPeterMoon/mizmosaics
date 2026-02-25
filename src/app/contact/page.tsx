import ContactHero from "@/src/app/components/contact/ContactHero";
import ContactForm from "@/src/app/components/contact/ContactForm";
import ContactInfo from "@/src/app/components/contact/ContactInfo";
import ContactCTA from "@/src/app/components/contact/ContactCTA";

export default function Contact() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full flex-col bg-white">
        <ContactHero />
        <ContactForm />
        <ContactInfo />
        <ContactCTA />
      </main>
    </div>
  );
}
