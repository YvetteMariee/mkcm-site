import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import PageHero from "@/components/page-hero";

const programs = [
  {
    name: "Front-end moderne (React/Next)",
    format: "2 jours • projet guidé",
    audience: "Développeurs front et product teams",
  },
  {
    name: "Back-end & API Engineering",
    format: "2 jours • ateliers techniques",
    audience: "Développeurs back et architectes",
  },
  {
    name: "Cloud, DevOps & Security",
    format: "2 jours • cas pratiques",
    audience: "Équipes infra et responsables IT",
  },
];

export default function FormationPage() {
  return (
    <>
      <PageHero
        title="Formation"
        subtitle="Des parcours tech orientés pratique pour renforcer rapidement les compétences de vos équipes digitales."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <AnimatedSection>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9fb5ff]">Formation et Expertise numérique</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-white">Formations techniques immersives</h2>
              <p className="mt-4 text-sm leading-7 text-[#b7c8ef]">
                Chaque module combine théorie, code review, exercices pratiques et bonnes pratiques
                d'industrialisation pour un impact direct sur vos projets.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-[#213a7b] bg-[#0c1737] p-4 shadow-soft">
              <Image
                src="/tech/dev-team.svg"
                alt="Équipe en formation technique"
                width={560}
                height={320}
                className="h-auto w-full rounded-xl"
              />
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {programs.map((program, idx) => (
            <AnimatedSection key={program.name} delay={idx * 0.08}>
              <article className="h-full rounded-2xl border border-[#213a7b] bg-[#0c1737] p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-2xl">
                <h3 className="text-lg font-semibold text-white">{program.name}</h3>
                <p className="mt-3 text-sm font-medium text-[#26e0ff]">{program.format}</p>
                <p className="mt-3 text-sm leading-7 text-[#b7c8ef]">Public cible : {program.audience}.</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
