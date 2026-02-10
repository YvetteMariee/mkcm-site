import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import PageHero from "@/components/page-hero";

const scopes = [
  "Audit d'organisation IT et gouvernance SI",
  "Schéma directeur et priorisation des chantiers",
  "Assistance au choix d'outils et de partenaires",
  "Pilotage de programmes de transformation",
];

const indicators = [
  { label: "Réduction des risques", value: "-35%" },
  { label: "Time-to-delivery", value: "-25%" },
  { label: "Visibilité exécutive", value: "+90%" },
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
              <div className="mt-6 overflow-hidden rounded-xl border border-brand-dark/10">
                <Image
                  src="/illustrations/mission.svg"
                  alt="Mission de consulting"
                  width={700}
                  height={300}
                  className="h-auto w-full bg-brand-light p-4"
                />
              </div>
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

      <section className="bg-white/70 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <h3 className="text-2xl font-semibold">Indicateurs d'impact type</h3>
          </AnimatedSection>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {indicators.map((item, idx) => (
              <AnimatedSection key={item.label} delay={idx * 0.08}>
                <div className="rounded-2xl border border-brand-dark/10 bg-white p-6 text-center shadow-soft">
                  <p className="text-3xl font-bold text-brand-orange">{item.value}</p>
                  <p className="mt-2 text-sm text-brand-slate">{item.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
