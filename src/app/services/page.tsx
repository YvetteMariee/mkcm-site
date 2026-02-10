import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import PageHero from "@/components/page-hero";

const serviceCards = [
  {
    title: "Transformation digitale",
    text: "Définition de roadmap, pilotage de portefeuille projets et accompagnement du changement.",
    image: "/illustrations/service-web.svg",
  },
  {
    title: "Architecture SI & Cloud",
    text: "Urbanisation, modernisation des applications et stratégie cloud hybride sécurisée.",
    image: "/illustrations/service-ui.svg",
  },
  {
    title: "Performance opérationnelle",
    text: "Optimisation des processus, automatisation et mise en place d'indicateurs de pilotage.",
    image: "/illustrations/service-mobile.svg",
  },
  {
    title: "Cybersécurité & conformité",
    text: "Évaluation des risques, plans de remédiation et alignement avec les exigences réglementaires.",
    image: "/illustrations/service-graphic.svg",
  },
  {
    title: "Data & pilotage",
    text: "Structuration des données, tableaux de bord décisionnels et amélioration continue orientée KPI.",
    image: "/illustrations/service-ux.svg",
  },
  {
    title: "PMO & delivery",
    text: "Gouvernance projet, cadence de delivery et sécurisation de la qualité de mise en production.",
    image: "/illustrations/service-ecommerce.svg",
  },
];

const engagements = [
  "Approche orientée ROI et impact métier",
  "Méthodes de delivery pragmatiques",
  "Documentation claire pour vos équipes",
  "Accompagnement au changement intégré",
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
              <article className="group h-full rounded-2xl border border-brand-dark/10 bg-white p-6 shadow-soft transition hover:-translate-y-1">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={72}
                  height={72}
                  className="rounded-xl bg-brand-light p-2"
                />
                <h2 className="mt-5 text-lg font-semibold">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-brand-slate">{service.text}</p>
                <div className="mt-5 h-1 w-10 rounded-full bg-brand-orange/80 transition group-hover:w-16" />
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="bg-white/70 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-5 md:items-center">
          <AnimatedSection>
            <div className="md:col-span-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">Notre engagement</p>
              <h2 className="mt-3 text-3xl font-semibold">Des services lisibles, pilotés et mesurables</h2>
              <ul className="mt-6 grid gap-3">
                {engagements.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-brand-dark/10 bg-white px-4 py-3 text-sm text-brand-slate"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Image
              src="/illustrations/objectives.svg"
              alt="Objectifs de mission"
              width={420}
              height={320}
              className="mx-auto w-full max-w-sm"
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
