export const metadata = {
  title: "IT Consulting | MKCM Consulting",
  description:
    "Approche MKCM en IT Consulting : diagnostic, gouvernance, modernisation et delivery sécurisé.",
};

export default function ITConsultingPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-[#0B1F33]">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
              IT Consulting
            </p>
            <h1 className="mt-5 text-4xl font-semibold text-white md:text-5xl">
              Une démarche de conseil pensée pour les environnements IT complexes.
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              Nous analysons l’écosystème applicatif, la chaîne de delivery et la posture de
              sécurité pour construire un plan d’action clair, exécuté avec vos équipes.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
            <div className="text-xs uppercase tracking-[0.3em] text-white/50">Diagnostic 360°</div>
            <p className="mt-4">
              40 indicateurs techniques et métiers évalués en moins de 15 jours.
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-[#10243A] p-4 text-xs text-white/60">
              Restitution avec comité de direction et roadmap priorisée.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#08192B]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Exploration",
                text: "Interviews, audits SI, cartographie des risques et dépendances.",
              },
              {
                title: "Alignement",
                text: "Workshops direction, arbitrages budgétaires, priorisation portefeuille.",
              },
              {
                title: "Pilotage",
                text: "Mise en place de gouvernance, KPI et cadence de suivi.",
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

      <section className="bg-[#0D2035]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
                Livrables clés
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Des décisions prises plus vite avec des documents actionnables.
              </h2>
            </div>
            <div className="space-y-4 text-sm text-white/70">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Schéma directeur SI et plan d’investissement 24 mois.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Target operating model & gouvernance produit.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Roadmap cybersécurité et continuité d’activité.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#08192B]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              "Architecture cible & cloud",
              "Gouvernance data & IA",
              "Processus ITIL & SRE",
              "Gestion des risques & conformité",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-[#10243A] p-6 text-sm text-white/80"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F33]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
                Expertise terrain
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Consultants seniors, PMO, architectes et spécialistes cyber dédiés.
              </h2>
              <p className="mt-4 text-sm text-white/70">
                Nous intervenons en co-construction avec vos équipes pour sécuriser
                l’appropriation des transformations.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
              <ul className="space-y-3">
                <li>• Expérience grands comptes & scale-ups</li>
                <li>• Gouvernance multi-sites</li>
                <li>• Cadres d’intervention flexibles</li>
                <li>• Pilotage ROI mensuel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0D2035]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
              Prêts à transformer l’IT ?
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Planifiez une session de cadrage avec MKCM.
            </h2>
          </div>
          <button className="rounded-full bg-[#F5B447] px-6 py-3 text-sm font-semibold text-[#0B1F33]">
            Réserver un slot
          </button>
        </div>
      </section>
    </main>
  );
}
