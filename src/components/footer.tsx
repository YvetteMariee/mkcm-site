import Link from "next/link";

const quickLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Conseil IT", href: "/conseil-it" },
  { label: "Formation", href: "/formation" },
  { label: "Opportunités", href: "/opportunites" },
  { label: "À propos", href: "/a-propos" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="text-lg font-semibold text-white">MKCM Consulting</div>
          <p className="text-sm leading-relaxed text-slate-300">
            Cabinet de conseil IT et développement applicatif. Nous aidons les
            organisations à structurer leur stratégie numérique, sécuriser leurs
            projets et livrer des produits fiables.
          </p>
          <a
            href="mailto:contact@mkcm-consulting.com"
            className="inline-flex items-center rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-500"
          >
            Contactez-nous
          </a>
        </div>
        <div className="space-y-3 text-sm">
          <div className="font-semibold text-white">Navigation</div>
          <div className="grid gap-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-300 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <div className="font-semibold text-white">Coordonnées</div>
          <div className="space-y-2 text-slate-300">
            <div>contact@mkcm-consulting.com</div>
            <div>+33 (0)1 80 00 00 00</div>
            <div>Paris · Lyon · Remote</div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} MKCM Consulting. Tous droits réservés.
      </div>
    </footer>
  );
}
