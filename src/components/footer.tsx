import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#081526] text-white/80">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="text-lg font-semibold text-white">MKCM Consulting</div>
          <p className="text-sm leading-relaxed text-white/70">
            Cabinet de conseil IT premium. Nous alignons stratégie, produits numériques et
            gouvernance pour faire accélérer vos équipes et sécuriser votre croissance.
          </p>
          <div className="flex gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
            <span>Paris</span>
            <span>•</span>
            <span>Abidjan</span>
            <span>•</span>
            <span>Douala</span>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            Navigation
          </div>
          <div className="grid gap-2">
            <Link href="/">Accueil</Link>
            <Link href="/services">Services</Link>
            <Link href="/methodes">Méthode</Link>
            <Link href="/realisations">Réalisations</Link>
            <Link href="/a-propos">À propos</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/mentions-legales">Mentions légales / Privacy Policy</Link>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            Contact
          </div>
          <div className="space-y-2 text-white/70">
            <div>hello@mkcm-consulting.com</div>
            <div>+33 1 80 00 45 90</div>
            <div>8 avenue des Lumières, 75008 Paris</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-white/60">
            Disponibilités limitées : nous priorisons les missions à forte valeur IT
            (architecture, sécurité, delivery). Planifiez une session de cadrage pour
            réserver un slot.
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} MKCM Consulting. Tous droits réservés.
      </div>
    </footer>
  );
}
