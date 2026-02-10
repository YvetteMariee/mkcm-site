import AnimatedSection from "@/components/animated-section";
import PageHero from "@/components/page-hero";

const services = [
  "Pilotage de transformation digitale",
  "Architecture SI & cloud hybride",
  "Data et automatisation des processus",
  "Cybersécurité et conformité",
  "PMO et delivery management",
  "Optimisation des opérations IT",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        subtitle="Des interventions modulaires pour structurer, moderniser et sécuriser votre écosystème numérique."
      />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, idx) => (
            <AnimatedSection key={service} delay={idx * 0.08}>
              <div className="rounded-xl border border-brand-dark/10 bg-white p-6 shadow-soft">
                <p className="text-lg font-medium">{service}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
