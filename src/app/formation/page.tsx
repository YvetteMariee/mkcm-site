import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import PageHero from "@/components/page-hero";

const programs = [
  {
    name: "Fondamentaux Cloud & DevOps",
    format: "2 jours • présentiel ou distanciel",
    image: "/illustrations/stat-web.svg",
  },
  {
    name: "Conduite de projet agile",
    format: "3 demi-journées • atelier pratique",
    image: "/illustrations/stat-commerce.svg",
  },
  {
    name: "Cybersécurité opérationnelle",
    format: "2 jours • cas réels + plan d'actions",
    image: "/illustrations/stat-branding.svg",
  },
];

const highlights = [
  "Formateurs issus de missions terrain",
  "Exercices contextualisés à votre activité",
  "Supports de cours réutilisables",
  "Suivi post-session et plan d'action",
];

export default function FormationPage() {
  return (
    <>
      <PageHero
        title="Formation"
        subtitle="Des parcours concrets pour faire monter vos équipes en compétences techniques et méthodologiques."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-5 md:items-center">
          <AnimatedSection>
            <div className="md:col-span-3">
              <p className="text-sm leading-7 text-brand-slate">
                Nos programmes s'adaptent à vos niveaux de maturité, avec des contenus orientés pratique
                et un accompagnement post-formation pour sécuriser l'ancrage des compétences.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-brand-dark/10 bg-white px-4 py-3 text-sm text-brand-slate"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.12}>
            <Image
              src="/illustrations/objectives.svg"
              alt="Parcours de formation"
              width={420}
              height={300}
              className="mx-auto w-full max-w-sm"
            />
          </AnimatedSection>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {programs.map((program, idx) => (
            <AnimatedSection key={program.name} delay={idx * 0.08}>
              <article className="rounded-2xl border border-brand-dark/10 bg-white p-6 shadow-soft">
                <Image
                  src={program.image}
                  alt={program.name}
                  width={56}
                  height={56}
                  className="rounded-lg bg-brand-light p-2"
                />
                <h2 className="mt-4 text-lg font-semibold">{program.name}</h2>
                <p className="mt-2 text-sm text-brand-orange">{program.format}</p>
                <p className="mt-4 text-sm leading-7 text-brand-slate">
                  Sessions interactives, cas pratiques et plan d'application immédiat en contexte réel.
                </p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
