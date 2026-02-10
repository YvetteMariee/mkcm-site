import AnimatedSection from "@/components/animated-section";
import PageHero from "@/components/page-hero";

const scopes = [
  "Audit d'organisation IT et gouvernance SI",
  "Schéma directeur et priorisation des chantiers",
  "Assistance au choix d'outils et de partenaires",
  "Pilotage de programmes de transformation",
];

export default function ItConsultingPage() {
  return (
    <>
      <PageHero
        title="IT Consulting"
        subtitle="Nous alignons stratégie d'entreprise et décisions technologiques pour générer une valeur durable et mesurable."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-5">
          <AnimatedSection>
            <article className="rounded-2xl border border-brand-dark/10 bg-white p-8 shadow-soft md:col-span-3">
              <h2 className="text-2xl font-semibold">Approche conseil orientée résultats</h2>
              <p className="mt-4 text-sm leading-7 text-brand-slate">
                Nos consultants structurent votre trajectoire autour de décisions claires : quelles priorités,
                quels investissements, quelles compétences et quels indicateurs de succès. L'objectif est de
                concilier vision stratégique et exécution concrète sur le terrain.
              </p>
            </article>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <article className="rounded-2xl border border-brand-dark/10 bg-brand-light p-8 md:col-span-2">
              <h3 className="text-lg font-semibold">Périmètres d'intervention</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-brand-slate">
                {scopes.map((scope) => (
                  <li key={scope}>{scope}</li>
                ))}
              </ul>
            </article>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
