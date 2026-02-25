import CollectionPreview from "@/src/app/components/CollectionPreview";
import MosaicComparison from "@/src/app/components/MosaicComparison";
import HeroSection from "@/src/app/components/HeroSection";
import MountingSystem from "@/src/app/components/MountingSystem";
import SectionSeparator from "@/src/app/components/SectionSeparator";

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