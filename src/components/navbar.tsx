"use client";
import Image from "next/image";


import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header style={{ width: "100%", backgroundColor: "#f59e0b" }}>
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "18px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
      
      {/* Logo */}
<Link href="/">
  <Image
    src="/logo-mkcm.svg"
    alt="MKCM Consulting Services"
    width={180}
    height={50}
    priority
    
  />
</Link>



        {/* Menu */}
        <div style={{ display: "flex", gap: 32 }}>
          <NavItem label="Accueil" href="/" active={pathname === "/"} />
          <NavItem
            label="Services"
            href="/services"
            active={pathname === "/services"}
          />
          <NavItem
            label="Méthode"
            href="/methodes"
            active={pathname === "/methodes"}
          />

          
          <NavItem
            label="Contact"
            href="/contact"
            active={pathname === "/contact"}
          />
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
            width: 18,
            height: 4,
            backgroundColor: "white",
            borderRadius: 999,
          }}
        />
      )}
    </Link>
  );
}
