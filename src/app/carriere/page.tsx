import AnimatedSection from "@/components/animated-section";
import PageHero from "@/components/page-hero";

export default function CarrierePage() {
  return (
    <>
      <PageHero
        title="Carrière"
        subtitle="Rejoignez un collectif d'experts passionnés par l'impact concret de la technologie dans les organisations."
      />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <AnimatedSection>
          <div className="rounded-2xl border border-brand-dark/10 bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold">Ce que nous recherchons</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-brand-slate">
              <li>Esprit analytique et rigueur opérationnelle</li>
              <li>Culture produit et sens du service client</li>
              <li>Curiosité technologique et collaboration</li>
            </ul>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
