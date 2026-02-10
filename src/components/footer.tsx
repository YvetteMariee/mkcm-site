import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-white">MKCM Consulting</h3>
          <p className="mt-3 text-sm leading-6">
            Cabinet de consulting IT et d&apos;ingénierie numérique. Nous aidons les organisations à
            accélérer leur transformation digitale avec des solutions robustes et pragmatiques.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Navigation</h3>
          <ul className="mt-3 grid gap-2 text-sm">
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/it-consulting">IT Consulting</Link></li>
            <li><Link href="/formation">Formation</Link></li>
            <li><Link href="/carriere">Carrière</Link></li>
            <li><Link href="/nous">Nous</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Contact</h3>
          <ul className="mt-3 grid gap-2 text-sm">
            <li>contact@mkcm-consulting.com</li>
            <li>+33 1 89 00 00 00</li>
            <li>Paris • Lyon • Télétravail</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} MKCM Consulting. Tous droits réservés.
      </div>
    </footer>
  );
}
