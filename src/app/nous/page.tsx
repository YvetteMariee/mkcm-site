import AnimatedSection from "@/components/animated-section";
import PageHero from "@/components/page-hero";

const values = [
  {
    title: "Exigence",
    text: "Nous privilégions les solutions robustes, claires et mesurables, adaptées au niveau de maturité de nos clients.",
  },
  {
    title: "Transparence",
    text: "Nous favorisons une communication continue sur les risques, les arbitrages et les résultats attendus.",
  },
  {
    title: "Transmission",
    text: "Chaque mission inclut un volet de montée en compétences pour renforcer l'autonomie des équipes.",
  },
];

export default function NousPage() {
  return (
    <>
      <PageHero
        title="Nous"
        subtitle="Une équipe multidisciplinaire dédiée au consulting IT, à l'innovation numérique et à la création de valeur durable."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <AnimatedSection>
            <article className="rounded-2xl border border-brand-dark/10 bg-white p-8 shadow-soft">
              <h2 className="text-xl font-semibold">Notre mission</h2>
              <p className="mt-4 text-sm leading-7 text-brand-slate">
                Concevoir et piloter des trajectoires de transformation digitale pragmatiques, performantes et
                responsables, en combinant expertise technologique et compréhension des enjeux métier.
              </p>
            </article>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <article className="rounded-2xl border border-brand-dark/10 bg-white p-8 shadow-soft">
              <h2 className="text-xl font-semibold">Notre vision</h2>
              <p className="mt-4 text-sm leading-7 text-brand-slate">
                Devenir un partenaire de confiance pour les organisations qui souhaitent accélérer leur
                performance numérique avec une approche structurée, humaine et orientée impact.
              </p>
            </article>
          </AnimatedSection>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map((value, idx) => (
            <AnimatedSection key={value.title} delay={idx * 0.08}>
              <article className="rounded-2xl border border-brand-dark/10 bg-brand-light p-7">
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-slate">{value.text}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
