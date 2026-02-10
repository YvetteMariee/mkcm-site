import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import PageHero from "@/components/page-hero";

const serviceCards = [
  {
    title: "Transformation digitale",
    text: "Définition de roadmap, pilotage de portefeuille projets et accompagnement du changement.",
    icon: "/illustrations/service-web.svg",
  },
  {
    title: "Architecture SI & Cloud",
    text: "Urbanisation, modernisation des applications et stratégie cloud hybride sécurisée.",
    icon: "/illustrations/service-mobile.svg",
  },
  {
    title: "Performance opérationnelle",
    text: "Optimisation des processus, automatisation et mise en place d'indicateurs de pilotage.",
    icon: "/illustrations/service-ecommerce.svg",
  },
  {
    title: "Cybersécurité & conformité",
    text: "Évaluation des risques, plans de remédiation et alignement avec les exigences réglementaires.",
    icon: "/illustrations/service-ux.svg",
  },
  {
    title: "Data & pilotage",
    text: "Structuration des données, tableaux de bord décisionnels et amélioration continue orientée KPI.",
    icon: "/illustrations/service-ui.svg",
  },
  {
    title: "PMO & delivery",
    text: "Gouvernance projet, cadence de delivery et sécurisation de la qualité de mise en production.",
    icon: "/illustrations/service-graphic.svg",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        subtitle="Un catalogue d'interventions pragmatiques pour cadrer, déployer et pérenniser vos projets IT."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service, idx) => (
            <AnimatedSection key={service.title} delay={idx * 0.06}>
              <article className="group h-full rounded-2xl border border-brand-dark/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-2xl">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={68}
                  height={68}
                  className="rounded-xl bg-brand-light p-2"
                />
                <h2 className="mt-5 text-lg font-semibold">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-brand-slate">{service.text}</p>
                <div className="mt-5 h-1 w-16 rounded-full bg-brand-orange/70 transition group-hover:w-24" />
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="bg-white/70 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <div className="rounded-3xl border border-brand-dark/10 bg-brand-dark p-8 text-white md:flex md:items-center md:justify-between md:gap-10">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-brand-orange">Notre promesse</p>
                <h3 className="mt-2 text-2xl font-semibold">Une exécution maîtrisée, orientée résultat.</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80">
                  Chaque mission est conduite avec des jalons clairs, des indicateurs mesurables et un
                  reporting compréhensible pour les équipes métier comme techniques.
                </p>
              </div>
              <Image
                src="/illustrations/objectives.svg"
                alt="Objectifs de mission"
                width={220}
                height={180}
                className="mt-6 w-full max-w-[220px] md:mt-0"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
