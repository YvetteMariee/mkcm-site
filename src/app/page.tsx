export const metadata = {
  title: "MKCM Consulting | Conseil IT premium et transformation digitale",
  description:
    "MKCM Consulting accompagne les directions IT avec une expertise premium en stratégie, delivery et cybersécurité.",
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="min-h-screen bg-[#0B1F33]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20 pt-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              Consulting IT Premium
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
              MKCM structure vos plateformes numériques pour gagner en vitesse, en
              sécurité et en clarté stratégique.
            </h1>
            <p className="mt-6 text-lg text-white/70">
              Nous accompagnons les DSI, directions métiers et fonds d’investissement dans
              la modernisation des systèmes, la gouvernance technologique et la mise en
              place de produits digitaux fiables.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#3DD6C6] px-6 py-3 text-sm font-semibold text-[#0B1F33]">
                Planifier une session stratégique
              </button>
              <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80">
                Voir nos expertises
              </button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Architecture",
                text: "Audit d’urbanisation, rationalisation applicative, feuilles de route.",
              },
              {
                title: "Delivery",
                text: "Mise en place d’organisations produit, pilotage Agile, PMO.",
              },
              {
                title: "Cyber & Risk",
                text: "Sécurité opérationnelle, conformité et plans de résilience.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#08192B]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
                Pourquoi MKCM
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Une exécution guidée par la donnée et l’impact métier.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-white/70">
              Inspiré par les cabinets de transformation nouvelle génération, nous
              combinons expertise IT, design de services et gouvernance pour livrer des
              plateformes robustes et mesurables.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Cadres & roadmaps",
                text: "Stratégies numériques alignées aux priorités business et au budget.",
              },
              {
                title: "Exécution accélérée",
                text: "Squads pluridisciplinaires, pilotage des risques et time-to-value.",
              },
              {
                title: "Réassurance",
                text: "KPIs, audits continus et reporting de direction pour décider vite.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-[#0E2137] p-6"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D2035]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
                Offres signature
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Des interventions conçues pour des organisations exigeantes.
              </h2>
            </div>
            <button className="rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
              Voir le catalogue
            </button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Programme Modernisation",
                text: "Rationalisez les applications, sécurisez les données et réduisez les coûts d’infrastructure.",
              },
              {
                title: "Operating Model IT",
                text: "Reprenez la main sur les flux de delivery, les priorités produit et le portefeuille projets.",
              },
              {
                title: "Pilotage cyber intégré",
                text: "Structurez votre gouvernance SSI et vos plans de continuité opérationnelle.",
              },
              {
                title: "Transformation Data",
                text: "Industrialisez les usages data/IA pour créer des avantages différenciants.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#122841] to-[#0B1F33] p-6"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F33]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                Gouvernance & delivery
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Une méthode opérationnelle claire, inspirée des meilleurs acteurs.
              </h2>
              <p className="text-sm leading-relaxed text-white/70">
                MKCM s’appuie sur des rituels de direction, des OKRs de transformation et
                un cockpit de performance pour piloter l’exécution de bout en bout.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                "Cadrage & alignement stratégique",
                "Squads hybrides & delivery continu",
                "Pilotage des risques & conformité",
                "Business case et ROI mesurable",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#08192B]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { value: "+120", label: "programmes IT orchestrés" },
              { value: "98%", label: "clients renouvelés" },
              { value: "24/7", label: "monitoring critique" },
              { value: "6 semaines", label: "pour un diagnostic complet" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-[#0E2137] p-6 text-center"
              >
                <div className="text-3xl font-semibold text-white">{stat.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.3em] text-white/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D2035]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
              Prochaine étape
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Obtenez une feuille de route stratégique en 10 jours.
            </h2>
          </div>
          <button className="rounded-full bg-[#F5B447] px-6 py-3 text-sm font-semibold text-[#0B1F33]">
            Lancer un diagnostic MKCM
          </button>
        </div>
      </section>
    </main>
  );
}
