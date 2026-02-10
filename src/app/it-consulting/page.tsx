import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import PageHero from "@/components/page-hero";

const scopes = [
  "Audit d'organisation IT et gouvernance SI",
  "Schéma directeur et priorisation des chantiers",
  "Assistance au choix d'outils et de partenaires",
  "Pilotage de programmes de transformation",
];

const phases = [
  {
    step: "01",
    title: "Diagnostic",
    text: "Analyse des processus, de l'architecture actuelle et des contraintes organisationnelles.",
  },
  {
    step: "02",
    title: "Roadmap",
    text: "Définition des priorités, des dépendances et des jalons pour une exécution progressive.",
  },
  {
    step: "03",
    title: "Pilotage",
    text: "Suivi de la delivery, gestion des risques et arbitrage continu avec les parties prenantes.",
  },
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
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">Approche conseil</p>
              <h2 className="mt-3 text-2xl font-semibold">Du cadrage stratégique à l'exécution opérationnelle</h2>
              <p className="mt-4 text-sm leading-7 text-brand-slate">
                Nos consultants structurent votre trajectoire autour de décisions claires : quelles priorités,
                quels investissements, quelles compétences et quels indicateurs de succès. L'objectif est de
                concilier vision stratégique et exécution concrète sur le terrain.
              </p>
              <Image
                src="/illustrations/mission.svg"
                alt="Mission de consulting"
                width={520}
                height={260}
                className="mt-6 w-full rounded-xl border border-brand-dark/10 bg-brand-light p-3"
              />
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

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-semibold">Méthode d'intervention en 3 phases</h2>
          </AnimatedSection>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {phases.map((phase, idx) => (
              <AnimatedSection key={phase.step} delay={idx * 0.08}>
                <article className="h-full rounded-2xl border border-brand-dark/10 bg-brand-light p-6">
                  <p className="text-sm font-semibold text-brand-orange">{phase.step}</p>
                  <h3 className="mt-2 text-xl font-semibold">{phase.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-slate">{phase.text}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
