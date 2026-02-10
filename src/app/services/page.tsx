import AnimatedSection from "@/components/animated-section";
import PageHero from "@/components/page-hero";

const serviceCards = [
  {
    title: "Transformation digitale",
    text: "Définition de roadmap, pilotage de portefeuille projets et accompagnement du changement.",
  },
  {
    title: "Architecture SI & Cloud",
    text: "Urbanisation, modernisation des applications et stratégie cloud hybride sécurisée.",
  },
  {
    title: "Performance opérationnelle",
    text: "Optimisation des processus, automatisation et mise en place d'indicateurs de pilotage.",
  },
  {
    title: "Cybersécurité & conformité",
    text: "Évaluation des risques, plans de remédiation et alignement avec les exigences réglementaires.",
  },
  {
    title: "Data & pilotage",
    text: "Structuration des données, tableaux de bord décisionnels et amélioration continue orientée KPI.",
  },
  {
    title: "PMO & delivery",
    text: "Gouvernance projet, cadence de delivery et sécurisation de la qualité de mise en production.",
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
              <article className="h-full rounded-2xl border border-brand-dark/10 bg-white p-6 shadow-soft">
                <h2 className="text-lg font-semibold">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-brand-slate">{service.text}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
