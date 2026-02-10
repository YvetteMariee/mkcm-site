import Image from "next/image";
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

const chiffres = [
  { label: "Consultants", value: "35+" },
  { label: "Années d'expérience cumulées", value: "120" },
  { label: "Programmes accompagnés", value: "150+" },
];

export default function NousPage() {
  return (
    <>
      <PageHero
        title="Nous"
        subtitle="Une équipe multidisciplinaire dédiée au consulting IT, à l'innovation numérique et à la création de valeur durable."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <AnimatedSection>
            <article className="rounded-2xl border border-brand-dark/10 bg-white p-8 shadow-soft">
              <h2 className="text-xl font-semibold">Notre mission</h2>
              <p className="mt-4 text-sm leading-7 text-brand-slate">
                Concevoir et piloter des trajectoires de transformation digitale pragmatiques, performantes et
                responsables, en combinant expertise technologique et compréhension des enjeux métier.
              </p>
              <h2 className="mt-6 text-xl font-semibold">Notre vision</h2>
              <p className="mt-3 text-sm leading-7 text-brand-slate">
                Devenir un partenaire de confiance pour les organisations qui souhaitent accélérer leur
                performance numérique avec une approche structurée, humaine et orientée impact.
              </p>
            </article>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Image
              src="/illustrations/mission.svg"
              alt="Équipe MKCM"
              width={520}
              height={360}
              className="mx-auto w-full max-w-md rounded-2xl border border-brand-dark/10 bg-white p-4"
            />
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

        <AnimatedSection delay={0.12}>
          <div className="mt-10 rounded-2xl bg-brand-dark px-7 py-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">En quelques chiffres</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {chiffres.map((item) => (
                <div key={item.label} className="rounded-xl border border-white/20 bg-white/5 px-4 py-4 text-center">
                  <p className="text-2xl font-semibold text-brand-orange">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/75">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
