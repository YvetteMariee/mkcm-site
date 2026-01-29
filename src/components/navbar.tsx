"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Méthode", href: "/methodes" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1F33]/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-8 px-6 py-4">
        <Link href="/" aria-label="MKCM Consulting">
          <div className="flex items-center gap-3">
            <LogoMark />
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
              MKCM
            </div>
          </div>
        </Link>
        <div className="hidden flex-1 items-center justify-end gap-6 text-sm font-medium text-white/80 md:flex">
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              label={item.label}
              href={item.href}
              active={pathname === item.href}
            />
          ))}
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <span className="text-xs uppercase tracking-[0.2em] text-white/60">Menu</span>
        </div>
      </nav>
    </header>
  );
}

function NavItem({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative pb-1 transition ${
        active ? "text-white" : "text-white/70 hover:text-white"
      }`}
    >
      {label}
      {active && (
        <span className="absolute left-1/2 top-full h-1 w-6 -translate-x-1/2 rounded-full bg-[#3DD6C6]" />
      )}
    </Link>
  );
}

function LogoMark() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="42" height="42" rx="12" fill="#10243A" />
      <path
        d="M12 27V15h4.8l4.2 4.4L25.2 15H30v12h-4.1v-6.1l-4.7 4.6-4.6-4.6V27H12Z"
        fill="#3DD6C6"
      />
      <path
        d="M30.2 12.6 26.6 9h5.4v5.4l-1.8-1.8-3.3 3.3-1.6-1.6 3.9-3.9Z"
        fill="#F5B447"
      />
    </svg>
  );
}
