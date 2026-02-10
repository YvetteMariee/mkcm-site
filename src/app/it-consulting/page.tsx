import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import PageHero from "@/components/page-hero";

const scopes = [
  "Audit d'organisation IT et gouvernance SI",
  "Schéma directeur et priorisation des chantiers",
  "Assistance au choix de stack et d'outils",
  "Pilotage de programmes de transformation digitale",
];

const indicators = [
  { label: "Réduction des incidents", value: "-35%" },
  { label: "Time-to-delivery", value: "-25%" },
  { label: "Disponibilité services", value: "+99.9%" },
];

export default function ItConsultingPage() {
  return (
    <>
      <PageHero
        title="IT Consulting"
        subtitle="Conseil technologique pour aligner architecture, delivery et performance digitale avec vos objectifs business."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-5">
          <AnimatedSection>
            <article className="rounded-2xl border border-[#213a7b] bg-[#0c1737] p-8 shadow-soft md:col-span-3">
              <h2 className="text-2xl font-semibold text-white">Approche conseil orientée exécution</h2>
              <p className="mt-4 text-sm leading-7 text-[#b7c8ef]">
                Nos consultants structurent votre trajectoire technologique avec une vision claire :
                architecture cible, gouvernance de delivery, sécurité et indicateurs d'impact.
              </p>
              <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/tech/cloud-secure.svg"
                  alt="Infrastructure cloud sécurisée"
                  width={700}
                  height={300}
                  className="h-auto w-full"
                />
              </div>
            </article>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <article className="rounded-2xl border border-[#213a7b] bg-[#0f1c42] p-8 md:col-span-2">
              <h3 className="text-lg font-semibold text-white">Périmètres d'intervention</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-[#b7c8ef]">
                {scopes.map((scope) => (
                  <li key={scope}>{scope}</li>
                ))}
              </ul>
            </article>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[#08122a] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <h3 className="text-2xl font-semibold text-white">Indicateurs d'impact</h3>
          </AnimatedSection>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {indicators.map((item, idx) => (
              <AnimatedSection key={item.label} delay={idx * 0.08}>
                <div className="rounded-2xl border border-[#213a7b] bg-[#0c1737] p-6 text-center shadow-soft">
                  <p className="text-3xl font-bold text-[#26e0ff]">{item.value}</p>
                  <p className="mt-2 text-sm text-[#b7c8ef]">{item.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
