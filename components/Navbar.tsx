"use client";

import Image from "next/image";
import Link from "next/link";
import { AlbumCovers, Menu, MenuClose } from "@boxicons/react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="sticky flex top-0 left-0 right-0 z-50 bg-zinc-100 w-full h-24 shadow-lg shadow-primary border-b border-slate-100 px-8 py-2 ">
      <Image
        src="/logo-text.svg"
        alt="Logo"
        width={160}
        height={80}
        className="cursor-pointer"
      />
      <ul className="items-center gap-8 ml-auto text-primary hidden md:flex">
        <Link href="/">
          <li className="cursor-pointer hover:bg-indigo-100  text-xl xl:text-2xl font-bold transition-all duration-300 py-2 px-4 rounded-2xl">
            Home
          </li>
        </Link>
        <Link href="/about">
          <li className="cursor-pointer hover:bg-indigo-100  text-xl xl:text-2xl font-bold transition-all duration-300 py-2 px-4 rounded-2xl">
            About
          </li>
        </Link>
        <Link href="/contact">
          <li className="cursor-pointer hover:bg-indigo-100  text-xl xl:text-2xl font-bold transition-all duration-300 py-2 px-4 rounded-2xl">
            Contact
          </li>
        </Link>
        <li className="hidden lg:block">
          <button className="bg-primary text-white px-6 h-12 rounded-lg hover:bg-sky-700 hover:scale-105 transition-all duration-300 xl:ml-24 cursor-pointer mr-10 drop-shadow-2xl flex text-xl font-bold">
            <span className="flex items-center gap-2">
              View Collection{" "}
              <AlbumCovers pack="filled" size="xs" className="top-0" />
            </span>
          </button>
        </li>
      </ul>
      <button
        className="md:hidden ml-auto transition-all duration-200 cursor-pointer"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <MenuClose className="text-primary" size="lg" />
        ) : (
          <Menu className="text-primary" size="lg" />
        )}
      </button>
      <ul
        className={`absolute top-24 right-0 bg-zinc-100 w-full flex flex-col items-center gap-2 overflow-hidden transition-all duration-500 ease-in-out shadow-xl ${
          isMenuOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <li className="cursor-pointer text-center text-primary text-xl xl:text-2xl font-bold py-2 mx-3 border-b-2 w-9/10 border-slate-400 transition-all duration-300 hover:scale-105 hover:text-indigo-600">
          Home
        </li>
        <li className="cursor-pointer text-center text-primary text-xl xl:text-2xl font-bold py-2 mx-3 border-b-2 w-9/10 border-slate-400 transition-all duration-300 hover:scale-105 hover:text-indigo-600">
          About
        </li>
        <li className="cursor-pointer text-center text-primary text-xl xl:text-2xl font-bold py-2 mx-3 border-b-2 w-9/10 border-slate-400 transition-all duration-300 hover:scale-105 hover:text-indigo-600">
          Contact
        </li>
        <li className="cursor-pointer text-center text-primary text-xl xl:text-2xl font-bold py-2 mx-3 border-b-2 w-9/10 border-slate-400 transition-all duration-300 hover:scale-105 hover:text-indigo-600">
          View Collection
        </li>
      </ul>
    </nav>
  );
}
