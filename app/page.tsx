import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col  bg-white ">
        <Navbar/>
        <div className="w-full relative">
          <Image
            src="https://placehold.co/1800x600/png"
            alt="Hero Image"
            width={1800}
            height={600}
          />
        </div>
      </main>
    </div>
  );
}
