"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/src/app/components/Navbar";
import Footer from "@/src/app/components/Footer";

const publicRoutes = ['/', '/about', '/contact'];

export default function ClientLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const pathname = usePathname();
  const showNavAndFooter = publicRoutes.includes(pathname);

  return (
    <>
      {showNavAndFooter && <Navbar />}
      {children}
      {showNavAndFooter && <Footer />}
    </>
  );
}
