import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import PageHero from "@/components/page-hero";

const serviceCards = [
  {
    title: "Développement Web & Apps",
    text: "Applications front-end/back-end, API métier, et plateformes digitales orientées performance.",
    icon: "/tech/code-lab.svg",
  },
  {
    title: "Architecture Logicielle",
    text: "Structuration des systèmes, microservices, intégration continue et urbanisation SI.",
    icon: "/tech/network-grid.svg",
  },
  {
    title: "Cloud & DevOps",
    text: "Conteneurisation, CI/CD, observabilité et déploiements cloud sécurisés.",
    icon: "/tech/cloud-secure.svg",
  },
  {
    title: "Cybersécurité",
    text: "Hardening applicatif, revue sécurité, gouvernance et plans de remédiation.",
    icon: "/tech/cloud-secure.svg",
  },
  {
    title: "UI/UX & Dashboards",
    text: "Interfaces modernes, parcours utilisateurs fluides et dashboards de pilotage.",
    icon: "/tech/dashboard-ui.svg",
  },
  {
    title: "Software Delivery",
    text: "PMO technique, pilotage agile et qualité de mise en production.",
    icon: "/tech/dev-team.svg",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        subtitle="Des solutions IT et digitales concrètes pour concevoir, déployer et faire évoluer vos systèmes d'information."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service, idx) => (
            <AnimatedSection key={service.title} delay={idx * 0.06}>
              <article className="group h-full rounded-2xl border border-[#213a7b] bg-[#0c1737] p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-2xl">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={68}
                  height={68}
                  className="rounded-xl border border-white/10"
                />
                <h2 className="mt-5 text-lg font-semibold text-white">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#b7c8ef]">{service.text}</p>
                <div className="mt-5 h-1 w-16 rounded-full bg-[#26e0ff]/70 transition group-hover:w-24" />
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
