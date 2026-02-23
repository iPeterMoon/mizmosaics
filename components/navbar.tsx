import Image from "next/image";
import { QuoteRight } from "@boxicons/react";

export default function Navbar() {
  return (
    <nav className="fixed flex top-0 left-0 right-0 z-50 bg-zinc-100 w-full h-24 shadow-xl border-b border-slate-100 px-8 py-2">
      <Image
        src="/logo-text.svg"
        alt="Logo"
        width={160}
        height={80}
        className="cursor-pointer"
      />
      <ul className="flex items-center gap-8 ml-auto text-blue-950">
        <li className="cursor-pointer hover:bg-indigo-100  text-xl font-bold transition-all duration-300 py-2 px-4 rounded-2xl">Home</li>
        <li className="cursor-pointer hover:bg-indigo-100  text-xl font-bold transition-all duration-300 py-2 px-4 rounded-2xl">About</li>
        <li className="cursor-pointer hover:bg-indigo-100  text-xl font-bold transition-all duration-300 py-2 px-4 rounded-2xl">Contact</li>
        <li >
            <button className="bg-blue-950 text-white px-6 h-12 rounded-lg hover:bg-sky-700 hover:scale-105 transition-all duration-300 ml-24 cursor-pointer mr-10 drop-shadow-2xl flex text-xl font-bold"><span className="flex items-center gap-2">View Collection <QuoteRight pack="filled" size="xs" className="top-0"/></span></button>
        </li>
      </ul>
    </nav>
  );
}
