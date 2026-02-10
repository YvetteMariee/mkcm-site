import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import PageHero from "@/components/page-hero";

const benefits = [
  "Programmes de mentorat et progression continue",
  "Missions variées à forte valeur métier",
  "Culture collaborative et responsabilité partagée",
  "Organisation flexible et équilibre durable",
];

const profiles = [
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
              <h2 className="text-2xl font-semibold">Profils recherchés</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-brand-slate">
                {profiles.map((profile) => (
                  <li key={profile} className="rounded-lg bg-brand-light px-4 py-2">
                    {profile}
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
            </article>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.15}>
          <div className="mt-8 overflow-hidden rounded-3xl border border-brand-dark/10 bg-white shadow-soft md:flex md:items-center md:justify-between">
            <div className="p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-brand-orange">Environnement</p>
              <h3 className="mt-2 text-2xl font-semibold">Un cadre stimulant pour progresser vite</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-brand-slate">
                Nous favorisons l'apprentissage continu, l'autonomie dans l'exécution et la co-construction
                entre consultants pour faire grandir durablement les compétences.
              </p>
            </div>
            <Image
              src="/illustrations/stat-mobile.svg"
              alt="Évolution carrière"
              width={320}
              height={220}
              className="h-auto w-full max-w-[320px] bg-brand-light p-6"
            />
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
