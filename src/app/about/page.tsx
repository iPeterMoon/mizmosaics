import AboutHero from "@/src/app/components/about/AboutHero";
import AboutVision from "@/src/app/components/about/AboutVision";
import AboutStats from "@/src/app/components/about/AboutStats";
import AboutValues from "@/src/app/components/about/AboutValues";
import AboutProcess from "@/src/app/components/about/AboutProcess";
import AboutCTA from "@/src/app/components/about/AboutCTA";

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