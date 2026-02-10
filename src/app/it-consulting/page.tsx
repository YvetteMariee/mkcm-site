import AnimatedSection from "@/components/animated-section";
import PageHero from "@/components/page-hero";

export default function ItConsultingPage() {
  return (
    <>
      <PageHero
        title="IT Consulting"
        subtitle="Nous alignons stratégie d'entreprise et décisions technologiques pour maximiser la valeur de votre SI."
      />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <AnimatedSection>
          <div className="rounded-2xl border border-brand-dark/10 bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold">Approche conseil orientée résultats</h2>
            <p className="mt-4 leading-7 text-brand-slate">
              Nos consultants accompagnent vos équipes dans la définition d&apos;une trajectoire réaliste : cadrage,
              priorisation des investissements, gouvernance projet et suivi d&apos;indicateurs de performance.
            </p>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
