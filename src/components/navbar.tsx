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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-dark/95 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="shrink-0" onClick={() => setMobileOpen(false)}>
            <Image src="/logo-mkcm.svg" alt="MKCM Consulting" width={176} height={52} priority />
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
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={isActive(pathname, link.href)}
              />
            ))}
          </div>
        </div>

        {mobileOpen ? (
          <div className="mt-4 grid gap-2 rounded-xl border border-white/10 bg-white/5 p-3 md:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  isActive(pathname, link.href)
                    ? "bg-brand-orange text-white"
                    : "text-white/90 hover:bg-white/10"
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

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`rounded-full px-4 py-2 transition ${
        active ? "bg-brand-orange text-white" : "hover:bg-white/10"
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
