export const metadata = {
  title: "Mentions légales / Privacy Policy | MKCM Consulting",
  description:
    "Informations légales et politique de confidentialité de MKCM Consulting.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-[#0B1F33]">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
            Mentions légales / Privacy Policy
          </p>
          <h1 className="mt-5 text-4xl font-semibold text-white md:text-5xl">
            Transparence, conformité et protection des données.
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-white/70">
            Cette page présente les informations légales et la politique de confidentialité
            de MKCM Consulting.
          </p>
        </div>
      </section>

      <section className="bg-[#08192B]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-white">Éditeur du site</h2>
          <p className="mt-4 text-sm text-white/70">
            MKCM Consulting, société de conseil IT. Siège social : 8 avenue des Lumières,
            75008 Paris. Directeur de publication : Direction MKCM Consulting.
          </p>
        </div>
      </section>

      <section className="bg-[#0D2035]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-white">Données personnelles</h2>
          <p className="mt-4 text-sm text-white/70">
            Les données collectées via nos formulaires sont utilisées pour répondre aux
            demandes commerciales et organiser les échanges. Elles ne sont jamais vendues
            à des tiers.
          </p>
        </div>
      </section>

      <section className="bg-[#08192B]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-white">Finalités & durée</h2>
          <p className="mt-4 text-sm text-white/70">
            Les données sont conservées uniquement le temps nécessaire pour traiter la
            demande, puis archivées selon les obligations légales applicables.
          </p>
        </div>
      </section>

      <section className="bg-[#0B1F33]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-white">Cookies</h2>
          <p className="mt-4 text-sm text-white/70">
            MKCM Consulting utilise des cookies fonctionnels pour améliorer l’expérience
            de navigation. Aucun cookie publicitaire tiers n’est déployé.
          </p>
        </div>
      </section>

      <section className="bg-[#0D2035]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-white">Contact & droits</h2>
          <p className="mt-4 text-sm text-white/70">
            Pour toute question ou demande relative à vos données, contactez
            privacy@mkcm-consulting.com.
          </p>
        </div>
      </section>
    </main>
  );
}
