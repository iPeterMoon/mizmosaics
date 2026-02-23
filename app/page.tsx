import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col  bg-white ">
        <Navbar />
        <div className="w-full h-72 md:h-72 lg:h-96 relative">
          <Image
            src="https://placehold.co/1200x600/png"
            alt="Hero Image"
            fill={true}
            style={{ objectFit: "cover" }}
            className="absolute"
          />
          <h1 className="absolute top-1/2 left-12 font-display -translate-y-1/2 text-4xl font-extrabold text-primary ">
            ARCHITECTURAL SURFACES
          </h1>
        </div>
      </main>
    </div>
  );
}
