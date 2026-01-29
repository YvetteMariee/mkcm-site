export const metadata = {
  title: "Services | MKCM Consulting",
  description:
    "Panorama des services MKCM : stratégie IT, architecture cloud, cybersécurité et delivery produit.",
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-[#0B1F33]">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
              Services MKCM
            </p>
            <h1 className="mt-5 text-4xl font-semibold text-white md:text-5xl">
              Des interventions sur-mesure pour vos enjeux IT critiques.
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              Nos services sont structurés comme un portefeuille modulaire pour répondre
              rapidement aux besoins des comités de direction, des DSI et des sponsors
              métier.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
            <div className="text-xs uppercase tracking-[0.3em] text-white/50">Focus 2024</div>
            <ul className="mt-4 space-y-3">
              <li>• Migration cloud sécurisée</li>
              <li>• Refonte des architectures data</li>
              <li>• Pilotage des risques & conformité</li>
              <li>• Delivery produit & design d’expérience</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#0E2137]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Stratégie & gouvernance",
                text: "Schémas directeurs SI, pilotage portefeuille, alignement multi-direction.",
              },
              {
                title: "Architecture & cloud",
                text: "Urbanisation, modernisation applicative, migration hybride et FinOps.",
              },
              {
                title: "Cyber & conformité",
                text: "ISO 27001, NIS2, SOC, gestion des crises et continuité d’activité.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-[#10243A] p-6"
              >
                <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#08192B]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
                Modèles d’engagement
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Une organisation flexible selon la maturité de votre DSI.
              </h2>
            </div>
            <div className="space-y-4 text-sm text-white/70">
              <p>
                Nous combinons des missions de conseil stratégique, des squads opérationnels
                et des PMO de transformation pour sécuriser chaque phase.
              </p>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Besoin urgent ? Activez un Sprint d’alignement de 2 semaines.
              </div>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {["Sprint stratégique", "Programme transformation", "Centre d’excellence"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-[#0E2137] px-5 py-4 text-sm text-white/80"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#0D2035]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              "Diagnostic SI & cybersécurité",
              "Plan directeur & priorisation",
              "Delivery produit & design",
              "Gouvernance data & IA",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/80"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#08192B]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
                Exemples d’impact
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Des résultats concrets sur la performance, la sécurité et la vitesse.
              </h2>
              <p className="mt-4 text-sm text-white/70">
                Nos interventions s’articulent autour de quick wins et de changements
                structurels pour sécuriser la trajectoire long terme.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "+28% de disponibilité applicative",
                "Réduction de 35% des coûts cloud",
                "Time-to-market divisé par 2",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-[#0E2137] px-5 py-4 text-sm text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F33]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
              Parlons de votre feuille de route
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Activez un diagnostic rapide de votre organisation IT.
            </h2>
          </div>
          <button className="rounded-full bg-[#3DD6C6] px-6 py-3 text-sm font-semibold text-[#0B1F33]">
            Demander un devis
          </button>
        </div>
      </section>
    </main>
  );
}
