"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#28428d] bg-[#070f25]/95 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between gap-4">
         <Link
  href="/"
  onClick={() => setMobileOpen(false)}
  className="flex items-center"
>
  <div className="flex flex-col items-center leading-tight text-center">
    <span className="text-white font-bold text-2xl tracking-wide">
      MK
      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        CM
      </span>
    </span>

    <span className="text-cyan-400 text-xs tracking-[0.2em] uppercase mt-1">
      Consulting Services
    </span>
  </div>
</Link>


          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="rounded-md border border-white/20 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white md:hidden"
            aria-expanded={mobileOpen}
            aria-label="Ouvrir le menu"
          >
            Menu
          </button>

          <div className="hidden items-center gap-2 text-sm font-medium text-white/90 md:flex">
            {links.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} active={isActive(pathname, link.href)} />
            ))}
          </div>
        </div>

        {mobileOpen ? (
          <div className="mt-4 grid gap-2 rounded-xl border border-white/10 bg-[#0e1a3f]/90 p-3 md:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  isActive(pathname, link.href) ? "bg-brand-orange text-white" : "text-white/90 hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        ) : null}
      </nav>
    </header>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`rounded-full px-4 py-2 transition ${
        active ? "bg-brand-orange text-white" : "hover:bg-[#1a2e63]"
      }`}
    >
      {label}
    </Link>
  );
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
