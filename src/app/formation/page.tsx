import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import PageHero from "@/components/page-hero";

const programs = [
  {
    name: "Fondamentaux Cloud & DevOps",
    format: "2 jours • présentiel ou distanciel",
    audience: "Équipes d'exploitation et développeurs",
  },
  {
    name: "Conduite de projet agile",
    format: "3 demi-journées • atelier pratique",
    audience: "Chefs de projet, PO et managers",
  },
  {
    name: "Cybersécurité opérationnelle",
    format: "2 jours • cas réels + plan d'actions",
    audience: "Équipes IT et responsables conformité",
  },
];

export default function FormationPage() {
  return (
    <>
      <PageHero
        title="Formation"
        subtitle="Des parcours concrets pour faire monter vos équipes en compétences techniques et méthodologiques."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <AnimatedSection>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">Learning by doing</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight">Des formations orientées terrain et résultats</h2>
              <p className="mt-4 text-sm leading-7 text-brand-slate">
                Nos programmes s'adaptent à vos niveaux de maturité, avec des contenus concrets,
                des mises en situation et des supports directement réutilisables en contexte projet.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-brand-dark/10 bg-white p-4 shadow-soft">
              <Image
                src="/illustrations/stat-web.svg"
                alt="Illustration formation numérique"
                width={560}
                height={320}
                className="h-auto w-full rounded-xl bg-brand-light p-4"
              />
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {programs.map((program, idx) => (
            <AnimatedSection key={program.name} delay={idx * 0.08}>
              <article className="h-full rounded-2xl border border-brand-dark/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-2xl">
                <h3 className="text-lg font-semibold">{program.name}</h3>
                <p className="mt-3 text-sm font-medium text-brand-orange">{program.format}</p>
                <p className="mt-3 text-sm leading-7 text-brand-slate">Public cible : {program.audience}.</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
