import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import PageHero from "@/components/page-hero";

const benefits = [
  "Mentorat technique et progression continue",
  "Projets software variés à fort impact",
  "Culture engineering, qualité et entraide",
  "Organisation flexible et orientée résultats",
];

const profiles = [
  "Développeur Front-end / Full-Stack",
  "Ingénieur Back-end / Cloud",
  "Consultant IT / Delivery Manager",
];

export default function CarrierePage() {
  return (
    <>
      <PageHero
        title="Carrière"
        subtitle="Rejoignez une équipe passionnée par le code, l'innovation digitale et la qualité logicielle."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <AnimatedSection>
            <article className="rounded-2xl border border-[#213a7b] bg-[#0c1737] p-8 shadow-soft">
              <h2 className="text-2xl font-semibold text-white">Profils recherchés</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[#b7c8ef]">
                {profiles.map((profile) => (
                  <li key={profile} className="rounded-lg border border-[#2a478f] bg-[#10204a] px-4 py-2">
                    {profile}
                  </li>
                ))}
              </ul>
            </article>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <article className="rounded-2xl border border-[#213a7b] bg-[#0f1c42] p-8">
              <h2 className="text-2xl font-semibold text-white">Pourquoi nous rejoindre</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-[#b7c8ef]">
                {benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </article>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.15}>
          <div className="mt-8 overflow-hidden rounded-3xl border border-[#213a7b] bg-[#0c1737] shadow-soft md:flex md:items-center md:justify-between">
            <div className="p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-[#26e0ff]">Engineering Culture</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Un environnement pensé pour les talents tech</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#b7c8ef]">
                Pair programming, feedback continu, standards de code et responsabilisation pour faire évoluer
                rapidement vos compétences sur des produits numériques concrets.
              </p>
            </div>
            <Image
              src="/tech/dashboard-ui.svg"
              alt="Culture d'équipe technique"
              width={320}
              height={220}
              className="h-auto w-full max-w-[320px] border-l border-white/10"
            />
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
