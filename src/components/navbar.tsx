"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/it-consulting", label: "IT Consulting" },
  { href: "/formation", label: "Formation" },
  { href: "/carriere", label: "Carrière" },
  { href: "/nous", label: "Nous" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-dark/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="shrink-0">
          <Image src="/logo-mkcm.svg" alt="MKCM" width={170} height={48} priority />
        </Link>
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-white/90">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-1.5 transition ${
                pathname === link.href ? "bg-brand-orange text-white" : "hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
