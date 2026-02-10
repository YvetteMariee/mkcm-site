import AnimatedSection from "@/components/animated-section";
import PageHero from "@/components/page-hero";

const programs = [
  {
    name: "Fondamentaux Cloud & DevOps",
    format: "2 jours • présentiel ou distanciel",
  },
  {
    name: "Conduite de projet agile",
    format: "3 demi-journées • atelier pratique",
  },
  {
    name: "Cybersécurité opérationnelle",
    format: "2 jours • cas réels + plan d'actions",
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
        <AnimatedSection>
          <p className="max-w-3xl text-sm leading-7 text-brand-slate">
            Nos programmes s'adaptent à vos niveaux de maturité, avec des contenus orientés pratique
            et un accompagnement post-formation pour sécuriser l'ancrage des compétences.
          </p>
        </AnimatedSection>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {programs.map((program, idx) => (
            <AnimatedSection key={program.name} delay={idx * 0.08}>
              <article className="rounded-2xl border border-brand-dark/10 bg-white p-6 shadow-soft">
                <h2 className="text-lg font-semibold">{program.name}</h2>
                <p className="mt-3 text-sm text-brand-slate">{program.format}</p>
                <p className="mt-4 text-sm leading-7 text-brand-slate">
                  Sessions interactives, exercices contextualisés et support réutilisable par vos équipes.
                </p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
