import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed flex top-0 left-0 right-0 z-50 bg-zinc-100 w-full h-24 shadow-xl border-b border-slate-100 px-4">
            <Image
                src="/logo.svg"
                alt="Logo"
                width={80}
                height={80}
            />
        </nav>
    );
}