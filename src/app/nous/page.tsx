import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import PageHero from "@/components/page-hero";

const values = [
  {
    title: "Excellence technique",
    text: "Nous appliquons des standards software élevés pour garantir robustesse, maintenabilité et performance.",
    icon: "/tech/code-lab.svg",
  },
  {
    title: "Transparence projet",
    text: "Suivi clair, backlog priorisé, indicateurs mesurables : chaque décision est partagée et justifiée.",
    icon: "/tech/dashboard-ui.svg",
  },
  {
    title: "Sécurité by design",
    text: "La cybersécurité, la qualité et la fiabilité sont intégrées dès les premières phases de conception.",
    icon: "/tech/cloud-secure.svg",
  },
];

export default function NousPage() {
  return (
    <>
      <PageHero
        title="Nous"
        subtitle="Une équipe IT & digitale spécialisée en développement logiciel, cloud et transformation numérique."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <AnimatedSection>
            <article className="rounded-2xl border border-[#213a7b] bg-[#0c1737] p-8 shadow-soft">
              <h2 className="text-xl font-semibold text-white">Notre mission</h2>
              <p className="mt-4 text-sm leading-7 text-[#b7c8ef]">
                Concevoir et déployer des solutions numériques modernes qui accélèrent la performance opérationnelle
                de nos clients, tout en garantissant qualité logicielle et sécurité.
              </p>
            </article>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <article className="rounded-2xl border border-[#213a7b] bg-[#0c1737] p-8 shadow-soft">
              <h2 className="text-xl font-semibold text-white">Notre vision</h2>
              <p className="mt-4 text-sm leading-7 text-[#b7c8ef]">
                Devenir un partenaire technologique de référence pour les entreprises qui souhaitent construire
                des produits digitaux performants, évolutifs et centrés utilisateur.
              </p>
            </article>
          </AnimatedSection>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map((value, idx) => (
            <AnimatedSection key={value.title} delay={idx * 0.08}>
              <article className="h-full rounded-2xl border border-[#213a7b] bg-[#0f1c42] p-7 transition hover:-translate-y-1 hover:shadow-soft">
                <Image src={value.icon} alt={value.title} width={56} height={56} className="rounded-lg border border-white/10" />
                <h3 className="mt-4 text-lg font-semibold text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#b7c8ef]">{value.text}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
        <section className="border-t border-[#213a7b] bg-[#050b1d]">
  <div className="mx-auto max-w-6xl px-6 py-20">
    <AnimatedSection>
      <div className="mb-12 max-w-2xl">
        <h2 className="text-2xl font-semibold text-white">
          Travaillons ensemble
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#b7c8ef]">
          Vous avez un projet numérique, un besoin en développement logiciel
          ou en accompagnement IT ? Échangeons pour construire une solution
          adaptée à vos enjeux.
        </p>
      </div>
    </AnimatedSection>

    <AnimatedSection delay={0.1}>
      <form className="grid max-w-3xl gap-6">
        <div className="grid gap-6 md:grid-cols-2">
          <input
            type="text"
            placeholder="Nom complet"
            className="rounded-xl border border-white/10 bg-[#0c1737] px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#26e0ff]"
            required
          />
          <input
            type="email"
            placeholder="Adresse email"
            className="rounded-xl border border-white/10 bg-[#0c1737] px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#26e0ff]"
            required
          />
        </div>

        <input
          type="text"
          placeholder="Entreprise (optionnel)"
          className="rounded-xl border border-white/10 bg-[#0c1737] px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#26e0ff]"
        />

        <textarea
          rows={5}
          placeholder="Décrivez votre besoin ou votre projet"
          className="rounded-xl border border-white/10 bg-[#0c1737] px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#26e0ff]"
          required
        />

        <button
          type="submit"
          className="w-fit rounded-xl bg-[#26e0ff] px-6 py-3 text-sm font-semibold text-[#050b1d] transition hover:bg-[#1fc9e5]"
        >
          Envoyer le message
        </button>
      </form>
    </AnimatedSection>
  </div>
</section>

      </section>
    </>



  );
}
