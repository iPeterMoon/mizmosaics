import Navbar from "@/components/Navbar";
import CollectionPreview from "@/components/CollectionPreview";
import MosaicComparison from "@/components/MosaicComparison";
import HeroSection from "@/components/HeroSection";
import MountingSystem from "@/components/MountingSystem";
import Footer from "@/components/Footer";
import SectionSeparator from "@/components/SectionSeparator";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col bg-white ">
        <HeroSection />
        <SectionSeparator />
        <CollectionPreview />
        <SectionSeparator />
        <MosaicComparison />
        <SectionSeparator />
        <MountingSystem />
        <SectionSeparator />
      </main>
    </div>
  );
}