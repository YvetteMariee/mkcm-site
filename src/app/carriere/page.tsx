import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import PageHero from "@/components/page-hero";

const benefits = [
  "Programmes de mentorat et progression continue",
  "Missions variées à forte valeur métier",
  "Culture collaborative et responsabilité partagée",
  "Organisation flexible et équilibre durable",
];

const offers = [
  "Consultant IT / PMO transformation digitale",
  "Ingénieur cloud, data ou cybersécurité",
  "Chef de projet digital orienté delivery",
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
              <h2 className="text-2xl font-semibold">Postes ciblés</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-brand-slate">
                {offers.map((offer) => (
                  <li key={offer} className="rounded-xl border border-brand-dark/10 bg-brand-light px-4 py-3">
                    {offer}
                  </li>
                ))}
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
              <Image
                src="/illustrations/stat-mobile.svg"
                alt="Croissance de carrière"
                width={240}
                height={120}
                className="mt-6"
              />
            </article>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.15}>
          <div className="mt-8 rounded-2xl bg-brand-dark px-7 py-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">Processus de recrutement</p>
            <div className="mt-4 grid gap-4 text-sm text-white/85 md:grid-cols-3">
              <p>1. Entretien découverte et échange sur votre projet professionnel.</p>
              <p>2. Cas pratique ou échange technique selon le poste visé.</p>
              <p>3. Rencontre finale et projection sur les premières missions.</p>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
