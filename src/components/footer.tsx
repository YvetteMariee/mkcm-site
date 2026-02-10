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
    <footer className="bg-brand-dark text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">MKCM Consulting</p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
            Ingénierie numérique et conseil IT orientés résultats.
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
            Nous accompagnons les organisations sur leurs enjeux de performance digitale, de gouvernance
            SI et de transformation des opérations.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Navigation</h4>
          <ul className="mt-4 grid gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Contact</h4>
          <ul className="mt-4 grid gap-2 text-sm leading-6">
            <li>contact@mkcm-consulting.com</li>
            <li>+33 1 89 00 00 00</li>
            <li>Paris • Lyon • Bordeaux</li>
            <li>Lundi — Vendredi • 9h00 à 18h00</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} MKCM Consulting — Site vitrine déployable sur Vercel.
      </div>
    </footer>
  );
}
