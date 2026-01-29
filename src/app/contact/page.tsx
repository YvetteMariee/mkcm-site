export const metadata = {
  title: "Carrière | MKCM Consulting",
  description:
    "Rejoignez MKCM Consulting : carrières en stratégie IT, cybersécurité, produit et data.",
};

export default function CarrierePage() {
  return (
    <main className="flex flex-col">
      <section className="bg-[#0B1F33]">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
              Carrière
            </p>
            <h1 className="mt-5 text-4xl font-semibold text-white md:text-5xl">
              Rejoignez une équipe de conseil IT exigeante et bienveillante.
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              Chez MKCM, nous cherchons des profils passionnés par la transformation
              digitale, la gouvernance IT et la cybersécurité.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
            <div className="text-xs uppercase tracking-[0.3em] text-white/50">Recrutement 2024</div>
            <ul className="mt-4 space-y-3">
              <li>• Consultants senior transformation</li>
              <li>• Architectes cloud</li>
              <li>• Lead Product / Delivery</li>
              <li>• Experts cyber & risk</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#08192B]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Impact direct",
                text: "Nous intervenons auprès de dirigeants et de sponsors stratégiques.",
              },
              {
                title: "Progression rapide",
                text: "Mentoring interne, formations continues et certifications financées.",
              },
              {
                title: "Culture d’excellence",
                text: "Exigence, transparence et esprit d’équipe au quotidien.",
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
                Valeurs MKCM
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Travailler dans une équipe engagée et structurée.
              </h2>
            </div>
            <div className="space-y-4 text-sm text-white/70">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Transparence sur les objectifs et les attentes clients.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Autonomie dans la gestion de la mission.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Collaboration transverse et partage de connaissances.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#08192B]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              "Consultant IT Senior",
              "Manager Transformation",
              "Architecte Sécurité",
              "Lead Delivery",
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
                Processus de recrutement
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Un parcours clair, humain et rapide.
              </h2>
              <p className="mt-4 text-sm text-white/70">
                Notre processus est conçu pour respecter votre temps tout en évaluant
                l’adéquation avec les missions et la culture MKCM.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
              <ol className="list-decimal space-y-3 pl-4">
                <li>Entretien de découverte (30 min)</li>
                <li>Étude de cas & échange métier</li>
                <li>Rencontre leadership MKCM</li>
                <li>Onboarding structuré en 2 semaines</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0D2035]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
              Prêt à postuler ?
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Envoyez votre profil et discutons de vos ambitions.
            </h2>
          </div>
          <button className="rounded-full bg-[#F5B447] px-6 py-3 text-sm font-semibold text-[#0B1F33]">
            Envoyer ma candidature
          </button>
        </div>
      </section>
    </main>
  );
}
