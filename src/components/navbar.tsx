"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Conseil IT", href: "/conseil-it" },
  { label: "Formation", href: "/formation" },
  { label: "Opportunités", href: "/opportunites" },
  { label: "À propos", href: "/a-propos" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/mkcm-logo.svg"
            alt="MKCM Consulting"
            width={140}
            height={36}
            priority
          />
        </Link>
        <div className="flex flex-wrap items-center gap-5 text-sm font-semibold text-slate-700">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors hover:text-brand-600 ${
                pathname === item.href
                  ? "text-brand-700"
                  : "text-slate-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
