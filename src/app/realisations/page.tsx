export const metadata = {
  title: "Formations | MKCM Consulting",
  description:
    "Programmes de formation MKCM pour renforcer les équipes IT, produit, data et cybersécurité.",
};

export default function FormationsPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-[#0B1F33]">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
              Formations MKCM
            </p>
            <h1 className="mt-5 text-4xl font-semibold text-white md:text-5xl">
              Des parcours intensifs pour des équipes IT opérationnelles et alignées.
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              Nos formations sont pensées pour les directions IT, les squads produit et les
              équipes data qui doivent accélérer sans compromettre la sécurité.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
            <div className="text-xs uppercase tracking-[0.3em] text-white/50">Formats disponibles</div>
            <ul className="mt-4 space-y-3">
              <li>• Bootcamps intra-entreprise</li>
              <li>• Masterclass dirigeants</li>
              <li>• Coaching opérationnel sur projet</li>
              <li>• Parcours blended</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#08192B]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "IT Leadership",
                text: "Gouvernance, gestion des risques et pilotage des équipes IT.",
              },
              {
                title: "Product Delivery",
                text: "Scrum avancé, organisation produit et pilotage de la valeur.",
              },
              {
                title: "Cyber Essentials",
                text: "Sécurité offensive/défensive, conformité et culture cyber.",
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
                Pédagogie MKCM
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Un apprentissage orienté terrain et résultats.
              </h2>
            </div>
            <div className="space-y-4 text-sm text-white/70">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Cas réels inspirés de missions en production.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Exercices collaboratifs et plans d’action immédiats.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Coaching individuel pour les leaders clés.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#08192B]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              "Diagnostics de maturité",
              "Certification interne",
              "Plan de montée en compétences",
              "Kits de gouvernance",
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
                Calendrier
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Sessions programmées et formations sur mesure toute l’année.
              </h2>
              <p className="mt-4 text-sm text-white/70">
                Nous organisons des cohortes mensuelles et des parcours dédiés pour les
                entreprises souhaitant accélérer rapidement.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
              <ul className="space-y-3">
                <li>• Bootcamp Cyber : 4 semaines</li>
                <li>• Product Leadership : 6 semaines</li>
                <li>• Cloud & FinOps : 3 semaines</li>
                <li>• Data Strategy : 5 semaines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0D2035]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
              Besoin d’un parcours dédié ?
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Construisons un plan de formation adapté à vos équipes.
            </h2>
          </div>
          <button className="rounded-full bg-[#3DD6C6] px-6 py-3 text-sm font-semibold text-[#0B1F33]">
            Discuter avec un formateur
          </button>
        </div>
      </section>
    </main>
  );
}
