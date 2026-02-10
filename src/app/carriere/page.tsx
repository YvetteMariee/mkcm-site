import AnimatedSection from "@/components/animated-section";
import PageHero from "@/components/page-hero";

const benefits = [
  "Programmes de mentorat et progression continue",
  "Missions variées à forte valeur métier",
  "Culture collaborative et responsabilité partagée",
  "Organisation flexible et équilibre durable",
];

export default function CarrierePage() {
  return (
    <>
      <PageHero
        title="Carrière"
        subtitle="Rejoignez un collectif d'experts qui place l'excellence technique et l'impact client au cœur de chaque mission."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <AnimatedSection>
            <article className="rounded-2xl border border-brand-dark/10 bg-white p-8 shadow-soft">
              <h2 className="text-2xl font-semibold">Profils recherchés</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-brand-slate">
                <li>Consultant IT / PMO transformation digitale</li>
                <li>Ingénieur cloud, data ou cybersécurité</li>
                <li>Chef de projet digital orienté delivery</li>
              </ul>
            </article>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <article className="rounded-2xl border border-brand-dark/10 bg-brand-light p-8">
              <h2 className="text-2xl font-semibold">Pourquoi nous rejoindre</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-brand-slate">
                {benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </article>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
