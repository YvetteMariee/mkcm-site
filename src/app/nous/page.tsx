import AnimatedSection from "@/components/animated-section";
import PageHero from "@/components/page-hero";

export default function NousPage() {
  return (
    <>
      <PageHero
        title="Nous"
        subtitle="Une équipe multidisciplinaire dédiée au consulting IT, à l'innovation numérique et à la réussite client."
      />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <AnimatedSection>
            <article className="rounded-2xl border border-brand-dark/10 bg-white p-7 shadow-soft">
              <h2 className="text-xl font-semibold">Notre mission</h2>
              <p className="mt-4 text-sm leading-7 text-brand-slate">
                Construire des solutions numériques responsables et évolutives, en combinant excellence
                technique et compréhension fine des besoins métiers.
              </p>
            </article>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <article className="rounded-2xl border border-brand-dark/10 bg-white p-7 shadow-soft">
              <h2 className="text-xl font-semibold">Notre vision</h2>
              <p className="mt-4 text-sm leading-7 text-brand-slate">
                Devenir un partenaire stratégique de confiance pour les entreprises qui veulent transformer
                durablement leur performance digitale.
              </p>
            </article>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
