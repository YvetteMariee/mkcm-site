export const metadata = {
  title: "Nous | MKCM Consulting",
  description:
    "Découvrez MKCM Consulting : notre vision, notre équipe et notre modèle de gouvernance IT.",
};

export default function NousPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-[#0B1F33]">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
              Nous
            </p>
            <h1 className="mt-5 text-4xl font-semibold text-white md:text-5xl">
              MKCM Consulting accompagne les organisations qui veulent sécuriser leur
              croissance digitale.
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              Notre cabinet est né de la convergence entre conseil stratégique, delivery
              technologique et gestion du risque. Nous intervenons partout où la
              performance IT devient critique.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
            <div className="text-xs uppercase tracking-[0.3em] text-white/50">Notre promesse</div>
            <p className="mt-4">
              Aider vos équipes à prendre les bonnes décisions rapidement tout en
              sécurisant les opérations.
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-[#10243A] p-4 text-xs text-white/60">
              Plus de 15 ans d’expérience cumulée en transformation IT.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#08192B]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Vision",
                text: "Faire de l’IT un accélérateur stratégique pour les organisations africaines et européennes.",
              },
              {
                title: "Mission",
                text: "Structurer, sécuriser et délivrer des systèmes IT fiables et performants.",
              },
              {
                title: "Manifeste",
                text: "Éthique, rigueur et transparence pour accompagner la croissance durable.",
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
                Leadership
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Une équipe dirigeante issue du conseil, de la tech et de la sécurité.
              </h2>
            </div>
            <div className="space-y-4 text-sm text-white/70">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Consultants seniors spécialisés en stratégie et transformation IT.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Experts cyber certifiés pour sécuriser les environnements sensibles.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Product leaders et architectes data pour l’industrialisation.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#08192B]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              "Gouvernance & conformité",
              "Innovation responsable",
              "Accélération du delivery",
              "Expérience utilisateur",
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
                Présence
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Des équipes connectées entre l’Europe et l’Afrique.
              </h2>
              <p className="mt-4 text-sm text-white/70">
                Nos hubs régionaux permettent un suivi continu des projets et une proximité
                avec les décideurs.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
              <ul className="space-y-3">
                <li>• Paris : stratégie & gouvernance</li>
                <li>• Abidjan : delivery & produit</li>
                <li>• Douala : cyber & infrastructure</li>
                <li>• Remote : experts internationaux</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0D2035]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
              Construisons la suite
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Rencontrez nos équipes et partageons vos ambitions.
            </h2>
          </div>
          <button className="rounded-full bg-[#3DD6C6] px-6 py-3 text-sm font-semibold text-[#0B1F33]">
            Organiser un rendez-vous
          </button>
        </div>
      </section>
    </main>
  );
}
