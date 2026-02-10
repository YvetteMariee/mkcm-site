"use client";
import Image from "next/image";


import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header style={{
      position: "sticky",
    top: 0,
    zIndex: 1000,
       width: "100%", backgroundColor: "#0B1F33" }}>
      <nav
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
      
      {/* Logo */}
<Link href="/">
  <div
    style={{
      backgroundColor: "white",
      padding: "10px 16px",
      borderRadius: 4,
      display: "flex",
      alignItems: "center",
      gap: 4,
    }}
  >
    <span
      style={{
        color: "#0B1F33",
        fontSize: 26,
        fontWeight: 800,
        letterSpacing: "-0.5px",
      }}
    >
      MK
    </span>

    <span
      style={{
        color: "#F58220",
        fontSize: 26,
        fontWeight: 800,
        letterSpacing: "-0.5px",
      }}
    >
      CM
    </span>
  </div>
</Link>



        {/* Menu */}
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
  <NavItem label="Accueil" href="/" active={pathname === "/"} />
  <NavItem label="Services" href="/services" active={pathname === "/services"} />
  <NavItem label="IT Consulting" href="/it-consulting" active={pathname === "/it-consulting"} />
  <NavItem label="Formations" href="/formations" active={pathname === "/formations"} />
  <NavItem label="Carrière" href="/carriere" active={pathname === "/carriere"} />
  <NavItem label="Nous" href="/nous" active={pathname === "/nous"} />
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
      style={{
        color: "white",
        textDecoration: "none",
        fontSize: 16,
        fontWeight: 600,
        position: "relative",
        paddingBottom: 6,
      }}
    >
      {label}

      {active && (
        <span
         style={{
  position: "absolute",
  left: "50%",
  bottom: 0,
  transform: "translateX(-50%)",
  width: active ? 18 : 0,
  height: 4,
  backgroundColor: "white",
  borderRadius: 999,
  transition: "width 0.12s ease-out",
}}

        />
      )}
    </Link>
  );
}
