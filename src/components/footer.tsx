import Link from "next/link";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/it-consulting", label: "IT Consulting" },
  { href: "/formation", label: "Formation" },
  { href: "/carriere", label: "Carrière" },
  { href: "/nous", label: "Nous" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1f3779] bg-[#050b1d] text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#26e0ff]">MKCM Digital Factory</p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
            Développement web, logiciels métiers et solutions cloud sécurisées.
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
            Nous construisons des produits numériques performants grâce à une expertise full-stack,
            DevOps, cybersécurité et UX/UI orientée business.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Navigation</h4>
          <ul className="mt-4 grid gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-[#26e0ff]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Pôles Tech</h4>
          <ul className="mt-4 grid gap-2 text-sm leading-6 text-white/70">
            <li>⚙️ Développement Full-Stack</li>
            <li>☁️ Cloud & DevOps</li>
            <li>🛡️ Cybersécurité applicative</li>
            <li>📊 Data, dashboards & performance</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} MKCM Consulting — Société IT & Digital.
      </div>
    </footer>
  );
}
