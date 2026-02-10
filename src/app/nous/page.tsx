import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import PageHero from "@/components/page-hero";

const values = [
  {
    title: "Exigence",
    text: "Nous privilégions les solutions robustes, claires et mesurables, adaptées au niveau de maturité de nos clients.",
    icon: "/illustrations/stat-branding.svg",
  },
  {
    title: "Transparence",
    text: "Nous favorisons une communication continue sur les risques, les arbitrages et les résultats attendus.",
    icon: "/illustrations/stat-commerce.svg",
  },
  {
    title: "Transmission",
    text: "Chaque mission inclut un volet de montée en compétences pour renforcer l'autonomie des équipes.",
    icon: "/illustrations/stat-web.svg",
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
              <article className="h-full rounded-2xl border border-brand-dark/10 bg-brand-light p-7 transition hover:-translate-y-1 hover:shadow-soft">
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={56}
                  height={56}
                  className="rounded-lg bg-white p-2"
                />
                <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-slate">{value.text}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mt-8 rounded-3xl border border-brand-dark/10 bg-brand-dark p-8 text-white md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-brand-orange">Culture d'équipe</p>
              <h3 className="mt-2 text-2xl font-semibold">Un collectif engagé et orienté impact client</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80">
                Nous combinons exigence, entraide et clarté d'exécution pour délivrer des transformations
                digitales utiles, mesurables et pérennes.
              </p>
            </div>
            <Image
              src="/illustrations/objectives.svg"
              alt="Objectifs équipe"
              width={240}
              height={170}
              className="mt-6 w-full max-w-[240px] md:mt-0"
            />
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
