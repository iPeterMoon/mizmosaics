import AboutHero from "@/components/about/AboutHero";
import AboutVision from "@/components/about/AboutVision";
import AboutStats from "@/components/about/AboutStats";
import AboutValues from "@/components/about/AboutValues";
import AboutProcess from "@/components/about/AboutProcess";
import AboutCTA from "@/components/about/AboutCTA";

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full flex-col bg-white">
        <AboutHero />
        <AboutVision />
        <AboutStats />
        <AboutValues />
        <AboutProcess />
        <AboutCTA />
      </main>
    </div>
  );
}